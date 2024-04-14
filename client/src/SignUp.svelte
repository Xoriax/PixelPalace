<script>
    let nom = "";
    let prenom = "";
    let email = "";
    let password = "";
    let confirmationpassword = "";
    let erreur = "";

    async function inscription() {
        if (password !== confirmationpassword) {
            erreur = "Les mots de passe ne correspondent pas.";
            return;
        }

        const response = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nom,
                prenom,
                email,
                password,
            }),
        });

        const data = await response.json();

        console.log(data);
    }
</script>

<h1>Inscription</h1>

{#if erreur}
    <p style="color: red;">{erreur}</p>
{/if}

<form on:submit|preventDefault={inscription}>
    <label>
        Nom:
        <input type="text" bind:value={nom} required />
    </label>
    <br />
    <label>
        Prénom:
        <input type="text" bind:value={prenom} required />
    </label>
    <br />
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
    <label>
        Confirmation du mot de passe:
        <input type="password" bind:value={confirmationpassword} required />
    </label>
    <br />
    <button type="submit">S'inscrire</button>
</form>

<style>
    
</style>