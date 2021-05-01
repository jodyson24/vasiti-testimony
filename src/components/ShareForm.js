import React, { useState } from 'react'

const initialState = {
    img: "",
    firstname: "",
    lastname: "",
    text: "",
    type: ""
}
export default function ShareForm({ setShow, data, setData }) {
    const [testimony, setTestimony] = useState(initialState)
    const { img, firstname, lastname, text, type } = testimony

    const handleChange = e => {
        const { name, value } = e.target
        setTestimony({ ...testimony, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setData({data: [...data, testimony]})
    }
    return (
        <div className="share_form_bg">
            <div className="form_body py-5 px-4">
                <div className="d-flex justify-content-end mb-4">
                    <button className="btn_close"
                        onClick={() => setShow(false)} >
                        <p>X</p>
                    </button>
                </div>

                <h3>Share your amazing story!</h3>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="img">Upload your Picture</label>
                        <div className="file_up">
                            <span className="d-flex justify-content-between">
                                <p>choose an image</p>
                                <i className="fa fa-paperclip" />
                                <input type="file" name="img" id="img" value={img} onChange={handleChange} />
                            </span>
                        </div>
                    </div>

                    <div className="d-flex my-3">
                        <div className="mr-3">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="firstname" id="firstname" value={firstname} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="lastname" id="lastname" value={lastname} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="my-3">
                        <label htmlFor="story">Share your story</label>
                        <textarea value={text} name="text" id="text" onChange={handleChange} className="text-box" />
                    </div>

                    <div className="my-3">
                        <small className="mr-2">What did you interact with Vasiti as?</small>
                        <label htmlFor="student">Student</label>
                        <input type="radio" id="student" name="type" value={type} className="mr-2" />
                        <label htmlFor="vendor">Vendor</label>
                        <input type="radio" id="vendor" name="type" value={type} />
                    </div>

                    <div className="d-flex justify-content-end">
                        <button type="submit" className="share_btn">
                            Share your story
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
