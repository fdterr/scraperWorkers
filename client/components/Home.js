import React, {Component} from 'react';
import CheckTable from './CheckTable';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      proxyObjects: {},
      proxies: [],
      proxyTests: {},
      firstLoad: true
    };
  }

  render() {
    console.log('re-rendering');
    let proxies =
      '139.180.228.42:3128\n167.160.64.164:3128\n1.2.172.229:4145\n1.9.216.226:41277\n1.10.188.102:45806\n1.10.188.94:45806\n1.10.186.17:46587\n1.10.187.225:43057\n1.10.186.155:44476';
    return (
      <div className="checkProxy">
        <div>
          <form onSubmit={this.handleSubmit} className="proxyForm">
            <textarea name="proxies" rows="15" cols="100">
              {proxies}
            </textarea>
            <button type="submit">Check Your Proxies!</button>
          </form>
        </div>
        <div className="checkTable">
          {Object.keys(this.state.proxyObjects).length > 0 ? (
            <CheckTable proxies={Object.values(this.state.proxyObjects)} />
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({...this.state, firstLoad: false});
  }

  checkProxy = async proxy => {
    console.log('proxy in cP is', proxy);
    const dataPromise = axios.post('/api/proxy/checkone', {proxy});
    const {data} = await dataPromise;

    let newState = {...this.state};
    let proxies = this.state.proxyObjects;

    const proxyIP = data.proxy.proxyIP;
    const proxyPort = data.proxy.proxyPort;
    const proxyString = `${proxyIP}:${proxyPort}`;

    let proxyStatus;
    let anonymityLevel;
    let country;
    let connectTime;

    if (data.result) {
      let result = data.result[0];
      proxyStatus = 'Good';
      anonymityLevel = result.anonymityLevel;
      country = result.country;
      connectTime = result.connectTime;
    } else if (data.error) {
      proxyStatus = 'Bad';
      anonymityLevel = '---';
      country = '---';
      anonymityLevel = '---';
      connectTime = '---';
    }

    let newProxy = {
      proxyIP,
      proxyPort,
      proxyStatus,
      anonymityLevel,
      country,
      connectTime
    };
    proxies[proxyString] = newProxy;

    newState.proxyObjects = proxies;
    // finished old beginning new

    let stateProxies = this.state.proxies;
    console.log('stateProxies in cP is', stateProxies);
    let newCheck = stateProxies.shift();
    newState.proxies = stateProxies;
    if (newCheck) {
      console.log('newCheck is', newCheck);
      this.checkProxy(newCheck);
    }
    this.setState(newState);
  };

  checkHelper = async proxy => {
    let stateProxyObjects = this.state.proxyObjects;
    const regex = /[0-9]+(?:\.[0-9]+){3}:[0-9]+/g;
    let verified = proxy.match(regex);
    if (verified) {
      this.checkProxy(proxy);
      let split = proxy.split(':');
      let proxyIP = split[0];
      let proxyPort = split[1];
      stateProxyObjects[proxy] = {
        proxyIP,
        proxyPort,
        proxyStatus: 'testing',
        anonymityLevel: 'testing',
        country: '',
        speed: ''
      };
    }
    await this.setState({
      ...this.state,
      proxyObjects
    });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    const proxies = evt.target.proxies.value.split('\n');

    let proxyObjects = {};

    let i = 0;
    for (i = 0; i < 4; i++) {
      let proxy = proxies[i];
      const regex = /[0-9]+(?:\.[0-9]+){3}:[0-9]+/g;
      let verified = proxy.match(regex);
      if (verified) {
        this.checkProxy(proxy);
        let split = proxy.split(':');
        let proxyIP = split[0];
        let proxyPort = split[1];
        proxyObjects[proxy] = {
          proxyIP,
          proxyPort,
          proxyStatus: 'testing',
          anonymityLevel: 'testing',
          country: '',
          speed: ''
        };
      }
    }
    await this.setState({
      ...this.state,
      proxyObjects
    });

    let stateProxies = this.state.proxies;
    for (i; i < proxies.length; i++) {
      stateProxies.push(proxies[i]);
    }
    await this.setState({...this.state, proxies: stateProxies});
    // console.log('statePxies is', this.state.proxies);

    // proxies.forEach(proxy => {
    //   const regex = /[0-9]+(?:\.[0-9]+){3}:[0-9]+/g;
    //   let verified = proxy.match(regex);
    //   if (verified) {
    //     console.log('verified proxy is', verified);
    //     this.checkProxy(proxy);
    //     let split = proxy.split(':');
    //     let proxyIP = split[0];
    //     let proxyPort = split[1];
    //     proxyObjects[proxy] = {
    //       proxyIP,
    //       proxyPort,
    //       proxyStatus: 'testing',
    //       anonymityLevel: 'testing',
    //       country: '',
    //       speed: ''
    //     };
    //     this.setState({
    //       ...this.state,
    //       proxyObjects
    //     });
    //   }
    // });
  };
}

export default Home;
