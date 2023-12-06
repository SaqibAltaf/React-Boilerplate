import { Meta, Story } from '@storybook/react'

import Home, { HomeProps } from '.'

export default {
  title: 'Home',
  component: Home,
  args: {
    name: 'React Boilerlate'
  }
} as Meta

export const Default: Story<HomeProps> = args => <Home {...args} />
