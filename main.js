const btns = document.querySelectorAll('ul button');
const submit = document.getElementById('sbt');
const main = document.querySelector('.main');
const finalMsg = document.querySelector('.message');
const userRatingMsg = document.querySelector('.user-rating-msg');

btns.forEach(item => {
    item.addEventListener('click', () => {
        submit.setAttribute('name', item.textContent);
        console.log("Hello there");
    });
});

submit.addEventListener('click', () => {
    main.style.display = "none";
    finalMsg.classList.remove('msg-display');
    if(submit.getAttribute('name') !== null)
    userRatingMsg.textContent = `You selected ${submit.getAttribute('name')} out of 5`;
    else 
    userRatingMsg.textContent = `You selected 0 out of 5`;
});