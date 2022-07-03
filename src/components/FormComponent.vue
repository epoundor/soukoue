<template>
  <div class="w-full flex flex-col">
    <div class="text-2xl text-right mb-2">Etape : /5</div>
    <div class="h-2 mb-6 w-full bg-purple-200 rounded-full">
        <div class="w-1/4 h-2 bg-purple-800 rounded-full"></div>
    </div>
    <UserFormComponent v-if="step==1"/>
  </div>
</template>

<script>
import UserFormComponent from '@/components/UserFormComponent.vue';
export default {
    data() {
        return {
            step:1,
        }
    },
    components:{
        UserFormComponent
    }
}
</script>

<style>

</style>