<script>
    import { Router, Route } from "svelte-routing";
    import GAMES from "./Games.svelte";
    import HEADER from "./Header.svelte";
    import GOODIES from "./Goodies.svelte";
    import HOME from "./Home.svelte";
    import SIGNUP from "./SignUp.svelte";
    import SIGNIN from "./SignIn.svelte";
    import FOOTER from "./Footer.svelte";
    import DETAILSGAMES from "./DetailsGames.svelte";
    import DETAILSGOODIES from "./DetailsGoodies.svelte";
</script>

<HEADER />
<Router>
    <Route path="/">
        <HOME />
    </Route>
    <Route path="/GAMES" component={GAMES} />
    <Route path="/GOODIES" component={GOODIES} />
    <Route path="/SIGNUP" component={SIGNUP} />
    <Route path="/SIGNIN" component={SIGNIN} />
    <Route path="/DETAILS/:articleId" component={DETAILSGAMES} />
    <Route path="/DETAILSGOODIES/:articleId" component={DETAILSGOODIES} />
</Router>
<FOOTER />