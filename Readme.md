
```markdown

# Sky-NPM

Sky-NPM is a versatile npm package designed to simplify currency conversion tasks within your JavaScript projects. With Sky-NPM, you can seamlessly integrate currency conversion functionality into your applications, making it easier to work with multiple currencies.

## Installation

To install Sky-NPM, simply use npm:

```bash
npm install sky-npm
```

## Usage

Here's a quick example of how you can use Sky-NPM in your project:

```javascript
import { convertCurrency } from "sky-npm";

// Convert 5 USD to INR
convertCurrency("USD", "INR", 5)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## Documentation

### `convertCurrency(fromCurrency, toCurrency, amount)`

Converts an amount from one currency to another.

- `fromCurrency`: The currency code to convert from.
- `toCurrency`: The currency code to convert to.
- `amount`: The amount to convert.

Returns a Promise that resolves to the converted amount.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/21-aakash/sky-npm.git).

## License

This project is licensed under the Apache License 2.0 - see the [Apache-2.0](LICENSE) file for details.

## Acknowledgements

Sky-NPM was developed to simplify currency conversion tasks and make working with multiple currencies more efficient for developers.

---

Start converting currencies with ease using Sky-NPM! If you have any questions or need further assistance, feel free to reach out.
```

