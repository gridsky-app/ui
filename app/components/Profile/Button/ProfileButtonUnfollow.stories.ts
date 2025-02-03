import type { Meta, StoryObj } from '@storybook/vue3'

import ProfileButtonUnfollow from './ProfileButtonUnfollow.vue'

const meta = {
  title: 'Profile/Button/Unfollow',
  component: ProfileButtonUnfollow,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileButtonUnfollow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
