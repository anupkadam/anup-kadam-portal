html += `<div class="subject-card portal-card">
    <h3>${sub.name}</h3>
    <p>${sub.description}</p>

    <ul class="unit-list">
      ${sub.units.map(u => `
        <li>
          ${u.title}
          <a href="${u.link}" target="_blank" class="btn-success-custom">Open</a>
        </li>`).join('')}
    </ul>

    <a href="${sub.teams}" target="_blank" class="btn-primary-custom mt-2">Open MS Teams</a>
</div>`;
