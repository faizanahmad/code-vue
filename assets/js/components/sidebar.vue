<template>
    <div
        :class=" {
            [$style.component]: true,
            [$style.collapsed]: collapsed,
            'p-3': true,
            'mb-5': true,
        }"
        :style="{ width: collapsed?'79px':'auto'}"
    >
        <div v-show="!collapsed">
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

                <li
                    v-for="category in categories"
                    :key="category['@id']"
                    class="nav-item"
                >
                    <a
                        class="nav-link"
                        :href="`/category/${category.id}/`"
                    >{{ category.name }}</a>
                </li>

            </ul>
        </div>
        <div class="d-flex justify-content-end">
            <button
                class="btn btn-secondary btn-sm"
                @click="$emit('toggle-collapsed')"
                v-text="collapsed ? '>>': '<< collapse' "
            >

            </button>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Sidebar',
    props: {
        collapsed: {
            type: Boolean,
            required: true,
        },
    },
    computed: {
        componentClass() {
            const classes = [this.$style.component, 'p-3', 'mb-5'];
            if (this.collapsed) {
                classes.push(this.$style.collapsed);
            }
            return classes;
        },
    },
    data() {
        return {
            categories: [],
        };
    },
    async created() {
        const categories = await axios.get('/api/categories');
        this.categories = categories.data['hydra:member'];
    },
};
</script>

<style lang="scss" module>
@import "~styles/components/light-component";

.component {
    @include light-component;

    &.collapsed {
        width: 70px;
    }
    ul {
        li a:hover {
            background: $blue-component-link-hover;
            //background: pink;
        }
    }
}
</style>
