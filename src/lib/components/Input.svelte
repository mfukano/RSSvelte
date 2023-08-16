<script>
    export let link = "https://techcrunch.com/feed/"
    export let proxy;
    export let data;

    async function fetchFeed () {
        const res = await fetch(proxy)
        const str = await res.text()
        const parsed = new window.DOMParser().parseFromString(str, "text/xml")
        console.log(str)
        console.log(parsed)
    }
    
</script>

<input bind:value={link} />

<button on:click={fetchFeed}>Load feed</button>
