import Header from "../../../Shared/Components/Header/Header";
import categImg from "../../../../assets/Images/eating a variety of foods-amico.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URLs, authorization } from "../../../../CONSTANT/URLs";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from "../../../Shared/Components/LoadingSpinner/LoadingSpinner";
import DeleteMessage from "../../../Shared/Components/DeleteMessage/DeleteMessage";
import NoData from "../../../Shared/Components/NoData/NoData";
import TableDetails from "../../../Shared/Components/TableDetails/TableDetails";


export default function CategoriesList() {

  const [allCategories, setAllCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false);
  const [categoryId, setCategoryId] = useState(null);

  const getCategory = async function () {
    try {
      let data = await axios.get(API_URLs.get_categories, authorization);
      console.log(data.data.data);
      setAllCategories(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(function () {
    getCategory();
  }, []);



  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setCategoryId(id)
    setShow(true);
  }


  let deleteCategory = async () => {
    try {
      setIsLoading(true)
      let response = await axios.delete(API_URLs.delete_categories(categoryId), authorization)
      console.log(response);
      setIsLoading(false)
      toast.success(`Item deleted successfully`, {
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
      getCategory();
    } catch (error) {
      setIsLoading(false)
      console.log(error);
    }
  }

  return (
    <>
      <Header
        src={categImg}
        head={"Categories Item"}
        para={
          "You can now add your items that any user can order it from the Application and you can edit"
        }
      />

      <Modal show={show} onHide={handleClose}>

        <DeleteMessage thing={"category"}/>

        <Modal.Footer>
          { isLoading ? <Button variant="danger"> <LoadingSpinner/> </Button>:<Button variant="danger" onClick={deleteCategory}> Delete this item </Button> }
        </Modal.Footer>

      </Modal>


      <TableDetails heading={`Categories Table Details`} para={`You can check all details`} btn={`Add New Category`}/>
      <div className="table-container p-3">
        {allCategories.length > 0 ? <table className="table text-center">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>creationDate</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {allCategories.map((category) => {
            return (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.creationDate}</td>
                <td>
                  <i className="fa fa-edit text-warning mx-3"></i>
                  <Button variant="transparent" onClick={ () => handleShow(category.id)}>
                    <i className="fa fa-trash text-danger"></i>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
        </table> : <NoData/> }
      </div>
    </>
  );
}
