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
            <div class="sess">
                <span id="session">{username}</span>
            </div>
        {:else}
            <button class="nav-link" on:click={goToSIGNIN}>CONNEXION</button>
        {/if}
    </nav>
</header>

<style>

    .sess{
        display: flex;
        justify-content: flex-end;
        width:1000px;
    }
    #session {
    font-family: 'Pixelify Sans', Arial, Helvetica, sans-serif;     
    font-weight: bold;
    color: aliceblue;
    font-size: 1.5rem;
}

    #header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 10vh;
        background-color: transparent;
        border-bottom: 1px solid black;
        position: sticky;
        top: 0px;
        z-index: 10;
        background: rgba(0, 0, 0, 0.5);
    }

    #header-img {
        height: 41px;
        margin: 0px 10px 0px 10px;
        z-index: 1;
        cursor: pointer;
        border-radius: 50%;
    }

    #nav-bar {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nav-link {
        font-family: 'Pixelify Sans', Arial, Helvetica, sans-serif;
        padding: 20px;
        text-decoration: none;
        font-size: 1.5rem;
        color: rgb(255, 255, 255);
        transition: 0.2s;
        outline: none;
        border: none;
        background: none;
    }

    .nav-link:hover {
        cursor: pointer;
        color: #ffb300;
    }
</style>
