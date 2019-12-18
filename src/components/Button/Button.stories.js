import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const Primary = () => <Button>Hello Miron</Button>;

export const Secondary = () => <Button secondary>Hello Miron</Button>;
