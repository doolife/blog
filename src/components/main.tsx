interface MainProps {
    frontMatters: any[]; // Front matter의 타입에 맞게 수정 필요
  }
  
  const Main: React.FC<MainProps> = ({ frontMatters }) => {
    return (
      <div className="main">
        <section className="post-feed">
          {frontMatters.map((frontMatter, index) => (
            <a href="#." className="post-feed__list" key={index}>
              <header
                className="post-feed__list--image"
                style={{ backgroundImage: `url(../img/${frontMatter.image})` }}
              ></header>
  
              <section className="post-feed__list--title">{frontMatter.title}</section>
  
              <footer className="post-feed__list--content">{frontMatter.description}</footer>
            </a>
          ))}
        </section>
      </div>
    );
  };
  
  export default Main;