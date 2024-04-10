<script>
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

    let articles = [];
    const dispatch = createEventDispatcher();
    let hoveredIndex = null;

    onMount(async () => {
        const response = await fetch(
            "http://localhost:3000/game",
        );
        if (response.ok) {
            articles = await response.json();
        }
    });

    function toggleHovered(index) {
        hoveredIndex = index;
    }

    async function addToCart(articleId) {
        try {
            const response = await fetch(
                `http://localhost:3000/add-to-cart/${articleId}`,
                {
                    method: "POST",
                },
            );
            if (response.ok) {
                console.log("Article ajouté au panier");
            } else {
                console.error("Erreur lors de l'ajout de l'article au panier");
            }
        } catch (error) {
            console.error(
                "Erreur lors de la communication avec le serveur",
                error,
            );
        }
    }
</script>

<h1 class="section-title">Tout Nos Jeux</h1>
<div id="main-container">
    {#each articles as article, index}
        <div class="card-container">
            <h2 class="product-header">{article.nom}</h2>
            <div class="image-container">
                <img id="banner-image" src={article.image} alt={article.name} />
                {#if hoveredIndex === index}
                    <button
                        class="shop-now-btn"
                        on:mouseleave={() => toggleHovered(null)}
                        on:click={() => addToCart(article._id)}
                        >Au Panier</button
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
        padding: 1.5rem;
        font-size: 0.6rem;
        text-align: center;
        text-transform: uppercase;
        color: white;
        background-color: #fc0d1b;
    }

    #banner-image {
        width: 100%;
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
        color: black;
        background-color: #fc0d1b;
        cursor: pointer;
        border: solid #fc0d1b 2px;
    }

    .shop-now-btn:hover {
        color: black;
        background: white;
        border: solid #fc0d1b 2px;
    }
</style>
