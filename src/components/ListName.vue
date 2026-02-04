<script lang="ts" setup>
import { ref } from 'vue'
const listName = ref('')
const editName = ref(false)

if (listName.value === '') {
  editName.value = true
}
const saveListName = () => {
  localStorage.setItem('list-name', JSON.stringify({ listName: listName.value }))
  editName.value = !editName.value
}
</script>

<template>
  <h1>{{ listName === '' ? 'Lets start by naming your list' : listName }}</h1>
  <input type="text" placeholder="Enter list name here" v-model="listName" v-if="editName" />
  <button @click="saveListName()">{{ listName === '' ? 'Add' : 'Edit' }} Name</button>
</template>
