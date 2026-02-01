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
  <section class="main-section">
    <AddItem />
    <EmptyList v-if="items.length === 0" />
    <div v-else>
      <ToDoList />
      <SaveButton />
    </div>
  </section>
</template>
.
<style scoped>
.main-section {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>
