<script>
    import { onMount } from "svelte";

    let articles = {};

    const fetchData = async (articleId) => {
        try {
            const response = await fetch(
                `http://localhost:3000/pderive/${articleId}`,
            );
            if (response.ok) {
                articles = await response.json();
            }
        } catch (error) {
            console.error(
                "Erreur lors de la récupération des détails du jeu:",
                error,
            );
        }
    };

    onMount(async () => {
        const articleId = new URL(window.location.href).pathname
            .split("/")
            .pop();
        await fetchData(articleId);
    });
</script>

{#if articles}
    <div class="game-info">
        <img src={articles.image} alt={articles.nom} class="game-image" />
        <div class="game-details">
            <h2>{articles.nom}</h2>
            <p class="game-category">{articles.category}</p>
            <p class="game-license">{articles.license}</p>
        </div>
    </div>

    <div class="price">
        Prix: {articles.prix} €
    </div>
{/if}

<style>
    .game-info {
        display: flex;
        margin-bottom: 20px;
        align-items: center;
        width: 80%; /* Define a reasonable container width */
        margin: 0 auto; /* Center the container horizontally */
    }

    .game-image {
        width: 40%; /* Adjust image width for better layout */
        border-radius: 8px;
        margin-right: 20px;
    }

    /* Game details section */
    .game-details {
        flex: 1; /* Allow details to fill remaining space */
    }

    h2 {
        margin: 0; /* Remove default margin for tighter spacing */
    }

    .game-category,
    .game-license {
        margin-top: 5px; /* Add spacing between details */
        font-weight: bold; /* Emphasize category and license */
    }
    .price {
        font-weight: bold;
        margin-top: 20px; /* Add vertical spacing after info */
        text-align: center; /* Center price information */
    }
</style>