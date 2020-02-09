<script lang="ts">
  export let name;

  let buttonText = "Click Me";

  function handleClick() {
    buttonText = "Button Clicked";
  }
</script>

<h1 class="text-xl">Hello {name}!</h1>

<button
  class="p-2 w-48 border-2 bg-blue-400 border-blue-800 rounded"
  on:click={handleClick}>
  {buttonText}
</button>
