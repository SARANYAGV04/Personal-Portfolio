/* Storytelling animations. Works alongside script.js; respects reduced motion. */
(function () {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  /* Staggered children */
  ["#home .snapshot__grid > div", ".about-points article", ".tags li", ".job__list li", ".philosophy__text dl > div", ".skill-groups > div", ".learning__list li", ".contact-list li"].forEach((sel) => {
    $$(sel).forEach((n, i) => {
      const parent = n.parentElement;
      const idx = Array.from(parent.children).indexOf(n);
      n.classList.add("stg"); n.style.setProperty("--i", idx);
    });
  });
  $$(".cases .case").forEach((c, i) => c.style.setProperty("--d", i * 0.12 + "s"));
  $$(".overlap__row .bar").forEach((b, i) => b.style.setProperty("--i", i));

  /* Headline words */
  const titles = $$(".hero h1, main h2");
  if (!reduce) titles.forEach((h) => {
    const words = h.textContent.trim().split(/\s+/);
    h.replaceChildren();
    words.forEach((w, i) => {
      const o = document.createElement("span"), n = document.createElement("span");
      o.className = "w" + (h.closest(".hero") && i === words.length - 1 ? " hl" : "");
      o.style.setProperty("--wi", i); n.textContent = w; o.append(n);
      h.append(o); if (i < words.length - 1) h.append(" ");
    });
  });
  requestAnimationFrame(() => setTimeout(() => $$(".hero h1").forEach((h) => h.classList.add("words-in")), 150));

  const watch = $$(".overlap, .job, main h2");
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      const t = e.target;
      if (t.matches("h2")) t.classList.add("words-in");
      else t.classList.add("is-visible");
      io.unobserve(t);
    }), { threshold: 0.35 });
    watch.forEach((n) => io.observe(n));
  } else {
    watch.forEach((n) => { n.classList.add("is-visible", "words-in"); const s = n.querySelector && n.querySelector("svg"); if (s) s.classList.add("is-visible"); if (n.tagName === "svg") n.classList.add("is-visible"); });
  }

  /* Scroll progress and growing timeline */
  const bar = document.createElement("div");
  bar.className = "scroll-progress"; bar.setAttribute("aria-hidden", "true");
  document.body.prepend(bar);
  const timeline = document.querySelector(".timeline");
  let ticking = false;
  function update() {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.setProperty("--sp", max > 0 ? Math.min(window.scrollY / max, 1).toFixed(4) : 0);
    if (timeline) {
      const r = timeline.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (window.innerHeight * 0.7 - r.top) / r.height));
      timeline.style.setProperty("--p", p.toFixed(4));
    }
  }
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener("resize", update);
  update();

  /* Pointer effects: hero parallax and magnetic primary buttons */
  if (!reduce && window.matchMedia("(pointer: fine)").matches) {
    const hv = document.querySelector(".hero-visual");
    document.querySelector(".hero").addEventListener("pointermove", (e) => {
      const r = hv.getBoundingClientRect();
      hv.style.setProperty("--mx", (((e.clientX - r.left) / r.width - 0.5) * 2).toFixed(3));
      hv.style.setProperty("--my", (((e.clientY - r.top) / r.height - 0.5) * 2).toFixed(3));
    });
    $$(".btn--primary").forEach((b) => {
      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.translate = ((e.clientX - r.left - r.width / 2) * 0.12) + "px " + ((e.clientY - r.top - r.height / 2) * 0.18) + "px";
      });
      b.addEventListener("pointerleave", () => { b.style.translate = ""; });
    });
  }
})();
