<script>
    import { onMount } from 'svelte';

    let compliment;
    onMount(async ()=> { await fetch('https://complimentr.com/api')
        .then(r =>  r.json())
        .then(data =>{
            compliment = data.compliment})
    });
</script>
<div class="glass_parent">
    <div class="glass">
        <h2>
            {#if compliment == undefined}
                Loading 🥰🥰🥰
            {:else}
                ❤ {compliment} ❤
            {/if}
        </h2>
    </div>
</div>

<style>
    .glass_parent{
        display: none;
        margin:auto;
        width:85%;
        flex-direction: column;
        justify-content: center;
    }
    .glass{
        border: solid 1px var(--lila);
        margin: 1rem 0;
        padding:1.4rem;
        border-radius: 24px;
        background: #ffffff;
        box-shadow:  2px 10px 20px #eaeaf8;
    }
    
    
    @media (min-width: 1024px) and (orientation: landscape){
        .glass_parent{
            display: flex;
        }
    }
    @media (min-width:768px){
        .glass_parent{
            width: 70%;
        }
      }
</style>