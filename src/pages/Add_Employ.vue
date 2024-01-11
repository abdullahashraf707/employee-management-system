<template>
  <q-page padding>
    <div class="row flex flex-center">
      <div class="col-5 q-pl-lg q-pr-md">
        <q-card class="q-mt-md q-pa-md">
          <h4 class="text-center q-mb-lg q-pb-sm q-mt-md q-ma-none">Add Employ</h4>
          <q-input class="q-mb-md" filled label="name" />
          <q-input class="q-mb-md" filled label="email" />
          <q-input class="q-mb-md" filled label="address" />
          <q-input class="q-mb-md" filled label="salary" />
          <q-input class="q-mb-md" type="date" filled label="join date" />
          <q-select class="q-mb-md" filled label="select company" />
          <q-btn class="full-width bg-primary text-white q-mt-lg q-mb-sm" icon="add" label="add employ" />
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  // name: 'PageName',
}
</script>
