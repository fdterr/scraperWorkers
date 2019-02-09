import React, {Component} from 'react';
import ReactTable from 'react-table';
import Spinner from './Spinner';

const CheckTable = props => {
  const data = props.proxies;
  return (
    <div>
      <div />
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
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABTUlEQVRYR+2UsU6EQBCGB0oSY6EN9waUMM/hVcbWWBjfwPMRPN/A2FxtrM7n2KUivIFanM0VhG7MIpuQDWFn90holoYEZuf/5h9+Ilj4ihbWhwAQHAgOeDuAiG9EdK1iTEQfZVne+0TaGQARaUpICOHUk12cZVmaJMkXZ8q2bdOqqn44tWwA2+SmGNcJFoCruIbhQMwK8PSy7rSfH/fdfRaAPM93cRzf2vapxYkItpvPrpyIdlLKu6mzVgcQ8QAAF6qJOaFuPCbev/sVQlyeCnAEgLMhwNDmCXFVdhRCnJ8EYK5AC5pN9d6Hz2dZgWpopmCzvYIo+t/ecOc+UbR+A2MAeh1T4rOlQE/l+i/gRFD1ZjnQu5ACAOtX3DTNqq7rb1t0nQC4TnAn1/3YDpjTFEXxCgA3/fN3KeUDZ2KzxhvAR2zsTAAIDgQHFnfgD6ABhCEKCALMAAAAAElFTkSuQmCC" />
              ) : (
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA90lEQVRYR+1VSw6CMBCdRqJGFxi3JsLCg3AJNrCUY8ESNlxKuICy0PjNGDAoiVWmXTgxabd9M+/Na/sqgHkJZn4wAowDxoH/cgB9fyDy/PYtOyiYbj3ZgbpxObSviHBys3gsE7EJoqMQMFqeK6tPaFtPFlCEEbZFMhEteYtx0pjUmwSqmxbheg8gJs/JESoni2fNXhDtQID9cgUPTppMKTFPFvBJREOiSf4oVVzv03bmRty6WTJXaaksQG45AGqQaznALoD1CGQv4WeXkP0ZsgcRep5VLlYXtiiuz5ry0VAwWp+RSrioYLWCSIWgD2sEGAeMA+wO3AElA4whLgEApQAAAABJRU5ErkJggg==" />
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
        defaultPageSize={50}
        className="-striped -highlight"
      />
    </div>
  );
};

export default CheckTable;
//
