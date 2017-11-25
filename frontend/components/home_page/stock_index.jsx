import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import StockIndexItem from './stock_index_item';
import LoadingIcon from '../loading_icon';

class StockIndex extends React.Component {
  // constructor() {
  //   super();
  //   this.addingStocks = false;
  //   this.state = {
  //     stocks: [],
  //   };
  // }

  componentWillMount() {
    this.props.fetchCompanies();
  }

  // componentWillReceiveProps(newProps) {
  //   if (!newProps.loading
  //     && newProps.companiesInvested[0]
  //     && this.addingStocks === false) {
  //     this.addingStocks = true;
  //     this.addStock(newProps.companiesInvested);
  //   }
  // }
  //
  // addStock(allStocks) {
  //   const currentStocks = this.state.stocks;
  //   currentStocks.push(allStocks[0]);
  //   this.setState({stocks: currentStocks});
  //   if (allStocks.length > 1) {
  //     setTimeout(() => this.addStock(allStocks.slice(1)), 100);
  //   }
  // }

  // addStockTimedCorrectly(allStocks) {
  //   return () => this.addStock(allStocks).
  //     then(this.props.stockIndexHasMounted());
  // }


  render() {
    const {companiesInvested, loading } = this.props;
    return (
      loading ?
      <LoadingIcon /> :
      <div className="stock-index">
        <h4 className="sidebar-header">
          Stocks
        </h4>
        <ul>
          {companiesInvested.map(company =>
            <StockIndexItem
              key={company.id}
              company={company} />
          )}
        </ul>
      </div>
    );
  }
}

export default StockIndex;