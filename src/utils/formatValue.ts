const formatValue = (value: number | Date): string => {
  if (typeof value === 'number') {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  const date = new Date(value);
  return Intl.DateTimeFormat('pt-BR').format(date);
};
export default formatValue;
