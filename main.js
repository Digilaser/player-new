// Song data
const songList = [
    {
        title: "01 El Alfa ft Rochy RD - Los Pobres Y Los Ricos",
        file: "https://mp3teca.app/-/aac/96/102494_96.m4a",
        cover: "1.jpeg"

    },
    {
        title: "02 Arcangel - JS4E",
        file: "https://mp3teca.app/-/aac/96/102104_96.m4a",
        cover: "1.jpeg"
    },
    {
        title: "03 Don Omar ft Chencho - Podemos Repetirlo",
        file: "https://mp3teca.app/-/aac/96/103767_96.m4a",
        cover: "1.jpeg"
    },
    {
        title: "04 Lenny Tavarez - Vaquerita",
        file: "https://mp3teca.app/-/aac/96/103758_96.m4a",
        cover: "1.jpeg"
    },
    {
        title: "Track_Audio_05",
        file: "https://mp3teca.app/-/aac/96/96846_96.m4a",
        cover: "1.jpeg"
    },
    {
        title: "06 Santa Fe Klan - Dos Razones",
        file: "https://mp3teca.app/-/aac/96/103747_96.m4a",
        cover: "1.jpeg"
    },
    {
        title: "07 Ken-Y - El Ciclo",
        file: "https://mp3teca.app/-/aac/96/103738_96.m4a",
        cover: "1.jpeg"
    },
    {
        title: "08 Yandel ft JonLee - Bodyguard",
        file: "https://mp3teca.app/-/aac/96/103727_96.m4a",
        cover: "1.jpeg"
    },
    {
        title: "09 Casper ft Juanka El Problematik - Tengo Un Draco",
        file: "https://mp3teca.app/-/aac/96/103764_96.m4a",
        cover: "1.jpeg"
    },
    {
        title: "10 Ozuna ft Amarion - Tucu",
        file: "https://mp3teca.app/-/aac/96/103754_96.m4a",
        cover: "1.jpeg"

    },
    {
        title: "11 Farruko ft Gocho - Mi Mejor Canción",
        file: "https://mp3teca.app/-/aac/96/103744_96.m4a",
        cover: "1.jpeg"
    },{
        title: "12 Peso Pluma - Bye",
        file: "https://mp3teca.app/-/aac/96/103736_96.m4a",
        cover: "1.jpeg"

    },
    {
        title: "13 Farina - No Money No Pussy",
        file: "https://mp3teca.app/-/aac/96/103724_96.m4a",
        cover: "1.jpeg"
    },
    {
        title: "14 Mau y Ricky ft Reik ft Beéle - Manos Frías",
        file: "https://mp3teca.app/-/aac/96/103761_96.m4a",
        cover: "1.jpeg"

    },
    {
        title: "15 Darell ft Omar Courtz - Me Dice Daddy",
        file: "https://mp3teca.app/-/aac/96/103751_96.m4a",
        cover: "1.jpeg"
    },
    {
        title: "16 Vico C - Ella Va",
        file: "https://mp3teca.app/-/aac/96/103741_96.m4a",
        cover: "1.jpeg"

    },
    {
        title: "17 Myke Towers ft Tainy - Obstáculo",
        file: "https://mp3teca.app/-/aac/96/103730_96.m4a",
        cover: "1.jpeg"
    },
    {
        title: "18 Angel Dior ft Young Gatillo ft Viruz FL - Mollylandia",
        file: "https://mp3teca.app/-/aac/96/103721_96.m4a",
        cover: "1.jpeg"

    },
    {
        title: "19 C-Kan ft Al2 El Aldeano - Foto En La Pared",
        file: "https://mp3teca.app/-/aac/96/103718_96.m4a",
        cover: "1.jpeg"
    },{
        title: "20 Shakira ft Rauw Alejandro - Te Felicito",
        file: "https://mp3teca.app/-/aac/96/100273_96.m4a",
        cover: "1.jpeg"

    },
    {
        title: "21 Nicky Jam ft Feid - 69",
        file: "https://mp3teca.app/-/aac/96/103701_96.m4a",
        cover: "1.jpeg"
    },

]

