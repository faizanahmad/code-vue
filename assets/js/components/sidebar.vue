<template>
    <div
        :class="[$style.sidebar, 'p-3 mb-5']"
        :style="{ width: collapsed?'79px':'auto'}"
    >
        <h5 class="text-center">
            Categories
        </h5>
        <ul
            class="nav flex-column mb4"
        >
            <li class="nav-item">
                <a
                    class="nav-link"
                    href="/"
                >All Products</a>
            </li>

            <li class="nav-item" v-for="(category,index) in categories">
                <a
                    class="nav-link"
                    :href="category.name"
                    :key="index"
                >{{ category.name }}</a>
            </li>

        </ul>
        <div class="d-flex justify-content-end">
            <button
                class="btn btn-secondary btn-sm"
                @click="toggleCollapsed"
                v-text="collapsed ? '>>': '<< collapse' "
            >

            </button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    methods: {
        toggleCollapsed() {
            this.collapsed = !this.collapsed;
        },
    },
    data() {
        return {
            collapsed: false,
            categories: [
                {
                    name: 'Dot matrix',
                    link: '#',
                },
                {
                    name: 'Zip Drives',
                    link: '#',
                },
            ],
        };
    },
};
</script>

<style lang="scss" module>
@import "~styles/components/light-component";

.sidebar {
    @include light-component;

    ul {
        li a:hover {
            background: $blue-component-link-hover;
            //background: pink;
        }
    }
}
</style>
