<script lang="ts" setup>
import DelItem from './DelItem.vue'
import StatusDropDown from './StatusDropDown.vue'
import PriorityDropDown from './PriorityDropDown.vue'
import EditNotes from './EditNotes.vue'
defineProps<{
  id: number
}>()
</script>

<template>
  <div class="item">
    <slot></slot>
    <edit-notes :id="id" />
    <br />
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
}
.item:hover {
  border: 2px solid #ff9b51;
}
</style>
