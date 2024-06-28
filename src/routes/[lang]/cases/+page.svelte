<script>
  import {caseStudies} from '$lib/content/featured_cases.ts';

  export let data;
  let services = [
    ['privacy.svg', 'Privacy'],
    ['warnings.svg', 'Warning'],
    ['location.svg', 'Locations'],
    ['book.svg', 'Research'],
    ['globe.svg', 'Location agnostic'],
    ['bank.svg', 'Financing options']
  ];
  let service = [[], []];
  let phone = 12345;
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
        Case Studies
      </p>
      <p class="font-serif text-5xl text-indigo-950">
        Getting the Intel You Need, Nothing More.
      </p>
      <p>
        When in the market for a private investigator, it is important to trust
        the person you pick. We strive to recover the information needed within
        the parameters set by our clients.
      </p>
      <button
        class="w-fit rounded-full bg-indigo-500 px-8 py-1 font-medium text-indigo-100"
        >Call Us</button
      >
    </div>
  </div>
  <img
    class="absolute left-0 top-0 h-full w-full object-cover opacity-10"
    src="https://gginvestigator.com/wp-content/themes/yootheme/cache/f1/background-searches-scaled-f12758be.jpeg"
  />
</div>

<div class="mx-auto h-auto w-[90%] max-w-7xl pt-16">
  <section
    class="mx-auto grid h-fit w-[90%] gap-y-12 sm:gap-4 md:grid-cols-2 xl:grid-cols-3"
  >
    {#each caseStudies as s, i}
      <a
        href={`/${data.lang}/cases/${s.id}`}
        class="group relative grid aspect-auto h-96 w-full overflow-clip rounded-md ring-1 ring-gray-300"
      >
        <img
          src={s.image}
          class="absolute left-0 top-0 h-full w-full object-cover pb-4"
          alt="beams"
        />
        <div
          class="absolute bottom-0 left-0 z-10 h-fit bg-gradient-to-b from-transparent via-gray-100/60 to-gray-100 p-4"
        >
          <p class="line-clamp-1 pt-4 text-sm font-medium">{s.company}</p>
          <h1 class="text-3xl font-light">
            {data.lang === 'es' ? s.title.spanish : s.title.english}
          </h1>
        </div>
      </a>
    {/each}
  </section>
</div>
