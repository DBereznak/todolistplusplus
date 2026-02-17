<script lang="ts" setup>
const props = defineProps<{
  message: string
}>()
</script>

<template>
  <div class="bg-overlay">
    <dialog>
      <p>{{ props.message }}</p>
      <button @click="$emit('close')">Close</button>
    </dialog>
  </div>
</template>

<style scoped>
.bg-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
dialog {
  display: block;
  border: 2px solid #ff9b51;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff3e6;
  color: #25343f;
  font-size: 1.2em;
}
</style>
