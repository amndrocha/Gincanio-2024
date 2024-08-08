import CryptoJS from "react-native-crypto-js";

export function guardaLocal(label, value){
	const chave = "socorro"; 
	
	let encriptado = CryptoJS.AES.encrypt(JSON.stringify(value), chave);
	localStorage.setItem(label, encriptado); 

}
	
export function recuperaLocal(label){
		const chave = "socorro"; 
	
		let recuperado = localStorage.getItem(label)
		if(!recuperado) return false;
		
		let decriptado = CryptoJS.AES.decrypt(recuperado, chave);
		
		let recodificado = decriptado.toString(CryptoJS.enc.Utf8);
		
		let interpretado = JSON.parse(recodificado);
		
		return interpretado;
}