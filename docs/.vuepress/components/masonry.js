// https://w3bits.com/css-grid-masonry/
// https://codepen.io/anon/pen/BMYxdd

export default function(msg) {
  var grid = document.getElementsByClassName("masonry")[0];
  var rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  );
  //var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  function resizeMasonryItem(item) {
    var img = item.querySelector(".masonry-content")
    img.style.height = "auto";
    //var rowSpan = Math.ceil((img.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    var rowSpan = Math.ceil( (img.getBoundingClientRect().height + rowGap) / rowGap );
    //var rowSpan = Math.ceil( (img.height + rowGap) / rowGap );
    item.style.gridRowEnd = "span " + rowSpan;
    //img.style.height = rowSpan * 16 + "px";
    //img.style.height = rowSpan * rowGap + "px";
    //console.log(Math.floor( (img.height + rowGap) / rowGap ))
    img.style.height = "100%";
    img.classList.add("loaded");
  }

  const lazyLoadParents = document.querySelectorAll(".masonry-item");
  const options = {
      rootMargin: '30%'
  }
  const lazyLoad = new IntersectionObserver(entries => {
    entries.map(entry => {
      // check if observed entry is intersecting
      if (!entry.isIntersecting) return false;

      // target = intersected element
      const img = entry.target.querySelector(".masonry-content");
      //console.log("init", img.src)

      if (img) {
        if (img.dataset.srcset) {
          // move data-srcset to srcset
          img.srcset = img.dataset.srcset;
          img.removeAttribute("data-srcset");
        }
        if (img.dataset.src) {
          // move data-src to src
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        // wait for image to load and addClass to fade in
        img.onload = () => {
          resizeMasonryItem(entry.target);
          //console.log("loaded", img.src)
        };
      }
    });
  }, options);

  lazyLoadParents.forEach(item => {
    // add items to IntersectionObserver
    lazyLoad.observe(item);
  });
}
