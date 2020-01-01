import React from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Atoms/Heading',
};

export const Normal = () => <Heading>Hello Miron</Heading>;
export const Big = () => <Heading big>Hello Miron</Heading>;
