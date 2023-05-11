import React, { useState } from 'react';
import TableRow from './tableRow';
import styles from './devicesList.module.css';
import ButtonUpdate from '../ButtonUpdate';

interface Device {
  id: string;
  name: string;
  ipAddress: string;
  statusAction: string;
  statusConnect: string;
  service: string;
  status: 'active' | 'inactive';
}

const handleClick = () => {
    console.log('Button clicked');
  };


const Table: React.FC = () => {
    const [devices, setDevices] = useState<Device[]>([
    {
      id: 'device1',
      name: 'Thiết bị 1',
      ipAddress: '192.168.1.1',
      statusAction: 'Hoạt động',
      statusConnect: 'Kết nối',
      service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
      status:'active'
    },
    {
      id: 'device2',
      name: 'Thiết bị 2',
      ipAddress: '192.168.1.2',
      statusAction: 'Không Hoạt động',
      statusConnect: 'Không Kết nối',
      service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
      status:'inactive'
    },
    {
      id: 'device1',
      name: 'Thiết bị 1',
      ipAddress: '192.168.1.1',
      statusAction: 'Hoạt động',
      statusConnect: 'Kết nối',
      service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
      status:'active'
    },
    {
      id: 'device2',
      name: 'Thiết bị 2',
      ipAddress: '192.168.1.2',
      statusAction: 'Không Hoạt động',
      statusConnect: 'Không Kết nối',
      service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
      status:'inactive'
    },
    {
      id: 'device1',
      name: 'Thiết bị 1',
      ipAddress: '192.168.1.1',
      statusAction: 'Hoạt động',
      statusConnect: 'Kết nối',
      service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
      status:'active'
    },
    {
      id: 'device2',
      name: 'Thiết bị 2',
      ipAddress: '192.168.1.2',
      statusAction: 'Không Hoạt động',
      statusConnect: 'Không Kết nối',
      service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
      status:'inactive'
    },
    {
      id: 'device1',
      name: 'Thiết bị 1',
      ipAddress: '192.168.1.1',
      statusAction: 'Hoạt động',
      statusConnect: 'Kết nối',
      service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
      status:'active'
    },
    {
      id: 'device2',
      name: 'Thiết bị 2',
      ipAddress: '192.168.1.2',
      statusAction: 'Không Hoạt động',
      statusConnect: 'Không Kết nối',
      service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
      status:'inactive'
    },{
      id: 'device2',
      name: 'Thiết bị 2',
      ipAddress: '192.168.1.2',
      statusAction: 'Không Hoạt động',
      statusConnect: 'Không Kết nối',
      service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
      status:'inactive'
    }
    // và các thiết bị khác
  ]);
  return (
    <div className={styles.container}>
    <table className={styles['device-list']} >
      <thead>
        <tr>
          <th>Mã thiết bị</th>
          <th>Tên thiết bị</th>
          <th>Địa chỉ IP</th>
          <th>Trạng thái hoạt động</th>
          <th>Trạng thái kết nối</th>
          <th>Dịch vụ</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {devices.map(device => (
          <TableRow key={device.id} device={device}>
            <td>{device.id}</td>
            <td>{device.name}</td>
            <td>{device.ipAddress}</td>
            <td><span className={`${styles.dot} ${device.status === 'active' ? styles['dot-green'] : styles['dot-red']}`} />{device.statusAction}</td>
            <td>
              <span className={`${styles.dot} ${device.status === 'active' ? styles['dot-green'] : styles['dot-red']}`} />
              {device.statusConnect}
            </td>
            <td>{device.service}<ButtonUpdate onClick={() => console.log('Xem thêm')} text="Xem thêm" /></td>
             <td><ButtonUpdate onClick={() => console.log('Xem thêm')} text="Chi tiết" /></td>
              <td><ButtonUpdate onClick={() => console.log('Xem thêm')} text="Cập nhật" /></td>
          </TableRow> 
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;