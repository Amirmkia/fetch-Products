import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Product = ({product , getSelectedProduct}) => {
    return ( 
        <>
             <Card key = {product.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {product.image} />
                <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Button
                    onClick = { () => getSelectedProduct(product.id) } 
                    variant="primary">See this product</Button>
                </Card.Body>
            </Card>
        </>
     );
}
 
export default Product;