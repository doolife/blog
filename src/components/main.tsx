interface WorkProps {
    propsMarkdown: string[];
}

const Main : React.FC<WorkProps> = ({ propsMarkdown }) => {
    console.log(propsMarkdown);
    return (
        <div className="main">
            메인페이지
        </div>
    );
};

export default Main;