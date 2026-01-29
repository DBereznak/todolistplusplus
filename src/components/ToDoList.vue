<script lang="ts" setup>
import { inject, type Ref } from 'vue'
import ListItem from './ListItem.vue'
const items = inject('items') as Ref<Array<{ id: number; text: string }>>
</script>
<template>
  <div class="todo-list">
    <h1>My To-Do List</h1>
    <ul>
      <ListItem v-for="item in items" :key="item.id" :id="item.id">
        {{ item.text }} {{ item.id }}
      </ListItem>
    </ul>
  </div>
</template>
00
