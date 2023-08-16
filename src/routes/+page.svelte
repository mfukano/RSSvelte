<script>
    import Input from '../lib/components/Input.svelte'
    let articles = [];
    let link = "https://techcrunch.com/feed/"
    let proxy = `https://api.allorigins.win/raw?url=${link}`
</script>

<h1>Svelte RSS Reader</h1>
<Input bind:link={link} bind:proxy={proxy} bind:data={articles} />

<p>Reactive value in parent: {link}</p>
{#if articles}
    <p>{articles}</p>
{/if}
