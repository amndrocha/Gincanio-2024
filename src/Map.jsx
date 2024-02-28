import { divIcon } from "leaflet";
import { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { renderToString } from 'react-dom/server';
import './Map.css';
import { useDispatch } from "react-redux";
import { add } from "./slice";

function Map() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [dark, setDark] = useState(false);
    const [countryName, setCountryName] = useState('');
    const [pass, setPass] = useState('');
    const [input, setInput] = useState('');
    const [countries, setCountries] = useState(JSON.parse(localStorage.getItem('countries')) || []);

    const fakeLoading = () => {
        setLoading(true);
        setTimeout(function() {
            setLoading(false);
        }, 5000);
    };

    const handleModal = (pass, name) => {
        if (openModal) {
            setOpenModal(false);
            setPass('');
            setCountryName('');
        } else {
            setOpenModal(true);
            setPass(pass);
            setCountryName(name);
        }
    };

    const checkPass = (e) => {
        e.preventDefault();
        if (pass == input) {
            countries.map((country) => {
                if (country.name == countryName && country.pass == pass) {
                    country.marker = dark ? "dark-unlocked-point" : "unlocked-point";
                    dispatch(add(country.name));
                }
            })
        }
        localStorage.setItem('countries', JSON.stringify(countries));
        window.dispatchEvent(new Event('news'));
        setOpenModal(false);  
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
            <div className={loading ? 'loading' : 'none'}><div className="loader"></div></div>
            <div className={ dark ? "lightBtnOff" : "lightBtnOn"} onClick={handleDark}><div className={ dark ? "lightBtnCircleOff" : "lightBtnCircleOn"}></div></div>
            <div className={openModal ? 'modal' : 'none'}>
                <div className="modal-window">
                    <div className="modal-header">
                        <div className="close-btn" onClick={handleModal}>fechar</div>
                    </div>
                    <div className="modal-content">
                        {countries.map((country, i) => {
                            if (country.pass == pass) {
                                if (country.marker == "unlocked-point" || country.marker == "dark-unlocked-point") {
                                    return(
                                        <div key={country}>País investigado com sucesso.</div>
                                    )
                                } else {
                                    return(
                                        <form key={i}>
                                            <div className="input-box">
                                                <input id="pass" type="text" value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                                onKeyDown={(e) => {if (e.key === "Enter") checkPass(e)}}
                                                placeholder="Resposta"/>
                                            </div>                                            
                                            <button className="send-btn" onClick={checkPass}>Enviar</button>
                                        </form>
                                    )
                                }
                            }
                        })}                            
                    </div>
                </div>
            </div>

            <MapContainer center={[0,0]} zoom={2} minZoom={2} worldCopyJump={true}>
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
                            click: () => handleModal(country.pass, country.name),
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