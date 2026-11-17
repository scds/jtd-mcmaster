document.addEventListener("DOMContentLoaded", function () {
  const topNav = document.querySelector(".top-navigation");
  const sidebar = document.querySelector(".side-bar");

  if (!topNav || !sidebar) return;

  function updateSidebarPosition() {
    const navHeight = topNav.getBoundingClientRect().height;
    const navBottom = topNav.getBoundingClientRect().bottom;

    sidebar.style.top = Math.max(0, navBottom) + "px";
    sidebar.style.height =
      "calc(100vh - " + Math.max(0, navBottom) + "px)";
  }

  window.addEventListener("scroll", updateSidebarPosition);
  window.addEventListener("resize", updateSidebarPosition);

  updateSidebarPosition();
});