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
    import ACTION from "./ACTION.svelte";
    import ADVENTURE from "./ADVENTURE.svelte";
    import FIGURINE from "./FIGURINE.svelte";
    import GOW from "./GODOFWAR.svelte";
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
    <Route path="/ACTION" component={ACTION} />
    <Route path="/ADVENTURE" component={ADVENTURE} />
    <Route path="/FIGURINE" component={FIGURINE} />
    <Route path="/GOW" component={GOW} />
    <Route path="/DETAILS/:articleId" component={DETAILSGAMES} />
    <Route path="/DETAILSGOODIES/:articleId" component={DETAILSGOODIES} />
</Router>
<FOOTER />