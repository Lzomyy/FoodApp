import Modal from "react-bootstrap/Modal";
import deleteImage from "../../../../assets/Images/Group 48102290.png";

export default function DeleteMessage({ thing }) {
return (
    <>


    <Modal.Header closeButton></Modal.Header>


    <Modal.Body>
        <div className="text-center">
            <img src={deleteImage} alt="" />
        </div>
        <h5 className="text-center mt-4 mb-3">Delete This {thing} ?</h5>
        <p className="text-center mb-2"> are you sure you want to delete this item ? if you are sure just click on delete it</p>
    </Modal.Body>
    </>
);
}
