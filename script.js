const toggle=document.getElementById("darkToggle");
if(toggle){
  toggle.onclick=()=>document.body.classList.toggle("dark");
}

const API_KEY="YOUR_NEWSAPI_KEY";
fetch(`https://newsapi.org/v2/top-headlines?country=pk&apiKey=${API_KEY}`)
.then(r=>r.json())
.then(d=>{
  const c=document.getElementById("newsContainer");
  const b=document.getElementById("breakingText");
  if(!d.articles)return;
  b.textContent=d.articles[0].title;
  d.articles.slice(0,6).forEach(a=>{
    const div=document.createElement("div");
    div.className="card";
    div.innerHTML=`<h3>${a.title}</h3><p>${a.description||""}</p>`;
    c.appendChild(div);
  });
});
