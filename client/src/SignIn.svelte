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

<h1>Sign In</h1>

{#if error}
    <p style="color: red;">{error}</p>
{/if}

<form on:submit|preventDefault={handleLogin}>
    <label for="username">Username:</label>
    <input type="text" id="username" bind:value={username} required />

    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required />

    <button type="submit">Login</button>
</form>

<button class="nav-link" on:click={goToSIGNUP}
    >VOUS N'AVEZ PAS DE COMPTE ?</button
>

<style>
</style>