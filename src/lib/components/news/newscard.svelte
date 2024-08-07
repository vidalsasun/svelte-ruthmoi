<script>
	export let item;
</script>

<a href="{item.link}" class="card card-compact bg-base-100 shadow-xl">
	<figure>
		<img
			src="{item.src}"
			alt="{item.alt}"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">{item.title}</h2>

		<div class="news-card-content">
			{#if item.type === 'text'}
				<p>{item.content}</p>
			{/if}
			{#if item.type === 'image'}
				<img src={item.content} alt={item.alt} />
			{/if}
			{#if item.type === 'video'}
				<video src={item.content} autoplay muted loop></video>
			{/if}
		</div>
	</div>
</a>