<template>
    <div>
        <div class="row">
            <div class="col-3">
                <title-component
                    :current-category-id="currentCategoryId"
                    :categories="categories"
                />
            </div>
            <div class="col-9">
                <search-bar
                    @search-products="onSearchProducts"
                />
            </div>
        </div>

        <product-list
            :products="products"
            :loading="loading"
        />

        <div class="row">
            <legend-component :title="legend"/>
        </div>
    </div>
</template>


<script>
import LegendComponent from '@/components/legend';
import ProductList from '@/components/product-list';
import { fetchProducts } from '@/services/products-service';
import TitleComponent from '@/components/title';
import SearchBar from '@/components/sarch-bar';

export default {
    name: 'Catalog',
    components: {
        SearchBar,
        LegendComponent,
        ProductList,
        TitleComponent,
    },
    props: {
        currentCategoryId: {
            type: String,
            default: null,
        },
        categories: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            products: [],
            loading: false,
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
            searchTerm: null,
        };
    },
    watch: {
        currentCategoryId() {
            this.loadProducts();
        },
    },
    methods: {
        onSearchProducts({ term }) {
            this.searchTerm = term;
            this.loadProducts();
        },
        async loadProducts() {
            this.loading = true;
            let response = [];

            try {
                response = await fetchProducts(this.currentCategoryId, this.searchTerm);
                this.loading = false;
            } catch (e) {
                this.loading = false;
                return;
            }

            this.products = response.data['hydra:member'];
        },
    },
    async created() {
        this.loadProducts(null);
    },
};
</script>
