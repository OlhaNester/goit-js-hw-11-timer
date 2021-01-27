new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});

const refs = {
  daysValue: document.querySelector('span[data-value="days"]'),
  hoursValue: document.querySelector('span[data-value="hours"]'),
  minsValue: document.querySelector('span[data-value="mins"]'),
  secsValue: document.querySelector('span[data-value="secs"]'),
};
// const targetDate = CountdownTimer.targetDate.getTime();

const targetDate = new Date("Jul 17, 2021").getTime();

setInterval(() => {
  const currentTime = Date.now();
  const deltaTime = targetDate - currentTime;
  updateTimer(deltaTime);
}, 1000);

const updateTimer = function (time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.daysValue.textContent = `${days}`;
  refs.hoursValue.textContent = `${hours}`;
  refs.minsValue.textContent = `${mins}`;
  refs.secsValue.textContent = `${secs}`;
};

function pad(value) {
  return String(value).padStart(2, "0");
}
