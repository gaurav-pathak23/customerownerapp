import { config } from "./configProvider";

class Language_provider {
  Worker = ['Worker','कार्यकर्ता'];
  EmailAddress = ['Email Address','मेल पता'];
  ChooseLanguage = ['Choose Your Language', 'अपनी भाषा चुनें'];
  SelectLanguage = ['Select Language', 'भाषा चुनें'];
  Password = ['Password', 'पासवर्ड'];
  Login = ['Login', 'लॉग इन'];
 Workertxt = ['Worker','कामगार'];
 Ownertxt =['Owner','मालिक'];
 Passwordtxt = ['Password','पासवर्ड'];
 EnterEmailtxt = ['Enter Email Address', 'ईमेल पता दर्ज करें'];
EnterPasswordtxt = ['Enter Password', 'पासवर्ड दर्ज करें'];
 continueemaitxt = ['Continue with Email','ईमेल जारी रखें']
 continueMobiletxt = ['Continue with Mobile', 'मोबाइल से जारी रखें'];
  forgotPassword = ['Forgot Password?', 'पासवर्ड भूल गए?'];
  dontHaveAccount = ['If you do not have account?', 'अगर आपका खाता नहीं है?'];
  signup = ['Sign Up', 'साइन अप करें'];
  signin = ['Sign In', 'साइन इन करें'];
  enterDetailsBelow = ['Enter your details below & Login', 'अपना विवरण नीचे दर्ज करें और लॉगिन करें'];
  enterPasswordError= ['Please enter a Password', 'कृपया पासवर्ड दर्ज करें'];
  validPasswordError= ['Password must be at least 3 characters with no spaces', 'पासवर्ड कम से कम 3 अक्षरों का होना चाहिए'];
  enterEmailtxt= ['Please enter an Email', 'कृपया ईमेल दर्ज करें'];
  validEmail= ['Please enter a valid Email', 'कृपया मान्य ईमेल दर्ज करें'];
  wrongPassword= ['Incorrect password.', 'गलत पासवर्ड।'];
  emailMismatch= ['Email does not match.', 'ईमेल मेल नहीं खाता।'];
  accountNotFound=['No account found. Please Sign Up.', 'कोई खाता नहीं मिला। कृपया साइन अप करें।'];
  getText(key) {
    if (this[key]) {
      return this[key][config.language]; // 0 = English, 1 = Hindi
    }
    return key;
  }
}

export const Lang_chg = new Language_provider();