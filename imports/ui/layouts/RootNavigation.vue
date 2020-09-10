<template>
    <div id="root-navigation">
        <b-navbar type="dark" variant="dark">
            <b-navbar-brand>CMS Portal</b-navbar-brand>
            <b-breadcrumb id="breadcrumb-navigation" class="m-0 py-1 flex-fill bg-light"
                :items="items"
            ></b-breadcrumb>
        </b-navbar>
        <router-view id="page-view" class="bg-light"></router-view>
    </div>
</template>
<script>
export default {
    computed: {
        items: function() { // TODO edit routes/breadcrumb to be more dynamic
            let items = [
                {
                    text: 'Jobs',
                    to: { name: 'Jobs' }
                }
            ];
            if (this.$route.params.jobNumber) {
                items.push({
                    text: this.$route.params.jobNumber,
                    active: true
                });
            }
            return items;
        }
    }
}
</script>
<style scoped>
#root-navigation {
    height: 100%;
    overflow: visible;
}
#page-view {
    margin-top: -56px;
    padding-top: 56px;
    height: 100%;
}
</style>