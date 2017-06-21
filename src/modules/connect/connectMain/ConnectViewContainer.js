import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ConnectView from './ConnectView';
import {NavigationActions} from 'react-navigation';
import * as ConnectStateActions from './ConnectState'


export default connect(
  (state) => ({
    searchQuery: state.getIn(['connect', 'searchQuery'])
  }),
  (dispatch) => ({
       navigate: bindActionCreators(NavigationActions.navigate, dispatch),
       setRecentContactId : (contactId ) => dispatch(ConnectStateActions.setRecentContactId(contactId)),
       setSearchQuery : (query ) => dispatch(ConnectStateActions.setSearchQuery(query))
    })
)(ConnectView)
