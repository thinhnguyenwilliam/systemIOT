import React, { useEffect, useState, useRef } from 'react';
import { getDatabase, ref, set, onValue, get } from 'firebase/database';
import { database } from '../../config/Firebase'; // Ensure this path is correct

import {
    FaTemperatureHigh,
    FaDatabase,
    FaCode,
    FaAddressCard
} from "react-icons/fa";


import {
    TbMobiledata

} from "react-icons/tb";


import {
    SiAmazonapigateway,
    SiSequelize
} from "react-icons/si";




import {
    AiOutlineColumnWidth
} from "react-icons/ai";


import {
    GiAerialSignal
} from "react-icons/gi";


import {
    RiRedPacketLine
} from "react-icons/ri";


import {
    MdNoiseAware
} from "react-icons/md";


import { CiTimer } from "react-icons/ci";


const Main = () => {
    const [temperature, setTemperature] = useState(''); // State to store the fetched temperature
    const dataRef = useRef(null); // Create a ref for the input element

    const getCurrentDatePath = async () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(now.getDate()).padStart(2, '0');

        //const basePath = `${year}-${month}-${day}/sensor8`;
        const basePath = `2024-06-23/sensor8`;//test thử

        // Fetch all message keys
        const baseRef = ref(database, basePath);
        const snapshot = await get(baseRef);

        if (snapshot.exists()) {
            const messages = snapshot.val();
            const maxMsgKey = Math.max(...Object.keys(messages).map(key => parseInt(key.replace('msg', ''), 10)));
            return `${basePath}/msg${maxMsgKey}`;
        } else {
            console.error('No messages found');
            return null;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const path = await getCurrentDatePath();
            if (path) {
                const dbRef = ref(database, path);
                onValue(dbRef, (snapshot) => {
                    const data = snapshot.val();
                    if (data !== null) {
                        setTemperature(data);
                    }
                });
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    const handleSave = async () => {
        const inputValue = dataRef.current.value;
        const path = await getCurrentDatePath();
        if (path) {
            const dbRef = ref(database, path);
            set(dbRef, { "Nhiệt độ": inputValue })
                .then(() => {
                    console.log('Data saved successfully');
                })
                .catch((error) => {
                    console.error('Error saving data:', error);
                });
        }
    };

    return (
        <main className="layout-default__main">
            <div className="container">
                <h1>List of parameters in the system</h1>

                {/* <button onClick={handleSave}>Save</button> */}
                {/* <p>{temperature.data}</p>  Display the fetched temperature  */}


                <div className="layout-default__main--row">


                    <div className="layout-default__main--row__box">
                        <FaCode />
                        <div className="layout-default__main--row__box--title">
                            {temperature.cr}
                        </div>
                        <div className="layout-default__main--row__box--desc">
                            Coding Race
                        </div>
                    </div>


                    <div className="layout-default__main--row__box">
                        <FaDatabase />
                        <div className="layout-default__main--row__box--title">
                            {temperature.data}
                        </div>
                        <div className="layout-default__main--row__box--desc">
                            Data Packet
                        </div>
                    </div>

                    <div className="layout-default__main--row__box">
                        <TbMobiledata />
                        <div className="layout-default__main--row__box--title">
                            {temperature.datarate}
                        </div>
                        <div className="layout-default__main--row__box--desc">
                            Data Rate
                        </div>
                    </div>

                    <div className="layout-default__main--row__box">
                        <SiAmazonapigateway />
                        <div className="layout-default__main--row__box--title">
                            {temperature.gateway_eui}
                        </div>
                        <div className="layout-default__main--row__box--desc">
                            Gateway Address
                        </div>
                    </div>

                    <div className="layout-default__main--row__box">
                        <AiOutlineColumnWidth />
                        <div className="layout-default__main--row__box--title">
                            {temperature.len}
                        </div>
                        <div className="layout-default__main--row__box--desc">
                            Data Length
                        </div>
                    </div>


                    <div className="layout-default__main--row__box">
                        <FaAddressCard />
                        <div className="layout-default__main--row__box--title">
                            {temperature.node_eui}
                        </div>
                        <div className="layout-default__main--row__box--desc">
                            Sensor Address
                        </div>
                    </div>



                    <div className="layout-default__main--row__box">
                        <GiAerialSignal />
                        <div className="layout-default__main--row__box--title">
                            {temperature.rssi}
                        </div>
                        <div className="layout-default__main--row__box--desc">
                            Signal Density
                        </div>
                    </div>


                    <div className="layout-default__main--row__box">
                        <SiSequelize />
                        <div className="layout-default__main--row__box--title">
                            {temperature.seq}
                        </div>
                        <div className="layout-default__main--row__box--desc">
                            Packet Order
                        </div>
                    </div>

                    <div className="layout-default__main--row__box">
                        <MdNoiseAware />
                        <div className="layout-default__main--row__box--title">
                            {temperature.snr}
                        </div>
                        <div className="layout-default__main--row__box--desc">
                            Noise
                        </div>
                    </div>



                    <div className="layout-default__main--row__box">
                        <CiTimer />
                        <div className="layout-default__main--row__box--title">
                            {temperature.time}
                        </div>
                        <div className="layout-default__main--row__box--desc">
                            Time
                        </div>
                    </div>


                    <div className="layout-default__main--row__box">
                        <RiRedPacketLine />
                        <div className="layout-default__main--row__box--title">
                            {temperature.type}
                        </div>
                        <div className="layout-default__main--row__box--desc">
                            Type Of Packet
                        </div>
                    </div>


                </div>


                {/* <div className="layout-default__main--second">
                    <div className="layout-default__main--second__title">
                        hình đẹp
                    </div>
                    <div className="layout-default__main--second__figure">
                        hình đẹp
                    </div>
                </div> */}

                
            </div>
        </main>
    );
}

export default Main;
