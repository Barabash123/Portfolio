<script>
	let { title, role, imgSrc, className, children, mobImgSrc, mobileHeight = 510 } = $props();
</script>

<div class={`card ${className || ''}`} style="--mobile-height: {mobileHeight}px">
	<div class="card_header">
		<span class="card_header__title">{title}</span>
		<span class="card_header__role">{role}</span>
	</div>

	<div class="card_image">
		{#if children}
			{@render children()}
		{:else}
			<img src={imgSrc} class="desktop" alt="project" />
			<img src={mobImgSrc || imgSrc} class="mobile" alt="project" />
		{/if}
	</div>
</div>

<style lang="scss">
	.desktop {
		@media (max-width: 768px) {
			display: none;
		}
	}
	.mobile {
		display: none;
		@media (max-width: 768px) {
			display: block;
		}
	}
	.card {
		border-radius: 10px;
		border: 1px solid var(--border-color);
		background-color: var(--background-color);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		height: 625px;
		@media (max-width: 768px) {
			height: var(--mobile-height);
		}
	}
	.card_header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 35px 40px;
		@media (max-width: 768px) {
			padding: 25px 20px 20px 20px;
		}
	}
	.card_header__title {
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		color: var(--secondary-color);
		@media (max-width: 768px) {
			font-size: 18px;
		}
	}
	.card_header__role {
		text-align: right;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		color: var(--secondary-color);
		@media (max-width: 768px) {
			display: none;
		}
	}
	.card_image {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--secondary-color);
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.7px;
		text-transform: uppercase;
		border-radius: 10px 10px 9px 9px;
	}
	.card_image img {
		transition: 0.3s ease-in-out transform;
		position: absolute;
		left: 50%;
		top: 50%;
		height: 100%;
		width: 100%;
		transform: translate(-50%, -50%);
		&:hover {
			transform: translate(-50%, -50%) scale(1.05);
		}
	}
</style>
