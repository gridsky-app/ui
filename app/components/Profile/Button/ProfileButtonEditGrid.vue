<template>
  <v-btn
      size="small" class="px-1" style="vertical-align: top;"
      :min-width="28"
  >
    <Icon name="lucide:grid-2x2-plus" :size="13" />
    <ProfileGridDialog
        activator="parent"
    >
      <ProfileGridEditor
          mode="add"
          dialog
      />
    </ProfileGridDialog>
  </v-btn>
</template>
