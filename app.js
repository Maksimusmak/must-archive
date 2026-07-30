
const defaultItems = [
  {
    id: 1, title: "Cyber City Oedo 808", year: 1990, category: "anime",
    rating: 4.5, genres: ["Action","Cyberpunk","Sci-Fi"], status: "must-watch", favourite: true,
    cover: "https://m.media-amazon.com/images/M/MV5BNzM0MzYzNTYtYWI5Ni00MzJhLWEwZjItNTEyNjIyZjRjMjM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    youtube: "https://www.youtube.com/results?search_query=Cyber+City+Oedo+808",
    synopsis: "In a violent future metropolis, three imprisoned criminals are forced to hunt dangerous cyber-criminals in exchange for reduced sentences."
  },
  {
    id: 2, title: "Goku: Midnight Eye II", year: 1989, category: "anime",
    rating: 4.0, genres: ["Action","Sci-Fi","Supernatural"], status: "must-watch", favourite: false,
    cover: "https://m.media-amazon.com/images/M/MV5BNDVlN2Q0YzUtODcyOC00MWUzLTgzYWYtOWI0MWJlNzI2Zjg4XkEyXkFqcGc@._V1_.jpg",
    youtube: "https://www.youtube.com/results?search_query=Goku+Midnight+Eye+II",
    synopsis: "Private investigator Goku Furinji uses a mysterious cybernetic eye and staff to battle impossible threats in futuristic Tokyo."
  },
  {
    id: 3, title: "Appleseed", year: 1988, category: "anime",
    rating: 4.5, genres: ["Mecha","Military","Sci-Fi"], status: "must-watch", favourite: true,
    cover: "https://m.media-amazon.com/images/M/MV5BMTQ5MzA3MDU2MF5BMl5BanBnXkFtZTcwMTQ4MjMzMQ@@._V1_.jpg",
    youtube: "https://www.youtube.com/results?search_query=Appleseed+1988",
    synopsis: "After a devastating global war, soldier Deunan Knute enters the utopian city of Olympus and discovers the cost of its fragile peace."
  },
  {
    id: 4, title: "Ariel", year: 1989, category: "anime",
    rating: 3.5, genres: ["Comedy","Mecha","Sci-Fi"], status: "watching", favourite: false,
    cover: "",
    youtube: "https://www.youtube.com/results?search_query=Ariel+1989+anime",
    synopsis: "Three schoolgirls are recruited to pilot a giant robot and defend Earth from an eccentric alien invasion."
  },
  {
    id: 5, title: "Venus Wars", year: 1989, category: "anime",
    rating: 4.5, genres: ["Action","Military","Sci-Fi"], status: "completed", favourite: true,
    cover: "https://m.media-amazon.com/images/M/MV5BMjU0Y2FlMGYtNjNjOS00Mjk0LTk3YTgtYjI5MjM5MjQwN2M5XkEyXkFqcGc@._V1_.jpg",
    youtube: "https://www.youtube.com/results?search_query=Venus+Wars+1989",
    synopsis: "On a colonised Venus, a reckless young racer becomes caught in a brutal invasion and joins a resistance movement."
  },
  {
    id: 6, title: "Megazone 23", year: 1985, category: "anime",
    rating: 4.0, genres: ["Cyberpunk","Mecha","Sci-Fi"], status: "must-watch", favourite: false,
    cover: "https://m.media-amazon.com/images/M/MV5BMTFjNDBjNjgtOTI2NC00NjZkLTgxMDAtZWM5ZGRlYThmMzJkXkEyXkFqcGc@._V1_.jpg",
    youtube: "https://www.youtube.com/results?search_query=Megazone+23",
    synopsis: "A young biker discovers that his city, his memories and even the world around him are part of a vast manufactured illusion."
  },
  {
    id: 7, title: "Blade Runner", year: 1982, category: "movie",
    rating: 5.0, genres: ["Cyberpunk","Drama","Sci-Fi"], status: "completed", favourite: true,
    cover: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhYjUtN2QwNS00ZWY0LTgxYzgtMTM5YTY4YjJiZGFhXkEyXkFqcGc@._V1_.jpg",
    youtube: "https://www.youtube.com/results?search_query=Blade+Runner+1982+trailer",
    synopsis: "A weary detective hunts synthetic humans through a rain-soaked future Los Angeles while questioning what it means to be alive."
  },
  {
    id: 8, title: "Ghost in the Shell", year: 1995, category: "movie",
    rating: 5.0, genres: ["Cyberpunk","Philosophical","Sci-Fi"], status: "completed", favourite: true,
    cover: "https://m.media-amazon.com/images/M/MV5BNzM1NDUwNTYtY2FlOS00Njk4LTgxNGQtYTRiZTQzNjYxYTI0XkEyXkFqcGc@._V1_.jpg",
    youtube: "https://www.youtube.com/results?search_query=Ghost+in+the+Shell+1995+trailer",
    synopsis: "A cybernetic public-security officer investigates a mysterious hacker and confronts the boundaries between identity, body and machine."
  },
  {
    id: 9, title: "Cowboy Bebop", year: 1998, category: "tv",
    rating: 5.0, genres: ["Action","Drama","Sci-Fi"], status: "watching", favourite: true,
    cover: "https://m.media-amazon.com/images/M/MV5BM2VhZjk2MWMtZjc2OC00YzA4LWI0NzAtZGQ1YjVkOTk5YzVlXkEyXkFqcGc@._V1_.jpg",
    youtube: "https://www.youtube.com/results?search_query=Cowboy+Bebop+trailer",
    synopsis: "A crew of drifting bounty hunters crosses the solar system while trying to outrun their pasts."
  },
  {
    id: 10, title: "Final Fantasy VIII", year: 1999, category: "game",
    rating: 5.0, genres: ["Fantasy","RPG","Romance"], status: "completed", favourite: true,
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7r.jpg",
    youtube: "https://www.youtube.com/results?search_query=Final+Fantasy+VIII+trailer",
    synopsis: "A reserved young mercenary is drawn into a world-spanning conflict involving sorceresses, time compression and an unforgettable romance."
  }
];

