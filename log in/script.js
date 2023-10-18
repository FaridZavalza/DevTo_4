const URL = 'https://challenge3-92fe2-default-rtdb.firebaseio.com/'; 
const publishButton = document.querySelector("#Enviar");


const registerNewUser = async(post) => {
    //codigo que se ejecute  por default
    const url = URL + '.json';
     const createUser = await fetch(url , { 
      method: 'POST', 
       headers: { 'Content-type': 'application/json:charset=UTF-8'}, 
      body: JSON.stringify(post),
     });   if (createUser.status === 200){
      window.location.href = 'http://127.0.0.1:5500/';
    }
     
     console.log(createUser)
  };

 


publishButton.addEventListener("click", () => {
    const coverIMG = document.querySelector("#NewPostImage");
    const newPostTitle = document.querySelector("#newPostTitle");
    const hashTag = document.querySelector("#hashTags")
    const postContent = document.querySelector("#postcontent")
    
    
   

  let arraynew = ['#' + hashTag.value];


// Array to be inserted


// Push an array to object


    const posts = 
      {
        title: newPostTitle.value,
        img_url: coverIMG.value,
        description: "serger",
        content: postContent.value,
        date_post: "01/02/2004",
        author: {
          avatar: "https://res.cloudinary.com/practicaldev/image/fetch/s--bqhtZWBh--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/68266/a52576e7-3c2a-460e-944f-b8f5ba2af41c.jpg",
          name: "noe",
        },
        category: "sad",
        tags: arraynew,
        reactions: [],
        time_read: 3,
        comments: [
          {
            avatar: coverIMG.value,
            name: "noe",
            date_comment: "01/02/2004",
            comment: "cs",
            likes: 3,
            reply: 3,
          },
        ],
      };
 
     
  createPost(posts)

  
  });
