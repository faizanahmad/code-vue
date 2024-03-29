import axios from 'axios';

/**
 *
 * @returns {Promise}
 */
export function fetchCategories() {
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                'hydra:member': window.categories,
            },
        });
    });
    // return axios.get('/api/categories');
    // return window.categories;
}
