<script setup lang="ts">
defineProps<{
  version: string
}>()
</script>

<template>
  <div class="gsky-version text-overline">
    Gridsky {{version}}
  </div>
</template>