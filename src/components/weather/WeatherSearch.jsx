import React, { useContext, useState } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import WeatherContext from '../../context/weather/WeatherContext'

function WeatherSearch() {

    const {handleSearch} = useContext(WeatherContext)

    const [text, setText] = useState('')

    const {setAlert} = useContext(AlertContext)

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text === '') {
            setAlert('Please Enter City Name', 'error')
        } else {
            handleSearch(text);
            setText('')
        }
    }
    
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cold-2 d-flex justify-center mt-12 gap-8'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <div className='relative justify-self-center'>
                        <input type="text" 
                            className='w-full pr-80 bg-gray-200 input input-lg text-black focus:outline-none' 
                            placeholder='Enter City' 
                            value={text} 
                            onChange={handleChange}
                            />
                        <button type='submit' className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg hover:bg-ghost hover:text-white'>
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
              
    </div>
  )
}

export default WeatherSearch