import React from 'react';
import ReactTable from 'react-table';

const CheckTable = props => {
  const data = props.proxies;
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
            acessor: 'proxyPort'
          },
          {
            Header: 'Status',
            accessor: 'proxyStatus'
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
            accessor: 'speed'
          }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </div>
  );
};

export default CheckTable;
