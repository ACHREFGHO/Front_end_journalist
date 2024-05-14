import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Page1 from './components/Page1.vue';
import Page2 from './components/Page2.vue';
import admin from './components/admin.vue';
import Event from './components/Event.vue';
import Article from './components/Article.vue';
import Page3 from './components/Page3.vue';
import Page4 from './components/Page4.vue';
import Page5 from './components/Page5.vue';
import Page6 from './components/Page6.vue';
import Page7 from './components/Page7.vue';
import suppart from './components/suppart.vue';
import suppevent from './components/suppevent.vue';




const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/page3',
      name: 'Page3',
      component: Page3
    },
    {
      path: '/page4',
      name: 'Page4',
      component: Page4
    },
    {
      path: '/page5',
      name: 'Page5',
      component: Page5
    },
    {
      path: '/page6',
      name: 'Page6',
      component: Page6
    },
    {
      path: '/Page7',
      name: 'Page7',
      component: Page7
    },
    {
      path: '/Article',
      name: 'Article',
      component: Article
    },
    {
      path: '/Event',
      name: 'Event',
      component: Event
    },
    {
      path: '/suppart',
      name: 'suppart',
      component: suppart
    },
    {
      path: '/suppevent',
      name: 'suppevent',
      component: suppevent
    }

  ]
  
});

export default router;
