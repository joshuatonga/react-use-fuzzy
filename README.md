# react-use-fuzzy

[![NPM version](https://img.shields.io/npm/v/react-use-fuzzy.svg?style=flat-square)](https://npmjs.org/package/react-use-fuzzy)
[![Build Status](https://img.shields.io/travis/hellojoshuatonga/react-use-fuzzy/master.svg?style=flat-square)](https://travis-ci.org/hellojoshuatonga/react-use-fuzzy)
[![Coverage Status](https://img.shields.io/codecov/c/github/hellojoshuatonga/react-use-fuzzy/master.svg?style=flat-square)](https://codecov.io/gh/hellojoshuatonga/react-use-fuzzy/branch/master)

A react hook in Typescript for client side fuzzy search using [Fuse.js](https://github.com/krisk/fuse).

## Install
```bash
$ npm install --save react-use-fuzzy
```

## Usage
```typescript
import { useFuzzy } from 'react-use-fuzzy';
// You can also use the alias useSearch if you want

interface Product {
  id: number;
  name: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'T-shirt',
  }
  {
    id: 2,
    name: 'Short',
  }
];

const { result, keyword, search, resetSearch } = useFuzzy<Product>(products, { keywords: ['name'] });
```

## License
MIT ©
