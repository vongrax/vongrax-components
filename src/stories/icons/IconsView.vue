<template>
    <div class="icons-container">
        <div v-for="(component, componentName) in dynamicComponents" :key="componentName">
            <component :is="component" :size="size" :rotate="rotate" :fill="fill" />
        </div>
    </div>
</template>

<script>
import { IconSizes, Side } from "@/typespaces";

export default {
    props: {
        size: {
            type: String, // as PropType<IconSizes>
            default: IconSizes.L,
        },
        fill: {
            type: String,
            default: "var(--system-mono-900)",
        },
        rotate: {
            type: String, // Side,
            default: Side.LEFT,
        },
    },
    data() {
        return {
            dynamicComponents: {}, // Объект для хранения динамически зарегистрированных компонентов
        };
    },
    mounted() {
        // Импортируем все компоненты из папки components
        const requireComponent = require.context(
            "../../lib/icons/ui", // Путь к папке с компонентами
            false, // Не включать подпапки
            /^(?!.*IconWrapper.vue).*\.vue$/ // Регулярное выражение для выбора файлов за исключением IconWrapper
        );

        // Для каждого найденного компонента
        requireComponent.keys().forEach((fileName) => {
            // Получаем конфигурацию компонента
            const componentConfig = requireComponent(fileName);

            // Получаем имя компонента из имени файла
            const componentName = fileName
                .split("/")
                .pop()
                .replace(/\.\w+$/, "");

            // Динамически регистрируем компонент в объекте
            this.$set(this.dynamicComponents, componentName, componentConfig.default || componentConfig);
        });
    },
};
</script>
<style scoped lang="scss">
.icons-container {
    display: grid;
    grid-template-columns: repeat(10, 45px);
    gap: 8px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
</style>
