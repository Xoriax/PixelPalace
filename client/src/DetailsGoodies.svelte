<script>
    import { onMount } from "svelte";
    let pproduct = null;

    onMount(async () => {
        const response = await fetch("http://localhost:3000/pderive");
        if (response.ok) {
            const pproducts = await response.json();
            pproduct = pproducts[0];
        }
    });
</script>

{#if pproduct}
    <div class="pproduct-info">
        <img src={pproduct.image} alt={pproduct.nom} class="pproduct-image" />
        <p class="name">{pproduct.nom}</p>
        <p class="price">Prix: {pproduct.prix}</p>
        <p class="pproduct-license">{pproduct.license}</p>
        <p class="pproduct-category">{pproduct.category}</p>
    </div>
{/if}

<style>
    .pproduct-info {
        display: flex;
        margin-bottom: 20px;
    }

    .pproduct-image {
        width: 50%;
        border-radius: 8px;
        margin-right: 20px;
    }

    .pproduct-license, .pproduct-category {
        width: 50%;
    }

    .price {
        font-weight: bold;
    }
</style>
