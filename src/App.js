import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import FILE from "./test.pdf";

//import { pdfjs } from 'react-pdf';
//import { pdfjs } from 'react-pdf';
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class App extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          //file={FILE}
          file="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf"
          // file={{
          //   url: "http://www.africau.edu/images/default/sample.pdf",
          //   httpHeaders: {
          //     "Access-Control-Allow-Origin": "*",
          //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
          //   },
          //   withCredentials: true
          // }}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}

export default App;
