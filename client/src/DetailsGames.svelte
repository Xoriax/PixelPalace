<script>
    import { onMount } from "svelte";

    let articles = {};

    const fetchData = async (articleId) => {
        try {
            const response = await fetch(
                `http://localhost:3000/game/${articleId}`,
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
    <div class="trailer">
        <iframe
            width="100%"
            height="500"
            src={articles.trailer}
            frameborder="0"
            allowfullscreen
            title="Game Trailer"
        ></iframe>
    </div>

    <div class="game-info">
        <img src={articles.image} alt={articles.nom} class="game-image" />
        <h2>{articles.nom}</h2>
        <p class="game-description">{articles.description}</p>
    </div>

    <div class="price">
        Prix: {articles.prix} €
    </div>
{/if}

<style>
    .trailer {
        margin-bottom: 20px;
    }

    .trailer iframe {
        border: none;
    }

    .game-info {
        display: flex;
        margin-bottom: 20px;
        align-items: center;
    }

    .game-image {
        width: 50%;
        border-radius: 8px;
        margin-right: 20px;
    }

    .game-description {
        width: 50%;
    }

    .price {
        font-weight: bold;
    }
</style>
