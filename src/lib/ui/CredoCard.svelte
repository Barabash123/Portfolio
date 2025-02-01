<script>
	let { title, subtitle, className } = $props();
</script>

<div class={`card ${className || ''}`}>
	<span class="card_header__title">{title}</span>
	<span class="card_header__role">{subtitle}</span>
</div>

<style lang="scss">
	.card {
		border-radius: 10px;
		border: 1px solid var(--border-color);
		background-color: var(--background-color);
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30px 40px 30px 35px;
		@media (max-width: 768px) {
			flex-direction: column;
			align-items: flex-start;
			text-align: start;
			gap: 24px;
		}
	}

	.card_header__title {
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		color: var(--secondary-color);
	}
	.card_header__role {
		text-align: right;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		color: var(--secondary-color);
		@media (max-width: 768px) {
			text-align: start;
		}
	}
</style>
