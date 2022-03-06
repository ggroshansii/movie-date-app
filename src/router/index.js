/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Splash from '../components/Splash'
import Movies from '../components/Movies.vue'
import Genres from '../components/Genres.vue'
import Book from '../components/Book.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
        {
      path: '/genres',
      name: 'Genres',
      component: Genres
    },
    {
      path: '/books/:bookTitle',
      name: 'Book',
      component: Book
    },

  ]
})