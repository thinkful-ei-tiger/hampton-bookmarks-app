const storeBookmarks=[{
    title: "Test",
    url: "http://test.com",
    desc: "description",
    rating: 5},
    {title: "Test 2",
    url: "http://test2.com",
    desc: "description",
    rating: 5}
];//this would be empty at final
const adding =false;
let error = null;
filter:0
let hideCheckeditems =false;


function findById(id){
    console.log(id)
    return this.storeBookmarks.find(currentBookmark =>currentBookmark.id ===id);
    
}

function addBookmark(bookmark){
    this.storeBookmarks.push(bookmark);
};

function findAndDelete(id){
    this.storeBookmarks = this.storeBookmarks.filter(currentBookmark=>currentBookmark.id !==id);
};

function toggleCheckedFilter(){
    this.hideCheckeditems =!this.hideCheckeditems;
};

function findAndUpdate(id, newData) {
    const currentBookmark = this.storeBookmarks.findById(id);
    Object.assign(currentBookmark, newData);
  };

function setError(error){
    this.error =error;
};

export default{
    storeBookmarks,
    error,
    hideCheckeditems,
    findById,
    addBookmark,
    findAndDelete,
    toggleCheckedFilter,
    findAndUpdate,
    setError
};