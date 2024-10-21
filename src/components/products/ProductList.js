import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Table, Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as productsActions from "../../redux/actions/productActions"
import * as cartActions from "../../redux/actions/cartActions"
import alertify from 'alertifyjs';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts();
    }
    addToCart = (product) =>{
        this.props.actions.addToCart({quantity:1,product})
        alertify.success(product.productName + "sepete eklendi")
    }
    render() {
        return (
            <div>
                <h3 >ProductList <Badge color='success'>{this.props.currentCategory.categoryName}</Badge>  </h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quntity Per Unit</th>
                            <th>Unit in Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => (
                                <tr>
                                    <th scope="row">{product.id}</th>
                                    <td><Link to={"/saveproduct/" + product.id} > {product.productName}</Link></td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.quantityPerUnit}</td>

                                    <td>{product.unitsInStock}</td>
                                    <td>
                                        <Button color=' btn-outline-success' onClick={()=>this.addToCart(product)}>
                                            Sepete ekle
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>




        );
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productsListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productsActions.getProducts, dispatch),
            addToCart: bindActionCreators(cartActions.addToCart,dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);