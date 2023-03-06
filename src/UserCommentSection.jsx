import React,{useState} from 'react'
import comments from './Data.json'
import editIcon from './assets/icon-reply.svg'

function UserCommentSection() {
  const [text, setText] = useState('')

   // post comment func
   const handlePostComment = () => {
    let name = prompt('what is your name?')
    let date = `${new Date().toLocaleDateString('en-NG')} - ${new Date().toLocaleTimeString('en-NG')}`
    console.log(date)

      let userObj = {
        'id' : name,
        'content' : text,
        'createdAt': date,
        'user' : {
          'image' : {
            'png': comments.currentUser.image.png,
            'webp': comments.currentUser.image.webp,
            'reply': editIcon
          },
          'username': comments.currentUser.username
        },
        'replies': [
        ]
      }
      comments.comments.push(userObj)
    console.log(comments.comments);;
    setText('');
  }


  return (
    <div className="relative comments rounded-xl bg-white mt-8 px-8 py-8 flex w-full relative">
    <div className="userComment flex flex-col lg:flex-row items-start justify-between  w-full">

      <img src={comments.currentUser.image.webp} className='w-10 hidden lg:flex'/>

      <div className="comment-text flex items-start lg:px-3 w-full lg:w-4/5 h-28">
          <input type='text' placeholder='Add a comment' className='font-allText rounded-lg pl-3 pt-3.5 pb-20 shadow-md w-full item-start outline-moderateBlue' value={text} onChange={e => setText(e.target.value)}/>
      </div>

      <button className="sendDiv flex items-center hover:opacity-25 hidden lg:flex" onClick={handlePostComment}>
          <p className='bg-moderateBlue rounded-lg font-allText font-medium lg:font-medium text-sm text-white px-8 py-3 '>SEND</p>
      </button>

      {/* responsive send and avatar element */}
      <div className="avatarSend flex justify-between w-full lg:w-0 mt-10">
        <img src={comments.currentUser.image.webp} className='w-10 flex lg:hidden'/>
        <div className="sendDiv flex items-center hover:opacity-25 flex lg:hidden">
          <p className='bg-moderateBlue rounded-lg font-allText font-medium lg:font-medium text-sm text-white px-8 py-3 '>SEND</p>
        </div>
      </div>
    </div>
  </div>

  )
}

export default UserCommentSection