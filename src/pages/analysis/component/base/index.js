import { useState } from 'react';
import { Statistic, Row, Card } from 'antd';

const BaseInfo = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  return (
    <>
      {data.map((item, index) => (
        <Statistic title="Active Users" value={112893} key={index} />
      ))}
    </>
  );
};

export default BaseInfo;
