import React from 'react';
import ImageGallery from 'react-image-gallery'
import { fetchActivty } from '../../../services/activity'
import './style.css'

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

class ListGalery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
      this.fetchActivty()
    }

    fetchActivty = async () => {
      const { id } = this.props.match.params
      const ress = await fetchActivty(id)
      console.log('res activity', ress)
    }

    render() { 
        return ( <ImageGallery items={images} /> );
    }
}
 
export default ListGalery;