<script>
  import { getRandomQuote } from "../utilities/ApiCalls.js";
  let quoteResponse = '';
  let quote = 'This is a quote';
  let tags = ['Hilary Clinton'];

  const setQuote = async () => {
    quoteResponse = await getRandomQuote();
    quote = quoteResponse.value;
    tags = quoteResponse.tags;
  }

  $: console.log(`Quote has changed: "${quote}"`);
</script>

<button on:click={setQuote}>
  Click for words of wisdom!
</button>
{#if quote}
  <p>{quote}</p>
  <ul>
    {#each tags as tag}
      <li>{tag}</li>
    {/each}
  </ul>
{/if}

<style>
  button {
    border-radius: 2px;
    border: none;
    background-color: rgb(87, 133, 133);
    color: white;
  }
  button:hover {
    cursor: pointer;
    background-color: rgb(57, 90, 90);
    transition: ease-in-out 0.1s;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  li {
    text-decoration: none;
    list-style: none;
    color: rgb(85, 85, 85);
    background-color: lightgray;
    padding: .25rem;
    border-radius: 2px;
  }

  li:hover {
    color: crimson;
    background-color: whitesmoke;
    transition: ease-in-out 0.1s;
  }

  /* li {
    background: #eee;
    border-radius: 3px 0 0 3px;
    color: #999;
    display: inline-block;
    height: 26px;
    padding: 0 1.2rem;
    position: relative;
    margin: 0 1.2rem;
    transition: color 0.2s;
    -webkit-transition: color 0.2s;
  }
  
  li::before {
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
  content: '';
  height: 6px;
  left: 10px;
  position: absolute;
  width: 6px;
  top: 10px;
}

li::after {
  background: #fff;
  border-bottom: 13px solid transparent;
  border-left: 10px solid #eee;
  border-top: 13px solid transparent;
  content: '';
  position: absolute;
  right: 0;
  top: 0;
}

li:hover {
  background-color: crimson;
  color: white;
}

li:hover::after {
   border-left-color: crimson; 
} */
</style>