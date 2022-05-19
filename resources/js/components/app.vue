<template>
    <div>
        <form @submit.prevent="updateUser()">
        <a href="" @click.prevent="printme" target="_blank" class="btn btn-default"><i class="fa fa-print"></i> Print</a>
        <button class="btn btn-primary">sa</button>
        </form>
        <div id="printMe">aa</div>
    </div>
</template>
<script>
export default {
    data() {
    },
    methods:{
        updateUser(){
            window.print()
        },
        printme(){
            this.$htmlToPaper('printMe');
        },
    },
};
</script>