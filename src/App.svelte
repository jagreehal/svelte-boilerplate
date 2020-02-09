<script lang="ts">
  import HelloWorld from "./HelloWorld.svelte";
  export let name: string;
</script>

<style>

</style>

<h1 class="bg-black text-white text-center text-3xl p-2">Hello {name}!</h1>
<p class="p-2">
  <HelloWorld {name} />

</p>
