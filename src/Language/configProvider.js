import { Platform, Alert, Linking } from "react-native";

// import { msgProvider, localStorage, consolepro, Lang_chg, msgTitle } from './utilslib/Utils'
import { Lang_chg } from "./Language_provider";
 

global.player_id_me1 = '123456';

//--------------------------- Config Provider Start -----------------------
class configProvider {

	
	maplanguage = 'en';
	language =0;
	

	// languagecheck = async()=>{
	// 	let languagetype = await  localStorage.getItemString('languagecode');
	// 	language = Number(languagetype)
	// }

	
};
//--------------------------- Config Provider End -----------------------

export const config = new configProvider();

