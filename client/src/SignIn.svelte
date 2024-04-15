<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";

    let username = "";
    let password = "";
    let error = null;

    async function handleLogin() {
        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                localStorage.setItem("username", username);
                console.log("Login successful");
                navigate("/");
                window.location.reload();
            } else {
                const errorMessage = await response.text();
                setError(errorMessage);
            }
        } catch (error) {
            console.error("Error:", error);
            setError("An unexpected error occurred. Please try again later.");
        }
    }

    function setError(message) {
        error = message;
    }

    onMount(() => {
        if (localStorage.getItem("username")) {
            navigate("/"); // Redirection vers la page d'accueil si l'utilisateur est déjà connecté
        }
    });

    function goToSIGNUP() {
        navigate("/SIGNUP");
    }
</script>

<div class="box" style="height: 80vh;">
    <h1 id="title">Sign In</h1>

    {#if error}
        <p style="color: red;">{error}</p>
    {/if}

    <form on:submit|preventDefault={handleLogin} id="conx">
        <label for="username" id="etiq">Username:</label>
        <input
            class="champ"
            type="text"
            id="username"
            bind:value={username}
            required
        />

        <label for="password" id="etiq">Password:</label>
        <input
            class="champ"
            type="password"
            id="password"
            bind:value={password}
            required
        />

        <button class="connect-btn" type="submit">LOGIN</button>
    </form>

    <div class="inscr-container">
        <button class="connect-btn" id="inscr" on:click={goToSIGNUP}
            >VOUS N'AVEZ PAS DE COMPTE ?</button
        >
    </div>
</div>

<style>
    #title {
        font-family: "Pixelify Sans", Arial, Helvetica, sans-serif;
    }
    #etiq {
        font-family: "Pixelify Sans", Arial, Helvetica, sans-serif;
    }
    .box {
        background: rgba(0, 0, 0, 0.5);
        width: 201.5vh;
        padding: 20px;
        text-align: center;
        color: aliceblue;
        margin: auto;
    }

    .champ {
        font-family: "Pixelify Sans", Arial, Helvetica, sans-serif;
        margin-bottom: 5%;
        height: 10%;
        background-color: grey;
        color: rgb(251, 193, 3);
        width: 100%;
        box-sizing: border-box;
        padding: 5px;
    }

    #conx {
        display: flex;
        flex-direction: column;
    }

    .inscr-container {
        margin-top: 20px;
    }

    .connect-btn {
        background-color: rgb(62, 62, 62);
        color: rgb(251, 193, 3);
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        font-family: "Pixelify Sans", Arial, Helvetica, sans-serif;
        width: 100%;
    }

    .connect-btn:hover {
        color: rgb(62, 62, 62);
        background-color: rgb(251, 193, 3);
    }
</style>