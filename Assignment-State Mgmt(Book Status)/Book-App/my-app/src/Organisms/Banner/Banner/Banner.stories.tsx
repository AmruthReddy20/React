import React from 'react';
import Banner from './Banner';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Organisms/Banner',
  component:Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = () => (
  <Banner  />
);

export const banner = Template.bind({});

