import Header from '../../../Shared/Components/Header/Header';
import userImg from "../../../../assets/Images/eating a variety of foods-amico.png"
import TableDetails from '../../../Shared/Components/TableDetails/TableDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URLs, authorization, BASE_URL_Image } from '../../../../CONSTANT/URLs';
import photo from "../../../../assets/Images/Group 48102290.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoadingSpinner from '../../../Shared/Components/LoadingSpinner/LoadingSpinner';
import DeleteMessage from '../../../Shared/Components/DeleteMessage/DeleteMessage';
import { toast, Bounce } from 'react-toastify';


export default function Users() {


  const [allUsers, setAllUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setUserId(id)
    setShow(true);
  }


  let deleteUser = async () => {
    try {
      setIsLoading(true)
      let response = await axios.delete(API_URLs.delete_user(userId), authorization)
      console.log(response);
      setIsLoading(false)
      toast.success(`User deleted successfully`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        style: {
          textAlign: "center",
        },
        });
      setShow(false);
      getUsers();
    } catch (error) {
      setIsLoading(false)
      console.log(error);
    }
  }




  const getUsers = async function () {
    try {
      let data = await axios.get(API_URLs.get_users, authorization);
      console.log(data.data.data);
      setAllUsers(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(function () {
    getUsers();
  }, []);




  return <>




<Modal show={show} onHide={handleClose}>

<DeleteMessage thing={"user"}/>

<Modal.Footer>
{ isLoading ? <Button variant="danger"> <LoadingSpinner/> </Button>:<Button variant="danger" onClick={deleteUser}> Delete this user </Button> }
</Modal.Footer>

</Modal>




  <Header src={userImg} head={"Users Lists"} para={"You can now add your items that any user can order it from the Application and you can edit"}/>

  <TableDetails heading={`Users Table Details`} para={`You can check all details`}/>


  <div className="table-container p-3">

<table className="table">

    <thead>
      <tr>
        <th>id</th>
        <th>userName</th>
        <th>image</th>
        <th>email</th>
        <th>country</th>
        <th>phoneNumber</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
          {allUsers.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.userName }</td>
                <td>{user.imagePath ? <img className="rec-img" src={`${BASE_URL_Image}/${user.imagePath}`} alt="" /> :  <img className="rec-img" src={photo} alt="" />  }</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.phoneNumber}</td>
                <td>
                  <i className="fa fa-edit text-warning mx-3"></i>
                  <Button variant="transparent" onClick={ () => handleShow(user.id)}><i className="fa fa-trash text-danger"></i></Button>
                </td>
              </tr>
            );
          })}
        </tbody>





</table>
  </div>
  </>
}
