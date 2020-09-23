import Vue from 'vue';

const requireComponent = require.context(
	'./components/globals',
	false,
	/\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
	const componentConfig = requireComponent(fileName);
	const componentName = `global-${fileName
		.split('/')
		.pop()
		.replace(/\.\w+$/, '')
		.toLowerCase()
		.trim()}`;
	Vue.component(componentName, componentConfig.default || componentConfig);
});