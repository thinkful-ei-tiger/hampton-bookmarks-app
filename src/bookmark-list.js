import store from './store.mjs'
//import api from './api.js'


function handleNewBookmarkSubmit(){
    console.log(store)
  $('.bookmarkData').submit(function(event){
      
       event.preventDefault();
        const newBookmarkTitle = $('.js-title').val();
        console.log(newBookmarkTitle)
        $('.js-title').val('');
        store.addBookmarkTitle(newBookmarkTitle);
        console.log(store.titles)
    })

}


function bindEventListeners(){
    handleNewBookmarkSubmit();
}

export default{
    bindEventListeners
}