function buildBreadcrumb(trail) {
  const container = document.getElementById("breadcrumb");
  if (!container) return;

  container.innerHTML = "";

  trail.forEach((item, index) => {
    if (item.link) {
      container.innerHTML += `<a href="${item.link}">${item.label}</a>`;
    } else {
      container.innerHTML += `<span>${item.label}</span>`;
    }

    if (index < trail.length - 1) {
      container.innerHTML += `<span class="divider">></span>`;
    }
  });
}
