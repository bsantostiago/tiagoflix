import React from "react";

function ButtonLink(props) {
  /* 
  props => {
    children: "é o conteúdo da tag", // já vem automático
    className: "o que alguem passar",
    href: "/"
  }
  */  
  console.log(props);
  return (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
}

export default ButtonLink;  