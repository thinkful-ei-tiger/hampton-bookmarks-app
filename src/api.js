const BASE_URL = 'https://thinkful-list-api.herokuapp.com/hampton/bookmarks';


const listApiFetch = function (...args) {
  // setup var in scope outside of promise chain
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        // if response is not 2xx, start building error object
        error = { code: res.status };

        // if response is not JSON type, place statusText in error object and
        // immediately reject promise
        if (!res.headers.get('content-type').includes('json')) {
          error.message = res.statusText;
          return Promise.reject(error);
        }
      }

      // otherwise, return parsed JSON
      return res.json();
    })
    .then(data => {
      // if error exists, place the JSON message into the error object and 
      // reject the Promise with your error object so it lands in the next 
      // catch.  IMPORTANT: Check how the API sends errors -- not all APIs
      // will respond with a JSON object containing message key
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }

      // otherwise, return the json as normal resolved Promise
      return data;
    });
};




 //get bookmark
 
const getBookmark = function () {
    return listApiFetch(`${BASE_URL}`);
  };
  
//create new bookmark
const createBookmark = function (newBookmark) {
    const jsonBookmark= JSON.stringify(newBookmark);
    console.log(jsonBookmark)
    return listApiFetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
     body: jsonBookmark
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
     //updateBookmark,
     //delete
     //deleteBookmark
 };