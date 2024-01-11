<template>
  <q-page padding>
      <h4 class="text-center q-ma-none q-my-lg">View All Empolys</h4>
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
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'email', align: 'center', label: 'Email', field: 'email' },
  { name: 'address', align: 'center', label: ' Address', field: 'address', },
  { name: 'salary', align: 'center', label: 'Salary', field: 'salary' },
  { name: 'join_date', align: 'center', label: 'Join_date', field: 'join_date' },
  { name: 'company name', align: 'center', label: 'Company Name', field: 'company name' },
  { name: 'actions', align: 'center', label: 'Actions', field: 'action' }

]

const rows = [
 {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
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
