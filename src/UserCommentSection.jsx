import React,{useState} from 'react'
import avartar1 from './assets/avatars/image-amyrobson.png'
import minusIcon from './assets/icon-minus.svg'
import replyIcon from './assets/icon-reply.svg'
import plusIcon from './assets/icon-plus.svg'

function UserCommentSection() {
  const [text, setText] = useState('')

  return (
    <div>      
     
      <div className="relative comments rounded-xl bg-white mt-8 px-8 py-8 flex w-full relative">
        <div className="userComment flex items-start justify-between  w-full">

              <img src={avartar1} className='w-10'/>

          <div className="comment-text flex items-start pl-3 pr-3 w-4/5 h-28">
              <input type='text' placeholder='Add a comment' className='font-allText rounded-lg pl-3 pt-3.5 pb-20 shadow-md w-full item-start outline-moderateBlue' onChange={e => setText(e.target.value)}/>
          </div>

          <div className="sendDiv flex items-center hover:opacity-25">
              <p className='bg-moderateBlue rounded-lg font-allText font-medium lg:font-medium text-sm text-white px-8 py-3 '>SEND</p>
          </div>
        </div>
        <div className='rounded  w-1 h-96 py-55 bg-grayBlue opacity-20 absolute left-50 bottom-60 '></div>
    </div>
    </div>

  )
}

export default UserCommentSection