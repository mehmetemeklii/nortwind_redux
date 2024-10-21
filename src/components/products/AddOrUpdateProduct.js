import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getCategories } from "../../redux/actions/categoryActions"
import { saveProduct } from "../../redux/actions/productActions"
import ProductDetail from "./ProductDetail"
function AddOrUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props

}) {
    const [product, setProduct] = useState({ ...props.product })
    const [errors,setErrors] = useState({})
    useEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }
        setProduct({ ...props.product })
    }, [props.product])

    function handleChange(event) {
        const { name, value } = event.target;
       
        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }))
       validate(name,value);
        
    }
    function validate(name,value){
                
        errorCode(name,value,"Product Name boş olamaz","productName","")
     //   errorCode(name,value,"Kategori boş olamaz","categoryId","")
       // errorCode(name,value,"Unit Price boş olamaz","unitPrice","")
       // errorCode(name,value,"Quantity Per Unit boş olamaz","quantityPerUnit","")
       // errorCode(name,value,"Units In Stock boş olamaz","unitsInStock","")
    }

    function errorCode(name,value,text,nameCompare,valueCompare,list){
       // list.map(item=>({}))
        if (name===nameCompare && value===valueCompare){
            setErrors(previouesErrors=>({...previouesErrors,[name]:text}))
        }else{
            setErrors(previouesErrors=>({...previouesErrors,[name]:""}))
        }
    }
    function handleSave(event) {
        event.preventDefault();
        saveProduct(product).then(() => {
            history.push("/")
            
        })

    }
    
   return(
        <ProductDetail product={product} categories={categories} onChange={handleChange} onSave={handleSave}  errors = { errors}/>
    )
}


export function getProductById(products, productId) {
    let product = products.find(product => product.id == productId) || null;
    return product;
}

function mapStateToProps(state, ownProps) {
    const productId = ownProps.match.params.productId
    const product = productId && state.productsListReducer.length > 0
    
        ? getProductById(state.productsListReducer, productId)
        : {}
    return {
        product,
        products: state.productsListReducer,
        categories: state.categoryListReducer
    }
}

const mapDispatchToProps = { getCategories, saveProduct }


export default connect(mapStateToProps,mapDispatchToProps )(AddOrUpdateProduct);