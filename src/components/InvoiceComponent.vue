<template>
  <div class="mt-12 flex flex-col">
    <div class="bg-orange-100 grid grid-cols-6 justify-between p-5 rounded-lg">
      <span class="col-span-2 text-left">Description</span>
      <span class="text-right">Quantité</span>
      <span class="text-right">Montant</span>
      <span class="text-right">TVA</span>
      <span class="text-right">Total</span>
    </div>
    <ItemComponent v-for="(item,i) of this.items" :item=item :key="i"/>
  </div>
</template>

<script>
import ItemComponent from "@/components/ItemComponent.vue";
export default {
  name: "InvoiceComponent",
  props: {
      items: Object,
  },
  components: {
    ItemComponent,
  },
};
</script>

<style>
</style>