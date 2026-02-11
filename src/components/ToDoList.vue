<script lang="ts" setup>
import { inject, type Ref, ref } from 'vue'
import { GripVertical } from 'lucide-vue-next'
import draggable from 'vuedraggable'
import ListItem from './ListItem.vue'
import type { List } from '@/types'
const items = inject('items') as Ref<Array<List>>
const dragging = ref(false)
const enabled = true
</script>
<template>
  <div class="todo-list">
    <draggable
      v-model="items"
      ghost-class="ghost"
      item-key="id"
      @start="dragging = true"
      @end="dragging = false"
      :disabled="!enabled"
      handle=".drag-handle"
      animation="250"
      easing="cubic-bezier(0.25, 1, 0.5, 1)"
      :swap-threshold="0.65"
    >
      <template #item="{ element }">
        <ListItem :key="element.id" :id="element.id">
          <div class="top">
            <h2>
              {{ element.text }}
            </h2>
            <span class="drag-handle"><GripVertical color="#ff9b51" /></span>
          </div>
          <p>Created On : {{ element.createdOn }}</p>
          <p v-show="element.completedOn">Completed On : {{ element.completedOn }}</p>
        </ListItem>
      </template>
    </draggable>
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

.ghost {
  opacity: 0.5;
}

.drag-handle {
  cursor: grab;
  font-size: 18px;
  margin-bottom: 8px;
  user-select: none;
}
.top {
  display: flex;
  justify-content: space-between;
}
</style>
