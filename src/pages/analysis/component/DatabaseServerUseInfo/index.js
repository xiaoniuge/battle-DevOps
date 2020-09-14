import { useState } from 'react';
import { Chart, Tooltip, Interval } from 'bizcharts';

const DatabaseServerUseInfo = () => {
  const [data, setData] = useState(dataConfig);
  return (
    <Chart height={400} padding="auto" data={data} autoFit>
      <Interval
        adjust={[
          {
            type: 'dodge',
            marginRatio: 0,
          },
        ]}
        color="name"
        position="month*useInfo"
      />
      <Tooltip shared />
    </Chart>
  );
};

const dataConfig = [
  { name: 'Mysql', month: '1月', useInfo: 18.9 },
  { name: 'Mysql', month: '2月', useInfo: 28.8 },
  { name: 'Mysql', month: '3月', useInfo: 39.3 },
  { name: 'Mysql', month: '4月', useInfo: 81.4 },
  { name: 'Mysql', month: '5月', useInfo: 47 },
  { name: 'Mysql', month: '6月', useInfo: 20.3 },
  { name: 'Mysql', month: '7月', useInfo: 24 },
  { name: 'Mysql', month: '8月', useInfo: 35.6 },
  { name: 'MongoDB', month: '1月', useInfo: 12.4 },
  { name: 'MongoDB', month: '2月', useInfo: 23.2 },
  { name: 'MongoDB', month: '3月', useInfo: 34.5 },
  { name: 'MongoDB', month: '4月', useInfo: 100 },
  { name: 'MongoDB', month: '5月', useInfo: 52.6 },
  { name: 'MongoDB', month: '6月', useInfo: 35.5 },
  { name: 'MongoDB', month: '7月', useInfo: 37.4 },
  { name: 'MongoDB', month: '8月', useInfo: 42.4 },
  { name: 'SqlServer', month: '1月', useInfo: 22.4 },
  { name: 'SqlServer', month: '2月', useInfo: 13.2 },
  { name: 'SqlServer', month: '3月', useInfo: 54.5 },
  { name: 'SqlServer', month: '4月', useInfo: 10 },
  { name: 'SqlServer', month: '5月', useInfo: 2.6 },
  { name: 'SqlServer', month: '6月', useInfo: 38.5 },
  { name: 'SqlServer', month: '7月', useInfo: 27.4 },
  { name: 'SqlServer', month: '8月', useInfo: 92.4 },
];

export default DatabaseServerUseInfo;
