import { useEffect, useState } from 'react';
import './Account.css';

function Account() {
    const [recover, setRecover] = useState(false);
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')) || false);
    const [attempts, setAttempts] = useState(0);
    const [loginMessage, setLoginMessage] = useState('');
    const currentPass = localStorage.getItem('pass') || '1946';
    const [pass, setPass] = useState('');
    const initialCountries = [
        {
            name: 'brasil',
            pass: 'carimbo',
            position: [ -2.7562580015438476 , -48.17132509212502 ],
            marker: 'locked-point',
            id: '0',
        },
        {
            name: 'argentina',
            pass: 'catarina',
            position: [ -34.88204066721371 , -58.53371685995923 ],
            marker: 'locked-point',
        },
        {
            name: 'estados unidos',
            pass: 'mae jemison',
            position: [ 33.71432359567805 , -86.95083968378019 ],
            marker: 'locked-point',
        },
        {
            name: 'polonia',
            pass: 'marie curie',
            position: [ 52.226935156019415 , 21.00532683694275 ],
            marker: 'locked-point',
        },
        {
            name: 'turquia',
            pass: 'helio',
            position: [ 41.00823543738099 , 28.964718023163034 ],
            marker: 'locked-point',
        },
        {
            name: 'mocambique',
            pass: 'janaina',
            position: [ -25.96396503793443 , 32.57084229018247 ],
            marker: 'locked-point',
        },
        {
            name: 'arabia saudita',
            pass: 'sadalsuud',
            position: [ 21.41860157679805 , 39.83525706418852 ],
            marker: 'locked-point',
        },
        {
            name: 'india',
            pass: 'tamil',
            position: [ 21.16301794100615 , 79.60419371933031 ],
            marker: 'locked-point',
        },
        {
            name: 'indonesia',
            pass: 'pustaha',
            position: [ -0.396793751120472 , 101.92963933255506 ],
            marker: 'locked-point',
        },
        {
            name: 'turcomenistao',
            pass: 'darvaza',
            position: [ 39.4008965162013 , 58.422772177048984 ],
            marker: 'locked-point',
        },  
        {
            name: '!#@#$%TREDSS$S$#@_1',
            pass: '!#@#$%TREDSS$S$#@_1',
            position: [ 26.632641512594077 , 1.4546132987476403 ],
            marker: 'locked-point',
        },  
        {
            name: '!#@#$%TREDSS$S$#@_2',
            pass: '!#@#$%TREDSS$S$#@_2',
            position: [ 26.632641512594077 , 18.33524785782504 ],
            marker: 'locked-point',
        },  
        {
            name: '!#@#$%TREDSS$S$#@_3',
            pass: '!#@#$%TREDSS$S$#@_3',
            position: [ 19.189733290810548 , 12.356689784818478 ],
            marker: 'locked-point',
        },  
        {
            name: '!#@#$%TREDSS$S$#@_4',
            pass: '!#@#$%TREDSS$S$#@_4',
            position: [ 19.521513392617045 , -7.689063754085944 ],
            marker: 'locked-point',
        },  
        {
            name: '!#@#$%TREDSS$S$#@_5',
            pass: '!#@#$%TREDSS$S$#@_5',
            position: [ 19.189733290810548 , 12.356689784818478 ],
            marker: 'locked-point',
        },    
        {
            name: '!#@#$%TREDSS$S$#@_6',
            pass: '!#@#$%TREDSS$S$#@_6',
            position: [ 8.624792027101648 , 7.433171371754242 ],
            marker: 'locked-point',
        },  
        {
            name: '!#@#$%TREDSS$S$#@_7',
            pass: '!#@#$%TREDSS$S$#@_7',
            position: [ 16.174768203912432 , 19.390287517767366 ],
            marker: 'locked-point',
        },  
        {
            name: '!#@#$%TREDSS$S$#@_1654',
            pass: '!#@#$%TREDSS$S$#@_1654',
            position: [ 18.19041252132594 , 30.644043890485687 ],
            marker: 'locked-point',
        },  
        {
            name: '!#@#$%TREDSS$S$#@_8',
            pass: '!#@#$%TREDSS$S$#@_8',
            position: [ 0.2177953534095677 , 38.38100139672946 ],
            marker: 'locked-point',
        },  
        {
            name: '!#@#$%TREDSS$S$#@_9',
            pass: '!#@#$%TREDSS$S$#@_9',
            position: [ -0.8371436179814686 , 22.90708638424187 ],
            marker: 'locked-point',
        },  
        {
            name: '!#@#$%TREDSS$S$#@_10',
            pass: '!#@#$%TREDSS$S$#@_10',
            position: [ -13.373685481252476 , 17.280208197882715 ],
            marker: 'locked-point',
        },  
        {
            name: '!#@#$%TREDSS$S$#@_11',
            pass: '!#@#$%TREDSS$S$#@_11',
            position: [ -7.148371692450134 , 35.21588241690243 ],
            marker: 'locked-point',
        },  
        {
            name: '!#@#$%TREDSS$S$#@_12',
            pass: '!#@#$%TREDSS$S$#@_12',
            position: [ -20.434103202949927 , 15.873488651292941 ],
            marker: 'locked-point',
        },  
        {
            name: '!#@#$%TREDSS$S$#@_13',
            pass: '!#@#$%TREDSS$S$#@_13',
            position: [ 32.81676329084729 , 53.98045617411029 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_14',
            pass: '!#@#$%TREDSS$S$#@_14',
            position: [ 39.073632233551585 , -5.277604725984367 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_15',
            pass: '!#@#$%TREDSS$S$#@_15',
            position: [ 45.07024674147895 , 1.3163931486552194 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_16',
            pass: '!#@#$%TREDSS$S$#@_16',
            position: [ 49.65157390084537 , 4.3935921568203815 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_17',
            pass: '!#@#$%TREDSS$S$#@_17',
            position: [ 52.73537574775882 , -1.321206001200599 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_18',
            pass: '!#@#$%TREDSS$S$#@_18',
            position: [ 53.26444862624399 , -7.651443960854624 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_19',
            pass: '!#@#$%TREDSS$S$#@_19',
            position: [ 46.480444508038836 , 24.878945554034104 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_120',
            pass: '!#@#$%TREDSS$S$#@_120',
            position: [ 42.14287638647337 , 21.27422671589778 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_121',
            pass: '!#@#$%TREDSS$S$#@_121',
            position: [ 50.94314307711824 , 27.16486481724252 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_122',
            pass: '!#@#$%TREDSS$S$#@_122',
            position: [ 57.78669052401942 , 31.297103485349968 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_123',
            pass: '!#@#$%TREDSS$S$#@_123',
            position: [ 49.82203026417872 , 38.41862118996076 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_124',
            pass: '!#@#$%TREDSS$S$#@_124',
            position: [ -33.018983961452165 , -55.28213603578152 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_125',
            pass: '!#@#$%TREDSS$S$#@_125',
            position: [ -26.538790797880235 , -61.17226699195782 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_126',
            pass: '!#@#$%TREDSS$S$#@_126',
            position: [ -25.986920692619275 , -69.87559482272577 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_127',
            pass: '!#@#$%TREDSS$S$#@_127',
            position: [ -13.267690053568215 , -75.85363818123308 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_128',
            pass: '!#@#$%TREDSS$S$#@_128',
            position: [ -20.16703665066246 , -55.457960840443505 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_129',
            pass: '!#@#$%TREDSS$S$#@_129',
            position: [ -15.820357387752193 , -63.897551464218495 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_130',
            pass: '!#@#$%TREDSS$S$#@_130',
            position: [ -16.15840862631067 , -49.30409267727424 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_131',
            pass: '!#@#$%TREDSS$S$#@_131',
            position: [ -21.154141957210545 , -48.60079345862631 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_132',
            pass: '!#@#$%TREDSS$S$#@_132',
            position: [ -18.674674357215494 , -43.32604931876694 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_133',
            pass: '!#@#$%TREDSS$S$#@_133',
            position: [ -14.121828977494527 , -41.47988886981618 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_134',
            pass: '!#@#$%TREDSS$S$#@_134',
            position: [ -7.737747591658753 , -42.09527568613307 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_135',
            pass: '!#@#$%TREDSS$S$#@_135',
            position: [ -6.341761518228058 , -67.67778476445103 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_136',
            pass: '!#@#$%TREDSS$S$#@_136',
            position: [ 0.8541748948735257 , -72.2492296856625 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_137',
            pass: '!#@#$%TREDSS$S$#@_137',
            position: [ 6.117397112628124 , -64.51293828053541 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_138',
            pass: '!#@#$%TREDSS$S$#@_138',
            position: [ 5.94254181091021 , -75.50198857190908 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_139',
            pass: '!#@#$%TREDSS$S$#@_139',
            position: [ 13.133547639243824 , -84.90861562132497 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_140',
            pass: '!#@#$%TREDSS$S$#@_140',
            position: [ 17.03736828807726 , -97.56800155698745 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_141',
            pass: '!#@#$%TREDSS$S$#@_141',
            position: [ 25.59494707493489 , -103.62924252566651 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_142',
            pass: '!#@#$%TREDSS$S$#@_142',
            position: [ 1.5666957834710236 , -62.26954213179803 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_143',
            pass: '!#@#$%TREDSS$S$#@_143',
            position: [ -9.90022104310456 , -62.92888514928045 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_144',
            pass: '!#@#$%TREDSS$S$#@_144',
            position: [ -1.8302436713703438 , -55.08536925902233 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_145',
            pass: '!#@#$%TREDSS$S$#@_145',
            position: [ -10.181688193568593 , -54.579484692730546 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_16543',
            pass: '!#@#$%TREDSS$S$#@_16543',
            position: [ -11.71171861292591 , -49.25637988651304 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_146',
            pass: '!#@#$%TREDSS$S$#@_146',
            position: [ 32.0727383720459 , -98.96471308601407 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_147',
            pass: '!#@#$%TREDSS$S$#@_147',
            position: [ 40.821498022901366 , -93.42623173916174 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_148',
            pass: '!#@#$%TREDSS$S$#@_148',
            position: [ 38.86476845202661 , -105.99770527249326 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_149',
            pass: '!#@#$%TREDSS$S$#@_149',
            position: [ 41.28543255648675 , -119.62412763379662 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_150',
            pass: '!#@#$%TREDSS$S$#@_150',
            position: [ 48.14341759936915 , -111.3603618146836 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_151',
            pass: '!#@#$%TREDSS$S$#@_151',
            position: [ 53.52001545578233 , -126.92085702726877 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_152',
            pass: '!#@#$%TREDSS$S$#@_151',
            position: [ 57.40351109890264 , -114.61312070093022 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_153',
            pass: '!#@#$%TREDSS$S$#@_153',
            position: [ 57.78044406128804 , -98.7888882813521 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_154',
            pass: '!#@#$%TREDSS$S$#@_154',
            position: [ 65.89910875348906 , -135.09671044405076 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_155',
            pass: '!#@#$%TREDSS$S$#@_155',
            position: [ 53.51959250864753 , -88.67896201328831 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_156',
            pass: '!#@#$%TREDSS$S$#@_156',
            position: [ 65.89910875348906 , -135.09671044405076 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_157',
            pass: '!#@#$%TREDSS$S$#@_157',
            position: [ 70.2212510150219 , -108.63507734242295 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_158',
            pass: '!#@#$%TREDSS$S$#@_158',
            position: [ 68.5185706255188 , -156.9868986244672 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_159',
            pass: '!#@#$%TREDSS$S$#@_1159',
            position: [ 40.70133342711337 , 15.867306638838514 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_160',
            pass: '!#@#$%TREDSS$S$#@_160',
            position: [ 44.35901640581488 , 6.328810985926184 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_161',
            pass: '!#@#$%TREDSS$S$#@_161',
            position: [ 49.62823833723492 , 10.900255907137627 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_162',
            pass: '!#@#$%TREDSS$S$#@_162',
            position: [ 53.15481961640661 , 9.602638769186703 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_163',
            pass: '!#@#$%TREDSS$S$#@_163',
            position: [ 58.96089775920456 , 14.420029488691076 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_164',
            pass: '!#@#$%TREDSS$S$#@_164',
            position: [ 64.21685084260126 , 29.365137884959307 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_165',
            pass: '!#@#$%TREDSS$S$#@_165',
            position: [ 63.98645978875032 , 53.27731131898847 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_166',
            pass: '!#@#$%TREDSS$S$#@_166',
            position: [ 49.5646199018536 , 72.44221502714414 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_167',
            pass: '!#@#$%TREDSS$S$#@_167',
            position: [ 21.86845580392967 , 96.88186287515924 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_168',
            pass: '!#@#$%TREDSS$S$#@_168',
            position: [ 45.40908788682656 , 103.56320545231442 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_169',
            pass: '!#@#$%TREDSS$S$#@_169',
            position: [ 65.63232575205068 , 95.65108924252539 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_170987',
            pass: '!#@#$%TREDSS$S$#@_170987',
            position: [ -41.880230356858966 , -69.9232532204971 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_170',
            pass: '!#@#$%TREDSS$S$#@_170',
            position: [ 65.26705614674772 , 124.66218201175191 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_171',
            pass: '!#@#$%TREDSS$S$#@_171',
            position: [ 51.02470387198721 , 136.2666191194425 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_172',
            pass: '!#@#$%TREDSS$S$#@_172',
            position: [ 36.11511053224531 , 138.9025103308649 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_173',
            pass: '!#@#$%TREDSS$S$#@_173',
            position: [ 36.11511053224531 , 127.64972283249827 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_174',
            pass: '!#@#$%TREDSS$S$#@_174',
            position: [ -4.824159406443541 , 139.07833513552688 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_175',
            pass: '!#@#$%TREDSS$S$#@_175',
            position: [ -27.139264982603663 , 119.21013220872325 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_176',
            pass: '!#@#$%TREDSS$S$#@_176',
            position: [ -26.668874436419653 , 148.04540017328782 ],
            marker: 'locked-point',
        }, 
        {
            name: '!#@#$%TREDSS$S$#@_177',
            pass: '!#@#$%TREDSS$S$#@_177',
            position: [ -44.28226556527221 , 170.0235007560352 ],
            marker: 'locked-point',
        }, 
    ];
    const countries = initialCountries;
    const errorSound = document.getElementById('audio');
    const paths = [["argentina", "brasil", "estados unidos", "polonia", "turquia"], ["mocambique", "arabia saudita"],["indonesia", "india"]];
    const words = [
        "marmota",
        "cangalho",
        "pamonha",
        "xarope",
        "cacareco",
        "muvuca",
        "zumbido",
        "ximbica",
        "gambiarra",
        "munganga",
        "marreco",
        "cochicho",
        "cuscuz",
        "trambique",
        "pinguim",
        "chafariz",
        "lagartixa",
        "trambolho",
        "falsete",
        "fricote",
        "choramingo",
        "pinguelo",
        "mambembe",
        "pandorga",
        "acocorado",
        "capenga",
        "xerife",
        "estrovenga",
        "bochecha",
        "arapuca",
        "pernilongo",
        "ziguezague",
        "xaveco",
        "patacoada",
        "patolino",
        "esparrela",
        "patuscada",
        "tumulto",
        "embuste",
        "bagunceiro",
        "desbunde",
        "xereta",
        "esbugalhado",
        "almofadinha",
        "esguicho",
        "chilique",
        "borboleta",
        "piparote",
        "borralho",
        "zarolho",
        "espantalho",
        "espoleta",
        "xurumela",
        "pechincha"
    ];
    useEffect(() => {
        const paths = [["argentina", "brasil", "estados unidos", "polonia", "turquia"], ["mocambique", "arabia saudita"],["indonesia", "india"]];
        const words = [
            "marmota",
            "cangalho",
            "pamonha",
            "xarope",
            "cacareco",
            "muvuca",
            "zumbido",
            "ximbica",
            "gambiarra",
            "munganga",
            "marreco",
            "cochicho",
            "cuscuz",
            "trambique",
            "pinguim",
            "chafariz",
            "lagartixa",
            "trambolho",
            "falsete",
            "fricote",
            "choramingo",
            "pinguelo",
            "mambembe",
            "pandorga",
            "acocorado",
            "capenga",
            "xerife",
            "estrovenga",
            "bochecha",
            "arapuca",
            "pernilongo",
            "ziguezague",
            "xaveco",
            "patacoada",
            "patolino",
            "esparrela",
            "patuscada",
            "tumulto",
            "embuste",
            "bagunceiro",
            "desbunde",
            "xereta",
            "esbugalhado",
            "almofadinha",
            "esguicho",
            "chilique",
            "borboleta",
            "piparote",
            "borralho",
            "zarolho",
            "espantalho",
            "espoleta",
            "xurumela",
            "pechincha"
        ];

        function generatePaths(currentPath, index, allPaths) {
            if (index === currentPath.length) {
                allPaths.push(currentPath.slice()); 
                return;
            }

            for (let i = 0; i <= paths[index].length; i++) {
                currentPath[index] = i < paths[index].length ? paths[index][i] : ''; 
                generatePaths(currentPath, index + 1, allPaths); 
            }
        }
        let allPaths = [];
        let currentPath = ['', '', ''];
        let checkpoints = [];
        generatePaths(currentPath, 0, allPaths);
        for (let i = 0; i < allPaths.length; i++) {
            checkpoints.push({
                path: allPaths[i],
                password: words[i],
            });
        }
        localStorage.setItem('checkpoints', JSON.stringify(checkpoints));
    }, []);

    

    const handleRecover = () => {
        setPass('');
        setRecover(true);
    }

    const getPath = () => {        
        const checkpoints = JSON.parse(localStorage.getItem('checkpoints'));
        let path = [];
        checkpoints.forEach(checkpoint => {
            if (checkpoint.password == pass) {
                path = checkpoint.path;
            }
        })
        let last = false;
        let unlocked = [];
        paths.forEach((array, i) => {
            array.forEach((country, j) => {
                if (j == 0) {
                    last = false;
                }
                if (!last) {
                    unlocked.push(country);
                    if (path[i].includes(country)) {
                        last = true;
                    }               
                }
            })
        })
        countries.forEach(country => {
            if (unlocked.includes(country.name)) {
                country.marker = 'unlocked-point';
            }
        })
        localStorage.setItem('countries', JSON.stringify(countries));
        localStorage.setItem('pass', pass);
        location.reload();
    }

    const logIn = () => {
            setPass('');
            setLoginMessage('');
            setRecover(false);
            localStorage.setItem('auth', JSON.stringify(true));
            setAuth(true);
            return;
    }

    const handleLogin = () => {
        if (recover) {
            if (pass === '1946') {
                if (!localStorage.getItem('countries')) {
                    localStorage.setItem('countries', JSON.stringify(countries));
                }
                setLoginMessage('Agora sim! Preparando login...');
                setTimeout(function() {
                    logIn();
                }, 1500);
                return;
            } else if (pass === '1940') {
                setPass('');
                setLoginMessage('Errado. Isso foi o decreto de fundação…');
            } else if (pass === '1941') {
                setPass('');
                setLoginMessage('Aí foram as primeiras aulas das Faculdades Católicas... não da universidade!');
            } else if (pass === '1947') {
                setPass('');
                setLoginMessage('Aqui passamos a chamar Pontifícia, mas já éramos universidade antes disso.');
            } else if (pass <= '1500') {
                setPass('');
                setLoginMessage('Sério isso? Antes do descobrimento?');
            } else if (pass >= '2000' || pass < '1900') {
                setPass('');
                setLoginMessage('Século errado, tente novamente.');
            } else if (pass === '') {
                setPass('');
                setLoginMessage('Por favor, insira uma resposta.');   
            } else {
                setPass('');
                setLoginMessage('Resposta incorreta. Tente Novamente.');
            }
        } else {
            if (pass === '') {
                setLoginMessage('Por favor, insira uma senha.');              
            } else {
                if (pass === '1946' || words.includes(pass)) {
                    if (pass === '1946') {
                        if (!localStorage.getItem('countries')) {
                            localStorage.setItem('countries', JSON.stringify(countries));
                        }                   
                    } else {
                        getPath();
                    }
                    logIn();
                    return;  
                } else {
                    if (attempts < 2) {
                        setLoginMessage('Senha incorreta. Tente Novamente.')
                        setPass('');
                        setAttempts(attempts+1);
                    } else {
                        setLoginMessage('')
                        setPass('');
                        setAttempts(attempts+1);
                    }
                }
            }
        }
        errorSound.play();
    }
    

    const handleLogOff = () => {
        setPass('');
        setAuth(false);
        localStorage.clear();
        location.reload();
    }

    const handleKeyPress = (key) => {
        if (key === "Enter") {
            handleLogin();
        }
    }

    const [showPass, setShowPass] = useState(false);

    const handleViewPass = () => {
        setShowPass(!showPass);
    }


    return (
        <div className={auth ? 'account-page-auth' : 'account-page'}>
            <audio id="audio"><source src="sounds/error.mp3" type="audio/mp3"></source></audio>
            
            <div className={auth ? 'box' : 'none'}>
                <h2>SUA CONTA</h2>
                <form>
                    <div className='input-box'>
                        <input type='username' value='agente241' readOnly/>
                    </div>
                    <div className='input-box'>
                        <input type={showPass ? 'text' : 'password'} placeholder='Senha' readOnly
                        value={currentPass}/>
                        <div className='show-pass' >👁</div>
                        <div className={showPass ? 'none': 'hide-pass'}>/</div>
                        <div className='cover-icon' onClick={handleViewPass}></div>
                    </div>
                    <div className='login-message'></div>
                    <div className='login-btn' onClick={handleLogOff}>Sair</div>
                </form>
            </div>

            <div className={auth ? 'none' : 'box'}>
                    <h2>{recover ? 'RECUPERAR ACESSO' : 'ACESSO RESTRITO'}</h2>
                    <form>                        
                        <p className={recover ? 'visible' : 'none'}><b>Pergunta de segurança: </b>Em que ano foram dadas as primeiras aulas em sua universidade?</p>
                        <div className={recover ? 'none' : 'input-box'}>
                            <input type='username' placeholder='Credencial' autoComplete="username"
                            value='agente241' readOnly/>
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='Senha' onKeyUp={(e) => handleKeyPress(e.key)}
                            value={pass} onChange={(e) => setPass(e.target.value)}
                            autoComplete="current-password"/>
                        </div>
                        <div className={attempts < 3 || recover ? 'login-message' : 'none'}>{loginMessage}</div>
                        <div className={!recover && attempts >= 3 ? 'login-message' : 'none'}>
                            Precisa de ajuda? <span onClick={handleRecover} className='hyperlink'>Recuperar acesso</span>
                        </div>
                        <div className='login-btn' onClick={handleLogin}>Acessar</div>
                    </form>
            </div>

        </div>
    );
  }
  
  export default Account;