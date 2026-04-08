<script lang="ts">
	import Portrait from '$lib/components/Portrait.svelte';
</script>

<svelte:head>
	<title>Ahmad Faraz</title>
</svelte:head>

<div class="page-head">
	<h1>Ahmad Faraz</h1>
	<p class="caption">1931–2008 · Urdu</p>
</div>

<main class="container">
	<Portrait file="faraz.jpg" alt="Portrait photograph of Ahmad Faraz" />

	<section class="ghazal" aria-labelledby="g1">
		<header>
			<h2 id="g1">Ghazal — <span lang="ur-Latn">ranjish hī sahī</span></h2>
		</header>
		<div class="bilingual script-first">
			<div class="panel en">
				<p class="panel-label">Translation</p>
				<div class="verse-block">
					Let it be mere vexation—come, if only to wound the heart; come again, do not
					leave me only to go.
				</div>
			</div>
			<div class="panel ur script-rtl">
				<p class="panel-label" lang="ur" dir="rtl">متن</p>
				<div class="verse-block" lang="ur" dir="rtl">
					رنجش ہی سہی دل ہی دکھانے کے لیے آ
					<br />
					آ پھر مجھے مت چھوڑ کے جانے کے لیے آ
				</div>
			</div>
		</div>
	</section>

	<section class="ghazal" aria-labelledby="g2">
		<header>
			<h2 id="g2">Ghazal — <span lang="ur-Latn">sunā hai log</span></h2>
		</header>
		<div class="bilingual script-first">
			<div class="panel en">
				<p class="panel-label">Translation</p>
				<div class="verse-block">
					I have heard people guard her with their eyes; I have heard her city knows no
					season of rain.
				</div>
			</div>
			<div class="panel ur script-rtl">
				<p class="panel-label" lang="ur" dir="rtl">متن</p>
				<div class="verse-block" lang="ur" dir="rtl">
					سنا ہے لوگ اسے آنکھ بچا کر رکھتے ہیں
					<br />
					سنا ہے اُس کے شہر میں بارش کا موسم نہیں
				</div>
			</div>
		</div>
	</section>
</main>
