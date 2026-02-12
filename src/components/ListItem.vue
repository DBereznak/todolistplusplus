<script lang="ts" setup>
import { ref } from 'vue'
import { ChevronUp } from 'lucide-vue-next'
import DelItem from './DelItem.vue'
import StatusDropDown from './StatusDropDown.vue'
import PriorityDropDown from './PriorityDropDown.vue'
import EditNotes from './EditNotes.vue'
defineProps<{
  id: number
}>()
const itemHeight = ref('auto')
const collapseItem = () => {
  itemHeight.value = itemHeight.value === 'auto' ? '100px' : 'auto'
}
</script>

<template>
  <div class="item" :style="{ height: itemHeight }">
    <ChevronUp
      color="#ff9b51"
      class="chevron"
      :class="{ up: itemHeight === '100px' }"
      @click="collapseItem()"
    />
    <slot></slot>
    <edit-notes :id="id" />
    <status-drop-down :id="id" />
    <priority-drop-down :id="id" />
    <del-item :id="id" />
  </div>
</template>

<style scoped>
.item {
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  display: grid;
  overflow: hidden;
}
.item:hover {
  border: 2px solid #ff9b51;
}

.chevron {
  position: absolute;
  left: 50%;
  padding: 5px;
  transform: scale(1.5) rotate(0deg);
  transition: transform 0.25s;
  cursor: pointer;
}

.up {
  transform: scale(1.5) rotate(180deg);
}

.chevron:hover {
  opacity: 0.75;
}
</style>
