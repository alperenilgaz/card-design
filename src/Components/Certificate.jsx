import React from 'react'
import "./certificate.css"
import logo from "../Assets/img/logo.jpg"
const Certificate = () => {
  return (
    <div className="certificate-container">
        <div className="certificate">
            <div className="certificate-header">
               <div className="logo">
                <img style={{width:"100px"}} src={logo} alt="" />
               </div>
               <div className="header-title">
                <p>ATASENG ALGORİTMA YARIŞMA SERTİFİKASI</p>
               </div>
            </div>
            <div className="certificate-content">
                <div className="rank">
                    <span>1st</span><i class="bi bi-trophy-fill"></i>
                </div>
                <div className="info">
                    <p>2023-2024 ATASENG Algoritma Yarışması 1.’si</p>
                    <div className="winner">
                        <h2>Alperen İlgaz</h2>
                    </div>
                </div>
            </div>
            <div className="certificate-footer">
                <div className="score">
                <i class="bi bi-code-slash"></i>
                <p>Toplam 490 puan aldı</p>
                </div>
                <div className="department">
                <i class="bi bi-mortarboard"></i>
                <p>Yazılım Mühendisliği</p>
                </div>
                <div className="linkedin">
                <i class="bi bi-linkedin"></i>
                <p>Linkedin</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certificate