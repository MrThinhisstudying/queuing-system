import {useEffect, useState} from 'react'
import AltaLogo from '../../assets/images/Logo_alta.svg';
import DashboardIcon from '../../assets/images/dashboard_icon.svg';
import MonitorIcon from '../../assets/images/monitor_icon.svg';
import ServiceIcon from '../../assets/images/service_icon.svg';
import CapSoIcon from '../../assets/images/capso_icon.svg';
import ReportIcon from '../../assets/images/baocao_icon.svg';
import SettingIcon from '../../assets/images/setting_icon.svg';
import MoreIcon from '../../assets/images/fi_more-vertical.svg'
import LogoutIcon from '../../assets/images/fi_log-out.svg';
import styles from './Menubar.module.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { stateModel } from '../../store/reducers/breadcrumbSlice';

type MenuBarProps = {
    onClick: (name: string, path: string) => void
}

const menubar = [
    {
        text: "Dashboard",
        img: DashboardIcon,
        path: '/thongke'
    },
    {
        text: "Thiết bị",
        img: MonitorIcon,
        path: '/thietbi'
    },
    {
        text: "Dịch vụ",
        img: ServiceIcon,
        path: '/dichvu'
    },
    {
        text: "Cấp số",
        img: CapSoIcon,
        path: '/capso'
    },
    {
        text: "Báo cáo",
        img: ReportIcon,
        path: '/baocao'
    },
]


const checkIsSelect = (array: stateModel[], text: string) => {
    array.map((item) => {
        console.log(item.title === text)
        if(item.title !== text){
            return false;
        }
    })
    return true;
}


export const Menubar = (props: MenuBarProps) => {

    const navigate = useNavigate();
    const state = useSelector((state: RootState) => state.breadcrumb.value)

    const [selected, setSelected] = useState<string| null> (null);

    useEffect(() => {
       if(state.length === 0) return setSelected(null)
    }, [state])
    
    const handleClick = (array: stateModel[], text: string) => {
        if(checkIsSelect(array,text) ) return setSelected(text)
        else return setSelected(null)
    }


    return (
        <div className={styles.container}>

            <div className={styles.wrap} >
                <img src={AltaLogo} alt="logo" />

                <div className={styles.listBtn}>
                    {menubar.map(item => (
                        <div 
                            key={item.text} 
                            className={selected === item.text ? styles.btnActive : styles.btn}
                            onClick={() => {
                                props.onClick(item.text, item.path) 
                                handleClick(state, item.text)
                            }}
                        >
                            <img src={item.img} alt="icon" />
                            <p>{item.text}</p>
                        </div>
                    ))}

                    <div className={styles.btn}>
                        <img src={SettingIcon} alt="setting icon" />
                        <p>Cài đặt hệ thống</p>
                        <img src={MoreIcon} alt="more icon" />
                    </div>
                </div>
            </div>

            <div 
                className={styles.logoutBtn} 
                onClick={() => navigate('/')}
            >
                <img src={LogoutIcon} alt="logout icon" />
                <p>Đăng xuất</p>
            </div>
        </div>
    )
}
