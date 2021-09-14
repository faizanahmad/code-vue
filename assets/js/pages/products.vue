<template>
    <div class="container-fluid">
        <div class="row">
            <aside :class="asideClass">
                <sidebar
                    :collapsed="sidebarCollapsed"
                    :current-category-id="currentCategoryId"
                    @toggle-collapsed="toggleSidebarCollapsed"
                    :categories="categories"
                />
            </aside>
            <div :class="contentClass">
                <catalog
                    :current-category-id="currentCategoryId"
                    :categories="categories"
                />
            </div>
        </div>
    </div>
</template>


<script>

import Catalog from '@/components/catalog';
import Sidebar from '@/components/sidebar';
import { getCurrectCategoryId } from '@/services/page-context';
import { fetchCategories } from '@/services/categories-service';

export default {
    name: 'Products',
    components: {
        Catalog,
        Sidebar,
    },
    computed: {
        asideClass() {
            return this.sidebarCollapsed ? 'aside-collapsed' : 'col-xs-12 col-3';
        },
        contentClass() {
            return this.sidebarCollapsed ? 'col-xs-12 col-11' : 'col-xs-12 col-9';
        },
        currentCategoryId() {
            return getCurrectCategoryId();
        },
    },
    methods: {
        toggleSidebarCollapsed() {
            this.sidebarCollapsed = !this.sidebarCollapsed;
        },
    },
    data() {
        return {
            sidebarCollapsed: false,
            categories: [],
        };
    },
    async created() {
        const categories = await fetchCategories();
        this.categories = categories.data['hydra:member'];
    },
};

</script>
