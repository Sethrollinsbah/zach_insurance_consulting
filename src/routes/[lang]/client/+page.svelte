<script lang="ts">
  import Text from '$lib/text/Text.svelte';
  import {goto} from '$app/navigation';
</script>

<svelte:head>
  <title>Insider Kit | SEC Trade Insights Dashboard</title>
  <meta
    name="description"
    content="Insider Kit is a software tool used for the automation of support emails"
  />
</svelte:head>

<div
  class="relative flex h-[calc(100vh-4rem)] min-h-[30rem] w-full flex-col items-center overflow-x-clip overflow-y-scroll"
>
  <div class="flex w-full flex-col items-center overflow-x-clip">
    <svg
      class="absolute left-0 top-0 aspect-video h-96 fill-blue-600/20"
      viewBox="0 0 1524 666"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M216 15.5C282.5 15.5 559.5 -33 577.5 49.5C595.5 132 718 123.5 768 101.5C818 79.5 906.5 9 934.5 101.5C962.5 194 1131 110 1135 170C1139 230 1502.5 221.5 1480.5 258C1639.3 343.2 1310.67 539.833 1167.5 513C994.842 374.046 645.671 397.733 629.673 557.927C629.679 557.947 629.685 557.972 629.692 558C691.692 819 -56.5001 529.5 312.5 463C681.5 396.5 -151 256.5 25.5001 136C166.7 39.6 211.333 15.5 216 15.5Z"
      />
      <path
        d="M1480.5 258C1502.5 221.5 1139 230 1135 170C1131 110 962.5 194 934.5 101.5C906.5 9 818 79.5 768 101.5C718 123.5 595.5 132 577.5 49.5C559.5 -33 282.5 15.5 216 15.5C211.333 15.5 166.7 39.6 25.5001 136C-151 256.5 681.5 396.5 312.5 463C-56.5001 529.5 691.692 819 629.692 558C628.967 554.95 632.139 597.498 631.589 594.642C594.475 401.986 982.41 364.041 1167.5 513C1310.67 539.833 1639.3 343.2 1480.5 258ZM1480.5 258C1458.5 294.5 1414 507 1480.5 258Z"
        stroke="black"
      />
    </svg>

    <svg
      class="absolute bottom-0 right-0 aspect-video h-96 animate-pulse fill-blue-600/20"
      viewBox="0 0 2208 944"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M211.5 194C214.7 174.8 491.167 101.667 629 67.5C629 41.5 1032.5 93.5 1207 13C1381.5 -67.5 1484 294 1921.5 362.5C2359 431 1971.5 575 2172 709.5C2372.5 844 1650.5 794 1506 691.5C1361.5 589 1098.5 794 970 908C867.2 999.2 868.5 892.667 882 828C866.5 700.833 744 499.1 378 709.5C-79.5 972.5 390.5 657.5 105.5 501C-179.5 344.5 211.5 228 211.5 194Z"
      />
    </svg>

    <div
      class=" absolute left-0 top-0 h-full w-full backdrop-blur-3xl dark:hidden"
    />
    <div
      class=" absolute left-0 top-0 hidden h-full w-full backdrop-blur-3xl dark:block"
    />
  </div>
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <div
      class="flex aspect-auto w-[30rem] flex-col rounded-xl bg-gray-100 px-4 py-6 shadow-2xl ring-1 ring-gray-200 dark:bg-gray-950 dark:ring-gray-800 sm:px-10 sm:py-16"
    >
      <img src="/logo.svg" class="m-0 size-8" />
      <Text text="Sign in" className="mt-4" />
      <p class="font-light text-gray-500">
        to continue to <b> InsiderKit</b>
      </p>
      <a class="group flex text-sm text-blue-500" href="/auth/signup"
        >Signup <svg
          class="my-auto size-3 -translate-x-1 stroke-blue-500 opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:scale-125 group-hover:opacity-100"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g><g id="SVGRepo_iconCarrier">
            <path
              d="M9 6L15 12L9 18"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g></svg
        ></a
      >
      <div
        class="relative my-4 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent dark:via-gray-300"
      >
        <h1
          class="absolute left-1/2 top-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 bg-gray-100 px-1 text-xs font-light text-gray-500 dark:bg-gray-950"
        >
          OR
        </h1>
      </div>

      <button
        class="mb-2 mt-4 flex h-12 w-full cursor-pointer flex-row items-center justify-center rounded-lg border-[1px] border-gray-400 bg-gray-100 bg-opacity-90 text-center font-bold text-gray-500 placeholder-slate-300 hover:opacity-75 dark:border-gray-700 dark:bg-gray-800 dark:text-neutral-300"
        on:click={() => {
          goto('/magic-link');
        }}
        ><svg
          class="mr-2 h-6 w-6 fill-black/60 dark:fill-white/60"
          viewBox="0 0 22 22"
          xmlns="http://www.w3.org/2000/svg"
          id="memory-email"
          ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g><g id="SVGRepo_iconCarrier"
            ><path
              d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z"
            ></path></g
          ></svg
        >
        <p>Passwordless Login</p></button
      ><button
        class="mb-2 flex h-12 w-full cursor-pointer flex-row items-center justify-center rounded-lg border-[1px] border-gray-400 bg-gray-100 bg-opacity-90 text-center font-bold text-gray-500 placeholder-slate-300 shadow-sm hover:opacity-75 dark:border-gray-700 dark:bg-gray-800 dark:text-neutral-300"
        on:click={async () => {
          const auth = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
              queryParams: {
                redirectTo: 'http://jonbonae.com/api/auth/callback'
              }
            }
          });
        }}
      >
        <svg
          class="mr-2 h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          ><path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          /><path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          /><path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          /><path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          /><path d="M1 1h22v22H1z" fill="none" /></svg
        >
        <p>Login with Google</p>
      </button>
      <button
        class="mb-2 flex h-12 w-full cursor-pointer flex-row items-center justify-center rounded-lg border-[1px] border-gray-400 bg-gray-100 bg-opacity-90 text-center font-bold text-gray-500 placeholder-slate-300 shadow-sm hover:opacity-75 dark:border-gray-700 dark:bg-gray-800 dark:text-neutral-300"
        on:click={async () => {
          const auth = await supabase.auth.signInWithOAuth({
            provider: 'linkedin_oidc',
            options: {
              queryParams: {
                redirectTo:
                  'https://onqniwpvsufaadhnepmy.supabase.co/auth/v1/callback'
              }
            }
          });
        }}
        ><div class="relative mr-2 w-6 overflow-clip">
          <svg
            class="relative right-0 size-6"
            viewBox="0 0 72 72"
            xmlns="http://www.w3.org/2000/svg"
            ><g fill="none" fill-rule="evenodd"
              ><path
                d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                fill="#007EBB"
              /><path
                d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                fill="#FFF"
              /></g
            ></svg
          >
        </div>

        <p>Login with Linkedin</p>
      </button>
    </div>
    <h1 class="mt-4 text-center">
      By signing in, you agree to our Terms of Service
    </h1>
  </div>
