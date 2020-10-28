
import api from './api';
import cuid from 'cuid';
//load previous responses
function getAnswers(){
    GET previous responses
}

//reveal the form because it should load without it showing
function showHiddenForm(){
    const newBookmark = document.getElementById("bookmark-data");
    if (newBookmark.style.display === "none"){
        newBookmark.style.display = "block";
    }else{
        newBookmark.style.display= "block";
    }
}
//take submissions and make them into an object
function onSubmit(bookmark-title, url, description, rating){
    const obj ={
        title: bookmark-title,
        url: url,
        text: description,
        rating: rating,
        id: cuid(),
    }
    JSON.stringify(obj);
}

//post obj to BASE_URL
function postObj(){
    POST obj to BASE_URL
}

//render page with new info
function renderNew(){
    render()
}

//filter
//delete
//edit description
//render

