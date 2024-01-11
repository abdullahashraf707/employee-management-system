import { defineStore } from 'pinia'
import {Loading, LocalStorage, Notify} from "quasar";
import {api} from "boot/axios";
import {useAuthStore} from "stores/auth";

export const useAppStore = defineStore('app', {
  state: () => ({
    pageData: null
  }),

  getters: {
    page_data: (state) => state.pageData
  },

  actions: {
    async send_request (data) {

      if (data.loading){
        Loading.show({
          spinnerColor: 'negative'
        })
      }
      return await api.request({
        method: data.method,
        url: data.url,
        data: data.data ? data.data : {},
        params: data.method.toLowerCase() === "get" ? data.data : null,
        responseType: data.responseType ? data.responseType : "json",
        headers: data.headers ? data.headers : {},
      }).then(response =>{
        if (data?.loading ?? true){
          Loading.hide()
        }
        if (typeof data.success === 'function') {
          return data.success(response, this.$router)
        }
        if (data?.objName) {
          let res_data = {} ;
          res_data[data.objName] =  response.data;
          this.setPageData(res_data);
        }
        return Promise.resolve(response)
      }).catch(error =>{
        // console.log(error, 'custom error')
        if (data?.loading ?? true){
          Loading.hide()
        }
        if (error.response.status === 401){
          localStorage.removeItem('userToken');
          localStorage.removeItem('currentUser');
          useAuthStore().currentUser=null
          useAuthStore().userToken=null
          this.router.push('/auth/login')
        }
        if (error.response !== undefined && error.response.data !== undefined && error.response.data.errors !== undefined && data?.show_errors) {
          for (const [key, err] of Object.entries(error.response.data.errors)) {

            Notify.create({
              color: 'negative',
              position: 'top',
              message: err[0],
              // message: key + ': ' + err[0],
              icon: 'report_problem'
            })
          }
        }
        let message = error.message
        if (error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined) {
          message = error.response.data.message
        }
        if (message && message !=='' && !error.response.data.errors && !data?.hide_errors){
          Notify.create({
            color: 'negative',
            position: 'top',
            message: message,
            icon: 'report_problem'
          })
        }
        Loading.hide()
        return Promise.reject(error)
      })
    },

    setPageData (data) {
      if (!data && data === null || data === '' || data === undefined) {
        this.pageData = null
      } else {
        if (this.pageData === null) {
          this.pageData = data
        } else {
          const pageData = this.pageData
          this.pageData = Object.assign(pageData, data)
        }
      }
    },

  }
})
