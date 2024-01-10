import "highlight.js/styles/agate.css";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from "rehype-highlight";
import { useParams } from 'react-router-dom';

interface SinglePostProps {
  markDownProps: any[];
}

const Post: React.FC<SinglePostProps> = ({ markDownProps }) => {
  const { index } = useParams<{ index: string }>();

  if (!index || isNaN(parseInt(index, 10)) || parseInt(index, 10) >= markDownProps.length) {
    return <div>유효하지 않은 포스트 인덱스</div>;
  }

  const selectedPost = markDownProps[parseInt(index, 10)];
  const bodyMarkdown = selectedPost;

  return (
    <div className="post mark-class">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {bodyMarkdown}
      </ReactMarkdown>
    </div>
  );
};

export default Post;