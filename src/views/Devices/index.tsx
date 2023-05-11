import React from 'react'
import styles from './devices.module.css'
import DeviceManagementPage from '../../components/Table/DevicesList'

export const Devices = () => {
  return (
    <div className={styles.container} >
      <h1>Danh sách thiết bị</h1>
      
        <DeviceManagementPage/>
    
      <div>
        
      </div>
    </div>
  )
}
