import React, { Component } from 'react';
import { connect } from 'react-redux';
import {

    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, NavItem, NavLink,
    Badge,
    Button
} from 'reactstrap';
import * as cartActions from "../../redux/actions/cartActions"
import alertify from 'alertifyjs';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class CartSummary extends Component {
    renderEmpty() {
        return (
            <NavItem>
                <NavLink >Sepet Boş</NavLink>
            </NavItem>
        )
    }
    removeFromCart = (product) =>{
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName + "sepete silindi")
    }
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Sepetiniz
                </DropdownToggle>
                <DropdownMenu right>

                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id} > 
                            <Badge>
                                <Button color='danger' onClick={()=>this.removeFromCart(cartItem.product)}>X</Button>
                            </Badge>
                            {cartItem.product.productName}
                            <Badge color='success'>{cartItem.quantity}</Badge>
                             </DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem><Link to={"/cart"} >Sepete Git</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
           
            removeFromCart: bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);