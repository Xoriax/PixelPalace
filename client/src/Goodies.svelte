<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";

    let articles = [];
    let hoveredIndex = null;

    onMount(async () => {
        const response = await fetch("http://localhost:3000/pderive");
        if (response.ok) {
            articles = await response.json();
        }
    });

    function toggleHovered(index) {
        hoveredIndex = index;
    }

    function navigateToDetails(articleId) {
        navigate(`/DETAILSGOODIES/${articleId}`);
    }
</script>

<h1 class="section-title">Decouvrez nos goodies !</h1>
<div id="main-container">
    {#each articles as article, index}
        <div class="card-container">
            <h2 class="product-header">{article.nom}</h2>
            <div class="image-container">
                <img id="banner-image" src={article.image} alt={article.nom} />
                {#if hoveredIndex === index}
                    <button
                        class="shop-now-btn"
                        on:click={() => navigateToDetails(article._id)}
                        >Details</button
                    >
                {:else}
                    <button
                        class="price"
                        on:mouseenter={() => toggleHovered(index)}
                        >{article.prix} €</button
                    >
                {/if}
            </div>
        </div>
    {/each}
</div>

<style>
    #main-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
        grid-gap: 20px;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .card-container {
        width: 90%;
        margin: 0 auto;
        transition: 0.3s;
        position: relative;
    }

    .product-header {
        margin: auto;
        padding: 1.1rem;
        font-size: 1.25rem;
        text-align: center;
        text-transform: uppercase;
        color: rgb(245, 233, 0);
        background-color: #3d3d3d;
        border-top-left-radius: 10%;
        border-top-right-radius: 10%;
        font-family: "Pixelify Sans", Arial, Helvetica, sans-serif;
    }

    #banner-image {
        width: 100%;
        height: 300px;
        object-fit: cover;
        margin-bottom: 0%;
    }

    .section-title {
        text-align: center;
        margin-bottom: 20px;
        color: #333;
        font-size: 2rem;
        text-decoration: underline;
    }

    .image-container {
        position: relative;
    }

    .price,
    .shop-now-btn {
        width: 100%;
        padding: 1rem;
        font-size: 1rem;
        text-align: center;
        text-transform: uppercase;
        color: rgb(250, 217, 0);
        background: #343434;
        cursor: pointer;
        border: solid rgb(54, 54, 54) 2px;
        font-family: "Pixelify Sans", Arial, Helvetica, sans-serif;
    }

    .shop-now-btn:hover {
        color: rgb(65, 65, 65);
        background: rgb(255, 225, 0);
        border: solid #4d4d4d 2px;
    
</style>
