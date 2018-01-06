import React from 'react';

class AddOrder extends model {
	constructor(){
		super();
		this.state = {
			newOrder:{}
		}
	}
	static defaultProps = {
		categories: ['dark color 1', 'green-color', 'blue color']
	}
	handleSubmit(){
		if(this.refs.order-list.value === ''){
			alert('you need pick your order-list');
		} else {
			this.setState({newOrder: {
				order-list: this.refs.order-list.value,
				category: this.refs.category.value
			}}, function(){
				console.log(this.state);
			});
		}

		e.preventDefault();

	}
	render() {
		let categoryOptions = this.props.categories.map(category => {
			return <option key={category} value={'category'}>{category}</option>
		});
		return (
			<div>
				<h3> Order Products </h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div>
					  <label> order-list</label><br />
					  <input type="text" ref="order-list" />
					</div
					<div>
					  <label> Renorgy 600-watt </label> <br />
					  <select ref="category">
					  	categoryOptions{}
					</div>
					<div>
					  <label> Renorgy 400-watt </label> <br />
					  <select ref="category">
					  	categoryOptions{}
					</div>
					<div>
					  <label> Renorgy 800-watt </label> <br />
					  <select ref="category">
					  	categoryOptions{}
					</div>
					<input type="submit" value="Submit" />
					
				</form>
			</div>

			)
	}
}