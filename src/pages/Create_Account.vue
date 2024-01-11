<template>
  <!-- <q-page padding> -->
    <div class="row flex flex-center">
      <div class="col-5 q-pl-lg q-pr-md">
        <q-card class=" q-mt-xs">
          <h5 class="bg-teal-6 text-white q-py-md text-center q-ma-none">Create Account</h5>
          <div class="q-pa-md q-mt-md">
            <q-input class="q-mb-md" filled label="Name">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input class="q-mb-md" filled label="Email">
            <template v-slot:append>
              <q-icon name="email"/>
            </template>
          </q-input>
          <q-input class="q-mb-md" filled label="Password">
            <template v-slot:append>
              <q-icon name="lock"/>
            </template>
          </q-input>
          <q-input class="q-mb-md" filled label="Address">
            <template v-slot:append>
              <q-icon name="home"/>
            </template>
          </q-input>
          <q-btn class="full-width bg-teal-6 text-white q-mt-lg q-mb-md" icon="app_registration" label="Create Account" />
          <div>Already have an account?</div>
          <q-btn class="full-width bg-grey-4 text-white" icon="login" label="login here" @click="$router.push('/login')" />
        </div>
        </q-card>
      </div>
    </div>
  <!-- </q-page> -->
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
