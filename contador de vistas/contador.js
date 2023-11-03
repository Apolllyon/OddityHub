const viewCount = parseInt(localStorage.getItem("viewCount")) || 0;

document.write(`😊 Esta página ha sido vista ${viewCount} veces 😊`);

localStorage.setItem("viewCount", viewCount + 1);