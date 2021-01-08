
let main = document.querySelector("main")

let count = 0;
const swipeRight = () => {
    let stripe = document.createElement('div');
    stripe.classList.add("scroll")
    switch(count){
        case 0:
            console.log("0")
            break
        case 1:
            stripe.classList.add("one")
            break
        case 2:
            stripe.classList.add("two")
            break  
        case 3:
            stripe.classList.add("three")
            break
        case 4:
            stripe.classList.add("four")
            break
        case 5:
            stripe.classList.add("three")
            break
        case 6:
            stripe.classList.add("two")
            break
        case 7:
            stripe.classList.add("one")
            count = -1
            break
        default:
            console.log("default")
    }

    main.append(stripe)
    setTimeout(()=> {
        stripe.classList.add("transition");
        stripe.classList.add("end");
        count++;
        swipeRight();
    }, 200)
    setTimeout(()=> {
        stripe.remove()
    }, 4000)
}


swipeRight();