function storeProducts(stockedProducts, orderedProducts) {
    const storeStock = {};
    for (let i = 0; i < stockedProducts.length; i += 2) {
        const stockName = stockedProducts[i];
        const stockAmount = parseInt(stockedProducts[i + 1], 10);

        storeStock[stockName] = stockAmount;
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        const stockName = orderedProducts[i];
        const stockAmount = parseInt(orderedProducts[i + 1], 10);

        if (storeStock[stockName] !== undefined) {
            storeStock[stockName] += stockAmount;
        }
        else {
            storeStock[stockName] = stockAmount;
        }
    }

    for (const [name, amount] of Object.entries(storeStock)) {
        console.log(`${name} -> ${amount}`);
    }
}

// example input:
storeProducts(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], 
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
storeProducts(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);