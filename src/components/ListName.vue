<script lang="ts" setup>
import { ref, inject, type Ref, computed } from 'vue'
const name = inject('name') as Ref<string>
const listName = computed({
  get: () => {
    return name.value || ''
  },
  set: (value) => {
    name.value = value
  },
})

const editName = ref(false)

const saveListName = () => {
  localStorage.setItem('list-name', JSON.stringify(listName.value || ''))
  editName.value = !editName.value
  console.log(editName.value)
}
</script>

<template>
  <div class="list-name">
    <h1 v-if="!editName">{{ listName ? listName : 'Enter a Name for your list' }}</h1>
    <input
      type="text"
      :placeholder="listName ? listName : 'Enter a Name for your list'"
      v-model="listName"
      v-if="editName"
    />
    <button @click="saveListName()">{{ listName ? 'Edit' : 'Add' }} Name</button>
  </div>
</template>

<style scoped>
.list-name {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.list-name h1 {
  font-size: 2em;
  color: #25343f;
}
.list-name input {
  font-size: 1.5em;
  padding: 5px;
  border: 2px solid #25343f;
  border-radius: 4px;
}
.list-name button {
  padding: 5px 10px;
  font-size: 1em;
  background-color: #ff9b51;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.list-name button:hover {
  background-color: #e68a3c;
}
</style>
