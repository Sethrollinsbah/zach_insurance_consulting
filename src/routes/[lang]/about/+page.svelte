<script lang="ts">
  import { caseStudies } from "$lib/content/featured_cases.js";
  import { services } from "$lib/content/offered_services.js";
  let service = [[], []];
  let benefits_of_us = [
    ["privacy.svg", "Privacy"],
    ["warnings.svg", "Warning"],
    ["location.svg", "Locations"],
    ["book.svg", "Research"],
    ["globe.svg", "Location agnostic"],
    ["bank.svg", "Financing options"],
  ];
  let phone = 12345;
  export let data;
</script>

<div
  class="relative flex h-[70vh] min-h-[30rem] w-full items-center justify-between overflow-clip bg-gradient-to-b from-neutral-600 via-neutral-600/90 to-neutral-600/60 pt-16"
>
  <img
    alt="banner"
    class="absolute left-0 top-0 h-full w-full object-cover opacity-10 grayscale"
    src="https://gginvestigator.com/wp-content/uploads/2020/05/private-investigator-in-miami-florida-banner-2.jpg"
  />
  <div
    class="sm::mx-16 z-10 mx-auto flex h-full w-[90%] flex-col justify-center pb-16 pt-8 text-white"
  >
    <p class="max-w-xl text-2xl font-light text-white/90">
      <span
        class=" font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl"
      >
        {data.lang === "es" ? "PI Spanish" : "Private Investigators"}
        <br />{data.lang === "es" ? " de Miami" : " of Miami"}<br />
      </span>
      {data.lang === "es"
        ? "Es"
        : "Click below to get started, and set up in less than 30 seconds"}
    </p>

    <button
      class="mt-8 w-fit rounded-full bg-indigo-500 px-16 py-1 text-xl font-medium text-indigo-100 shadow hover:opacity-50"
      >{data.lang === "es" ? "Llama ahora" : "Call now"}</button
    >
  </div>
</div>
<div
  class="relative mx-auto flex h-auto w-full flex-col sm:flex-row sm:space-x-8"
>
  <div class="relative mx-auto flex h-auto w-full flex-col">
    <div
      class="mx-auto w-full gap-6 bg-gradient-to-b from-neutral-600/60 via-neutral-600/10 to-transparent"
    >
      <div class="mx-auto grid w-[90%] grid-cols-1 gap-6 md:grid-cols-3">
        {#each services as s}
          <div
            class="trasition-all h-fit w-full -translate-y-8 rounded-xl bg-gray-50 p-4 shadow duration-200 hover:shadow-xl"
          >
            <p class="font-serif text-xl text-gray-800 sm:text-2xl">
              {data.lang === "es" ? s.title : s.english_title}
            </p>
            <p class=" font-light text-gray-600 sm:text-lg">
              {data.lang === "es" ? s.detail : s.english_detail}
            </p>
          </div>
        {/each}
        <a class="-translate-y-10 text-indigo-600" href="/en/services"
          >{data.lang === "es" ? "Ver todo" : "View all"}</a
        >
      </div>
    </div>
    <div class="mx-auto h-auto w-[90%] max-w-7xl pt-16">
      <section
        class="grid h-fit grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {#each benefits_of_us as s}
          <div class="flex h-min w-full items-start space-x-4">
            <div class="size-10 rounded-full bg-gray-200 p-2">
              <img class="size-full" src={`/about/${s[0]}`} />
            </div>
            <div class=" mt-2 w-fit max-w-xs">
              <h1 class="text-xl font-semibold text-gray-900">{s[1]}</h1>

              <p class="text-lg font-light">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </p>
            </div>
          </div>{/each}
      </section>
    </div>

    <section class="mx-auto grid w-[90%] max-w-6xl gap-12 sm:grid-cols-2">
      {#each caseStudies as s, i}
        {#if i <= 1}
          <a
            href={`/${data.lang}/cases/${s.id}`}
            class="aspect-auto h-fit max-h-[35rem] w-full rounded-xl bg-gray-100 p-8 shadow-2xl"
          >
            <img
              src={"/beams.jpg"}
              class="aspect-video w-full pb-4"
              alt="beams"
            />
            <div>
              <h1 class="text-2xl font-medium">
                {data.lang === "es" ? s.title.spanish : s.title.english}
              </h1>
              <p class="line-clamp-4 pt-4 font-light">
                {data.lang === "es" ? s.detail.spanish : s.detail.english}
              </p>
            </div>
          </a>
        {/if}
      {/each}
    </section>
  </div>
</div>
