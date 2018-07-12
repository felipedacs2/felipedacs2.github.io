import home from './components/home/home.vue';
import projetos from './components/projetos/projetos.vue';

export const routes = [
    { path: '*', redirect: '/' },
    { path: '/', component: home, name: home  },
    { path: '/projetos', component: projetos, name: projetos }
];
