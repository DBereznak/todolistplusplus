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
    <h3>Its a todo app plus so much more</h3>
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
}

header h1 {
  font-size: 2.5em;
  color: #25343f;
}
header h3 {
  font-size: 1.2em;
  color: #25343f;
}
input,
textarea {
  color: #25343f;
  width: 50%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #25343f;
  border-radius: 5px;
  font-size: 1em;
}
button {
  background-color: #ff9b51;
  font-size: 1em;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  max-width: 200px;
}
button:hover {
  background-color: #e68a3c;
}

h1 {
  font-size: 2em;
  color: #25343f;
}

select {
  color: #25343f;
  padding: 5px;
  border: 2px solid #25343f;
  border-radius: 5px;
  font-size: 1em;
  margin: 20px;
}

label {
  font-size: 1em;
  font-weight: bold;
  color: #25343f;
}

p {
  font-size: 1.2em;
  color: #25343f;
}

h2 {
  color: #25343f;
  margin: 0;
}
</style>
