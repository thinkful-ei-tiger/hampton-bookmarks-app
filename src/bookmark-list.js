import store from './store.js'
import api from './api.js'


function handleNewBookmarkSubmit(){
  $('.bookmarkData').submit(function(event){
       event.preventDefault();
       console.log($('.js-title').val(),$('.js-url').val())
        const newBookmark = 
            {
                'title': $('.js-title').val(),
                'url': $('.js-url').val(),
                'desc': $('.js-desc').val(),
                'rating': parseInt($('#selectedRating').val())
            }
        $('.hidden').val('');
        store.addBookmark(newBookmark);
        api.createBookmark(newBookmark)
    });
}


function bindEventListeners(){
    handleNewBookmarkSubmit();
}

export default{
    bindEventListeners
}

