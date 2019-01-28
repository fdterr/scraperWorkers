// const puppeteer = require('puppeteer');
const {Proxy} = require('../db/models');
const checkProxy = require('check-proxy').check;

let page = '';

const spysOne = async () => {
  try {
    await page.goto('http://spys.one/free-proxy-list/US/');
    let ipAddresses = await page.$eval('body', element => {
      const regex = /[0-9]+(?:\.[0-9]+){3}:[0-9]+/g;
      let iT = element.innerText;
      let match = iT.match(regex);
      return match;
    });
    await page.close();
    // return ipAddresses;
    // return ['103.15.51.160:8080', '115.78.235.164:80'];
    // return [
    //   '139.180.228.42:1080',
    //   '167.160.64.164:1080',
    //   '167.160.72.144:1080',
    //   '196.17.197.61:1080',
    //   '196.19.0.97:1080'
    // ];
    return [
      '208.255.136.111:9999',
      '199.254.222.105:80',
      '199.254.222.140:80',
      '199.254.222.39:80',
      '199.254.222.38:80',
      '199.254.222.48:80',
      '199.254.222.33:80',
      '35.236.88.68:80',
      '206.189.232.251:3128',
      '199.254.222.212:80',
      '199.254.222.56:80',
      '199.254.222.174:80',
      '199.254.222.221:80',
      '199.254.222.211:80',
      '199.254.222.139:80',
      '199.254.222.141:80',
      '68.183.29.131:3128',
      '138.197.96.53:3128',
      '35.173.16.12:8888',
      '199.254.222.81:80',
      '199.254.222.195:80',
      '167.99.52.107:8888',
      '178.128.179.46:8080',
      '206.189.224.61:3128',
      '199.254.222.138:80',
      '8.38.238.212:80',
      '206.81.0.100:8080',
      '199.254.222.228:80',
      '68.183.102.102:3128',
      '68.183.19.169:3128',
      '199.254.222.40:80',
      '208.84.63.81:56909',
      '173.164.26.117:3128',
      '199.254.222.135:80',
      '199.254.222.147:80',
      '199.254.222.82:80',
      '199.254.222.149:80',
      '199.254.222.216:80',
      '199.254.222.26:80',
      '73.100.254.78:39723',
      '199.254.222.246:80',
      '173.162.54.113:45936',
      '199.254.222.204:80',
      '199.254.222.249:80',
      '192.155.244.235:3128',
      '160.2.52.234:8080',
      '199.254.222.185:80',
      '23.124.185.51:8080',
      '35.199.96.12:80',
      '196.53.79.73:35409',
      '199.254.222.86:80',
      '64.19.116.82:60814',
      '104.232.98.3:3128',
      '199.254.222.254:80',
      '199.254.222.145:80',
      '199.254.222.46:80',
      '199.254.222.182:80',
      '142.0.60.27:36383',
      '66.38.80.188:48104',
      '199.254.222.143:80',
      '69.5.149.11:43248',
      '104.192.201.179:47513',
      '138.68.251.89:39874',
      '67.58.29.236:42697',
      '199.254.222.60:80',
      '104.228.234.78:30591',
      '24.214.148.134:57721',
      '178.62.115.223:3128',
      '209.97.191.221:8080',
      '184.177.165.96:30622',
      '45.77.224.215:80',
      '206.189.28.51:3128',
      '46.101.14.165:3128',
      '178.62.126.211:3128',
      '85.91.252.27:34843',
      '12.131.20.2:53360',
      '66.116.87.183:41606',
      '199.254.222.193:80',
      '193.117.138.126:44780',
      '82.31.209.22:53790',
      '185.42.221.246:80',
      '167.99.90.198:8080',
      '206.189.114.111:8080',
      '62.7.85.234:8080',
      '46.101.32.61:3128',
      '178.62.82.108:8080',
      '178.62.91.27:8080',
      '178.62.64.145:3128',
      '46.101.9.121:3128',
      '206.189.117.27:8080',
      '149.14.208.132:8080',
      '89.107.136.146:47138',
      '178.62.81.24:3128',
      '5.1.68.227:3128',
      '46.101.10.126:3128',
      '104.237.106.100:54132',
      '178.62.13.185:3128',
      '46.101.7.137:3128',
      '217.33.203.90:53281',
      '185.6.152.94:51292',
      '50.253.229.189:45725',
      '82.102.10.78:3128',
      '141.193.188.1:44464',
      '80.87.184.49:41258',
      '137.27.142.226:54922',
      '201.16.212.71:3128',
      '193.56.149.184:39518',
      '176.74.13.110:8080',
      '186.96.105.118:23500',
      '181.174.162.46:23500',
      '190.11.28.30:33294',
      '14.141.38.133:80',
      '14.141.38.128:80',
      '195.60.174.123:54577',
      '121.99.229.29:32473',
      '50.205.213.17:39860',
      '194.183.183.144:36698',
      '109.200.224.152:53281',
      '77.37.236.206:43969',
      '190.182.69.206:37344',
      '199.254.222.121:80',
      '178.75.58.58:59204',
      '93.123.187.254:50210',
      '85.132.110.127:36035',
      '177.244.28.170:42485',
      '185.28.89.86:8080',
      '81.163.60.31:41258',
      '206.189.152.100:8080',
      '80.251.9.246:8080',
      '181.196.57.162:52932',
      '181.15.172.203:54567',
      '202.131.234.142:54917',
      '219.99.198.142:8080',
      '138.68.103.70:25508',
      '181.143.100.186:57056',
      '128.199.100.89:8080',
      '217.144.100.238:8080',
      '87.255.75.224:57567',
      '178.32.148.210:80',
      '181.223.188.142:57764',
      '95.172.60.203:47756',
      '27.50.64.169:3128',
      '14.141.38.134:80',
      '14.141.38.131:80',
      '77.94.122.19:34025',
      '91.185.2.188:33627',
      '27.72.72.48:47007',
      '46.250.2.132:53281',
      '196.32.109.174:42246',
      '81.163.38.226:41258',
      '14.141.38.130:80',
      '200.16.120.70:8080',
      '128.199.211.43:8080',
      '200.58.213.178:49700',
      '62.172.134.82:8080',
      '159.224.220.147:44901',
      '36.89.181.183:40499',
      '81.140.102.191:32231',
      '103.245.77.39:61196',
      '162.17.233.218:61104',
      '95.170.113.165:51887',
      '62.255.104.214:8080',
      '202.5.46.70:32526',
      '124.120.101.9:3128',
      '103.242.204.18:49516',
      '177.126.216.149:37101',
      '85.117.57.210:41258',
      '181.49.48.213:46672',
      '188.226.87.94:41137',
      '201.159.106.130:4042',
      '197.232.69.193:56697',
      '197.254.108.42:34951',
      '219.91.166.214:56652',
      '178.218.78.117:49896',
      '190.12.59.142:46432',
      '45.113.153.1:37133',
      '158.58.133.106:41258',
      '84.52.124.217:31004',
      '138.201.223.250:31288',
      '93.87.66.66:56128',
      '45.77.89.130:59436',
      '93.189.222.107:52279',
      '138.0.89.209:47418',
      '89.203.205.253:49561',
      '134.249.171.137:21231',
      '190.57.169.174:35268',
      '185.26.219.34:40172',
      '37.139.108.165:56900',
      '119.82.253.117:33699',
      '176.196.238.210:60449',
      '95.154.106.91:44316',
      '41.191.90.138:51486',
      '191.97.45.187:23500',
      '177.130.58.157:30696',
      '188.170.233.150:60380',
      '79.150.190.138:32231',
      '85.30.48.222:30228',
      '85.9.131.249:3128',
      '41.164.30.218:53259',
      '94.177.173.225:3128',
      '88.82.73.242:46456',
      '212.92.13.75:52608',
      '91.239.81.38:49776',
      '202.79.50.144:30968',
      '5.32.131.226:52957',
      '212.147.27.68:31956',
      '195.246.102.222:58073',
      '95.167.105.2:36077',
      '85.195.255.254:38063',
      '213.74.123.108:33672',
      '1.10.187.34:51635',
      '118.174.220.163:31561',
      '200.60.79.11:53281',
      '203.177.41.30:49887',
      '41.93.47.2:34193',
      '88.97.50.200:57317',
      '41.224.56.206:40259',
      '185.44.249.86:31910',
      '182.53.206.155:34307',
      '88.255.102.7:23500',
      '111.68.45.227:8080',
      '93.171.241.18:45781',
      '84.19.38.158:51885',
      '193.188.254.67:53281',
      '90.225.86.74:50206',
      '80.90.85.86:58532',
      '160.20.202.27:41477',
      '35.194.213.122:80',
      '187.95.4.115:23500',
      '41.63.170.82:36972',
      '116.254.100.98:59557',
      '109.127.9.96:40080',
      '193.239.100.225:46694',
      '115.70.2.73:38494',
      '83.61.18.250:58651',
      '212.28.237.130:36398',
      '160.119.211.200:23500',
      '142.93.32.49:80',
      '176.35.85.11:8080',
      '115.159.31.195:8080',
      '178.62.114.9:8080',
      '124.41.211.101:23500',
      '43.225.34.66:51505',
      '121.127.38.186:53281',
      '186.194.187.165:23500',
      '190.171.101.106:46205',
      '186.1.18.225:23500',
      '190.93.23.27:44700',
      '128.106.196.167:39335',
      '105.174.19.194:53019',
      '95.107.6.252:44508',
      '109.59.166.156:53281',
      '190.80.255.2:55928',
      '82.151.200.156:51485',
      '190.113.106.142:45938',
      '37.17.12.131:43418',
      '190.214.52.226:53281',
      '213.126.73.34:56400',
      '85.124.7.234:8080',
      '77.222.20.246:33484',
      '109.74.61.104:35427',
      '213.6.146.6:32231',
      '41.65.146.132:40577',
      '212.237.52.148:3128',
      '144.22.71.110:3128',
      '79.98.78.7:8080',
      '41.65.146.242:8080',
      '207.148.103.20:8888',
      '197.148.74.154:8080',
      '37.238.128.238:33309',
      '187.95.3.244:23500',
      '109.111.118.203:53976',
      '82.206.132.106:3128',
      '200.35.53.117:49707',
      '41.78.198.243:23500',
      '181.40.84.38:49674',
      '80.79.114.253:9999',
      '154.127.78.131:80',
      '181.40.127.18:39393',
      '154.127.78.139:80',
      '178.128.99.147:3128',
      '180.189.168.66:3129',
      '213.58.202.70:54214',
      '210.5.106.202:45346',
      '89.115.227.59:48793',
      '86.34.158.116:8080',
      '31.209.103.79:8080',
      '190.8.169.16:53270',
      '85.193.229.6:57669',
      '41.242.103.2:8080',
      '69.24.198.18:32730',
      '175.101.60.57:45109',
      '95.161.189.26:61522',
      '140.227.29.69:3128',
      '85.159.111.37:40430',
      '176.57.93.129:61396',
      '159.255.190.146:59628',
      '87.197.137.223:55622',
      '154.73.45.138:53281',
      '223.25.252.22:53281',
      '190.2.137.97:1080',
      '190.2.137.102:1080',
      '154.127.78.187:80',
      '203.99.157.126:23500',
      '46.55.82.193:49398',
      '193.77.232.77:49580',
      '181.112.138.110:58916',
      '185.68.63.160:23500',
      '41.86.57.65:32638',
      '41.159.9.2:8080',
      '5.11.64.133:53281',
      '178.132.216.115:46916',
      '66.181.165.223:52019',
      '181.129.140.83:38402',
      '193.213.211.94:60659',
      '85.93.252.55:59467',
      '79.160.140.118:37682',
      '202.166.205.78:58431',
      '95.46.201.65:44877',
      '213.6.229.178:36127',
      '111.69.69.98:43599',
      '197.254.231.26:59640',
      '41.223.154.170:23500',
      '94.204.189.41:36422',
      '81.165.193.209:31952',
      '154.73.45.206:51467',
      '150.242.109.18:8080',
      '213.6.150.146:43828',
      '41.76.44.76:3128',
      '112.175.32.88:8080',
      '81.93.71.178:53281',
      '190.120.24.9:53281',
      '109.75.44.42:50936',
      '93.91.218.72:36213',
      '140.227.75.93:3128',
      '209.13.96.169:45275',
      '95.87.14.3:34731',
      '77.237.121.22:8080',
      '24.226.180.59:49008',
      '122.102.39.28:44233',
      '89.20.177.140:32231',
      '203.189.148.2:38905',
      '131.221.64.152:23500',
      '186.233.98.94:53281',
      '199.127.197.12:23500',
      '200.124.29.18:8080',
      '195.29.45.98:39740',
      '190.42.32.154:9999',
      '62.176.123.148:3128',
      '217.117.0.182:8080',
      '185.73.240.71:3128',
      '213.6.88.1:36127',
      '196.2.13.36:39788',
      '198.36.31.36:32515',
      '89.37.56.138:80',
      '203.205.32.74:53875',
      '181.112.42.38:38264',
      '190.248.134.106:44359',
      '35.200.84.98:3128',
      '83.215.180.178:32759',
      '197.211.238.220:53425',
      '196.27.115.138:41826',
      '154.66.245.47:46611',
      '70.45.16.37:42050',
      '184.105.133.250:40996',
      '41.111.211.235:8080',
      '137.135.115.205:80',
      '91.102.80.82:3128',
      '209.45.111.194:45729',
      '190.238.167.73:52582',
      '188.165.64.114:3128',
      '105.174.18.118:23500',
      '114.134.170.116:53281',
      '41.191.119.246:52884',
      '190.151.10.226:8080',
      '140.143.105.243:80',
      '177.234.2.142:8080',
      '121.8.98.198:80',
      '64.57.112.250:8080',
      '190.207.41.235:8080',
      '88.148.183.139:3128',
      '196.22.55.22:53281',
      '187.243.251.110:30737',
      '189.204.158.161:8080',
      '62.4.59.170:56973',
      '148.217.94.54:3128',
      '139.255.92.156:80',
      '169.255.81.27:8080',
      '159.203.174.2:3128',
      '181.115.241.90:80',
      '138.197.32.120:3128',
      '37.187.121.205:3128',
      '115.249.145.202:80',
      '148.243.37.101:53281',
      '43.243.176.5:80',
      '142.93.200.42:8080',
      '103.43.147.56:47568',
      '128.199.198.52:8080',
      '105.178.105.204:53281',
      '196.2.11.143:53281',
      '196.2.10.144:44095',
      '128.199.204.154:8080',
      '138.68.132.204:8080',
      '201.120.69.151:53281',
      '81.248.43.115:44943',
      '103.21.231.132:53281',
      '14.36.4.200:3128',
      '190.2.137.98:1080',
      '186.148.172.43:40346',
      '123.231.251.194:3128',
      '202.142.191.75:39617',
      '51.15.35.158:80',
      '188.213.31.170:80',
      '190.218.161.2:3128',
      '180.250.19.92:3128',
      '101.4.136.34:8080',
      '124.47.7.38:80',
      '41.75.13.65:54304',
      '5.141.81.65:61853',
      '118.97.169.170:3128',
      '41.60.16.37:53281',
      '91.221.252.18:8080',
      '117.102.88.121:80',
      '208.83.106.105:9999',
      '41.205.231.202:8080',
      '83.169.202.2:3128',
      '203.171.52.119:8080',
      '217.29.114.40:44523',
      '41.74.9.106:8080',
      '196.20.12.21:8080',
      '123.57.207.2:3128',
      '217.126.203.104:40646',
      '116.12.89.81:8080',
      '138.59.213.79:61231',
      '181.188.174.178:53281',
      '130.105.131.163:8080',
      '189.240.63.50:3128',
      '91.137.189.48:39084',
      '115.124.75.228:3128',
      '115.186.177.243:8080',
      '95.155.1.92:53043',
      '91.82.245.70:40478',
      '193.91.66.162:41161',
      '139.224.24.26:8888',
      '91.137.189.100:47243',
      '178.248.206.215:61610',
      '94.21.151.191:37560',
      '116.12.89.65:8080',
      '87.101.123.78:48108',
      '213.222.174.251:3128',
      '182.253.209.205:3128',
      '119.82.241.233:49178',
      '213.16.91.22:46107',
      '139.130.233.254:8080',
      '37.220.130.138:57836',
      '79.121.102.251:8080',
      '103.43.145.16:63238',
      '80.98.8.60:44475',
      '89.132.84.108:36268',
      '79.120.177.106:8080',
      '190.104.18.154:8080',
      '104.232.174.94:33671',
      '169.255.4.138:63238',
      '150.129.54.111:8080',
      '138.121.32.44:12955',
      '118.69.205.208:4624',
      '190.96.91.242:8080',
      '213.253.214.69:41861',
      '122.50.6.170:80',
      '144.217.148.88:8080',
      '144.208.88.204:3128',
      '176.237.75.22:8080',
      '213.74.252.176:8080',
      '188.165.240.92:3128',
      '196.27.116.162:41766',
      '124.41.215.157:8080',
      '89.134.91.149:58121',
      '41.216.148.55:43994',
      '217.182.5.191:8080',
      '109.74.50.14:21213',
      '119.28.227.75:3128',
      '78.155.225.182:8080',
      '163.172.220.221:8888',
      '86.101.208.251:57653',
      '160.119.153.3:23500',
      '212.200.246.24:80',
      '203.83.182.86:8080',
      '80.59.199.212:8080',
      '1.179.185.249:8080',
      '62.176.1.194:49428',
      '103.23.236.218:8080',
      '93.190.142.214:80',
      '181.189.235.134:30759',
      '91.137.252.62:50382',
      '212.182.90.206:30429',
      '190.96.209.122:42263',
      '195.222.106.226:52006',
      '203.161.30.194:58689',
      '46.55.161.132:32377',
      '189.10.97.147:50388',
      '110.34.28.125:34647',
      '37.26.64.44:8888',
      '77.43.252.65:3128',
      '43.229.74.190:53281',
      '131.72.230.151:39954',
      '188.242.123.119:46801',
      '87.120.152.14:23500',
      '118.175.176.135:48106',
      '178.93.44.200:8080',
      '187.160.245.156:3128',
      '95.159.72.67:34041',
      '209.150.148.129:60267',
      '186.96.98.84:36550',
      '138.0.89.186:34958',
      '195.9.209.10:35242',
      '91.205.80.227:8080',
      '43.250.225.190:58262',
      '158.140.137.177:52727',
      '212.237.124.15:42715',
      '47.52.64.149:80',
      '106.51.252.234:8080',
      '138.185.176.63:53281',
      '70.81.183.36:47868',
      '193.106.131.181:41258',
      '202.166.205.242:41200',
      '160.16.67.63:3128',
      '61.6.78.127:53281',
      '159.224.226.72:33803',
      '198.199.127.16:80',
      '191.97.32.42:23500',
      '90.182.206.67:4550',
      '187.123.129.19:30977',
      '165.165.248.90:8080',
      '213.226.254.64:42428',
      '191.97.32.35:23500',
      '149.129.132.93:80',
      '191.102.92.90:80',
      '210.217.15.38:36705',
      '178.60.28.98:9999',
      '193.200.151.69:50654',
      '158.181.19.120:39579',
      '182.253.106.14:8080',
      '95.78.228.55:34919',
      '189.70.148.155:8080',
      '78.136.243.133:3128',
      '95.80.93.44:41258',
      '125.27.251.160:56988',
      '203.128.16.126:59538',
      '191.97.34.64:23500',
      '36.67.85.3:8080',
      '5.189.133.231:80',
      '110.93.214.36:30759',
      '190.111.196.239:48078',
      '204.29.115.149:8080',
      '104.248.115.1:8080',
      '178.48.221.26:38662',
      '95.0.170.140:8080',
      '131.161.68.41:31264',
      '197.158.87.234:50981',
      '181.133.155.42:38425',
      '182.61.170.45:3128',
      '187.61.108.134:32308',
      '190.53.46.2:52366',
      '95.153.48.2:37490',
      '110.74.196.229:443',
      '36.67.215.157:60497',
      '122.116.229.149:56177',
      '89.186.1.215:53281',
      '195.94.138.223:53330',
      '202.29.212.213:443',
      '49.156.35.230:58133',
      '200.105.209.170:443',
      '109.234.112.250:46675',
      '192.146.230.210:60355',
      '195.170.15.66:8080',
      '79.120.246.52:33957',
      '187.95.34.10:8080',
      '36.66.61.155:60306',
      '31.209.104.163:43517',
      '178.128.103.90:3128',
      '186.1.206.99:51552',
      '190.80.97.28:61279',
      '91.82.92.23:44279',
      '46.59.56.191:39791',
      '200.52.144.170:39150',
      '185.34.17.158:59897',
      '185.104.252.10:9090',
      '47.90.125.157:8080',
      '185.104.252.9:9090',
      '41.242.103.116:8080',
      '186.219.106.4:8080',
      '176.31.82.212:8080',
      '160.119.131.114:59714',
      '103.255.74.230:31548',
      '60.225.74.122:39395',
      '41.191.204.142:34155',
      '203.170.68.50:21776',
      '197.215.217.150:53281',
      '46.226.111.23:80',
      '62.212.58.31:42799',
      '219.92.17.157:38399',
      '89.190.120.130:34340',
      '41.215.247.98:42656',
      '190.149.216.74:51363',
      '119.252.168.51:53281',
      '217.64.109.234:45282',
      '200.13.160.125:54314',
      '217.64.109.231:45282',
      '92.154.124.125:8080',
      '182.160.117.130:53281',
      '89.190.120.116:34850',
      '2.139.253.49:58608',
      '124.42.7.103:80',
      '190.56.24.82:43207',
      '83.82.43.237:80',
      '94.43.189.184:49927',
      '213.144.123.146:80',
      '41.217.216.45:32265',
      '88.202.119.64:38111',
      '150.107.207.137:61954',
      '77.28.98.28:48936',
      '5.160.129.33:23500',
      '181.174.76.254:40538',
      '195.158.92.164:46273',
      '160.119.129.42:31604',
      '160.119.104.69:49327',
      '185.82.96.52:21231',
      '119.40.106.250:8080',
      '81.173.195.38:48522',
      '78.81.24.112:8080',
      '83.64.253.168:80',
      '104.244.72.171:57480',
      '58.82.242.25:8080',
      '197.155.158.22:80',
      '46.4.62.108:80'
    ];

    console.log('something here');
  } catch (err) {
    console.error(err);
  }
};

