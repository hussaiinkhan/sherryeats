import React, {useState} from 'react'
import {data} from '../data/data.js'
function Menu() {

    const [food, setFood] = useState(data)
    
    // Filter Type Function
    const filterType=(category)=>{
        setFood(
            data.filter((item)=>{
                return item.category === category
            })
           )
    }

     // Filter price Function
     const filterPrice=(price)=>{
        setFood(
            data.filter((item)=>{
                return item.price===price
            })
        )
    }
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12'>
        <h1 className='font-bold text-orange-500 text-center text-4xl'>Top Rated Menu Items</h1>
        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=>setFood(data)} className='border-orange-500 text-orange-500 m-1 hover:bg-orange-500 hover:text-white'>All</button>
                    <button onClick={()=>filterType('burger')} className='border-orange-500 text-orange-500 m-1 hover:bg-orange-500 hover:text-white'>Burger</button>
                    <button onClick={()=>filterType('pizza')}  className='border-orange-500 text-orange-500 m-1 hover:bg-orange-500 hover:text-white'>Pizza</button>
                    <button onClick={()=>filterType('chicken')}  className='border-orange-500 text-orange-500 m-1 hover:bg-orange-500 hover:text-white'>Chicken</button>
                    <button onClick={()=>filterType('salad')}  className='border-orange-500 text-orange-500 m-1 hover:bg-orange-500 hover:text-white'>Salad</button>
                </div>
            </div>
              {/* Filter Price */}
              <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={()=>filterPrice('$')} className='border-orange-500 text-orange-500 m-1 hover:bg-orange-500 hover:text-white'>$</button>
                    <button onClick={()=>filterPrice('$$')} className='border-orange-500 text-orange-500 m-1 hover:bg-orange-500 hover:text-white'>$$</button>
                    <button onClick={()=>filterPrice('$$$')} className='border-orange-500 text-orange-500 m-1 hover:bg-orange-500 hover:text-white'>$$$</button>
                    <button onClick={()=>filterPrice('$$$$')} className='border-orange-500 text-orange-500 m-1 hover:bg-orange-500 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>
        {/* Display Foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {food.map((item, index)=>(
                <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                    <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name}/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-orange-500 text-white rounded-full px-2 py-1'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Menu