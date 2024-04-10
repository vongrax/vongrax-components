<template>
    <button type="button" class="v-tag" :disabled="tag.disabled" :class="tagClasses" @click.stop="changeHandler">
        <span v-if="tag.text">{{ tag.text }}</span>
        <img v-if="tag.icon" class="v-tag-icon" :src="tag.icon" :alt="tag.text" />
    </button>
</template>

<script>
import { Side, Sizes } from "@/typespaces";

export default {
    name: "VTag",
    emits: ["click"],
    props: {
        tag: {
            type: Object, // as <VTag>
        },
        size: {
            type: String,
            default: Sizes.XS,
        },
        iconPosition: {
            type: String,
            default: Side.RIGHT,
        },
        active: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        tagClasses() {
            return {
                [`v-tag_size_${this.size}`]: this.size,
                [`v-tag_active`]: this.active,
                [`v-tag_position_${this.iconPosition}`]: this.iconPosition,
            };
        },
    },
    methods: {
        changeHandler() {
            this.$emit("click", this.tag);
        },
    },
};
</script>

<style lang="scss" scoped>
.v-tag {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    padding: 5px 10px;
    height: 24px;
    margin: 0;
    border: 1px solid var(--system-mono-300);
    border-radius: 8px;
    color: var(--system-mono-600);
    font: var(--font-xs-bold);
    gap: 8px;
    outline: none;
    background: var(--system-mono-100);

    &_position {
        &_left {
            flex-direction: row-reverse;
        }
    }

    &:disabled {
        background: var(--system-mono-200);
        color: var(--system-mono-400);
        cursor: not-allowed;
        pointer-events: all;
    }

    &_size {
        &_s {
            padding: 7px 12px;
            height: 32px;
            font: var(--font-s-bold);
            border-radius: 10px;
        }

        &_m {
            padding: 9px 14px;
            height: 40px;
            font: var(--font-m-bold);
            border-radius: 12px;
        }
    }

    &:not(&_active):focus {
        background: var(--system-mono-200);
    }

    &:not(&_active):hover {
        background: var(--system-mono-200);
    }

    &_active {
        color: var(--color-primary);
        background: var(--color-secondary);
        border: 1px solid var(--color-secondary);

        &:hover {
            background: var(--color-primary-alfa-push);
        }
    }

    &:focus-visible {
        outline: 2px solid var(--system-color-yellow-alfa30);
        background: var(--color-primary-alfa-push);
    }
}

.v-tag-icon {
    width: 16px;
    height: 16px;
}
</style>
