//import $ from 'jquery'
import store from './store.js'
import api from './api.js'


function generateNewBookmarkElement(storeBookmarks){
    console.log(storeBookmarks)
    let bookmarkTitle = `<span class="checked-Bookmark">${storeBookmarks.title}</span>`;
    if (!storeBookmarks.checked) {
      bookmarkTitle = `
        <form class="js-edit-bookmark">
          <input class="bookmark" type="text" value="${storeBookmarks.title}" required/>
        </form>
      `;
    }
   console.log(storeBookmarks)
    return `
        <div class="js-bookmark-element" data-bookmark-id="${storeBookmarks.id}">
            ${storeBookmarks.title} Rating: ${storeBookmarks.rating}
            <button class='delete'>Delete Bookmark</button>
            <button class="detailView">View Details</button>
        </div>`;
};


function generateDetails(storeBookmarks){
    

    let details=`
        <div>
            <a href="${storeBookmarks.url}">URL</a>
            ${storeBookmarks.desc}
        </div>
    `

}

function handleDetailView(){
    $('.js-bookmark-element').on('click', '.detailView', () =>{
    $('.js-bookmark-element').html(generateDetails)

    })
}

function generateBookmarkListString(bookmarkList){
    const bookmarks = bookmarkList.map((storeBookmarks) => generateNewBookmarkElement(storeBookmarks));
    return bookmarks.join('')
};

function generateError(message){
    return `
        <section class="error-content">
        <button id="cancel-error">X</button>
        <p>${message}</p>
        </section>
        `;
};

const renderError = function () {
    if (store.error) {
      const el = generateError(store.error);
      $('.error-container').html(el);
    } else {
      $('.error-container').empty();
    }
  };

  const handleCloseError = function () {
    $('.error-container').on('click', '#cancel-error', () => {
      store.setError(null);
      renderError();
    });
  };

function render(){
    renderError();

    let bookmarks = [...store.storeBookmarks];
        if (store.hideCheckedBookmarks){
            bookmarks = bookmarks.filter(bookmark => !bookmark.checked);
        }
        const bookmarkListString = generateBookmarkListString(bookmarks);
        $('.bookmark-list').html(bookmarkListString);
    };


   

function handleNewBookmarkSubmit(){
        $('.bookmarkData').submit(function(event){
             event.preventDefault();
              const newBookmark = 
                  {
                      'title': $('.js-title').val(),
                      'url': $('.js-url').val(),
                      'desc': $('.js-desc').val(),
                      'rating': parseInt($('#selectedRating').val())
                  };
            $('.bookmarkData').val('');
            api.createBookmark(newBookmark)
            .then((newBookmark) =>{
            store.addBookmark(newBookmark);
            render();
          })
          .catch((error)=> {
            store.setError(error.message);
            renderError();
          });
      });
    };

function getBookmarkIdFromElement(bookmark){
    console.log(bookmark)
    return $(bookmark)
    .closest('.js-bookmark-element')
    .data('bookmark-id');
};

function handleDeleteBookmarkClicked(){
    $('.bookmark-list').on('click', '.delete', event =>{
        const id=getBookmarkIdFromElement(event.currentTarget);
        console.log(id)
        api.deleteBookmark(id)
        .then(() => {
            store.findAndDelete(id);
            render();
    })
    .catch((error)=> {
        console.log(error);
        store.setError(error.message);
        renderError();
        });
    });
};

function handleEditBookmarkSubmit(){
    $('.bookmark-list').on('submit', '.js-edit-bookmark', event =>{
        event.preventDefault();
        const id =getBookmarkIdFromElement(event.currentTarget);
        const bookmarkTitle = $(event.currentTarget).find('.shopping-item').val();

        api.updateBookmark(id, {title: bookmarkTitle})
        .then(() => {
            store.findAndUpdate(id, {title: bookmarkTitle});
            render();
        })
        .catch((error)=> {
            console.log(error);
            store.setError(error.message);
            renderError();
        });
    });
};

function handleBookmarkCheckClicked(){
    $('.bookmark-list').on('click', '.js-bookmark-toggle', event =>{
        console.log('clicked')
        const id = getBookmarkIdFromElement(event.currentTarget);
        const bookmark = store.findById(id);
        api.updateBookmark(id, {checked: !bookmark.checked})
        .then(()=>{
            store.setError(error.message);
            renderError();
        });
    });
};

function handleToggleFilterClick(){
    $('.js-filter-checked').click(()=>{
        store.toggleCheckedFilter();
        render();
    });
};

function bindEventListeners(){
    handleDetailView();
    handleNewBookmarkSubmit();
    handleBookmarkCheckClicked();
    handleDeleteBookmarkClicked();
    handleEditBookmarkSubmit();
    handleToggleFilterClick();
    handleCloseError();
}

export default{
    render,
    bindEventListeners
}

