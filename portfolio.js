"use strict";

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function link(label, href) {
  const node = element("a", label);
  node.href = href;
  return node;
}

function addLinks(container, links) {
  if (!links.length) return;
  links.forEach(({ label, href }) => container.append(link(label, href)));
  container.hidden = false;
}

function addTextSection(container, title, text) {
  if (!text.trim()) return;
  container.append(element("h4", title), element("p", text));
}

function renderProject(project) {
  const article = element("article", "", "project");
  article.id = project.id;
  const heading = element("header", "", "project-heading");
  heading.append(element("h3", project.title));
  if (project.course) heading.append(element("p", project.course, "course"));
  article.append(heading);

  const body = element("div", "", "project-body");
  addTextSection(body, "Project Overview", project.summary);
  if (project.design.length) {
    body.append(element("h4", "System Design"));
    project.design.forEach((paragraph) => body.append(element("p", paragraph)));
  }

  if (project.figures.length) {
    body.append(element("h4", project.figureHeading || "Figures"));
    const figures = element("div", "", "figures");
    project.figures.forEach(({ src, alt, caption }) => {
      const figure = element("figure");
      const image = element("img");
      image.src = src;
      image.alt = alt;
      figure.append(image);
      if (caption) figure.append(element("figcaption", caption));
      figures.append(figure);
    });
    body.append(figures);
  }

  addTextSection(body, "Results", project.results);

  const links = element("p", "", "project-links");
  addLinks(links, project.links);
  if (links.childElementCount) body.append(links);

  if (body.childElementCount) article.append(body);
  return article;
}

const contents = document.querySelector("#contents");
const projects = document.querySelector("#projects");
let projectsWithDetails = 0;

document.querySelector("#site-name").textContent = portfolio.name;
document.title = "Engineering Portfolio | " + portfolio.name;
document.querySelector("#affiliation").textContent = portfolio.affiliation;
if (portfolio.biography.trim()) {
  const biography = document.querySelector("#biography");
  biography.textContent = portfolio.biography;
  biography.hidden = false;
}
addLinks(document.querySelector("#profile-links"), portfolio.links);

for (const group of portfolio.groups) {
  const label = element("h3", group.title, "contents-group");
  const links = element("ul");
  const section = element("section", "", "project-group");
  section.id = group.id;
  section.append(element("h2", group.title));

  for (const project of group.projects) {
    const item = element("li");
    item.append(link(project.title, "#" + project.id));
    links.append(item);
    const article = renderProject(project);
    if (article.querySelector(".project-body")) projectsWithDetails += 1;
    section.append(article);
  }
  contents.append(label, links);
  projects.append(section);
}
contents.hidden = false;
document.querySelector("#draft-note").hidden = projectsWithDetails > 0;

const printButton = document.querySelector("#print-portfolio");
printButton.hidden = false;
printButton.addEventListener("click", () => window.print());

if (window.location.hash) {
  // Project anchors are inserted by this script, including on direct links from elsewhere.
  const target = document.getElementById(window.location.hash.slice(1));
  if (target) requestAnimationFrame(() => target.scrollIntoView());
}
