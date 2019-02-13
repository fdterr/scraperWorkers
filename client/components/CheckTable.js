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
                <div className="statusIcon">
                  <Spinner />
                </div>
              ) : row.value === 'Good' ? (
                <div className="statusIcon">
                  <img
                    // className="statusIcon"
                    width="30px"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACwklEQVRYR+2XTWgTQRTH38ta462tHoS2FqNeVLBhl9Lag9GrVdGDxHpSRPFmPPTc9OTR9KQUQS8lUA+1iKIXqYe2frCTNcceqkRRqaiJiKapmSezJOlmM9mPJBAE95bNzPv/5v/evJlFaPODbdaHfw9A07TTRDSAiEet7hHRAufcMAxj3o+rnhwIh8NdgUDgGiLGvQQnojjnfMowjKzbeFcAVVUvAMBNROxyC2ZzRIhfZ4zdc5rnCKCqahwRJ/wI28cKNxhjk/Vi1AVohXhZlIgmGWPS9EkBhO2IeLeZlUucuChLRw1AqeDe+s25GywRZTnnIXth1gC0wvqdPZ0weGQPpF9lILP6tcImS0UNgKZp5LYap//7QtshemkYOrZugfzvAiQmnlgBsoyxbuv8KgDRZABgrlEAq7iIsbqyBrN3XtjDndF1/UH5ZRVAM/bbxT9mvkNyegk2CsUqAHsa7AALiBixzhiK7AV1JARLz1bgzcuM1Jye/m4Yu3LYtF08nz9kYeb2Yo14afK8ruvCafNxBRi/MQqKopiDn86lIbX8rgpCiEcvD0Mw2FERT04vw3p+QwpLRM8ZY5VzxBXg2OgBGIrsqwR7fD8F6dfvzd9+xcUc3wBi0vGzYTg02G+KEhE8TDL49uUnjF0d8bxyix2OKajb+0+eU+Gg2leBKKz/geA2b7Zbc+FYhE7bEBHgRHQTohxUFJxTziWFUH8bisFOjUhAnDqvwf6BXjPu2qcfMHNrsW7BScRzuq5XHeu+WzEimm12V2gHPJpNQf6XvNplW8BTKxaHkaIoYq91SvdR4y9zxWJxt+thJOK39TguL7CZtmw3yfeFpJUQTuI1rViW3lI6Eg3URI6IYk1dSstApVtSDBFjHkCEcIJznmjJtdzuSunDJAwAmwcKYpaIDEQ0rGe9lw3j+l3gJUgzY/4D/AWAh14wsjmnkgAAAABJRU5ErkJggg=="
                  />
                </div>
              ) : (
                <div className="statusIcon">
                  <img
                    // className="statusIcon"
                    width="30px"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABfklEQVRYR+2WQU4CQRBF6w+wk+gBjGfgAhq9Bisx4VQk6oprYPQCnIF4AI0stYs0oSdD211VPRkzLmAL9H/9q+pXg3r+oGd9OgH8fwc204f7igbry+ViXdIv79P5xNHP5Gr5+Cz9T3TAizOqJyb+GHJ1Z4Xw4t9wKxAuwG4mQWQBgnigt0I0xcN/JYgkQCxuhUiJaxBJgP1BxC8Ancf1yzkhiTPT55BwmyphtgQlEG3F/eXEJrRA+ENCw/1yS7h5XRpttCQIR/zlbwDCuI246kA4VHGCwDjyUqp5DGpOQitEibjZgciJN4DOEtPhndgOCNfWwGoHAPcKxjjVvr4nRlzd/AnA0ajx4f6JAloT0zwF/ofJOe8IQm1CKWSIaes5Mj1hWmB6EB22Wm7O90FUGNvNs+QoVsRDs1kSM9eY+WVkFDeGVbYcZetYyXbJidybwP4gMSyWemKinih+kARb6yeZUTxVjtZPsiZEb49SbVV38b0aRF2ISGecAHp3YAfwJF8wPySfHgAAAABJRU5ErkJggg=="
                  />
                </div>
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
        defaultPageSize={Math.min(50, Object.keys(data).length)}
        className="-striped -highlight"
      />
    </div>
  );
};

export default CheckTable;
//
