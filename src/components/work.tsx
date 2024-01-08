import "highlight.js/styles/agate.css";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from "rehype-highlight";

interface WorkProps {
  markdownBodies: string[];
}

const Work: React.FC<WorkProps> = ({ markdownBodies }) => {
  return (
    <div className="work mark-class">
      {/* ReactMarkdown을 사용하여 markdown 내용 렌더링 */}
      {markdownBodies.map((markdown, index) => (
        <ReactMarkdown
          key={index}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {markdown}
        </ReactMarkdown>
      ))}
    </div>
  );
};

export default Work;