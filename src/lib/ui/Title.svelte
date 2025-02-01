<script>
	let title = $state('');
	const fullTitle = 'Portfolio';

	$effect(() => {
		let currentIndex = 0;
		const idInterval = setInterval(() => {
			if (currentIndex < fullTitle.length) {
				title = fullTitle.slice(0, currentIndex + 1);
				currentIndex++;
			} else {
				clearInterval(idInterval);
			}
		}, 500);

		return () => clearInterval(idInterval);
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
