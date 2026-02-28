fetch("data/content.json")
.then(res => res.json())
.then(data => {

    let html = "";

    data.blogs.forEach(b => {
        html += `
        <div class="card p-3 shadow">
            <h3>${b.title}</h3>
            <p>${b.content}</p>
        </div>
        `;
    });

    document.getElementById("blogs").innerHTML = html;
});
