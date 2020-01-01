import React from 'react';
import styled from 'styled-components';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import penIcon from '../../../assets/icons/pen.svg';
import plusIcon from '../../../assets/icons/plus.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.note};
`;

export default {
  component: ButtonIcon,
  title: 'Atoms/ButtonIcon',
};

export const Bulb = () => (
  <YellowBackground>
    <ButtonIcon icon={bulbIcon} />
  </YellowBackground>
);
export const Active = () => (
  <YellowBackground>
    <ButtonIcon active icon={bulbIcon} />
  </YellowBackground>
);
export const Logout = () => (
  <YellowBackground>
    <ButtonIcon icon={logoutIcon} />
  </YellowBackground>
);
export const Pen = () => (
  <YellowBackground>
    <ButtonIcon icon={penIcon} />
  </YellowBackground>
);
export const Plus = () => (
  <YellowBackground>
    <ButtonIcon icon={plusIcon} />
  </YellowBackground>
);
export const Twitter = () => (
  <YellowBackground>
    <ButtonIcon icon={twitterIcon} />
  </YellowBackground>
);
