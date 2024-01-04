import "highlight.js/styles/agate.css";
import ReactMarkdown from 'react-markdown';     // 마크다운 렌더링 라이브러리(Ract 컴포넌트 or Html 변환 )
import remarkGfm from 'remark-gfm';             // 테이블, 링크, 체크리스트 등의 형식을 표현하는 추가 기능(react-markdown 사용만으로는 마크다운 문법이 제한적이기 때문)
import rehypeHighlight from "rehype-highlight"; // 마크다운 code 태그 스타일링 라이브러리(highlight.js/styles/a11y-dark.css를 상단에 import 해서 사용)

interface WorkProps {
    propsMarkdown: string[];
}

const Work : React.FC<WorkProps> = ({ propsMarkdown }) => {
    // const listArray = propsMarkdown.map((markdown, index)=> markdown);
    return (
        <div className="work mark-class">
            {/* ReactMarkdown을 사용하여 markdown 내용 렌더링 */}
            {propsMarkdown.map((markdown, index)=>(
                <ReactMarkdown key={index} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                    {markdown}
                </ReactMarkdown>
            ))}
        </div>
    );
};

export default Work;