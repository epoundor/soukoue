<template>
  <div class="w-full grid grid-cols-6 px-5 py-2 border-b-2">
    <span class="col-span-2">{{ description }} </span>
    <span class="text-right">{{ quantity }}</span>
    <span class="text-right">{{ price }} <span>{{ currency }}</span></span>
    <span class="text-right">{{ tva }}%</span>
    <span class="text-right">{{ getTotal }} <span>{{ currency }}</span></span>
  </div>
</template>

<script>
import computed from 'vue';
export default {
  name: "ItemComponent",
  props: {
    item: {
        description: String,
        quantity: Number,
        price: Number,
        tva: Number,
    },
  },
  computed: {
    getTotal(){
        return (this.price * this.tva / 100)+this.price;
    }
  },
  data() {
    return {
      description:this.item.description,
      quantity:this.item.quantity,
      price:this.item.price,
      currency:this.item.currency,
      tva:this.item.tva,
    };
  },
};
</script>

<style>
</style>