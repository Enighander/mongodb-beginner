import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [stock, setStock] = useState("");
const navigate = useNavigate();

const saveProduct = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://127.0.0.1:5000/products", {
            name,
            price,
            stock
        });
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};

  return (
    <div className="columns">
        <div className="column is-half mt-5">
            <form onSubmit={saveProduct}>
            <div className="field">
                <label className="label">Product Name</label>
                <div className="control">
                 <input 
                    type="text" 
                    className="input" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Product Name" 
                 />
                </div>
            </div>
            <div className="field">
                <label className="label">Price</label>
                <div className="control">
                <input        
                    type="number" 
                    className="input" 
                    value={price}
                    onChange={(e) => setPrice(+e.target.value)} 
                    placeholder="Price" 
                 />
                </div>
            </div>
            <div className="field">
                <label className="label">Stock</label>
                <div className="control">
                <input        
                    type="number" 
                    className="input" 
                    value={stock}
                    onChange={(e) => setStock(+e.target.value)} 
                    placeholder="Stock" 
                 />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button type="submit" className="button is-success">Save</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default AddProduct