<script>
  import SvelteMarkdown from 'svelte-markdown';
  import {Strong, Para, ListItem, List, Link, Header} from '$lib/components';
  import {goto} from '$app/navigation';
  import {page} from '$app/stores';
  import {caseStudies} from '$lib/content/featured_cases.ts';

  export let data;
  async function getCaseStudyById(id) {
    return caseStudies.find(caseStudy => caseStudy.id === id);
  }
</script>

{#await getCaseStudyById($page.params.case_id)}
  <p>loading</p>
{:then study}
  <section class="h-full w-full bg-indigo-500">
    <div
      class="mb-16 mt-28 w-full border-b-[1px] border-t-[1px] border-gray-50/20 py-2 font-light text-gray-100"
    >
      <div class="mx-auto w-[90%]">
        <button
          class="flex"
          on:click={() => {
            goto(`/${data.lang}/cases`);
          }}
          ><svg
            class="my-auto size-4 stroke-gray-100"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g><g id="SVGRepo_iconCarrier">
              <path
                d="M15 6L9 12L15 18"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g></svg
          >
          <p>Case Studies</p>
        </button>
      </div>
    </div>
    <div class="mx-auto w-[90%]">
      <p class="text-lg font-medium text-indigo-100">{study.company}</p>
      <p
        class="mt-8 max-w-4xl text-4xl font-medium text-gray-100 sm:text-5xl lg:text-6xl"
      >
        {data.lang === 'es' ? study.title.spanish : study.title.english}
      </p>
    </div>
  </section>
  <section class="grid-row-2 relative grid h-full min-h-screen w-full">
    <div class="h-full w-full bg-indigo-500"></div>
    <div class="h-full w-full"></div>
    <img
      src={`${study?.image}`}
      class="absolute left-1/2 top-1/2 mx-auto h-[80%] w-[90%] max-w-2xl -translate-x-1/2 -translate-y-1/2 object-cover"
      alt="filler"
    />
  </section>
  <section class="mx-auto w-[90%] max-w-lg">
    <SvelteMarkdown
      source={data.lang === 'es'
        ? study?.client_story.spanish
        : study?.client_story.english}
      renderers={{
        heading: Header,
        text: Para,
        strong: Strong,
        listitem: ListItem,
        link: Link,
        list: List
      }}
    />
  </section>
{/await}
