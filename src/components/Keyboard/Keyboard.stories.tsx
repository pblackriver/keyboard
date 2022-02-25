import { ComponentMeta, ComponentStory } from '@storybook/react';

import Keyboard from './Keyboard';

export default {
  title: 'Keyboard',
  component: Keyboard,
} as ComponentMeta<typeof Keyboard>;

const Template: ComponentStory<typeof Keyboard> = args => <Keyboard {...args} />;

export const Base = Template.bind({});

Base.args = {
  children: <div>ABC</div>,
};
