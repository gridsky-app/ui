import type { Meta, StoryObj } from '@storybook/vue3'

import ProfileButtonEditGrid from './ProfileButtonEditGrid.vue'

const meta = {
  title: 'Profile/Button/EditGrid',
  component: ProfileButtonEditGrid,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileButtonEditGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
