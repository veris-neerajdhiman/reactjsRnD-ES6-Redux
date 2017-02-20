import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import Homepage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursePage from './components/course/CoursePage';
import ManageCourseAPge from './components/course/ManageCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage}/>
    <Route path="courses" component={CoursePage}/>
    <Route path="course/:id" component={ManageCourseAPge}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);

