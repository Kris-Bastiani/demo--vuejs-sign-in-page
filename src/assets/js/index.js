import 'regenerator-runtime/runtime';
import Vue from 'vue';
import vClickOutside from 'v-click-outside';

import NewPasswordPage from './components/organisms/NewPasswordPage.vue';
import NotFoundPage from './components/organisms/NotFoundPage.vue';
import SignInPage from './components/organisms/SignInPage.vue';
import SignedInPage from './components/organisms/SignedInPage.vue';

const ROUTES = {
	'/': SignInPage,
	'/new-password.html': NewPasswordPage,
	'/signed-in.html': SignedInPage,
};

Vue.use(vClickOutside);

// eslint-disable-next-line no-unused-vars
const App = new Vue({
	computed: {
		CurrentPage() { return ROUTES[this.currentRoute] || NotFoundPage; },
	},
	data: {
		currentRoute: window.location.pathname,
		currentUser: JSON.parse(window.localStorage.getItem('user')),
	},
	el: '#js__app',
	render(createElement) { return createElement(this.CurrentPage, { props: { currentUser: this.currentUser } }); },
});
