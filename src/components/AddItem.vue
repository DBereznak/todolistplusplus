<script lang="ts" setup>
import { ref, inject, type Ref } from 'vue'
const items = inject('items') as Ref<Array<{ id: number; text: string }>>
const newItemText = ref('')
const addItem = () => {
  if (newItemText.value.trim() !== '') {
    const newId = items.value.length ? Math.max(...items.value.map((item) => item.id)) + 1 : 1
    items.value.push({ id: newId, text: newItemText.value.trim() })
    newItemText.value = ''
  } else {
    alert('Item text cannot be empty.')
  }
  console.log('Add item:', newItemText.value)
}
</script>

<template>
  <div>
    <h2>Add New Item</h2>
    <input type="text" placeholder="New item" v-model="newItemText" />
    <button @click="addItem()">Add</button>
  </div>
</template>
