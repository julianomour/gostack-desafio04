import React from 'react'
import './style.css'

function Comment({comment }) {
  return (
    <div className="comments" key={comment.id}>
      <img src={comment.author.avatar} alt="" />
      <div className="comment">
        <p>
          <span className="comment-name">{comment.author.name}</span>
          {comment.content}
        </p>
      </div>
    </div>
  )
}

export default Comment