<script>
	import { goto } from '$app/navigation';
</script>

<div>
	<button onclick={() => goto('/')}>Go back</button>
</div>

<style>
	div {
		margin: 100px 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	button {
		color: var(--secondary-color);
		border-radius: 5px;
		border: 1px solid var(--secondary-color);
		padding: 0.5rem 1rem;
	}
</style>
