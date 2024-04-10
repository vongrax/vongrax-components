<template>
    <div class="v-tabs">
        <button
            v-for="(tab, index) in tabData"
            :key="index + tab.value"
            :style="{ width }"
            type="button"
            class="v-tabs-tab"
            :disabled="tab.disabled"
            :class="tabsClasses(tab.value)"
            @click="changeHandler(tab.value)"
        >
            <div v-if="tab.icon" class="v-tabs-icon">
                <component :is="tab.icon" size="m" />
            </div>
            <span>{{ tab.text }}</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "VTabs",
    model: {
        prop: "value",
        event: "change",
    },
    emits: ["change"],
    props: {
        tabData: {
            type: Array, // as <GTabData>
        },
        type: {
            type: String,
            default: "default",
        },
        value: {
            type: String,
        },
        width: {
            type: String,
            default: "auto",
        },
    },
    data() {
        return {
            tabsValue: "",
        };
    },
    methods: {
        changeHandler(value) {
            this.tabsValue = value;
            this.$emit("change", value);
        },
        tabsClasses(value) {
            return {
                [`v-tabs-tab_${this.type}`]: this.type,
                [`v-tabs-tab_${this.type}__active`]: this.tabsValue === value,
            };
        },
    },
    watch: {
        value: {
            handler(value) {
                this.tabsValue = value;
                this.$emit("change", value);
            },
            immediate: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.v-tabs {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.v-tabs-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    background: transparent;
    font: var(--font-m-bold);
    color: var(--system-mono-900);

    &_default {
        padding: 14px 12px;

        &__active {
            background: var(--color-secondary);
            color: var(--color-primary);
        }

        &:hover:not(&__active, &:disabled) {
            background: var(--system-mono-200-alfa50);
            color: var(--system-mono-900);
        }
    }

    &_authorization {
        flex-grow: 2;
        padding: 14px 20px;
        border-radius: 14px;
        background: var(--system-mono-200);

        &:hover:not(&__active, &:disabled) {
            background: var(--system-mono-300);
            color: var(--system-mono-900);
        }

        &__active {
            background: var(--system-mono-800);
            color: var(--system-mono-100);

            .v-tabs-icon {
                &::v-deep path {
                    fill: var(--system-mono-100);
                }
            }
        }

        &:nth-child(3n) {
            flex-grow: 1;
        }
    }

    &:disabled {
        background: var(--system-mono-300);
        color: var(--system-mono-400);
        cursor: not-allowed;

        .v-tabs-icon {
            &::v-deep path {
                fill: var(--system-mono-400);
            }
        }
    }
    &:focus-visible {
        outline: 2px solid var(--system-color-yellow-alfa30);
    }
}

.v-tabs-icon {
    margin-right: 12px;

    &::v-deep path {
        fill: var(--system-mono-800);
    }
}
</style>
