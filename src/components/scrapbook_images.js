import React, {Component} from 'react';
import ImageModal from './image_modal'

class ScrapbookImage extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            show: false
        }
    }
    showModal=()=>{
        console.log('clicked an image')
        this.setState({
            show: true
        })
    }
    hideModal =() =>{
        this.setState({
            show: false
        })
    }
    render(){
        const{src, style} = this.props.about;
        return(
            <div>
                <img onClick ={this.showModal} className = 'scrapbook-image' src={src} style = {style}/>
                { this.state.show ? <ImageModal src = {src} click = {this.hideModal}/> : '' }
            </div>
            )
    }
}
export default ScrapbookImage
