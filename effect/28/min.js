const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const counter = document.querySelector(".counter");
const totalCount = counter.querySelector("p")
let positionPlus;
let number = 0;
let timer;

totalCount.innerHTML = number;

counter.addEventListener("mousemove", (event) => {
    const position = counter.getBoundingClientRect();
    const x = event.pageX - position.left - position.width / 2;

    positionPlus = (x * .02).toFixed(2);
    console.log(positionPlus)

    if (number == 0 && positionPlus < 0) {
        positionPlus = (x * .01).toFixed(2);
    }

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
        if (positionPlus > 0.65) {
            number++
            totalCount.innerHTML = number;
        } else if (positionPlus < -0.65 && number != 0) {
            number--
            totalCount.innerHTML = number;
        }
    }, 30);



    counter.style.transform = `translateX(${positionPlus}em)`;
});

counter.addEventListener("mouseout", () => {
    counter.style.transform = `translateX(0px)`;
    counter.style.transition = ".3s cubic-bezier(0.2, 0.70, 0.1, 1.80)"
});
