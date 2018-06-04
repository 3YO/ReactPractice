import React, {
    Component,
    Fragment
} from 'react';

import { connect } from 'react-redux';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

import * as actions from '../../store/actions/index';

class MyApps extends Component {

    // state = {
    //     testredux: 'test string - redux'
    // }
    
    render(){

        console.log("??? " + this.props.testredux2);

        return (
            <Fragment>
                <p>in MyApps</p>
                <div className="row">
                    <Breadcrumb></Breadcrumb>
                </div>
                <div className="row">
                    {/* <p>{this.state.testredux}</p> */}
                    <p>test 1 {this.props.testvar}</p>
                     <p>test 2 {this.props.othertestvar}</p>
                    <p onClick={this.props.loadTestVar}>test 3 {this.props.testvar}</p>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return state;
}


export default connect(mapStateToProps, actions)(MyApps);