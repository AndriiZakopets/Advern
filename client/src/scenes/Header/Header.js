import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../router/routes';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../modules/user';
import ProfileBadge from '../../Components/ProfileBadge/ProfileBadge';
import s from './Header.module.scss';

const Header = () => {
  const user = useSelector(userSelectors.getUser);

  return (
    <header className={s.header}>
      <Link className={s.header__logo} to={routes.home}>
        Advern
      </Link>
      {user ? (
        <div className={s.header__nav}>
          <Link to={routes.addProduct}>Add product</Link>
          <ProfileBadge />
        </div>
      ) : (
        <Link className={s.header_link} to={routes.login}>
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
