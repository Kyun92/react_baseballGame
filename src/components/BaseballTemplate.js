import React, { Fragment } from 'react';
import './BaseballTemplate.css';

const BaseballTemplate = ({
  form,
  children,
  startGame,
  start,
  homerun,
  checkHomerun,
}) => {
  return (
    <main className="baseball-template">
      <header className="baseball-template-header">
        <section className="title">Baseball</section>
      </header>
      {start ? (
        <Fragment>
          {checkHomerun ? (
            <section className="baseball-template-form">{homerun}</section>
          ) : (
            <section className="baseball-template-form">{form}</section>
          )}
          <section className="baseball-template-list">{children}</section>
        </Fragment>
      ) : (
        <Fragment>
          <section className="baseball-template-start">
            <div className="baseball-start-button" onClick={startGame}>
              start
            </div>
          </section>
        </Fragment>
      )}
    </main>
  );
};

export default BaseballTemplate;
