
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
            stripe.classList.add("yellow")
            break
        case 2:
            stripe.classList.add("orange")
            break  
        case 3:
            stripe.classList.add("red")
            break
        case 4:
            stripe.classList.add("pink")
            break
        case 5:
            stripe.classList.add("magenta")
            break
        case 6:
            stripe.classList.add("blue")
            break
        case 7:
            stripe.classList.add("turq")
            break
        case 8:
            stripe.classList.add("greenish")
            break
        case 9:
            stripe.classList.add("green")
            count = 0
            break
        default:
            console.log("default")
    }

    main.append(stripe)
    setTimeout(()=> {
        stripe.classList.add("transition");
        stripe.classList.add("two");
        count++;
        swipeRight();
    }, 200)
    setTimeout(()=> {
        stripe.remove()
    }, 5000)
}


swipeRight()