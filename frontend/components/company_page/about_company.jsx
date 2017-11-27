import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

class AboutCompany extends React.Component {
  render() {
    const { loading, company } = this.props;
    if (loading) {
      return (<div></div>);
    } else {
      return (
        <div className="about-company">
          <h2 className="about-header">About {company.symbol}</h2>
          <div className="tag-div">
            <button className="company-tag">10 Most Popular</button>
            <button className="company-tag">100 Most Popular</button>
            <button className="company-tag">E-Commerce</button>
            <button className="company-tag">Retail</button>
            <button className="company-tag">Manufacturing</button>
            <button className="company-tag">Internet</button>
          </div>
          <span className="company-bio">{company.biography}</span>
        </div>
      );
    }
  }
}

export default AboutCompany;
