# react-use-fuzzy

[![NPM version](https://img.shields.io/npm/v/react-use-fuzzy.svg?style=flat-square)](https://npmjs.org/package/react-use-fuzzy)
[![Build Status](https://img.shields.io/travis/hellojoshuatonga/react-use-fuzzy/master.svg?style=flat-square)](https://travis-ci.org/hellojoshuatonga/react-use-fuzzy)
[![Coverage Status](https://img.shields.io/codecov/c/github/hellojoshuatonga/react-use-fuzzy/master.svg?style=flat-square)](https://codecov.io/gh/hellojoshuatonga/react-use-fuzzy/branch/master)

A react hook in Typescript for client side fuzzy search using [Fuse.js](https://github.com/krisk/fuse).

## 🚀  Install
```bash
$ npm install --save react-use-fuzzy
```

## 🎈 Usage
```typescript
import React, { useState } from 'react';
import { useFuzzy } from 'react-use-fuzzy';
import './App.css';

interface Product {
  id: number;
  name: string;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return <li>{product.name}</li>;
}

interface ProductsListProps {
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <ul>
    {
      products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))
    }
    </ul>
  )
}

const App: React.FC = () => {
  const productsData: Product[] = [
    {
      id: 1,
      name: 'T-shirt',
    },
    {
      id: 2,
      name: 'Short',
    },
  ]
  const [products, setProducts] = useState<Product[]>(productsData);

  const { result, keyword, search } = useFuzzy<Product>(products, {
    keys: ['name'],
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <input
          type='text'
          placeholder='Search products'
          value={keyword}
          onChange={(e) => search(e.target.value)}
          />
        <ProductsList products={result} />
      </header>
    </div>
  );
}

export default App;
```

## ⛓️ Peer Dependencies
- [React](https://www.npmjs.com/package/react) (16.x.x)
- [Fuse.js](https://www.npmjs.com/package/fuse.js/v/3.4.3) (3.x.x)

## 🎉 Acknowledgements
- Inspired by [react-use-fuse](https://github.com/MartinL83/react-use-fuse) Fuse.js wrapper.


## License
MIT ©
