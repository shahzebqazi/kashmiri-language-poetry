<script lang="ts">
	import Portrait from '$lib/components/Portrait.svelte';
</script>

<svelte:head>
	<title>Muhammad Iqbal</title>
</svelte:head>

<div class="page-head">
	<h1>Muhammad Iqbal</h1>
	<p class="caption">1877–1938 · Urdu and Persian</p>
</div>

<main class="container">
	<Portrait file="iqbal.jpg" alt="Portrait photograph of Muhammad Iqbal (1931)" />

	<section class="ghazal" aria-labelledby="g1">
		<header>
			<h2 id="g1">Ghazal — <span lang="ur-Latn">sitāroñ se āge</span></h2>
			<p class="meta">
				From <cite>Bal-e-Jibril</cite> (<span lang="ur-Latn">Gabriel’s Wing</span>).
			</p>
		</header>
		<div class="bilingual script-first">
			<div class="panel en">
				<p class="panel-label">Translation</p>
				<div class="verse-block">
					Beyond the stars are worlds yet more; still more remain love’s trials.
				</div>
			</div>
			<div class="panel ur script-rtl">
				<p class="panel-label" lang="ur" dir="rtl">متن</p>
				<div class="verse-block" lang="ur" dir="rtl">
					ستاروں سے آگے جہاں اور بھی ہیں
					<br />
					ابھی عشق کے امتحان اور بھی ہیں
				</div>
			</div>
		</div>
	</section>

	<section class="ghazal" aria-labelledby="g2">
		<header>
			<h2 id="g2">Poem — <span lang="ur-Latn">ḳhudī ko kar buland</span></h2>
			<p class="meta">Often anthologised as a lyric from <cite>Bal-e-Jibril</cite>.</p>
		</header>
		<div class="bilingual script-first">
			<div class="panel en">
				<p class="panel-label">Translation</p>
				<div class="verse-block">
					Raise your selfhood so high that before every destiny God himself should ask
					the human being: what is your will?
				</div>
			</div>
			<div class="panel ur script-rtl">
				<p class="panel-label" lang="ur" dir="rtl">متن</p>
				<div class="verse-block" lang="ur" dir="rtl">
					خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے
					<br />
					خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے
				</div>
			</div>
		</div>
	</section>
</main>
