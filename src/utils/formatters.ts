// formatPrice('15.30', 'DB') => 1530
// formatPrice('15.30') => R$ 15,30
export const formatPriceIntl = (amount: number, currency = 'BRL') => {
  switch (currency) {
    case 'toI':
      return Number(amount.toFixed(2).replace('.', ''))
    case 'toF':
      return Number(amount.toFixed(2))
    default:
      return Intl.NumberFormat('pt-br', { style: 'currency', currency }).format(value) // .replace(/^(\D+)/, '$1 ') // add space
  }
}

export const formatDateIntl = (date: Date | string) =>
  Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  }).format(new Date(date))

export const formatPrice = (amount: number, currency = 'BRL') =>
  Number(amount).toLocaleString('pr-BR', {
    style: 'currency',
    currency,
  })

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
type OptionsType = {
  weekday: 'long' | 'short' | 'narrow' | undefined
  year: 'numeric' | '2-digit' | undefined
  month: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit' | undefined
  day: 'numeric' | '2-digit' | undefined
}

const defaultOptions: OptionsType = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export const formatDate = (
  date: Date | string,
  options = defaultOptions,
  language = 'pt-BR'
) => {
  const newDate = new Date(date)
  return newDate.toLocaleDateString(language, options)
}
