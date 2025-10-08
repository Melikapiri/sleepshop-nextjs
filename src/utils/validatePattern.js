const validateEmail = (email) => {
    const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
    return pattern.test(email);
};

const validatePhone = (phone) => {
    const pattern = /^09\d{9}$/;
    return pattern.test(phone);
};

const validatePassword = (password) => {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return pattern.test(password);
};


export {
    validateEmail,
    validatePhone,
    validatePassword,
}