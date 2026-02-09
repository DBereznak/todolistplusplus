<script lang="ts" setup>
import { ref, inject, type Ref } from 'vue'
import ErrorDialog from './ErrorDialog.vue'
import type { List } from '@/types'
import { Priority, Status } from '@/types'
const items = inject('items') as Ref<Array<List>>
const newItemText = ref('')
const newNotesText = ref('')
const showDialog = ref(false)
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
      notes: newNotesText.value.trim(),
    })
    newItemText.value = ''
    newNotesText.value = ''
  } else {
    showDialog.value = true
  }
  console.log('Add item:', newItemText.value)
}
</script>

<template>
  <div>
    <h2>Add New Item</h2>
    <input type="text" name="new-item" placeholder="New item" v-model="newItemText" />
    <textarea
      name="description"
      rows="4"
      v-model="newNotesText"
      placeholder="Add notes here if you want."
    ></textarea>
    <button @click="addItem()">Add</button>
    <ErrorDialog v-if="showDialog" @close="showDialog = false" message="New Item input required." />
  </div>
</template>

<style scoped>
div {
  margin-bottom: 20px;
  display: grid;
  width: 50%;
  gap: 10px;
}
</style>
