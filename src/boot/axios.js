import { boot } from 'quasar/wrappers'
import axios from 'axios'
import {Cookies, LocalStorage} from "quasar";
import {useAuthStore} from "stores/auth";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL:   process.env.API_URL + '/api' })
// const api = axios.create({ baseURL: (process.env.API_URL + '/api') })

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  api.defaults.withCredentials = true
  api.interceptors.request.use( async (config) => {
    const state = useAuthStore();
    if ((state.csrfToken === null && state.csrfToken === '') && config.url !== 'sanctum/csrf-cookie') {
      await api.get("sanctum/csrf-cookie").then((res) => {
        let token = Cookies.get('XSRF-TOKEN')
        LocalStorage.set('csrfToken', token)
      })
    }
    config.headers["X-XSRF-TOKEN"] = state.csrfToken;
    let userToken = LocalStorage.getItem("userToken");
    if (userToken && userToken !== null && userToken !== '' && userToken !== undefined) {
      config.headers["Authorization"] = "Bearer " + userToken;
    }
    return config;
  })
})

export { api }
