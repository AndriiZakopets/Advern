import React from 'react';
import generateColor from '../../utils/generateColor';
import s from './Avatar.module.scss';

const Avatar = ({ fullName, size }) => {
  return (
    <div
      style={{
        backgroundColor: generateColor(fullName),
        width: size,
        height: size,
        lineHeight: size,
      }}
      className={s.avatar}
    >
      <span>{fullName[0]}</span>
    </div>
  );
};

export default Avatar;
