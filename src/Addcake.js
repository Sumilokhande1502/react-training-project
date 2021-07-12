import axios from "axios";
import React, { Component } from "react";

class FileUpload extends Component {
  state = {
    selectedFile: null,
  };

  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    let tokenUpload = localStorage.getItem('Data')
    const formData = new FormData();
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    // console.log(this.state.selectedFile);
    // console.log('Upload page', tokenUpload);

    axios
      .post("https://apifromashu.herokuapp.com/api/upload", formData,{
        header:{
          authtoken: tokenUpload,
        }
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        return error;
      });
  };
  render() {
    return (
      <div className="row mt-3 mb-5">
        <div class="col-md-8 offset-md-4">
          <form className="w-50">
            <h1 className="alignCenter">Add Cakes</h1>
            <div class="form-group justify-content-start">
              <label className="mb-0" for="exampleInputEmail1">
                Select File
              </label>
              <input
                onChange={this.onFileChange}
                className="form-control mb-2"
                type="file"
              />
              <button
                onClick={this.onFileUpload}
                type="button"
                className="btn btn-outline-primary form-control mt-2"
              >
                Upload!
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FileUpload;
