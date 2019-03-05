import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { saveSurvey, resetSurveys } from '../actions';

// APIS
import api from '../services/api';

export function surveys(WrappedComponent) {
  class SurveyQuestions extends Component {
    constructor(props) {
      super(props);

      this.state = {
        questions: {},
        answer: {},
        error: '',
        errorInfo: '',
        showAllAnswers: false
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
          ? this.props.surveys.map(e => ({ id: e.id, answer: e.answer }))
          : {};

        this.setState({
          showAllAnswers: false,
          questions: response.data,
          answer: inputFill,
          currentPage: this.props.surveys
            ? Object.keys(this.props.surveys).length + 1
            : 1
        });
      } catch (error) {
        this.setState({ error });
      }
    }

    showAllAnswers = () => {
      this.setState({ showAllAnswers: true });
    };

    saveAnswer = (id, value) => {
      const data = this.state.questions.surveys
        .filter(e => e.id === id)
        .map(e => ({
          id: id,
          question: e.question,
          type: e.type,
          answersOptions: e.answersOptions,
          answer: value
        }));

      let surveys = [];
      if (this.props.surveys) {
        surveys = this.props.surveys.filter(e => e.id !== id);
      }

      let newArray = surveys.concat(data);

      this.props.saveSurvey(newArray);

      this.setState({
        currentPage: this.state.currentPage + 1
      });
    };

    onChangeAnswer = e => {
      this.setState({
        answer: { ...this.state.answer, [e.target.name]: e.target.value }
      });
    };

    goBack = () => {
      this.setState({ currentPage: this.state.currentPage - 1 });
    };

    render() {
      const {
        questions,
        currentPage,
        answer,
        error,
        showAllAnswers
      } = this.state;

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
          showAllAnswers={this.showAllAnswers}
          showAnswers={showAllAnswers}
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
