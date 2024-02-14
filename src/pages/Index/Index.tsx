import { useEffect, useState } from 'react';
import './Index.css';
import { Col, Container, Row } from 'react-bootstrap';
import Constants from '../../utils/constants';
import AxiosRequest, { IRequestAxios } from '../../utils/axios';
import Card from '../../components/Book/Book';
import { IBook, IBookResponse } from '../../interfaces/IBookResponse';

const Index = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  
  useEffect(() => {
    const getData = async () => {
      const url = `${Constants.BACKEND_URL}binnacle`;
      const request: IRequestAxios = {
        method: "GET",
        url
      };
      const response = await AxiosRequest<IBookResponse>(request);
      setBooks(response.data.data);
    };
    getData();
  }, []);

  return (
    <Container>
      <h1>Welcome</h1>
      <Row md="12" style={{width: "75%"}}>
        { books.map(((book, key) => {
          return <Col md="4">
            <Card id={book.id} title={book.title} author={book.author} image={book.image} key={key} ></Card>
          </Col>
        })) }
      </Row>
    </Container>
  )
}

export default Index