let items = JSON.parse(localStorage.getItem("mustArchiveItems") || "null") || defaultItems;
let activeCategory = "all";
let currentPage = "home";
let listView = false;

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const grid = $("#cardsGrid");
const searchInput = $("#searchInput");
const statusFilter = $("#statusFilter");
const genreFilter = $("#genreFilter");
const ratingFilter = $("#ratingFilter");
const sortSelect = $("#sortSelect");
const emptyState = $("#emptyState");
const detailDialog = $("#detailDialog");
const addDialog = $("#addDialog");

function save(){ localStorage.setItem("mustArchiveItems", JSON.stringify(items)); }

function categoryLabel(category){
  return {anime:"Anime",movie:"Movie",tv:"TV Show",game:"Game"}[category] || category;
}
function statusLabel(status){
  return {
    "must-watch":"Must watch",
    "watching":"Watching / Playing",
    "completed":"Completed",
    "paused":"Paused"
  }[status] || status;
}

function populateGenres(){
  const current = genreFilter.value;
  const genres = [...new Set(items.flatMap(i => i.genres || []))].sort();
  genreFilter.innerHTML = '<option value="all">All genres</option>' +
    genres.map(g => `<option value="${g}">${g}</option>`).join("");
  if(genres.includes(current)) genreFilter.value = current;
}

function getFilteredItems(){
  const q = searchInput.value.trim().toLowerCase();
  let out = items.filter(item => {
    const matchesPage =
      currentPage === "favourites" ? item.favourite :
      currentPage === "watchlist" ? item.status === "must-watch" :
      true;

    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = !q ||
      item.title.toLowerCase().includes(q) ||
      (item.synopsis || "").toLowerCase().includes(q) ||
      (item.genres || []).join(" ").toLowerCase().includes(q);

    const matchesStatus = statusFilter.value === "all" || item.status === statusFilter.value;
    const matchesGenre = genreFilter.value === "all" || (item.genres || []).includes(genreFilter.value);
    const matchesRating = Number(item.rating || 0) >= Number(ratingFilter.value);

    return matchesPage && matchesCategory && matchesSearch && matchesStatus && matchesGenre && matchesRating;
  });

  switch(sortSelect.value){
    case "title": out.sort((a,b)=>a.title.localeCompare(b.title)); break;
    case "year-new": out.sort((a,b)=>b.year-a.year); break;
    case "year-old": out.sort((a,b)=>a.year-b.year); break;
    case "rating": out.sort((a,b)=>b.rating-a.rating); break;
    default: out.sort((a,b)=>b.id-a.id);
  }
  return out;
}

function render(){
  const filtered = getFilteredItems();
  grid.classList.toggle("list-view", listView);
  grid.innerHTML = filtered.map(item => {
    const posterStyle = item.cover ? `style="background-image:url('${item.cover.replace(/'/g,"\\'")}')"` : "";
    return `
      <article class="media-card">
        <div class="poster" ${posterStyle}>
          ${!item.cover ? `<div class="poster-fallback">${item.title}</div>` : ""}
          <span class="poster-badge">${categoryLabel(item.category)}</span>
          <button class="fav-btn ${item.favourite ? "on":""}" data-fav="${item.id}" title="Favourite">♥</button>
          <div class="poster-title">${item.title}</div>
        </div>
        <div class="card-body">
          <h3 class="card-title">${item.title}</h3>
          <div class="card-meta">
            <span>${item.year}</span>
            <span class="stars">★ ${Number(item.rating).toFixed(1)}</span>
          </div>
          <div class="tags">${(item.genres||[]).slice(0,3).map(g=>`<span class="tag">${g}</span>`).join("")}</div>
          <div class="card-controls">
            <select class="status-select" data-status="${item.id}">
              <option value="must-watch" ${item.status==="must-watch"?"selected":""}>Must watch</option>
              <option value="watching" ${item.status==="watching"?"selected":""}>Watching / Playing</option>
              <option value="completed" ${item.status==="completed"?"selected":""}>Completed</option>
              <option value="paused" ${item.status==="paused"?"selected":""}>Paused</option>
            </select>
            <button class="detail-btn" data-detail="${item.id}">View</button>
          </div>
        </div>
      </article>`;
  }).join("");

  emptyState.classList.toggle("hidden", filtered.length > 0);
  $("#resultsMeta").textContent = `${filtered.length} title${filtered.length === 1 ? "" : "s"} shown`;
  updateStats();
}

