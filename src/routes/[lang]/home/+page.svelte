<script>
  import { show_succ_mod } from "$lib/stores.ts";
  import Input from "$lib/Input.svelte";
  import Phone from "$lib/Phone.svelte";

  export let data;
  let la = data.lang;
  let company = [
    "https://openenrollment.healthcare/wp-content/uploads/2024/06/aetna.png",
    "https://openenrollment.healthcare/wp-content/uploads/2024/06/cigna.png",
    "https://openenrollment.healthcare/wp-content/uploads/2024/06/blue_cross.png",
    "https://openenrollment.healthcare/wp-content/uploads/2024/06/united_healthcare.png",
    "https://openenrollment.healthcare/wp-content/uploads/2024/06/oscar.png",
    "https://openenrollment.healthcare/wp-content/uploads/2024/06/ambetter.png",
  ];

  let form_q = {
    coverage_type: ["individual", "family"],
    age_range: ["0-17", "18-35", "36-59", "60+"],
    annual_income: ["0-50k/yr", "50k-100k/yr", "100k-200k", "200+"],
    medicare_enrolled: ["Yes", "No"],
    doctor_often: ["Constantly", "Often", "Sometimes", "Not at all"],
    name: {
      value: "",
      placeholder: "Name",
      eg: "JOH",
    },
    phone: "",
  };

  let customer_data = {
    coverage_type: "",
    name: null,
    phone: "",
    code: "US",
    annual_icon: "",
    medicare_enrolled: "",
    doctor_often: "",
    age_range: "",
  };

  let show = 0;
  let show_percent = 1;
  let show_percent_string = "0%";
  let how_it_works = [
    [
      " Tell Us Your Story",
      "Provide the information we need to help you find the best insurance option for you ",
      " Tell Us Your Story",
      "Provide the information we need to help you find the best insurance option for you ",
    ],
    [
      " Tell Us Your Story",
      "Provide the information we need to help you find the best insurance option for you ",
      " Tell Us Your Story",
      "Provide the information we need to help you find the best insurance option for you ",
    ],
    [
      " Tell Us Your Story",
      "Provide the information we need to help you find the best insurance option for you ",
      " Tell Us Your Story",
      "Provide the information we need to help you find the best insurance option for you ",
    ],
  ];
  $: show_percent = (1 - show / 7).toFixed(2) * 100;
</script>

<section
  class="relative bg-indigo-100 w-full h-[80vh] min-h-[30rem] flex flex-col mb-24 justify-between items-center pt-32"
