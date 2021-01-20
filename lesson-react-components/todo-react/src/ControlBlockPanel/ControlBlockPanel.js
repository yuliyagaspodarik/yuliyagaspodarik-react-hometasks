import React from 'react';

import './ControlBlockPanel.css';
import { Button } from '../Button/Button';

export const ControlBlockPanel = () => (
  <div className="control-block">
    <Button className="view-button" name="View"/>
    <Button className="postpone-button" name="Postpone"/>
    <Button className="done-button" name="Done"/>
    <Button className="delete-button" name="Delete"/>
  </div>
);


