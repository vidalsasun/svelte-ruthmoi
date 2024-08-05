<script>
    export let item;
  </script>
  
  <style>
    .news-card {
      padding: 20px;
      border-radius: 10px;
      background: #f9f9f9;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .news-card h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    
    .news-card p {
      font-size: 16px;
    }
    
    .news-card img, .news-card video {
      max-width: 100%;
      border-radius: 10px;
      margin-top: 10px;
    }
  </style>
  
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
  