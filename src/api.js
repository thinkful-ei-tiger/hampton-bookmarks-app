const BASE_URL = 'https://thinkful-list-api.herokuapp.com/hampton/bookmarks';

 //get bookmark
 
 /*
const getBookmark = function () {
    return listApiFetch(`${BASE_URL}/bookmarks`);
  };*/
  
//create new bookmark
const createBookmark = function (name) {
    const newBookmark= JSON.stringify({ name });
    return listApiFetch(`${BASE_URL}/bookmarks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newBookmark
    });
  };

//when we update descriptions
/*
const updateBookmark = function (id, updateDescription) {
    const newDescription = JSON.stringify(updateDescription);
    return listApiFetch(`${BASE_URL}/bookmarks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newDescription
    });
  };*/

//delete bookmark
  /*const deleteBookmark = function (id) {
    return listApiFetch(BASE_URL + '/bookmarks/' + id, {
      method: 'DELETE'
    });
  };*/

//exports
 export default{
     //CRUD/Post
     createBookmark,
     //read/Get
     getBookmark,
     //update/Patch
     updateBookmark,
     //delete
     deleteBookmark
 };