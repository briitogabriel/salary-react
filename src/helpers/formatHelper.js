const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatValue(value) {
  return formatter.format(value);
}

export { formatValue };