function updateStats(){
  $("#totalCount").textContent = items.length;
  $("#favCount").textContent = items.filter(i=>i.favourite).length;
  $("#completedCount").textContent = items.filter(i=>i.status==="completed").length;
  $("#watchCount").textContent = items.filter(i=>i.status==="must-watch").length;
}

function showDetail(id){
  const item = items.find(i=>i.id===id);
  if(!item) return;
  const coverStyle = item.cover ? `style="background-image:url('${item.cover.replace(/'/g,"\\'")}')"` : "";
  $("#detailContent").innerHTML = `
    <div class="detail-layout">
      <div class="detail-cover" ${coverStyle}></div>
      <div class="detail-copy">
        <span class="section-kicker">${categoryLabel(item.category)}</span>
        <h2>${item.title}</h2>
        <div class="detail-info">
          <span>${item.year}</span>
          <span>★ ${Number(item.rating).toFixed(1)}</span>
          <span>${statusLabel(item.status)}</span>
        </div>
        <div class="tags">${(item.genres||[]).map(g=>`<span class="tag">${g}</span>`).join("")}</div>
        <p>${item.synopsis || "No synopsis added yet."}</p>
        ${item.youtube ? `<a class="primary-btn youtube-link" href="${item.youtube}" target="_blank" rel="noopener">Open YouTube</a>` : ""}
      </div>
    </div>`;
  detailDialog.showModal();
}

function setPage(page){
  currentPage = page;
  $$(".nav-btn").forEach(btn=>btn.classList.toggle("active",btn.dataset.page===page));
  $("#sectionTitle").textContent =
    page==="favourites" ? "Favourite titles" :
    page==="watchlist" ? "Your watchlist" :
    page==="collection" ? "Full collection" : "All titles";
  document.querySelector("#collectionSection").scrollIntoView({behavior:"smooth"});
  render();
}

document.addEventListener("click", e=>{
  const fav = e.target.closest("[data-fav]");
  if(fav){
    const item = items.find(i=>i.id===Number(fav.dataset.fav));
    item.favourite = !item.favourite;
    save(); render(); return;
  }

  const detail = e.target.closest("[data-detail]");
  if(detail){ showDetail(Number(detail.dataset.detail)); return; }

  const category = e.target.closest("[data-category]");
  if(category){
    activeCategory = category.dataset.category;
    $$(".category-tab").forEach(b=>b.classList.toggle("active",b===category));
    render(); return;
  }

  const nav = e.target.closest("[data-page]");
  if(nav){ setPage(nav.dataset.page); }
});

document.addEventListener("change", e=>{
  if(e.target.matches("[data-status]")){
    const item = items.find(i=>i.id===Number(e.target.dataset.status));
    item.status = e.target.value;
    save();
  }
  render();
});

[searchInput,statusFilter,genreFilter,ratingFilter,sortSelect].forEach(el=>{
  el.addEventListener("input",render);
});

$("#gridViewBtn").addEventListener("click",()=>{
  listView=false;
  $("#gridViewBtn").classList.add("active");
  $("#listViewBtn").classList.remove("active");
  render();
});
$("#listViewBtn").addEventListener("click",()=>{
  listView=true;
  $("#listViewBtn").classList.add("active");
  $("#gridViewBtn").classList.remove("active");
  render();
});
$("#browseBtn").addEventListener("click",()=>$("#collectionSection").scrollIntoView({behavior:"smooth"}));
$("#randomBtn").addEventListener("click",()=>{
  if(!items.length) return;
  const item = items[Math.floor(Math.random()*items.length)];
  showDetail(item.id);
});
$("#themeBtn").addEventListener("click",()=>document.body.classList.toggle("glow"));
$("#addBtn").addEventListener("click",()=>addDialog.showModal());
$("#closeAddBtn").addEventListener("click",()=>addDialog.close());
$("#cancelAddBtn").addEventListener("click",()=>addDialog.close());

$("#addForm").addEventListener("submit", e=>{
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  items.push({
    id: Date.now(),
    title: data.get("title").trim(),
    year: Number(data.get("year")),
    category: data.get("category"),
    rating: Number(data.get("rating") || 0),
    genres: data.get("genres").split(",").map(x=>x.trim()).filter(Boolean),
    status: "must-watch",
    favourite: false,
    cover: data.get("cover").trim(),
    youtube: data.get("youtube").trim(),
    synopsis: data.get("synopsis").trim()
  });
  save();
  e.currentTarget.reset();
  addDialog.close();
  populateGenres();
  render();
});

populateGenres();
render();
