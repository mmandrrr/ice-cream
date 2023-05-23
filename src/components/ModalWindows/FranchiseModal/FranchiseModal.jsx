import Form from "./Form/Form";

const FranchiseModal = ({modal,closeModal}) => {
    return(
        <div onClick={closeModal} className={modal}>
            <div className="frnch-modal modal">
                <div onClick={closeModal} className="close-btn">
                    <span className="close"></span>
                    <span className="close"></span>
                </div>
                <h2 className='modal__title'>Thank you for your interest in owning an Ice Cream shop</h2>
                <p>Due to the overwhelming volume of franchise requests we are not accepting new franchisee applications at this time. Once the application process resumes, we will contact you for further information. Please fill out the contact information below and we will reach out for additional information. We appreciate your patience.</p>
                <Form />
            </div>
        </div>
    )
}

export default FranchiseModal