import React from 'react'

function Card(props) {
    return (
        <>
        <div className="col-md-4 col-10 mx-auto">
                      <div class="card">
  <img src={props.imgsrc} class="card-img-top" alt="Image"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.description}</p>
    <a href={props.link} class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                      </div>
        </>
    )
}

export default Card
