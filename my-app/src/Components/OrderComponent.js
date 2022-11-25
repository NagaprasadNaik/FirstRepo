import React from 'react'
// import './App.css'

class OrderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: '',
            address: ''
        }
    }
    orderInfoChange = val => {
        this.setState({ quantity: val })
    }

    addressChanged = val => {
        this.setState({ address: val })
    }

    render() {
        return (
            <>
                <h1>Product order screen...</h1>
                <ProductComponent quantity={this.state.quantity} onQuantityChange={this.orderInfoChange} /><br/>
                <AddressComponet address={this.state.address} addressChanged={this.addressChanged} /><br/>
                <SummaryComponet quantity={this.state.quantity} address={this.state.address} addressChanged={this.addressChanged} onQuantityChange={this.orderInfoChange} /><br/>
            </>
        )
    }
}

class ProductComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = e =>{
        this.props.onQuantityChange(e.target.value)
    }

    render() {
        return (
            <>
                <div style={{border: '2px solid red'}}>
                    <p>
                        <label>Product Name:
                        <select>
                            <option value="Product-1">Product-1</option>
                            <option value="Product-2">Product-2</option>
                            <option value="Product-3">Product-3</option>
                        </select></label>
                    </p>
                    <label>Quantity :</label>
                    <input type="text" value={this.props.quantity} onChange={this.handleChange} /> 
                </div>
            </>
        )
    }
}

class AddressComponet extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange = e =>{
        this.props.addressChanged(e.target.value)
    }

    render() {
        return (
            <>
                <div style={{border: '2px solid red'}}>
                    <label>Adderss :
                    <input type="text" value={this.props.address} onChange={this.handleChange} /></label> 
                </div>
            </>
        )
    }
}

class SummaryComponet extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = e =>{
        this.props.onQuantityChange(e.target.value)
    }

    render() {
        return (
            <>
                <div style={{border: '2px solid red'}}>
                    <h2>Summary information....</h2>
                    <label>Product name: Product-1</label><br />
                    <label>Quantity :
                    <input type="text" value={this.props.quantity} onChange={this.handleChange} /></label><br/> 
                    <label>Adderss : {this.props.address}</label>
                </div>
            </>
        )
    }
}

export default OrderComponent;