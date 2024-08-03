const music=new Audio('songs/Arjan_Vailey.mp3');
// music.play();


const songs=[

    {
        id:"1",
        songName:`Arjan Vailey<br>
        <div class="subtitle">Manan Bharadwaj, Bhupender Babbal</div>`,
        poster:"Assets/Images/1.jpeg",
    },
    {
        id:"2",
        songName:`Ava<br>
        <div class="subtitle">Famy</div>`,
        poster:"Assets/Images/2.jpeg",
    },
    {
        id:"3",
        songName:`Badass(From "Leo")<br>
        <div class="subtitle">Anirudh Ravichander</div>`,
        poster:"Assets/Images/3.jpeg",
    },
    {
        id:"4",
        songName:`Circles<br>
        <div class="subtitle">Post Malone</div>`,
        poster:"Assets/Images/4.jpeg",
    },
    {
        id:"5",
        songName:`Numb<br>
        <div class="subtitle">Linkin Park</div>`,
        poster:"Assets/Images/5.jpeg",
    },
    {
        id:"6",
        songName:`Heavy<br>
        <div class="subtitle">Chester Bennington, Kiara</div>`,
        poster:"Assets/Images/6.jpeg",
    },
    {
        id:"7",
        songName:`I Fall Apart<br>
        <div class="subtitle">Post Malone</div>`,
        poster:"Assets/Images/7.jpeg",
    },
    {
        id:"8",
        songName:`Illuminati(From "Aaveysham")<br>
        <div class="subtitle">Sushin Shyam, Dabzee, Vinayak Sasikumar</div>`,
        poster:"Assets/Images/8.jpeg",
    },
    {
        id:"9",
        songName:`In The End<br>
        <div class="subtitle">Linkin Park</div>`,
        poster:"Assets/Images/9.jpeg",
    },
    {
        id:"10",
        songName:`Naina(From "Crew")<br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster:"Assets/Images/10.jpeg",
    },
    {
        id:"11",
        songName:`New Divide<br>
        <div class="subtitle">Linkin Park</div>`,
        poster:"Assets/Images/11.jpeg",
    },
    {
        id:"12",
        songName:`Faint<br>
        <div class="subtitle">Linkin Park</div>`,
        poster:"Assets/Images/12.jpeg",
    },
    {
        id:"13",
        songName:`Pehle Bhi Main<br>
        <div class="subtitle">Vishal Mishra</div>`,
        poster:"Assets/Images/13.jpeg",
    },
    {
        id:"14",
        songName:`Shape of you<br>
        <div class="subtitle">Ed Sheeran</div>`,
        poster:"Assets/Images/14.jpeg",
    },
    {
        id:"15",
        songName:`Soulmate<br>
        <div class="subtitle">Arijit Singh, Badshah</div>`,
        poster:"Assets/Images/15.jpg",
    },
    {
        id:"16",
        songName:`Starboy<br>
        <div class="subtitle">The Weekend</div>`,
        poster:"Assets/Images/16.jpeg",
    },
    {
        id:"17",
        songName:`Sunflower-Spider-Man:Into the Spider-Verse<br>
        <div class="subtitle">Post malone, Swae Lee</div>`,
        poster:"Assets/Images/17.jpeg",
    },
    {
        id:"18",
        songName:`Tum Se(From "Teri Baaton Mein Aisa Uljha Jiya")<br>
        <div class="subtitle">Sachin-Jigar, Raghav Chaitanya, Varun Jain, Indraneel</div>`,
        poster:"Assets/Images/18.jpeg",
    },
    {
        id:"19",
        songName:`Vikram-Title Track<br>
        <div class="subtitle">Anirudh Ravichander</div>`,
        poster:"Assets/Images/19.webp",
    },
    {
        id:"20",
        songName:`Wow<br>
        <div class="subtitle">Post Malone</div>`,
        poster:"Assets/Images/20.jpeg",
    }
]    



Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;

});


let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');


masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1')
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('PlaylistPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(105,105,105,0)';
    })
}




let index=0;
let poster_masterPlay=document.getElementById('poster_masterPlay');
let download_music=document.getElementById('download_music');
let title=document.getElementById('title');



Array.from(document.getElementsByClassName('PlaylistPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index= el.target.id;
        // console.log(index);
        music.src = `songs/${index}.mp3`;
        poster_masterPlay.src= `Assets/Images/${index}.jpeg`;  
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href=`MUSIC APP/songs/${index}.mp3`;

        
        let Songtitle= songs.filter((els)=>{
            return els.id==index;
        });

        Songtitle.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,0.1)";
        makeAllPlay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
});

let Current_Start=document.getElementById('Current_Start');
let Current_End=document.getElementById('Current_End');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];



music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;

    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);

    if(sec1 < 10){
        sec1=`0${sec1}`;
    }
    
    Current_End.innerText=`${min1}:${sec1}`;
    
    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    
    if(sec2 < 10){
        sec2=`0${sec2}`;
    }
    Current_Start.innerText=`${min2}:${sec2}`;


    let progressBar=parseInt((music_curr/music_dur)*100);
    seek.value=progressBar;

    let seekBar=seek.value;
    bar2.style.width=`${seekBar}%`;
    dot.style.left=`${seekBar}%`;

});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;
});

let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');

    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');

    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
});

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    index-=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;

    }
        music.src = `songs/${index}.mp3`;
        poster_masterPlay.src= `Assets/Images/${index}.jpeg`;  
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        
        let Songtitle= songs.filter((els)=>{
            return els.id==index;
        });

        Songtitle.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,0.1)";
        makeAllPlay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});

next.addEventListener('click',()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songItem')).length){
        index=1;

    }
    music.src = `songs/${index}.mp3`;
        poster_masterPlay.src= `Assets/Images/${index}.jpeg`;  
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        
        let Songtitle= songs.filter((els)=>{
            return els.id==index;
        });

        Songtitle.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,0.1)";
        makeAllPlay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});














let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];



pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});

let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let Item=document.getElementsByClassName('Item')[0];



pop_art_right.addEventListener('click',()=>{
    Item.scrollLeft += 330;
});
pop_art_left.addEventListener('click',()=>{
    Item.scrollLeft -= 330;
});