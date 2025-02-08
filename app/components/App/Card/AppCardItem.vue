<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle?: string
  image?: string
  imageLink?: string
  to?: string
  size?: 'large'
  linkFull?: boolean
}>()

const display = useDisplay()

const imageProps = computed(() => {
  let imageSize = 40
  let imageClass = 'mr-1'

  if (display.smAndDown.value) {
    imageSize = 36
  }

  if (display.xs.value) {
    imageSize = 32
  }

  if (props.size === 'large') {
    imageSize = 56
    imageClass = 'mr-2'
  }

  return {
    size: imageSize,
    class: imageClass,
  }
})
</script>

<template>
  <v-card-item
      :class="[
          'pa-0',
          {
            'v-card-item--size-large': size === 'large',
            'v-card-item--with-subtitle': subtitle,
          }
      ]"
  >
    <template #title>
      <slot v-if="$slots.title" name="title" />
      <span v-else-if="title" v-text="title" />
    </template>
    <template v-if="subtitle" #subtitle>
      <div class="mt-n1 mt-sm-0 text-truncate">
        {{subtitle}}
      </div>
    </template>
    <template v-slot:prepend>
      <slot
          v-if="$slots.image"
          name="image"
          :size="imageProps.size"
      />
      <v-avatar v-else color="grey-darken-4" v-bind="imageProps">
        <img loading="lazy" v-if="image" :src="image"/>
        <span v-else v-text="title.charAt(0).toUpperCase()"/>
        <nuxt-link v-if="imageLink" :to="imageLink" />
      </v-avatar>
    </template>

    <slot />

    <nuxt-link v-if="linkFull" class="v-card-item--link-full" :to="to" />
  </v-card-item>
</template>

<style scoped lang="scss">
.v-card-item {
  position: relative;
  min-height: 56px;

  &--size-large {
    font-size: 19px;
  }

  a.v-card-item--link-full {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  :deep(.v-card-title) {
    font-size: inherit;
    font-weight: bold;
    letter-spacing: inherit;
    line-height: inherit;

    @media(min-width: 600px) {
      font-size: 16px !important;
      margin-top: -2px;
    }

    & + .v-card-subtitle {
      margin-top: -2px;

      @media(min-width: 600px) {
        margin-top: -6px;
      }
    }
  }

  :deep(.v-card-subtitle) {
    font-size: inherit;
    letter-spacing: inherit;
    padding: 0;
  }

  .v-avatar {
    a {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }

    :deep(img) {
      object-fit: cover;
      max-width: 100%;
      height: 100%;
    }
  }
}
</style>