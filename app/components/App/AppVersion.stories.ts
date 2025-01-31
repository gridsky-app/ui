import type { Meta, StoryObj } from '@storybook/vue3'

import AppVersion from '/app/components/App/AppVersion.vue'

const meta = {
  title: 'App/Version',
  component: AppVersion,
  tags: ['autodocs'],
} satisfies Meta<typeof AppVersion>

export default meta
type Story = StoryObj<typeof meta>

export const AppVersionStory: Story = {
  args: {
    version: '1.0.0',
  },
}