const scrape = async () => {
  // launch browser
  const browser = await puppeteer.launch(
    // {args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignoreHTTPSErrors'],}
    {ignoreHTTPSErrors: true, headless: true}
  );
  page = await browser.newPage();
  // page.on('console', consoleObj => {
  //   console.log(consoleObj.text());
  // });

  // grab spysOne proxies
  let arr = await spysOne();
  await browser.close();

  // copy to global array
  for (let i = 0; i < arr.length; i++) {
    spysOneProxies.push(arr[i]);
  }

  let threads = Math.min(spysOneProxies.length, 100);
  let length = spysOneProxies.length;

  console.log(`length is ${length}`);

  for (let i = 0; i < threads; i++) {
    let ipAddress = spysOneProxies.shift();
    let newWorker = createWorker(i, ipAddress);
    workers.push(newWorker);
    workerCount++;
  }
};

function chunkArray(myArray, chunk_size) {
  // splits myArray into a chunk_size # of arrays (if chunk_size == 100, will return 100 small arrays)
  let results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
}

const check = async (proxies, res, session) => {
  try {
    let length = proxies.length;
    response = res;
    console.log(`length is ${length}`);
    console.log('session is', session);

    const scopeScan = proxies;

    const results = scopeScan.map(proxy => {
      let newProxy = createProxy(proxy);
      console.log('testing proxy', newProxy);
      const scanResult = verifyProxy(newProxy);
      console.log('scan result is', scanResult);
      return scanResult;
    });

    let promiseResult = [];
    await Promise.all(results);
    for (let i = 0; i < results.length; i++) {
      promiseResult.push(await results[i]);
    }
    console.log('results are', promiseResult);
    console.log('returnResults are', returnResults);
    // res.send(promiseResult);
    return promiseResult;
  } catch (err) {
    console.log(err);
  }
};

