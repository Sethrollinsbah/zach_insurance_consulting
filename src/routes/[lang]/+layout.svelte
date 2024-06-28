<script lang="ts">
  import { elasticOut } from "svelte/easing";
  import { blur, scale } from "svelte/transition";
  import Modal from "$lib/Modal.svelte";
  import {
    name,
    phone,
    email,
    code,
    zip,
    nav,
    show_succ_mod,
  } from "$lib/stores";
  import NavMenu from "$lib/NavMenu.svelte";
  import { page } from "$app/stores";
  import toast, { Toaster } from "svelte-french-toast";
  import Input from "$lib/Input.svelte";
  import Select from "$lib/Select.svelte";
  import Phone from "$lib/Phone.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  import { browser } from "$app/environment";
  import { afterNavigate, onNavigate } from "$app/navigation";
  let page_data = [
    ["Home"],
    ["About Us"],
    ["Investigations"],
    ["Home"],
    ["About Us"],
    ["Investigations"],
  ];
  let pages_routes = [
    ["about", "About", "Acerca"],
    ["plans", "Plans", "Servicios"],
    ["cases", "Cases", "Casos"],
    ["faq", "FAQ", "Preg."],
  ];
  let show = true;
  let interests = [
    "Phising tests",
    "Baiting tests",
    "Penetration Testing",
    "Pre-marital Investigations",
    "Fraud Investigation",
    "Adoption Tracing",
    "Tenant Screening",
  ];

  $: show =
    browser && localStorage.getItem("interests") === null ? true : false;
  let page_name = true;
  onNavigate(() => {
    page_name = false;
    tick();
    setTimeout(() => {
      page_name = true;
    }, 300);
  });
  afterNavigate(() => {
    tick();
    const element = document.getElementById("top_of_page");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
  import { cubicOut, cubicIn } from "svelte/easing";
  import { tick } from "svelte";

  export function scaleup(node, { duration = 200 } = {}) {
    return {
      duration,
      css: (t) => {
        const eased = cubicOut(t);
        return `
          transform: scale(${1.07 - eased * 0.07});
          opacity: ${eased};
        `;
      },
    };
  }
  export function scaledown(node, { duration = 200 } = {}) {
    return {
      duration,
      css: (t) => {
        const eased = cubicIn(t);
        return `
          transform: scale(${0.93 + eased * 0.07});
          opacity: ${eased};
        `;
      },
    };
  }
  let owner_phone = "(321) 443 - 7405";
</script>

<div id="top_of_page" />
<section class="flex bg-gray-100">
  <section class="relative flex h-full w-screen">
    <section class="w-full">
      <section class="relative flex w-full">
        <div
          class:w-full={true}
          class:w-0={false}
          class="sticky top-16 mb-16 hidden h-[90%] w-full max-w-64 flex-col overflow-clip rounded-xl bg-indigo-200 transition-all duration-200 md:max-w-80 xl:max-w-96"
        >
          <div class="h-full w-full bg-black"></div>
          <section class="flex w-full flex-col divide-y-[1px] divide-gray-100">
            {#each pages_routes as p}
              <a
                class:underline={$page.url.pathname
                  .split("/")[2]
                  .toLowerCase() === p[0].toLowerCase()}
                href="/"
                class=" py-4 text-center text-lg">{p[0]}</a
              >
            {/each}
          </section>
        </div>
        {#if page_name === true}
          <div
            in:scaleup
            out:scaledown
            class="flex h-full w-full flex-col items-center justify-center"
          >
            <slot />
          </div>
        {:else}
          <div class="h-screen"></div>
        {/if}
      </section>
      <div
        class:hidden={$page.url.pathname.split("/")[2] === "client"}
        class="mx-auto my-6 grid h-fit w-[90%] max-w-4xl grid-rows-2 flex-col overflow-clip rounded-lg shadow-2xl md:grid-cols-2 md:grid-rows-1"
      >
        <div
          class="flex flex-col bg-gradient-to-tl from-indigo-600 to-blue-600/50 p-8 font-serif text-4xl font-medium text-gray-50"
        >
          <p>
            {data.lang === "es" ? "Contáctanos" : "Contact us"}<span
              class="text-gray-50/50"
              >{data.lang === "es"
                ? " para ver si cubrimos tus necesidades"
                : " to see if we meet your needs"}</span
            >
          </p>
        </div>
        <div class="flex flex-col justify-evenly bg-gray-50 p-8">
          <Input
            placeholder={data.lang === "es" ? "Nombre" : "Name"}
            placeholder_eg="John Smith"
            boolean_disabled={false}
            bind:value_place={$name}
          ></Input>
          <Input
            placeholder={data.lang === "es" ? "Correo Electrónico" : "Email"}
            bind:value_place={$email}
            placeholder_eg="johnsmith@mail.co"
            boolean_disabled={false}
          ></Input>
          <Phone
            bind:code={$code}
            valu={data.lang === "es" ? "Teléfono" : "Phone"}
            bind:number={$phone}
          ></Phone>
          <Input
            placeholder={data.lang === "es" ? "Código Postal" : "Zip Code"}
            placeholder_eg="12345"
            boolean_disabled={false}
            bind:value_place={$zip}
          ></Input>
          <button
            on:click={async () => {
              if (
                ($name === null || $name.length <= 3) &&
                ($email === null || $email.length <= 3) &&
                ($phone === null || $phone.length <= 3) &&
                ($zip === null || $zip.length <= 3)
              ) {
                return toast.error("Complete the form first");
              }
              if ($email && /^[^@]+@[^@]+\.[^@]+$/.test($email) === false) {
                return toast.error("Incorrect email format");
              }
              const lead = await fetch("/api/upload_lead", {
                body: JSON.stringify({
                  name: $name,
                  email: $email,
                  zip: $zip,
                  created_on: new Date(),
                  phone: $phone,
                }),
                method: "POST",
              });
              console.log(lead);
              if (lead.ok === true) {
                $show_succ_mod = true;
                return toast.success("We are hearing from you soon");
              }
            }}
            class="mx-auto w-32 rounded-lg bg-gradient-to-tl from-indigo-600 to-blue-600/80 py-2 text-center font-medium text-gray-50 transition-all duration-100 active:scale-95 {$name !==
              null &&
            $name.length > 3 &&
            $email !== null &&
            $email.length > 3 &&
            $phone !== null &&
            $phone.length > 3 &&
            $zip !== null &&
            $zip.length > 3
              ? 'opacity-100'
              : 'opacity-50'} hover:opacity-50"
            >{data.lang === "es" ? "Entregar" : "Submit"}</button
          >
        </div>
      </div>
    </section>
  </section>
</section>

<Modal bind:showModal={show}>
  <h2 slot="header">
    What aspects of private investigation are you interested in today?<br />
    <span class="text-sm text-gray-400">Select up to three from the list</span>
  </h2>
  {#each interests as i}
    <div class="flex">
      <input id={`input-${i}`} type="checkbox" class="accent-gray-800" />
      <label class="ml-2" for={`input-${i}`}>{i}</label>
    </div>{/each}
  <div slot="footer">
    <button
      on:click={() => {
        const inter = [];
        for (let index = 0; index < interests.length; index++) {
          const element = interests[index];
          const interest = document.getElementById("input-" + element);

          if (interest.checked === true) {
            inter.push(interests[index]);
          }
        }

        localStorage.setItem("interests", inter);
      }}
      class="w-32 rounded-md bg-gradient-to-tl from-gray-900 to-gray-800/90 py-2 font-medium text-gray-50"
      >Continue</button
    >
  </div>
</Modal>
<div
  class:hidden={$page.url.pathname.split("/")[2] === "client"}
  class="absolute left-0 top-0 z-20 flex w-full items-center justify-between p-8"
>
  <div class="flex w-full items-center justify-start space-x-4">
    <a class="h-min" href={`/${data.lang}/home`}>
      <img src="/logo.svg" class=" size-9 object-cover" />
    </a>
  </div>
  <div
    class="hidden w-fit justify-center divide-x-[1px] divide-indigo-400 rounded-full bg-gray-50/70 px-8 py-1 text-sm text-indigo-800/50 backdrop-blur-sm md:flex"
  >
    {#each pages_routes as pr}
      <a
        class:text-indigo-800={$page.url.pathname
          .split("/")[2]
          .toLowerCase() === pr[0].toLowerCase()}
        class:font-medium={$page.url.pathname.split("/")[2].toLowerCase() ===
          pr[0].toLowerCase()}
        class="px-2 transition-all duration-300 hover:text-indigo-300"
        href={`/${data.lang}/${pr[0]}`}>{data.lang === "es" ? pr[2] : pr[1]}</a
      >
    {/each}
  </div>
  <div class="hidden w-full items-center justify-end space-x-4 md:flex">
    <a
      class="w-fit rounded-full bg-gray-200 px-8 py-1 font-medium text-gray-500 shadow hover:opacity-50"
      href={`/${data.lang}/client`}
      >{data.lang === "es" ? "Portal del Cliente" : "Client Portal"}</a
    >
  </div>
  <div class="md:hidden">
    <nav
      class="group relative flex h-8 w-8 flex-col items-end justify-start"
      on:click={() => {
        $nav = !$nav;
      }}
    >
      <div
        class="group absolute left-1/2 top-1/2 block w-8 -translate-x-1/2 -translate-y-1/2 transform"
        class:z-20={$nav}
      >
        <span
          aria-hidden="true"
          class="absolute block h-[2px] w-6 {$nav == true
            ? 'bg-indigo-600'
            : 'bg-black group-hover:bg-indigo-500  '} transform transition duration-300 ease-in-out"
          class:rotate-45={$nav}
          class:-translate-y-1.5={!$nav}
        />
        <span
          aria-hidden="true"
          class="absolute block h-[2px] w-6 {$nav == true
            ? 'bg-indigo-600'
            : 'bg-black group-hover:bg-indigo-500 '}  transform transition duration-300 ease-in-out"
          class:opacity-0={$nav}
        />
        <span
          aria-hidden="true"
          class="absolute block h-[2px] w-6 {$nav == true
            ? 'bg-indigo-600'
            : 'bg-black group-hover:bg-indigo-500 '}  transform transition duration-300 ease-in-out"
          class:-rotate-45={$nav}
          class:translate-y-1.5={!$nav}
        />
      </div>
      <div
        class="absolute bottom-0 z-40 size-80 -translate-y-full bg-white"
      ></div>
    </nav>
  </div>
</div>

<button
  on:click={() => {
    $nav = false;
  }}
  class:hidden={!$nav}
  class="fixed left-0 top-0 z-40 h-screen w-screen bg-gray-800/10 md:hidden"
></button>
<button
  on:click={() => {
    $nav = false;
  }}
  class:hidden={!$nav}
  class="animate-in absolute right-9 top-[4.5rem] z-50 flex w-40 flex-col items-start justify-start rounded-md bg-gray-100 text-sm font-light text-gray-700 shadow md:hidden"
>
  <div
    class="absolute right-2 top-0 size-4 -translate-y-2 rotate-45 rounded-sm bg-gray-100"
  ></div>
  {#each pages_routes as pr}
    <a
      class:underline={$page.url.pathname.split("/")[2].toLowerCase() ===
        pr[0].toLowerCase()}
      class="w-full px-2 py-1 text-start hover:bg-gray-200"
      href={`/${data.lang}/${pr[0]}`}>{data.lang === "es" ? pr[2] : pr[1]}</a
    >
  {/each}

  <a
    href="tel:12345"
    class="w-full rounded-b-md bg-indigo-600 py-2 text-sm font-medium text-indigo-100 hover:opacity-50"
    >{data.lang === "es" ? "Llama ahora" : "Call Now"}</a
  >
</button>
<Modal bind:showModal={$show_succ_mod}>
  <section
    class="w-full h-full flex flex-col text-center justify-center items-center"
  >
    <p class="font-bold text-2xl">
      {data.lang === "es"
        ? "Gracias por solicitar una cotización"
        : "Thank you for requesting a quote."}
    </p>
    <p class="font-light text-lg">
      {data.lang === "es"
        ? "Queremos ofrecer el precio más bajo y la mejor cobertura possible para que una persona con licencia. El agente de seguros se comunicará con usted en breve con diferentes cotizaciones y opciones. en función de su situación personal. Este paso es para ver qué descuentos calificas para ahorrarle dinero y al mismo tiempo asegurarse de tener la cobertura que necesita necesidad."
        : "We want to provide the lowest price & best coverage possible so a licensed insurance agent will contact you shortly with different quotes and options based on your personal situation. This step is to see what discounts you qualify      for to save you money while also making sure that you have the coverage you need."}
    </p>
    <p>
      {data.lang === "es"
        ? "Si no recibe noticias de alguien en los próximos 5 minutos, llame a nuestra línea directa al:"
        : "If you do not hear from someone in the next 5 minutes please call our direct line at:"}
    </p>
    <a class="text-4xl mt-4 font-bold" href="tel:{owner_phone}">{owner_phone}</a
    >
  </section>
</Modal>
