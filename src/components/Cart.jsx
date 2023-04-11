import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import FoodItem from "./FoodItem";
import {clearCart} from "../utils/cartSlice";

function Cart() {
  const {items} = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const handleClearCart = ()=>{
    dispatch(clearCart());
  }

  return (
    <div className="p-3">
      <h1 className="font-bold text-xl">Cart</h1>
      <button className="bg-green-100 p-2 m-5" onClick={()=>handleClearCart()}>Clear Cart</button>
      <div className="flex flex-wrap">
      {items?.length>0 && items.map((item)=>{
      return <FoodItem key={item.id} {...item} />
      })}
      </div>
    </div>

  )
}

export default Cart;