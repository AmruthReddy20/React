import React from 'react';
import SearchBar from './SearchBar';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Molecules/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = () => (
  <SearchBar />
);

export const Simple = Template.bind({});
Simple.args = {};
