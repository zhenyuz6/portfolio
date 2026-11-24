"use strict";
const node = (tag, text, cls) => {
  const n = document.createElement(tag);
  if (text) n.textContent = text;
  if (cls) n.className = cls;
  return n;
};
const anchor = (label, href, cls) => {
  const a = node('a', label, cls); a.href = href; return a;
};
const allProjects = portfolio.groups.flatMap(group => group.projects.map(p => ({...p, group:group.title})));
const dialog = document.querySelector('#image-dialog');
function figure(data, className='') {
  const f = node('figure', '', className);
  const a = anchor('', data.src, 'image-link');
  a.setAttribute('aria-label', 'Enlarge image: '+data.alt);
  const img = node('img'); img.src = data.src; img.alt = data.alt;
  img.decoding = 'async'; a.append(img);
  a.addEventListener('click', e => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || !dialog.showModal) return;
    e.preventDefault();
    const display = document.querySelector('#dialog-image');
    display.src = data.src; display.alt = data.alt;
    document.querySelector('#dialog-caption').textContent = data.caption || '';
    document.querySelector('#original-image').href = data.src;
    dialog.showModal();
  });
  f.append(a);
  if (data.caption) f.append(node('figcaption',data.caption));
  return f;
}
function renderProject(p, i) {
  const article = node('article','','project project--'+p.id); article.id=p.id;
  const running=node('div','','page-running print-only');
  running.append(node('span',portfolio.name+' · Engineering portfolio'),node('span',p.category));
  const header=node('header','','project-header');
  const meta=node('div','','project-meta');meta.append(node('p',p.category,'eyebrow'),node('p',p.course,'project-course'));
  header.append(meta,node('h2',p.title),node('p',p.summary,'project-summary'));
  const tags=node('ul','','tags');p.tags.forEach(t=>tags.append(node('li',t)));header.append(tags);
  const metrics=node('dl','','metrics');
  p.metrics.forEach(([value,label])=>{const d=node('div');d.append(node('dt',value),node('dd',label));metrics.append(d);});
  const evidence=node('div','','evidence evidence--'+p.id);
  p.primary.forEach((index,j)=>evidence.append(figure(p.figures[index],'evidence-item evidence-item-'+j)));
  const methods=node('section','','methods');
  methods.append(node('h3','How it works','eyebrow'));
  const methodcols=node('div','','method-columns');p.design.forEach(t=>methodcols.append(node('p',t)));methods.append(methodcols);
  const result=node('section','','result');result.append(node('h3','Results & current status','eyebrow'),node('p',p.results));
  article.append(running,header,metrics,evidence);
  if(p.diagram){
    const image=node('img','','workflow-image');image.src=p.diagram;image.alt=p.shortTitle+' system workflow';
    article.append(image);
  }
  article.append(methods,result);
  const insight=node('aside','','design-note');insight.append(node('h3','Design insight'),node('p',p.insight));article.append(insight);
  const extras=p.figures.filter((_,j)=>!p.primary.includes(j));
  if(extras.length){
    const details=node('details','','additional-evidence screen-only');
    details.append(node('summary','Additional project images ('+extras.length+')'));
    const gallery=node('div','','additional-gallery');extras.forEach(f=>gallery.append(figure(f)));details.append(gallery);article.append(details);
  }
  if(p.links.length){
    const links=node('p','','project-links screen-only');p.links.forEach(l=>links.append(anchor(l.label,l.href)));article.append(links);
  }
  const footer=node('footer','','page-footer print-only');
  footer.append(anchor('zhenyuz6.github.io/portfolio/#'+p.id,portfolio.url+'#'+p.id),node('span',String(i+2).padStart(2,'0')));article.append(footer);
  return article;
}
document.querySelector('#biography').textContent=portfolio.biography;
document.querySelector('#edition').textContent=portfolio.edition;
const indexGrid=document.querySelector('#index-grid');
const printIndex=document.querySelector('#print-index');
const indexList=node('ol');
const contents=document.querySelector('#contents');
const list=document.querySelector('#project-list');
allProjects.forEach((p,i)=>{
  const tile=anchor('','#'+p.id,'index-card index-card--'+p.id);
  const im=node('img');im.src=p.figures[p.primary[0]].src;im.alt=p.figures[p.primary[0]].alt;im.loading='lazy';
  const text=node('div','','index-card-copy');text.append(node('p',p.category,'eyebrow'),node('h3',p.shortTitle),node('p',p.tags.join(' · '),'card-tags'));
  tile.append(im,text);indexGrid.append(tile);
  const li=node('li');li.append(anchor(p.shortTitle,'#'+p.id),node('span',String(i+2).padStart(2,'0')));indexList.append(li);
  const nav=anchor(p.shortTitle,'#'+p.id);nav.dataset.projectId=p.id;contents.append(nav);
  list.append(renderProject(p,i));
});
printIndex.append(indexList);
document.querySelector('#print-portfolio').addEventListener('click',async()=>{
  // Print from a fully loaded document, including images inside collapsed galleries.
  await Promise.all([...document.images].map(img => img.complete ? Promise.resolve() : new Promise(resolve => {img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});img.loading='eager';})));
  window.print();
});
document.querySelector('#close-image').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
const observer=new IntersectionObserver(entries=>{
  for(const entry of entries)if(entry.isIntersecting){
    contents.querySelectorAll('a').forEach(a=>{
      if(a.dataset.projectId===entry.target.id)a.setAttribute('aria-current','location');
      else a.removeAttribute('aria-current');
    });
  }
},{rootMargin:'-12% 0px -65% 0px',threshold:0});
document.querySelectorAll('.project').forEach(p=>observer.observe(p));
if(location.hash){const target=document.getElementById(location.hash.slice(1));if(target)requestAnimationFrame(()=>target.scrollIntoView());}
