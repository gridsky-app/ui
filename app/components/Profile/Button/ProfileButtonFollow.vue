<script setup lang="ts">
defineProps<{
  profile: any
}>()
</script>

<template>
  <v-btn
      size="small" color="primary" flat
      :text="$t('profile.action.followProfile')"
  />
</template>