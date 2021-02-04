class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      daysValue: document.querySelector('span[data-value="days"]'),
      hoursValue: document.querySelector('span[data-value="hours"]'),
      minsValue: document.querySelector('span[data-value="mins"]'),
      secsValue: document.querySelector('span[data-value="secs"]'),
    };
  }
  start() {
    this.idTimer = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate.getTime() - currentTime;

      this.updateTimer(deltaTime);
      if (deltaTime <= 0) {
        clearInterval(this.idTimer);
      }
    }, 1000);
  }

  updateTimer = function (time) {
    if (time < 0) {
      time = 0;
    }
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.valueTimer(days, hours, mins, secs);
  };
  valueTimer(days, hours, mins, secs) {
    this.refs.daysValue.textContent = `${days}`;
    this.refs.hoursValue.textContent = `${hours}`;
    this.refs.minsValue.textContent = `${mins}`;
    this.refs.secsValue.textContent = `${secs}`;
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});

timer.start();
