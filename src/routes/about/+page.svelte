<script>
	import * as m from '$lib/paraglide/messages.js';
</script>

<main>
	<div class="about_top">
		<img src="/images/about.png" alt="" />
		<div>
			<div>{m.about_top_1()}</div>
			<p>{m.about_top_2()}</p>
		</div>
	</div>
	<div class="about_top__middle">
		<div class="about_top__middle_left">
			<b>{m.about_middle_left_1()}</b>
			<span>{m.about_middle_left_2()}</span>
			<p>{m.about_middle_left_3()}</p>
			<span>{m.about_middle_left_4()}</span>
			<p>{m.about_middle_left_5()}</p>
		</div>
		<div class="about_top__middle_right">
			<b>{m.about_middle_right_1()}</b>
			<p>{m.about_middle_right_2()}</p>
			<p>{m.about_middle_right_3()}</p>
			<p>{m.about_middle_right_4()}</p>
			<p>{m.about_middle_right_5()}</p>
			<p>{m.about_middle_right_6()}</p>
			<p>{m.about_middle_right_7()}</p>
			<p>{m.about_middle_right_8()}</p>
			<p>{m.about_middle_right_9()}</p>
			<p>{m.about_middle_right_10()}</p>
		</div>
	</div>
	<div class="about_top__bottom">
		<b>{m.about_middle_bottom_1()}</b>
		<span>{m.about_middle_bottom_2()}</span>
		<p>{m.about_middle_bottom_3()}</p>
		<span>{m.about_middle_bottom_4()}</span>
		<p>{m.about_middle_bottom_5()}</p>
		<span>{m.about_middle_bottom_6()}</span>
		<p>{m.about_middle_bottom_7()}</p>
		<span>{m.about_middle_bottom_8()}</span>
		<p>{m.about_middle_bottom_9()}</p>
		<span>{m.about_middle_bottom_10()}</span>
		<p>{m.about_middle_bottom_11()}</p>
	</div>
</main>

<style lang="scss">
	main {
		margin: 120px 70px 160px 70px;
		border-radius: 10px;
		border: 1px solid var(--border-color);
		background-color: var(--background-color);
		@media (max-width: 768px) {
			margin: 80px 25px 120px 25px;
		}
	}

	.about_top {
		display: flex;
		align-items: flex-start;
		color: var(--secondary-color);
		height: 100%;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		width: 100%;
		line-height: 26px; /* 162.5% */
		border-bottom: 1px solid var(--border-color);
		& > div {
			max-width: 550px;
			padding: 30px 40px;
		}
		@media (max-width: 768px) {
			flex-direction: column-reverse;
			& > div {
				padding: 70px 20px 45px;
			}
			img {
				width: 100%;
				background-color: white;
			}
		}
	}
	.about_top__middle {
		display: grid;
		grid-template-columns: 1.25fr 1fr;
		border-bottom: 1px solid var(--border-color);
		@media (max-width: 768px) {
			grid-template-columns: 1fr;
		}
	}
	.about_top__middle_left {
		border-right: 1px solid var(--border-color);
		padding: 30px 40px;
		@media (max-width: 768px) {
			padding-top: 80px;
			border-right: none;
			border-bottom: 1px solid var(--border-color);
		}
	}
	.about_top__middle_right {
		padding: 30px 40px 50px 40px;
		@media (max-width: 768px) {
			padding-top: 80px;
		}
		& > p {
			margin-bottom: 5px;
		}
	}
	.about_top__bottom {
		padding: 30px 40px;
		display: flex;
		flex-direction: column;
		@media (max-width: 768px) {
			padding-top: 80px;
		}
	}
	b {
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		color: var(--primary-color);
		display: block;
		margin-bottom: 60px;
		@media (max-width: 768px) {
			margin-bottom: 50px;
		}
	}
	p {
		color: var(--secondary-color);
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 26px; /* 162.5% */
		margin-bottom: 20px;
		display: block;
		max-width: 400px;
	}
	span {
		color: var(--secondary-color);
		font-size: 15px;
		font-style: normal;
		font-weight: 500;
		line-height: 26px; /* 173.333% */
		letter-spacing: 0.75px;
		text-transform: uppercase;
	}
</style>
