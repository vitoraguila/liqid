import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { saveSurvey, resetSurveys } from '../actions';

// APIS
import api from '../services/api';

// LIBS
import PropTypes from 'prop-types';

export function surveys(WrappedComponent) {
  class SurveyQuestions extends Component {
    constructor(props) {
      super(props);

      this.state = {
        questions: {},
        answer: {},
        error: '',
        errorInfo: ''
      };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }

    async componentDidMount() {
      //this.props.resetSurveys();

      try {
        const response = await api.surveys();

        const inputFill = this.props.surveys
          ? this.props.surveys.map(e => ({ [e.id]: e.answer }))
          : {};

        this.setState({
          questions: response.data,
          answer: inputFill,
          currentPage: this.props.surveys
            ? Object.keys(this.props.surveys).length + 1
            : 1
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
        this.setState({ error });
      }
    }

    saveAnswer = (id, value) => {
      console.log(id);
      console.log(value);
      console.log(this.state.questions);

      const data = this.state.questions.surveys
        .filter(e => e.id === id)
        .map(e => ({
          id: id,
          question: e.question,
          type: e.type,
          answersOptions: e.answersOptions,
          answer: value
        }));

      console.log(data);

      let surveys = [];
      if (this.props.surveys) {
        surveys = this.props.surveys.filter(e => e.id !== id);
      }

      console.log(surveys);

      let newArray = surveys.concat(data);

      console.log(surveys);
      console.log(newArray);

      this.props.saveSurvey(newArray);

      this.setState({
        currentPage: this.state.currentPage + 1
        //answer: {}
      });
    };

    onChangeAnswer = e => {
      console.log(e.target.name);
      console.log(e.target.value);

      this.setState({
        answer: { ...this.state.answer, [e.target.name]: e.target.value }
      });
    };

    goBack = () => {
      this.setState({ currentPage: this.state.currentPage - 1 });
    };

    render() {
      const { questions, currentPage, answer, error, errorInfo } = this.state;
      console.log(questions);
      console.log(this.props.surveys);
      console.log(error);
      console.log(errorInfo);

      if (error) {
        return <div>Ops, Something went wrong</div>;
      }

      return (
        <WrappedComponent
          {...this.props}
          questions={questions.surveys}
          currentPage={currentPage}
          saveAnswer={this.saveAnswer}
          onChangeAnswer={this.onChangeAnswer}
          answer={answer}
          goBack={this.goBack}
        />
      );
    }
  }

  const mapStateToProps = ({ survey }) => ({
    surveys: survey.data.surveys
  });

  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        saveSurvey,
        resetSurveys
      },
      dispatch
    );

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(SurveyQuestions);
}
