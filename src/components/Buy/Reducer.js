import React from 'react'
import { useReducer } from 'react';

const InStock = () => {


const initialState = {
  additionalPrice: 0,
  car:[
    {
      Brand: 'Mazda',
      price: 7000,
      Image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg',
      features: [],
    },
    {
      Brand: 'Toyota',
      price: 3500,
      Image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg',
      features: [],
    },
    {
      Brand: 'BMW',
      price: 10000,
      Image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg',
      features: [],
    },
    {
      Brand: 'Honda',
      price: 2000,
      Image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg',
      features: [],
    },
  ],

  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

const reducer = (state, action) => {
  switch(action.type){
    case 'Remove_Item':
      return{
        ...state,
        additionalPrice: state.additionalPrice - action.item.price,
        car: { ...state.car, features: state.car.features.filter((x) => x.id !== action.item.id)},
        store: [...state.store, action.item]


      }
    case 'Add_Item':
      return{
        ...state,
        additionalPrice: state.additionalPrice + action.item.price,
        car: { ...state.car, features: [...state.car.features, action.item] },
        store: state.store.filter((x) => x.id !== action.item.id)

      }
      default:
        return state;
  }
}



const [state, dispatch] = useReducer(state, initialState)

const Remove_Feature = (item) => {
  dispatch({type: 'Remove_Item', item})

}
const Add_Feature = (item) =>{
  dispatch({type:'Add_Item', item})
}



  return (
    <div>
    <div className="container">
      <div className="box">
        <h1>{state.car.name}</h1>
        <figure className="image">
          <img src={state.car.image}  alt ='/'/>
        </figure>
        <h2>{state.car.price}</h2>
      </div>

      <div className="extras">
        <h1>Extra items Bought</h1>
        {state.car.features.length ? 
            (
              <ol type="1">
                {state.car.features.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => Remove_Feature(item)}
                      className="button">X
                    </button>
                    {item.name}
                  </li>
                ))}
              </ol>
            ) : <p>You can purchase items from the store.</p>
          }
      </div>
    </div>
    


    <div className="box">
          <div className="content">
            <h4>Store</h4>
            {state.store.length ? 
            (
            <ol type="1">
              {state.store.map((item) => (
                <li key={item.id}>\
                  <button
                    onClick={() => Add_Feature  (item)}
                    className="button">Buy
                  </button>
                  {item.name}
                </li>
              ))}
            </ol>
            ) : <p>No features</p>
          }
          </div>

          <div className="content">
            <h4>
              Total Amount: ${state.car.price + state.additionalPrice}
            </h4>
          </div>
    </div>




    </div>
  )
}

export default InStock