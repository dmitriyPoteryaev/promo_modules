import React from "react";
import classes from "./styles/table-comprasion.module.scss";
import Image from "next/image";
             {/* <Image width={131.18} height={124} src="/png/main/Oppotunities/Mx110/Mx110.png" alt="Mx110" /> */}

export const TableComprasion = () => {

    return(<section className={classes.tableBlock}>
        <header className={classes.header}>Module comparison</header>
        <div className={classes.tableContainer}>
        <table className={classes.table}>
    <thead>
        <tr>
            <th>Modules</th>
            <th>Interface</th>
            <th>Speed</th>
            <th>Distance</th>
            <th>Supported protocols</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Mx110  
            <Image width={131.18} height={124} src="/png/main/Oppotunities/Mx110/Mx110.png" alt="Mx110" /> 
                </td>
            <td>RS-485</td>
            <td>Up to 115200 bit/s</td>
            <td>Up to 1200 m</td>
            <td>Modbus RTU, ASCII</td>
        </tr>
        <tr>
            <td>Mx210
            <Image width={131.18} height={124} src="/png/main/Oppotunities/Mx210/Mx210.png" alt="Mx110" /> 
            </td>
            <td>Ethernet</td>
            <td>Up to 100 Mbit/s</td>
            <td>Up to 100 m</td>
            <td>Modbus TCP, MQTT, SNMP</td>
        </tr>
    </tbody>
</table>
</div>
    </section>)
}