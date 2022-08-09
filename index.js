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
        this.audioPlayer = new Audio(this.songs[this.indexSong].link)
    }

    nextSong(){
        console.log("Siguiente canción")
        this.indexSong++
        this.audioPlayer.src = this.songs[this.indexSong].link
        this.audioPlayer.play()
        this.updateCover()
        this.titleSong()
        this.backgroundColor()
    }

    prevSong(){
        console.log("Previa canción")
        this.indexSong--
        this.audioPlayer.src = this.songs[this.indexSong].link
        this.audioPlayer.play()
        this.updateCover()
        this.titleSong()
        this.backgroundColor()
    }

    pause(){
        console.log("Hiciste pause")
        this.audioPlayer.pause()
    }

    play(){
        console.log("Hiciste play")
        this.audioPlayer.play()
        this.updateCover()
        this.titleSong()
        this.backgroundColor()
    }

    updateCover(){
        console.log("Hiciste update cover")
        document.getElementById("cover").src = this.songs[this.indexSong].image
    }

    titleSong(){
        document.getElementById("titulo").innerHTML = this.songs[this.indexSong].nombreCancion
    }

    backgroundColor(){
        document.body.style.backgroundColor = this.songs[this.indexSong].color
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
        'rgb(220,156,6)'
    ),

    new Song(
        'Something Just Like This',
        'The Chainsmokers and Coldplay',
        './assets/audio/The Chainsmokers Coldplay - Something Just Like This.mp3',
        './assets/img/SomethingJustLikeThis.jpeg',
        '#384855'
    ),

    new Song(
        'Ride',
        'Twenty One Pilots',
        './assets/audio/Twenty One Pilots - Ride.mp3',
        './assets/img/Ride.jpeg',
        'red'
    )

]

const myMusicPlayer = new MusicPlayer(mySongs, "./assets/audio/")