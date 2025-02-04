<script setup lang="ts">
const props = defineProps<{
  profile: any
  time?: string
  showTime?: boolean
  showDisplayName?: boolean
  linkFull?: boolean
}>()

const subtitle = computed(() => {
  if (props.showDisplayName) {
    return props.profile.displayName
  }

  if (props.showTime) {
    return props.time
  }

  return undefined
})
</script>

<template>
  <AppCardItem
      :title="makeHandleShort(profile.handle)"
      :subtitle="subtitle"
      :image="profile.avatar"
      :to="routeProfile(profile)"
      link-full
      class="text-caption"
  >
    <template v-slot:image="{ size }">
      <ProfileAvatar :profile="profile" :size="size" class="mr-1" />
    </template>
  </AppCardItem>
</template>

<style scoped lang="scss">

</style>