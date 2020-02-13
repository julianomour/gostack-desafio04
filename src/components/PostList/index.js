import React, { Component } from 'react'
import './style.css'
import Post from '../Post/'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://upload.wikimedia.org/wikipedia/commons/9/97/Kobe_Bryant_Profile.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeodk8WDwrSFBB_c2_IwZKBm0N9sMZXT0GJW9f4R9yx7bMIzkY"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        date: "04 Jun 2019",
        content: `Fala galera, beleza?

        Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.`,
        comments: [
          {
            id: 2,
            author: {
              name: "Clara Lisboa",
              avatar: "https://cdn.shopify.com/s/files/1/2332/2113/products/wakandev-women-developer-tshirt-devhero-4_1024x1024.jpg?v=1544101599"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 3,
            author: {
              name: "Cézar Toledo",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6VvX1UziEH9IXQwr0hI6g_h9kFhy8DNlL6FoI3AjBOGOE3ph-"
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          },
        ]
      },
    ]
  };

  render () {
    return (
      <div className="post-list">
        {this.state.posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    )
  }
  
}

export default PostList