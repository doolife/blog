interface MainProps {
    frontMatters: any[]; // Front matter의 타입에 맞게 수정 필요
  }
  
  const Main: React.FC<MainProps> = ({ frontMatters }) => {
    return (
      <div className="main">
        <section className="post-feed">
          {frontMatters.map((frontMatter, index) => (
            <a href="#." className="post-feed__list" key={index}>
              <header className="post-feed__header">
                <div className="post-feed__header--image"
                style={{ backgroundImage: `url(../img/${frontMatter.image})` }}
                >{frontMatter.title}</div>
                <strong className="post-feed__header--title">{frontMatter.title}</strong>
              </header>
  
              <section className="post-feed__description">{frontMatter.description}</section>
  
              <footer className="post-feed__date">{frontMatter.date}</footer>
            </a>
          ))}
        </section>
      </div>
    );
  };
  
  export default Main;