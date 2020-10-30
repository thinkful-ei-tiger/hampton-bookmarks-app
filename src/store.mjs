const titles=[]
/*
function postNewBookmarkData(){
    const newBookmark= JSON.stringify({ titles })
    method:'POST',
}*/


function addBookmarkTitle(title){
    titles.push(title);
    console.log(titles)
};

export default{
    addBookmarkTitle
}