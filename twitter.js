var reply = 0;
var share = 0;

var post = document.getElementsByClassName("post");

var likeCounts = document.querySelector(".like-counts");
var replyCounts = document.querySelector(".reply-counts");
var shareCounts = document.querySelector(".share-counts");

var plusCounts = function(e) {
    var span = e.target.closest('span');
    if(span.className == "lrsButton like-button" || span.className == "lrsButton like-button lrsButton-clicked"){
        var likeCounts = this.querySelector(".like-counts");
        likeCounts.innerHTML =(++like);
        span.classList.toggle("lrsButton-clicked");
        span.firstElementChild.classList.toggle("liked-icon");
    } 
    else if(span.className == "lrsButton reply-button" || span.className == "lrsButton reply-button lrsButton-clicked"){
        var replyCounts = this.querySelector(".reply-counts");      
        replyCounts.innerHTML = (++reply);
        span.classList.toggle("lrsButton-clicked");
    } 
    else{
        var shareCounts = this.querySelector(".share-counts");      
        shareCounts.innerHTML =(++share);
        span.classList.toggle("lrsButton-clicked");
    }
};

for(var i=0 ; i<post.length ; i++){
    post[i].addEventListener("click", plusCounts, false);
};


var body = document.querySelector("body");
var middle = document.querySelector(".middle");
var triggerScoll = window.innerHeight * 1.5;

function newPostAnimation(newPost){
    newPost.style.opacity = 0;
    window.getComputedStyle(newPost).opacity;
    newPost.style.opacity = 1;
}

window.addEventListener("scroll", function(){

    var random = Math.ceil(Math.random()*7);
    var url = "url('http://Junnie-Jobs.github.io/" + random + ".png')";
    var lastPost = middle.lastElementChild;
    var lastPostPos = lastPost.offsetTop - window.scrollY;
    console.log(lastPostPos);

    if(lastPostPos < window.innerHeight/2){
        var newPost = lastPost.cloneNode(true);
        var postContents = newPost.querySelector(".post-contents");
        middle.appendChild(newPost);
        newPost.addEventListener("click", plusCounts, false);       
        newPostAnimation(newPost);
        postContents.style.background = url;
    }
});





















