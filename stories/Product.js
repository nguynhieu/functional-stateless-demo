import React from 'react';
import Product from '../src/components/Product.js';
import { storiesOf } from '@storybook/react';

storiesOf('Product', module)
  .add('Product', () => (
    <Product 
      description={"This is math book"} 
      title={"Math"} 
      coverImg={"https://marketplace.canva.com/EADaiDo2aSo/1/0/251w/canva-yellow-lemon-children-book-cover-Fb1rBcVIu2U.jpg"}>
    </Product>
  ));