const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-1.com"
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-2.com"
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-3.com"
  }
];
const createPostCard = function({ img, title, text, link}) {
    const card = document.createElement("div");
    card.classList.add("movie");
  
    const imageCard = document.createElement("img");
    imageCard.classList.add("movie__image");
    imageCard.setAttribute("src", `${img}`);
    imageCard.setAttribute("alt", "movie image");
  
    const titleCard = document.createElement("h2");
    titleCard.classList.add("movie__title");
    titleCard.textContent = `${title}`;
  
    const textCard = document.createElement("p");
    textCard.classList.add("movie__text");
    textCard.textContent = `${text}`;
  
    const linkCard = document.createElement("a");
    linkCard.classList.add("movie__link");
    linkCard.textContent = "Link Card";
    linkCard.setAttribute("src", `${link}`);
  
    card.append(imageCard, titleCard, textCard, linkCard);
    document.body.appendChild(card);
    return card;
  };
const boxList = document.querySelector('.box__post');
const postList = createListPost(posts);
boxList.append(...postList);
function createListPost(arr){
    return arr.reduce(
        (acc,el)=>acc.concat(createPostCard(el)),
        []
        )
} 

