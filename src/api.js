const BASE_URL = 'https://thinkful-list-api.herokuapp.com/hampton/bookmarks';

/* idk what this is but they had it on the shipping list so come back to this!
* @param {string} url 
 * @param {object} options 
 * @returns {Promise} - resolve on all 2xx responses with JSON body
 *                    - reject on non-2xx and non-JSON response with 
 *                      Object { code: Number, message: String }*/

 //const listApiFetch(...args){
   // return resizeBy.json();
    //}


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