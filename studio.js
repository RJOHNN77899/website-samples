// Your web design business, shown as "Website by ..." in the footer of every sample site
// and on the portfolio page. Fill in the name (and a link, if you have one) and publish.
// While the name is empty, the line stays hidden.
const STUDIO = {
  name: "",
  url: ""
};

(() => {
  const name = STUDIO.name.trim();
  if (!name) return;
  document.querySelectorAll("[data-studio-credit]").forEach(el => {
    el.textContent = "Website by ";
    const who = document.createElement(STUDIO.url ? "a" : "strong");
    who.textContent = name;
    if (STUDIO.url) who.href = STUDIO.url;
    el.append(who);
    el.hidden = false;
  });
  document.querySelectorAll("[data-studio-name]").forEach(el => {
    el.textContent = name;
    el.hidden = false;
  });
})();
