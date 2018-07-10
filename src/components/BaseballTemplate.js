import React, { Fragment } from 'react';
import './BaseballTemplate.css';

const BaseballTemplate = ({ form, children, startGame, start, homerun }) => {
  return (
    <main className="baseball-template">
      <header className="baseball-template-header">
        <section className="title">baseball</section>
      </header>
      {/* {homerun} */}
      {start ? (
        <Fragment>
          <section className="baseball-template-form">{form}</section>
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
