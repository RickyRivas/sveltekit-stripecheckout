<script>
	export let data;
	const { products } = data;
	console.log(data);
</script>

<h1>Welcome to shop!</h1>
{#each products as p}
	<p>{p.title}</p>
	<span>{p.description}</span>
{/each}
