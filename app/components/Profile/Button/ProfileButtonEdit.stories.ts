import type { Meta, StoryObj } from '@storybook/vue3'

import ProfileButtonEdit from './ProfileButtonEdit.vue'

const meta = {
  title: 'Profile/Button/Edit',
  component: ProfileButtonEdit,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileButtonEdit>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
