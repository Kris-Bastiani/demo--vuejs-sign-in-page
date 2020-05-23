import Vue from 'vue';

import NotFoundPage from './components/organisms/NotFoundPage.vue';
import SignInPage from './components/organisms/SignInPage.vue';

const ROUTES = {
	'/': SignInPage,
};

const App = new Vue({
	computed: {
		CurrentPage() { return ROUTES[this.currentRoute] || NotFoundPage; },
	},
	data: { currentRoute: window.location.pathname },
	el: '#js__app',
	render(createElement) { return createElement(this.CurrentPage); },
});

App();
