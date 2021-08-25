import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';


import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from './Home';
import Recommend from './TodaysRec';
import Cake from './Cake';
import More from './MoreItem';
import CustomerService from './CS';



const Pages = () =>{
  return (
    <Router>
      <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/todaysRec" component={Recommend} />
        <Route exact path="/cake" component={Cake} />
        <Route exact path="/more" component={More} />
        <Route exact path="/customer-service" component={CustomerService} />
      <Footer address="123 Lorem Ipsum Street Jakarta, Indonesia" tel="+ 72 4500 1240" email="tanahcon@companymail.com"/>
    </Router>    
  );
};  

export default Pages;


