<script>
    import { navigate } from "svelte-routing";

    function goToALLARTICLES() {
        navigate("/ALLARTICLES");
    }
    function goToTSHIRT() {
        navigate("/T-SHIRT");
    }
    function goToSWEATS() {
        navigate("/SWEATS");
    }
    function goToPANTALONS() {
        navigate("/PANTALONS");
    }
    function goToSOUSVETEMENTS() {
        navigate("/SOUS-VETEMENTS");
    }
</script>

<div id="all-collection-box">
    <img
        id="banner-image"
        src="https://i.ibb.co/ZGLL0tj/image-4.png"
        alt="all collection"
    />
    <h1 id="collection-title">Toute la collection</h1>
    <button class="shop-now-btn" on:click={goToALLARTICLES}>SHOP STYLES</button>
</div>

<h2 class="section-title">LE VESTIAIRE UNIFLOP</h2>
<div id="main-container">
    <div class="card-container">
        <h2 id="T-SHIRTS" class="product-header">T-SHIRTS</h2>
        <img
            id="banner-image"
            src=" https://image.uniqlo.com/UQ/ST3/eu/imagesother/2024/homepage/february/240226/l2-m-featcats-tshirts-465494.jpg"
            alt="Bannière pour femmes"
        />
        <button class="shop-now-btn" on:click={goToTSHIRT}>SHOP STYLES</button>
    </div>

    <div class="card-container">
        <h2 id="SWEATS" class="product-header">SWEATS</h2>
        <img
            id="banner-image"
            src="https://image.uniqlo.com/UQ/ST3/eu/imagesother/2024/homepage/february/240226/l2-m-featcats-sweats-465200.jpg"
            alt="Bannière pour hommes"
        />
        <button class="shop-now-btn" on:click={goToSWEATS}>SHOP STYLES</button>
    </div>

    <div class="card-container">
        <h2 id="PANTALONS" class="product-header">PANTALONS</h2>
        <img
            id="banner-image"
            src="https://image.uniqlo.com/UQ/ST3/eu/imagesother/2024/homepage/february/240226/l2-m-featcats-trousers-463918.jpg"
            alt="Bannière pour enfants"
        />
        <button class="shop-now-btn" on:click={goToPANTALONS}>SHOP STYLES</button>
    </div>

    <div class="card-container">
        <h2 id="SOUS-VÊTEMENTS" class="product-header">SOUS-VÊTEMENTS</h2>
        <img
            id="banner-image"
            src="https://image.uniqlo.com/UQ/ST3/eu/imagesother/2023/homepage/september/230918/l2-m-featcats-underwear-461488.jpg"
            alt="Bannière pour bébés"
        />
        <button class="shop-now-btn" on:click={goToSOUSVETEMENTS}>SHOP STYLES</button>
    </div>
</div>

<style>
    
    #main-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    *{
        background-image: url("")
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
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
        color: white;
        background-color: #fc0d1b;
    }

    #banner-image {
        width: 100%;
    }

    .shop-now-btn {
        position: absolute;
        transition: 0.2s;
        bottom: 10%;
        left: 5%;
        padding: 10px;
        color: white;
        border-radius: 0;
        background: #fc0d1b;
        font-weight: bold;
        border: solid white 2px;
    }

    .shop-now-btn:hover {
        color: black;
        background: white;
        border: solid #fc0d1b 2px;
    }

    .section-title {
        text-align: center;
        margin-bottom: 20px;
        color: #333;
        font-size: 2rem;
        text-decoration: underline;
    }

    #all-collection-box {
        position: relative;
        height: 90vh;
        width: 100%;
        overflow: hidden;
    }

    #collection-title {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        color: black;
        font-size: 3rem;
        text-align: center;
        text-transform: uppercase;
        -webkit-text-stroke-width: 2px;
        text-decoration: underline;
        letter-spacing: 0.1em;
    }

</style>