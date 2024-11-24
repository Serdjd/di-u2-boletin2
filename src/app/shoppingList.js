import { useState } from "react"
import { productos } from "./data"
export default function ShoppingList() {
    const [products,setProducts] = useState(productos)

    function remove(id) {
        setProducts(
            products
            .filter(
                product => product.id !== id
            )
        )
    }

    function save(producto, name) {
        setProducts(
            products.map(
                product => {
                    if(product.id === producto.id) {
                        return {...product,name: name, editable: false}
                    }
                    else {
                        return product
                    }
                } 
            )
        )
    }
    
    function add() {
        setProducts([
            ...products,
            {id: products.length, name: "", editable: true}
        ])
    }

    function edit(id) {
        setProducts(
            products.map(
                product => {
                    if(product.id === id) {
                        return {...product, editable: true}
                    }
                    else {
                        return product
                    }
                } 
            )
        )
    }

    return( 
        <div>
            <input type="text"></input>
            <button onClick={add}>Add</button>
            <br/>
            {
                products.map(
                    product => <Prodcut product={product} remove={remove} save={save} edit={edit} key={product.id}/>
                )
            }
        </div>
        
    )
}

function Prodcut({product,remove,save,edit}) {
    const [text,setText] = useState(product.name)
    function handleChange(e) {
        setText(e.target.value)
    }
    return(
        <>
            {
                product.editable
                ?
                    <>
                        <input type="text" value={text} onChange={handleChange}></input>
                        <button onClick={() => save(product,text)}>Guardar</button>
                    </>
                : 
                    <>
                        <label>{text}</label>
                        <button onClick={() => edit(product.id)}>Editar</button>
                    </>
            }

            <button onClick={() => remove(product.id)}>Eliminar</button>
            <br/>
        </>
        
    )
}