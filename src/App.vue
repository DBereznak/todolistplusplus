<script setup lang="ts">
import { provide, ref } from 'vue'
import ToDoList from './components/ToDoList.vue'
import AddItem from './components/AddItem.vue'
const items = ref([
  { id: 1, text: 'Learn Vue.js' },
  { id: 2, text: 'Build a to-do app' },
  { id: 3, text: 'Master TypeScript' },
])
provide('items', items)
</script>

<template>
  <AddItem />
  <ToDoList />
</template>

<style scoped></style>
