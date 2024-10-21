import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from "../../redux/actions/categoryActions"
import { ListGroup, ListGroupItem } from 'reactstrap';
import * as productsActions from "../../redux/actions/productActions"
class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
    }
    selectCategory=(category)=>{
        this.props.actions.changeCategory(category)
        this.props.actions.getProducts(category.id)
    }

    render() {
        return (
            <div>
                <h1>Category {this.props.categories.length} </h1>
               <div>
               <ListGroup>
                    {
                        this.props.categories.map(category => (
                            <ListGroupItem active={category.categoryName===this.props.currentCategory.categoryName} onClick={()=>this.selectCategory(category)} key={category.id}>
                                {category.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
               </div>
                <h5>Seçili kategori: {this.props.currentCategory.categoryName}</h5>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory:bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productsActions.getProducts, dispatch)

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);