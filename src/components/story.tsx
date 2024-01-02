import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// webpack의 require.context 대신 사용할 함수 정의
const importAll = (r: any) => r.keys().map(r);

// _posts 폴더 내의 모든 .md 파일 가져오기
const markdownFiles = importAll((require as any).context('../_posts', false, /\.md$/));

const Story = () => {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        // 첫 번째 .md 파일 가져오기
        const firstMarkdownFile = markdownFiles[0];

        // 파일 읽기
        fetch(firstMarkdownFile)
            .then((response) => response.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <div className="story">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
    );
};

export default Story;