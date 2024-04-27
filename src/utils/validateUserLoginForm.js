export const validateUserLoginForm = (values) => {
    const errors = {};
  
    // Check if username exists
    if (!values.username) {
      errors.username = 'Username is required';
    }
  
    // Check if password exists
    if (!values.password) {
      errors.password = 'Password is required';
    }
  
    // Check username length
    if (values.username && (values.username.length < 6 || values.username.length > 15)) {
      errors.username = 'Username must be between 6 and 15 characters';
    }
  
    // Check password length
    if (values.password && values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
  
    return errors;
  };
  

  