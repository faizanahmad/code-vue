<template>
    <div>
        this is product page
    </div>
</template>

<script>
export default {
    name: 'productShow',
    props: {
        productId: {
            type: String,
            required: true,
        },
    },
};
</script>
