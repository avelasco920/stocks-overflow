import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { convertCompanySymToId } from '../../reducers/selectors';
import {
  fetchStockPrices,
} from '../../actions/companies_actions';
import ChartComponent from './chart';
import {
  watchCompany,
  unwatchCompany
} from '../../actions/watchlist_actions';

const mapStateToProps = (state, ownProps) => {
  const symbol = ownProps.match.params.symbol;
  const companyId = convertCompanySymToId(
      state.entities.companies, symbol
  )
  return {
    companyStockPrices: state.entities.chart[symbol],
    companyLoading: state.ui.loading.detailLoading,
    stockPricesLoading: state.ui.loading.stockPricesLoading,
    companyMarketPrice: state.entities.companies[companyId].market_price
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  watchCompany: id => dispatch(watchCompany(id)),
  unwatchCompany: id => dispatch(unwatchCompany(id)),
  fetchStockPrices: (symbol) => dispatch(fetchStockPrices(symbol)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChartComponent)
);
