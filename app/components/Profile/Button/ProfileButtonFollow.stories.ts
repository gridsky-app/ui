import type { Meta, StoryObj } from '@storybook/vue3'

import ProfileButtonFollow from './ProfileButtonFollow.vue'

const meta = {
  title: 'Profile/Button/Follow',
  component: ProfileButtonFollow,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileButtonFollow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}


export const Outlined: Story = {
  args: {
    outlined: true,
  },
}
