

const validatecreate = (values) => {
    let validErr = {}

    const emailRgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    const imageRegx = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi

    if (values.firstName === '') {
        validErr.firstName = 'Името е задължително!'
    }

    if (values.lastName === '') {
        validErr.lastName = 'Името е задължително!'
    }

    if (!values.email) {
        validErr.email = 'Имейла е задължителен !';

    } else if (!emailRgx.test(values.email)) {
        validErr.email = 'Имейл адресът е невалиден !';
    }

    if (!values.phoneNumber) {
        validErr.phoneNumber = 'Телефонният номер е задългителен'
    }

    else if (!regExp.test(values.phoneNumber)) {
        validErr.phoneNumber = 'Телефонът е невалиден'
    }

    if (!values.imageUrl) {
        validErr.imageUrl = 'Цената е задължителна!'
    }
    else if (!imageRegx.test(values.imageUrl)) {
        validErr.imageUrl = 'Невалиден адресс!!!'
    }

    if (!values.country) {
        validErr.country = 'Телефонният номер е задългителен'
    }

    if (!values.city) {
        validErr.city = 'Телефонният номер е задългителен'
    }

    else if (values.city.length < 6) {
        validErr.city = 'City трябва да е поне 6 знака!'
    }

    if (!values.street) {
        validErr.street = 'Телефонният номер е задългителен'
    }

    else if (values.street.length < 6) {
        validErr.street = 'City трябва да е поне 6 знака!'
    }

    if (!values.streetNumber) {
        validErr.streetNumber = 'Телефонният номер е задългителен'
    }


    return validErr;
}
export default validatecreate