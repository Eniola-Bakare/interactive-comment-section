import { useState } from 'react'
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

  return (
    <>
      {
        comments.comments.map(eachComment => (
        <div className='flex flex-col items-end'>
          <div key={eachComment.id} className="comments rounded-xl bg-white mt-10 px-8 py-8 flex w-full">
            <Counter />

            <div className="userComment flex flex-col w-full">
              
              <div className="user flex justify-between items-center ">
                <div className="profile flex items-center space-x-4 ">
                  <img src={eachComment.user.image.webp} className='w-10'/>
                  <p className="name font-allText font-medium text-darkBlue">{eachComment.user.username}</p>
                  <p className="time font-allText font-normal text-grayBlue text-sm">{eachComment.createdAt}</p>
                </div>
                <div className="replyDiv flex items-center hover:opacity-25">
                  <img src={replyIcon} alt="a reply icon" className='pr-2 h-4' />
                  <p className='font-allText font-medium lg:font-semibold text-sm text-moderateBlue'>Reply</p>
                </div>
              </div>

              <div className="comment-text">
                <p className='font-allText text-md text-grayBlue mt-5'>{eachComment.content}</p>
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
                        <div className="replyDiv flex items-center hover:opacity-25">
                          <img src={replyIcon} alt="a reply icon" className='pr-2 h-4' />
                          <p className='font-allText font-medium lg:font-semibold text-sm text-moderateBlue'>Reply</p>
                        </div>
                      </div>

                      <div className="comment-text">
                        <p className='font-allText text-md text-grayBlue mt-5'>{eachReply.content}</p>
                      </div>

                    </div>
                  </div> 
              ))
            }
        </div>
        ))
      }
   
      <UserCommentSection />

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
