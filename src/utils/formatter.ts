export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("pt-BR");
};

export const formatPrice = (price: number) => {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
