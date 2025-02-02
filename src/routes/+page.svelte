<script>
	// @ts-nocheck
	import { i18n } from '$lib/i18n';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import * as m from '$lib/paraglide/messages.js';
	import Logo from '$lib/assets/logo.svg';
	import WorkCard from '$lib/ui/WorkCard.svelte';

	/**
	 * @param {import("$lib/paraglide/runtime").AvailableLanguageTag} newLanguage
	 */
	function switchToLanguage(newLanguage) {
		const canonicalPath = i18n.route(page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}

	import { onMount } from 'svelte';
	import CredoCard from '$lib/ui/CredoCard.svelte';
	import SocialCard from '$lib/ui/SocialCard.svelte';
	import Socials from '$lib/ui/Socials.svelte';
	import Work from '$lib/ui/Work.svelte';

	// $effect(() => {
	// 	if (!window.UnicornStudio) {
	// 		window.UnicornStudio = { isInitialized: !1 };
	// 		var i = document.createElement('script');
	// 		(i.src = 'https://cdn.unicorn.studio/v1.4.0/unicornStudio.umd.js'),
	// 			(i.onload = function () {
	// 				window.UnicornStudio.isInitialized ||
	// 					(UnicornStudio.init(), (window.UnicornStudio.isInitialized = !0));
	// 			}),
	// 			(document.head || document.body).appendChild(i);
	// 	}
	// });
</script>

<div class="page">
	<!-- <div data-us-project="6H1ZUyUWM7L4dg7KFLYo" class="unicorn"></div> -->
	<main>
		<section class="hero">
			<span class="hero_subtitle">{m.hero_subtitle()}</span>
			<h1 class="hero_title">{m.hero_title()}</h1>

			<div class="hero_midle">
				<span class="hero_midle__left">Work</span>
				<div class="hero_midle__line"></div>
				<p class="hero_midle__work">{m.hero_work()}</p>
			</div>
		</section>

		<Work />

		<section class="credo">
			<h2 class="credo_title">{m.credo_1()}</h2>
			<p class="credo_subtitle">
				{@html m.credo_2({
					commandName: `<a class="credo_subtitle__link" target="_blank" href="${m.credo_2_2()}">${'Team von antwerpes'}</a>`
				})}
			</p>

			<div class="credo_list">
				<div class="credo_list__top">
					<span class="credo_list__top_left">{m.credo_3()}</span>
					<span class="credo_list__top_right">{m.credo_4()}</span>
				</div>
				<CredoCard title={m.credo_list_1_1()} subtitle={m.credo_list_1_2()} />
				<CredoCard title={m.credo_list_2_1()} subtitle={m.credo_list_2_2()} />
				<CredoCard title={m.credo_list_3_1()} subtitle={m.credo_list_3_2()} />
				<CredoCard title={m.credo_list_4_1()} subtitle={m.credo_list_4_2()} />
			</div>
		</section>
	</main>
</div>

<style lang="scss">
	.page {
		position: relative;
		z-index: 10;
	}
	main {
		position: relative;
	}
	.unicorn {
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		position: fixed;
	}
	canvas {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 9;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		position: fixed;
	}
	.hero {
		height: calc(100vh - 60px);
		padding: 120px 250px 0 250px;
		@media (max-width: 768px) {
			padding: 120px 25px 0 25px;
			max-height: calc(100vh - 180px);
		}
	}
	.hero_subtitle {
		@include subtitle();
		color: var(--primary-color);
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
	.hero_title {
		@include h1();
		color: var(--secondary-color);
		font-size: 65px;
		font-style: normal;
		font-weight: 700;
		line-height: 80px; /* 114.286% */
		@media (max-width: 768px) {
			font-size: 37px;
			font-style: normal;
			font-weight: 700;
			line-height: 43px; /* 116.216% */
		}
	}
	.hero_midle {
		padding-top: 100px;
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		gap: 36px;
		@media (max-width: 768px) {
			display: none;
		}
	}
	.hero_midle__left {
		color: var(--secondary-color);
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 26px; /* 185.714% */
		letter-spacing: 0.7px;
		text-transform: uppercase;
	}
	.hero_midle__work {
		max-width: 570px;
		color: var(--secondary-color);
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 26px; /* 162.5% */
	}
	.hero_midle__line {
		margin-top: 10px;
		width: 70px;
		height: 1px;
		background-color: var(--secondary-color);
	}

	.credo {
		padding: 60px 70px 130px 70px;
		@media (max-width: 768px) {
			padding: 60px 25px 130px 25px;
		}
	}
	.credo_title {
		color: var(--primary-color);
		font-size: 70px;
		font-style: normal;
		font-weight: 700;
		line-height: 80px; /* 114.286% */
		max-width: 80%;
		@media (max-width: 768px) {
			font-size: 37px;
			max-width: 85%;
			line-height: 43px; /* 116.216% */
		}
	}
	.credo_subtitle {
		color: var(--secondary-color);
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 26px; /* 162.5% */
		width: 570px;
		position: relative;
		right: 240px;
		margin: 50px 0 120px auto;
		@media (max-width: 768px) {
			right: 0;
			width: fit-content;
		}
	}
	.credo_subtitle a {
		color: var(--primary-color);
	}
	.credo_subtitle a:hover {
		color: var(--secondary-color);
	}
	.credo_list {
		display: flex;
		flex-direction: column;
		display: flex;
		gap: 8px;
	}
	.credo_list__top {
		margin-bottom: 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media (max-width: 768px) {
			flex-direction: column-reverse;
			justify-content: center;
			gap: 7px;
			margin-bottom: 16px;
		}
	}
	.credo_list__top_left {
		color: var(--primary-color);
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.7px;
		text-transform: uppercase;
	}
	.credo_list__top_right {
		color: var(--secondary-color);
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.7px;
		text-transform: uppercase;
	}
</style>
