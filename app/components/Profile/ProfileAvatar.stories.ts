import type { Meta, StoryObj } from '@storybook/vue3'

import ProfileAvatar from './ProfileAvatar.vue'
import {dummyProfile} from "@/dummyData";

const meta = {
  title: 'Profile/Avatar',
  component: ProfileAvatar,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    profile: dummyProfile
  }
}

export const WithNoAvatar: Story = {
  args: {
    profile: {
      ...dummyProfile,
      avatar: undefined,
    },
  }
}

export const WithSize32: Story = {
  args: {
    profile: dummyProfile,
    size: 32
  }
}