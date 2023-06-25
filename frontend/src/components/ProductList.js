import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"


const ProductList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProduct(response.data);
  };

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        const newProducts = products.filter((product) => product._id !== id);
        setProduct(newProducts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  return (
    <div className="columns">
      <div className="column is-half">
          <Link to="add" className="button is-success mt-5">Add New</Link>
        <table className="table is-striped is-fullwidth mt-5">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product,index) => (
            <tr key= {product._id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <Link to={`edit/${product._id}`}className="button is-info is-small">Edit </Link>
                <button onClick ={() => deleteProduct(product._id)} className="button is-danger is-small">Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
