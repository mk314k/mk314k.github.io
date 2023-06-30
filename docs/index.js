links = new Map();
links['github'] = 'https://github.com/mk314k';
links['facebook'] = 'https://www.facebook.com/mk3.14k/';
links['envelope'] = 'mailto:mk314k@mit.edu';
links['linkedin'] = 'https://www.linkedin.com/in/mk314k/';

function getIcon(iStyle = '--d:0s', iLink='facebook', iClass= 'fa-brands'){
    return `
    <div class="icon" style="${iStyle}">
        <a href="${links[iLink]}">
            <i class="${iClass} fa-${iLink}"></i>
        </a>
    </div>
    `;
}

socialIcons = document.getElementById("social-icons");
socialIcons.innerHTML = `
${getIcon(iStyle = 'grid-area: 1/1/span 1/span 1', iLink='facebook', iClass= 'fa-brands')}
${getIcon(iStyle = 'grid-area: 1/2/span 1/span 1', iLink='envelope', iClass= 'fa')}
${getIcon(iStyle = 'grid-area: 1/3/span 1/span 1', iLink='github', iClass= 'fa-brands')}
${getIcon(iStyle = 'grid-area: 1/4/span 1/span 1', iLink='linkedin', iClass= 'fa-brands')}
`