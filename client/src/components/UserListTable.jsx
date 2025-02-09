import { useEffect, useState } from "react";

import * as userService from "../services/userService";

import UserListItem from './UserListItem';
import CreateUserModal from "./CreateUserModal";
import UserInfoModal from "./UserInfoModal";
import UserDeleteModal from "./UserDeleteModal";
import Spinner from "./Spinner";
import EditModal from "./EditModal";
import Search from "./Search";

const UserListTable = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const [selectEdit, setEdit] = useState(false);
    const [selectSearch, setSelectSearch] = useState();
    const [sorField, setSortField] = useState('ASD')

    useEffect(() => {
        setIsLoading(true);

        userService.getAll()
            .then(result => setUsers(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));

        userService.getAll()
            .then(res => setSelectSearch(res))
    }, []);

    useEffect(() => {
        setIsLoading(true);
        userService.getAll()
            .then(res => setSelectSearch(res))
    }, []);


    const createUserClickHandler = () => {
        setShowCreate(true);
    };

    const hideCreateUserModal = () => {
        setShowCreate(false)
    };

    const userInfoClickHandler = async (userId) => {
        setSelectedUser(userId);
        setShowInfo(true);
    };

    const deleteUserClickHandler = (userId) => {
        setSelectedUser(userId);
        setShowDelete(true);
    }

    const deleteUserHandler = async () => {
        // Remove user from server
        await userService.remove(selectedUser);

        // Remove user from state
        setUsers(state => state.filter(user => user._id !== selectedUser));

        // Close the delete modal
        setShowDelete(false);
    };

    const onEditId = async (userId) => {
        const r = await userService.getOne(userId);
        setEdit(r)
    }

    const subEdit = (e, userId) => {
        onSubmitEdit(e, userId);
    }

    const onSubmitEdit = async (e, userId) => {
        e.preventDefault();

        const dataForm = Object.fromEntries(new FormData(e.target));
        const updateEdits = await userService.edit(userId, dataForm);

        setUsers(state => state.map(x => x._id === userId ? updateEdits : x))
        setEdit(false)
    }

    // All search item

    const onSearch = (e, value) => {
        const res = selectSearch.filter((x) => x['firstName'].toLowerCase().includes(e.target.value))
        setUsers(res)
    }

    const changeSortField = (field) => {
        if (sorField === 'ASD') {

            const sorted = [...users].sort((a, b) => b[field].toLowerCase() > a[field].toLowerCase() ? 1 : -1)
            setUsers(sorted);
            setSortField('ASD')
        }
    }


    const onSubCreate = async (values) => {
        const result = await userService.create(values);
        setUsers(state => [...state, result])
        setShowCreate(false)
    }

    //All search item end
    return (
        <div className="table-wrapper">
            {showCreate && (
                <CreateUserModal
                    onClose={hideCreateUserModal}
                    onSubCreate={onSubCreate}
                />
            )}

            {showInfo && (
                <UserInfoModal
                    onClose={() => setShowInfo(false)}
                    userId={selectedUser}
                />
            )}

            {showDelete && (
                <UserDeleteModal
                    onClose={() => setShowDelete(false)}
                    onDelete={deleteUserHandler}
                />
            )}

            {selectEdit && (
                <EditModal
                    user={selectEdit}
                    onClose={() => setEdit(false)}
                    onEditId={onEditId}
                    onSubmitEdit={subEdit} />
            )}

            {selectSearch && (
                <Search
                    users={users}
                    onSearch={onSearch}
                    changeSortField={changeSortField}
                />
            )}

            {isLoading && <Spinner />}

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <UserListItem
                                users={users}
                                key={user._id}
                                userId={user._id}
                                createdAt={user.createdAt}
                                email={user.email}
                                firstName={user.firstName}
                                imageUrl={user.imageUrl}
                                lastName={user.lastName}
                                phoneNumber={user.phoneNumber}
                                onInfoClick={userInfoClickHandler}
                                onDeleteClick={deleteUserClickHandler}
                                onEditId={onEditId}
                                onSubmitEdit={subEdit}

                            />
                        )
                    }
                    )}
                    {users.length === 0 && <h2>Empti list!</h2>}
                </tbody>
            </table>

            <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>
        </div>
    );
};

export default UserListTable;