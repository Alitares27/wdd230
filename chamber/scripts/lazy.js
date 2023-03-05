//Lazy Images
let sources = document.querySelectorAll("img[data-src]");
const loading = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
    image.removeAttribute("data-src");
  };
};

let options = {
    threshold: 1,
  }

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loading(item.target);
          observer.unobserve(item.target);}
        }, options);
      }); sources.forEach((img) => {
      observer.observe(img);
    });
  } else {
    sources.forEach(img => {
      loading(img);
    });
  }



