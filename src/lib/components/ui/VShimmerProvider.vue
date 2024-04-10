<template>
    <component :is="tag">
        <slot />
    </component>
</template>

<script>
export default {
    name: "VShimmerProvider",
    props: {
        loading: {
            type: Boolean,
            default: false,
        },
        tag: {
            type: String,
            default: "div",
        },
    },
    provide() {
        const data = {};
        Object.defineProperty(data, "loading", {
            enumerable: true,
            get: () => this.loading,
        });
        return { data };
    },
};
</script>

<style lang="scss" scoped></style>
