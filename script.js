let scroll = document.querySelector(".scroll");

let state = true;

const toggleClass = () => {
    if( state === true ) {
        scroll.classList.add("two");
        state = false
        console.log(state)
    } else {
        scroll.classList.remove("two");
        state = true
        console.log(state)
    }
}



let myAnything = setInterval(toggleClass, 2000)
