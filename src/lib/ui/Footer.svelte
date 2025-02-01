<script>
	import * as m from '$lib/paraglide/messages.js';
</script>

<footer>
	<span>{m.copyright()}</span>
</footer>

<style>
	footer {
		background: var(--subtle-color);
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 65px 70px;
	}
	span {
		color: var(--secondary-color);
		text-align: right;
		font-size: 14px;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
	}
</style>
