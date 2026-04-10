<script lang="ts">
	import { base } from '$app/paths';

	const hero = `${base}/assets/img/hero-saffron.jpg`;
</script>

<svelte:head>
	<title>Gulrez — Kashmiri Language and Poetry</title>
</svelte:head>

<header class="hero" style:background-image="url({hero})">
	<div class="hero-inner">
		<h1 class="script-rtl" lang="ur" dir="rtl">گلریز</h1>
		<p class="site-subtitle">Kashmiri Language and Poetry</p>
		<p class="lead">
			Introductory essays, ghazal terms, and bilingual selections from poets whose work
			crosses Urdu, Persian, English, and Kashmiri traditions.
		</p>
	</div>
</header>

<main class="container">
	<p class="section-label">Contents</p>
	<nav aria-label="Primary">
		<ul class="nav-grid">
			<li><a href={`${base}/basics`}>The basics — object writing</a></li>
			<li><a href={`${base}/verbs`}>Kashmiri verbs &amp; related vocabulary</a></li>
			<li><a href={`${base}/ghazals`}>Ghazal glossary &amp; metre</a></li>
			<li><a href={`${base}/poets/ghalib`}>Mirza Asadullah Khan Ghalib</a></li>
			<li><a href={`${base}/poets/mir`}>Mir Taqi Mir</a></li>
			<li><a href={`${base}/poets/faiz`}>Faiz Ahmad Faiz</a></li>
			<li><a href={`${base}/poets/faraz`}>Ahmad Faraz</a></li>
			<li><a href={`${base}/poets/iqbal`}>Muhammad Iqbal</a></li>
			<li><a href={`${base}/poets/momin`}>Momin Khan Momin</a></li>
			<li><a href={`${base}/poets/agha-shahid-ali`}>Agha Shahid Ali</a></li>
			<li><a href={`${base}/poets/rasul-mir`}>Rasul Mir</a></li>
		</ul>
	</nav>
</main>

<footer class="container site-footer">
	<p class="site-footer-title">گلریز · Kashmiri Language and Poetry</p>
	<p class="meta">Perso-Arabic script set in Noto Nastaliq Urdu</p>
	<p class="meta attribution">
		Hero photograph:
		<a href="https://commons.wikimedia.org/wiki/File:Crocus_sativus_01_by_Line1.JPG"
			><em>Crocus sativus</em></a
		>
		·
		<a href="https://commons.wikimedia.org/wiki/User:Lin%C3%A91">Liné1</a>
		· Cropped from original ·
		<a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">CC BY-SA 3.0</a>
	</p>
</footer>
