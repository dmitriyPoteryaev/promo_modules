import React from "react";
import Image from "next/image";
import classes from  "./styles/spesc-tool.module.scss";
import Link from "next/link";
import { getClasses } from './styles/get-classes';

export const SpecsToolPro = (props) => {

    const {visonEquipment}  = props;

    const SpecsToolPro = [

        {
            title: "Device configuration",
            src : "/models-specs/Device configuration.svg",
            desc: ["Reading and writing values", "Copying from device to device", "Setting the real-time clock", "Password protection", "Reset to factory settings"]

        },
        {
            title: "Software update",
            src : "/models-specs/Sofware_update.svg",
            desc: ["Software update", "Automatic search for new", "versions on the server" ]

        },
        {
            title: "Archive operation",
            src : "/models-specs/Device configuration.svg",
            desc: ["Saving the archive from the", "device to a PC in .csv format", "Calculation of the occupied", "volume"]

        },
        {
            title: "Easy to set up",
            src : "/models-specs/Easy-to-set-up.svg",
            desc: ["Real-time parameter status", "Group setting of devices", "Saving/uploading a project", "Setting user names"]

        },   
        {
            title: "Viewing device information",
            src : "/models-specs/Viewing device information.svg",
            desc: ["Software version", "List of network parameters", "Useful additional data"]

        },
        {
            title: "Specialised functions",
            src : "/models-specs/Specialised functions.svg",
            desc: ["Modbus packet sniffer", "Assignment of IP addresses", "by button on the device", "Analogue I/O calibration"]

        },
    ]

    const { cnContainerBlockEquipment } = getClasses(visonEquipment);



    return(<ul style={{ width: '100%',
     margin: 'auto', 
      paddingTop: '56px',
      border: '1px solid #DEDEDE', borderTop: '0px solid #DEDEDE'}} className={cnContainerBlockEquipment} >
   


<div>

    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', height: '313px', maxWidth: '1135px',       paddingLeft: '57px',
      paddingRight: '50px',}} className={classes.AkytecToolPro_wrapper}>
       <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', position: 'relative'}}>
        < Image  src={"/models-specs/Device configuration.svg"} width={80.28} height={80.28} alt=''/>
        <div style={{marginLeft: '20px'}}>
         <header style={{ maxWidth: '213px', width: '100%'}} className={classes.AkytecToolPro_header}>Device configuration</header>
         <div  style={{ position: 'absolute'}} className={classes.AkytecToolPro_writting}>
           <div>Reading and writing values</div>
           <div>Copying from device to device</div>
           <div>Setting the real-time clock</div>
           <div>Password protection</div>
           <div>Reset to factory settings</div>
         </div>
         </div>
        </div>
        <div style={{display: 'flex', position: 'relative'}}>
        < Image  src={"/models-specs/Easy-to-set-up.svg"} width={80.28} height={80.28} alt=''/>
        <header style={{marginLeft: '20px', maxWidth: '213px', width: '100%'}} className={classes.AkytecToolPro_header}>Easy to set up</header>
        <div  style={{ position: 'absolute', left: '100px', top: '35px'}} className={classes.AkytecToolPro_writting}>
           <div>Real-time parameter status</div>
           <div>Group setting of devices</div>
           <div>Saving/uploading a project</div>
           <div>Setting user names</div>
         </div>
        </div>
       </div>
       <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
       <div style={{display: 'flex', position: 'relative'}}>
        < Image  src={"/models-specs/Sofware_update.svg"} width={80.28} height={80.28} alt=''/>
        <header style={{marginLeft: '20px', maxWidth: '213px', width: '100%'}} className={classes.AkytecToolPro_header}>Sofware update</header>
        <div  style={{ position: 'absolute', left: '100px', top: '30px'}} className={classes.AkytecToolPro_writting}>
           <div>Software update</div>
           <div>Automatic search for new</div>
           <div>versions on the server</div>
         </div>
        </div>
        <div style={{display: 'flex', position: 'relative'}}>
        < Image  src={"/models-specs/Viewing device information.svg"} width={80.28} height={80.28} alt=''/>
        <header style={{marginLeft: '20px', maxWidth: '213px', width: '100%'}} className={classes.AkytecToolPro_header}>Viewing device information</header>
        <div  style={{ position: 'absolute', left: '100px', top: '62px'}} className={classes.AkytecToolPro_writting}>
           <div>Software version</div>
           <div>List of network parameters</div>
           <div>Useful additional data</div>
         </div>
        </div>
       </div>
       <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
       <div style={{display: 'flex', position: 'relative'}}>
        < Image  src={"/models-specs/archive operation.svg"} width={80.28} height={80.28} alt=''/>
        <header style={{marginLeft: '20px', maxWidth: '213px', width: '100%'}} className={classes.AkytecToolPro_header}>Archive operation</header>
        <div  style={{ position: 'absolute', left: '100px', top: '28px'}} className={classes.AkytecToolPro_writting}>
           <div>Saving the archive from the</div>
           <div>device to a PC in .csv format</div>
           <div>Calculation of the occupied</div>
           <div>volume</div>
         </div>
        </div>
        <div style={{display: 'flex', position: 'relative'}}>
        < Image  src={"/models-specs/Specialised functions.svg"} width={80.28} height={80.28} alt=''/>
        <header style={{marginLeft: '20px', maxWidth: '213px', width: '100%'}} className={classes.AkytecToolPro_header}>Specialised functions</header>
        <div  style={{ position: 'absolute', left: '100px', top: '32px'}} className={classes.AkytecToolPro_writting}>
           <div>Modbus packet sniffer</div>
           <div>Assignment of IP addresses</div>
           <div>by button on the device</div>
           <div>Analogue I/O calibration</div>
         </div>
        </div>
       </div>
    
    </div>

    <div className={classes.AkytecToolPro_wrapper}>

    <div style={{marginTop: '150px', padding: '12px 98px 12px 60px', width: '100%', borderTop: '1px solid #DDDDDD'}}>
        <Link target="_blank" href="https://akytec.de/media/wysiwyg/downloads/MX210/Setup_akYtecToolPro_v1.24.118.0.zip">
        <button style={{width: 
        '100%', 
        height: '38px',
         backgroundColor: '#F9F9F9', 
         border: '1px solid #DDDDDD', 
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         paddingLeft: '9px',
         paddingRight: '13px',
         borderRadius: '4px'}}><span
         style={{
            fontFamily: 'Istok-Regular',
            fontSize: '13px',
            lineHeight: '20px',
            fontWeight: '400',
            color: '#0088CC'
         }}
         >akYtecToolPro_v1.24.118.0</span><Image src="models-specs/Download.svg" width={18} height={18} alt=""/></button></Link> </div>

</div>
</div>
    </ul>)
}