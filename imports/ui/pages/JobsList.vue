<template>
    <div>
        <div id="action-bar" class="m-2 mt-3 d-flex justify-content-between">
            <b-form-input class="w-25"
                placeholder="Search"
            ></b-form-input>
            <b-button variant="primary">New Job</b-button>
        </div>
        <b-table hover selectable select-mode="single"
            :items="jobs"
            @row-selected="handleSelect"
        ></b-table>
    </div>
</template>
<script>
export default {
    data () { return {
        jobs: [
            {
                jobNumber: '1',
                jobName: 'Test Job 1',
                projectManager: 'John Smith',
                address: '1 Jobsite Dr',
                status: 'Active'
            }
        ]
    }},
    methods: {
        handleSelect(items) {
            const jobNumber = items[0].jobNumber;   // reduce array to single object
            this.$router.push(`jobs/${jobNumber}`);
        }
    }
}
</script>