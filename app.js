document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino');

    function control(e) {
        if (e.keyCode === 32) {
            jump();

        }
    }

    document.addEventListener('keyup', control)

    function jump() {
        let position = 0;
        let timerId = setInterval(function () {

            // Move Up
            position += 30;
            dino.style.bottom = position + 'px'

            // Move Down
            if (position === 150) {
                clearInterval(timerId)

                let downTimerId = setInterval(function () {
                    position -= 30;
                    dino.style.bottom = position + 'px'

                    if (position === 0) {
                        clearInterval(downTimerId)
                        dino.style.bottom = '0px'
                    }
                }, 20)

            }

        }, 20)

    }



})