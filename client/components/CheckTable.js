import React, {Component} from 'react';
import ReactTable from 'react-table';
import Spinner from './Spinner';

const countries = {
  AF: 'Afghanistan',
  AX: 'Aland Islands',
  AL: 'Albania',
  DZ: 'Algeria',
  AS: 'American Samoa',
  AD: 'Andorra',
  AO: 'Angola',
  AI: 'Anguilla',
  AQ: 'Antarctica',
  AG: 'Antigua and Barbuda',
  AR: 'Argentina',
  AM: 'Armenia',
  AW: 'Aruba',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbaijan',
  BS: 'Bahamas',
  BH: 'Bahrain',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Belarus',
  BE: 'Belgium',
  BZ: 'Belize',
  BJ: 'Benin',
  BM: 'Bermuda',
  BT: 'Bhutan',
  BO: 'Bolivia',
  BA: 'Bosnia and Herzegovina',
  BW: 'Botswana',
  BV: 'Bouvet Island',
  BR: 'Brazil',
  IO: 'British Indian Ocean Territory',
  BN: 'Brunei Darussalam',
  BG: 'Bulgaria',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  KH: 'Cambodia',
  CM: 'Cameroon',
  CA: 'Canada',
  CV: 'Cape Verde',
  KY: 'Cayman Islands',
  CF: 'Central African Republic',
  TD: 'Chad',
  CL: 'Chile',
  CN: 'China',
  CX: 'Christmas Island',
  CC: 'Cocos (Keeling) Islands',
  CO: 'Colombia',
  KM: 'Comoros',
  CG: 'Congo',
  CD: 'Congo, Democratic Republic of the',
  CK: 'Cook Islands',
  CR: 'Costa Rica',
  HR: 'Croatia (Hrvatska)',
  CU: 'Cuba',
  CY: 'Cyprus',
  CZ: 'Czech Republic',
  CS: 'Czechoslovakia (former)',
  CI: "Côte d'Ivoire",
  KP: "Democratic People's Republic of Korea",
  DK: 'Denmark',
  DJ: 'Djibouti',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  TP: 'East Timor',
  EC: 'Ecuador',
  EG: 'Egypt',
  SV: 'El Salvador',
  GQ: 'Equatorial Guinea',
  ER: 'Eritrea',
  EE: 'Estonia',
  ET: 'Ethiopia',
  EU: 'European Union',
  FK: 'Falkland Islands (Malvinas)',
  FO: 'Faroe Islands',
  FM: 'Federated States of Micronesia',
  FJ: 'Fiji',
  FI: 'Finland',
  FR: 'France',
  GF: 'French Guiana',
  PF: 'French Polynesia',
  TF: 'French Southern Territories',
  GA: 'Gabon',
  GM: 'Gambia',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GR: 'Greece',
  GL: 'Greenland',
  GD: 'Grenada',
  GP: 'Guadeloupe',
  GU: 'Guam',
  GT: 'Guatemala',
  GG: 'Guernsey',
  GN: 'Guinea',
  GW: 'Guinea-Bissau',
  GY: 'Guyana',
  HT: 'Haiti',
  HM: 'Heard Island and McDonald Islands',
  VA: 'Holy See',
  HN: 'Honduras',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IS: 'Iceland',
  IN: 'India',
  ID: 'Indonesia',
  IQ: 'Iraq',
  IE: 'Ireland',
  IR: 'Islamic Republic of Iran',
  IM: 'Isle of Man',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  JE: 'Jersey',
  JO: 'Jordan',
  KZ: 'Kazakhstan',
  KE: 'Kenya',
  KI: 'Kiribati',
  XK: 'Kosovo',
  KW: 'Kuwait',
  KG: 'Kyrgyzstan',
  LA: "Lao People's Democratic Republic",
  LV: 'Latvia',
  LB: 'Lebanon',
  LS: 'Lesotho',
  LR: 'Liberia',
  LY: 'Libyan Arab Jamahiriya',
  LI: 'Liechtenstein',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MO: 'Macau',
  MG: 'Madagascar',
  MW: 'Malawi',
  MY: 'Malaysia',
  MV: 'Maldives',
  ML: 'Mali',
  MT: 'Malta',
  MH: 'Marshall Islands',
  MQ: 'Martinique',
  MR: 'Mauritania',
  MU: 'Mauritius',
  YT: 'Mayotte',
  MX: 'Mexico',
  MC: 'Monaco',
  MN: 'Mongolia',
  ME: 'Montenegro',
  MS: 'Montserrat',
  MA: 'Morocco',
  MZ: 'Mozambique',
  MM: 'Myanmar',
  NA: 'Namibia',
  NR: 'Nauru',
  NP: 'Nepal',
  NL: 'Netherlands',
  AN: 'Netherlands Antilles',
  NT: 'Neutral Zone',
  NC: 'New Caledonia',
  NZ: 'New Zealand',
  NI: 'Nicaragua',
  NE: 'Niger',
  NG: 'Nigeria',
  NU: 'Niue',
  NF: 'Norfolk Island',
  MP: 'Northern Mariana Islands',
  NO: 'Norway',
  OM: 'Oman',
  PK: 'Pakistan',
  PW: 'Palau',
  PS: 'Palestinian Territory, Occupied',
  PA: 'Panama',
  PG: 'Papua New Guinea',
  PY: 'Paraguay',
  PE: 'Peru',
  PH: 'Philippines',
  PN: 'Pitcairn',
  PL: 'Poland',
  PT: 'Portugal',
  PR: 'Puerto Rico',
  QA: 'Qatar',
  KR: 'Republic of Korea',
  MD: 'Republic of Moldova',
  RE: 'Reunion',
  RO: 'Romania',
  RU: 'Russian Federation',
  RW: 'Rwanda',
  SH: 'Saint Helena',
  KN: 'Saint Kitts and Nevis',
  LC: 'Saint Lucia',
  MF: 'Saint Martin',
  VC: 'Saint Vincent & the Grenadines',
  WS: 'Samoa',
  SM: 'San Marino',
  ST: 'Sao Tome and Principe',
  SA: 'Saudi Arabia',
  SN: 'Senegal',
  RS: 'Serbia',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SG: 'Singapore',
  SX: 'Sint Maarten',
  SK: 'Slovakia',
  SI: 'Slovenia',
  SB: 'Solomon Islands',
  SO: 'Somalia',
  ZA: 'South Africa',
  GS: 'South Georgia and The South Sandwich Islands',
  SS: 'South Sudan',
  ES: 'Spain',
  LK: 'Sri Lanka',
  PM: 'St. Pierre and Miquelon',
  SD: 'Sudan',
  SR: 'Suriname',
  SJ: 'Svalbard and Jan Mayen',
  SZ: 'Swaziland',
  SE: 'Sweden',
  CH: 'Switzerland',
  SY: 'Syrian Arab Republic',
  TW: 'Taiwan',
  TJ: 'Tajikistan',
  TH: 'Thailand',
  MK: 'The Former Yugoslav Republic of Macedonia',
  TL: 'Timor-Leste',
  TG: 'Togo',
  TK: 'Tokelau',
  TO: 'Tonga',
  TT: 'Trinidad and Tobago',
  TN: 'Tunisia',
  TR: 'Turkey',
  TM: 'Turkmenistan',
  TC: 'Turks and Caicos Islands',
  TV: 'Tuvalu',
  UM: 'US Minor Outlying Islands',
  UG: 'Uganda',
  UA: 'Ukraine',
  AE: 'United Arab Emirates',
  GB: 'United Kingdom of Great Britain and Northern Ireland',
  TZ: 'United Republic of Tanzania',
  US: 'United States of America',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VU: 'Vanuatu',
  VE: 'Venezuela',
  VN: 'Viet Nam',
  VG: 'Virgin Islands (British)',
  VI: 'Virgin Islands (U.S.A.)',
  WF: 'Wallis and Futuna',
  EH: 'Western Sahara',
  YE: 'Yemen',
  ZM: 'Zambia',
  ZW: 'Zimbabwe'
};

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
            accessor: 'proxyIP',
            width: 135,
            Cell: row => {
              return <div className="rowMiddle">{row.value}</div>;
            }
          },
          {
            Header: 'Port',
            accessor: 'proxyPort',
            width: 50,
            Cell: row => {
              return <div className="columnCenter rowMiddle">{row.value}</div>;
            }
          },
          {
            Header: 'Status',
            accessor: 'proxyStatus',
            width: 85,
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
            Header: 'Anonymous?',
            accessor: 'anonymityLevel',
            width: 125,
            Cell: row => {
              return row.value === 'testing' ? (
                ''
              ) : (
                <div
                  className={`rowMiddle textCenter ${
                    row.value === 1 ? 'greenText' : 'redText'
                  }`}
                >
                  {row.value === 1 ? 'True' : 'False'}
                </div>
              );
            }
          },
          {
            Header: 'Country',
            accessor: 'country',
            width: 235,
            Cell: row => {
              return (
                <div className="rowMiddle">
                  <div className="flagDiv">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAgFAAE8CAgAOw=="
                      className={`flag flag-${row.value.toLowerCase()}`}
                      alt="Flag"
                    />
                  </div>
                  {countries[row.value]}
                </div>
              );
            }
          },
          {
            Header: 'Speed',
            accessor: 'connectTime',
            Cell: row => {
              let connectTime = (row.value / 4) * 100;
              return row.value == '---' ? (
                <div className="rowMiddle">{row.value}</div>
              ) : (
                <div
                  className="rowMiddle"
                  style={{
                    height: '100%'
                  }}
                >
                  <div
                    style={{
                      width: `${Math.min(90, connectTime)}%`,
                      height: '25%',
                      backgroundColor:
                        connectTime > 66
                          ? '#ff2e00'
                          : row.value > 33
                          ? '#ffbf00'
                          : '#85cc00',
                      borderRadius: '2px',
                      transition: 'all .2s ease-out'
                    }}
                  />
                  <div className="connectTime">{row.value}</div>
                </div>
              );
            }
          }
        ]}
        defaultPageSize={Math.min(50, Object.keys(data).length)}
        className="-striped -highlight"
        filterable
      />
    </div>
  );
};

export default CheckTable;
//
