import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_SHs0EZdruVVurU5nXPUWqfEzjscEsn4Kvya8CICB');

convertCurrency("INR" , "USD" , 3);

export async function convertCurrency(fromcurrency, tocurrency, units)
{
    const res = await freecurrencyapi.latest({
        base_currency: fromcurrency,
        currencies: tocurrency
    });

    const multiplier = res.data[tocurrency];

  return multiplier *units;
  


}


