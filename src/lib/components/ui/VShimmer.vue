<template>
    <component :is="tag" @click="$emit('click')">
        <div v-if="isLoading" class="skeleton-box" :style="{ height, width, borderRadius }" />
        <slot v-else />
    </component>
</template>

<script>
export default {
    name: "VShimmer",
    inject: ["data"],
    emits: ["click"],
    props: {
        height: {
            default: "64px",
            type: String,
        },
        width: {
            default: "100%",
            type: String,
        },
        borderRadius: {
            default: "16px",
            type: String,
        },
        tag: {
            type: String,
            default: "div",
        },
    },
    computed: {
        isLoading() {
            return this.data.loading;
        },
    },
};
</script>

<style lang="scss" scoped>
.skeleton-box {
    position: relative;
    overflow: hidden;
    background-color: var(--system-mono-200);

    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(
            90deg,
            var(--system-mono-300) 30%,
            var(--system-mono-200),
            var(--system-mono-300) 70%
        );
        background-size: 2400px;
        animation: load 2.5s linear infinite;
    }

    @keyframes load {
        0% {
            background-position: 0 100%;
        }
        100% {
            background-position: 4800px 100%;
        }
    }
}
</style>
