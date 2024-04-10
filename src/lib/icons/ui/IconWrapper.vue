<template>
    <div class="icon-container" :class="containerClasses">
        <svg
            :class="['v-icon', classes]"
            :width="width"
            :height="height"
            :viewBox="viewBox"
            :stroke="stroke"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <slot />
        </svg>
    </div>
</template>

<script>
export default {
    name: "IconWrapper",
    props: {
        size: {
            type: String, // as PropType<IconSizes>
        },
        width: {
            type: String,
            default: "16",
        },
        height: {
            type: String,
            default: "16",
        },
        viewBox: {
            type: String,
            default: "0 0 16 16",
        },
        stroke: {
            type: String,
        },
        rotate: {
            type: String, // Side
        },
    },
    computed: {
        classes() {
            return {
                [`v-icon_size_${this.size}`]: !!this.size,
            };
        },
        containerClasses() {
            return {
                [`icon-container__${this.rotate}`]: !!this.rotate,
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.icon-container {
    display: flex;
    align-items: center;
    justify-content: center;

    &__up {
        rotate: 90deg;
    }

    &__diagonally {
        rotate: 45deg;
    }

    &__right {
        rotate: 180deg;
    }

    &__down {
        rotate: 270deg;
    }

    &__left {
        rotate: 0;
    }
}

.v-icon {
    &_size {
        &_s {
            width: 16px;
            height: 16px;
        }

        &_m {
            width: 20px;
            height: 20px;
        }

        &_l {
            width: 24px;
            height: 24px;
        }
    }
}
</style>
