import axios from 'axios';

/**
 *
 * @param {String|null} categoryIri
 * @param {String|null} searchTerm
 * @returns {Promise}
 */
export function fetchProducts(categoryIri, searchTerm) {
    const params = {};
    if (categoryIri) {
        params.category = categoryIri;
    }

    if (searchTerm) {
        params.name = searchTerm;
    }

    return axios.get('/api/products', {
        params,
    });
}
