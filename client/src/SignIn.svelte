<script>
    let username = '';
    let password = '';

    async function handleLogin() {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                console.log("Login successful"); // Affichez un message de confirmation dans la console
            } else {
                const errorMessage = await response.text();
                console.error(errorMessage); // Affichez l'erreur dans la console en cas d'échec de connexion
            }
        } catch (error) {
            console.error('Error:', error); // Gérez les erreurs de requête
        }
    }
</script>

<h1>Sign In</h1>

<form on:submit|preventDefault={handleLogin}>
    <label for="username">Username:</label>
    <input type="text" id="username" bind:value={username} required>

    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required>

    <button type="submit">Login</button>
</form>
