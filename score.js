var audio = new Audio('bensound-hipjazz.mp3');
audio.volume=0.4

 audio.play()
let r=document.getElementById('r');
let p=document.getElementById('p');
let s=document.getElementById('s');
let mu=document.querySelectorAll('.au');
let u=0;
let c=0;
r.addEventListener("click",()=>
{
   
    mu[4].play()
kr=compGame();
    game('r',kr);
   
});

p.addEventListener("click",()=>
{ mu[4].play()
    kr=compGame();r
    game('p',kr);
});
s.addEventListener("click",()=>
{ mu[4].play()
    kr=compGame();
    game('s',kr);
});

function game(m,q){
    show(m,q)
    r=m+q
    console.log(r)
    switch(r)
    {
        case 'sp':
        case 'rs':
        case 'pr':
        res11('win')
        mu[3].play()
        u++
        document.getElementById('us').innerHTML=u
        break;
        case 'ps':
        case 'sr':
        case 'rp':
        res11('loose')
        mu[2].play()
        c++
        document.getElementById('uc').innerHTML=c
        break;
        case 'pp':
        case 'ss':
        case 'rr':
            res11('draw')
            mu[0].play() 


    }
}
function compGame()
{
    arr=['r','p','s']
    return arr[Math.floor(Math.random()*3)]
}
function show(u,c)
{

    if(u=='r')
    {
        u='rock'
    }
    else if(u=='p')
    {
        u='paper'
    }
    else{
        u='scissor'
    }
    if(c=='r')
    {
        c='rock'
    }
    else if(c=='p')
    {
        c='paper'
    }
    else{
        c='scissor'
    }
    f='user'

    g='comp'
 
    document.getElementById('sc').innerHTML=`${u}(${f})  :  ${c}(${g})`

}
function res11(r)
{
    if(r=='draw')
    {
        document.getElementById('sc1').innerHTML=r+' 🤝🤝'
    }
else if(r=='loose'){
document.getElementById('sc1').innerHTML='You'+' '+r+' ☹️😔'
    }
    else{
        document.getElementById('sc1').innerHTML='You'+' '+r+' 🎉🎊🔥'
    }

}
