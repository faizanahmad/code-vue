export default (price) => {
    return (price / 100).toLocaleString('en-Us', { minimumFractionDigits: 2 });
};
