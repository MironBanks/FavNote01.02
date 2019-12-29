import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Card',
};

export const Primary = () => <Card cardType="note" />;
export const Secondary = () => <Card cardType="twitter" />;
export const Tertiary = () => <Card cardType="article" />;
