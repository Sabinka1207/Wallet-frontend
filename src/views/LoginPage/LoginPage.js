import React from "react";
import LoginForm from "../../components/LoginForm";
import imgTablet1x from "../../img/tablet/login-tablet@1x.png";
import imgTablet2x from "../../img/tablet/login-tablet@2x.png";
import imgTablet3x from "../../img/tablet/login-tablet@3x.png";
import imgTablet4x from "../../img/tablet/login-tablet@4x.png";
import imgDesktop1x from "../../img/desktop/login-desktop@1x.png";
import imgDesktop2x from "../../img/desktop/login-desktop@2x.png";
import imgDesktop3x from "../../img/desktop/login-desktop@3x.png";
import imgDesktop4x from "../../img/desktop/login-desktop@4x.png";
import "../../css/main.min.css";

export default function LoginPage() {
  return (
    <div className="loginPageContainer">
      <div className="loginPageIMGContainer">
        <picture>
          <source srcSet={`${imgDesktop1x} 1x, ${imgDesktop2x} 2x, ${imgDesktop3x} 3x, ${imgDesktop4x} 4x`}
            media="(min-width: 1280px)" />
          <source srcSet={`${imgTablet1x} 1x, ${imgTablet2x} 2x, ${imgTablet3x} 3x, ${imgTablet4x} 4x`}
            media="(min-width: 768px)" />
          <img className="loginPageImg" src={imgTablet1x} alt="" />
        </picture>
        
        <p className="loginPageText">Finance App</p>
      </div>
      <div className="loginPageFormContainer">
        <LoginForm />
      </div>
    </div>
  );
}
