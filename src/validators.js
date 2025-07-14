// import { Lang_chg } from "./Language/Language_provider";
// import { config } from "./Language/configProvider";
// export const regex = {
//   image: /\.(jpg|jpeg|png)$/i,
//   email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Simplified and correct email regex
//   mobile: /^[0-9]{10}$/, // 10-digit numbers only
//   otp: /^[0-9]{4,6}$/, // typical 4 to 6 digit OTPs
//   amount: /^[0-9]+(\.[0-9]{1,2})?$/, // allows optional 1-2 digit decimal
//   password: /^\S{3,}$/, // at least 3 non-whitespace characters
//   gender: /^(Male|Female|Other)$/i,
//   business: /^[a-zA-Z0-9\s&.,'-]{2,}$/, // alphanumeric & basic symbols
//   city: /^[a-zA-Z\s]{2,}$/,
//   pincode: /^[1-9][0-9]{5}$/, // Indian 6-digit pincode
//   address: /^[a-zA-Z0-9\s,.'-]{5,}$/,
//   name: /^[a-zA-Z\s]{2,}$/,
//   Aadhar:/^[2-9]{1}[0-9]{11}$/,
//   dob : /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/,

// };

// // ✅ Form Field Validators

// export const validateImage = (imagePath) => {
//   if (!imagePath || typeof imagePath !== 'string' || !imagePath.trim()) {
//     return 'Please upload a photo';
//   }

//   if (!regex.image.test(imagePath)) {
//     return 'Only JPG, JPEG, or PNG formats are allowed';
//   }

//   return '';
// };
// export const validateName = (name) => {
//   if (!name.trim()) return 'Please enter a Name';
//   if (!regex.name.test(name.trim())) return 'Please enter a valid Name';
//   return '';
// };
// export const validatedob = (dob) => {
//   if (!dob.trim()) return 'Please enter a Dob';
//   if (!regex.dob.test(dob.trim())) return 'Please enter a valid Dob';
//   return '';
// };
// export const validateAadhar = (Aadhar) => {
//   if (!Aadhar.trim()) return 'Please enter a Aadhar number';
//   if (!regex.Aadhar.test(Aadhar.trim())) return 'This Aadhar Number doesn’t exist';
//   return '';
// };

// export const validateGender = (gender) => {
//   if (!gender.trim()) return 'Please enter a Gender';
//   if (!regex.gender.test(gender.trim())) return 'Please enter a valid Gender';
//   return '';
// };

// export const validateBuisness = (business) => {
//   if (!business.trim()) return 'Please enter a Skill name';
//   if (!regex.business.test(business.trim())) return 'Please enter a valid Skills name';
//   return '';
// };

// export const validateCity = (city) => {
//   if (!city.trim()) return 'Please enter a City';
//   if (!regex.city.test(city.trim())) return 'Please enter a valid City';
//   return '';
// };

// export const validatePincode = (pincode) => {
//   if (!pincode.trim()) return 'Please enter a Pincode';
//   if (!regex.pincode.test(pincode.trim())) return 'Please enter a valid 6-digit Pincode';
//   return '';
// };

// export const validateAddress = (address) => {
//   if (!address.trim()) return 'Please enter an Address';
//   if (!regex.address.test(address.trim())) return 'Please enter a valid Address';
//   return '';
// };

// export const validateEmail = (email) => {
//   if (!email.trim()) return Lang_chg.enterEmailtxt[config.language];
//   if (!regex.email.test(email.trim())) return Lang_chg.validEmail[config.language];
//   return '';
// };

// export const validatePassword = (password) => {
//   if (!password.trim()) return Lang_chg.enterPasswordError[config.language];
//   if (!regex.password.test(password.trim()))
//     return 'Password must be at least 3 characters with no spaces';
//   return '';
// };

// export const confirmPassword = (password) => {
//   if (!password.trim()) return 'Please confirm the password';
//   if (!regex.password.test(password.trim()))
//     return 'Password must be at least 3 characters with no spaces';
//   return '';
// };

// export const Mobilenumber = (mobile) => {
//   if (!mobile.trim()) return 'Please enter a mobile number';
//   if (!regex.mobile.test(mobile.trim()))
//     return 'Please enter a valid 10-digit mobile number';
//   return '';
// };
// abishek



