const storeBookmarks=[]

function findById(id){
    return storeBookmarks.find(currentBookmark =>currentBookmark.id ===id);
}

function addBookmark(newBookmark){
    console.log('test of addBookmark() being called');
    storeBookmarks.push(newBookmark);
    console.log(storeBookmarks);
};


export default{
    findById,
    addBookmark,
    storeBookmarks
}