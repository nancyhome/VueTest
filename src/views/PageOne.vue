<template>
    <el-table :data="tableData">
        <el-table-column prop="trace_id" label="TraceId" width="140">
        </el-table-column>
        <el-table-column prop="activity" label="Activity" width="120">
        </el-table-column>
        <el-table-column prop="state" label="State">
        </el-table-column>
        <el-table-column prop="timestamp" label="Timestamp">
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        data() {
            const item = {
                trace_id: '2',
                activity: 'Triage',
                state: 'complete',
                timestamp: '1970-01-01 01:00:00.000+01:00'
            };
            return {
                tableData: Array(20).fill(item)
            }
        },
        created(){

        }
    };
</script>

<style>

</style>