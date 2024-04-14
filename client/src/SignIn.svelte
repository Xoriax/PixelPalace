<script>
    import { navigate } from "svelte-routing";

    function goToSIGNUP() {
        navigate("/SIGNUP");
    }

    let email = "";
    let password = "";
    let erreur = "";

    async function connexion() {
        try {
            const response = await fetch("http://localhost:3000/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            console.log(data);
            // Rediriger l'utilisateur vers une autre page après la connexion réussie si nécessaire
        } catch (error) {
            erreur = error.message;
        }
    }
</script>

<h1>Connexion</h1>

{#if erreur}
    <p style="color: red;">{erreur}</p>
{/if}

<form on:submit|preventDefault={connexion}>
    <label>
        Email:
        <input type="email" bind:value={email} required />
    </label>
    <br />
    <label>
        Mot de passe:
        <input type="password" bind:value={password} required />
    </label>
    <br />
    <button type="submit">Se connecter</button>
</form>

<button class="nav-link" on:click={goToSIGNUP}
    >VOUS N'AVEZ PAS DE COMPTE ?</button
>

<style>
</style>
