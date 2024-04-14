<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";

    let loggedIn = false;
    let username = "";
    let refreshed = false;

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

    function handleLogout() {
        localStorage.removeItem("username");
        loggedIn = false;
        username = "";
        navigate("/SIGNIN");
    }

    onMount(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            loggedIn = true;
            username = storedUsername;
        }
    });
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
        {#if loggedIn}
            <button class="nav-link" on:click={handleLogout}>DECONNEXION</button
            >
            <span>{username}</span>
            <!-- Affiche le nom d'utilisateur -->
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
        align-items: center;
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