import { Lang_chg } from "./Language/Language_provider";
import { config } from "./Language/configProvider";
export const regex = {
  image: /\.(jpg|jpeg|png)$/i,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Simplified and correct email regex
  mobile: /^[0-9]{10}$/, // 10-digit numbers only
  otp: /^[0-9]{4,6}$/, // typical 4 to 6 digit OTPs
  amount: /^[0-9]+(\.[0-9]{1,2})?$/, // allows optional 1-2 digit decimal
  password: /^\S{3,}$/, // at least 3 non-whitespace characters
  gender: /^(Male|Female|Other)$/i,
  business: /^[a-zA-Z0-9\s&.,'-]{2,}$/, // alphanumeric & basic symbols
  city: /^[a-zA-Z\s]{2,}$/,
  pincode: /^[1-9][0-9]{5}$/, // Indian 6-digit pincode
  address: /^[a-zA-Z0-9\s,.'-]{5,}$/,
  name: /^[a-zA-Z\s]{2,}$/,
  Aadhar:/^[2-9]{1}[0-9]{11}$/,
  dob : /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/,

};

// ✅ Form Field Validators

export const validateImage = (imagePath) => {
  if (!imagePath || typeof imagePath !== 'string' || !imagePath.trim()) {
    return Lang_chg.error_uploadPhoto[config.language];
  }

  if (!regex.image.test(imagePath)) {
    return Lang_chg.error_invalidImageFormat[config.language]
  }

  return '';
};
export const validateName = (name) => {
  if (!name.trim()) return Lang_chg.error_enterName[config.language]
  if (!regex.name.test(name.trim())) return Lang_chg.error_validName[config.language]
  return '';
};
export const validatedob = (dob) => {
  if (!dob.trim()) return Lang_chg.error_enterDob[config.language]
  if (!regex.dob.test(dob.trim())) return Lang_chg.error_validDob[config.language]
  return '';
};
export const validateAadhar = (Aadhar) => {
  if (!Aadhar.trim()) return Lang_chg.error_enterAadhar[config.language]
  if (!regex.Aadhar.test(Aadhar.trim())) return Lang_chg.error_invalidAadhar[config.language]
  return '';
};

export const validateGender = (gender) => {
  if (!gender.trim()) return Lang_chg.error_enterGender[config.language]
  if (!regex.gender.test(gender.trim())) return Lang_chg.error_validGender[config.language]
  return '';
};

export const validateBuisness = (business) => {
  if (!business.trim()) return Lang_chg.error_enterSkill[config.language]
  if (!regex.business.test(business.trim())) return Lang_chg.error_validSkill[config.language]
  return '';
};

export const validateCity = (city) => {
  if (!city.trim()) return Lang_chg.error_enterCity[config.language]
  if (!regex.city.test(city.trim())) return Lang_chg.error_validCity[config.language]
  return '';
};

export const validatePincode = (pincode) => {
  if (!pincode.trim()) return Lang_chg.error_enterPincode[config.language]
  if (!regex.pincode.test(pincode.trim())) return Lang_chg.error_validPincode[config.language]
  return '';
};

export const validateAddress = (address) => {
  if (!address.trim()) return Lang_chg.error_enterAddress[config.language]
  if (!regex.address.test(address.trim())) return Lang_chg.error_validAddress[config.language]
  return '';
};

export const validateEmail = (email) => {
  if (!email.trim()) return Lang_chg.error_enterEmail[config.language];
  if (!regex.email.test(email.trim())) return Lang_chg.error_validEmail[config.language];
  return '';
};

export const validatePassword = (password) => {
  if (!password.trim()) return Lang_chg.error_enterPassword[config.language];
  if (!regex.password.test(password.trim()))
    return Lang_chg.error_validPassword[config.language]
  return '';
};

export const confirmPassword = (password) => {
  if (!password.trim()) return Lang_chg.error_confirmPassword[config.language]
  if (!regex.password.test(password.trim()))
    return Lang_chg.error_passwordMismatch[config.language]
  return '';
};

export const Mobilenumber = (mobile) => {
  if (!mobile.trim()) return Lang_chg.error_enterMobile[config.language]
  if (!regex.mobile.test(mobile.trim()))
    return Lang_chg.error_validMobile[config.language]
  return '';
};