const listingsWrap=document.querySelector('[data-listings]');
const listings=Array.from(document.querySelectorAll('.listing'));
const filters=Array.from(document.querySelectorAll('[data-filter]'));
const sortSelect=document.querySelector('[data-sort]');
const resultsCount=document.querySelector('[data-results-count]');
const emptyState=document.querySelector('[data-empty-state]');

document.querySelectorAll('[data-gallery]').forEach((gallery)=>{
  const mainPhoto=gallery.querySelector('[data-main-photo]');
  const buttons=gallery.querySelectorAll('[data-photo]');
  buttons.forEach((button)=>button.addEventListener('click',()=>{
    mainPhoto.src=button.dataset.photo;
    buttons.forEach((item)=>item.classList.remove('is-active'));
    button.classList.add('is-active');
  }));
});

const getSelected=(name)=>filters.filter((input)=>input.dataset.filter===name&&input.checked).map((input)=>input.value);
const matchesGroup=(listing,name)=>{const selected=getSelected(name);return !selected.length||selected.includes(listing.dataset[name]);};
function sortListings(){
  if(!listingsWrap||!sortSelect)return;
  const sorted=[...listings].sort((a,b)=>{
    if(sortSelect.value==='price-desc')return Number(b.dataset.price)-Number(a.dataset.price);
    if(sortSelect.value==='year-desc')return Number(b.dataset.year)-Number(a.dataset.year);
    return Number(b.dataset.featured==='true')-Number(a.dataset.featured==='true')||Number(b.dataset.year)-Number(a.dataset.year);
  });
  sorted.forEach((listing)=>listingsWrap.appendChild(listing));
}
function applyFilters(){
  let visible=0;
  listings.forEach((listing)=>{
    const onlyFeatured=getSelected('featured').includes('true');
    const shouldShow=matchesGroup(listing,'status')&&matchesGroup(listing,'category')&&matchesGroup(listing,'location')&&(!onlyFeatured||listing.dataset.featured==='true');
    listing.classList.toggle('is-hidden',!shouldShow);
    if(shouldShow)visible+=1;
  });
  if(resultsCount)resultsCount.textContent=String(visible);
  if(emptyState)emptyState.classList.toggle('is-visible',visible===0);
}
filters.forEach((input)=>input.addEventListener('change',applyFilters));
if(sortSelect)sortSelect.addEventListener('change',()=>{sortListings();applyFilters();});
sortListings();
applyFilters();
