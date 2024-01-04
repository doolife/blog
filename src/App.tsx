import './App.scss';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Main from './components/main';
import Work from './components/work';
import Story from './components/story';

// require.context 대신 사용할 함수 정의
const importAll = (r: any) => r.keys().map(r);
// posts 폴더 내의 모든 .md 파일 가져오기
const markdownFiles = importAll((require as any).context('./posts', false, /\.md$/));

const App = ()=> {
  // Markdown 파일 내용을 담은 상태
  const [markdownList, setMarkdownList] = useState<string[]>([]);

  useEffect(() => {
  // 전체 .md 파일 가져오기
  const allMarkdownFiles = markdownFiles.map((file: any)=>{
    return fetch(file).then((response)=> response.text());
  });
  
  Promise.all(allMarkdownFiles)
    .then((markdownContents) => {
      setMarkdownList(markdownContents);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  // Promise.all 이후에 실행될 로직
  if (markdownList.length > 0) {
    return (
      <>
        <Navigation />
        <Routes>
          {/* Work 컴포넌트에 markdown 내용 전달 */}
          <Route index element={<Main propsMarkdown={markdownList} />} />
          <Route path='/work' element={<Work propsMarkdown={markdownList} />} />
          <Route path='/story' element={<Story />} />
        </Routes>
      </>
    );
  } else {
    return <span>Loading...</span>;
  }
}

export default App;
