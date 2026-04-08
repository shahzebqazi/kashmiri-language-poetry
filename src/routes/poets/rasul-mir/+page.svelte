<script lang="ts">
	import Portrait from '$lib/components/Portrait.svelte';
</script>

<svelte:head>
	<title>Rasul Mir</title>
</svelte:head>

<div class="page-head">
	<h1>Rasul Mir</h1>
	<p class="caption">circa 1840–1870 · Kashmiri</p>
</div>

<main class="container">
	<Portrait file="rasul-mir.jpg" alt="Portrait of Rasul Mir (Mohan Raina)" />

	<section class="ghazal" aria-labelledby="rind">
		<header>
			<h2 id="rind">Ghazal — <span lang="ks-Latn">Rind poosh maal gindni draai lolo</span></h2>
		</header>
		<div class="bilingual script-first">
			<div class="panel en">
				<p class="panel-label">Translation</p>
				<div class="verse-block">
					The gay lover goes out to frolic; the sober one performs worship. What grace
					in the swan-neck of Henziyani—spare her from evil eyes, O God; your bounty
					will not lessen at court.
				</div>
				<div class="verse-block">
					Black hair and a forehead bright as lightning; the navel’s curl, the musk of
					down—Henzi’s curls, a hundred trellises of jasmine: the love goes out to
					frolic again.
				</div>
			</div>
			<div class="panel ur">
				<p class="panel-label" lang="ks-Latn">Kashmiri (transliteration)</p>
				<div class="verse-block script-translit" lang="ks">
					Rind poosh maal gindni draai lolo Shoobi shabaash chani puu’zai(Ibadat) lolo
					<br /><br />
					Raaz’e hyenzi’yani naaz kya , ae’nz’ni gardan Ya ilahi chashme bad nish rachtam
					<br /><br />
					Gasi kya kam chani baargaahi lolo Rind poosh maal gindney draai lolo
					<br /><br />
					Kaale mooyas taakaen chei barsar Fael’le naafai moulmut mushqe adfar
					<br /><br />
					Hyen’zi pouraan czou’natre tai daaie lolo Rind poosh maal gindnei draai lolo
				</div>
			</div>
		</div>

		<section aria-labelledby="analysis-heading">
			<h3 id="analysis-heading">Rind Posh Maal — rhyme and refrain</h3>
			<p>
				The opening lines below mark the shared end-rhyme (kaafiya) syllables and the
				repeating end phrase (radeef) as commonly analysed in Urdu–Persian prosody.
			</p>
			<div class="verse-block script-translit" lang="ks">
				Rind poosh maal gindni <span class="kaafiya">draai</span>
				<span class="radeef">lolo</span> Shoobi shabaash chani
				<span class="kaafiya">puu’zai</span> <span class="radeef">lolo</span>
			</div>

			<h3>Opening misraʿ and <span lang="ur-Latn">Behr-e-Hazaj</span></h3>
			<p class="meta">
				The foot <span lang="ar" dir="rtl">مَفَاعِیلُنْ</span> (<span lang="ar-Latn"
					>mafāʿīlun</span
				>) is often taught with a long–short weight pattern summarised as 1–2–2–2. The
				table maps the first half-line (opening misraʿ) of the lyric in Latin
				transliteration to that pattern as an aid to reading—not as a claim about
				Kashmiri scansion in performance.
			</p>
			<table class="meter-table">
				<caption>
					Opening misraʿ: <span lang="ks-Latn">Rind poosh maal gindni draai lolo</span>
				</caption>
				<thead>
					<tr>
						<th scope="col">Foot segment</th>
						<th scope="col">Pattern (1–2–2–2)</th>
						<th scope="col">Syllables (approx.)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>short</td>
						<td>Rind</td>
					</tr>
					<tr>
						<td>2</td>
						<td>long</td>
						<td>poosh maal</td>
					</tr>
					<tr>
						<td>3</td>
						<td>long</td>
						<td>gindni</td>
					</tr>
					<tr>
						<td>4</td>
						<td>long</td>
						<td>draai lo-lo</td>
					</tr>
				</tbody>
			</table>
		</section>
	</section>

	<section class="ghazal" aria-labelledby="gaste">
		<header>
			<h2 id="gaste">Ghazal — <span lang="ks-Latn">Gaste wesiye antan aste lolo</span></h2>
		</header>
		<div class="bilingual script-first">
			<div class="panel en">
				<p class="panel-label">Reading</p>
				<div class="verse-block">
					A companion lyric in the same oral tradition, built on the same refrain, moves
					through lovers’ names and landscapes familiar in Rasul Mir’s corpus.
				</div>
			</div>
			<div class="panel ur">
				<p class="panel-label" lang="ks-Latn">Kashmiri (transliteration)</p>
				<div class="verse-block script-translit" lang="ks">
					Gaste wesiye antan aste lolo Hee mea kermas pooshan daste lolo
					<br /><br />
					Gaste lillah antan moun dilbar Mea chu billah, bai(Me) maernas te lolo
					<br /><br />
					Nyeeze khanjar laye’nam aas nai aar Paare kornam dile jigras te lolo
				</div>
			</div>
		</div>
	</section>
</main>
