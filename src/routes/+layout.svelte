<script>
	import '../app.css';
	let { children } = $props();

	
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	injectAnalytics({ mode: dev ? 'development' : 'production' });


	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	injectSpeedInsights();

	import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';


	register('en', () => import('$lib/languages/en.json'));
	register('pt', () => import('$lib/languages/pt.json'));

	init({
		fallbackLocale: 'pt',
		initialLocale: getLocaleFromNavigator(),
	});
	
	locale.set('pt');
	
</script>

{@render children()}
