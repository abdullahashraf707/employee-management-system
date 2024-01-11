<template>
  <q-page>
    <div class="row flex flex-center">
      <div class="col-5 q-mt-lg q-pl-lg q-pr-md">
        <q-card class="q-mt-xl q-pa-md">
          <h4 class="text-center q-mb-lg q-pb-sm q-mt-md q-ma-none">Add Company</h4>
          <q-input class="q-mb-md" filled label="Name" />
          <q-input class="q-mb-md" filled label="CEO" />
          <q-input class="q-mb-md" filled label="Logo">
            <template v-slot:append>
              <q-icon name="attach_file"/>
            </template>
          </q-input>
          <q-btn class="full-width bg-primary text-white q-mt-lg q-mb-sm" icon="add" label="add company" />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
