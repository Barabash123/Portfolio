<script>
	import Logo from '../assets/logo.svg';
	import * as m from '$lib/paraglide/messages.js';
	import SocialCard from './SocialCard.svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		document.body.style.overflow = isMenuOpen ? 'hidden' : '';
	}
</script>

<header>
	<a href="/" class="logo">
		<Logo width={60} height={60} />
	</a>

	<button class="hamburger" class:active={isMenuOpen} on:click={toggleMenu}>
		<span></span>
		<span></span>
		<span></span>
	</button>

	<nav class="desktop_nav">
		<a href="#" on:click={() => (isMenuOpen = false)}>{m.header_1()}</a>
		<a href="#" on:click={() => (isMenuOpen = false)}>{m.header_2()}</a>
		<a href="#" on:click={() => (isMenuOpen = false)}>{m.header_3()}</a>
	</nav>
</header>

{#if isMenuOpen}
	<div
		class="backdrop"
		on:click={() => (isMenuOpen = false)}
		transition:fly={{ duration: 300, x: 0, opacity: 1 }}
	></div>

	<div
		class="mobile_menu"
		in:fly={{ duration: 300, x: window.innerWidth, opacity: 1 }}
		out:fly={{ duration: 300, x: window.innerWidth, opacity: 1 }}
	>
		<nav class:active={isMenuOpen}>
			<a href="#" on:click={() => (isMenuOpen = false)}>{m.header_1()}</a>
			<a href="#" on:click={() => (isMenuOpen = false)}>{m.header_2()}</a>
			<a href="#" on:click={() => (isMenuOpen = false)}>{m.header_3()}</a>
		</nav>
		<div class="socials">
			<SocialCard showArrow link={m.social_link_1()} name="">
				<svg
					width="50"
					height="34"
					viewBox="0 0 50 34"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.1842 14.7742C20.1842 14.7742 24.9152 14.4061 24.9152 8.61659C24.9152 2.81961 21.0444 5.73142e-08 16.1384 5.73142e-08H0V32.3679H16.1384C16.1384 32.3679 25.993 32.691 25.993 22.8123C25.9905 22.8098 26.4206 14.7742 20.1842 14.7742ZM7.1115 5.7494H16.1384C16.1384 5.7494 18.3339 5.7494 18.3339 9.11491C18.3339 12.4854 17.0436 12.9737 15.5783 12.9737H7.1115V5.7494ZM15.6808 26.6135H7.1115V17.9619H16.1384C16.1384 17.9619 19.4091 17.9168 19.4091 22.4066C19.4091 26.1928 16.9661 26.586 15.6808 26.6135ZM39.1307 8.23096C27.2007 8.23096 27.2107 20.6688 27.2107 20.6688C27.2107 20.6688 26.3956 33.0415 39.1307 33.0415C39.1307 33.0415 49.7405 33.6776 49.7405 24.435H44.2843C44.2843 24.435 44.4644 27.9182 39.3133 27.9182C39.3133 27.9182 33.8521 28.2988 33.8521 22.2839H49.913C49.9155 22.2814 51.6859 8.23096 39.1307 8.23096ZM43.9843 17.9619H33.7971C33.7971 17.9619 34.4623 12.9737 39.2533 12.9737C44.0443 12.9737 43.9843 17.9619 43.9843 17.9619ZM45.252 1.90061H32.4568V5.89214H45.252V1.90061Z"
						fill="#F9F3EE"
					/>
				</svg>
			</SocialCard>
			<SocialCard link={m.social_link_2()} name="">
				<svg
					width="33"
					height="33"
					viewBox="0 0 33 33"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7.33333 3.66667C7.33333 5.68333 6.05 7.33333 3.66667 7.33333C1.46667 7.33333 0 5.68333 0 3.85C0 1.83333 1.46667 0 3.66667 0C5.86667 0 7.33333 1.65 7.33333 3.66667ZM0 33H7.33333V9.16667H0V33ZM24.9333 9.53333C21.0833 9.53333 18.8833 11.7333 17.9667 13.2H17.7833L17.4167 10.0833H10.8167C10.8167 12.1 11 14.4833 11 17.2333V33H18.3333V19.9833C18.3333 19.25 18.3333 18.7 18.5167 18.15C19.0667 16.8667 19.9833 15.2167 22 15.2167C24.5667 15.2167 25.6667 17.4167 25.6667 20.35V33H33V19.4333C33 12.65 29.5167 9.53333 24.9333 9.53333Z"
						fill="#F9F3EE"
					/>
				</svg>
			</SocialCard>
			<SocialCard link={m.social_link_3()} name="">
				<svg
					width="36"
					height="24"
					viewBox="0 0 36 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.12786 2.572C2.08674 3.096 15.3695 10.36 15.8647 10.63C16.3599 10.9 17.0004 11.028 17.6449 11.028C18.2894 11.028 18.93 10.9 19.4251 10.63C19.9203 10.36 33.2031 3.096 34.162 2.572C35.1228 2.046 36.0306 0 34.2681 0H1.02372C-0.738804 0 0.168986 2.046 1.12786 2.572ZM34.608 6.978C33.5175 7.556 20.0932 14.676 19.4251 15.032C18.7571 15.388 18.2894 15.43 17.6449 15.43C17.0004 15.43 16.5328 15.388 15.8647 15.032C15.1966 14.676 1.84899 7.554 0.758459 6.976C-0.00785638 6.568 3.17553e-06 7.046 3.17553e-06 7.414C3.17553e-06 7.782 3.17553e-06 22 3.17553e-06 22C3.17553e-06 22.84 1.11214 24 1.96492 24H33.4035C34.2563 24 35.3684 22.84 35.3684 22C35.3684 22 35.3684 7.784 35.3684 7.416C35.3684 7.048 35.3763 6.57 34.608 6.978Z"
						fill="#F9F3EE"
					/>
				</svg>
			</SocialCard>
		</div>
	</div>
{/if}

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 40px 70px 0 70px;
		@media (max-width: 768px) {
			align-items: center;
			padding: 50px 25px 0 25px;
		}
	}
	nav {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 40px;
		@media (max-width: 768px) {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
			position: relative;
			z-index: 100;
			gap: 50px;
			padding-top: 160px;
		}
	}
	.logo {
		color: var(--primary-color);
	}
	a {
		color: var(--secondary-color);
		transition: 0.3s ease-in-out color;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		transition: 0.3s ease-in-out all;
		&:hover {
			color: var(--primary-color);
			svg {
				transform: translate(3px, -3px);
			}
		}
	}
	.hamburger {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		z-index: 101;

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 30px;
			height: 20px;
		}

		span {
			display: block;
			width: 100%;
			height: 2px;
			background-color: var(--border-color);
			transition: all 0.3s ease-in-out;
		}

		&.active {
			span {
				&:first-child {
					transform: translateY(9px) rotate(45deg);
				}

				&:nth-child(2) {
					opacity: 0;
				}

				&:last-child {
					transform: translateY(-9px) rotate(-45deg);
				}
			}
		}
	}
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--background-color);
		z-index: 99;
	}
	.mobile_menu {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 95px;
		padding: 0 25px;
		background: var(--background-color);
		z-index: 100;
		overflow-y: auto;
	}
	.desktop_nav {
		@media (max-width: 768px) {
			display: none;
		}
	}
	.socials {
		display: flex;
		flex-direction: column;
		gap: 10px;
		height: 100%;
	}
	.mobile_menu nav a {
		opacity: 0;
		animation: fadeIn 0.3s ease-in-out forwards;
		animation-delay: calc(var(--index) * 0.1s);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
