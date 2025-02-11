import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import Xbutton from '../assets/2477.svg';
import logo from '../assets/logo.png';
import search from '../assets/searchButton.svg';


function Header (){
    return(
        <div className="header">
            <div className="header-ad">
                <span className="header-ad-text">
                    첫 주문 시 10,000원 할인 쿠폰을 드립니다.
                </span>
                <button className="header-ad-button">
                    오늘 하루 그만 보기 
                    <img src={Xbutton} className="x-button"></img>
                </button>
            </div>
            <div className="head">
                <Link to="/" >
                    <img src={logo} className="logo"/>
                </Link>
                <form>
                    <input type="text" placeholder="상품 또는 스토어를 검색하세요." />
                </form>
                <Link to="/Login">
                    <button className="login">로그인</button>
                </Link>
                <Link to="/SellerOrder">
                    <button className="login">판매자로 전환</button>
                </Link>
                <Link to="/MypageOrder">
                    <button className="login">마이페이지</button>
                </Link>
                <Link to="/">
                    <button className="login">로그아웃</button>
                </Link>
            </div>
            <div className="menu-bar">
                <Link to="/" className="home">홈</Link>
                <Link to="/TodaysRec" className="home">오늘의 추천</Link>
                <Link to="/Cake" className="home">케이크</Link>
                <Link to="/MoreItem" className="home">추가 상품</Link>
                <Link to="/CS" className="home">고객지원</Link>
            </div>
        </div>
    )
}


export default Header;