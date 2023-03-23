import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthState, setAuthState } from '../slices/authSlice';
import { wrapper } from '@/store';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{authState ? "Logged in" : "Not Logged In"}</div>
      <button
        onClick={() =>
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState ? "Logout" : "LogIn"}
      </button>
    </div>
  );
}
