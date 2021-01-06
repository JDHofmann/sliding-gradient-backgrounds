// let scroll = document.getElementsByClassName("scroll");
let main = document.querySelector("main")
console.log(scroll)
// let state = true;

// const toggleClass = () => {
//     if( state === true ) {
//         scroll.classList.add("transition")
//         scroll.classList.add("two");
//         state = false
//         console.log(state)
//     } else {
//         scroll.classList.remove("transition")

//         scroll.classList.remove("two");
//         state = true
//         console.log(state)
//     }
// }

// const swipeRight = ( i=0) => {
//     console.log(`Swiping Right i: ${i}`)
//     scroll[i].classList.add("transition");
//     scroll[i].classList.add("two")
//     setTimeout( ()=>{
//         reset(i);
//     }, 2000)
//     setTimeout( ()=>{
//         i++;
//         swipeRight(i)
//     }, 1000)
// }

// const reset = (i) => {
//     console.log(`Resetting i: ${i}`)
//     scroll[i].classList.remove("transition");
//     scroll[i].classList.remove("two")
// }
let count = 0;
const swipeRight = () => {
    let stripe = document.createElement('div');
    stripe.classList.add("scroll")
    switch(count){
        case 0:
            console.log("0")
            break
        case 1:
        case 4:
            stripe.classList.add("red")
            break
        case 2:
        case 3:
            stripe.classList.add("orange")
            break
        case 5:
        case 7:
            stripe.classList.add("light-blue")
            break
        case 8:
            count = 0;
        default:
            console.log("default")
    }
    // if (count % 3 === 0){
    //     stripe.classList.add("red")
    // } else if ((count +1)% 3 === 0){
    //     
    // } else if (count % 5 === 0){
    //     stripe.classList.add("light-blue")
    // }
    main.append(stripe)
    setTimeout(()=> {
        stripe.classList.add("transition");
        stripe.classList.add("two");
        count++;
        swipeRight();
    }, 400)
    setTimeout(()=> {
        stripe.remove()
    }, 5000)
}


swipeRight()
// toggleClass();
// let myAnything = setInterval(toggleClass, 3000)