>
  <div class="w-full h-full absolute top-0 left-0 overflow-clip">
    <div
      class="ring-1 -translate-y-1/2 -translate-x-1/2 ring-indigo-600/20 scale-125 size-96 absolute top-0 rounded-full left-0"
    ></div>
    <div
      class="ring-1 -translate-y-1/2 -translate-x-1/2 ring-indigo-600/30 size-96 absolute top-0 rounded-full left-0"
    ></div>
    <div
      class="ring-1 translate-y-3/4 translate-x-1/2 ring-indigo-600/20 scale-150 size-96 absolute right-0 rounded-full bottom-0"
    ></div>
    <div
      class="ring-1 translate-y-1/2 translate-x-1/2 ring-indigo-600/30 size-96 absolute right-0 rounded-full bottom-0"
    ></div>
  </div>
  <div class="lg:max-w-2xl max-w-lg w-[90%]">
    <p
      class="text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-gray-700/80 via-gray-700 to-gray-800 font-bold"
    >
      Enroll In Marketplace Health Insurance Online At The Lowest Price
    </p>
  </div>
  <div
    class="rounded-3xl bg-gray-100 shadow-xl overflow-clip translate-y-8 w-[90%] h-fit max-w-4xl"
  >
    <p
      class:hidden={show >= 7}
      class="w-full bg-indigo-200 font-bold h-fit text-center py-4"
    >
      {show === 0
        ? "Are you looking for individual or family coverage?"
        : show === 1
          ? "How old are you?"
          : show === 2
            ? "What is your household total annual income?"
            : show === 3
              ? "Are you currently enrolled in Medicare Parts A or B?"
              : show === 4
                ? "How often do you see a doctor?"
                : show === 5
                  ? "What is your name?"
                  : "What is your phone number"}
    </p>

    <div class="p-8 w-full">
      <div
        class="w-full h-4 rounded-full ring-1 relative ring-gray-600 overflow-clip"
      >
        <div
          class="w-full absolute flex justify-end duration-300 ease-in-out transition-all left-0 top-0 h-4 bg-indigo-600 rounded-full"
          style="transform: translateX({-show_percent}%);"
        >
          <p class="text-white ml-auto pr-2 text-xs z-10">
            {(100 - show_percent).toFixed(0)}%
          </p>
        </div>
      </div>

      <div class="w-full relative pt-4 h-32 flex justify-between items-center">
        {#if show < 7}
          {#each Object.entries(form_q) as [key, value], i}
            <div
              class:scale-50={show > i || show < i}
              class:-translate-x-full={show > i}
              class:translate-x-full={show < i}
              class:opacity-0={show !== i}
              class:opacity-100={show === i}
              class="w-full h-fit top-4 left-0 absolute duration-300 transition-all grid grid-cols-2 md:flex gap-4 md:space-x-4 justify-evenly"
            >
              {#if show < 7}
                {#if key === "name"}
                  <div class="flex relative h-full flex-col w-full">
                    <Input
                      boolean_disabled={false}
                      className="w-full"
                      bind:value_place={customer_data.name}
                      placeholder={value.placeholder}
                      placeholder_eg={value.eg}
                    ></Input>
                    <button
                      on:click={() => {
                        show = 6;
                      }}
                      class="rounded-md py-2 w-fit mx-auto max-w-xs px-6 relative font-medium text-lg text-gray-100 bg-indigo-600"
                    >
                      {data.lang === "es" ? "Continue" : "Continue"}
                    </button>
                  </div>
                {:else if key === "phone"}
                  <div class="w-full flex flex-col relative h-full">
                    <Phone
                      bind:code={customer_data.code}
                      valu={data.lang === "es" ? "Teléfono" : "Phone"}
                      bind:number={customer_data.phone}
                    ></Phone>
                    <button
                      on:click={() => {
                        show = 7;
                        $show_succ_mod = true;
                      }}
                      class="rounded-md py-2 w-fit mx-auto max-w-xs px-6 relative font-medium text-lg text-gray-100 bg-indigo-600"
                    >
                      {data.lang === "es" ? "Continue" : "Continue"}
                    </button>
                  </div>
                {:else}
                  {#each value as c}
                    <button
                      class="w-full rounded-xl hover:bg-indigo-600 active:scale-95 hover:text-gray-100 duration-300 transition-all h-fit ring-1 ring-gray-200 py-4"
                      on:click={() => {
                        customer_data.age_range = c;
                        show = 1 + i;
                      }}>{c}</button
                    >
                  {/each}
                {/if}
              {/if}
            </div>
          {/each}
        {:else}
          <div class="m-auto flex flex-col">
            <p class="col-span-full w-full text-gray-600 mb-4 max-w-xs mx-auto">
              We are calling right now
            </p>
            <div class="grid grid-cols-3 h-fit m-auto w-full max-w-12">
              {#each Array.from({ length: 3 }) as _, i}
                <div
                  class="size-2 bg-indigo-600 grow rounded-full m-auto"
                  class:grow={i === 0}
                  class:grow1={i === 1}
                  class:grow2={i === 2}
                ></div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
<div
  class="w-[90%] max-w-xl pt-16 grid grid-cols-3 sm:flex justify-evenly items-center"
>
  {#each company as c}
    <img src={c} class="size-16 object-contain mx-auto" />
  {/each}
</div>
<div class="w-[80%] max-w-sm h-[1px] bg-gray-200"></div>
<p class="font-bold text-gray-500">How it works</p>
<div class="w-[90%]">
  <p
    class="text-2xl sm:text-3xl text-center lg:text-4xl max-w-2xl mx-auto text-gray-700 font-bold"
  >
    {data.lang === "es"
      ? "Teléfono"
      : "A quick and simple way to find the right health insurance plan!"}
  </p>
  <p
    class="text-base sm:text-lg text-center lg:text-xl max-w-3xl mx-auto my-4 text-gray-500 font-light"
  >
    {data.lang === "es"
      ? "Teléfono"
      : "Take the hassle and frustration out of the equation when searching for the best insurance plans with Open Enrollment Healthcare. Our agents will guide you through the process of finding the most affordable premium that keeps you covered. "}
  </p>
</div>
<div class="grid md:grid-cols-3 gap-6 w-[90%] max-w-4xl">
  {#each how_it_works as hiw}
    <div class="w-full bg-gray-50 shadow p-8 h-fit text-center rounded-2xl">
      <p class="text-2xl text-gray-800 font-bold">
        {data.lang === "es" ? hiw[0] : hiw[2]}
      </p>
      <p class="text-lg text-gray-500 font-light">
        {data.lang === "es" ? hiw[1] : hiw[3]}
      </p>
    </div>
  {/each}
</div>
<section class="mt-8">
  <div class="mx-auto mb-16 flex flex-col items-center justify-center">
    <div class="mx-auto size-60 rounded-lg ring-1 relative ring-black/10">
      <img src="" alt="zach" />
    </div>
    <p class="mx-auto my-8 w-[90%] max-w-sm text-center text-4xl font-medium">
      {data.lang === "es"
        ? "Tu equipo de confianza para casos privados"
        : "Your trusted team for private cases"}
    </p>
    <a
      href="aboutus"
      class="mx-auto rounded-full bg-indigo-500 px-8 py-2 text-lg font-semibold text-indigo-50 shadow"
      >{data.lang === "es" ? "Sobre nosotros" : "About us"}
    </a>
  </div>
</section>

<style>
  @keyframes grow {
    0% {
      transform: scale(1);
    }
    20% {
      transform: scale(1.25);
    }
    40% {
      transform: scale(1);
    }
  }
  .grow {
    animation: grow 2s ease-in-out infinite;
    animation-delay: 3s;
  }
  @keyframes grow1 {
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(1.25);
    }
    60% {
      transform: scale(1);
    }
  }
  .grow1 {
    animation: grow1 2s ease-in-out infinite;
    animation-delay: 3s;
  }
  @keyframes grow2 {
    40% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.25);
    }
    80% {
      transform: scale(1);
    }
  }
  .grow2 {
    animation: grow2 2s ease-in-out infinite;
    animation-delay: 3s;
  }
</style>
