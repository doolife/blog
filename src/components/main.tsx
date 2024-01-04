import {Buffer} from 'buffer';      // Webpack 5에서는 Node.js의 Buffer를 기본적으로 제공하지 않는다.(npm install buffer 설치)
import matter from "gray-matter";   // YAML front matter를 추출하여 객체로 반환하는 라이브러리

interface WorkProps {
  propsMarkdown: string[];
}

const Main: React.FC<WorkProps> = ({ propsMarkdown }) => {
    // front matter 추출한 전체 테이터 반환
    const allFrontMatter = propsMarkdown.map((markdown) => {
        const frontMatter = matter(Buffer.from(markdown));  // Buffer 사용하여 처리(없으면 gray-matter 에러)
        return frontMatter.data;
    });

    return (
        <div className="main">
            <section className="post-feed">
            {allFrontMatter.map((key, index) => (
                <a href="#." className="post-feed__list" key={index}>
                    <header
                        className="post-feed__list--image" 
                        style={{ backgroundImage: `url(${key.image})` }}
                    ></header>

                    <section
                        className="post-feed__list--title"
                    >{key.title}</section>

                    <footer 
                    className="post-feed__list--content"
                    >{ key.content }</footer>
                </a>
            ))}
            </section>
        </div>
      );
};

export default Main;