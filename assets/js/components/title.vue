<template>
    <h1 :style="$style.component">{{ categoryName }}</h1>
</template>

<script>
export default {
    name: 'Title',
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
    computed: {
        categoryName() {
            if (this.currentCategoryId === null) {
                return 'All Products';
            }

            const category = this.categories.find((cat) => (cat['@id'] === this.currentCategoryId));
            return category ? category.name : '';
        },
    },
};
</script>

<style lang="scss" module>
    .component  {
        font-size: 16rem;
    }
</style>
