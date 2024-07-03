function toggleMode() {
  const body = document.body;
  const header = document.querySelector('header');
  const goals = document.querySelectorAll('.goal');
  const footer = document.querySelector('footer');
  body.classList.toggle('light-mode');
  header.classList.toggle('light-mode');
  goals.forEach((goal) => goal.classList.toggle('light-mode'));
  footer.classList.toggle('light-mode');
}

document.addEventListener('DOMContentLoaded', function () {
  function updateTime() {
    const currentTimeUTC = new Date()
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    document.getElementById('current-time-utc').textContent =
      currentTimeUTC + ' UTC';
  }

  function updateDay() {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const currentDay = days[new Date().getUTCDay()];
    document.getElementById('current-day').textContent = currentDay;
  }

  updateTime();
  updateDay();
  setInterval(updateTime, 1000);
});
