import store from './store.mjs'
//import api from './api.js'


function handleNewBookmarkSubmit(){
  $('.bookmarkData').submit(function(event){
       event.preventDefault();
        const newBookmarkTitle = $('.js-title').val();
        console.log(newBookmarkTitle)
        $('.js-title').val('');
        store.addBookmarkTitle(newBookmarkTitle);
    })

}


function bindEventListeners(){
    handleNewBookmarkSubmit();
}

export default{
    bindEventListeners
}

