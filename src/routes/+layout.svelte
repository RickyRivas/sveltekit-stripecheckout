<script>
	import { browser } from '$app/environment';
</script>

<svelte:head>
	{#if browser}
		<script src="https://js.stripe.com/v3/"></script>
	{/if}
</svelte:head>

<a href="/">Home</a>
<a href="/shop" data-sveltekit-prefetch>shop</a>
<a href="/movies" data-sveltekit-prefetch>movies</a>
<a href="/donation" data-sveltekit-prefetch>Donate</a>
<slot />
