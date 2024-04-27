export function priceFormatter(value: number){
    const formattedPrice = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return formattedPrice
}