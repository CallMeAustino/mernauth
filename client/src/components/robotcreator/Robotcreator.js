import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ImageUploader from 'react-images-upload';
import ReactFileReader from 'react-file-reader';

class Robotcreator extends Component {
    
    constructor(props) {
        super(props);
         this.state = { 
             picture: null,
            };
         this.onDrop = this.onDrop.bind(this);
    }
 
    componentDidUpdate() {
        const image = document.getElementById('image-preview');
        image.srcObject = this.state.picture;
    }

    onDrop(picture) {
        debugger
        this.setState({
            picture: picture
        });
    }
 
    render() {

        return (
            <>
            
                <img id='image-preview'/>
                <div style={{ verticalAlign: 'center' }}className="center">
                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose image'
                        onChange={this.onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />
                </div>
            </>
        );
    }
}

 export default connect()(Robotcreator);