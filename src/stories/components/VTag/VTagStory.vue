<template>
    <div class="tag-container">
        <VTag
            v-for="tag in data"
            :key="tag.id"
            :tag="tag"
            :size="size"
            :icon-position="iconPosition"
            :active="chosenTag.includes(tag.id)"
            @click="selectTag(tag)"
        />
    </div>
</template>

<script>
import { VTag } from "@/lib/components";
import { Sizes, Side } from "@/typespaces";

export default {
    name: "VTagStory",
    components: { VTag },
    emits: ["click"],
    props: {
        data: {
            type: Array,
        },
        size: {
            type: String,
            default: Sizes.XS,
        },
        iconPosition: {
            type: String,
            default: Side.RIGHT,
        },
    },
    data() {
        return {
            chosenTag: [],
            Sizes,
        };
    },
    methods: {
        selectTag(tag) {
            this.$emit("click", tag);
            if (this.chosenTag.includes(tag.id)) {
                this.chosenTag.splice(this.chosenTag.indexOf(tag.id), 1);
            } else {
                this.chosenTag.push(tag.id);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.tag-container {
    width: fit-content;
    display: flex;
    gap: 8px;
}
</style>
