

import React, { PureComponent } from 'react';


class SearchBar extends PureComponent {
	handleFilterTextChange = (e) => {
		this.props.onFilterTextChange(e.target.value);
	}

	handleInStockChange = (e) => {
		this.props.onInStockChange(e.target.checked);
	}

	render() { 
		return ( 
			<div>
				<input type="text" placeholder="Search..." value={this.props.inputText} onChange={this.handleFilterTextChange} />
				<p>
					<input type="checkbox" id="onlyInStock" checked={this.props.inStockOnly} name="onlyInStock"  onChange={this.handleInStockChange} />
					<label htmlFor="onlyInStock">Products in stock</label>
				</p>
			</div>
		);
	}
}

export default SearchBar;
