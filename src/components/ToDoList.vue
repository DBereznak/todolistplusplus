<script lang="ts" setup>
import { inject, type Ref } from 'vue'
import ListItem from './ListItem.vue'
import type { List } from '@/types'
const items = inject('items') as Ref<Array<List>>
</script>
<template>
  <div class="todo-list">
    <ul>
      <ListItem v-for="item in items" :key="item.id" :id="item.id">
        <div>
          {{ item.text }}
        </div>
        <div>Created On : {{ item.createdOn }}</div>
        <div>Status: {{ item.status }}</div>
        <div>Priority: {{ item.priority }}</div>
      </ListItem>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
