import React from 'react'
import './Post.css'

import Comment from '../Comments/'

export default function Post({post}) {
  return (
    <article className="post" key={post.id}>
      <header className="user">
        <img className="post-avatar" src={post.author.avatar} />
        <p className="post-name"><strong> {post.author.name}</strong></p>
        <span className="post-date">{post.date}</span>
      </header>
      <p className="post-content">{post.content}</p>
      {post.comments.map((comment) => (
        <Comment key={comment.id} comment={comment}/>
      ))}
    </article>
  )
}
