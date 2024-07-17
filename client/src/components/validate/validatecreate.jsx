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
        validErr.phoneNumber = 'Телефонът е невалиден,трябва да е число!'
    }

    if (!values.imageUrl) {
        validErr.imageUrl = 'Цената е задължителна!'
    }

    else if (!imageRegx.test(values.imageUrl)) {
        validErr.imageUrl = 'Невалиден адресс!'
    }

    if (!values.country) {
        validErr.country = 'Полето е задължително!'
    }

    else if (values.country.length < 6) {
        validErr.country = 'Country трябва де е поне 6 знака!'
    }

    if (!values.city) {
        validErr.city = 'Полето за Град е задължително!'
    }

    else if (values.city.length < 6) {
        validErr.city = 'Полето трябва да е поне 6 знака!'
    }

    if (!values.street) {
        validErr.street = 'Полето за Улица е задължително!'
    }

    else if (values.street.length < 6) {
        validErr.street = 'City трябва да е поне 6 знака!'
    }

    if (!values.streetNumber) {
        validErr.streetNumber = 'Полето за номер на улица е задължително!'
    }
    return validErr;
}

export default validatecreate