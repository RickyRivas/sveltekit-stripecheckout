<script>
	import { enhance, applyAction } from '$app/forms';
	export let form;
</script>

<!-- '?' inside the action is a query parameter -->
<form
	method="POST"
	action="?/donate"
	use:enhance={({ form }) => {
		// before form submission to server
		return async ({ result, update }) => {
			// after form submission to server
			console.log(result);
			if (result.type === 'success') {
				window.location.href = result.data.url;
				form.reset();
			} else if (result.type === 'invalid') {
				await applyAction(result);
			}
			// update dom
			update();
		};
	}}
>
	<input type="number" min="5" name="amount" inputmode="decimal" value={form?.amount ?? ''} />
	<button>Pay</button>
</form>

{#if form?.error}
	<p>Error! {form?.message}</p>
{/if}
