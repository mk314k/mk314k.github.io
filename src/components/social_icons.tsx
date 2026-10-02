export function SocialIcon(){
    const links: Array<{ key: string; url: string; label: string; iconClass: string }> = [
      { key: 'github', url: 'https://github.com/mk314k', label: 'GitHub', iconClass: 'fa-brands fa-github' },
      { key: 'linkedin', url: 'https://www.linkedin.com/in/mk314k/', label: 'LinkedIn', iconClass: 'fa-brands fa-linkedin' },
      { key: 'twitter', url: 'https://x.com/mk314k', label: 'X (Twitter)', iconClass: 'fa-brands fa-x-twitter' },
      { key: 'envelope', url: 'mailto:mk314k@mit.edu', label: 'Email', iconClass: 'fa-solid fa-envelope' },
    ];
    return (
      <>
        <div className="social-icons" id="social-icons">
          {links.map(({ key, url, label, iconClass }) => (
            <div className='icon' key={key}>
              <a
                href={url}
                target='_blank'
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
              >
                <i className={iconClass}></i>
              </a>
            </div>
          ))}
        </div>
      </>
    );
  }
