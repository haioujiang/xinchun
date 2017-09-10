/*点击音乐停止*/
window.onload=function (){
    var music=document.getElementById('music');
    var page1=document.getElementById('page1');
    var page2=document.getElementById('page2');
    var page3=document.getElementById('page3');
    var audio=document.getElementsByTagName('audio')[0];
    /*music.onclick=function (){
        if( audio.paused){
           audio.play();
            /!*图片和音乐的同步旋转和暂停*!/
            //this.classList.add("play");
            this.setAttribute('class','play circle')
            //this.style.webkitAnimationPlayState='running'
            
       }else{
           audio.pause();
            this.setAttribute('class',' circle')

         //  this.style.webkitAnimationPlayState='paused'

        }
    }*/

    music.addEventListener('touchstart',function (){
            if( audio.paused){
                audio.play();
                this.setAttribute('class','play circle');
            }else{
                audio.pause();
                this.setAttribute('class',' circle');
            }
    }
    ,false)

    audio.addEventListener('ended',function (){
        music.setAttribute('class','circle')
    }
    ,false)
    page1.addEventListener('click',function (){
      page1.style.display='none';
      page2.style.display='block';
      page3.style.display='block';
      page3.style.top='100%';
        setTimeout(function (){
          page2.classList.add('fade');
          page3.classList.add('fadeIn');
        }
        ,6000)
    }
    ,false)


}
