<script>
  export let href = '';
  export let title = undefined;
</script>

<a class="text-blue-600 hover:underline" {href} {title}><slot /></a>
