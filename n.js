const util = require('util');
const exec = util.promisify(require('child_process').exec);


k=['AddressWidth', 'Architecture', 'Availability', 'Caption', 'ConfigManagerErrorCode', 'ConfigManagerUserConfig', 'CpuStatus', 'CreationClassName', 'CurrentClockSpeed', 'CurrentVoltage', 'DataWidth', 'Description', 'DeviceID', 'ErrorCleared', 'ErrorDescription', 'ExtClock', 'Family', 'InstallDate', 'L2CacheSize', 'L2CacheSpeed', 'LastErrorCode', 'Level', 'LoadPercentage', 'Manufacturer', 'MaxClockSpeed', 'Name', 'OtherFamilyDescription', 'PNPDeviceID', 'PowerManagementCapabilities', 'PowerManagementSupported', 'ProcessorId', 'ProcessorType', 'Revision', 'Role', 'SocketDesignation', 'Status', 'StatusInfo', 'Stepping', 'SystemCreationClassName', 'SystemName', 'UniqueId', 'UpgradeMethod', 'Version', 'VoltageCaps']

exe = (cmd) => 
{
  exec(cmd, (err, stdout, stderr) => {
   console.log(stdout)
   stderr ? console.log(cmd) : 0
  });
}
(async ()=>{
    p='wmic cpu get '
    o=[]
    for(i=0;i<k.length;i++){
        const { stdout, stderr } = await exec(p+k[i]);
        try{
            if(stdout.split('\n')[1].match(/[a-zA-Z0-9]/)){
                console.log(k[i])
                o.push(k[i])
            } 
        }
        catch(e){
           
        }
    }
    // const { stdout, stderr } = await exec(p+o.join(','))
    // console.log(stdout,'\n\n\n',p+o.join(','))
})()


