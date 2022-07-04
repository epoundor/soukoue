<template>
  <div class="flex flex-col" @error="isCorrect">
    <div class="text-4xl">Renseignez vos informations</div>
    <div
      class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 my-4"
    >
      <input-component
        name="brandname"
        placeholder="Mister Juicy"
        type="text"
        :required="true"
        description="Denomination de votre entreprise"
        label="Nom de votre entreprise"
      ></input-component>
      <input-component
        name="email"
        placeholder="example@misterjuicy.com"
        type="email"
        :required="true"
        description="Votre email servira d'identifiant à votre compte"
        label="Email"
      ></input-component>
    </div>
    <div
      class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 my-4"
    >
      <input-component
        name="name"
        placeholder="Doe"
        type="text"
        :required="true"
        description=""
        label="Nom de famille"
      ></input-component>
      <input-component
        name="surname"
        placeholder="John"
        type="email"
        :required="true"
        description=""
        label="Prénoms"
      ></input-component>
    </div>
    <div
      class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 my-4"
    >
      <input-component
        name="adress"
        placeholder="Rue de Bayol 2255"
        type="text"
        :required="true"
        description="Numéro et rue du siège social de votre entreprise"
        label="Adresse"
      ></input-component>
      <input-component
        name="city"
        placeholder="Cotonou"
        type="text"
        :required="true"
        description="Ville du siège social de votree entreprise"
        label="Ville"
      ></input-component>
    </div>
    <div
      class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 my-4"
    >
      <input-component
        name="tel"
        placeholder="(+229) 61789141"
        type="tel"
        :required="true"
        description="Code postal du siège de votre entreprise"
        label="Code postal"
      ></input-component>
      <input-component
        name="rccm"
        placeholder="RB/AAA/XX A XXXXX"
        type="email"
        :required="true"
        description="Registre du commerce de votre entreprise"
        label="RCCM"
      ></input-component>
    </div>
     <div
      class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 my-4"
    >
      <input-component
        name="ifu"
        placeholder="XXXXXXXXXXX"
        type="tel"
        :required="true"
        description="Identifiant fiscal unique de votre entreprise"
        label="IFU"
      ></input-component>
      <input-component
        name="IBAN"
        placeholder="RB/AAA/XX A XXXXX"
        type="tel"
        :required="true"
        description="IBAN de votre entreprise"
        label="IBAN"
      ></input-component>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import InputComponent from "@/components/InputComponent.vue";
export default {
  components: {
    InputComponent,
  },
  computed:{
    isCorrect(val){
        this.correct = val;
        this.$emit('correct',this.correct)
    }
  },
  data() {
    return{
        correct: false,
    }
  },
};
</script>

<style>
</style>