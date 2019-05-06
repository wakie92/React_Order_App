import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => {
  return <div></div>
}
export const Menu = Loadable({
  loader : () => import ('./menu'),
  loading : Loading
});
export const Home = Loadable({
  loader : () => import ('./home'),
  loading : Loading
});
export const Login = Loadable({
  loader : () => import ('./login'),
  loading : Loading
});
export const Log = Loadable({
  loader : () => import ('./log'),
  loading : Loading
});
export const Review = Loadable({
  loader : () => import ('./review'),
  loading : Loading
});

