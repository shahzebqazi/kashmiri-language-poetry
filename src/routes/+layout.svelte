<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { base } from '$app/paths';
	import { page } from '$app/state';

	let { children } = $props();

	/** Root index: pathname may be `/` during prerender or include `paths.base` in the browser. */
	const isHome = $derived(
		page.route.id === '/' ||
			page.url.pathname === base ||
			page.url.pathname === `${base}/` ||
			page.url.pathname === '/'
	);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta
		name="description"
		content="گلریز — Gulrez: Kashmiri language, Urdu and Persian ghazal, and selected poets."
	/>
</svelte:head>

{#if !isHome}
	<header class="site-top">
		<a href={`${base}/`} class="script-rtl" lang="ur" dir="rtl">گلریز</a>
		<span class="meta" style="font-size: 0.82rem; letter-spacing: 0.02em"
			>Kashmiri language &amp; poetry</span
		>
	</header>
{/if}

{@render children()}

{#if !isHome}
	<footer class="container site-footer">
		<p><a href={`${base}/`}>Back to home</a></p>
	</footer>
{/if}
