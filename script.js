(() => {
  const timeNode = document.getElementById("time");
  const dateNode = document.getElementById("date");
  const yearNode = document.getElementById("year");

  const zone = "Asia/Jakarta";

  const timeFormat = new Intl.DateTimeFormat("id-ID", {
    timeZone: zone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  });

  const dateFormat = new Intl.DateTimeFormat("id-ID", {
    timeZone: zone,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const yearFormat = new Intl.DateTimeFormat("id-ID", {
    timeZone: zone,
    year: "numeric"
  });

  function tick() {
    const now = new Date();

    timeNode.textContent = timeFormat.format(now);
    dateNode.textContent = dateFormat.format(now);
    yearNode.textContent = yearFormat.format(now);
  }

  tick();
  setInterval(tick, 1000);
})();