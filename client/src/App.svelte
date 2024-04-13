<script>
    import { Router, Route } from "svelte-routing";
    import GAMES from "./Games.svelte";
    import HEADER from "./Header.svelte";
    import GOODIES from "./Goodies.svelte";
    import HOME from "./Home.svelte";
    import SIGNIN from "./Signin.svelte";
    import SIGNUP from "./Signup.svelte";

</script>

<Router>
    <Route path="/">
        <HOME/>
    </Route>
    
    <Route path="/GAMES" component={GAMES} />
    <Route path="/GOODIES" component={GOODIES} />
    <Route path="/SIGNIN" component={SIGNIN} />
    <Route path="/SIGNUP" component={SIGNUP} />
</Router>