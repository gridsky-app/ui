<script setup lang="ts">
const props = withDefaults(
    defineProps<{
      profile?: any
      size?: number
      border?: boolean
      editable?: boolean
      showOnlyIfIntersected?: boolean
    }>(),
    {
      size: 120,
    },
)

const classes = computed(() => {
  return [
    'gsky-profile__avatar',
    {
      'gsky-profile__avatar--border': props.border,
      'cursor-pointer': props.editable,
    }
  ]
})

const showProfileAvatar = ref(!props.showOnlyIfIntersected)

function onProfileAvatarIntersect(isIntersecting: boolean) {
  if (!props.showOnlyIfIntersected) {
    return
  }

  if (isIntersecting) {
    showProfileAvatar.value = true
  }
}
</script>

<template>
  <v-avatar
      :size="size"
      :class="classes"
      color="grey-darken-4"
      v-intersect="onProfileAvatarIntersect"
  >
    <v-img
        v-if="profile.avatar && showProfileAvatar"
        :src="profile.avatar"
    />
    <Icon
        v-else
        name="lucide:user-round"
        :size="size / 2.5"
    />
  </v-avatar>
</template>

<style scoped lang="scss">
.gsky-profile__avatar {
  box-shadow: 0 0 0 1px rgba(var(--v-border-color), var(--v-border-opacity));

  &--border {
    box-shadow: 0 0 0 2px rgb(var(--v-border-color));
  }

  :deep(img) {
    width: 100%;
    pointer-events: none;
    object-fit: cover;
  }

  .iconify {
    opacity: 0.5;
  }
}
</style>