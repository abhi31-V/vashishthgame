a=document.querySelectorAll('button ion-icon')
let s=document.querySelectorAll('.card ')
let c=document.getElementById("play");
let r=document.querySelectorAll('.a')
let im=["bg.jpg","gym.jpg","cal.jpg","vail.jpg"]
let i=0;
for(item of s)
{
    console.log(r.length)
    item.addEventListener('click',(e)=>
    {
        bt=e.target.name;
        console.log(bt)
      if(bt=='play-outline')
      {
        // document.getElementById("ids").innerHTML='||'
        c.classList.toggle("re");
     
     r[i].play()
         
      }
      else if(bt=='||')
      {
        document.getElementById("ids").innerHTML='|>>'
        r[i].pause()

      }
      else if(bt=='play-back-circle-outline')
      {r[i].pause()
        r[i].currentTime=0;
          if(i==0)
          {
              i=0;
          }
          else{
              i--;

          }
          document.getElementById('im').src=im[i]
// im.classList.add("anime");
// document.getElementById("ids").innerHTML='||'
          r[i].play()
      }
      else if(bt=='play-forward-circle-outline')
      {r[i].pause()
        r[i].currentTime=0;
        if(i>=r.length-1)
        {
            i=r.length-1;
        }
        else{
            i++;

        }
        document.getElementById('im').src=im[i]
        // im[i].classList.add("anime");
        // document.getElementById("ids").innerHTML='|| '
r[i].play()
      }
  
    });
}
