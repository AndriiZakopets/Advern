import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelectors, userOperations } from '../../modules/user';
import { Link } from 'react-router-dom';
import routes from '../../router/routes';
import Avatar from '../Avatar/Avatar';
import s from './ProfileBadge.module.scss';

const ProfileBadge = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.getUser);
  const iconRef = useRef();
  const dropdownRef = useRef();

  const [isOpen, setOpen] = useState(false);

  const toggleOpen = (e) => {
    setOpen(!isOpen);
  };

  const logout = () => {
    dispatch(userOperations.logout());
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef?.current?.contains(e.target) &&
        !iconRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside, false);
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside,
        false,
      );
    };
  }, []);

  return (
    <div className={s.profileBadge}>
      <div
        ref={iconRef}
        className={s.profileBadge__icon}
        onClick={toggleOpen}
      >
        <Avatar
          avatar={user.avatar}
          fullName={user.fullName}
          size="40px"
        />
      </div>

      {isOpen && (
        <div className={s.dropDown} ref={dropdownRef}>
          <ul className={s.dropDown__list}>
            <li>{user.fullName}</li>
            <Link to={`${routes.editAccount}`}>
              <li>Edit profile</li>
            </Link>
            <Link onClick={logout}>
              <li>Logout</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileBadge;
