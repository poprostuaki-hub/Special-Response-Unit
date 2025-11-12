document.addEventListener('DOMContentLoaded', function() {
  const navButtons = document.querySelectorAll('.nav-btn');
  const contentDiv = document.getElementById('content');

  function loadPage(pageName) {
    console.log("Ładuję stronę:", pageName); // debug
    fetch(`${pageName}.html`)
      .then(response => {
        if (!response.ok) throw new Error(`Błąd HTTP ${response.status}`);
        return response.text();
      })
      .then(html => {
        contentDiv.innerHTML = html;
      })
      .catch(error => {
        console.error(error);
        contentDiv.innerHTML = `<p style="color:red;">Nie udało się wczytać strony: ${pageName}</p>`;
      });
  }

  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      const pageName = this.getAttribute('data-page');
      loadPage(pageName);
      navButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  loadPage('glowna');
});
