import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const NoMatch:FC = () => (
  <>
    <div>page not found</div>
    <Link to="/">go home</Link>
  </>
);
