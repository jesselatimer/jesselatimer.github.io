(function() {
  // TODO: update resume
  // PDFObject.embed("pdf/jesse-latimer-resume.pdf", document.getElementById('resume-embed'));

  var about = document.getElementById('about');
  var aboutNav = document.getElementById('nav-about');
  var resume = document.getElementById('resume');
  var resumeNav = document.getElementById('nav-resume');
  var sections = [about, resume];
  var sectionsNav = [aboutNav, resumeNav];

  aboutNav.addEventListener("click", function(nav) {
    hideAllExcept(about, nav.target);
  }.bind(this));
  resumeNav.addEventListener("click", function(nav) {
    hideAllExcept(resume, nav.target);
  }.bind(this));

  var hideAllExcept = function(showEl, navEl) {
    sections.forEach(function(el) {
      if (el === showEl) {
        el.classList.add("selected");
      } else {
        el.classList.remove("selected");
      }
    }, this);
    sectionsNav.forEach(function(el) {
      if (el === navEl) {
        el.className = "selected";
      } else {
        el.className = "";
      }
    }, this);
  };
})();
