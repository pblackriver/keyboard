import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ReactComponent as TabIcon } from '../../assets/icons/tab_icon.svg';
import Key from './Key';

export default {
  title: 'Key',
  component: Key,
} as ComponentMeta<typeof Key>;

const Template: ComponentStory<typeof Key> = args => <Key {...args} />;

export const Special = Template.bind({});
Special.args = {
  characters: { tLeft: '|', bLeft: '\\' },
  keyToListen: 'Backquote',
};

export const Number = Template.bind({});
Number.args = {
  characters: { tLeft: `"`, bLeft: '2', bRight: '@' },
  keyToListen: 'Digit2',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  className: 'w-[6.438rem]',
  icon: TabIcon,
  iconClassName: 'w-9',
  keyToListen: 'Tab',
};
