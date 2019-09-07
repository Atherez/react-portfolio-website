import React from 'react';
import PageWrapper from './component/PageWrapper'
import {BrowserRouter as Router,Route} from 'react-router-dom';

//Pages
import HomePage from './component/Pages/Home'
import AboutPage from './component/Pages/About'
import ContactPage from './component/Pages/Contact'
import PortfolioPage from './component/Pages/Portfolio';
import TeamPage from './component/Pages/Team';

//Re-usable Components
import Footer from './component/Common/Footer';

const footerDetails={
  facebook:"",
  linkedin:"",
  twitter:"",
  privacyPage:"",
  termsPage:""
}

function App() {
  return (
    <div className="App">
        <Router>
            <PageWrapper>
              <Route 
                exact={true}
                path="/"
                component={HomePage}
              />
              <Route
                path="/about"
                component={AboutPage}
              />
              <Route
              path="/contact"
              component={ContactPage}
               />
               <Route
              path="/portfolio"
              component={PortfolioPage}
               />
               <Route 
              path="/team"
              component={TeamPage}
              />
               <Footer {...footerDetails} />
            </PageWrapper>
        </Router>
    </div>
  );
}

export default App;
