import React from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <Jumbotron fluid className="d-flex w-100 mx-auto flex-column align-items-center justify-content-center p-0 m-0" style={{ height: 'calc(100vh - 3.5em)' }}>
          <h1>Welcome to the Stock Market Page!</h1>
          <p>
          You may click on stocks to view all the stocks or search to view the latest 100 days of activity.
          </p>
          <p>
          <Button variant="primary" href="/stocks">View Stocks</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default Home;
