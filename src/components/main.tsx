import { Link } from 'react-router-dom';

interface MainProps {
  frontMatterProps: any[]; // Front matter의 타입에 맞게 수정 필요
}

const Main: React.FC<MainProps> = ({ frontMatterProps }) => {
  return (
    <div className="main">
      <section className="post-feed">
        {frontMatterProps.map((frontMatter, index) => (
          <Link to={`/post/${index}`} className="post-feed__list" key={index}>
            <header className="post-feed__header">
              <div
                className="post-feed__header--image"
                style={{ backgroundImage: `url(../img/${frontMatter.image})` }}
              >
                {frontMatter.title}
              </div>
              <strong className="post-feed__header--title">{frontMatter.title}</strong>
            </header>

            <section className="post-feed__description">{frontMatter.description}</section>

            <footer className="post-feed__date">{frontMatter.date}</footer>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Main;