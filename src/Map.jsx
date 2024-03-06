import { divIcon } from "leaflet";
import { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { renderToString } from 'react-dom/server';
import './Map.css';
import { useDispatch, useSelector } from "react-redux";
import { add, changePass } from "./slice";

function Map() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [dark, setDark] = useState(false);
    const [countryName, setCountryName] = useState('');
    const [pass, setPass] = useState('');
    const [input, setInput] = useState('');
    const [countries, setCountries] = useState(JSON.parse(localStorage.getItem('countries')) || []);
    const checkpoints = JSON.parse(localStorage.getItem('checkpoints')) || [];

    /// ATUALIZAR O COUNTRIES DE ACORDO COM A SENHA AO LOGAR

    const paths = [["c1", "c2", "c3", "c4", "c5"], ["c6", "c7"],["c8", "c9"]];
    const allCountries = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9"];
    const getUnlocked = () => {
        let unlockedPath = ['', '', ''];
        if (countries) {
            const unlockedCountries = countries.filter(country => 
                country.marker === 'dark-unlocked-point' || country.marker === 'unlocked-point'
            );

            const unlockedNames = unlockedCountries.map((country) => country.name);

            paths.forEach((path, i) => {
                path.forEach((country) => {
                    if (unlockedNames.includes(country)) {
                        unlockedPath[i] = country;
                    }
                });
            });

            return unlockedPath;
        }    
    };

    const getUnlockedNames = () => {
        if (countries) {
            const unlockedCountries = countries.filter(country => 
                country.marker === 'dark-unlocked-point' || country.marker === 'unlocked-point'
            );
        
            const unlockedCountryNames = unlockedCountries.map(country => country.name);
            return unlockedCountryNames;
        }
    };

    function checkPrevious() {
        let unlockedNames = getUnlockedNames();
        if (countryName === "c10") {
            for (let country of allCountries) {
                if (!unlockedNames.includes(country)) {
                    return false;
                }
            }
            return true;
        }
        for (let path of paths) {
            let index = path.indexOf(countryName);
            if (index !== -1) {
                for (let i = 0; i < index; i++) {
                    if (!unlockedNames.includes(path[i])) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    const password = useSelector(state => state.message.pass);

    function isEqual(arr1, arr2) {
        // Check if the arrays have the same length
        if (arr1.length !== arr2.length) {
            return false;
        }
    
        // Check if all elements are equal
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
    
        return true;
    }
    const updatePassword = () => {
        const unlocked = getUnlocked(); 
        for (let i = 0; i < checkpoints.length; i++) {
            const checkpoint = checkpoints[i];
            if (isEqual(checkpoint.path, unlocked)) {
                dispatch(changePass(checkpoint.password));
            }
        }
    };

    window.addEventListener('pass', () => {
        updatePassword();
        window.dispatchEvent(new Event('pass-changed'));
    });


    

    const fakeLoading = () => {
        setLoading(true);
        setTimeout(function() {
            setLoading(false);
        }, 1500);
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

    const clean = () => {
        let cleanInput = input;                                                     
        cleanInput = cleanInput.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        cleanInput = cleanInput.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        cleanInput = cleanInput.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        cleanInput = cleanInput.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        cleanInput = cleanInput.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        cleanInput = cleanInput.replace(new RegExp('[Ç]','gi'), 'c');
        return cleanInput.toLowerCase();
    }

    const checkPass = (e) => {
        e.preventDefault();
        console.log(checkPrevious());
        if (pass.includes(clean(input)) && input != '') {
            countries.map((country) => {
                if (country.name == countryName && pass.includes(country.pass)) {
                    console.log('entrou');
                    if (checkPrevious()) {
                        country.marker = dark ? "dark-unlocked-point" : "unlocked-point";
                        dispatch(add(country.name));
                        updatePassword();
                        localStorage.setItem('countries', JSON.stringify(countries));
                        window.dispatchEvent(new Event('news'));
                        if (pass == 'darvaza') {
                            window.dispatchEvent(new Event('finish'));
                        }
                        fakeLoading();                           
                    } else {
                        window.dispatchEvent(new Event('wrong'));
                        fakeLoading();
                    }  
                }
            })
        } else {
            window.dispatchEvent(new Event('wrong'));
            fakeLoading();
        }
        setInput('');
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

    const preventClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={dark ? 'dark-map-page' : 'map-page'} >
            <div className={loading ? 'loading' : 'none'}><div className="loader"></div></div>
            <div className={ dark ? "lightBtnOff" : "lightBtnOn"} onClick={handleDark}><div className={ dark ? "lightBtnCircleOff" : "lightBtnCircleOn"}></div></div>
            <div className={openModal ? 'modal' : 'none'} onClick={handleModal}>
                <div className="map-modal-window" onClick={(e) => preventClick(e)}>
                    {countries.map((country, i) => {
                        if (country.pass == pass) {
                            if (country.marker == "unlocked-point" || country.marker == "dark-unlocked-point") {
                                return(
                                    <div key={country}>País investigado com sucesso.</div>
                                )
                            } else {
                                return(
                                    <form key={i} style={{marginTop: 0}}>
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

            <MapContainer center={[0,0]} zoom={2} minZoom={2} worldCopyJump={true}>
                <TileLayer
                attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}"
                accessToken="UqUOnR0pbSX4wApcUBS3TlLOr3WDP1J6vxcMyOJ2BjJ9d93w1NWLCyli7VHUzT8Z"
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