import julio from "../assets/julio.png";
import diego from "../assets/diego.png";
import gabriel from "../assets/gabriel.png";
import clara from "../assets/clara.png";
import cesar from "../assets/cesar.png";

class PostsApi {
  getPosts() {
    return [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: julio
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: diego
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: gabriel
        },
        date: "04 Jun 2019",
        content:
          "Fala galera, beleza?\n\nEstou fazendo o Bootcamp GoStack da Rocketseat e está muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 2,
            author: {
              name: "Clara Lisboa",
              avatar: clara
            },
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 3,
            author: {
              name: "Cézar Toledo",
              avatar: cesar
            },
            content:
              "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      }
    ];
  }
}

export default new PostsApi();
