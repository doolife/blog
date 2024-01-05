import matter from "front-matter";

interface WorkProps {
    propsMarkdown: string[];
}

const Main: React.FC<WorkProps> = ({ propsMarkdown }) => {
    // front matter 추출한 전체 데이터 반환
    const allFrontMatter = propsMarkdown.map((markdown) => {
        return matter(markdown).attributes;
    });

    return (
        <div className="main">
            <section className="post-feed">
            {allFrontMatter.map((key, index) => (
                <a href="#." className="post-feed__list" key={index}>
                    <header
                        className="post-feed__list--image" 
                        style={{ backgroundImage: `url(${(key as any).image})` }}
                    ></header>

                    <section
                        className="post-feed__list--title"
                    >{(key as any).title}</section>


                    <footer 
                        className="post-feed__list--content"
                    >{ (key as any).description }</footer>
                </a>
            ))}
            </section>
        </div>
    );
};

export default Main;