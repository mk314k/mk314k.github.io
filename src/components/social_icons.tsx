export function SocialIcon(){
    const links = new Map<string, string>([
      ['github','https://github.com/mk314k'],
      ['facebook', 'https://www.facebook.com/mk3.14k/'],
      ['envelope', 'mailto:mk314k@mit.edu'],
      ['linkedin', 'https://www.linkedin.com/in/mk314k/']
    ]);
    return (
      <>
        <div className="social-icons" id ="social-icons">
          {Array.from(links.keys()).map((key)=>(
            <div className='icon' key={key}>
              <a href={links.get(key)} target='_blank' rel="noopener noreferrer">
                <i className={`fa${key==='envelope'?'':'-brands'} fa-${key}`}></i>
              </a>
            </div>
          ))}
        </div>
      </>
    );
  }
