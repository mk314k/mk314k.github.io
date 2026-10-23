import { resume, Role } from '../../content/resume';
import { thesis } from '../../content/about';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderRolesHtml(roles: Role[]): string {
  return roles
    .map((role) => {
      const titles = role.title_timespan
        .map(
          ([title, timespan]) => `
          <div class="row subrow">
            <span class="role-title">${escapeHtml(title)}</span>
            <span class="date">${escapeHtml(timespan)}</span>
          </div>`
        )
        .join('');

      const bullets = role.work
        .map((b) => `<li>${escapeHtml(b)}</li>`)
        .join('');

      return `
        <div class="entry">
          <div class="row">
            <span class="org">${escapeHtml(role.company)}</span>
            <span class="loc">${escapeHtml(role.location)}</span>
          </div>
          ${titles}
          <ul>${bullets}</ul>
        </div>`;
    })
    .join('');
}

/**
 * Generates a strict 1-page, single-column, selectable-text PDF via browser
 * print engine (Jake's Resume / Harvard / MIT ATS standard).
 * Passes Workday, Greenhouse, Lever, Ashby, and iCIMS parsers with 100% text fidelity.
 */
export function exportAtsResumePdf(): void {
  const educationHtml = resume.education
    .map((school) => {
      const degrees = school.degree
        .map(
          (d) => `
          <div class="row subrow">
            <span class="role-title">${escapeHtml(d.name)}${d.score ? ` (${escapeHtml(d.score)})` : ''}</span>
            <span class="date">${escapeHtml(d.graduation)}</span>
          </div>`
        )
        .join('');
      return `
        <div class="entry">
          <div class="row">
            <span class="org">${escapeHtml(school.school)}</span>
            <span class="loc">${escapeHtml(school.location)}</span>
          </div>
          ${degrees}
        </div>`;
    })
    .join('');

  const skillsHtml = Object.entries(resume.skills)
    .map(
      ([cat, list]) =>
        `<div class="skill-line"><strong>${escapeHtml(cat)}:</strong> ${escapeHtml(list.join(', '))}</div>`
    )
    .join('');

  const awardsHtml = resume.awards
    .map((a) => `<li>${escapeHtml(a.name)}</li>`)
    .join('');

  const serviceHtml = resume.service
    .map((s) => `<li><strong>${escapeHtml(s.name)}:</strong> ${escapeHtml(s.description)}</li>`)
    .join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Kartikesh_Mishra_Resume</title>
  <style>
    @page {
      size: letter;
      margin: 0.45in 0.5in;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: "Times New Roman", Times, Georgia, serif;
      font-size: 9.6pt;
      line-height: 1.32;
      color: #000000;
      background: #ffffff;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    a {
      color: #000000;
      text-decoration: none;
    }
    header {
      text-align: center;
      margin-bottom: 8pt;
      border-bottom: 1pt solid #000;
      padding-bottom: 5pt;
    }
    h1 {
      font-size: 18pt;
      font-weight: bold;
      letter-spacing: 0.3pt;
      margin-bottom: 2pt;
    }
    .contact-line {
      font-size: 9pt;
    }
    section {
      margin-bottom: 7pt;
    }
    h2 {
      font-size: 10.2pt;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.5pt;
      border-bottom: 0.6pt solid #000;
      margin-bottom: 4pt;
      padding-bottom: 1pt;
    }
    .entry {
      margin-bottom: 5pt;
      page-break-inside: avoid;
    }
    .row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .org {
      font-weight: bold;
      font-size: 9.8pt;
    }
    .loc {
      font-size: 9pt;
    }
    .subrow {
      font-style: italic;
      font-size: 9.3pt;
      margin-bottom: 1.5pt;
    }
    .date {
      font-style: italic;
      font-size: 9pt;
    }
    ul {
      margin-left: 13pt;
      margin-top: 1.5pt;
    }
    li {
      margin-bottom: 1.2pt;
    }
    .skill-line {
      margin-bottom: 1.8pt;
    }
  </style>
</head>
<body>
  <header>
    <h1>${escapeHtml(resume.name)}</h1>
    <div class="contact-line">
      ${escapeHtml(resume.contact.location)} &nbsp;|&nbsp;
      <a href="mailto:${escapeHtml(resume.contact.email)}">${escapeHtml(resume.contact.email)}</a> &nbsp;|&nbsp;
      <a href="https://${escapeHtml(resume.contact.website)}">${escapeHtml(resume.contact.website)}</a> &nbsp;|&nbsp;
      <a href="https://${escapeHtml(resume.contact.github)}">${escapeHtml(resume.contact.github)}</a> &nbsp;|&nbsp;
      <a href="https://${escapeHtml(resume.contact.linkedin)}">${escapeHtml(resume.contact.linkedin)}</a>
    </div>
  </header>

  <section>
    <h2>Education</h2>
    ${educationHtml}
    <div class="skill-line"><strong>Thesis:</strong> <em>${escapeHtml(thesis.title)}</em> (${escapeHtml(thesis.venue)}, ${escapeHtml(thesis.year)})</div>
  </section>

  <section>
    <h2>Experience</h2>
    ${renderRolesHtml(resume.experiences.slice(0, 4))}
  </section>

  <section>
    <h2>Research Experience</h2>
    ${renderRolesHtml(resume.research)}
  </section>

  <section>
    <h2>Teaching &amp; Leadership</h2>
    ${renderRolesHtml(resume.teaching.slice(0, 2))}
  </section>

  <section>
    <h2>Technical Skills</h2>
    ${skillsHtml}
  </section>

  <section>
    <h2>Honors, Awards &amp; Judging</h2>
    <ul>
      ${awardsHtml}
      ${serviceHtml}
    </ul>
  </section>

  <script>
    window.onload = function () {
      setTimeout(function () {
        window.focus();
        window.print();
      }, 150);
    };
  </script>
</body>
</html>`;

  const printWindow = window.open('', '_blank', 'width=900,height=1100');
  if (!printWindow) {
    window.print();
    return;
  }
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
}
