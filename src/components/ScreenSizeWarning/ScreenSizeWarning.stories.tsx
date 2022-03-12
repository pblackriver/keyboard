import { ComponentMeta, ComponentStory } from '@storybook/react';

import ScreenSizeWarning from './ScreenSizeWarning';

export default {
  title: 'ScreenSizeWarning',
  component: ScreenSizeWarning,
} as ComponentMeta<typeof ScreenSizeWarning>;

const Template: ComponentStory<typeof ScreenSizeWarning> = () => <ScreenSizeWarning />;

export const Base = Template.bind({});
