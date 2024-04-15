<script>
    import { navigate } from "svelte-routing";

    let username = "";
    let email = "";
    let password = "";
    let confirmPassword = "";
    let error = null;

    async function handleSignup() {
        try {
            if (password !== confirmPassword) {
                error = "Passwords do not match";
                return;
            }

            const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                navigate("/"); 
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

    function goToSIGNIN() {
        navigate("/SIGNIN");
    }
</script>

<div class="box" style="height: 80vh;">
    <h1 id="title">Sign Up</h1>

    {#if error}
        <p style="color: red;">{error}</p>
    {/if}

    <form on:submit|preventDefault={handleSignup} id="conx">
        <label for="username" id="etiq">Username:</label>
        <input
            class="champ"
            type="text"
            id="username"
            bind:value={username}
            required
        />

        <label for="email" id="etiq">Email:</label>
        <input
            class="champ"
            type="email"
            id="email"
            bind:value={email}
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

        <label for="confirmPassword" id="etiq">Confirm Password:</label>
        <input
            class="champ"
            type="password"
            id="confirmPassword"
            bind:value={confirmPassword}
            required
        />

        <button class="connect-btn" type="submit">Sign Up</button>
    </form>

    <div class="inscr-container">
        <button class="connect-btn" id="inscr" on:click={goToSIGNIN}
            >VOUS AVEZ DÉJA UN COMPTE ?</button
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
    }

    .connect-btn:hover {
        color: rgb(62, 62, 62);
        background-color: rgb(251, 193, 3);
    }
</style>
