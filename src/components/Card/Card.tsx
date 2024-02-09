import { Card as CardComponent } from "react-bootstrap";
import PDFPageAsImage from "../PdfPageAsImage/PdfPageAsImage";
import { pdfjs } from "react-pdf";

interface ICard {
    title: string;
    body: string
}

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Card = () => {
    return (
        <CardComponent>
            <PDFPageAsImage pdfUrl={""}/>
            <CardComponent.Title>
                Hello World
            </CardComponent.Title>
            <CardComponent.Body>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi veniam vitae, labore obcaecati aspernatur ut, dolore voluptatum quas provident quod ullam animi non consequatur velit fugiat, corporis aliquid repellat! Officiis.
            </CardComponent.Body>
        </CardComponent>
    );
};

export default Card;