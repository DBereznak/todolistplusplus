<script setup lang="ts">
import { provide, ref, onMounted } from 'vue'
import ToDoList from './components/ToDoList.vue'
import AddItem from './components/AddItem.vue'
import SaveButton from './components/SaveButton.vue'
const items = ref([
  { id: 1, text: 'Learn Vue.js' },
  { id: 2, text: 'Build a to-do app' },
  { id: 3, text: 'Master TypeScript' },
])
onMounted(() => {
  console.log(localStorage.getItem('todo-items'))
  items.value = JSON.parse(localStorage.getItem('todo-items') || '[]')
})

provide('items', items)
</script>

<template>
  <AddItem />
  <ToDoList />
  <SaveButton />
</template>

<style scoped></style>
