import React from 'react'
import './style.css'

class CardData extends React.Component {
      constructor(props) {
          super(props);
          this.state = {  }
      }
      render() { 
            const { title, description, image, date, isWork } = this.props

          return (
            <div className="card">
                  <div className="image">
                        <img src={image} />
                  </div>
                  <div className="text">
                        <h3>{title.length > 15 ? `${title.substr(0, 22)}...` : title}</h3>
                        <p>{description.length > 30 ? `${description.substr(0, 30)}...` : description}</p>
                        <p>{date}</p>
                        {isWork ? <p>Ket: {isWork}</p> : null}
                        
                  </div>
            </div>
          );
      }
  }
   
  export default CardData;