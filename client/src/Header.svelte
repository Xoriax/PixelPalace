<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";

    let isLoggedIn = false;
    let userName = "";

    async function checkSession() {
        const response = await fetch("http://localhost:3000/checksession");
        const data = await response.json();
        isLoggedIn = data.isLoggedIn;
        if (isLoggedIn) {
            userName = data.user.nom;
        }
    }

    async function logout() {
        const response = await fetch("http://localhost:3000/logout");
        if (response.ok) {
            isLoggedIn = false;
            userName = "";
            navigate("/");
        }
    }

    function goToGAMES() {
        navigate("/GAMES");
    }

    function goToGOODIES() {
        navigate("/GOODIES");
    }

    function goToHome() {
        navigate("/");
    }

    function goToSIGNIN() {
        navigate("/SIGNIN");
    }
</script>

<header id="header">
    <button class="nav-link" on:click={goToHome}>
        <img
            id="header-img"
            src="https://i.ibb.co/343ngYR/Design-sans-titre.png"
            alt="Design-sans-titre"
        />
    </button>
    <nav id="nav-bar">
        <button class="nav-link" on:click={goToGAMES}>GAMES</button>
        <button class="nav-link" on:click={goToGOODIES}>GOODIES</button>
        {#if isLoggedIn}
            <button class="nav-link" on:click={logout}>DECONNEXION</button>
            <span>Bonjour {userName}</span>
        {:else}
            <button class="nav-link" on:click={goToSIGNIN}>CONNEXION</button>
        {/if}
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