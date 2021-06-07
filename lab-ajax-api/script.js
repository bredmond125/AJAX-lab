
console.log('hi');
const mainPage = document.querySelector('.main-text');

function addPost(newPost) {
    const pageEl = document.createElement('div');
    const pageTitle = document.createElement('h2');
    pageTitle.innerText = newPost.title;
    pageEl.appendChild(pageTitle);
    mainPage.appendChild(pageEl);
    pageEl.classList.add('page-el');
    pageTitle.classList.add('page-title');
    console.log(pageTitle);

    // TODO : add thumbnail image.
        // find path to thumbnail
            // add append to pageEl
    // TODO : add link
        //find path to link 
            // append to pageEl
} 

fetch('https://www.reddit.com/r/aww/.json').then((response) => {
    return response.json();
}).then((data) => {
    const pageData = data.data.children;
    pageData.forEach((page) => {
        let newPost = page.data;
        console.log(newPost);
        addPost(newPost);
    })     
}) 