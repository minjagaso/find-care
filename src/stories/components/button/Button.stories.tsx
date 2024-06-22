import type { Meta, StoryObj } from '@storybook/react';

import { Button } from "@/components/ui/button"

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
  argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'destructive', 'outline', 'ghost', 'link' ] // Define your variants here
        }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: 'Button',
        variant: 'primary',
    },
    render: (args) => <Button>{args.label}</Button>
};

export const Secondary: Story = {
    args: {
      label: 'Button',
      variant: 'secondary',
    },
    render: (args) => <Button {...args}>{args.label}</Button>
};

export const Destructive: Story = {
    args: {
      label: 'Button',
      variant: 'destructive',
    },
    render: (args) => <Button {...args}>{args.label}</Button>
};

// export const Secondary: Story = {
//     args: {
//       label: 'Button',
//       variant: 'primary',
//     },
//     render: (args) => {
//       const { variant } = args
//       if ( variant === 'primary' ) {
//           return <Button>{args.label}</Button>
//       }
//       if ( variant === 'icon' ) {
//           return <Button variant="outline" size="icon">
//               "icon goes here"
//           </Button>
//       }
//       if ( variant === 'asChild' ) {
//           return <Button asChild>
//               <a href="/login">Login</a>
//           </Button>
//       }
//       return <Button {...args}>{args.label}</Button>
//     }
//   };