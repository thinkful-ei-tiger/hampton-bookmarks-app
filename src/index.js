/* eslint-disable strict */
import api from './api.js'
import bookmarkList from './bookmark-list.js';
import store from './store.js';

//storeBookmarks is just a name to remind me that im using info from the api version of storeBookmarks


function main(){
   api.getBookmark()
        .then((storeBookmarks) =>{
          storeBookmarks.forEach((storeBookmark)=> store.addBookmark(storeBookmark));
          bookmarkList.render()
    })

    bookmarkList.bindEventListeners();
    bookmarkList.render()
};

$(main)

