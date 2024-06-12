import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './filterableProductTable';

const PRODUCTS = [
	{ price: '$3.10', stocked: true, name: 'Peach' },
	{ price: '3.40', stocked: true, name: 'Cherry' },
	{ price: '$1.80', stocked: false, name: 'Pear' },
	{ price: '$2.00', stocked: true, name: 'Milk' },
	{ price: '$1.50', stocked: false, name: 'Apple juice' },
	{ price: '$0.30', stocked: true, name: 'Mineral water' }
];

ReactDOM.render( <FilterableProductTable products={PRODUCTS} />, document.getElementById('root') );
