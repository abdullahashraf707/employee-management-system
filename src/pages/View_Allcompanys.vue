<template>
  <q-page padding>
      <h4 class="text-center q-ma-none q-my-lg">View All Companies</h4>
      <div class="q-pa-md">
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      class="shadow-2"
    />
  </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: 'id',
    required: true,
    label: 'id',
    align: 'left',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'name', align: 'center', label: 'Name', field: 'name' },
  { name: 'ceo', align: 'center', label: ' ceo', field: 'ceo', },
  { name: 'logo', align: 'center', label: 'logo', field: 'logo' },
  { name: 'actions', align: 'center', label: 'Actions', field: 'action' }
]

const rows = [

]

export default {
  data () {
    return {
      columns,
      rows
    }
  }
}
</script>
