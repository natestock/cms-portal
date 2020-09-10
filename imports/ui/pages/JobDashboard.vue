<template>
    <div>
        <b-jumbotron :header="job.jobName" :lead="job.address" class="bg-light">
            <p>Job Number: {{ job.jobNumber }}</p>
            <p>Project Manager: {{ job.projectManager }}</p>
            <h4 class="text-primary">{{ job.status }}</h4>
        </b-jumbotron>
        <b-tabs id="tab-viewer" card>
            <b-tab title="First" active><p>I'm the first tab</p></b-tab>
            <b-tab title="Second"><p>I'm the second tab</p></b-tab>
            <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
        </b-tabs>
    </div>
</template>
<script>
export default {
    data () { return {
        job: {
            jobNumber: '1',
            jobName: 'Test Job 1',
            projectManager: 'John Smith',
            address: '1 Jobsite Dr, Smallsville US, 50021',
            status: 'Active'
        }
    }}
}
</script>
<style scoped>
#tab-viewer {
    margin-top: -32px;
}
</style>