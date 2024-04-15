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

<div id="explore">
    <div id="all-collection-box">
        <h1 id="collection-title">Pixel Palace</h1>
    </div>
    <h4 id="sub-title">A power of gamer will change the world</h4>

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
</div>

<style>
    #explore {
        background: rgba(0, 0, 0, 0.5);
        padding: 0.5%;
    }

    #main-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    * {
        background-image: url("");
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
        color: rgb(245, 233, 0);
        background-color: #3d3d3d;
        border-top-left-radius: 10%;
        border-top-right-radius: 10%;
        font-family: "Pixelify Sans", Arial, Helvetica, sans-serif;
    }

    #banner-image {
        width: 100%;
        border-bottom-left-radius: 10%;
        border-bottom-right-radius: 10%;
    }

    .shop-now-btn {
        position: absolute;
        transition: 0.2s;
        bottom: 10%;
        left: 5%;
        padding: 10px;
        color: rgb(250, 217, 0);
        border-radius: 10%;
        background: #343434;
        font-weight: bold;
        border: solid rgb(54, 54, 54) 2px;
        font-family: "Pixelify Sans", Arial, Helvetica, sans-serif;
    }

    .shop-now-btn:hover {
        color: rgb(65, 65, 65);
        background: rgb(255, 225, 0);
        border: solid #4d4d4d 2px;
    }
    .section-title {
        text-align: center;
        margin-bottom: 20px;
        color: #ffffff;
        font-size: 2rem;
        font-family: "Pixelify Sans", Arial, Helvetica, sans-serif;
    }

    #all-collection-box {
        position: relative;
        height: 50vh;
        width: 100%;
        overflow: hidden;
    }

    #collection-title {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        color: rgb(255, 255, 255);
        font-size: 4.5rem;
        text-align: center;
        text-transform: uppercase;
        -webkit-text-stroke-width: 2px;
        letter-spacing: 0.1em;
        font-family: "Pixelify Sans", Arial, Helvetica, sans-serif;
    }

    #sub-title {
        position: absolute;
        font-family: "Pixelify Sans", Arial, Helvetica, sans-serif;
        margin-top: 5%;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        color: rgb(255, 204, 0);
        font-size: larger;
    }
</style>