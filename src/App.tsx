import './App.scss';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Work from './components/work';
import Story from './components/story';

// require.context 대신 사용할 함수 정의
const importAll = (r: any) => r.keys().map(r);
// posts 폴더 내의 모든 .md 파일 가져오기
const markdownFiles = importAll((require as any).context('./posts', false, /\.md$/));

const App = ()=> {
  // Markdown 파일 내용을 담은 상태
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
      // 첫 번째 .md 파일 가져오기
      const firstMarkdownFile = markdownFiles[0];
      fetch(firstMarkdownFile)
          .then((response) => response.text())
          .then((text) => setMarkdown(text));
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <>
      <Navigation />
      <Routes>
        {/* Work 컴포넌트에 markdown 내용 전달 */}
        <Route index element={<Work markdown={markdown} />} />
        <Route path='/story' element={<Story />} />
      </Routes>
    </>
  );
}

export default App;
