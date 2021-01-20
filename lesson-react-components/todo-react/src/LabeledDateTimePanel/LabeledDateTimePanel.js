import React from 'react';

import './LabeledDateTimePanel.css';
import { FormattedDatePanel } from "../FormattedDatePanel/FormattedDatePanel";

export const LabeledDateTimePanel =  ({ label, dateTime }) =>
  dateTime === null ? null : (
  <React.Fragment>
    <dt>{label}</dt>
    <dd><FormattedDatePanel dateTime={dateTime}/></dd>
  </React.Fragment>
);
