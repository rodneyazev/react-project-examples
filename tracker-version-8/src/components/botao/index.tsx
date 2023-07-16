import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component <any, any>  {
  render() {
    const { type = "button" } = this.props;
    return (
      <button type={type} className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao;


/*
interface Props {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined}
}
*/

/*

class Botao extends React.Component <{children: string}> {
  render() {
    return (
      <button className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}


*/