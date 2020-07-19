function mySetInterVal(fn, a, b) {
  let stop = false;
  const clear = () => {
    stop = true;
  }
  const doAction = (count) => {
    setTimeout(() => {
      if (stop) {
        return;
      }
      fn();
      doAction(++count);
    }, a + count * b);
  };

  doAction(0);

  return {
    clear
  };
}

function myClear(timerHandler) {
  timerHandler.clear();
}
const date = +new Date();
const timer = mySetInterVal(() => {
  console.log(+new Date() - date);
}, 1000, 500);

setTimeout(() => {
  myClear(timer);
}, 5000);
// myClear(timer);

