import React from 'react';
import Lists from './Lists';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Lists',
  component: Lists,
} as ComponentMeta<typeof Lists>;

const Template: ComponentStory<typeof Lists> = (args) => (
  <Lists {...args} />
);

export const Simple = Template.bind({});
Simple.args = {};
