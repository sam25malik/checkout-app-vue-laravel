import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ExampleComponent from './components/ExampleComponent.vue';
import Checkout from './components/Checkout.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: ExampleComponent },
    { path: '/checkout', component: Checkout },
  ]
});

new Vue({
  router,
  template: `
    <div>
      <router-view class="view"></router-view>
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link to="/checkout" class="nav-link">Go to Checkout</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
  `,
}).$mount('#app');