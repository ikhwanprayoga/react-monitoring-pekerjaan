import React from 'react'
import './style.css'

class CardData extends React.Component {
      constructor(props) {
          super(props);
          this.state = {  }
      }
      render() { 
            const { title, description, image, date } = this.props

          return (
            <div className="card">
                  <div className="image">
                        <img src={image} style={{width:"100%"}} />
                  </div>
                  <div className="text">
                        <h3>{title.length > 15 ? `${title.substr(0, 15)}...` : title}</h3>
                        <p>{description.length > 30 ? `${description.substr(0, 30)}...` : description}</p>
                        <p>{date}</p>
                  </div>
            </div>
          );
      }
  }
   
  export default CardData;