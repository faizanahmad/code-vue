<template>
    <div class="col-xs-12 col-6 mb-2 pb-2">
        <div :class="$style['product-box']">
            <div :class="$style.image">
                <a :href="productUrl">
                    <img
                        :alt="product.name"
                        :src="product.image"
                        class="d-block mb-2"
                    >
                </a>
            </div>

            <h3 class="font-weight-bold mb-2 px-2">
                <a :href="productUrl">{{ product.name }}</a>
            </h3>

            <div class="p-2 my-3 d-md-flex justify-content-between">
                <p class="p-0 d-inline">
                    <strong>${{ price }}</strong>
                </p>
                <button
                    class="btn btn-info btn-sm"
                    @click="gotToProduct()"
                >View Product</button>
            </div>
        </div>
    </div>
</template>

<script>
import formatPrice from '@/helpers/format-price';

export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    computed: {
        /**
         * Returns a formatted price for the product
         * @returns {string}
         */
        price() {
            return formatPrice(this.product.price);
        },
        productUrl() {
            return `/product/${this.product.id}`;
        },
    },
    methods: {
        gotToProduct() {
            window.location = this.productUrl;
        },
    },
};
</script>

<style lang="scss" module>
@import '~styles/components/light-component.scss';

.product-box {
    border: 1px solid $light-component-border;
    box-shadow: 0 0 7px 4px #efefee;
    border-radius: 5px;
}
.image {
    img {
        width: 100%;
        height: auto;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    h3 {
        font-size: 1.2rem;
    }
}

</style>
