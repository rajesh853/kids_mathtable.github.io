//math table
let numberEL = document.querySelector('#req-num');
numberEL.addEventListener('keyup',function () {
    let theNumber = numberEL.value;
    document.querySelector('#number').innerText = theNumber;
    calculate();
});

let rangeEl = document.querySelector('#Multiplier');
rangeEl.addEventListener('input',function () {
    let selectedMultiplier = rangeEl.value;
    document.querySelector('#multiple').innerText = selectedMultiplier;
    calculate();
});

let calculate = () => {
     let theNumber = Number(document.querySelector('#number').innerText );
    let Multiplier = Number(document.querySelector('#multiple').innerText);
    let mathResult = theNumber * Multiplier;
    document.querySelector('#result').innerText = mathResult;
};