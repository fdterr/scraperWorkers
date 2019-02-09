import React from 'react';
import ReactTable from 'react-table';
import Spinner from './Spinner';
// import ok from '../../public/ok.svg';
// const ok = require('../../public/ok.png');

// import fail from './fail.png';

const CheckTable = props => {
  const data = props.proxies;
  let okPic = okPic;
  // const ok = (
  //   <img src={require('../../public/ok.png')} alt="emSync Logo" width="32" />
  // );
  // const fail = (
  //   <img src={require('../../public/fail.png')} alt="emSync Logo" width="32" />
  // );
  const ok = <img src="ok.png" alt="emSync Logo" width="32" />;
  const fail = <img src="fail.png" alt="emSync Logo" width="32" />;
  console.log('received props', data);
  return (
    <div>
      <ReactTable
        data={data}
        columns={[
          {
            Header: 'Proxy IP',
            accessor: 'proxyIP'
          },
          {
            Header: 'Port',
            accessor: 'proxyPort'
          },
          {
            Header: 'Status',
            accessor: 'proxyStatus',
            Cell: row => {
              return row.value === 'testing' ? (
                <Spinner />
              ) : row.value === 'Good' ? (
                ok
              ) : (
                fail
              );
            }
          },
          {
            Header: 'Anonymity Level',
            accessor: 'anonymityLevel'
          },
          {
            Header: 'Country',
            accessor: 'country'
          },
          {
            Header: 'Speed',
            accessor: 'connectTime'
          }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </div>
  );
};

export default CheckTable;
