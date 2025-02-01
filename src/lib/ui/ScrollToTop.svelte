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
		<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1 9L9.5 1L18 9"
				stroke="currentColor"
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
		width: 40px;
		height: 40px;
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
