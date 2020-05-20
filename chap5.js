let ipt = docment.querySelector(`input`);
let btn = docment.querySelector(`button`);
let elem = docment.querySelector(`p`);

btn.addEventListener(`click`, () => {
  elem.innerText = ipt.value;
};);
