<template>
    <div id="root-navigation">
        <b-navbar type="dark" variant="dark">
            <b-navbar-brand>CMS Portal</b-navbar-brand>
            <b-nav-form>
                <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button variant="primary" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template v-slot:button-content>
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>
<style scoped>
#root-navigation {
    overflow: visible;
}
</style>