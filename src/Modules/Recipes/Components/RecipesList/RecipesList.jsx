import Header from "../../../Shared/Components/Header/Header";
import reciImg from "../../../../assets/Images/eating a variety of foods-amico.png";
import TableDetails from "../../../Shared/Components/TableDetails/TableDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URLs, authorization, BASE_URL_Image } from "../../../../CONSTANT/URLs";
import photo from "../../../../assets/Images/Group 48102290.png"
import NoData from "../../../Shared/Components/NoData/NoData";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteMessage from "../../../Shared/Components/DeleteMessage/DeleteMessage";
import { toast, Bounce } from "react-toastify";
import LoadingSpinner from "../../../Shared/Components/LoadingSpinner/LoadingSpinner";

export default function RecipesList() {




  const [allRecipes, setAllRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recipeId, setRecipeId] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setRecipeId(id)
    setShow(true);
  }


  let deleteRecipe = async () => {
    try {
      setIsLoading(true)
      let response = await axios.delete(API_URLs.delete_recipe(recipeId), authorization)
      console.log(response);
      setIsLoading(false)
      toast.success(`Recipe deleted successfully`, {
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
      getRecipes();
    } catch (error) {
      setIsLoading(false)
      console.log(error);
    }
  }


  const getRecipes = async function () {
    try {
      let data = await axios.get(API_URLs.get_Recipes, authorization);
      console.log(data.data.data);
      setAllRecipes(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(function () {
    getRecipes();
  }, []);


  return (
    <>



      <Modal show={show} onHide={handleClose}>

        <DeleteMessage thing={"recipe"}/>

      <Modal.Footer>
        { isLoading ? <Button variant="danger"> <LoadingSpinner/> </Button>:<Button variant="danger" onClick={deleteRecipe}> Delete this recipe </Button> }
      </Modal.Footer>

      </Modal>



      <Header src={reciImg} head={"Recipes Items"}
        para={"You can now add your items that any user can order it from the Application and you can edit"}/>

      <TableDetails heading={`Recipe Table Details`} para={`You can check all details`} btn={`Add New Item`}/>

      <div className="table-container p-3">
        {allRecipes.length > 0 ? <table className="table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Description</th>
              <th>Tag</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
          {allRecipes.map((recipe) => {
            return (
              <tr key={recipe.id}>
                <td>{recipe.name}</td>
                <td>{recipe.imagePath ? <img className="rec-img" src={`${BASE_URL_Image}/${recipe.imagePath}`} alt="" /> :  <img className="rec-img" src={photo} alt="" />  }</td>
                <td>{recipe.price}</td>
                <td>{recipe.description}</td>
                <td>{recipe.tag.name}</td>
                <td>
                  <i className="fa fa-edit text-warning mx-3"></i>
                  <Button variant="transparent" onClick={ () => handleShow(recipe.id)}><i className="fa fa-trash text-danger"></i></Button>
                </td>
              </tr>
            );
          })}
        </tbody>

        </table> : <NoData/>}
      </div>
    </>
  );
}
