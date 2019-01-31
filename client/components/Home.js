import React, {Component} from 'react';
import CheckTable from './CheckTable';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      proxyObjects: {},
      proxies: []
    };
  }
  render() {
    console.log('state is', this.state);
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <textarea name="proxies" />
            <button type="submit">Submit Your Stuff!</button>
          </form>
        </div>
        {Object.keys(this.state.proxyObjects).length > 0 ? (
          <CheckTable proxies={this.state.proxies} />
        ) : (
          <div />
        )}
      </div>
    );
  }
  checkProxy = async proxy => {
    // return new Promise((resolve, reject) => {
    // })
    console.log('checking proxy');

    let myProxy = [];
    myProxy.push(proxy);
    const {data} = await axios.post('/api/proxy/check', {proxies: myProxy});

    console.log('data is', data[0]);
    let newState = {...this.state};
    console.log('new state inside check is', newState);
    // newState.proxyObjects[data[0].proxy.proxyIP];

    let proxies = this.state.proxies;
    let newProxy = {
      proxyIP: data[0].proxy.proxyIP,
      proxyPort: data[0].proxy.proxyPort,
      proxyStatus: 'bad',
      anonymityLevel: 1,
      country: 'USA',
      speed: 'slow'
    };
    proxies.push(newProxy);

    newState.proxies = proxies;
    this.setState(newState);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const proxies = evt.target.proxies.value.split('\n');
    console.log('proxies is', proxies);
    let proxyObjects = {};
    for (let i = 0; i < proxies.length; i++) {
      proxyObjects[proxies[i]] = true;
    }

    console.log('pre-set state proxyObects', this.state);
    this.setState({...this.state, proxyObjects});

    for (let i = 0; i < proxies.length; i++) {
      this.checkProxy(proxies[i]);
    }

    // axios.all(promises).then();

    // console.log('1');
    // console.log('2');
    // console.log('3');
    // console.log('4');
    // console.log('5');
  };
}

export default Home;
