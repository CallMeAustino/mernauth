import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ImageUploader from 'react-images-upload';
import ReactFileReader from 'react-file-reader';

const VALID_FILETYPES = {
    "image/png": true,
    "image/jpeg": true,
    "image/gif": true,
    "image/bmp": true,
    "image/jpg": true
}
  

class Robotcreator extends Component {
    
    constructor(props) {
        super(props);
        this.state = {image: null, fileTooBig: false, invalidType: false, imageURL: null}
        this.handleFileChange = this.handleFileChange.bind(this)

         this.state = { 
             picture: null,
             fileTooBig: false, 
             image: null, 
             photoURL: null
            };
         this.onDrop = this.onDrop.bind(this);
    }
 
    componentDidUpdate() {
    }

    onDrop(picture) {
        debugger
        this.setState({
            picture: picture
        });
    }
 
    handleFileChange(e) {
        const file = e.target.files[0];
        if (file.size > 1000000) {
          this.setState({fileTooBig: true, image: null, photoURL: null})
          return false;
       }

       if (!VALID_FILETYPES[file.type]){
         // Extra security in case the html accept gets bypassed.
         this.setState({invalidType: true, image: null, photoURL: null})
         return false
       }

        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          this.setState({ image: file, photoURL: fileReader.result, fileTooBig: false, invalidType: false});
        }
        fileReader.readAsDataURL(file);
    }

    render() {

        return (
            <div className="char-creation-pane"> 
            <h1>Image</h1>
            <form className="char-form" onSubmit={this.passTheProps}>  
                <div className="image-preview">
                {this.state.photoURL ? <img src={this.state.photoURL}/> : <div className="image-placeholder"><span>Image Preview </span></div>}
                </div> 
                  <div className="char-form-row">
                    <input className="char-form-image"
                    type="file"  
                    onChange={this.handleFileChange} 
                    accept="image/png, image/jpeg, image/gif, image/bmp, image/jpg"
                    />
                  <input type="submit" className="submit" value="Submit" disabled={!this.state.image} />
                </div>
               

                <ul className="error-zone">
                  {this.state.fileTooBig && <li>File Size must be 500 kB or less</li>}
                  {this.state.invalidType && <li>Png, Jpeg, Gif, and Bmp only</li>}
                </ul>
            </form>
          </div>
        );
    }
}

 export default connect()(Robotcreator);

  {/* <ImageUploader
    withIcon={true}
    buttonText='Choose image'
    onChange={this.onDrop}
    imgExtension={['.jpg', '.gif', '.png', '.gif']}
    maxFileSize={5242880}
    /> */}