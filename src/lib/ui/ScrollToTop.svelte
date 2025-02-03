<script>
	import { onMount } from 'svelte';

	let showButton = $state(false);

	// Show button when page is scrolled up to given distance
	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			showButton = true;
		} else {
			showButton = false;
		}
	};

	// Scroll to top smoothly
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	onMount(() => {
		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	});
</script>

{#if showButton}
	<button onclick={scrollToTop} class="scroll-to-top" aria-label="Scroll to top">
		<svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1.47461 11.7459L13 0.898438L24.5255 11.7459"
				stroke="#EAAC9E"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
{/if}

<style>
	.scroll-to-top {
		position: fixed;
		right: 20px;
		bottom: 20px;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		color: var(--primary-color);
		background-color: var(--subtle-color);
		border: 9999px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		z-index: 1000;
		@media (max-width: 768px) {
			width: 60px;
			height: 60px;
		}
	}

	.scroll-to-top:hover {
		background-color: #555;
		opacity: 1;
	}

	/* Optional: Add animation when button appears */
	.scroll-to-top {
		animation: fadeIn 0.3s ease-in;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 0.7;
			transform: translateY(0);
		}
	}
</style>
