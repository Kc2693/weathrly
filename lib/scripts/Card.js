import React from 'react';
import '../css/Card-style.css'

export default function Card(props) {
  return (
    <article className="card">
      <h5>{props.hour}</h5>
      <img src={props.img} />
      <h5>{props.temp}</h5>
    </article>
  )
}


  // hour || day
  // image
  // temperature || high/low
