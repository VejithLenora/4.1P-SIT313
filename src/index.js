import React from 'react';
import ReactDOM from 'react-dom';
import TopNavigation from './TopNavigation'
import HeaderImage from './HeaderImage';
import FeaturedFreelancers from './FeaturedFreelancers'
//import FreelancerList from './FreelancerList';
import faker from 'faker';
import FreelancerListComponent from './FreelancerList';
import CustomerListComponent from './FeaturedCustomersList';
import EmailRegistration from './EmailRegistration';
import FooterSection from './FooterSection';

console.log(faker.image.avatar());
ReactDOM.render(<TopNavigation />, document.getElementById('topnav'));
ReactDOM.render(<HeaderImage />, document.getElementById('himg'));
ReactDOM.render(<FeaturedFreelancers />, document.getElementById('ff'));
ReactDOM.render(<FreelancerListComponent />, document.getElementById('fft'));
ReactDOM.render(<CustomerListComponent />, document.getElementById('customer-list')); 
ReactDOM.render(<EmailRegistration />, document.getElementById('email-registration'));
ReactDOM.render(<FooterSection />, document.getElementById('footer-section'));