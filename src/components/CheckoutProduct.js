import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket,removeFromBasket } from "../slices/basketSlice";
function CheckoutProduct({id,title,price,description,category,image,}){
   const dispatch = useDispatch();
   const addItemsToBasket = () =>{
    const product= {
        id,title,price,description,category,image,

    };

    // push item to redux
    dispatch(addToBasket(product));
   };


   const removeItemFromBasket = () => {
    // remove the item form redux
    dispatch (removeFromBasket({id}))

   }
   
    return(
        <div className="grid grid-cols-5">
            <Image src={image} height= {200} width={200} object-fit='contain'/>
        {/* middle */}
        <div className="col-span-3 mx-5">
            <p>{title}</p>
            
            <p className="text-xs my-2 line-clamp-3 ">{description}</p>
            <Currency quantity={price} currency='INR'/>


        </div>
       <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button " onClick={addItemsToBasket}>Add to Basket</button>
        <button className="button " onClick={removeItemFromBasket}>Remove from Basket</button>
       </div>
        </div>
    )
}
export default CheckoutProduct