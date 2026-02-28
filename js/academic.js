fetch("data/content.json")
.then(res => res.json())
.then(data => {

    let html = "";

    data.subjects.forEach(sub => {
        html += `
        <div class="card p-3 shadow">
            <h3>${sub.name}</h3>
            <p>${sub.description}</p>
            <a href="${sub.link}" target="_blank" class="btn btn-primary">Open MS Teams</a>
        </div>
        `;
    });

    document.getElementById("subjects").innerHTML = html;
});
