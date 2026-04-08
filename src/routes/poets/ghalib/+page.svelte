<script lang="ts">
	import Portrait from '$lib/components/Portrait.svelte';
</script>

<svelte:head>
	<title>Mirza Asadullah Khan Ghalib</title>
</svelte:head>

<div class="page-head">
	<h1>Mirza Asadullah Khan Ghalib</h1>
	<p class="caption">1797–1869 · Urdu and Persian</p>
</div>

<main class="container">
	<Portrait file="ghalib.jpg" alt="Portrait photograph of Mirza Ghalib" />

	<section class="ghazal" aria-labelledby="g1">
		<header>
			<h2 id="g1">Ghazal — <span lang="ur-Latn" dir="ltr">hazāroñ ḳhvāhisheñ</span></h2>
		</header>
		<div class="bilingual script-first">
			<div class="panel en">
				<p class="panel-label">Translation</p>
				<div class="verse-block">
					I have a thousand yearnings, each one afflicts me so; many were fulfilled for
					sure—not enough, although.
				</div>
				<div class="verse-block">
					Why is my murderer afraid—what would remain upon her neck? That blood which
					ceaselessly, from these weeping eyes, flows and flows.
				</div>
				<div class="verse-block">
					From Eden, Adam’s exile—we have heard of it—but we left your lane greatly
					dishonoured, having gone.
				</div>
			</div>
			<div class="panel ur script-rtl">
				<p class="panel-label" lang="ur" dir="rtl">متن</p>
				<div class="verse-block" lang="ur" dir="rtl">
					ہزاروں خواہشیں ایسی کہ ہر خواہش پر دم نکلے
					<br />
					بہت نکلے میرے ارمان لیکن پھر بھی کم نکلے
				</div>
				<div class="verse-block" lang="ur" dir="rtl">
					ڈرے کیوں میرا قاتل کیا رہے گا اس کی گردن پر
					<br />
					وہ خون جو چشم تر سے عمر بھر یوں دم بہ دم نکلے
				</div>
				<div class="verse-block" lang="ur" dir="rtl">
					نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن
					<br />
					بہت بے آبرو ہو کر تیرے کوچے سے ہم نکلے
				</div>
			</div>
		</div>
	</section>

	<section class="ghazal" aria-labelledby="g2">
		<header>
			<h2 id="g2">Ghazal — <span lang="ur-Latn">dil-e-nādān</span></h2>
		</header>
		<div class="bilingual script-first">
			<div class="panel en">
				<p class="panel-label">Translation</p>
				<div class="verse-block">
					O naive heart, what has come over you? What cure remains at last for this pain?
				</div>
				<div class="verse-block">
					I am eager, and she is weary; O God, what affair is this?
				</div>
			</div>
			<div class="panel ur script-rtl">
				<p class="panel-label" lang="ur" dir="rtl">متن</p>
				<div class="verse-block" lang="ur" dir="rtl">
					دلِ ناداں تجھے ہوا کیا ہے
					<br />
					آخر اس درد کی دوا کیا ہے
				</div>
				<div class="verse-block" lang="ur" dir="rtl">
					ہم ہیں مشتاق اور وہ بےزار
					<br />
					یا الٰہی یہ ماجرا کیا ہے
				</div>
			</div>
		</div>
	</section>
</main>
