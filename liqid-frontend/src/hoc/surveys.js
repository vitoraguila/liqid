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
        answer: {}
      };
    }

    componentWillMount() {
      this.props.resetSurveys();
    }

    async componentDidMount() {
      this.props.resetSurveys();

      try {
        const response = await api.surveys();

        this.setState({
          questions: response.data,
          currentPage: this.props.surveys
            ? Object.keys(this.props.surveys).length + 1
            : 1
        });
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
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

      let array = this.props.surveys || [];

      array.push({ data });

      console.log(array);

      this.props.saveSurvey(array);

      this.setState({
        currentPage: this.state.currentPage + 1,
        answer: {}
      });
    };

    onChangeAnswer = e => {
      this.setState({
        ...this.state.answer,
        answer: { [e.target.name]: e.target.value }
      });
    };

    render() {
      const { questions, currentPage, answer } = this.state;
      console.log(questions);
      console.log(this.props.surveys);

      return (
        <WrappedComponent
          {...this.props}
          questions={questions.surveys}
          currentPage={currentPage}
          saveAnswer={this.saveAnswer}
          onChangeAnswer={this.onChangeAnswer}
          answer={answer}
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
