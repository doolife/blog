import './App.scss';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import matter from 'front-matter';
import Header from './components/Header';
import Main from './components/Main';
import Post from './components/Post';

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
    const allFrontMatters = markdownList.map(markdown => matter(markdown).attributes);
    const allBodyMarkdown = markdownList.map(markdown => matter(markdown).body);

    return (
      <>
        <Header />
        <Routes>
          <Route index element={<Main frontMatterProps={allFrontMatters} />} />
          <Route
            path="/post/:index"
            element={<Post markDownProps={allBodyMarkdown} />}
          />
        </Routes>
      </>
    );
  } else {
    return <span>Loading...</span>;
  }
};

export default App;