<script lang="ts" setup>
import { ref, inject, type Ref } from 'vue'
import type { List } from '@/types'
import { Priority, Status } from '@/types'
const items = inject('items') as Ref<Array<List>>
const newItemText = ref('')
const newDescriptionText = ref('')
const addItem = () => {
  const date = new Date().toLocaleDateString()
  if (newItemText.value.trim() !== '') {
    const newId = items.value.length ? Math.max(...items.value.map((item) => item.id)) + 1 : 1
    items.value.push({
      id: newId,
      text: newItemText.value.trim(),
      createdOn: date,
      status: Status.Pending,
      priority: Priority.Normal,
      description: newDescriptionText.value.trim(),
    })
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
    <br />
    <br />
    <textarea
      v-model="newDescriptionText"
      placeholder="Add notes or a description here if you want."
    ></textarea>
    <br />

    <button @click="addItem()">Add</button>
  </div>
</template>
