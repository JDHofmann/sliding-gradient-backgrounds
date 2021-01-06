let scroll = document.querySelector(".scroll");

let state = true;

const toggleClass = () => {
    if( state === true ) {
        scroll.classList.add("transition")
        scroll.classList.add("two");
        state = false
        console.log(state)
    } else {
        scroll.classList.remove("transition")

        scroll.classList.remove("two");
        state = true
        console.log(state)
    }
}


toggleClass();
let myAnything = setInterval(toggleClass, 3000)
