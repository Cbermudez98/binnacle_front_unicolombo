import { useEffect } from 'react';
import './Index.css';
import { Col, Container, Row } from 'react-bootstrap';
import Constants from '../../utils/constants';
import AxiosRequest, { IRequestAxios } from '../../utils/axios';
import Card from '../../components/Card/Card';

const Index = () => {
  useEffect(() => {
    const getData = async () => {
      const url = `${Constants.BACKEND_URL}binnacle`;
      const request: IRequestAxios = {
        method: "GET",
        url
      };
      const response = await AxiosRequest(request);
      console.log(response);
    };
    getData();
  }, []);

  return (
    <Container>
      <h1>Welcome</h1>
      <Row>
        <Col md="4">
          <Card></Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Index