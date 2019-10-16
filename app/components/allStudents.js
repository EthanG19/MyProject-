import React, { Component } from 'react';
import { getAllStudentsThunk } from "../reducers/index";
import { connect } from 'react-redux'


class AllStudents extends Component {
    async componentDidMount() {
        await this.props.getAllStudentsThunk 
    }
    render() {
        return (
          <div>
            <h1>Students{console.log()}</h1>  
            <div>
              {this.props.students.map(student => (
                <div key={student.id}>
                  <h2>{student.firstName}</h2>
                  <p>{student.email}</p>
                  <img src={student.imageUrl}/>
                </div>
              ))}
            </div>
          </div>
        );
      }
    }
const mapStateToProps = state => {
    return {
        students: state.students
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllStudentsThunk: () => dispatch(getAllStudentsThunk())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(AllStudents);  