import React,{useState} from 'react'
import minusIcon from './assets/icon-minus.svg'
import plusIcon from './assets/icon-plus.svg'

function Counter() {
  const [count, setCount] = useState(4)

  const handleCount = () => {
    let originalCount = count

    setCount(count + 1)
    let newCount = count

  }
  const handleSubtraction = () => {
    setCount(count - 1)
  }

  return (
        <div className="counter bg-veryLightGray flex flex-col items-center justify-between mr-3 px-3 py-3 h-24 rounded-lg">
          <img src={plusIcon} className='w-4 hover:opacity-50' onClick={handleCount}/>
          <p className='text-moderateBlue  font-bold text-sm font-allText'>{count}</p>
          <img src={minusIcon} className='w-4 hover:opacity-50' onClick={handleSubtraction}/>
        </div>
  )
}

export default Counter