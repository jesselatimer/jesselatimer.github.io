(function() {
  var about = document.getElementById('about');
  var projects = document.getElementById('projects');
  var resume = document.getElementById('resume');
  var sections = [about, projects, resume];

  var hideAllExcept = function(showEl) {
    sections.forEach(function(el) {
      if (el === showEl) {
        el.setAttribute("style", "");
      } else {
        el.setAttribute("style", "display: none");
      }
    }, this);
  };

  document.getElementById('nav-about').addEventListener("click", function() {
    hideAllExcept(about);
  }.bind(this));
  document.getElementById('nav-projects').addEventListener("click", function() {
    hideAllExcept(projects);
  }.bind(this));
  document.getElementById('nav-resume').addEventListener("click", function() {
    hideAllExcept(resume);
  }.bind(this));
})();
