import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

interface MainProps {
  frontMatterProps: any[]; // Front matter의 타입에 맞게 수정 필요
}

const Main: React.FC<MainProps> = ({ frontMatterProps }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // 현재 페이지의 첫 번째 항목 인덱스 계산
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;

  // useMemo를 사용하여 현재 표시할 항목들과 전체 페이지 수 계산
  const { currentItems, totalPages } = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const currentItems = frontMatterProps.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(frontMatterProps.length / itemsPerPage);
    return { currentItems, totalPages };
  }, [currentPage, itemsPerPage, frontMatterProps]);

  // Array.from을 사용하여 페이지 번호 배열 생성
  const pageNumbers = useMemo(() => {
    let numbers = [];
    for (let i = 1; i <= totalPages; i++) numbers.push(i);
    return numbers;
  }, [totalPages]);
  
  // 페이지네이션 함수
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <section className="main post-feed">
        {currentItems.map((frontMatter, index) => (
          <Link to={`/post/${indexOfFirstItem + index}`} className="post-feed__list" key={index}>
            <header className="post-feed__header">
              <div
                className="post-feed__header--image"
                style={{ backgroundImage: `url(/blog/img/${frontMatter.image})` }}
              />
              <strong className="post-feed__header--title">{frontMatter.title}</strong>
            </header>

            <section className="post-feed__description">{frontMatter.description}</section>

            <footer className="post-feed__date">{frontMatter.date}</footer>
          </Link>
        ))}
      </section>

      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="pagination__item">
              <button type="button" onClick={() => paginate(number)} className="pagination__btn">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Main;