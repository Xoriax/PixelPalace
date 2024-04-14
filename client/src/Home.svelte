<script>
    import { navigate } from "svelte-routing";

    function goToACTION() {
        navigate("/ACTION");
    }
    function goToADVENTURE() {
        navigate("/ADVENTURE");
    }
    function goToFIGURINE() {
        navigate("/FIGURINE");
    }
    function goToGOW() {
        navigate("/GOW");
    }
</script>

<div id="all-collection-box">
    <img
        id="banner-image"
        src="https://i.ibb.co/ZGLL0tj/image-4.png"
        alt="all collection"
    />
    <h1 id="collection-title">Toute la collection</h1>
</div>

<h2 class="section-title">D'autres envies ?</h2>
<div id="main-container">
    <div class="card-container">
        <h2 id="ACTION" class="product-header">ACTION</h2>
        <img
            id="banner-image"
            src="https://th.bing.com/th/id/OIG3._aZNJOJMVInCFjyM6t4k?pid=ImgGn"
            alt="ACTION"
        />
        <button class="shop-now-btn" on:click={goToACTION}>SHOP</button>
    </div>

    <div class="card-container">
        <h2 id="AVENTURE" class="product-header">AVENTURE</h2>
        <img
            id="banner-image"
            src="https://th.bing.com/th/id/OIG3.Wi9EjPmBczRxOOsa9VVM?pid=ImgGn"
            alt="ADVENTURE"
        />
        <button class="shop-now-btn" on:click={goToADVENTURE}>SHOP</button>
    </div>

    <div class="card-container">
        <h2 id="FIGURINES" class="product-header">FIGURINES</h2>
        <img
            id="banner-image"
            src="https://th.bing.com/th/id/OIG1.r6eVMY2BuD_1U75dCKmo?pid=ImgGn"
            alt="FIGURINE"
        />
        <button class="shop-now-btn" on:click={goToFIGURINE}>SHOP</button>
    </div>

    <div class="card-container">
        <h2 id="GOW" class="product-header">God Of War</h2>
        <img
            id="banner-image"
            src="https://th.bing.com/th/id/OIG1.HIWfTVsjp9Sxv3fFr2.O?pid=ImgGn"
            alt="God Of War"
        />
        <button class="shop-now-btn" on:click={goToGOW}>SHOP</button>
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