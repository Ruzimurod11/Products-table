import React, { Component } from 'react';
import SearchBar from './searchBar';
import ProductTable from './productTable';
import './filterableProductionTable.css';

class FilterableProductTable extends Component {
	constructor(props) {
		super(props);
		this.state = { filterText: "", inStockOnly: false }
	}

	handleFilterTextChange = (filterText) => {
		this.setState({
			filterText: filterText
		});
	}

	handleInStockChange = (inStockOnly) => {
		this.setState({
			inStockOnly: inStockOnly
		});
	}

	render() { 
		return ( 
			<div className='container'>
				<SearchBar filterText ={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilterTextChange={this.handleFilterTextChange} onInStockChange = {this.handleInStockChange} />
				<ProductTable products={this.props.products} filterText ={this.state.filterText} inStockOnly={this.state.inStockOnly} />
			</div>
		 );
	}
}
 
export default FilterableProductTable;
