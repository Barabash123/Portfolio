<script>
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '$lib/css/colors.css';
	import '$lib/font/stylesheet.css';
	import '../app.css';
	import Header from '$lib/ui/Header.svelte';
	import Footer from '$lib/ui/Footer.svelte';
	import Socials from '$lib/ui/Socials.svelte';
	import Title from '$lib/ui/Title.svelte';
	import ScrollToTop from '$lib/ui/ScrollToTop.svelte';

	let { children } = $props();
</script>

<Title />
<ParaglideJS {i18n} languageTag="de">
	<Header />
	{@render children()}
	<Socials />
	<Footer />
	<ScrollToTop />
</ParaglideJS>
