<script>
    import { onMount } from "svelte";
    let game = null;

    onMount(async () => {
        const response = await fetch("http://localhost:3000/game");
        if (response.ok) {
            const games = await response.json();
            game = games[0];
        }
    });
</script>

{#if game}
    <div class="trailer">
        <iframe
            width="100%"
            height="500"
            src={game.trailer}
            frameborder="0"
            allowfullscreen
            title="Game Trailer"
        ></iframe>
    </div>

    <div class="game-info">
        <img src={game.image} alt={game.nom} class="game-image" />
        <p class="game-description">{game.description}</p>
    </div>

    <div class="price">
        Prix: {game.prix}
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
