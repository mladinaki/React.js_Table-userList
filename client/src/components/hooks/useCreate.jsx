import { useEffect, useState } from "react"


const useCreate = ( valudate, submitHendler) => {
    const [values, setValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        imageUrl: '',
        country: '',
        city: '',
        street: '',
        streetNumber: ''
    })

    const [err, setError] = useState({})
    const [isCorrect, setCorect] = useState(false)


    const onChange = (e) => {
        const { name, value } = e.target;
        setValue({ ...values, [name]: value })
    }

    const onCreate = (e) => {
        e.preventDefault();

        if (submitHendler) {
            setError(valudate(values));
            setCorect(true);
        }
    }

    useEffect(() => {
        if (Object.entries(err).length === 0 && isCorrect) {
            submitHendler(values)
        }
    }, [err])

    return {
        onCreate,
        values,
        err,
        onChange,
    }
}
export default useCreate
