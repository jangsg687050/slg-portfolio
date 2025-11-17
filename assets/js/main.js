// smooth scroll for anchor links
document.addEventListener('click', function(e){
  var t = e.target;
  if(t.tagName === 'A' && t.hash){
    var id = t.hash.slice(1);
    var el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  }
});
