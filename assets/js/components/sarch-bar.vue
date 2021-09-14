<template>
    <div class="input-group">
        <input
            v-model="searchTerm"
            class="form-control"
            placeholder="Search products"
            type="search"
            @input="onInput"
        >
        <div>
            <button
                v-show="searchTerm !== ''"
                @click="clearSearch"
                class="btn btn-secondary"
            >x</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchTerm: '',
            searchTimeout: null,
        };
    },
    methods: {
        clearSearch() {
            this.searchTerm = '';
            this.$emit('search-products', { term: this.searchTerm });
        },
        onInput() {
            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }

            this.searchTimeout = setTimeout(() => {
                this.$emit('search-products', { term: this.searchTerm });
            }, 300);
        },
    },
};
</script>

<style>

</style>
