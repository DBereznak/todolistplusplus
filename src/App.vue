<script setup lang="ts">
import { provide, ref, onMounted } from 'vue'
import ToDoList from './components/ToDoList.vue'
import AddItem from './components/AddItem.vue'
import SaveButton from './components/SaveButton.vue'
import EmptyList from './components/EmptyList.vue'
const items = ref([])

onMounted(() => {
  items.value = JSON.parse(localStorage.getItem('todo-items') || '[]')
})

provide('items', items)
</script>

<template>
  <AddItem />
  <EmptyList v-if="items.length === 0" />
  <div v-else>
    <ToDoList />
    <SaveButton />
  </div>
</template>

<style scoped></style>
