<script>
	export let item;
</script>
<div class="tooltip" data-tip="Noticias">
  <h2>NOTICIAS</h2>
</div>
<div class="card card-compact bg-base-100 shadow-xl">
	<figure>
		<img
			src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
			alt="Shoes"
		/>
	</figure>
  <div class="card-body">
		<h2 class="card-title">Shoes!</h2>

		<div class="news-card">
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

		<button class="btn btn-primary">Ir a noticia</button>
	</div>
</div>

<style>
	.news-card p {
		font-size: 16px;
	}

	.news-card img,
	.news-card video {
		max-width: 100%;
		border-radius: 10px;
		margin-top: 10px;
	}
.tooltip{
  margin-bottom: 10px;
  color: #fff;
  border: 1px solid #fff;
  width: 100%;
}

</style>
