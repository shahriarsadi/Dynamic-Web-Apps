var song1 = document.getElementById('song1')
var song2 = document.getElementById('song2')
var song3 = document.getElementById('song3')
var song4 = document.getElementById('song4')
var song5 = document.getElementById('song5')





var Jukebox = {
  Playlist : [], //all songs with title, and link  
  repeat : false, 

  playsong(){
    var controls = document.getElementById("audiotag");
    controls.play();
  },

  pausesong(){
    var controls = document.getElementById("audiotag");
    controls.pause();
  },

  loadsong(){
    var controls = document.getElementById("audiotag");
    controls.load();
  },


  loadPlayList(){
    var ind;
    for (ind = 1; ind <= 5; ind++){
      var song_str = "song" + String(ind);
      var name = "song" + String(ind) + "ti";
      var song_link= document.getElementById(song_str);
      var link = song_link.src;
      var title = document.getElementById(name).textContent;
      var song= {
        songtitle: title, 
        songlink: link,
      };
      this.Playlist.push(song);
    }
    var img_lnks = ["goo.gl/hVvouk",
    "goo.gl/uoickz",
    "i.redd.it/wnw40hgrvfdz.jpg",
    "goo.gl/CW3zt7",
    "goo.gl/y7tRG4"
    ];
    for (var ind=0; ind < this.Playlist.length; ind++){
      this.Playlist[ind].songimg = img_lnks[ind]
    }
    console.log(this.Playlist);

  },

  next(){
    var button = document.getElementById("next");
    var songsrc = document.getElementById("mainsong").src;
    var ind;
    var place;
    this.pausesong();
    //first we need a loop to find the current song we're in 
    //this will help us place ourselves at the next song
    for (ind=0; ind < (this.Playlist.length); ind++){
      if ((this.Playlist[ind]).songlink == String(songsrc)){
        place = ind+1;
      }
    }
    //in case we're at the beginning list, this will put us back at the //first song
    if (place >= this.Playlist.length){
      place = 0;
    }

    //changes the source of the song to the next song
    document.getElementById("mainsong").src = this.Playlist[place].songlink;
    document.getElementById("currimg").src = this.Playlist[place].songimg;
    this.loadsong();
    this.playsong();
  },

  prev(){
  var button = document.getElementById("next");
  var songsrc = document.getElementById("mainsong").src;
  var ind;
  var place;
  this.pausesong();
  //first we need a loop to find the current song we're in 
  //this will help us place ourselves at the prev song
  for (ind=0; ind < (this.Playlist.length); ind++){
    if ((this.Playlist[ind]).songlink == String(songsrc)){
      place = ind-1;
    }
  }
  //in case we're at the beginning of our list, this will put us 
  //at the last song
  if (place < 0){
    place = 4;
  }

  //changes the source of the song to the next song
  document.getElementById("mainsong").src = this.Playlist[place].songlink;
  document.getElementById("currimg").src = this.Playlist[place].songimg;
  this.loadsong();
  this.playsong();    
  },

  AddSongs(){
    var title = document.getElementById("newtitle").value;
    var imglnk = document.getElementById("newimg").value;
    var songlnk = document.getElementById("newsong").value;
    var item = document.createElement("li");
    var num = String(this.Playlist.length); 
    item.setAttribute("id", ("song" + num + "ti"));
    var titlenode = document.createTextNode(title)
    item.appendChild(titlenode);
    document.getElementById("Playlist").appendChild(item);
    var song= {
      songtitle: title, 
      songlink: songlnk,
      songimg: imglnk,
    };
    this.Playlist.push(song)
  }

  };

Jukebox.loadPlayList();
