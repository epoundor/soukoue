<template>
  <div class="flex flex-wrap justify-between min-w-screen min-h-screen bg-purple-200">
    <div class="relative overflow-y-auto xl:w-6/12 w-full bg-white">
      <form action="" class="bg-white scroolbar overflow-scroll xl:fixed lg:pl-5 lg:pr-0 overflow-y-auto px-10 py-20 flex justify-center items-center max-w-full">
        <FormComponent/>
      </form>
    </div>
    <div class="xl:w-6/12 w-full hidden xl:flex justify-center items-center py-20 px-10 xl:px-0">
      <div class="bg-white rounded overflow-scroll w-10/12 aspect-[18/25]">
        <div class="h-10 bg-orange-500"></div>
        <div class="main px-6 w-full">
          <div class="flex flex-col gap-6">
            <h1 class="text-5xl font-bold mt-10">Facture</h1>
            <span class="bg-orange-500 w-48 h-2 flex"></span>
          </div>
          <div class="flex justify-between mt-10 ">
            <div class="w-1/3">
              <span class="text-slate-700">DE:</span>
              <h4 class="font-bold uppercase" >{{dataUser('brand_name')}}</h4>
              <span>{{dataUser('adress')!== ""?dataUser('adress')+',':""}}</span>
              <span>{{dataUser('city')}}</span>
              <span>{{dataUser('tel')}}</span>
              <div><span class="font-bold">RCCM:</span>{{dataUser('rccm')}}</div>
              <div><span class="font-bold">IFU:</span>{{dataUser('ifu')}}</div>
              <div><span class="font-bold">IBAN:</span>{{dataUser('iban')}}</div>
            </div>
            <div class="w-1/3">
              <span class="text-slate-700">POUR:</span>
              <h4 class="font-bold">Nom Prénom</h4>
              <span>Adresses géographique</span>,
              <span>Adresses cadastrales</span>,
              <span>Adresses postales</span>
              <div><span class="font-bold">RCCM:</span>XXXXXXXXXXXXXX</div>
              <div><span class="font-bold">IFU:</span>XXXXXXXXXXXXXX</div>
              <div><span class="font-bold">IBAN:</span>XXXXXXXXXXXXXX</div>
            </div>
            <div class="w-1/3">
              <span class="text-slate-700">INFOS</span><br />
              <span class="font-bold">Délai:</span> XX/XX/XXXX <br />
              <span class="font-bold">Réalisé le:</span> XX/XX/XXXX <br />
              <span class="font-bold">Ref:</span> XX-XX-XXXX
            </div>
          </div>
          <invoice-component :items="items" />
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./App.css"></style>
<script>
import InvoiceComponent from "@/components/InvoiceComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
import store from '@/store';

export default {
  data() {
    return {
      items: [
        {
          description: "deded",
          quantity: 5,
          price: 1100,
          tva: 20,
        },
        {
          description: "Le lorem ipsum est, en imprimerie, une suite de mots sans ",
          quantity: 15,
          price: 1000,
          tva: 20,
        },
      ],
    };
  },
  methods: {
    dataUser(prop) {
      return typeof store.getters.getUserData(prop) == "string"?store.getters.getUserData(prop) : ""
    },
  },
  components: {
    InvoiceComponent,
    FormComponent,
  },
};
</script>
