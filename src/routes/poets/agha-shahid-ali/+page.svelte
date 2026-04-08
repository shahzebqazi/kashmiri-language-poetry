<script lang="ts">
	import Portrait from '$lib/components/Portrait.svelte';
</script>

<svelte:head>
	<title>Agha Shahid Ali</title>
</svelte:head>

<div class="page-head">
	<h1>Agha Shahid Ali</h1>
	<p class="caption">1949–2001 · English (with Urdu titles and citations)</p>
</div>

<main class="container">
	<Portrait file="agha-shahid-ali.png" alt="Portrait photograph of Agha Shahid Ali" />

	<section class="ghazal" aria-labelledby="g1">
		<header>
			<h2 id="g1">Ghazal — Postcard from Kashmir</h2>
		</header>
		<div class="bilingual poet-english">
			<div class="panel en">
				<p class="panel-label">Reading</p>
				<div class="verse-block">
					The speaker receives Kashmir only as a small postcard image; domestic order
					contrasts with distance and exile. The mountains shrink to a souvenir scale.
				</div>
			</div>
			<div class="panel en">
				<p class="panel-label" lang="en" dir="ltr">Text</p>
				<div class="verse-block" lang="en" dir="ltr">
					Kashmir shrinks into my mailbox,
					<br />
					my home a neat four by six inches.
					<br />
					I always loved neatness. Now I hold
					<br />
					the half-inch Himalayas in my hand.
				</div>
			</div>
		</div>
	</section>

	<section class="ghazal" aria-labelledby="g2">
		<header>
			<h2 id="g2">Ghazal — <span lang="ur-Latn">Stationery</span></h2>
		</header>
		<div class="bilingual poet-english">
			<div class="panel en">
				<p class="panel-label">Reading</p>
				<div class="verse-block">
					Night and moonlight are reimagined as material and craft; the poem closes
					with an address to the absent reader, turning the lyric itself into a
					letter waiting for reply.
				</div>
			</div>
			<div class="panel en">
				<p class="panel-label" lang="en" dir="ltr">Text</p>
				<div class="verse-block" lang="en" dir="ltr">
					The moon did not become the sun.
					<br />
					It just fell on the desert
					<br />
					in great sheets, reams
					<br />
					of silver handmade by you.
				</div>
			</div>
		</div>
	</section>
</main>
