import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
	text : string;
}

const Story = ({text}: Props) => {
    return (
        <div className="story">
            <h1 className="story__tit">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
            </h1>
        </div>
    );
};
  
export default Story;