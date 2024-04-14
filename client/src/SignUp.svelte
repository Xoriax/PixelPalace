<script>
    import { navigate } from "svelte-routing";

    let username = "";
    let email = "";
    let password = "";
    let confirmPassword = "";
    let error = null;

    async function handleSignup() {
        try {
            // Vérifier si les mots de passe correspondent
            if (password !== confirmPassword) {
                error = "Passwords do not match";
                return;
            }

            // Envoyer les données d'inscription au serveur
            const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                navigate("/"); // Rediriger vers la page d'accueil après l'inscription réussie
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
</script>

<h1>Sign Up</h1>

{#if error}
    <p style="color: red;">{error}</p>
{/if}

<form on:submit|preventDefault={handleSignup}>
    <label for="username">Username:</label>
    <input type="text" id="username" bind:value={username} required />

    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} required />

    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required />

    <label for="confirmPassword">Confirm Password:</label>
    <input
        type="password"
        id="confirmPassword"
        bind:value={confirmPassword}
        required
    />

    <button type="submit">Sign Up</button>
</form>

<style>
    /* Ajoutez vos styles CSS ici */
</style>
