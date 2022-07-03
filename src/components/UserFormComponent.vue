<template>
  <div class="flex flex-col">
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
        name="username"
        placeholder="John"
        type="text"
        :required="true"
        description="Denomination de votre entreprise"
        label="Nom et prénoms"
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
        name="username"
        placeholder="Mister Juicy"
        type="text"
        :required="true"
        description="Denomination de votre entreprise"
        label="Nom et prénoms"
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
  </div>
</template>

<script>
import InputComponent from "@/components/InputComponent.vue";
export default {
  components: {
    InputComponent,
  },
};
</script>

<style>
</style>