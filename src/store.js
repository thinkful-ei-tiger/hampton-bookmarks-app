const storeBookmarks=[]

function findById(id){
    return storeBookmarks.find(currentBookmark =>currentBookmark.id ===id);
}

function addBookmark(newBookmark){
    console.log(newBookmark);
    this.storeBookmarks.push(newBookmark);
    console.log(storeBookmarks);
};

function findAndUpdate(id, newData) {
    const currentItem = this.findById(id);
    Object.assign(currentItem, newData);
    console.log(id);
  };


export default{
    findAndUpdate,
    findById,
    addBookmark,
    storeBookmarks
}