const createProxy = ipAddress => {
  let split = ipAddress.split(':');
  let newProxy = {
    proxyIP: split[0],
    proxyPort: split[1]
  };
  return newProxy;
};

const verifyProxy = async proxy => {
  try {
    const result = await checkProxy({
      ...proxy,
      // testHost: 'http://localhost:8080/api/proxy/ping',
      testHost: '204.48.22.234/api/proxy/ping',
      localIP: '108.54.113.21',
      connectTimeout: 6,
      timeout: 10,
      websites: [
        {
          name: 'example',
          url: 'http://www.example.com/',
          regex: /example/gim // expected result - regex
        },
        // {
        //   name: 'yandex',
        //   url: 'http://www.yandex.ru/',
        //   regex: /yandex/gim // expected result - regex
        // },
        {
          name: 'google',
          url: 'http://www.google.com/',
          regex: function(html) {
            // expected result - custom function
            return html && html.indexOf('google') != -1;
          }
        },
        {
          name: 'amazon',
          url: 'http://www.amazon.com/',
          regex: 'Amazon' // expected result - look for this string in the output
        }
      ]
    });
    console.log('result is', result);
    // return JSON.stringify({result, proxy});
    return {result, proxy};
  } catch (err) {
    console.log('caught an error', err);
    // return JSON.stringify({error: err, proxy});
    return {err, proxy};
  }
};
const verifyProxyBind = proxy => {
  return new Promise((resolve, reject) => {
    checkProxy({
      ...proxy,
      testHost: 'http://localhost:8080/api/proxy/ping',
      // testHost: '204.48.22.234/api/proxy/ping',
      localIP: '65.88.88.177',
      connectTimeout: 6,
      timeout: 10,
      websites: [
        {
          name: 'example',
          url: 'http://www.example.com/',
          regex: /example/gim // expected result - regex
        },
        // {
        //   name: 'yandex',
        //   url: 'http://www.yandex.ru/',
        //   regex: /yandex/gim // expected result - regex
        // },
        {
          name: 'google',
          url: 'http://www.google.com/',
          regex: function(html) {
            // expected result - custom function
            return html && html.indexOf('google') != -1;
          }
        },
        {
          name: 'amazon',
          url: 'http://www.amazon.com/',
          regex: 'Amazon' // expected result - look for this string in the output
        }
      ]
    }).then(
      function(res) {
        let ipAddress = proxy.proxyIP + ':' + proxy.proxyPort;
        resolve({id: workerData.id, ...res, ipAddress});
      }.bind({resolve: resolve, reject: reject}),
      function(err) {
        let ipAddress = proxy.proxyIP + ':' + proxy.proxyPort;
        resolve({
          // id: workerData.id,
          err: err.toString(),
          ipAddress
        });
      }.bind({resolve: resolve, reject: reject})
    );
  });
};

