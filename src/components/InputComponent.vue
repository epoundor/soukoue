<template>
  <div class="flex flex-col space-y-2 w-full md:w-1/2">
    <label :for="name" class="inline-flex items-center">
      <span class="mr-3 font-semibold">{{ label }}</span>
      <div
        class="flex items-center justify-center relative group"
        v-show="required"
      >
        <span
          style="
            box-sizing: border-box;
            display: inline-block;
            overflow: hidden;
            width: initial;
            height: initial;
            background: none;
            opacity: 1;
            border: 0px;
            margin: 0px;
            padding: 0px;
            position: relative;
            max-width: 100%;
          "
          ><span
            style="
              box-sizing: border-box;
              display: block;
              width: initial;
              height: initial;
              background: none;
              opacity: 1;
              border: 0px;
              margin: 0px;
              padding: 0px;
              max-width: 100%;
            "
            ><img
              alt=""
              aria-hidden="true"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
              style="
                display: block;
                max-width: 100%;
                width: initial;
                height: initial;
                background: none;
                opacity: 1;
                border: 0px;
                margin: 0px;
                padding: 0px;
              " /></span
          ><img
            srcset="
              https://images.fasty-invoices.workers.dev?width=32&amp;quality=75&amp;image=https://app.fasty-invoices.com/_next/static/media/tooltip.81e6bee9.png 1x,
              https://images.fasty-invoices.workers.dev?width=48&amp;quality=75&amp;image=https://app.fasty-invoices.com/_next/static/media/tooltip.81e6bee9.png 2x
            "
            src="https://images.fasty-invoices.workers.dev?width=48&amp;quality=75&amp;image=https://app.fasty-invoices.com/_next/static/media/tooltip.81e6bee9.png"
            decoding="async"
            data-nimg="intrinsic"
            class="group"
            style="
              position: absolute;
              inset: 0px;
              box-sizing: border-box;
              padding: 0px;
              border: none;
              margin: auto;
              display: block;
              width: 0px;
              height: 0px;
              min-width: 100%;
              max-width: 100%;
              min-height: 100%;
              max-height: 100%;
            " /><noscript></noscript
        ></span>
        <div
          class="
            shadow-lg
            bg-white
            border border-gray-200
            rounded
            p-3
            z-50
            transition
            hidden
            group-hover:block
            absolute
            top-6
            whitespace-nowrap
          "
        >
          <p class="text-sm text-fi-dark-indigo">
            {{description }}<br/>Ce champ doit
            obligatoirement figurer
            sur la facture
          </p>
        </div>
      </div>
    </label>

    <div class="relative">
      <div
        class="absolute flex border border-transparent left-0 top-0 h-full w-10"
      ></div>

      <input v-model="value" @change="isValidated" :id="name" :name="name" :type="type"
      autocomplete
      :value="getUserDataValue"
      :placeholder="'eg: ' + placeholder ?? name" 
      class="px-4 py-2 border rounded
      border-fi-middle-gray placeholder-fi-middle-gray focus:outline-none
      focus:ring-1 focus:border-fi-indigo focus:ring-indigo-500"
      :required="required" />
    </div>
    <p class="text-xs font-semibold text-red-500" v-show="!valid">Ce champ est requis ou invallide</p>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { mapGetters } from "vuex";
import store from '@/store';
export default {
  props: {
    name: String,
    type: String,
    required: Boolean,
    placeholder: String,
    description: String,
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters([
         'getUserData'
  ]),
    isValidated() {
      if (this.required && this.value == "" || this.value == null) {
        this.valid = !this.valid;
        return
      }
      else if(this.type=='email') {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return this.valid = re.test(this.value);
      }
       else if(this.type=='tel') {
        var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        this.$emit("error",true);
        return this.valid = re.test(this.value);
      }
        this.valid = true;
    },
    getUserDataValue() {
      return store.getters.getUserData(this.name);
    }
  },
  created(){
    this.value = this.getUserDataValue()== 0?"":this.getUserDataValue();
  },
  watch:{
    value(value) {
      let el_name=this.name;
      store.commit('UPDATE_USER',{el_name,value,});
    }
  },
  data() {
    return {
      value: null,
      valid: true,
    };
  },
};
</script>

<style>
</style>