</div>

<style>
  @keyframes pulsed {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.2;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }

  .shimmer {
    position: relative;
    overflow: hidden;
  }

  .shimmer::before {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(245, 158, 11, 0),
      rgba(245, 158, 11, 0.4),
      rgba(245, 158, 11, 0)
    );
    position: absolute;
    left: -150%;
    animation: shimmer 8s infinite;
  }

  @keyframes shimmer {
    100% {
      left: 150%;
    }
  }

  .shimmerDark {
    position: relative;
    overflow: hidden;
  }

  .shimmerDark::before {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(251, 191, 36, 0),
      rgba(251, 191, 36, 0.4),
      rgba(251, 191, 36, 0)
    );
    position: absolute;
    left: -150%;
    animation: shimmer 8s infinite;
  }

  path {
    stroke-dasharray: 1000 1000;
    animation: draw 3s linear;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: -1000;
    }
  }

  @keyframes glow {
    0% {
      box-shadow:
        0 0 5px rgb(190 24 93),
        0 0 10px rgb(190 24 93),
        0 0 15px rgb(190 24 93),
        0 0 20px rgb(190 24 93);
    }
    70% {
      box-shadow:
        0 0 20px rgb(190 24 93),
        0 0 40px rgb(190 24 93),
        0 0 60px rgb(190 24 93),
        0 0 80px rgb(190 24 93);
    }
    100% {
      box-shadow:
        0 0 5px rgb(190 24 93),
        0 0 10px rgb(190 24 93),
        0 0 15px rgb(190 24 93),
        0 0 20px rgb(190 24 93);
    }
  }

  .moving-text {
    white-space: nowrap;
    position: absolute;
    animation: moveLeft 20s linear infinite;
  }

  @keyframes moveLeft {
    0% {
      transform: translateX(
        0%
      ); /* Move to the right by the width of the parent */
    }
    100% {
      transform: translateX(
        -50%
      ); /* Move to the left by the width of the parent */
    }
  }
  .bgLight {
    background-size: 25% 30%;
    background-repeat: repeat;
    background-image: linear-gradient(to right, #03071226 1px, transparent 1px),
      linear-gradient(to bottom, #03071226 1px, transparent 1px);
    box-shadow:
      0 -24px 80px 48px #f9fafb inset,
      /* Top shadow */ 0 24px 80px 48px #f9fafb inset; /* Bottom shadow */
  }
  .bgDark {
    background-size: 25% 30%;
    background-repeat: repeat;
    background-image: linear-gradient(to right, #f9fafb26 1px, transparent 1px),
      linear-gradient(to bottom, #f9fafb26 1px, transparent 1px);
    box-shadow:
      0 -24px 80px 48px rgb(3 7 18) inset,
      /* Keep top shadow */ 0 0 0 0 rgb(3 7 18) inset; /* Remove bottom shadow */
  }
</style>
