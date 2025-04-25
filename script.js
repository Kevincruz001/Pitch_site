document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdown = document.querySelector(".dropdown");

  dropdownButton.addEventListener("click", function () {
    dropdown.classList.toggle("active");

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("active");
      }
    });
  });
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, observerOptions);

  // Target all h2 and p elements inside .content
  const animatedElements = document.querySelectorAll(
    ".content h2, .content p, .rollout-intro"
  );

  animatedElements.forEach((element) => {
    if (element.tagName === "H2") {
      element.classList.add("fade-up");
    } else if (element.tagName === "P") {
      element.classList.add("fade-up-delayed");
    }
    observer.observe(element);
  });
});
