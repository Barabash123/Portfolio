<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import { getPosts } from '$lib/api/cms.js';
	import * as m from '$lib/paraglide/messages.js';
	import CredoCard from '$lib/ui/CredoCard.svelte';

	let { data } = $props();

	async function handleGoToNextProject() {
		try {
			const projects = await getPosts();

			const index = projects.docs.findIndex((p) => p.slug === data.slug);
			const nextProject = projects.docs[projects.docs.length - 1 > index + 1 ? index + 1 : 0];
			goto(`/projects/${nextProject.slug}`);
		} catch (err) {
			console.error(err);
		}
	}
</script>

{#if data}
	<main>
		<h1>{data.title}</h1>

		<div class="preview_top">
			<span class="preview_top__left">{data?.dateRange || ''}</span>
			<span class="preview_top__right">{data?.label || ''}</span>
		</div>

		{#if data.preview?.url}
			<img class="preview preview_desktop" src={data.preview.url} alt={data.preview.alt} />
		{/if}
		{#if data.previewMobile?.url}
			<img
				class="preview preview_mobile"
				src={data.previewMobile.url}
				alt={data.previewMobile.url}
			/>
		{/if}

		<div class="about">
			<div class="about_left">
				{#each data.description?.about as desc}
					<span class="about_left__description">{desc.text || ''}</span>
				{/each}

				<a href={data.description?.behance}>
					{m.projects_link_1()}
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
			</div>
			<div class="about_right">
				<div class="about_right__top">
					<h3>{data.description.details?.title || ''}</h3>
					<span>{data.description.details?.role || ''}</span>
				</div>

				{#each data.description?.details?.content as content}
					<div class="about_right__content">
						<h4>{content.title}</h4>

						{#each content.description as par}
							<p>{par.text}</p>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</main>

	{#if Array.isArray(data.media) && data.media.length > 0}
		<div class="media_item">
			{#each data.media as media}
				{#each media.desktopImage as desktopImage}
					<img
						class="media_item__desktop"
						src={desktopImage.url?.url}
						alt={desktopImage.url?.alt}
					/>
				{/each}

				{#each media.mobileImage as mobileImage}
					<img class="media_item__mobile" src={mobileImage.url?.url} alt={mobileImage.url?.alt} />
				{/each}
			{/each}
		</div>
	{/if}

	<div class="credo_card">
		<CredoCard
			type={2}
			withArrow
			onClickToLeft={() => goto('/#work')}
			onClick={handleGoToNextProject}
			title={m.projects_credo_1()}
			subtitle={m.projects_credo_2()}
		/>
	</div>
{/if}

<style lang="scss">
	main {
		padding: 140px 70px 0 70px;
		@media (max-width: 768px) {
			padding: 110px 0 0 0;
		}
	}
	h1 {
		color: var(--secondary-color);
		font-size: 70px;
		font-style: normal;
		font-weight: 600;
		line-height: 80px; /* 114.286% */
		padding-left: 170px;
		margin-bottom: 130px;
		@media (max-width: 768px) {
			padding-left: 25px;
			margin-bottom: 12px;
			font-size: 37px;
			font-style: normal;
			font-weight: 600;
			line-height: 43px; /* 116.216% */
			max-width: 60%;
		}
	}

	.preview_top {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 25px;
		@media (max-width: 768px) {
			flex-direction: column;
			justify-content: flex-start;
			gap: 70px;
		}
	}
	.preview_top__left {
		color: var(--secondary-color);
		text-align: right;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.7px;
		text-transform: uppercase;
		padding-left: 170px;
		@media (max-width: 768px) {
			padding-left: 25px;
			text-align: left;
		}
	}
	.preview_top__right {
		color: var(--primary-color);
		text-align: right;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		@media (max-width: 768px) {
			text-align: left;
			padding-left: 25px;
			color: var(--secondary-color);
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
	}
	.preview {
		border-radius: 10px;
		width: 100%;
		object-fit: contain;
	}
	.preview_mobile {
		display: none;
		border-radius: 0;
		background-color: var(--background-color);
		@media (max-width: 768px) {
			display: block;
		}
	}
	.preview_desktop {
		@media (max-width: 768px) {
			display: none;
		}
	}
	.about {
		margin-top: 70px;
		display: flex;
		@media (max-width: 768px) {
			gap: 60px;
			flex-direction: column;
		}
	}
	.about_left {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 20px;
		@media (max-width: 768px) {
			width: 100%;
			padding: 0 25px;
		}
	}
	.about_left a {
		color: var(--primary-color);
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.7px;
		text-transform: uppercase;
		margin-top: 30px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 8px;
		&:hover {
			color: var(--secondary-color);
			svg {
				transform: translate(3px, -3px);
			}
		}
	}
	.about_left__description {
		display: block;
		color: var(--secondary-color);
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: 30px; /* 150% */
		max-width: 570px;
		@media (max-width: 768px) {
			max-width: none;
			font-size: 18px;
			font-weight: 400;
			line-height: 26px; /* 144.444% */
		}
	}
	.about_right {
		width: 50%;
		border-radius: 10px;
		border: 1px solid var(--border-color);
		@media (max-width: 768px) {
			width: calc(100% - 50px);
			margin: 0 auto;
		}
	}
	.about_right__top {
		padding: 35px 40px 35px 40px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 20px;
		border-bottom: 1px solid var(--border-color);
		@media (max-width: 768px) {
			padding: 25px 20px;
		}
	}
	.about_right__top h3 {
		color: var(--secondary-color);
		text-align: left;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.7px;
		text-transform: uppercase;
		@media (max-width: 768px) {
			font-size: 12px;
		}
	}
	.about_right__top span {
		color: var(--primary-color);
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 26px; /* 144.444% */
		max-width: 360px;
		@media (max-width: 768px) {
			font-size: 15px;
			max-width: none;
			line-height: 26px; /* 162.5% */
		}
	}
	.about_right__content {
		padding: 35px 40px 35px 40px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 20px;
		border-bottom: 1px solid var(--border-color);
		&:last-child {
			border-bottom: none;
		}
		h4 {
			color: var(--secondary-color);
			text-align: left;
			font-size: 14px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;
			letter-spacing: 0.7px;
			text-transform: uppercase;
		}
		p {
			display: block;
			color: var(--secondary-color);
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 22px; /* 157.143% */
		}
		@media (max-width: 768px) {
			padding: 25px 20px;
			h4 {
				font-size: 12px;
			}
		}
	}
	.credo_card {
		margin: 70px auto 160px auto;
		width: calc(100% - 140px);
		@media (max-width: 768px) {
			width: calc(100% - 50px);
		}
	}
	.media_item {
		margin: 50px 0;

		@media (min-width: 769px) {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
			gap: 16px;
			width: 100%;
			place-items: center;

			.media_item__mobile {
				display: none;
			}
		}

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column;
			gap: 16px;

			.media_item__desktop {
				display: none;
			}
		}

		img {
			width: 100%;
			max-height: 700px;
			object-fit: contain;
			border-radius: 8px;
		}
	}
	.media_item__desktop {
		@media (max-width: 768px) {
			display: none;
		}
	}
	.media_item__mobile {
		display: none;
		@media (max-width: 768px) {
			display: block;
		}
	}
</style>
