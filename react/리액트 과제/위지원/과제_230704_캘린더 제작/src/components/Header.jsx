const Title = () => {
  return (
    <div className="CTitle">
      <div className="CYear">2023 / </div>
      <div className="CMonth">07</div>
    </div>
  );
};

// 헴버거 버튼 그리기
const Hamburger = () => {
  return (
    <div className="hamburger">
      <div className="ham"></div>
      <div className="ham"></div>
      <div className="ham"></div>
    </div>
  );
};

// 헤더 영역 전체를 그리는 함수
const Header = () => {
  return (
    <div className="header">
      <Title />
      <Hamburger />
    </div>
  );
};

export default Header;
