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
                localStorage.setItem("username", username); // Stockage du nom d'utilisateur dans le stockage local
                console.log("Login successful");
                navigate("/"); // Redirection vers la page d'accueil après la connexion réussie
            } else {
                const errorMessage = await response.text(); // Récupération du message d'erreur de la réponse
                setError(errorMessage); // Définition du message d'erreur à afficher
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

<style>
</style>