<script setup lang="ts">
const buttonProps = computed(() => {
  const options: any = {
    size: 'small',
    flat: true,
  }
  return options
})
</script>

<template>
  <v-btn
      v-bind="buttonProps"
      :text="$t('profile.action.unfollowProfile')"
  />
</template>