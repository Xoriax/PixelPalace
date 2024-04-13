<script>
    import { navigate } from "svelte-routing";

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            nom: event.target.nom.value,
            prenom: event.target.prenom.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };

        try {
            const checkEmail = await fetch(
                `http://localhost:3000/users?email=${formData.email}`,
            );
            const existingUser = await checkEmail.json();
            if (existingUser.length > 0) {
                alert("Cet email est déjà utilisé");
                return;
            }

            const response = await fetch("http://localhost:3000/add-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Inscription réussie");
                navigate("/SIGNIN");
            } else {
                alert("Une erreur est survenue lors de l'inscription");
            }
        } catch (error) {
            console.error("Erreur:", error);
            alert("Une erreur est survenue lors de l'inscription");
        }
    }

    function goToSignIn() {
        navigate("/SIGNIN");
    }
</script>

<form on:submit={handleSubmit}>
    <h2>S'inscrire</h2>
    <label for="nom">Nom:</label>
    <input type="text" id="nom" name="nom" required />

    <label for="prenom">Prénom:</label>
    <input type="text" id="prenom" name="prenom" required />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />

    <label for="password">Mot de Passe:</label>
    <input type="password" id="password" name="password" required />

    <button type="submit">S'inscrire</button>
    <button class="nav-link" on:click={goToSignIn}
        >Vous avez déjà un compte ?</button
    >
</form>

<style>
    form {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
        color: #333;
        font-size: 2rem;
        text-decoration: underline;
    }

    label {
        margin-bottom: 10px;
        font-size: 1rem;
    }

    input {
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
        margin-bottom: 20px;
        border: solid #fc0d1b 2px;
    }

    button {
        width: 100%;
        padding: 1rem;
        font-size: 1rem;
        text-align: center;
        text-transform: uppercase;
        color: black;
        background-color: #fc0d1b;
        cursor: pointer;
        border: solid #fc0d1b 2px;
        margin-bottom: 20px;
    }

    button.nav-link {
        background-color: transparent;
        border: none;
        color: #fc0d1b;
        text-decoration: underline;
        cursor: pointer;
    }

    button:hover {
        color: black;
        background: white;
    }
</style>
