import type { Meta, StoryObj } from '@storybook/vue3'

import AppVersion from './AppVersion.vue'

const meta = {
  title: 'App/Version',
  component: AppVersion,
  tags: ['autodocs'],
} satisfies Meta<typeof AppVersion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    version: '1.0.0',
  },
}
