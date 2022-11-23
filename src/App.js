import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="page-all">
        <h1 className="m-title">
          블록체인 기술을 이용한 해양 환경보호 기부 시스템
        </h1>
        <p className="m-team">By 열정너구리</p>
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
        <div id="content">
          <section id="main-section"></section>
        </div>
        <footer id="main-footer"></footer>
      </div>
    </>
  );
}

export default App;
