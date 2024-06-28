<script>
  import {twMerge} from 'tailwind-merge';
  export let text = '';
  export let className = '';
</script>

<p
  class={twMerge(
    '  bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 bg-clip-text  font-bold leading-none text-transparent  ',
    className
  )}
>
  {text}
</p>
