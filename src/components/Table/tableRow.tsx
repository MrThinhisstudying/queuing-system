import React from 'react';
import ButtonUpdate from '../ButtonUpdate';
import styles from './devicesList.module.css';

interface Device {
  id: string;
  name: string;
  ipAddress: string;
  statusAction: string;
  statusConnect: string;
  service: string;
  status: 'active' | 'inactive';
}

interface Props {
  device: Device; 
  children?: React.ReactNode;
}

const TableRow: React.FC<Props> = ({ device }) => {
  const [showFullInfo, setShowFullInfo] = React.useState(false)

  const toggleInfo = () => {
    setShowFullInfo(!showFullInfo)
  }
  return (
    
    <tr>
      <td>{device.id}</td>
      <td>{device.name}</td>
      <td>{device.ipAddress}</td>
      <td>
        <span className={`${styles.dot} ${device.status === 'active' ? styles['dot-green'] : styles['dot-red']}`} />
        {device.statusAction}</td>
      <td>
        <span className={`${styles.dot} ${device.status === 'active' ? styles['dot-green'] : styles['dot-red']}`} />
        {device.statusConnect} </td>
      <td>{device.service} <ButtonUpdate onClick={() => console.log('Xem thêm')} text="Xem thêm" /> </td>
      <td><ButtonUpdate onClick={() => console.log('Xem thêm')} text="Chi tiết" /></td>
      <td><ButtonUpdate onClick={() => console.log('Xem thêm')} text="Cập nhật" /></td>
    </tr>
    
  );
};

export default TableRow;