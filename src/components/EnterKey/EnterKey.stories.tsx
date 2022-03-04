import { ComponentMeta, ComponentStory } from '@storybook/react';

import EnterKey from './EnterKey';

export default {
  title: 'EnterKey',
  component: EnterKey,
} as ComponentMeta<typeof EnterKey>;

const Template: ComponentStory<typeof EnterKey> = args => <EnterKey {...args} />;

export const Base = Template.bind({});

Base.args = {};

// export const Backspace = Template.bind({});

// Backspace.args = {
//   className: 'w-[7.5rem]',
//   icon: BackspaceIcon,
//   iconClassName: 'ml-auto w-14 h-4',
//   keyToListen: 'Backspace',
// };
