<script lang="ts">
	import { base } from '$app/paths';

	type Props = { file: string; alt: string };
	let { file, alt }: Props = $props();
</script>

<figure class="portrait-wrap">
	<img
		class="portrait"
		src={`${base}/assets/img/poets/${file}`}
		{alt}
		width="220"
		height="293"
		decoding="async"
	/>
</figure>
