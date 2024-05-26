import React from 'react'
import "./certificate.css"

const Certificate = () => {
  return (
    <div className="certificate-container">
      <div className="start-elements">
        <div className="cert-title">
          Başarı Belgesi
        </div>
        <div className="cert-winner">
          Alperen İlgaz
        </div>
          <div className="cert-descrip">
            <p>Bu belge, ATASENG Kulübü tarafından düzenlenen 1. Geleneksel Algoritma Yarışması'nda üstün başarı göstererek birincilik derecesi elde eden 
            Alperen İlgaz'a takdim edilmiştir. </p>
          </div>
          <div className="cert-footer">
            <div className="best-leader">
              <div className="advisor">
                ATASENG Kulüp Danışmanı
              </div>
              
              <div className="advisor-name">
                <p>Osman Durdağ</p>
              </div>
            </div>
            <div className="cert-date">
              <div className="date-header">
                  Tarih
              </div>
              <p id='date'>26.05.2024</p>
            </div>
          </div>
          </div>
         
          
      </div>
      

  )
}

export default Certificate
