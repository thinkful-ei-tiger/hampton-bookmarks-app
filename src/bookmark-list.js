//import $ from 'jquery'
import storeBookmarks from './store.js'
import store from './store.js'
import api from './api.js'


function generateNewBookmarkElement(){
   
    
    $('.bookmark-list').html(`
        <div>
            <ul class="bookmark-list">
                <li class="js-bookmark-element" name="${storeBookmarks}">
                ${store.storeBookmarks[0].title}
                        <div class="bookmark-list-controls">
                        <button class="bookmark-item-edit js-item-edit">
                        <span class="button-label">edit</span>
                        </button>
                    <button class="bookmark-item-delete js-bookmark-delete">
                    <span class="button-label">delete</span>
                </button>
                </div>
                </li>
            </ul>
        </div>`)
        console.log(`${store.storeBookmarks[0].title}`);
}

function generateBookmarkListString(newBookmark){
    const bookmarks= newBookmark.map((newBookmark) => generateNewBookmarkElement(newBookmark));
    return bookmarks.join('')
}

function render(){
    $('.bookmark-list').html(generateNewBookmarkElement);
}

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
        //$('.hidden').val('');
        store.addBookmark(newBookmark);
        api.createBookmark(newBookmark)
        render()
    });
}





function bindEventListeners(){
    render()
    handleNewBookmarkSubmit(),
    generateNewBookmarkElement();
}

export default{
    render,
    bindEventListeners
}

