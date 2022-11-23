import { Link } from "react-router-dom";
function M5() {
  return (
    <>
      <div className="page-all">
        <h1 className="m-title">
          블록체인 기술을 이용한 해양 환경보호 기부 시스템
        </h1>
        <h2 className="m-team">By 열정너구리</h2>
        <nav id="main-nav">
          <div className="pull">
            <Link to="/M1">
              <button className="btn">개발동기</button>
            </Link>
            <span> </span>
            <Link to="/M2">
              <button className="btn">작품내용</button>
            </Link>
            <span> </span>
            <Link to="/M3">
              <button className="btn">설계내용</button>
            </Link>
            <span> </span>
            <Link to="/M4">
              <button className="btn">결과 및 기대효과</button>
            </Link>
            <Link to="/M5">
              <button className="btn">이벤트</button>
            </Link>
          </div>
        </nav>
        <hr className="line"></hr>
        <div className="content">
          <h2 className="sub_title">
            상품: 1등 문상 5000원(1명) / 2등 메가커피 아메리카노 쿠폰(2명)
          </h2>
          <span className="write">
            해양환경보호에 힘써주세요! 열정너구리팀에 스티커 붙히고 해양환경관련
            퀴즈를 풀어주세요! 그러면 응모완료! 추첨은 랜덤이며 당첨자 상품은
            공학작품 전시회 종료후 개별로 드리겠습니다!
          </span>
          <br></br>
          <a style={{font-size:"3em",color:"red"}}href="https://forms.gle/oxW4KHo3zi86JSF76">{"퀴즈 풀러가기!!"}</a>
        </div>
        <footer id="main-footer"></footer>
      </div>
    </>
  );
}

export default M5;
