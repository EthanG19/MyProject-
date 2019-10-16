import React, { Component } from 'react';
import { getAllCampusesThunk } from "../reducers/index";
import { connect } from 'react-redux'
 
class AllCampuses extends Component {

    async componentDidMount() {
        await this.props.getAllCampusesThunk
    }
    render() {
        return (
          <div>
            <h1>Campuses</h1>
            <div>
              {this.props.campuses.map(campus => (
                <div key={campus.id}>
                  <h2>{campus.name}</h2>
                  <p>{campus.description}</p>
                  <img src={campus.imageUrl} />
                </div>
              ))}
            </div>
          </div>
        );
      }
    }

const mapStateToProps = state => {
    return {
        campuses: state.campuses
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllCampusesThunk: () => dispatch(getAllCampusesThunk())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(AllCampuses);  