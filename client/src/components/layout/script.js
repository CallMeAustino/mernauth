const counter = document.querySelector("#counter");
const speed = 200;

const updateCount = () => {
    const target = counter.getAttribute('data-target');
    console.log(target);
}