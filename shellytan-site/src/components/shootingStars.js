function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function launchStar(el, opts = {}) {
  // pick random start in viewport-ish %
  const sx = opts.sx ?? rand(5, 85);
  const sy = opts.sy ?? rand(5, 85);

  // small travel distance (not full screen)
  const dx = opts.dx ?? rand(6, 16);  // vw
  const dy = opts.dy ?? rand(4, 12);  // vh

  const dur = opts.dur ?? rand(1.8, 4); // seconds
  const angle = opts.angle ?? rand(25, 45); // degrees
  const tail = opts.tail ?? rand(2, 3); // px per step

  el.style.setProperty("--sx", `${sx}vw`);
  el.style.setProperty("--sy", `${sy}vh`);
  el.style.setProperty("--dx", `${dx}vw`);
  el.style.setProperty("--dy", `${dy}vh`);
  el.style.setProperty("--dur", `${dur}s`);
  el.style.setProperty("--angle", `${angle}deg`);
  el.style.setProperty("--tail", `${tail}px`);

  // retrigger animation reliably
  el.classList.remove("is-active");
  // force reflow
  void el.offsetWidth;
  el.classList.add("is-active");

  // cleanup after animation
  window.setTimeout(() => el.classList.remove("is-active"), dur * 1000 + 50);
}

export function startShootingStars(root = document) {
  const stars = Array.from(root.querySelectorAll("#starry-sky .shooting-star:not(.shooting-star--big)"));
  const big = root.querySelector("#starry-sky .shooting-star--big");

  if (!stars.length || !big) return () => {};

  let stopped = false;

  function scheduleNext() {
    if (stopped) return;

    // random gap between events
    const gap = rand(700, 2200); // ms

    window.setTimeout(() => {
      if (stopped) return;

      // launch 1–2 small stars sometimes
      const count = Math.random() < 0.25 ? 2 : 1;
      for (let i = 0; i < count; i++) {
        const el = stars[Math.floor(Math.random() * stars.length)];
        launchStar(el);
      }

      // occasional big streak (~8% chance)
      if (Math.random() < 0.08) {
        launchStar(big, {
          dx: rand(18, 30),
          dy: rand(10, 18),
          dur: rand(1.6, 2.6),
          tail: rand(3, 4),
        });
      }

      scheduleNext();
    }, gap);
  }

  scheduleNext();

  // return stop function (useful for React cleanup)
  return () => { stopped = true; };
}