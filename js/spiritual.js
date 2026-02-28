fetch("data/content.json")
.then(res => res.json())
.then(data => {

    let html = "";

    data.spiritual.forEach(p => {
        html += `
        <div class="card p-3 shadow">
            <h3>${p.title}</h3>
            <p>${p.content}</p>
            <a href="${p.link}" target="_blank" class="btn btn-success">Open Material</a>
        </div>
        `;
    });

    document.getElementById("spiritual").innerHTML = html;
});
