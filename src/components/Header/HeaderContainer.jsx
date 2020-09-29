import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actUserLogout, setMessagePopup } from '../../store/actions';
import Header from './Header';

function HeaderContainer(props) {
  const token = useSelector((state) => state.token.accessToken);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(actUserLogout());
    dispatch(setMessagePopup({ success: true, message: 'Logout successful' }));
  };
  return <Header token={token} handleLogout={handleLogout} />;
}

export default HeaderContainer;
