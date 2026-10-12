/* ==========================================================================
   Saranya GV portfolio: behaviour
   Edit SITE_CONFIG below. Nothing is shown on the page unless it is filled in.
   ========================================================================== */

const SITE_CONFIG = {
  // Where the contact form sends its message (opens the visitor's email app, prefilled).
  email: "saranyagv2004@gmail.com"
};

/* Case studies -------------------------------------------------------------
   "responsibilities" come straight from the resume. Context, objectives, workflow
   and indicators are contextual or proposed, and are labelled that way in the UI.
   Add real screenshots and verified results later by editing "results" and
   "screens" (see README). */
const CASES = {
  seo: {
    title: "SEO and website content",
    meta: "Walrus Yes India Can, Tiruppur. Aug 2025 – Present.",
    context: "Walrus Yes India Can is the business where Saranya works as Digital Marketing Executive & SEO Specialist. This preview covers the search-focused part of that role: blogs and website content written to be found, and the basic reporting that shows whether it is working.",
    objectives: [
      "Improve the website's visibility in organic search.",
      "Publish blogs and page content that match what people search for.",
      "Keep reporting simple enough to show what is working and what to change."
    ],
    responsibilities: [
      "Write SEO-friendly blogs and website content.",
      "Help improve website visibility and organic growth.",
      "Assist in reporting and basic analytics to track performance."
    ],
    techniques: ["Keyword research", "On-page SEO", "SEO content and blog writing", "Website optimisation"],
    tools: ["Google Search Console", "Google Analytics"],
    workflow: [
      "Choose a topic and a target keyword based on search intent.",
      "Draft the blog or page content around that intent.",
      "Apply on-page SEO to titles, headings and copy.",
      "Publish, then track in Search Console and Analytics.",
      "Review results and update the content where needed."
    ],
    indicators: ["Organic impressions and clicks", "Average position for target keywords", "Organic sessions", "Pages indexed", "Engagement on published blogs"],
    screens: ["Search Console performance screenshot", "Published blog or page example"]
  },

  ecommerce: {
    title: "E-commerce product-content optimisation",
    meta: "Avira Outfits, Tiruppur. Jan 2026 – July 2026.",
    context: "Online stores depend on product pages that are findable and clear. This preview covers the content side of that work on Shopify and WooCommerce websites during the Avira Outfits role.",
    objectives: [
      "Make product pages easier to find through keyword-focused content.",
      "Make product-page communication clearer for shoppers.",
      "Support customer engagement and online sales."
    ],
    responsibilities: [
      "Optimise Shopify and WooCommerce website and product content to support online visibility and customer engagement.",
      "Work on SEO-friendly content, keyword-focused optimisation, blogs and website content.",
      "Support product-page communication and e-commerce marketing.",
      "Work with Google Search Console and Google Analytics for website visibility."
    ],
    techniques: ["Keyword-focused optimisation", "Product-page communication", "Product and service branding", "SEO-friendly content"],
    tools: ["Shopify", "WooCommerce", "Google Search Console", "Google Analytics"],
    workflow: [
      "Review the product page and its current wording.",
      "Identify the keywords shoppers are likely to use.",
      "Rewrite product content for clarity and keyword focus.",
      "Update the page on Shopify or WooCommerce.",
      "Check visibility and engagement in Search Console and Analytics."
    ],
    indicators: ["Product-page impressions and clicks", "Organic sessions to product pages", "Add-to-cart rate", "Conversion rate", "Engagement on updated pages"],
    screens: ["Before and after product page", "Search Console data for product pages"]
  },

  ads: {
    title: "Google Ads and Meta Ads campaign support",
    meta: "Walrus Yes India Can and Avira Outfits, Tiruppur.",
    context: "Paid campaigns need steady setup, monitoring and reporting. This preview brings together the Google Ads and Meta Ads work from both marketing roles.",
    objectives: [
      "Reach the intended audience with clear, audience-focused messaging.",
      "Drive engagement and traffic to the website.",
      "Track campaign performance and report on it."
    ],
    responsibilities: [
      "Run and monitor Meta Ads and Google Ads campaigns (Walrus Yes India Can).",
      "Work with Google Ads and Meta Ads for website visibility and campaign support (Avira Outfits).",
      "Work with Meta Ads and Google Ads for reach, engagement, traffic and campaign performance.",
      "Assist in reporting and basic analytics to track performance."
    ],
    techniques: ["Campaign setup and monitoring", "Audience-focused messaging", "Paid advertising support", "Campaign reporting"],
    tools: ["Google Ads", "Meta Ads", "Google Analytics"],
    workflow: [
      "Agree the goal for the campaign, such as reach or traffic.",
      "Set up the campaign and write audience-focused ad messaging.",
      "Monitor the campaign while it runs.",
      "Report on performance with basic analytics.",
      "Adjust messaging or setup based on what the numbers show."
    ],
    indicators: ["Reach and impressions", "Click-through rate", "Cost per click", "Engagement", "Website traffic from ads", "Conversions, where tracking is set up"],
    screens: ["Ads dashboard overview (budgets can be hidden)", "Example ad creative"]
  },

  social: {
    title: "Social media content, reel scripts and brand communication",
    meta: "Avira Outfits and Walrus Yes India Can, Tiruppur.",
    context: "Consistent content is how a brand stays recognisable on social media. This preview covers planning, creating and scripting content across both marketing roles.",
    objectives: [
      "Keep content consistent in voice and presentation.",
      "Give video content a clear script and message.",
      "Position the brand or product clearly for its audience."
    ],
    responsibilities: [
      "Plan and create social media content, Instagram content, promotional creatives and marketing scripts (Avira Outfits).",
      "Support content creation for digital marketing and social media (Walrus Yes India Can).",
      "Write marketing scripts for reels, promotional videos, product and service content, and social media communication.",
      "Support personal branding, product and service branding, and consistent brand presentation."
    ],
    techniques: ["Content planning", "Script writing", "Audience-focused communication", "Social media positioning"],
    tools: ["Canva", "AI creative tools", "Instagram"],
    workflow: [
      "Plan the content around the brand message and audience.",
      "Write the caption or reel script.",
      "Design the creative in Canva, with AI creative tools where useful.",
      "Publish on Instagram or the chosen channel.",
      "Review how the content was received and refine the next batch."
    ],
    indicators: ["Reach and impressions", "Engagement rate", "Saves and shares", "Profile visits", "Reel views", "Clicks to the website"],
    screens: ["Instagram content examples", "Reel script excerpt"]
  }
};

