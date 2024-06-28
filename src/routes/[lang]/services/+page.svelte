<script lang="ts">
  import type {LayoutData} from '../$types';

  export let data: LayoutData;
</script>

<div
  class=" relative h-fit min-h-[70vh] w-full items-center justify-center overflow-clip rounded-b-[5rem] bg-gradient-to-b from-transparent to-indigo-200 pb-16 pt-32"
>
  <div class="relative mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2">
    <div
      class="z-10 mx-auto flex h-full w-[90%] max-w-md flex-col justify-evenly space-y-6"
    >
      <p
        class="w-fit rounded-md px-4 text-sm text-indigo-500 ring-1 ring-indigo-500"
      >
        {data.lang === 'es' ? 'Servicios' : 'Services'}
      </p>
      <p class="font-serif text-5xl text-indigo-950">
        {data.lang === 'es'
          ? 'Investigaciones con todos los servicios'
          : 'Fully serviced investigations'}
      </p>
      <p>
        When in the market for a private investigator, it is important to trust
        the person you pick. We strive to recover the information needed within
        the parameters set by our clients.
      </p>
      <button
        class="w-fit rounded-full bg-indigo-500 px-8 py-1 font-medium text-indigo-100"
        >{data.lang === 'es' ? 'Llamanos' : 'Call us'}</button
      >
    </div>
  </div>
  <img
    class="absolute left-0 top-0 h-full w-full object-cover opacity-10"
    src="https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  />
</div>
