import Image from "next/image";
import { useState } from "react"
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";


function Product({id,title,price,description,category,image}) {
    
    const [rating] = useState(5 );
    return(

        <div className=" relative flex flex-col m-5 bg-white z-30 p-10 "> 
            <p className=" absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            {/* <img src={image} /> */}
            <div className="justify-center flex flex-col items-center my-auto">

            <Image src={image} height={200} width={200} object-fit="contain" />
            </div>

           
             <h4 className=" my-3">{title}</h4>
             <div className="flex">
                {/* {Array (rating) */}
                     {/* .fill()
                     .map((_,i) =>( */}
                        {/* <StarIcon className=" h-5"/> */}

                 {/* ))} */}
            </div>

                <p className=" text-xs my-2 line-clamp-2">{description}</p>

                <div className=" mb-5">

                <Currency quantity={price} currency = "INR" />

                </div>

                <button className=" mt-auto button ">Add to Basket</button>

        </div>
    )

}

export default Product