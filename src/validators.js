
// export const regex = {
//   email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}(\.[0-9]{1,3}){3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//   mobile: /^[0-9_]+$/,
//   otp: /^[0-9_]+$/,
//   amount: /^[0-9_.]+$/,
//   password: /^\S{3,}$/, // no space, min 3 chars
//   gender : /^(Male|Female|Other)$/i,
//   business:/^[a-zA-Z0-9\s&.,'-]{2,}$/,
//  city:/^[a-zA-Z\s]{2,}$/,
//  pincode:/^[1-9][0-9]{5}$/,
//  address: /^[a-zA-Z0-9\s,.'-]{5,}$/,
//  name : /^[a-zA-Z\s]{2,}$/,

// };

// // ✅ Form Field Validators
// export const validateName = (name) => {
//   if (!name.trim()) return 'Please enter a Name';
//   if (!regex.name.test(name.trim())) return 'Please enter a valid Name';
//   return '';
// };
// export const validateGender = (gender) => {
//   if (!gender.trim()) return 'Please enter an Gender';
//   if (!regex.gender.test(gender.trim())) return 'Please enter  a Gender';
//   return '';
// };
// export const validateBuisness = (business) => {
//   if (!business.trim()) return 'Please enter an Buisness';
//   if (!regex.business.test(business.trim())) return 'Please enter a Buisness';
//   return '';
// };
// export const validateCity = (city) => {
//   if (!city.trim()) return 'Please enter an City';
//   if (!regex.city.test(city.trim())) return 'Please enter a City';
//   return '';
// };
// export const validatePincode = (pincode) => {
//   if (!pincode.trim()) return 'Please enter an Pincode';
//   if (!regex.pincode.test(pincode.trim())) return 'Please enter a Pincode';
//   return '';
// };
// export const validateAddress = (address) => {
//   if (!address.trim()) return 'Please enter an Address';
//   if (!regex.address.test(address.trim())) return 'Please enter a Address';
//   return '';
// };

// export const validateEmail = (email) => {
//   if (!email.trim()) return 'Please enter an Email';
//   if (!regex.email.test(email.trim())) return 'Please enter a valid Email';
//   return '';
// };

// export const validatePassword = (password) => {
//   if (!password.trim()) return 'Please enter a Password';
//   if (!regex.password.test(password.trim()))
//     return 'Password must be at least 3 characters, no spaces';
//   return '';
// };
// export const confirmPassword = (password) => {
//   if (!password.trim()) return 'Please enter a password';
//   if (!regex.password.test(password.trim()))
//     return 'Password must be at least 3 characters, no spaces';
//   return '';
// };
// export const Mobilenumber = (mobile) => {
//   if (!mobile.trim()) return 'Please enter a mobile number';
//   if (!regex.mobile.test(mobile.trim()))
//     return 'Enter a valid mobile number';
//   return '';
// };



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
};

// ✅ Form Field Validators

export const validateImage = (imagePath) => {
  if (!imagePath || typeof imagePath !== 'string' || !imagePath.trim()) {
    return 'Please upload a photo';
  }

  if (!regex.image.test(imagePath)) {
    return 'Only JPG, JPEG, or PNG formats are allowed';
  }

  return '';
};
export const validateName = (name) => {
  if (!name.trim()) return 'Please enter a Name';
  if (!regex.name.test(name.trim())) return 'Please enter a valid Name';
  return '';
};

export const validateGender = (gender) => {
  if (!gender.trim()) return 'Please enter a Gender';
  if (!regex.gender.test(gender.trim())) return 'Please enter a valid Gender';
  return '';
};

export const validateBuisness = (business) => {
  if (!business.trim()) return 'Please enter a Business name';
  if (!regex.business.test(business.trim())) return 'Please enter a valid Business name';
  return '';
};

export const validateCity = (city) => {
  if (!city.trim()) return 'Please enter a City';
  if (!regex.city.test(city.trim())) return 'Please enter a valid City';
  return '';
};

export const validatePincode = (pincode) => {
  if (!pincode.trim()) return 'Please enter a Pincode';
  if (!regex.pincode.test(pincode.trim())) return 'Please enter a valid 6-digit Pincode';
  return '';
};

export const validateAddress = (address) => {
  if (!address.trim()) return 'Please enter an Address';
  if (!regex.address.test(address.trim())) return 'Please enter a valid Address';
  return '';
};

export const validateEmail = (email) => {
  if (!email.trim()) return 'Please enter an Email';
  if (!regex.email.test(email.trim())) return 'Please enter a valid Email';
  return '';
};

export const validatePassword = (password) => {
  if (!password.trim()) return 'Please enter a Password';
  if (!regex.password.test(password.trim()))
    return 'Password must be at least 3 characters with no spaces';
  return '';
};

export const confirmPassword = (password) => {
  if (!password.trim()) return 'Please confirm the password';
  if (!regex.password.test(password.trim()))
    return 'Password must be at least 3 characters with no spaces';
  return '';
};

export const Mobilenumber = (mobile) => {
  if (!mobile.trim()) return 'Please enter a mobile number';
  if (!regex.mobile.test(mobile.trim()))
    return 'Please enter a valid 10-digit mobile number';
  return '';
};
