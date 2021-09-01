<template>
    <div>
        <input type="checkbox" id="caticon" :checked="done" />
        <label for="cation">{{label}}</label>
        <!-- <label for="cation">My item</label> -->
    </div>
</template>

<script>
export default {
    props: {
        label: { required: true, type: String },
        done: { default: false, type: Boolean }
    }
};
</script>