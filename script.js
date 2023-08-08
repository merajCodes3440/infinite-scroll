let postContainer =document.querySelector(".post-container");

let limit=4;
let pageCount=1;
let postCount =1;


let postFunc = async()=>{
   let responce = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);

   let jsonData =await responce.json();
  // console.log(jsonData);
 // <p class="post-id">${curElem.id}</p>
  jsonData.map((curElem,index)=>{
    const htmlData =`<div class="post">
    <p class="post-id">${pageCount++}</p>
     <h2 class="title">${curElem.title}</h2>
     <p class="post-content">
       ${curElem.body}
     </p>
</div>`
postContainer.insertAdjacentHTML("beforeend", htmlData)
  });
}
  postFunc();
 let showData =()=>{
     setTimeout(()=>{
      pageCount++;
     postFunc();
    },300) 
}
window.addEventListener("scroll", ()=>{
    const {scrollHeight,scrollTop,clientHeight} =document.documentElement;
    
    const tolerance = 15;

    if (scrollTop + clientHeight >= scrollHeight-tolerance) {
        console.log("We are at the bottom");
        showData();
    }
})
