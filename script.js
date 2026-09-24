/* =========================================
   ANNIVERSARY WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   CHANGE YOUR PASSWORD HERE
========================================= */

const SECRET_PASSWORD = "092623";


/*
   Change the password above.

   Example:

   const SECRET_PASSWORD = "ourlove";

   The password is case-sensitive.
*/


/* =========================================
   SMOOTH SCROLL
========================================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================
   MEMORY MODAL
========================================= */

function openMemory(title, description, image) {

    const modal = document.getElementById("memoryModal");

    const modalTitle = document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalImage =
        document.getElementById("modalImage");


    modalTitle.textContent = title;

    modalDescription.textContent = description;

    modalImage.src = image;


    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================
   CLOSE MEMORY
========================================= */

function closeMemory() {

    const modal =
        document.getElementById("memoryModal");

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================================
   PHOTO MODAL
========================================= */

function openPhoto(title, image) {

    const modal =
        document.getElementById("photoModal");

    const modalImage =
        document.getElementById("photoModalImage");

    const modalTitle =
        document.getElementById("photoModalTitle");


    modalImage.src = image;

    modalTitle.textContent = title;


    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================
   CLOSE PHOTO
========================================= */

function closePhoto() {

    const modal =
        document.getElementById("photoModal");

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================================
   PASSWORD ENTER KEY
========================================= */

function checkEnter(event) {

    if (event.key === "Enter") {

        unlockMessage();

    }

}


/* =========================================
   UNLOCK PRIVATE MESSAGE
========================================= */

function unlockMessage() {

    const input =
        document.getElementById("passwordInput");

    const error =
        document.getElementById("passwordError");

    const privateMessage =
        document.getElementById("privateMessage");


    const password =
        input.value.trim();


    if (password === SECRET_PASSWORD) {

        error.textContent =
            "Unlocked ❤️";


        error.style.color =
            "#ffd7e3";


        privateMessage.classList.remove("hidden");


        setTimeout(() => {

            privateMessage.scrollIntoView({
                behavior: "smooth"
            });

        }, 300);


        createHeartExplosion();


    } else {

        error.textContent =
            "Hmm... that's not our secret. Try again ❤️";


        input.value = "";


        input.focus();


        shakeInput();

    }

}


/* =========================================
   SHAKE PASSWORD INPUT
========================================= */

function shakeInput() {

    const input =
        document.getElementById("passwordInput");


    input.style.animation =
        "shake 0.4s";


    setTimeout(() => {

        input.style.animation = "";

    }, 400);

}


/* =========================================
   FINAL SURPRISE
========================================= */

function openFinalSurprise() {

    const surprise =
        document.getElementById("finalSurprise");


    surprise.classList.remove("hidden");


    setTimeout(() => {

        surprise.scrollIntoView({
            behavior: "smooth"
        });

    }, 200);


    createHeartExplosion();

    createHeartExplosion();

}


/* =========================================
   MUSIC
========================================= */

let musicPlaying = false;


function toggleMusic() {

    const music =
        document.getElementById("backgroundMusic");

    const button =
        document.getElementById("musicButton");


    if (!musicPlaying) {

        music.play()
            .then(() => {

                musicPlaying = true;

                button.textContent = "🔊";

            })
            .catch(() => {

                alert(
                    "Please interact with the page first before playing the music."
                );

            });

    } else {

        music.pause();

        musicPlaying = false;

        button.textContent = "🎵";

    }

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.className = "heart";


    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💘"
    ];


    heart.textContent =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (Math.random() * 20 + 12) + "px";


    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


/* Create hearts regularly */

setInterval(createHeart, 1200);


/* =========================================
   HEART EXPLOSION
========================================= */

function createHeartExplosion() {

    const numberOfHearts = 30;


    for (
        let i = 0;
        i < numberOfHearts;
        i++
    ) {

        setTimeout(() => {

            const heart =
                document.createElement("div");


            heart.className = "heart";


            heart.textContent = "❤️";


            heart.style.left =
                Math.random() * 100 + "vw";


            heart.style.fontSize =
                (Math.random() * 25 + 15) + "px";


            heart.style.animationDuration =
                (Math.random() * 3 + 3) + "s";


            document.body.appendChild(heart);


            setTimeout(() => {

                heart.remove();

            }, 6000);

        }, i * 70);

    }

}


/* =========================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
========================================= */

window.addEventListener("click", function(event) {

    const memoryModal =
        document.getElementById("memoryModal");

    const photoModal =
        document.getElementById("photoModal");


    if (event.target === memoryModal) {

        closeMemory();

    }


    if (event.target === photoModal) {

        closePhoto();

    }

});


/* =========================================
   ESCAPE KEY CLOSES MODALS
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeMemory();

        closePhoto();

    }

});


/* =========================================
   EXTRA CSS ANIMATION
========================================= */

const style =
    document.createElement("style");


style.innerHTML = `

@keyframes shake {

    0%, 100% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-8px);
    }

    50% {
        transform: translateX(8px);
    }

    75% {
        transform: translateX(-8px);
    }

}

`;


document.head.appendChild(style);