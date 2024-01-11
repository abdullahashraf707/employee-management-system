import { defineStore } from 'pinia'
import {Cookies, LocalStorage} from "quasar";
import {useAppStore} from "stores/app";
export const useAuthStore = defineStore('auth', {
  state: () => ({
    csrfToken: LocalStorage.has('csrfToken') ? LocalStorage.getItem('csrfToken') : null,
    userToken: LocalStorage.has('userToken') ? LocalStorage.getItem('userToken') : null,
    currentUser: LocalStorage.has('currentUser') ? LocalStorage.getItem('currentUser') : null,
  }),
  getters: {
    current_user: (state) => state.currentUser
  },
  actions: {
    storeAuthData(data) {
      if(data.token) {
        this.userToken = data.token
        LocalStorage.set('userToken', this.userToken)
      }
      if(data.user) {
        this.currentUser = data.user
        LocalStorage.set('currentUser', this.currentUser)
      }
    },
    destroyAuthData() {
      this.userToken = null
      this.currentUser = null
      LocalStorage.remove('userToken')
      LocalStorage.remove('currentUser')
    }
  }
})
