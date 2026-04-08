<script lang="ts">
	import Portrait from '$lib/components/Portrait.svelte';
</script>

<svelte:head>
	<title>Faiz Ahmad Faiz</title>
</svelte:head>

<div class="page-head">
	<h1>Faiz Ahmad Faiz</h1>
	<p class="caption">1911–1984 · Urdu</p>
</div>

<main class="container">
	<Portrait file="faiz.jpg" alt="Portrait photograph of Faiz Ahmad Faiz" />

	<section class="ghazal" aria-labelledby="g1">
		<header>
			<h2 id="g1">Ghazal — <span lang="ur-Latn">mujh se pahlī sī muḥābbat</span></h2>
		</header>
		<div class="bilingual script-first">
			<div class="panel en">
				<p class="panel-label">Translation</p>
				<div class="verse-block">
					Do not ask me, my love, for that first passion again. I had thought that if you
					were near, life would be radiant.
				</div>
			</div>
			<div class="panel ur script-rtl">
				<p class="panel-label" lang="ur" dir="rtl">متن</p>
				<div class="verse-block" lang="ur" dir="rtl">
					مجھ سے پہلی سی محبت میرے محبوب نہ مانگ
					<br />
					میں نے سمجھا تھا کہ تُو ہے تو درخشاں ہے حیات
				</div>
			</div>
		</div>
	</section>

	<section class="ghazal" aria-labelledby="g2">
		<header>
			<h2 id="g2">Poem — <span lang="ur-Latn">aaj bāzār meñ</span></h2>
			<p class="meta">
				From the collection <cite>Nuskha Hai Wafa</cite> (often classed as a nazm).
			</p>
		</header>
		<div class="bilingual script-first">
			<div class="panel en">
				<p class="panel-label">Translation</p>
				<div class="verse-block">
					Tearful eyes, a restless heart—not enough; the hidden calumny of love—not
					enough. Today walk through the market in chains; scatter your hands, walk
					intoxicated and dancing.
				</div>
				<div class="verse-block">
					Walk with dust on your head, walk with blood on your hem; the whole city of the
					beloved waits—walk.
				</div>
			</div>
			<div class="panel ur script-rtl">
				<p class="panel-label" lang="ur" dir="rtl">متن</p>
				<div class="verse-block" lang="ur" dir="rtl">
					چشمِ نم جانِ شوریدہ کافی نہیں
					<br />
					تہمتِ عشقِ پوشیدہ کافی نہیں
				</div>
				<div class="verse-block" lang="ur" dir="rtl">
					آج بازار میں پابجولاں چلو
					<br />
					دست افشاں چلو، مست و رقصاں چلو
				</div>
				<div class="verse-block" lang="ur" dir="rtl">
					خاک بر سر چلو، خون بدمامن چلو
					<br />
					راہ تکتا ہے سب شہرِ جاناں چلو
				</div>
			</div>
		</div>
	</section>
</main>
