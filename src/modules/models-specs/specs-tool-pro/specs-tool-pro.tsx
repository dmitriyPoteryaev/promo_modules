import React from "react";
import Image from "next/image";
import  "./styles/spesc-tool.scss"

export const SpecsToolPro = (props) => {

    const {className}  = props;

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



    return(<ul style={{ width: '100%', maxWidth: '1135px',
     margin: 'auto', 
      display: 'flex', flexWrap: 'wrap', 
      paddingLeft: '50px', 
      paddingRight: '50px',
      paddingTop: '56px',
     paddingBottom: '150px', border: '1px solid #DEDEDE', borderTop: '0px solid #DEDEDE'}} className={className}>
   


    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', height: '313px'}}>
       <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', position: 'relative'}}>
        < Image  src={"/models-specs/Device configuration.svg"} width={80.28} height={80.28} alt=''/>
        <div style={{marginLeft: '20px'}}>
         <header style={{ maxWidth: '213px', width: '100%'}}>Device configuration</header>
         <div  style={{ position: 'absolute'}}>
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
        <header style={{marginLeft: '20px', maxWidth: '213px', width: '100%'}}>Easy to set up</header>
        <div  style={{ position: 'absolute', left: '100px', top: '35px'}}>
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
        <header style={{marginLeft: '20px', maxWidth: '213px', width: '100%'}}>Sofware update</header>
        <div  style={{ position: 'absolute', left: '100px', top: '30px'}}>
           <div>Software update</div>
           <div>Automatic search for new</div>
           <div>versions on the server</div>
         </div>
        </div>
        <div style={{display: 'flex', position: 'relative'}}>
        < Image  src={"/models-specs/Viewing device information.svg"} width={80.28} height={80.28} alt=''/>
        <header style={{marginLeft: '20px', maxWidth: '213px', width: '100%'}}>Viewing device information</header>
        <div  style={{ position: 'absolute', left: '100px', top: '62px'}}>
           <div>Software version</div>
           <div>List of network parameters</div>
           <div>Useful additional data</div>
         </div>
        </div>
       </div>
       <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
       <div style={{display: 'flex', position: 'relative'}}>
        < Image  src={"/models-specs/archive operation.svg"} width={80.28} height={80.28} alt=''/>
        <header style={{marginLeft: '20px', maxWidth: '213px', width: '100%'}}>Archive operation</header>
        <div  style={{ position: 'absolute', left: '100px', top: '28px'}}>
           <div>Saving the archive from the</div>
           <div>device to a PC in .csv format</div>
           <div>Calculation of the occupied</div>
           <div>volume</div>
         </div>
        </div>
        <div style={{display: 'flex', position: 'relative'}}>
        < Image  src={"/models-specs/Specialised functions.svg"} width={80.28} height={80.28} alt=''/>
        <header style={{marginLeft: '20px', maxWidth: '213px', width: '100%'}}>Specialised functions</header>
        <div  style={{ position: 'absolute', left: '100px', top: '32px'}}>
           <div>Modbus packet sniffer</div>
           <div>Assignment of IP addresses</div>
           <div>by button on the device</div>
           <div>Analogue I/O calibration</div>
         </div>
        </div>
       </div>
    </div>




    </ul>)
}