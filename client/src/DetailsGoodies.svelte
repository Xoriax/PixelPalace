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

<div style="height: 80vh">
    {#if articles}
        <div class="container">
            <div class="game-info">
                <img
                    src={articles.image}
                    alt={articles.nom}
                    class="game-image"
                />
                <div class="details-box">
                    <h2>{articles.nom}</h2>
                    <p class="game-category">Catégorie: {articles.category}</p>
                    <p class="game-license">Licence: {articles.license}</p>
                </div>
            </div>

            <div class="price">
                Prix: {articles.prix} €
            </div>
        </div>
    {/if}
</div>

<style>
    .container {
        max-width: 800px;
        margin: auto;
        padding: 20px;
        margin-bottom: 100px;
    }

    .game-info {
        display: flex;
        margin-bottom: 20px;
        align-items: center;
        margin-top: 20px;
    }

    .game-image {
        width: 40%;
        border-radius: 8px;
        margin-right: 20px;
    }

    .details-box {
        flex: 1;
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border-radius: 8px;
    }

    h2 {
        margin: 0;
    }

    .game-category,
    .game-license,
    .price {
        margin-top: 5px;
        font-weight: bold;
        color: white;
    }
</style>
