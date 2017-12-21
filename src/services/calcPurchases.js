const calcPurchases = ({ purchases }) => {
  if (purchases.length === 0) {
    return '0';
  }
  if (purchases.length === 1) {
    return Number(purchases[0].value).toFixed(2).toString();
  }
  const values = purchases.map(item => item.value);
  const result = values.reduce((a, b) => a + b);
  return Number(result).toFixed(2).toString();
};

export default calcPurchases;
