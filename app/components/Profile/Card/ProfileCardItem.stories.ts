import type { Meta, StoryObj } from '@storybook/vue3'

import ProfileCardItem from './ProfileCardItem.vue'
import {dummyProfile} from "@/dummyData";

const meta = {
  title: 'Profile/Card/Item',
  component: ProfileCardItem,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCardItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    profile: dummyProfile
  }
}

export const WithDisplayName: Story = {
  args: {
    profile: dummyProfile,
    showDisplayName: true,
  }
}

export const WithTime: Story = {
  args: {
    profile: dummyProfile,
    time: '2 weeks ago',
    showTime: true,
  }
}