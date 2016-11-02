import path from 'path';

module.exports = () => {
	let root = 'src';
	let paths = {
		dist: 'dist',
		scripts: [`${root}/app/**/*.js`],
		templates: [`${root}/app/**/*.html`],
		styles: [`${root}/app/**/*.scss`, `${root}/app/**/*.sass`],
		libs: [
			'src/lib/loading-spinner.min.js'
		],
		vendors: [
			`angular/angular.js`,
			`angular-animate/angular-animate.js`,
			`angular-ui-router/release/angular-ui-router.js`,
			'firebase/firebase.js',
			'angularfire/dist/angularfire.min.js'
		],
		vendorsProd: [
			`angular/angular.min.js`,
			`angular-animate/angular-animate.min.js`,
			`angular-ui-router/release/angular-ui-router.min.js`,
			'firebase/firebase.js',
			'angularfire/dist/angularfire.min.js'
		],
		static: [
			`${root}/index.html`
		]
	};

	let templateCache = {
		root: 'app', // setting root path to avoid a template url with no directory
		standalone: true,
		transformUrl: (url) => {
			// replacing directory path with ./
			// this is done to match the templateUrl value with the one on the template cache
			return url.replace(path.dirname(url), '.');
		}
	}

	return {
		root,
		paths,
		templateCache
	};
};