const proxyHelper = async proxy => {
  try {
    let helper;
    await verifyProxy(proxy).then(async result => {
      helper = result;
    });
    console.log('helper is', helper);
    return await helper;
  } catch (err) {
    console.log(err);
  }
};

module.exports = check;

// const check = (proxies, res, session) => {
//   try {
//     let threads = Math.min(proxies.length, 100);
//     let length = proxies.length;
//     response = res;

//     for (let i = 0; i < proxies.length; i++) {
//       toScan.push(proxies[i]);
//     }

//     for (let i = 0; i < threads; i++) {
//       let ipAddress = proxies.shift();
//       let newWorker = createWorker(i, ipAddress);
//       workers.push(newWorker);
//       workerCount++;
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

// const createWorker = (id, ipAddress) => {
//   let w = new Worker(__dirname + '/worker.js', {
//     workerData: {
//       id,
//       ipAddress
//     }
//   });

//   w.on('message', async msg => {
//     if (!msg.err) {
//       let newP = newProxy(msg);
//       scannedProxies.push(newP);
//       // try {
//       //   let result = await Proxy.findOrCreate({
//       //     where: {host: newP.host},
//       //     defaults: newP
//       //   });
//       //   if (result[1] === false) {
//       //     await result[0].update(newP);
//       //   } else {
//       //   }
//       // } catch (err) {
//       //   console.error(err);
//       // }
//       // console.log('main thread: good: ', msg);
//     } else {
//       // console.log('main thread: error: ', msg.ipAddress);
//     }
//     let worker = workers[msg.id];
//     let nextIP = '';
//     if (toScan.length > 0) {
//       nextIP = toScan.shift();
//       worker.postMessage(nextIP);
//     } else {
//       worker.terminate();
//       workerCount--;
//       console.log(`${workerCount} workers remaining`);
//       if (workerCount === 0) {
//         console.log('good proxies are:', scannedProxies);
//         workers.splice(0, workers.length);
//         response.send(scannedProxies);
//       }
//     }
//   });

//   return w;
// };
