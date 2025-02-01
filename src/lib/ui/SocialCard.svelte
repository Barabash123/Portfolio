<script>
	let { children, name, link, showArrow = false } = $props();
</script>

<a target="_blank" href={link}>
	<div class="icon">
		{#if children}
			{@render children()}
		{/if}
	</div>

	<svg
		class="arrow"
		width="16"
		height="82"
		viewBox="0 0 16 82"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M7.29289 81.7071C7.68341 82.0976 8.31658 82.0976 8.7071 81.7071L15.0711 75.3431C15.4616 74.9526 15.4616 74.3195 15.0711 73.9289C14.6805 73.5384 14.0474 73.5384 13.6568 73.9289L7.99999 79.5858L2.34314 73.9289C1.95262 73.5384 1.31945 73.5384 0.928927 73.9289C0.538403 74.3195 0.538403 74.9526 0.928927 75.3431L7.29289 81.7071ZM7 -2.70277e-08L6.99999 81L8.99999 81L9 2.70277e-08L7 -2.70277e-08Z"
			fill="#4A4746"
		/>
	</svg>

	{#if showArrow}
		<svg
			class="arrow_mobile"
			width="49"
			height="12"
			viewBox="0 0 49 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M48.5303 6.53033C48.8232 6.23744 48.8232 5.76256 48.5303 5.46967L43.7574 0.696699C43.4645 0.403806 42.9896 0.403806 42.6967 0.696699C42.4038 0.989593 42.4038 1.46447 42.6967 1.75736L46.9393 6L42.6967 10.2426C42.4038 10.5355 42.4038 11.0104 42.6967 11.3033C42.9896 11.5962 43.4645 11.5962 43.7574 11.3033L48.5303 6.53033ZM0 6.75L48 6.75V5.25L0 5.25L0 6.75Z"
				fill="#4A4746"
			/>
		</svg>
	{/if}

	{#if name}
		<span>{name}</span>
	{/if}
</a>

<style lang="scss">
	a {
		border-radius: 10px;
		border: 1px solid var(--border-color);
		background: var(--background-color);
		padding: 50px;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		gap: 40px;
		position: relative;
		&:hover .arrow {
			transform: translateY(-10px);
			@media (max-width: 768px) {
				transform: translateX(-10px) rotate(90deg);
			}
		}
		&:hover .arrow_mobile,
		&:active .arrow_mobile {
			transform: translateX(-10px);
		}
		@media (max-width: 768px) {
			padding: 30px;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: fit-content;
			gap: 25px;
		}
	}
	.arrow {
		transition: 0.3s ease-in-out transform;
		@media (max-width: 768px) {
			display: none;
		}
	}
	.arrow_mobile {
		transition: 0.3s ease-in-out transform;
		display: none;

		@media (max-width: 768px) {
			display: block;
		}
	}
	.icon {
		flex-grow: 1;
	}
	span {
		color: var(--secondary-color);
		font-size: 30px;
		font-style: normal;
		font-weight: 400;
		line-height: 36px; /* 120% */
	}
</style>
