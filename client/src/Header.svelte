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
    function goToHome() {
        navigate("/");
    }
    function goToCART() {
        navigate("/CART");
    }
    function goToSignIn() {
        navigate("/SIGNIN");
    }
</script>

<header id="header">
    <button class="nav-link" on:click={goToHome}>
        <img
            id="header-img"
            src="https://upload.wikimedia.org/wikipedia/commons/9/92/UNIQLO_logo.svg"
            alt="Logo UNIQLO"
        />
    </button>
    <nav id="nav-bar">
        <button class="nav-link" on:click={goToALLARTICLES}>ALL-ARTICLE</button>
        <button class="nav-link" on:click={goToTSHIRT}>T-SHIRTS</button>
        <button class="nav-link" on:click={goToSWEATS}>SWEATS</button>
        <button class="nav-link" on:click={goToPANTALONS}>PANTALONS</button>
        <button class="nav-link" on:click={goToSOUSVETEMENTS}>SOUS-VÊTEMENTS</button>
        <button class="nav-link" on:click={goToCART}>PANIER</button>
        <button class="nav-link" on:click={goToSignIn}>SE CONNECTER</button>
    </nav>
</header>

<style>
    #header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 10vh;
        background-color: white;
        border-bottom: 1px solid black;
        position: sticky;
        top: 0px;
        z-index: 10;
    }

    #header-img {
        height: 41px;
        margin: 0px 10px 0px 10px;
        z-index: 1;
        cursor: pointer;
    }

    #nav-bar {
        display: flex;
    }

    .nav-link {
        padding: 20px;
        text-decoration: none;
        font-size: 1.2rem;
        color: black;
        transition: 0.2s;
        outline: none;
        border: none;
        background: none;
    }

    .nav-link:hover {
        cursor: pointer;
        color: #fc0d1b;
    }
</style>