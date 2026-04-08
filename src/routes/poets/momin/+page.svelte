<script lang="ts">
	import Portrait from '$lib/components/Portrait.svelte';
</script>

<svelte:head>
	<title>Momin Khan Momin</title>
</svelte:head>

<div class="page-head">
	<h1>Momin Khan Momin</h1>
	<p class="caption">1800–1851 · Urdu</p>
</div>

<main class="container">
	<Portrait file="momin.jpg" alt="Portrait of Momin Khan Momin" />

	<section class="ghazal" aria-labelledby="g1">
		<header>
			<h2 id="g1">Ghazal — <span lang="ur-Latn">wo jo ham meñ tum meñ qarār thā</span></h2>
		</header>
		<div class="bilingual script-first">
			<div class="panel en">
				<p class="panel-label">Translation</p>
				<div class="verse-block">
					The accord that once lay between us—whether you recall it or not—that very
					bond, I mean, keeping faith—whether you recall it or not.
				</div>
				<div class="verse-block">
					Those fresh grievances, those complaints, those tales told in playful turns;
					that sulking over every word—whether you recall it or not.
				</div>
			</div>
			<div class="panel ur script-rtl">
				<p class="panel-label" lang="ur" dir="rtl">متن</p>
				<div class="verse-block" lang="ur" dir="rtl">
					وہ جو ہم میں تم میں قرار تھا تمہیں یاد ہو کہ نہ یاد ہو
					<br />
					وہی یعنی وعدہ نباہ کے تمہیں یاد ہو کہ نہ یاد ہو
				</div>
				<div class="verse-block" lang="ur" dir="rtl">
					وہ نئے گلے وہ شکایاتیں وہ مزے مزے کی حکایاتیں
					<br />
					وہ ہر ایک بات پہ رُوٹھنا تمہیں یاد ہو کہ نہ یاد ہو
				</div>
			</div>
		</div>
	</section>

	<section class="ghazal" aria-labelledby="g2">
		<header>
			<h2 id="g2">Ghazal — <span lang="ur-Latn">yeh ārzū thī</span></h2>
		</header>
		<div class="bilingual script-first">
			<div class="panel en">
				<p class="panel-label">Translation</p>
				<div class="verse-block">
					I had wished to bring you face to face with the rose; I and the restless
					nightingale would have talked with you.
				</div>
			</div>
			<div class="panel ur script-rtl">
				<p class="panel-label" lang="ur" dir="rtl">متن</p>
				<div class="verse-block" lang="ur" dir="rtl">
					یہ آرزو تھی تجھے گل کے روبرو کرتے
					<br />
					ہم اور بلبلِ بیتاب گفتگو کرتے
				</div>
			</div>
		</div>
	</section>
</main>
