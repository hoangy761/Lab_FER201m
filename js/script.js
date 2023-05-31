


let closeButtons = document.querySelectorAll('.close_button')
formModal = document.querySelector('.form_Modal')
button_targets = document.querySelectorAll('.button_target')


button_targets.forEach(function (clickTarget) {
    clickTarget.addEventListener('click', function () {
        nameIdTarget = clickTarget.getAttribute('target_id')

        idTarget = document.getElementById(nameIdTarget)
        idTarget.style.display = "block"

        closeButtons.forEach(function (close) {
            close.onclick = function () {
                idTarget.style.display = "none";
            }
        })

        window.onclick = function (event) {
            if (event.target == idTarget) {
                idTarget.style.display = "none";
            }
        }
    })
})




