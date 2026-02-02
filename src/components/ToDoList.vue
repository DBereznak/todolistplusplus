<script lang="ts" setup>
import { inject, type Ref } from 'vue'
import ListItem from './ListItem.vue'
import type { List } from '@/types'
const items = inject('items') as Ref<Array<List>>
console.log('ToDoList items:', items.value)
</script>
<template>
  <div class="todo-list">
    <h1>My To-Do List</h1>
    <ul>
      <ListItem v-for="item in items" :key="item.id" :id="item.id">
        <div>
          {{ item.text }}
        </div>
        <div>Created On : {{ item.createdOn }}</div>
        <div>Status: {{ item.status }}</div>
        <div>Priority: {{ item.priority }}</div>
        <p>{{ item.description }}</p>
      </ListItem>
    </ul>
  </div>
</template>
