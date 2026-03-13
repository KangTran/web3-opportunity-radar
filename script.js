fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects");
    const searchInput = document.getElementById("search");

    function display(list) {
      container.innerHTML = "";
      list.forEach(project => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <h2>${project.name}</h2>
          <p><b>Category:</b> ${project.category}</p>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">Explore →</a>
        `;

        container.appendChild(card);
      });
    }

    display(data);

    searchInput.addEventListener("input", e => {
      const value = e.target.value.toLowerCase();
      const filtered = data.filter(p =>
        p.name.toLowerCase().includes(value)
      );
      display(filtered);
    });
  });
