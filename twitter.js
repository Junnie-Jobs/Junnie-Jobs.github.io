function getContents(random) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            document.getElementById("contents0").innerHTML = obj.posts[0].content;
        }
    }
    xmlhttp.open("GET", "http://api.taegon.kim/posts/page/" + (Math.floor(Math.random()*10)+1) , true);
    xmlhttp.send();
}
getContents(0);



/*무한스크롤*/

var body = document.querySelector("body");
var middle = document.querySelector(".posts");
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
        var postContents = newPost.querySelector(".post");
        middle.appendChild(newPost);
        newPost.addEventListener("click", plusCounts, false);       
        newPostAnimation(newPost);
        postContents.style.background = url;
    }
});
