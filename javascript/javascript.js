(function() {
  var about = document.getElementById('about');
  var aboutNav = document.getElementById('nav-about');
  var projects = document.getElementById('projects');
  var projectsNav = document.getElementById('nav-projects');
  var resume = document.getElementById('resume');
  var resumeNav = document.getElementById('nav-resume');
  var sections = [about, projects, resume];
  var sectionsNav = [aboutNav, projectsNav, resumeNav];

  aboutNav.addEventListener("click", function(nav) {
    hideAllExcept(about, nav.target);
  }.bind(this));
  projectsNav.addEventListener("click", function(nav) {
    hideAllExcept(projects, nav.target);
  }.bind(this));
  resumeNav.addEventListener("click", function(nav) {
    hideAllExcept(resume, nav.target);
  }.bind(this));

  var hideAllExcept = function(showEl, navEl) {
    sections.forEach(function(el) {
      if (el === showEl) {
        el.setAttribute("style", "");
      } else {
        el.setAttribute("style", "display: none");
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
