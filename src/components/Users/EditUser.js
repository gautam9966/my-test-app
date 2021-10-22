import axios from "axios";
import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        email: "",
        gender: "",
        status: ""
    });

    const { name, email, gender, status } = user;

    const onInputChange = e =>{
        setUser({...user,[e.target.name]: e.target.value})
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit= async e =>{ 
        e.preventDefault();
        const token = 'cc5a0ad77e570d9c768956d17bb467b777588ea1bcd3a5929eaa3d1282a90f72'
        await axios.put(`https://gorest.co.in/public/v1/users/${id}`, user,{
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json',
            Authorization: 'Bearer ' + token
        
        }});
        history.push("/");
    }

    const loadUser = async () =>{
        const result = await axios.get(`https://gorest.co.in/public/v1/users/${id}`);
        setUser(result.data.data);
    }
    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control"  name="name" value={name} onChange={e => onInputChange(e)} />   
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control"  name="email" value={email} onChange={e => onInputChange(e)} />   
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <input type="text" className="form-control"  name="gender" value={gender} onChange={e => onInputChange(e)} />   
                    </div>
                    <div className="form-group">
                        <label htmlFor="userstatus" className="form-label">Status</label>
                        <input type="text" className="form-control"  name="status" value={status} onChange={e => onInputChange(e)} />   
                    </div>
                    {/* <div className="form-group">
                        <label for="gender" class="form-label">Gender</label>
                        <select id="inputState" class="form-select" name="gender" value={gender} onChange={e => onInputChange(e)}>
                        <option selected>Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Others</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="status" class="form-label">Status</label>
                        <select id="inputState" class="form-select" name="userstatus" value={userstatus} onChange={e => onInputChange(e)}>
                        <option selected>Select</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        </select>
                    </div> */}
                    
                    <button type="submit" className="btn btn-warning mt-2">Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;