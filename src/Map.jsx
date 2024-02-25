import { divIcon } from "leaflet";
import { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { renderToString } from 'react-dom/server';
import './Map.css'

function Map() {
    const [openModal, setOpenModal] = useState(false);
    const [dark, setDark] = useState(false);
    const [pass, setPass] = useState('');
    const [input, setInput] = useState('');
    const [countries, setCountries] = useState([
        {
            name: 'brasil',
            pass: 'brasil',
            position: [ -2.7562580015438476 , -48.17132509212502 ],
            marker: 'locked-point',
        },
        {
            name: 'argentina',
            pass: 'argentina',
            position: [ -40.77563875754914 , -69.2750762182338 ],
            marker: 'unlocked-point',
        },
        {
            name: 'eua',
            pass: 'eua',
            position: [ 33.71432359567805 , -86.95083968378019 ],
            marker: 'locked-point',
        },
        {
            name: 'polonia',
            pass: 'polonia',
            position: [ 51.57581250779703 , 20.601412987576932 ],
            marker: 'locked-point',
        },
        {
            name: 'turquia',
            pass: 'turquia',
            position: [ 39.87468079676904 , 35.40007298068552 ],
            marker: 'locked-point',
        },
        {
            name: 'mocambique',
            pass: 'mocambique',
            position: [ -9.915867897227745 , 27.67686458128958 ],
            marker: 'unlocked-point',
        },
        {
            name: 'arabia',
            pass: 'arabia',
            position: [ 25.73921961430858 , 42.000545531346155 ],
            marker: 'locked-point',
        },
        {
            name: 'india',
            pass: 'india',
            position: [ 21.16301794100615 , 79.60419371933031 ],
            marker: 'locked-point',
        },
        {
            name: 'indonesia',
            pass: 'indonesia',
            position: [ -0.396793751120472 , 101.92963933255506 ],
            marker: 'unlocked-point',
        },
        {
            name: 'turcomenistao',
            pass: 'turcomenistao',
            position: [ 39.4008965162013 , 58.422772177048984 ],
            marker: 'locked-point',
        },  
    ]);

    const handleModal = (x) => {
        if (openModal) {
            setOpenModal(false);
            setPass('');
        } else {
            setOpenModal(true);
            setPass(x);
        }
    };
    const checkPass = () => {
        if (pass == input) {
            countries.map((country) => {
                if (country.pass == pass) {
                    country.marker = dark ? "dark-unlocked-point" : "unlocked-point";
                }
            })            
        }
        setInput('');
    };
    const handleDark = () => {
        setDark(!dark);
        setCountries(countries.map((country) => {
            if (country.marker == "locked-point") {
                return {
                    ...country,
                    marker: "dark-locked-point"
                };
            }
            if (country.marker == "unlocked-point") {
                return {
                    ...country,
                    marker: "dark-unlocked-point"
                };
            }
            if (country.marker == "dark-unlocked-point") {
                return {
                    ...country,
                    marker: "unlocked-point"
                };
            }
            if (country.marker == "dark-locked-point") {
                return {
                    ...country,
                    marker: "locked-point"
                };
            }
        }))
    };

    const LocationFinderDummy = () => {
        const map = useMapEvents({
            click(e) {
                console.log('[', e.latlng.lat,',',e.latlng.lng,']');
            },
        });
        return null;
    };

    return (
        <div className={dark ? 'dark-map-page' : 'map-page'} >
            <div className={ dark ? "lightBtnOff" : "lightBtnOn"} onClick={handleDark}><div className={ dark ? "lightBtnCircleOff" : "lightBtnCircleOn"}></div></div>
            <div className={openModal ? 'modal' : 'none'}>
                <div className="modal-window">
                    <div className="modal-header">
                        <div className="close-btn" onClick={handleModal}>X</div>
                    </div>
                    <div className="modal-content">
                        {countries.map((country, i) => {
                            if (country.pass == pass) {
                                if (country.marker == "unlocked-point" || country.marker == "dark-unlocked-point") {
                                    return(
                                        <div key={country}>País desbloqueado!! [inserir charada do próximo país]</div>
                                    )
                                } else {
                                    return(
                                        <div className="input-box" key={i}>
                                            <input id="pass" type="text" value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyDown={(e) => {if (e.key === "Enter") checkPass()}}
                                            />
                                            <button onClick={checkPass}>Enviar</button>
                                        </div>
                                    )
                                }
                            }
                        })}                            
                    </div>
                </div>
            </div>

            <MapContainer center={[0,0]} zoom={2} minZoom={2}>
                <TileLayer
                attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                opacity={dark ? 0.3 : 1}
                />
                {countries.map((country) => {
                    return(
                        <Marker 
                        position={country.position}
                        icon={
                            divIcon({
                                html: renderToString(<div className={country.marker}></div>),
                                className: "",
                            })
                        }
                        eventHandlers={{
                            click: () => handleModal(country.pass),
                        }}
                        key={country.name}
                        >
                        </Marker>
                    )
                })}
                <LocationFinderDummy/>
            </MapContainer>            
        </div>
    );
  }
  
  export default Map;