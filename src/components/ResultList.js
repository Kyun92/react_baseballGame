import React, { Component } from 'react';
import Result from './Result';
import './ResultList.css';

// scroll 고정 위해 
class ResultList extends Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.array !== this.props.data) {
      const {
        scrollTop, scrollHeight
      } = this.list;

      return {
        scrollTop, scrollHeight
      };
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      const { scrollTop } = this.list;
      if (scrollTop !== snapshot.scrollTop) return;
      const diff = this.list.scrollHeight - snapshot.scrollHeight;
      this.list.scrollTop += diff;
    }
  }


  render(){
    const { data } = this.props;
    const list = data.map(input => <Result key={input.count} input={input} />);
    return <div ref={ref => {
      this.list = ref;
    }} className="result-list">{list}</div>;
  } 
};

export default ResultList;
