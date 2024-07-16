import useCreate from "./hooks/useCreate";
import validate from "./validate/validatecreate";

const CreateUserModal = ({
    onClose,
    onSubCreate,
    onHadlerCreated

}) => {

    const { onChange, values, err, onCreate } = useCreate(
        validate,
        onSubCreate,
    );

    return (
        <div className="overlay" >
            <div className="backdrop" onClick={onClose}></div>
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>Add User.....</h2>
                        <button className="btn close" onClick={onClose}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={onCreate}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="firstName"
                                        name="firstName"
                                        value={values.firstName}
                                        onChange={onChange}
                                        type="text" />
                                </div>
                                {err.firstName && <span className="createMSG">{err.firstName}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="lastName"
                                        name="lastName"
                                        value={values.lastName}
                                        onChange={onChange}
                                        type="text" />
                                </div>
                                {err.lastName && <span className="createMSG">{err.lastName}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-envelope"></i></span>
                                    <input id="email"
                                        value={values.email}
                                        onChange={onChange}
                                        name="email"
                                        type="text" />
                                </div>
                                {err.email && <span className="createMSG">{err.email}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-phone"></i></span>
                                    <input id="phoneNumber"
                                        name="phoneNumber"
                                        value={values.phoneNumber}
                                        onChange={onChange}
                                        type="text" />
                                </div>
                                {err.phoneNumber && <span className="createMSG">{err.phoneNumber}</span>}
                            </div>
                        </div>

                        <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-image"></i></span>
                                <input id="imageUrl"
                                    value={values.imageUrl}
                                    onChange={onChange}
                                    name="imageUrl"
                                    type="text" />
                            </div>
                            {err.imageUrl && <span className="createMSG">{err.imageUrl}</span>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="country"
                                        name="country"
                                        onChange={onChange}
                                        value={values.country}
                                        type="text" />
                                </div>
                                {err.country && <span className="createMSG">{err.country}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-city"></i></span>
                                    <input id="city"
                                        name="city"
                                        onChange={onChange}
                                        value={values.city}
                                        type="text" />
                                </div>
                                {err.city && <span className="createMSG">{err.city}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="street"
                                        name="street"
                                        onChange={onChange}
                                        value={values.street}
                                        type="text" />
                                </div>
                                {err.street && <span className="createMSG">{err.street}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="streetNumber">Street number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-house-chimney"></i></span>
                                    <input id="streetNumber"
                                        name="streetNumber"
                                        onChange={onChange}
                                        value={values.streetNumber}
                                        type="text" />

                                </div>
                                {err.streetNumber && <span className="createMSG">{err.streetNumber}</span>}
                            </div>
                            <div id="form-actions">
                                <button id="action-save" className="btn" type="submit" onClick={onHadlerCreated} >Save</button>
                                <button id="action-cancel" className="btn" type="button" onClick={onClose}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateUserModal;