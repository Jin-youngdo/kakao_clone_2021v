var clock = document.querySelector(".clock");

function getTime() {
  const time = new Date();

  const hour = time.getHours();
  const minute = time.getMinutes();

  clock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }`;
}

function init() {
  setInterval(getTime, 1000);
}

init();
