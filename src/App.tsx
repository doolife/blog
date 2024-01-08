import './App.scss';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import matter from "front-matter";
import Navigation from './components/navigation';
import Main from './components/main';
import Work from './components/work';
import Story from './components/story';

const importAll = (r: any) => r.keys().map(r);
const markdownFiles = importAll((require as any).context('./posts', false, /\.md$/));
const reverseMarkdownFiles = [...markdownFiles].reverse();

const App = () => {
  const [markdownList, setMarkdownList] = useState<string[]>([]);

  useEffect(() => {
    const allMarkdownFiles = reverseMarkdownFiles.map((file: any) => {
      return fetch(file).then((response) => response.text());
    });

    Promise.all(allMarkdownFiles)
      .then((markdownContents) => {
        setMarkdownList(markdownContents);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (markdownList.length > 0) {
    // 전체 markdown 파일의 머리말과 본문 분리
    const allFrontMatters = markdownList.map(markdown => matter(markdown).attributes);
    const allBodyMarkdown = markdownList.map(markdown => matter(markdown).body);

    return (
      <>
        <Navigation />
        <Routes>
          {/* Main 컴포넌트에 머리말 전달 */}
          <Route
            index
            element={<Main frontMatters={allFrontMatters} />}
          />
          {/* Work 컴포넌트에 본문 전달 */}
          <Route
            path='/work'
            element={<Work markdownBodies={allBodyMarkdown} />}
          />
          <Route path='/story' element={<Story />} />
        </Routes>
      </>
    );
  } else {
    return <span>Loading...</span>;
  }
};

export default App;