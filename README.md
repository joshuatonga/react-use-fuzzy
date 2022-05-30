# react-use-fuzzy

A react hook in Typescript for client side fuzzy search using [Fuse.js](https://github.com/krisk/fuse).

## 🚀  Install
```bash
$ npm install --save @reaviz/react-use-fuzzy
```

## 🎈 Usage
```typescript
import React, { useState } from 'react';
import { useFuzzy } from '@reaviz/react-use-fuzzy';


const productsData: Product[] = [
  {
    id: 1,
    name: 'T-shirt',
  },
  {
    id: 2,
    name: 'Short',
  },
];

export const App: FC = () => {
  const { result, keyword, search } = useFuzzy<Product>(productsData, {
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
        <pre>
          {JSON.stringify(result, null, 2)}
        </pre>
      </header>
    </div>
  );
};
```
