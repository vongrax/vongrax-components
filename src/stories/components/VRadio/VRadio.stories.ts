// Core
import { CreateElement } from "vue";
import { ArgTypes } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

// Components
import { VRadio } from "@/lib/components";

// Styles
import "./VRadio.stories.scss";

export default {
    title: "Components/VRadio",
    component: VRadio,
    tags: ["autodocs"],
    render: (args: CreateElement, { argTypes }: ArgTypes) => ({
        props: Object.keys(argTypes).filter((key) => key !== "value"),
        components: { VRadio },
        data() {
            return {
                value: "",
                data: [
                    {
                        id: "1",
                        label: "label 1",
                    },
                    {
                        id: "2",
                        label: "label 2",
                    },
                    {
                        id: "3",
                        label: "label 3",
                    },
                ],
            };
        },
        template: `
            <div>
                <div v-for="item in data" :key="item.id" class="v-radio-row">
                    <VRadio
                        v-bind="$props"
                        v-model="value"
                        :value="item.id"
                        :label="item.label"
                        @change="action"
                    />
                </div>

            </div>
        `,
        methods: { action: action("clicked") },
    }),
};

export const Radio = {
    args: {},
};
