import { Main, Login, Sample } from '../pages';

const routes = [
  // private Routes
  { path: '/sample', component: Sample, isPublic: false },

  // public Routes
  { path: '/login', component: Login, isPublic: true },
  { path: '/', component: Main, isPublic: true }
];

export default routes;
