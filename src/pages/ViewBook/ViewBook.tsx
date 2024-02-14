import { useEffect, useState } from 'react';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import type { ToolbarSlot, TransformToolbarSlot } from '@react-pdf-viewer/toolbar';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import AxiosRequest, { IRequestAxios } from '../../utils/axios';
import Constants from '../../utils/constants';
import { useParams } from 'react-router-dom';
import { IBook } from '../../interfaces/IBookResponse';
import "./ViewBook.css";
import { Container } from 'react-bootstrap';

const ViewBook = () => {
    // const toolbarPluginInstance = toolbarPlugin();
    // const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;
    // const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
    //     ...slot,
    //     Download: () => <></>,
    //     DownloadMenuItem: () => <></>,
    //     EnterFullScreen: () => <></>,
    //     EnterFullScreenMenuItem: () => <></>,
    //     Open: () => <></>,
    //     Print: () => <></>,
    // });
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        // renderToolbar() {   
        //     return <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
        // }
    });
    const [pdfFile, setPdfFile] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const { id } = useParams();
    
    useEffect(() => {
        const getData = async () => {
            try {
                const url = `${Constants.BACKEND_URL}binnacle/${id}`;
                const request: IRequestAxios = {
                    method: 'GET',
                    url
                };
                const { data } = await AxiosRequest<IBook>(request);
                if (!data.url) {
                    throw new Error('Invalid PDF URL');
                }
                setPdfFile(data.url);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        getData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Container style={{ width: "70%" }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                <Viewer fileUrl={ pdfFile } plugins={[defaultLayoutPluginInstance]} defaultScale={SpecialZoomLevel.PageFit}/>
            </Worker>
        </Container>
    );
};

export default ViewBook;
