<script>
    import Header from "./Header.svelte";
    import MainContent from "./MainContent.svelte";
    import Footer from "./Footer.svelte";
    import { Router, Route } from "svelte-routing";

    import ALLARTICLES from "./AllArticles.svelte";
    import TSHIRT from "./T-SHIRT.svelte";
    import SWEATS from "./SWEATS.svelte";
    import PANTALONS from "./PANTALONS.svelte";
    import SOUSVETEMENTS from "./SOUS-VETEMENTS.svelte";
    import CART from "./Cart.svelte";
    import SIGNIN from "./SignIn.svelte";
    import SIGNUP from "../src/SignUp.svelte";
</script>

<Header />
<Router>
    <Route path="/">
        <MainContent />
    </Route>
    <Route path="/ALLARTICLES" component={ALLARTICLES} />
    <Route path="/T-SHIRT" component={TSHIRT} />
    <Route path="/SWEATS" component={SWEATS} />
    <Route path="/PANTALONS" component={PANTALONS} />
    <Route path="/SOUS-VETEMENTS" component={SOUSVETEMENTS} />
    <Route path="/CART" component={CART} />
    <Route path="/SIGNIN" component={SIGNIN} />
    <Route path="/SIGNUP" component={SIGNUP} />
</Router>
<Footer />