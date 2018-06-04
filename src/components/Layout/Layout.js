import React, {Fragment} from 'react';

// import Aux from '../../hoc/Aux';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const layout = (props) => (
  <Fragment>
    <Header></Header>
      <div className="container-fluid">
        <div className="row">
          <main className="col-12">
            {props.children}
          </main>
        </div>
      </div>
  <Footer></Footer>
  </Fragment>
);

export default layout;
