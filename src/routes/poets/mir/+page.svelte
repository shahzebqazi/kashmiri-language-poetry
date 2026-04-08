<script lang="ts">
	import Portrait from '$lib/components/Portrait.svelte';
</script>

<svelte:head>
	<title>Mir Taqi Mir</title>
</svelte:head>

<div class="page-head">
	<h1>Mir Taqi Mir</h1>
	<p class="caption">1723–1810 · Urdu</p>
</div>

<main class="container">
	<Portrait file="mir.jpg" alt="Portrait of Mir Taqi Mir (1786 miniature)" />

	<section class="ghazal" aria-labelledby="g1">
		<header>
			<h2 id="g1">Ghazal — <span lang="ur-Latn">pattā pattā buuTā buuTā</span></h2>
		</header>
		<div class="bilingual script-first">
			<div class="panel en">
				<p class="panel-label">Translation</p>
				<div class="verse-block">
					Leaf and leaf, bush and bush—knows my state; only the flower does not know, or
					pretends not to; the whole garden knows.
				</div>
				<div class="verse-block">
					If it can, it will not let her pearl-drop earrings reach her earlobes—the sky
					knows the pupil-stars in the eyes of sun and moon.
				</div>
			</div>
			<div class="panel ur script-rtl">
				<p class="panel-label" lang="ur" dir="rtl">متن</p>
				<div class="verse-block" lang="ur" dir="rtl">
					پتہ پتہ بوٹا بوٹا حال ہمارا جانے ہے
					<br />
					جانے نہ جانے گل ہی نہ جانے باغ تو سارا جانے ہے
				</div>
				<div class="verse-block" lang="ur" dir="rtl">
					لگنے نہ دے بس ہو تو اس کے گوہر گوش کو بالے تک
					<br />
					اس کو فلک چشم ماہ و خور کی پتلی کا تارا جانے ہے
				</div>
			</div>
		</div>
	</section>

	<section class="ghazal" aria-labelledby="g2">
		<header>
			<h2 id="g2">Ghazal — <span lang="ur-Latn">ulTī ho ga.iiñ sab tadbīreñ</span></h2>
		</header>
		<div class="bilingual script-first">
			<div class="panel en">
				<p class="panel-label">Translation</p>
				<div class="verse-block">
					Stratagems all came apart; no cure could render remedy—it was this ailment of
					my heart that finished me off finally.
				</div>
				<div class="verse-block">
					In youth I spent copious tears; in age I shut my eyes tiredly—meaning I stayed
					awake much of the night; come morning, I lie at peace.
				</div>
			</div>
			<div class="panel ur script-rtl">
				<p class="panel-label" lang="ur" dir="rtl">متن</p>
				<div class="verse-block" lang="ur" dir="rtl">
					الٹی ہو گئیں سب تدبیریں کچھ نہ دوا نے کام کیا
					<br />
					دیکھا اس بیماریِ دل نے آخر کام تمام کیا
				</div>
				<div class="verse-block" lang="ur" dir="rtl">
					عہد جوانی رو رو کاٹا پیری میں لیں آنکھیں موند
					<br />
					یعنی رات بہت تھے جاگے صبح ہوئی آرام کیا
				</div>
			</div>
		</div>
	</section>
</main>
