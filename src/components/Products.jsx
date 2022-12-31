import React  ,{ useEffect , useState }from 'react';
import Product from './Product';

const Products = () => {

    const [products , setProducts] = useState();
    const [selectedProduct , setSelectedProduct] = useState()

    async function getProducts(){
        const response = await fetch("https://fakestoreapi.com/products")
        if(!response.ok){
            throw Error(
                "products could not found"
            )
        }else{
            return response.json()
            
        }
    }

    useEffect(() => {
        getProducts()
        .then(response => setProducts(response))
        .catch((error) => {
            console.log(error.message);
        })
    } , [])

    function getSelectedProduct(id){
        console.log(id);
    }
    


    return ( 
        <>
          {products && products.map((product) => (
           <Product 
                getSelectedProduct = {getSelectedProduct}
                product = {product} 
                key = {product.id}  />
        )
        ) }
        </>
     );
}
 
export default Products;