// 저작권 표시
const Copyright = () => {
  return (
    <div className="copyrigth">Copyright 2023. Weeji all rights reserved.</div>
  );
};

//로고 표시
const Logo = () => {
  return (
    <div className="logo">
      <img src="/Logo.png" alt="로고"></img>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="Footer">
      <Logo />
      <Copyright />
    </div>
  );
};

export default Footer;
