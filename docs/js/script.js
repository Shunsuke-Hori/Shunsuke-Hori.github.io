// Show where the user is on the page by highlighting the corresponding link in the navigation menu
window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });

});

// Scroll to a heading when the user clicks on a link, taking into account the height of the header
document.addEventListener('DOMContentLoaded', function () {
  var anchorLinks = document.querySelectorAll('a[href^="#"]');

  for (var i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener('click', function (e) {
      e.preventDefault();
      var hash = this.hash;
      var target = document.querySelector(hash);
      var header = document.querySelector('h1'); /* Replace 'header' with the selector for your header */
      var headerHeight = header.offsetHeight;

      if (target) {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
        var targetTop = target.getBoundingClientRect().top + scrollTop - headerHeight;

        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });
      }
    });
  }
});

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "2px 10px";
    document.getElementById("logo").style.fontSize = "20px";
  } else {
    document.getElementById("header").style.padding = "15px 10px";
    document.getElementById("logo").style.fontSize = "20px";
  }
}

// When the user clicks on the button with an href to #top, scroll to the top of the document
document.addEventListener('DOMContentLoaded', function() {
  var topLink = document.querySelector('a[href="#top"]');

  topLink.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}