(function () {
  "use strict";

  const doc = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  doc.classList.add("js");

  /* Year ------------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Header: scrolled state ------------------------------------------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile menu ------------------------------------------------------- */
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  const toggleLabel = toggle.querySelector(".menu-toggle__label");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggleLabel.textContent = open ? "Close" : "Menu";
  }
  toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); toggle.focus(); }
  });
  window.matchMedia("(min-width: 960px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });

  /* Smooth scrolling: CSS handles it; this just updates focus for keyboard users */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", () => {
      const id = a.getAttribute("href");
      const target = id.length > 1 ? document.querySelector(id) : null;
      if (target) {
        if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });
  });

  /* Active nav state ------------------------------------------------- */
  const navLinks = Array.from(document.querySelectorAll(".site-nav ul a"));
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach((a) => {
      const on = a.getAttribute("href") === "#" + id;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "location"); else a.removeAttribute("aria-current");
    });
  }
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
  }

  /* Scroll reveals ---------------------------------------------------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* Back to top ------------------------------------------------------- */
  document.getElementById("to-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    const brand = document.querySelector(".brand");
    if (brand) brand.focus({ preventScroll: true });
  });

  /* Case study modal -------------------------------------------------- */
  const modal = document.getElementById("case-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  let lastTrigger = null;

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function list(items, cls) {
    const ul = el("ul", cls || "m-list");
    items.forEach((t) => ul.append(el("li", null, t)));
    return ul;
  }
  function section(title, badgeText, badgeClass, content) {
    const s = el("section", "m-section");
    const h = el("h3", null, title);
    if (badgeText) h.append(el("span", "badge " + badgeClass, badgeText));
    s.append(h);
    [].concat(content).forEach((c) => s.append(c));
    return s;
  }

  function renderCase(c) {
    modalTitle.textContent = c.title;
    modalBody.replaceChildren();
    modalBody.append(el("p", "modal__meta", c.meta));

    modalBody.append(section("Context", "Contextual", "badge--ctx", el("p", null, c.context)));
    modalBody.append(section("Objectives", "Contextual, not documented targets", "badge--ctx", list(c.objectives)));
    modalBody.append(section("Responsibilities", "From the resume", "badge--doc", list(c.responsibilities)));

    const two = el("div", "m-two");
    const t = section("Techniques", "From the resume's skills", "badge--doc", list(c.techniques));
    const tl = section("Tools", "From the resume's skills", "badge--doc", list(c.tools));
    two.append(t, tl);
    modalBody.append(two);
    modalBody.append(el("p", "m-note", "Tools and techniques come from the resume's skills lists. Confirm which were used on this specific work before publishing."));

    modalBody.append(section("Workflow", "Proposed outline", "badge--ctx", list(c.workflow, "m-steps")));
    const kp = section("Performance indicators to track", "Proposed, not achieved results", "badge--ctx", list(c.indicators));
    modalBody.append(kp);

    const shots = el("div", "m-placeholders");
    c.screens.forEach((s) => shots.append(el("div", "placeholder", "Screenshot placeholder: " + s)));
    modalBody.append(section("Screenshots", null, "", shots));

    modalBody.append(section("Verified results", null, "",
      el("div", "placeholder", "No results published yet. Add figures here only after they have been verified.")));
  }

  function openCase(key, trigger) {
    const c = CASES[key];
    if (!c || typeof modal.showModal !== "function") return;
    lastTrigger = trigger;
    renderCase(c);
    modal.scrollTop = 0;
    modal.showModal();
    doc.classList.add("modal-open");
    document.getElementById("modal-close").focus();
  }
  function closeCase() { if (modal.open) modal.close(); }

  document.querySelectorAll("[data-case]").forEach((btn) => {
    btn.addEventListener("click", () => openCase(btn.dataset.case, btn));
  });
  document.getElementById("modal-close").addEventListener("click", closeCase);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeCase(); }); // backdrop click
  modal.addEventListener("keydown", (e) => { if (e.key === "Escape") { e.preventDefault(); closeCase(); } });
  modal.addEventListener("close", () => {
    doc.classList.remove("modal-open");
    if (lastTrigger) lastTrigger.focus();
  });

  /* Contact form ------------------------------------------------------ */
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const roleSelect = document.getElementById("cf-role");
  const rolePicker = document.querySelector(".role-picker");
  const roleTrigger = document.getElementById("cf-role-trigger");
  const roleValue = document.getElementById("cf-role-value");
  const roleLabel = document.getElementById("cf-role-label");
  const roleOptions = Array.from(rolePicker.querySelectorAll('[role="option"]'));
  let activeRoleIndex = -1;

  roleLabel.htmlFor = roleTrigger.id;
  roleSelect.tabIndex = -1;
  roleSelect.setAttribute("aria-hidden", "true");

  function syncRolePicker() {
    const selected = roleSelect.options[roleSelect.selectedIndex];
    roleValue.textContent = selected ? selected.textContent : "Choose one";
    roleOptions.forEach((option) => option.setAttribute("aria-selected", String(option.dataset.value === roleSelect.value)));
  }

  function setActiveRole(index) {
    activeRoleIndex = (index + roleOptions.length) % roleOptions.length;
    roleOptions.forEach((option, i) => option.classList.toggle("is-active", i === activeRoleIndex));
    roleTrigger.setAttribute("aria-activedescendant", roleOptions[activeRoleIndex].id);
    roleOptions[activeRoleIndex].scrollIntoView({ block: "nearest" });
  }

  function openRolePicker(preferLast = false) {
    rolePicker.classList.add("is-open");
    roleTrigger.setAttribute("aria-expanded", "true");
    const selectedIndex = roleOptions.findIndex((option) => option.dataset.value === roleSelect.value);
    setActiveRole(selectedIndex >= 0 ? selectedIndex : preferLast ? roleOptions.length - 1 : 0);
  }

  function closeRolePicker(restoreFocus = false) {
    rolePicker.classList.remove("is-open");
    roleTrigger.setAttribute("aria-expanded", "false");
    roleTrigger.removeAttribute("aria-activedescendant");
    activeRoleIndex = -1;
    if (restoreFocus) roleTrigger.focus();
  }

  function chooseRole(index) {
    if (index < 0 || index >= roleOptions.length) return;
    roleSelect.value = roleOptions[index].dataset.value;
    roleSelect.dispatchEvent(new Event("change", { bubbles: true }));
    closeRolePicker(true);
  }

  roleTrigger.addEventListener("click", () => {
    if (rolePicker.classList.contains("is-open")) closeRolePicker();
    else openRolePicker();
  });
  roleTrigger.addEventListener("keydown", (event) => {
    const isOpen = rolePicker.classList.contains("is-open");
    if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      closeRolePicker();
    } else if (event.key === "Tab") {
      closeRolePicker();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!isOpen) openRolePicker(event.key === "ArrowUp");
      else setActiveRole(activeRoleIndex + (event.key === "ArrowDown" ? 1 : -1));
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      if (!isOpen) openRolePicker(event.key === "End");
      else setActiveRole(event.key === "Home" ? 0 : roleOptions.length - 1);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (isOpen) chooseRole(activeRoleIndex);
      else openRolePicker();
    }
  });
  roleOptions.forEach((option, index) => {
    option.addEventListener("pointerenter", () => setActiveRole(index));
    option.addEventListener("click", () => chooseRole(index));
  });
  document.addEventListener("pointerdown", (event) => {
    if (!rolePicker.contains(event.target)) closeRolePicker();
  });
  roleTrigger.addEventListener("blur", () => validateField(roleSelect));
  form.addEventListener("reset", () => window.setTimeout(() => {
    closeRolePicker();
    syncRolePicker();
    roleTrigger.removeAttribute("aria-invalid");
    document.getElementById("cf-role-err").textContent = "";
  }, 0));
  syncRolePicker();

  const rules = {
    name: (v) => (v.trim().length < 2 ? "Enter your name." : ""),
    email: (v) => (!v.trim() ? "Enter your email address." : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "Enter a valid email address, like name@example.com." : ""),
    role: (v) => (!v ? "Choose how you're reaching out." : ""),
    message: (v) => (v.trim().length < 20 ? "Write at least 20 characters so Saranya has enough to reply to." : "")
  };

  function validateField(field) {
    const err = document.getElementById(field.id + "-err");
    const msg = rules[field.name](field.value);
    err.textContent = msg;
    field.setAttribute("aria-invalid", msg ? "true" : "false");
    if (field.name === "role") roleTrigger.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  }

  Array.from(form.elements).filter((f) => rules[f.name]).forEach((f) => {
    f.addEventListener("blur", () => validateField(f));
    f.addEventListener("input", () => { if (f.getAttribute("aria-invalid") === "true") validateField(f); });
    f.addEventListener("change", () => {
      if (f.name === "role") syncRolePicker();
      if (f.getAttribute("aria-invalid") === "true") validateField(f);
    });
  });

  function showStatus(msg, isError, extra) {
    status.replaceChildren();
    status.className = "form-status" + (isError ? " is-error" : "");
    status.append(el("p", null, msg));
    if (extra) status.append(extra);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = Array.from(form.elements).filter((f) => rules[f.name]);
    const results = fields.map(validateField);
    if (results.includes(false)) {
      const invalidField = fields[results.indexOf(false)];
      (invalidField.name === "role" ? roleTrigger : invalidField).focus();
      showStatus("Fix the highlighted fields and try again.", true);
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    const to = SITE_CONFIG.email;
    const subject = "Portfolio enquiry from " + data.name;
    const body = data.message + "\n\n" + data.name + "\n" + data.email + "\nReaching out as: " + data.role;
    const gmail = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(to) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    const sendBtn = form.querySelector('button[type="submit"]');
    sendBtn.classList.add("is-sending");
    window.setTimeout(() => sendBtn.classList.remove("is-sending"), 1000);

    // Opens the visitor's email app with the form data filled in, addressed to Saranya
    const a = document.createElement("a");
    a.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    document.body.append(a); a.click(); a.remove();

    const extra = el("div", "form-fallback");
    const g = el("a", "btn btn--ghost btn--small", "Open in Gmail instead");
    g.href = gmail; g.target = "_blank"; g.rel = "noopener noreferrer";
    const copy = el("button", "btn btn--ghost btn--small", "Copy message");
    copy.type = "button";
    copy.addEventListener("click", () => {
      if (navigator.clipboard) navigator.clipboard.writeText(body).then(() => { copy.textContent = "Copied"; });
    });
    extra.append(g, copy);
    showStatus("Your email app should open with your message ready to send to Saranya. Press send there to deliver it. If nothing opened, use Gmail or copy the message.", false, extra);
  });
})();
