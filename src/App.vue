<script setup lang="ts">
import { provide, ref, onMounted } from 'vue'
import ToDoList from './components/ToDoList.vue'
import AddItem from './components/AddItem.vue'
import SaveButton from './components/SaveButton.vue'
import EmptyList from './components/EmptyList.vue'
import ListName from './components/ListName.vue'
const items = ref([])
const name = ref('')

onMounted(() => {
  items.value = JSON.parse(localStorage.getItem('todo-items') || '[]')
  name.value = JSON.parse(localStorage.getItem('list-name') || '')
})

provide('items', items)
provide('name', name)
</script>

<template>
  <header>
    <h1>ToDo List ++</h1>
  </header>
  <section class="main-section">
    <ListName />
    <AddItem />
    <EmptyList v-if="items.length === 0" />
    <div v-else>
      <ToDoList />
      <SaveButton />
    </div>
  </section>
</template>
.
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Proza+Libre:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');

body {
  font-family: 'Inter', 'Proza Libre', sans-serif;
  background-color: #bfc9d1;
  margin: 0;
  padding: 0;
}

.main-section {
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #25343f;
  border-radius: 8px;
  background-color: #eaefef;
}

header {
  text-align: center;
  margin-bottom: 20px;
  h1 {
    font-size: 2.5em;
    color: #ff9b51;
  }
}
</style>
