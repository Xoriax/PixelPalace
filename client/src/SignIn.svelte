<script>
    import { navigate } from "svelte-routing";

    async function handleLogin(event) {
        event.preventDefault();
        const formData = {
            mail: event.target.email.value,
            mot_de_passe: event.target.password.value,
        };

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const userData = await response.json();
                alert(`${userData.nom} ${userData.prenom} est connecté`);
            } else {
                alert("Mail ou Mot de Passe incorrects");
            }
        } catch (error) {
            console.error("Erreur:", error);
            alert("Une erreur est survenue lors de la connexion");
        }
    }

    function goToSignUp() {
        navigate("/SIGNUP");
    }
</script>

<form on:submit={handleLogin}>
    <h2>Se Connecter</h2>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />

    <label for="password">Mot de Passe:</label>
    <input type="password" id="password" name="password" required />

    <button type="submit">Se Connecter</button>
    <button class="nav-link" on:click={goToSignUp}
        >Vous n'avez pas de compte ?</button
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