<template>
    <div class="row flex flex-center">
      <div class="col-5 q-mt-xl q-pl-lg q-pr-md">
        <q-card class=" q-mt-md">
          <h5 class="bg-teal-6 text-white q-py-md text-center q-ma-none">Create Account</h5>
          <div class="q-pa-md q-mt-md">
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
          <q-btn class="full-width bg-teal-6 text-white q-mt-lg q-mb-md"  icon="login" label="login here" />
          <div>Do you need account?</div>
          <q-btn class="full-width bg-grey-5 text-white" icon="app_registration" label="Create Account" @click="$router.push('/create')" />
        </div>
        </q-card>
      </div>
    </div>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

