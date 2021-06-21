import React from 'react';
import axios from 'axios';

export default class Marketing extends React.Component {
  state = {
    data: [],
    selectedFile: null,
  }



  componentDidMount() {
    //axios.get("http://localhost:8081/get-file/" + "acme-logo.png")
    axios.get("http://localhost:8081/get-all-files")
      .then(res => {
        const data = res.data.files;
        this.setState({ data });
      })
  }

  sendFile(file) {
    console.log(file);
    axios.post("http://localhost:8081/post-file", {file: new File(file), fileName: file.name})
      .then(res => {
        console.log(res.status);
      })
  }

  render() {

    return (
      <div>
        <div className="page-header">Marketing Files</div>
        <br /><br />

        <h2>Existing Files: click to download</h2>
        {this.state.data && this.state.data.map(file => 
          <div><a className="nav-bar-button" href={'http://localhost:8081/get-file/'+file} target="_blank" download>{file}</a><br /><br /></div>
        )}

        <h2>Upload a new file:</h2>
        <input type="file" id="file" ref="fileUploader" onChange={(e) => 
          this.setState({selectedFile: e.target.files[0]})
          
        }/> 
        <button className="nav-bar-button" onClick={() => {
          //this.sendFile(this.state.selectedFile)

          const data = new FormData() ;
          data.append('file', this.state.selectedFile);
          axios.post("http://localhost:8081/post-file/", data, this.state.selectedFile.fileName)
              .then(res => { // then print response status
                console.log(res.statusText)
              })
        }} >Submit</button>
      </div>
    )
  }
}