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

	let hover1Element = $state();
	let hover2Element = $state();

	$effect(() => {
		let mouseX = 0;
		let mouseY = 0;
		let hover1X = 0;
		let hover1Y = 0;

		const lerp = (start, end, t) => start * (1 - t) + end * t;

		const handleMouseMove = (e) => {
			mouseX = e.clientX * 0.01;
			mouseY = e.clientY * 0.01;
		};

		const animate = () => {
			hover1X = lerp(hover1X, mouseX, 0.1);
			hover1Y = lerp(hover1Y, mouseY, 0.1);

			if (hover1Element) {
				hover1Element.style.transform = `translate3d(${hover1X}px, ${hover1Y}px, 0) translate(-50%, -50%)`;
			}

			requestAnimationFrame(animate);
		};

		if (hover2Element) {
			hover2Element.addEventListener('mousemove', handleMouseMove);
		}

		animate();

		return () => {
			if (hover2Element) {
				hover2Element.removeEventListener('mousemove', handleMouseMove);
			}
		};
	});

	import { onMount } from 'svelte';
	import CredoCard from '$lib/ui/CredoCard.svelte';
	import ScrollToTop from '$lib/ui/ScrollToTop.svelte';
	import SocialCard from '$lib/ui/SocialCard.svelte';
	import Socials from '$lib/ui/Socials.svelte';
</script>

<div class="page">
	<ScrollToTop />
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

		<section id="work" class="work">
			<div class="work_header">
				<span class="work_header_left">{m.hero_footer_1()}</span>
				<span class="work_header_right">{m.hero_footer_2()}</span>
			</div>

			<div class="work_honey">
				<div class="work_honey__header">
					<span class="work_honey__left">{m.work_1_1()}</span>
					<span class="work_honey__right">{m.work_1_2()}</span>
				</div>

				<div class="work_honey__main">
					<div bind:this={hover2Element} class="work_honey__main_left">
						<img class="work_honey__main_left_2" src="/images/honey_2.png" alt="" />
						<img
							bind:this={hover1Element}
							class="work_honey__main_left_1"
							src="/images/honey_1.png"
							alt=""
						/>
					</div>
					<div class="work_honey__main_right">
						<img src="/images/honey.png" alt="" />
					</div>
				</div>
			</div>

			<div class="work_grid">
				<WorkCard
					imgSrc="/images/work_1.jpg"
					mobImgSrc="/images/work1_2.jpg"
					title={m.work_2_1()}
					role={m.work_2_2()}
				/>
				<WorkCard
					imgSrc="/images/work_2.jpg"
					mobImgSrc="/images/work2_2.png"
					title={m.work_3_1()}
					role={m.work_3_2()}
				/>
				<WorkCard
					imgSrc="/images/work_3.png"
					mobImgSrc="/images/work3_2.png"
					title={m.work_4_1()}
					role={m.work_4_2()}
				/>
				<WorkCard imgSrc="/images/work_4.png" title={m.work_5_1()} role={m.work_5_2()} />
				<WorkCard
					imgSrc="/images/work_5.jpg"
					mobImgSrc="/images/work5_2.png"
					title={m.work_6_1()}
					role={m.work_6_2()}
				/>

				<WorkCard mobileHeight={380} title={m.work_7_1()} role={m.work_7_2()}>
					<a href="#" class="flex h-full w-full items-center justify-center gap-2 uppercase">
						{m.work_7_3()}
						<svg
							width="11"
							height="11"
							viewBox="0 0 11 11"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.9424 0.999995C10.9424 0.585781 10.6066 0.249995 10.1924 0.249995L3.44239 0.249995C3.02817 0.249995 2.69239 0.585781 2.69239 0.999995C2.69239 1.41421 3.02817 1.74999 3.44239 1.74999H9.44239L9.44239 7.74999C9.44239 8.16421 9.77817 8.49999 10.1924 8.49999C10.6066 8.49999 10.9424 8.16421 10.9424 7.74999L10.9424 0.999995ZM1.53033 10.7227L10.7227 1.53032L9.66206 0.469665L0.46967 9.66205L1.53033 10.7227Z"
								fill="currentColor"
							/>
						</svg>
					</a>
				</WorkCard>
			</div>
		</section>

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

	.work {
		padding: 50px 70px 130px 70px;
		border-bottom: 1px solid var(--border-color);
		@media (max-width: 768px) {
			padding: 50px 25px 130px 25px;
		}
	}
	.work_header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 25px 0;
		@media (max-width: 768px) {
			flex-direction: column-reverse;
			gap: 5px;
		}
	}
	.work_honey__header {
		padding: 35px 40px 30px 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media (max-width: 768px) {
			padding: 25px 20px 20px 20px;
		}
	}
	.work_header_left,
	.work_header_right {
		color: var(--secondary-color);
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		@media (max-width: 768px) {
			font-size: 10px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;
			letter-spacing: 0.5px;
			text-transform: uppercase;
		}
	}
	.work_header_left {
		color: var(--primary-color);
		font-weight: 500;
	}
	.work_header_right {
		max-width: 400px;
		text-transform: uppercase;
		text-align: right;
		@media (max-width: 768px) {
			display: none;
		}
	}
	.work_honey {
		overflow: hidden;
		margin-bottom: 30px;
		border-radius: 10px;
		border: 1px solid var(--border-color);
		background: var(--background-color);
	}
	.work_honey__left {
		color: var(--secondary-color);
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		@media (max-width: 768px) {
			font-size: 18px;
		}
	}
	.work_honey__right {
		color: var(--secondary-color);
		text-align: right;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		@media (max-width: 768px) {
			display: none;
		}
	}
	.work_honey__main {
		height: 625px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		@media (max-width: 768px) {
			height: 510px;
		}
	}
	.work_honey__main_left {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	.work_honey__main_left img {
		position: absolute;
		left: 50%;
		top: 50%;
		height: 100%;
		width: 100%;
		object-fit: cover;
		transform: translate(-50%, -50%);
	}
	.work_honey__main_left_1 {
		height: 180px !important;
		width: 220px !important;
	}
	.work_honey__main_left_2 {
		transition: 0.3s ease-in-out transform;
	}
	.work_honey__main_right {
		height: 100%;
		width: 100%;
		position: relative;
		background-color: #f5e6d5;
		@media (max-width: 768px) {
			display: none;
		}
	}
	.work_honey__main_right img {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		object-fit: cover;
	}
	.work_grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
		@media (max-width: 768px) {
			grid-template-columns: 1fr;
		}
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
