<template>
    <div class="row flex flex-center">
      <div class="col-5 q-mt-xl q-pl-lg q-pr-md">
        <q-card class=" q-mt-md">
          <h5 class="bg-teal-6 text-white q-py-md text-center q-ma-none">Create Account</h5>
          <div class="q-pa-md q-mt-md">
          <q-input class="q-mb-md" filled label="Email" v-model="user.email">
            <template v-slot:append>
              <q-icon name="email"/>
            </template>
          </q-input>
          <q-input class="q-mb-md" type="password" filled label="Password" v-model="user.password">
            <template v-slot:append>
              <q-icon name="lock"/>
            </template>
          </q-input>
          <q-btn class="full-width bg-teal-6 text-white q-mt-lg q-mb-md" :loading="loading"  icon="login" label="Login" @click="login" />
          <div>Do you need account?</div>
          <q-btn class="full-width bg-grey-5 text-white" icon="app_registration" label="Create Account" @click="$router.push('/create')" />
        </div>
        </q-card>
      </div>
    </div>
</template>

<script>
import {useAppStore} from "stores/app";
import {useAuthStore} from "stores/auth";
import {Notify} from "quasar";
export default {
  data() {
    return {
      user: {
        email: null,
        password: null
      },
      appStore: useAppStore(),
      authStore: useAuthStore(),
      loading: false
    }
  },
  methods: {
    login() {
      this.loading = true
      const request = {
        method: 'post',
        url: 'login',
        data: this.user,
        // show_errors: true
      }
      this.appStore.send_request(request).then(res => {
        if(res?.data && res.status === 200) {
          this.authStore.storeAuthData(res.data)
          Notify.create({
            position: 'top',
            color: 'positive',
            icon: 'done',
            message: res.data.message
          })
          this.$router.push('/')
        }
        this.loading = false
      }).catch(error => {
        this.loading = false
        if(error?.response?.data && typeof error?.response?.data == 'string') {
          Notify.create({
            position: 'top',
            color: 'negative',
            icon: 'warning',
            message: error.response.data
          })
        }
      })
    }
  }
}
</script>

