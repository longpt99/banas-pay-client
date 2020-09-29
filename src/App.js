import React, { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  actFetchToken,
  actFetchUserProfileRequest,
  resetMessagePopup,
} from './store/actions';
import { fetchToken } from './utils/token';
import { Header } from './components';
function App() {
  const popup = useSelector((state) => state.popup);
  const token = useSelector((state) => state.token.accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    popup.success ? toast.success(popup.message) : toast.error(popup.message);
    dispatch(resetMessagePopup());
  }, [dispatch, popup.message, popup.success]);

  useEffect(() => {
    const isToken = fetchToken();
    if (isToken) {
      dispatch(actFetchToken(isToken));
    }
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(actFetchUserProfileRequest());
    }
  }, [dispatch, token]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
