<script>
  import FAQ from '$lib/FAQ.svelte';

  import {faq} from '$lib/content/faq';
</script>

<section
  class="relative mx-auto grid w-[90%] max-w-6xl grid-cols-5 gap-x-4 space-y-8 pt-24 sm:grid-cols-2"
>
  <div
    class="col-span-full mx-auto flex w-full flex-col items-start justify-start md:col-span-1"
  >
    <p
      class="bg-gradient-to-br from-neutral-700/90 to-neutral-800 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-7xl"
    >
      Questions?
    </p>
  </div>
  <div
    class="col-span-full mr-auto flex h-full w-full max-w-md flex-col items-start justify-start font-light text-gray-600 md:col-span-1 md:ml-auto"
  >
    <p>
      If you have any questions, we have answers for you here. Incase we didn't
      answer it, feel free to email us at ...
    </p>
  </div>

  <FAQ title="General Questions" faq={Object.entries(faq)}></FAQ>
  <!--<FAQ title="Process and Approach" faq={faq_process}></FAQ>
  <FAQ title="Legal and Licensing" faq={faq_legal}></FAQ>
  <FAQ title="Cost and Fees" faq={faq_cost}></FAQ>
  <FAQ title="Client Expectations" faq={faq_client}></FAQ>
  <FAQ title="Evidence and Reporting" faq={faq_evidence}></FAQ>
  <FAQ title="Privacy and Confidentiality" faq={faq_privacy}></FAQ>-->
</section>
