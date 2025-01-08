export default function decorate(block) {
  // Clear the block's existing content
  block.innerHTML = `
    <div id="countdown-container" class="countdown-container">
      <div class="countdown-content">
        <div class="countdown-text-content">
          <div>
            <p class="countdown-first-title">NEXT WEBINAR</p>
            <p class="countdown-title">EVENT NAME it amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            <p class="countdown-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
          </div>
          <div class="date" id="date-container"></div>
          <div id="timer" class="countdown-timer">
            <div class="time-unit">
              <div class="square" id="days"></div>
              <span>Days</span>
            </div>
            <div class="time-unit">
              <div class="square" id="hours"></div>
              <span>Hours</span>
            </div>
            <div class="time-unit">
              <div class="square" id="minutes"></div>
              <span>Minutes</span>
            </div>
            <div class="time-unit">
              <div class="square" id="seconds"></div>
              <span>Seconds</span>
            </div>
          </div>
        </div>
        <div class="countdown-buttons">
          <button class="btn login-btn"></button>
          <button class="btn register-btn"></button>
        </div>
      </div>
    </div>
  `;

  // Utility function for formatted date
  function getFormattedDate() {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return now.toLocaleDateString(undefined, options);
  }

  // Utility function for updating the countdown
  function updateCountdown(targetDate) {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return { ended: true };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      ended: false,
    };
  }

  // Display the current date
  const dateContainer = block.querySelector('#date-container');
  dateContainer.innerText = getFormattedDate();

  // Countdown timer setup
  const targetDate = new Date('2025-01-15T24:00:00').getTime();

  // Function to update the countdown and display it
  function updateCountdownDisplay() {
    const result = updateCountdown(targetDate);

    if (result.ended) {
      block.querySelector('#timer').innerHTML = '<p>Countdown Ended!</p>';
      return;
    }

    block.querySelector('#days').innerText = result.days;
    block.querySelector('#hours').innerText = result.hours;
    block.querySelector('#minutes').innerText = result.minutes;
    block.querySelector('#seconds').innerText = result.seconds;
  }

  // Update countdown every second
  setInterval(updateCountdownDisplay, 1000);
}
