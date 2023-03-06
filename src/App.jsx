import { useState, useEffect } from 'react'
import comments from './Data.json'
import deleteIcon from './assets/icon-delete.svg'
import editIcon from './assets/icon-edit.svg'
import minusIcon from './assets/icon-minus.svg'
import replyIcon from './assets/icon-reply.svg'
import plusIcon from './assets/icon-plus.svg'
import Counter from './Counter'

import avartar1 from './assets/avatars/image-amyrobson.png'
import UserCommentSection from './UserCommentSection'

function App() {
  const [count, setCount] = useState(4)
  const [text, setText] = useState('')
  

  const handleCount = () => {
    let originalCount = count

    setCount(count + 1)
    let newCount = count
  }
  const handleSubtraction = () => {
    setCount(count - 1)
  }

  // post comment func
  const handlePostComment = () => {
    let name = text
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
            'reply': editIcon,
            "edit": "./src/assets/icon-edit.svg",
            "delete": "./src/assets/icon-delete.svg"
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

  // handle reply func
  const handleReply = () => {
    
  }
  
  

  return (
    <>
      {
        comments.comments.map(eachComment => (
        <div className='flex flex-col items-end'>
          <div key={eachComment.id} className="comments rounded-xl bg-white mt-4 px-8 py-8 flex flex-col lg:flex-row w-full">
        
        {/* counter comp */}
          <div className="counter bg-veryLightGray hidden lg:flex flex-col items-center justify-between mr-3 px-3 py-3 h-24 rounded-lg">
            <img src={plusIcon} className='w-4 hover:opacity-50' onClick={handleCount}/>
            <p className='text-moderateBlue  font-bold text-sm font-allText'>{count}</p>
            <img src={minusIcon} className='w-4 hover:opacity-50' onClick={handleSubtraction}/>
          </div>

            <div className="userComment flex flex-col w-full">
              
              <div className="user flex justify-between items-center ">
                <div className="profile flex items-center space-x-4 ">
                  <img src={eachComment.user.image.webp} className='w-10'/>
                  <p className="name font-allText font-medium text-darkBlue">{eachComment.user.username}</p>
                  <p className="time font-allText font-normal text-grayBlue text-sm">{eachComment.createdAt}</p>
                </div>

                {/* tenary operator for edit, delete, and reply div */}
                <div className="replyDiv hidden lg:flex items-center ">
                  {
                    eachComment.user.image.delete && eachComment.user.image.edit
                    ?
                    <>
                      <div className="editDiv flex items-center hover:opacity-25">
                         <img src={eachComment.user.image.delete} alt="a delete icon" className='pr-2 h-4' />
                          <p className='font-allText font-medium lg:font-semibold text-lg text-softRed pr-2'>Delete</p>
                      </div>
                      <div className="deleteDiv flex items-center hover:opacity-25">
                        <img src={eachComment.user.image.edit} alt="an edit icon" className='pr-2 h-4' />
                        <p className='font-allText font-medium lg:font-semibold text-lg text-moderateBlue'>Edit</p>
                      </div>
                    </>
                    : 
                    <>
                      <button className="replyDiv flex items-center hover:opacity-25" onClick={handleReply}>
                        <img src={eachComment.user.image.reply} alt="a reply icon" className='pr-2 h-4' />
                        <p className='font-allText font-medium lg:font-semibold text-lg text-moderateBlue'>Reply</p>
                      </button>
                    </>
                  }
                </div>
              </div>

              <div className="comment-text">
                <p className='font-allText text-md text-grayBlue mt-5'>{eachComment.content}</p>
              </div>
            </div>

            {/* responsive counter and reply btn */}
            <div className="counterReply flex lg:hidden justify-between items-center  w-full mt-5">
              <div className="counter bg-veryLightGray flex lg:hidden items-center justify-between space-x-4 mr-3 px-3 py-3 w-5/12 h-10 rounded-lg">
                <img src={plusIcon} className='w-4 hover:opacity-50' onClick={handleCount}/>
                <p className='text-moderateBlue  font-bold text-sm font-allText'>{count}</p>
                <img src={minusIcon} className='w-4 hover:opacity-50' onClick={handleSubtraction}/>
              </div>

              {/* responsive edit/delete/reply */}
              <div className="replyDiv flex lg:hidden items-center ">
                  {
                    eachComment.user.image.delete && eachComment.user.image.edit
                    ?
                    <>
                      <div className="editDiv flex items-center hover:opacity-25">
                         <img src={eachComment.user.image.delete} alt="a delete icon" className='pr-2 h-4' />
                         <p className='font-allText font-medium lg:font-semibold text-md text-softRed pr-2'>Delete</p>
                      </div>
                      <div className="deleteDiv flex items-center hover:opacity-25">
                        <img src={eachComment.user.image.edit} alt="an edit icon" className='pr-2 h-4' />
                        <p className='font-allText font-medium lg:font-semibold text-md text-moderateBlue'>Edit</p>
                      </div>
                    </>
                    : 
                    <>
                      <div className="replyDiv flex items-center">
                        <img src={eachComment.user.image.reply} alt="a reply icon" className='pr-2 h-4' />
                      <p className='font-allText font-medium lg:font-semibold text-md text-moderateBlue'>Reply</p>
                      </div>
                    </>
                  }
                </div>
            </div>
            
          </div>

          {/* Replies section */}
            {
              eachComment.replies.map(eachReply => (
                  <div key={eachReply.id} className="comments rounded-xl bg-white mt-5 px-8 py-8 flex  w-5/6 ">
                    <Counter />
                    <div className="userComment flex flex-col w-full">
                      
                      <div className="user flex justify-between items-center ">
                        <div className="profile flex items-center space-x-4 ">
                          <img src={eachReply.user.image.png} className='w-10'/>
                          <p className="name font-allText font-medium text-darkBlue">{eachReply.user.username}</p>
                          <p className="time font-allText font-normal text-grayBlue text-sm">{eachReply.createdAt}</p>
                        </div>
                        <div className="replyDiv hidden lg:flex items-center hover:opacity-25">
                          <img src={eachReply.user.image.reply} alt="a reply icon" className='pr-2 h-4' />
                          <p className='font-allText font-medium lg:font-semibold text-sm text-moderateBlue'>Reply</p>
                        </div>
                      </div>

                      <div className="comment-text">
                        <p className='font-allText text-md text-grayBlue mt-5'>{eachReply.content}</p>
                      </div>
                      
                      <div className="counterReply flex lg:hidden justify-between items-center  w-full mt-5">
                        <div className="counter bg-veryLightGray flex lg:hidden items-center justify-between space-x-4 mr-3 px-3 py-3 w-5/12 h-10 rounded-lg">
                          <img src={plusIcon} className='w-4 hover:opacity-50' onClick={handleCount}/>
                          <p className='text-moderateBlue  font-bold text-sm font-allText'>{count}</p>
                          <img src={minusIcon} className='w-4 hover:opacity-50' onClick={handleSubtraction}/>
                        </div>

                        <div className="replyDiv flex lg:hidden items-center hover:opacity-25">
                            <img src={replyIcon} alt="a reply icon" className='pr-2 h-4' />
                            <p className='font-allText font-medium lg:font-semibold text-sm text-moderateBlue'>Reply</p>
                        </div>
                      </div>

                    </div>
                  </div> 
              ))
            }
        </div>
        ))
      }

    
      {/* <UserCommentSection /> */}

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
            <button className="sendDiv flex items-center hover:opacity-25 flex lg:hidden" onClick={handlePostComment}>
              <p className='bg-moderateBlue rounded-lg font-allText font-medium lg:font-medium text-sm text-white px-8 py-3 '>SEND</p>
            </button>
          </div>
        </div>
      </div>

        {/* <div className="replyDiv">
            <p>Hello replies</p>
            <br></br>
            {
              eachComment.replies.map(eachReply => (
                <p className="reply" key={eachReply.id}>{eachReply.content}</p>
              ))
            }
        </div>   */}
        <br></br>
    </>
  )
}

export default App
