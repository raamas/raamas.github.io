<script>
	import Compliment from "./Compliment.svelte";
	import Desc from "./Desc.svelte";
	import Sayhi from "./Sayhi.svelte";
	import Header from "./Header.svelte";
	import Main from "./Main.svelte"
import Footer from "./Footer.svelte";



</script>

<main>
	<Header/>
	<Compliment />
	<Desc />
	<Main />
	<Sayhi />
	<Footer />
</main>

<style>
	:global(*){
		margin:0;
		padding: 0;
	}
</style>