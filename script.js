const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const  showMoreBtn = document.getElementById("show-more-btn");
const client_id = "EJJxRM0PZfri78vAhBleqMtTfy9kL5w_gTHlVHc1BMw";
let keyword ="";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const Url = 'https://api.unsplash.com/search/photos?per_page=25&query=${keyword}&client_id=EJJxRM0PZfri78vAhBleqMtTfy9kL5w_gTHlVHc1BMw' ;

    const response = await fetch(Url);
    const data = await response.json();

   const results = data.results;

   results.map((result)=>{
       const image = document.createElement("img");
       image.src = result.urls.small;
       const imageLink = document.createElement("a");
       imageLink.href = result.links.html;
       imageLink.target = "_blank";
       imageLink.appendChild(image);
       searchResult.appendChild(imageLink);

   });
   showMoreBtn.style.display = "block";

   
}
searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
});
showMoreBtn.addEventListener("click",() =>{
    page++;
    searchImages();
});

  

