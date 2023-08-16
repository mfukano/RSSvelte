<script>
    export let image;
    export let title;
    export let link;
    export let description;
</script>

<div class="container">
   <image class="article-image" src="{image}" />
   <div class="text-container">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="{link}">{link}</a>
   </div> 
</div>


<style>
    .container {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
<style>
