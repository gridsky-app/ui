<script setup lang="ts">
const props = defineProps<{
  outlined?: boolean
}>()

const buttonProps = computed(() => {
  const options: any = {
    size: 'small',
  }

  if (!props.outlined) {
    options.color = 'primary'
  } else {
    options.variant = 'outlined'
  }

  return options
})
</script>

<template>
  <v-btn
      v-bind="buttonProps"
      :text="$t('profile.action.followProfile')"
  />
</template>