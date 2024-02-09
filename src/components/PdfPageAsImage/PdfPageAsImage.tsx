import { Document, Page } from 'react-pdf';

// Enable pdfjs worker

const PDFPageAsImage = ({ pdfUrl }: { pdfUrl: string}) => {
  return (
    <div>
      <Document
        file={pdfUrl} // Pass the URL directly
        renderMode="canvas" // Render mode can be 'svg' or 'canvas'
      >
        <Page pageNumber={1} width={600} />
      </Document>
    </div>
  );
};

export default PDFPageAsImage;
