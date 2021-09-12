import axios from 'axios';

/**
 *
 * @param {String|null} CategoryIri
 * @returns {Promise}
 */
export function fetchProducts(CategoryIri) {
    const params = {};
    if (CategoryIri) {
        params.category = CategoryIri;
    }

    return axios.get('/api/products', {
        params,
    });
}
