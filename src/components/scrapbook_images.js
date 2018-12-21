import React, {Component} from 'react';

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
            <div className = 'image-container'>
            <div id="myModal" className="modal">
                {/* <!-- The Close Button --> */}
                <span className="close">&times;</span>

                {/* <!-- Modal Content (The Image) --> */}
                <img className="modal-content" src = {src}/>

                {/* <!-- Modal Caption (Image Text) --> */}
                <div id="caption"></div>
            </div>
            <img onClick ={this.showModal} className = 'scrapbook-image' src={src} style = {style}/>
            </div>
            )
    }
}
export default ScrapbookImage
