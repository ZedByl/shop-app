import React from 'react'
import logo from '../../../assets/logo.svg'
import './footer.scss'

const Footer = () => (
    <>
        <footer className="footer">
            <div className="footer__inner"><a
              className="footer__logo"
              href="/"
                                           >
                <img
                  src={ logo }
                  alt=""
                  className="header__logo__svg"
                />
                <span className="footer__logo__text">Куда пицца</span></a>
                <p className="footer__copyright">&copy; Куда Пицца не является рестораном по продаже еды. Сайт сделан в
                    учебных целях.</p>
            </div>
        </footer>
    </>
)

export default Footer
