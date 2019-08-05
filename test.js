function showimg(id){
  document.getElementById(id).style.display='inline-block'
}

var pic = document.getElementById("bubble");

var imagelist =["images/bubble.jpg","images/tea.jpg","images/bubble2.jpeg"];

var index = 0;

function slideshow(){
  //console.log('hi');
  pic.setAttribute('src', imagelist[index]);

  if (index == imagelist.length - 1){
    index=0;
  }else{
    index++;
  }
}

setInterval(slideshow,2000);
