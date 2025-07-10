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
  accountNotFound=['No account found Please Sign Up', 'कोई खाता नहीं मिला। कृपया साइन अप करें।'];
  no_account_found = ['No account found  Please Sign Up.', 'कोई खाता नहीं मिला। कृपया साइन अप करें।'];
email_mismatch = ['Email does not match.', 'ईमेल मेल नहीं खाता।'];
incorrect_password = ['Incorrect password.', 'गलत पासवर्ड।'];
// forgot password screen
back_to_login = ['Back to login', 'लॉगिन पर वापस जाएं'];
Send_ =['Send',"भेजना"]
SomethingwentwrongPleasetryagain =['Something went wrong. Please try again.',"कुछ गड़बड़ हुई है। कृपया दोबारा प्रयास करें।"]
//  verifypassword screen
EnterVarificationCode =['Enter Varification Code','सत्यापन कोड दर्ज करें'];
Ifyoudidntcode =['If you didn\'t receive a code','यदि आपको कोड प्राप्त नहीं हुआ है']
Resend =['Resend','पुन: भेजें']
enter_valid_otp = ['Please enter a valid 4-digit OTP', 'कृपया एक मान्य 4-अंकीय ओटीपी दर्ज करें'];
// mobile login screen
Mobilenumber= ['Mobile Number','मोबाइल नंबर']
SignInSignUp= ['Sign In & Sign Up','प्रवेश या साइन अप']
Pleaseenteravalidnumber= ['Please enter a valid number','कृपया सही अंक दर्ज करें']

AnOTPwillbe = ['An OTP will be sent on given phone number for verification. Standardmessage and data rates apply.','सत्यापन के लिए दिए गए फ़ोन नंबर पर एक ओटीपी भेजा जाएगा। मानकसंदेश और डेटा दरें लागू होंगी।']
  getText(key) {
    if (this[key]) {
      return this[key][config.language]; // 0 = English, 1 = Hindi
    }
    return key;
  }
}

export const Lang_chg = new Language_provider();