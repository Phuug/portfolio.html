const posts = [
    {
      title: "Mein erster Blog-Beitrag",
      content: "Ich habe gerade einen Code für diesen Blog erstellt. Nach etwas Bearbeitung wird er mir gefallen, mal schauen wann ich ihn hoste.",
      date: "2025-05-12"
    },
    {
      title: "Fitnesstraining",
      content: "Heute wird den ganzen Tag gefastet. Ich freue mich auf das Krafttraining zwischendurch.",
      date: "2025-05-14"
    },
    {
      title: "Persönliche Entwicklung heißt",
      content: "sich selbst besser kennenzulernen und bewusst an sich zu arbeiten. Man wird klarer im Kopf, stärker im Auftreten und lebt mehr so, wie es wirklich zu einem passt.",
      date: "2025-05-16"
    }
  ];
  
  function displayPosts() {
    const blogPosts = document.getElementById('blog-posts');
  
    posts.forEach((post, index) => {
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');
  
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p><em>${post.date}</em></p>
        <p class="post-content">${post.content}</p>
        <span class="read-more" onclick="expandPost(${index})">Mehr anzeigen</span>
      `;
  
      blogPosts.appendChild(postElement);
    });
  }
  
  function expandPost(index) {
    const { title, content, date } = posts[index];
  
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <h2>${title}</h2>
      <p><em>${date}</em></p>
      <p>${content}</p>
      <button onclick="this.parentElement.remove()">Schließen</button>
    `;
  
    document.body.appendChild(modal);
  }
  
  // Beiträge beim Laden anzeigen
  displayPosts();
  