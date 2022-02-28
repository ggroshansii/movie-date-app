/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Splash from '../components/Splash'
import Books from '../components/Books.vue'
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
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/books/:bookTitle',
      name: 'Book',
      component: Book
    }
  ]
})