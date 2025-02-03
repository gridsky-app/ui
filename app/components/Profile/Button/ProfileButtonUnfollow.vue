<script setup lang="ts">
defineProps<{
  profile: any
}>()
</script>

<template>
  <v-btn
      size="small" flat
      :text="$t('profile.action.unfollowProfile')"
  />
</template>