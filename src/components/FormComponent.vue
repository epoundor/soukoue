<template>
  <div class="w-full flex flex-col" @correct="isCorrect">
    <div class="text-2xl text-right mb-2">Etape :{{ step }}/5</div>
    <div class="h-2 mb-6 w-full bg-purple-200 rounded-full">
      <div
        class="h-2 bg-purple-800 rounded-full"
        :style="getProgressBarStyle"
      ></div>
    </div>
    <UserFormComponent v-if="step == 1" />
    <div class="w-full border-[.5px] border-[#CCCCCC]"></div>
    <div class="flex items-center justify-between w-full mt-4 mb-20">
      <button
        class="inline-flex space-x-1 items-center text-fi-middle-gray text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          width="14"
          height="14"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p>Retour</p></button
      >
      <button
        class="bg-indigo-800 text-white rounded-[5px] py-2 px-8 font-semibold"
        type="submit"
        form="invoice-form"
      >
        Suivant
      </button>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import UserFormComponent from "@/components/UserFormComponent.vue";
export default {
  data() {
    return {
      step: ref(1),
    };
  },
  computed: {
    getProgressBarStyle() {
      return `width: ${(this.step * 100) / 5}%`;
    },
    isCorrect(val) {
      return val;
    },
  },
  components: {
    UserFormComponent,
  },
};
</script>

<style>
</style>