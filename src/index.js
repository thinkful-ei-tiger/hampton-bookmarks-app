/* eslint-disable strict */
import api from './api.js'
import storeBookmarks from './store.js';
import bookmarkList from './bookmark-list.js';
import store from './store.js';

//storeBookmarks is just a name to remind me that im using info from the api version of storeBookmarks
function main(){
   api.getBookmark()
        .then((storeBookmarks) =>{
      storeBookmarks.forEach((newBookmark)=> store.addBookmark(newBookmark));
      bookmarkList.render()
    })

    bookmarkList.bindEventListeners();
    
}

$(main)

