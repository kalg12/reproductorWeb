class Song {
    constructor(nombreCancion, autor, link, image, color){
        this.nombreCancion = nombreCancion;
        this.autor = autor;
        this.link = link;
        this.image = image;
        this.color = color;
    }
}

class MusicPlayer{
    constructor(songs = [], songsFolder){
        this.songs = [...songs];
        this.songsFolder = songsFolder;
        this.indexSong = 0;
        this.audioPlayer = new Audio(this.songs[this.indexSong].link);
    }

    titleSong(){
        console.log("Hiciste clic en title song")
        document.getElementById("titleSong").innerHTML = this.songs[this.indexSong].nombreCancion;
    }

    updateBackgroundColor(){
        console.log("Hiciste clic en update background color")
        document.body.style.backgroundColor = this.songs[this.indexSong].color;
    }

    nextSong(){
        console.log("Hiciste clic en next song")
        this.indexSong++;
        this.audioPlayer.src = this.songs[this.indexSong].link;
        this.audioPlayer.play();
        this.titleSong();
        this.updateBackgroundColor();
    }

    prevSong(){
        console.log("Hiciste clic en prev song")
        this.indexSong--;
        this.audioPlayer.src = this.songs[this.indexSong].link;
        this.audioPlayer.play();
        this.titleSong();
        this.updateBackgroundColor();
    }

    pause(){
        console.log("Hiciste clic en pause song")
        this.audioPlayer.pause();
    }

    play(){
        console.log("Hiciste clic en play song")
        this.audioPlayer.play();
        this.titleSong();
        this.updateBackgroundColor();
    }

}

const mySongs = [
    new Song(
        'Faded',
        'Alan Walker',
        './assets/audio/Alan Walker - Faded.mp3',
        './assets/img/Faded.jpeg',
        'blue'
    ),

    new Song(
        'The Nights',
        'Avicii',
        './assets/audio/Avicii - The Nights.mp3',
        './assets/img/The_Nights.jpeg',
        'red'
    ),

    new Song(
        'Happier',
        'Marshmello ft Bastille',
        './assets/audio/Marshmello ft Bastille - Happier.mp3',
        './assets/img/Happier.jpeg',
        'yellow'
    ),

    new Song(
        'Something Just Like This',
        'The Chainsmokers and Coldplay',
        './assets/audio/The Chainsmokers Coldplay - Something Just Like This.mp3',
        './assets/img/SomethingJustLikeThis.jpeg',
        'blue'
    ),

    new Song(
        'Ride',
        'Twenty One Pilots',
        './assets/audio/Twenty One Pilots - Ride.mp3',
        './assets/img/Ride.jpeg',
        'red'
    )

]

const myMusicPlayer = new MusicPlayer(mySongs, './assets/audio/');