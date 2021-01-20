import React from 'react';

import './ControlBlockPanel.css';
import { Button } from '../Button/Button';

export const ControlBlockPanel = (props) => (
  <React.Fragment className="control-block">
    <Button className="view-button" name="view"/>
    <Button className="postpone-button" name="postpone"/>
    <Button className="done-button" name="done"/>
    <Button className="delete-button" name="delete"/>
  </React.Fragment>
);


