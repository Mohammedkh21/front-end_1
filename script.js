const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entrie)=>{
    if(entrie.isIntersecting){
      entrie.target.classList.add('show_');
    }
    // else{
    //   entrie.target.classList.remove('show_');
    // }
  })
});
console.log('g');
const hiddenElements = document.querySelectorAll('.hidden_'); 
hiddenElements.forEach((el)=>{
  observer.observe(el);
});