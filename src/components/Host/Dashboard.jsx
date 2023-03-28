import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getVansListData } from '../../redux-store/reducers/vansReducer';
import Loading from '../Loading';

function Dashboard() {

  const dispatch = useDispatch()
  const vansListData = useSelector((state) => state.vansData.vansList)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/host/vans')
      .then(response => response.json())
      .then(data => {
        dispatch(getVansListData(data.vans))
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, [])

  return (
    <div className='dashboard bg-[#FFEAD0]'>
      <section className="preview flex flex-col space-y-5 px-10 py-5">
        <h1 className='font-bold text-3xl'>Welcome!</h1>
        <div className='flex justify-between'>
          <p>Income last <span className='underline'>30 days</span></p>
          <p>Details</p>
        </div>
        <h1 className="price font-bold text-5xl">$2,260</h1>
      </section>
      <section className="review flex justify-between px-10 py-5 bg-[#FFDDB2]">
        <div className='flex space-x-5'>
          <p className='font-bold'>Review score</p>
          <div className="rating flex space-x-2">
            <svg width="20" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.30123 0.843597C9.64795 -0.117224 11.0068 -0.117225 11.3535 0.843596L13.0595 5.57118C13.2156 6.0036 13.6259 6.2918 14.0856 6.2918H19.3421C20.4264 6.2918 20.8467 7.70205 19.9393 8.29562L15.8905 10.9443C15.4675 11.221 15.29 11.7521 15.4615 12.2275L17.0532 16.6383C17.4087 17.6236 16.3064 18.495 15.4298 17.9215L10.9246 14.9743C10.5618 14.737 10.0929 14.737 9.73015 14.9743L5.22489 17.9215C4.34834 18.495 3.24599 17.6236 3.60154 16.6383L5.19321 12.2275C5.36479 11.7521 5.18728 11.221 4.76429 10.9443L0.715395 8.29562C-0.191962 7.70205 0.228344 6.2918 1.31261 6.2918H6.56909C7.0288 6.2918 7.43919 6.0036 7.59523 5.57118L9.30123 0.843597Z" fill="#FF8C38" />
            </svg>
            <p> <span className='font-bold'>5.0</span>/5</p>
          </div>

        </div>
        <p>Details</p>
      </section>
      <section className="vans px-10 py-5">
        <section className="heading flex justify-between">
          <h3 className='text-xl font-semibold'>Your listed vans</h3>
          <p>Details</p>
        </section>
        {
          isLoading ?
            <Loading width={100} /> :
            vansListData.map(item =>
              <div className=' p-5 my-5  flex justify-between bg-white rounded-sm' key={item.id}>
                <div className='flex space-x-5'>
                  <img className='w-24 rounded-sm  border' src={item.imageUrl} alt={item.name} />
                  <div>
                    <h1 className='text-xl font-bold'>{item.name}</h1>
                    <p className="text-gray-500 font-bold">${item.price}<span className=" text-sm">/day</span></p>
                  </div>
                </div>
                <div>Edit</div>

              </div>

            )

        }
      </section>
    </div>
  )
}

export default Dashboard