// Canción actual
let actualSong = null

// Capturar elementos del DOM para trabajar con JS
const songs = document.getElementById("songs")
const audio = document.getElementById("audio")
const cover = document.getElementById("cover")
const title = document.getElementById("title")
const play = document.getElementById("play")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
progressContainer.addEventListener("click", setProgress)

// Escuchar el elemento AUDIO
audio.addEventListener("timeupdate", updateProgress)

// Escuchar clicks en los controles
play.addEventListener("click", () => {
    if (audio.paused) {
        playSong()   
    } else {
        pauseSong()
    }
})

next.addEventListener("click", () => nextSong())
prev.addEventListener("click", () => prevSong())

// Cargar canciones y mostrar el listado
function loadSongs() {
    songList.forEach((song, index) => {
        // Crear li
        const li = document.createElement("li")
        // Crear a
        const link = document.createElement("a")
        // Hidratar a
        link.textContent = song.title
        link.href = "#"
        // Escuchar clicks
        link.addEventListener("click", () => loadSong(index))
        // Añadir a li
        li.appendChild(link)
        // Aañadir li a ul
        songs.appendChild(li)
    })
}

// Capturar elementos del DOM para el buscador
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Escuchar evento de clic en el botón de búsqueda
searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredSongs = songList.filter(song => song.title.toLowerCase().includes(searchTerm));
    displayFilteredSongs(filteredSongs);
});

// Mostrar las canciones filtradas en la lista
function displayFilteredSongs(filteredSongs) {
    // Limpiar lista actual
    songs.innerHTML = "";

    // Volver a cargar las canciones filtradas
    filteredSongs.forEach((song, index) => {
        // Crear li
        const li = document.createElement("li");
        // Crear a
        const link = document.createElement("a");
        // Hidratar a
        link.textContent = song.title;
        link.href = "#";
        // Escuchar clics
        link.addEventListener("click", () => loadSong(index));
        // Añadir a li
        li.appendChild(link);
        // Añadir li a ul
        songs.appendChild(li);
    });
}

// Cargar canción seleccionada
function loadSong(songIndex) {
    if (songIndex !== actualSong) {
        changeActiveClass(actualSong, songIndex)
        actualSong = songIndex
        audio.src = songList[songIndex].file
        playSong()
        changeSongtitle(songIndex)
        changeCover(songIndex)
    }
}

// Actualizar barra de progreso de la canción
function updateProgress(event) {
    const {duration, currentTime} = event.srcElement
    const percent = (currentTime / duration) * 100
    progress.style.width = percent + "%" 
}

// Hacer la barra de progreso clicable
function setProgress(event) {
    const totalWidth = this.offsetWidth
    const progressWidth = event.offsetX
    const current = (progressWidth / totalWidth) * audio.duration
    audio.currentTime = current
}

// Actualiar controles
function updateControls() {
    if (audio.paused) {
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    } else {
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
    }
}

// Reproducir canción
function playSong() {
    if (actualSong !== null) {
        audio.play()
        updateControls()
    }
}

// Pausar canción
function pauseSong() {
    audio.pause()
    updateControls()
}

// Cambiar clase activa
function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a")
    if (lastIndex !== null) {
        links[lastIndex].classList.remove("active")
    }
    links[newIndex].classList.add("active")
}

// Cambiar el cover de la canción
function changeCover(songIndex) {
    cover.src = "./img/" + songList[songIndex].cover
}

// Cambiar el título de la canción
function changeSongtitle(songIndex) {
     title.innerText = songList[songIndex].title
}

// Anterior canción
function prevSong() {
    if (actualSong > 0) {
        loadSong(actualSong - 1)
    } else {
        loadSong(songList.length - 1)
    }
}

// Siguiente canción
function nextSong() {
    if (actualSong < songList.length -1) {
        loadSong(actualSong + 1)
    } else {
        loadSong(0)
    }
}

// Lanzar siguiente canción cuando se acaba la actual
audio.addEventListener("ended", () => nextSong())

// GO!
loadSongs()
