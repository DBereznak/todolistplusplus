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
        <h2>
          {{ item.text }}
        </h2>
        <p>Created On : {{ item.createdOn }}</p>
        <p v-show="item.completedOn">Completed On : {{ item.completedOn }}</p>
      </ListItem>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

p {
  margin: 5px 0;
  color: #25343f;
  font-size: 1em;
}
</style>
