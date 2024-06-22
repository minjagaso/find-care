import type { Meta, StoryObj } from '@storybook/react';

import { Button } from "@/components/ui/button"

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive'],
    },
    label: {
      control: 'text',
      description: 'Content to display on the button',
    },
  },
  args: {
    variant: 'primary',
    label: 'Button',
  },
  render: (args) => {
    const { variant } = args
    if ( variant === 'primary' ) {
      return <Button>{args.label}</Button>
    }

    return <Button {...args}>{args.label}</Button>
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
    args: {
        variant: 'primary',
    }
};

export const Secondary: Story = {
    args: {
      variant: 'secondary',
    }
};

export const Destructive: Story = {
    args: {
      variant: 'destructive',
    }
};