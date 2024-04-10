<template>
    <ValidationObserver ref="form" tag="div" @reset.prevent="reset">
        <form :ref="formName" class="v-form" @submit.prevent="onSubmit">
            <slot />
        </form>
    </ValidationObserver>
</template>

<script>
import { ValidationObserver } from "vee-validate";

export default {
    name: "VForm",
    components: {
        ValidationObserver,
    },
    emits: ["submit", "submitFailed"],
    props: {
        formName: {
            type: String,
            default: "VForm",
        },
    },
    methods: {
        onSubmit(event) {
            this.$refs.form?.validate().then((success) => {
                if (!success) {
                    return;
                }

                const formElements = this.$refs[this.formName];
                const formData = new FormData(event.target);

                // Если в форме есть чекбоксы то вытаскиваем их и довляем в форм дату
                if (formElements) {
                    formElements.querySelectorAll("input[type=checkbox]").forEach((item) => {
                        formData.append(item.name, item.value);
                    });
                }

                const entriesData = Object.fromEntries(formData);
                // т.к все значения в formDatа строковые д используется преобразование булевых значений
                const data = Object.fromEntries(
                    Object.entries(entriesData).map(([key, value]) => {
                        if (value === "false") {
                            return [key, false];
                        }
                        if (value === "true") {
                            return [key, true];
                        }
                        return [key, value];
                    })
                );

                this.$emit("submit", data, event);
            });
            if (this.$refs.form?.errors) {
                this.$emit("submitFailed", this.$refs.form.errors);
            }
        },
        reset() {
            requestAnimationFrame(() => {
                this.$refs.form.reset();
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.v-form {
    height: 100%;
}
</style>
