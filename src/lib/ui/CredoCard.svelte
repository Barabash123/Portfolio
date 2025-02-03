<script>
	let {
		title,
		subtitle,
		className = '',
		withArrow = false,
		onClick,
		type = 1,
		onClickToLeft
	} = $props();

	let isClickable = !!onClick;
</script>

<button
	onclick={onClick}
	class={`card ${className || ''} ${isClickable ? 'cursor-pointer' : 'cursor-default'} ${type === 2 ? 'card_type_2' : ''}`}
>
	<span
		onclick={(e) => {
			e.stopPropagation();
			onClickToLeft?.();
		}}
		class="card_header__title">{title}</span
	>
	<span class="card_header__role">
		{subtitle}
		{#if withArrow}
			<svg
				width="14"
				height="12"
				viewBox="0 0 14 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M13.5303 6.12603C13.8232 5.83314 13.8232 5.35827 13.5303 5.06537L8.75736 0.292402C8.46447 -0.000491142 7.98959 -0.000491142 7.6967 0.292402C7.40381 0.585296 7.40381 1.06017 7.6967 1.35306L11.9393 5.5957L7.6967 9.83834C7.40381 10.1312 7.40381 10.6061 7.6967 10.899C7.98959 11.1919 8.46447 11.1919 8.75736 10.899L13.5303 6.12603ZM3.16101e-08 6.3457L13 6.3457L13 4.8457L-3.16101e-08 4.8457L3.16101e-08 6.3457Z"
					fill="#F9F3EE"
				/>
			</svg>
		{/if}
	</span>
</button>

<style lang="scss">
	.card {
		width: 100%;
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
			padding: 22px 20px;
		}
		&:hover {
			.card_header__role svg {
				transform: translateX(3px);
			}
		}
	}
	.card_type_2 {
		@media (max-width: 768px) {
			padding: 0;
			gap: 0;
			.card_header__title {
				padding: 50px 0;
				width: 100%;
				color: var(--primary-color);
				text-align: center;
				font-size: 12px;
				font-style: normal;
				font-weight: 500;
				line-height: normal;
				letter-spacing: 0.6px;
				text-transform: uppercase;
				border-bottom: 1px solid var(--border-color);
			}
			.card_header__role {
				padding: 35px 0 30px 0;
				width: fit-content;
				font-size: 12px;
				font-weight: 500;
				margin: 0 auto;
			}
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
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 8px;
		@media (max-width: 768px) {
			text-align: start;
		}
	}
</style>
