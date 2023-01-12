import React from 'react'
import { useState, useEffect } from 'react'
import InterestBubble from '../components/InterestBubble'

const DetailsForm = () => {
    // const [deleteInterest, setDeleteInterest] = useState(false);
    const [profileImg, setProfileImg] = useState(false);
    const [imgURL, setImgURL] = useState(true)
    // useEffect(() => {
    //     if (profileImg) {
    //         setImgURL(imgURL.createObjectURL(profileImg));
    //     }
    // }, [profileImg]);

    const [formData, setFormData] = useState({
        user_id: "",
        first_name: "",
        last_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        gender_identity: "man",
        gender_interest: "woman",
        url: "",
        interets_input: "",
        about: "",
        matches: [],
        interests: [],

    })
    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        console.log(formData)
    }



    const handleInterests = (e) => {
        if (e.key === " ") {
            setFormData((prevState) => ({
                ...prevState,
                interets_input: "",
                interests: [...prevState.interests,
                e.target.value.substring(0, 1) === ' ' ?
                    e.target.value.substring(1) : e.target.value
                ],

            }))
            // console.log("space detected", e.target.value.length)
            // console.log(formData.interests)
        }
    }


    // useEffect(() => {

    //     document.getElementById("interets_input").addEventListener('keydown', handleInterests)

    //   return () => {
    //     document.getElementById("interets_input").removeEventListener('keydown', handleInterests)
    //   }
    // }, [handleInterests])


    return (
        <div className="onboarding">
            {/* <h2>Fill your data</h2> */}

            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        id="first_name"
                        type='text'
                        name="first_name"
                        placeholder="First Name"
                        required={true}
                        value={formData.first_name}
                        onChange={handleChange}
                    />

                    <label htmlFor="last_name">Last Name</label>
                    <input
                        id="last_name"
                        type='text'
                        name="last_name"
                        placeholder="Last Name"
                        required={true}
                        value={formData.last_name}
                        onChange={handleChange}
                    />

                    <label>Date of birth</label>
                    <div className="multiple-input-container">
                        <input
                            id="dob_day"
                            type="number"
                            name="dob_day"
                            placeholder="DD"
                            required={true}
                            value={formData.dob_day}
                            onChange={handleChange}
                        />

                        <input
                            id="dob_month"
                            type="number"
                            name="dob_month"
                            placeholder="MM"
                            required={true}
                            value={formData.dob_month}
                            onChange={handleChange}
                        />

                        <input
                            id="dob_year"
                            type="number"
                            name="dob_year"
                            placeholder="YYYY"
                            required={true}
                            value={formData.dob_year}
                            onChange={handleChange}
                        />
                    </div>

                    <label>Gender</label>
                    <div className="multiple-input-container">
                        <input
                            id="man-gender-identity"
                            type="radio"
                            name="gender_identity"
                            value="man"
                            onChange={handleChange}
                            checked={formData.gender_identity === "man"}
                        />
                        <label htmlFor="man-gender-identity">Man</label>
                        <input
                            id="woman-gender-identity"
                            type="radio"
                            name="gender_identity"
                            value="woman"
                            onChange={handleChange}
                            checked={formData.gender_identity === "woman"}
                        />
                        <label htmlFor="woman-gender-identity">Woman</label>
                        <input
                            id="more-gender-identity"
                            type="radio"
                            name="gender_identity"
                            value="more"
                            onChange={handleChange}
                            checked={formData.gender_identity === "more"}
                        />
                        <label htmlFor="more-gender-identity">Others</label>
                    </div>

                    <label>Looking for</label>

                    <div className="multiple-input-container">
                        <input
                            id="man-gender-interest"
                            type="radio"
                            name="gender_interest"
                            value="man"
                            onChange={handleChange}
                            checked={formData.gender_interest === "man"}
                        />
                        <label htmlFor="man-gender-interest">Man</label>
                        <input
                            id="woman-gender-interest"
                            type="radio"
                            name="gender_interest"
                            value="woman"
                            onChange={handleChange}
                            checked={formData.gender_interest === "woman"}
                        />
                        <label htmlFor="woman-gender-interest">Woman</label>
                        <input
                            id="both-gender-interest"
                            type="radio"
                            name="gender_interest"
                            value="both"
                            onChange={handleChange}
                            checked={formData.gender_interest === "both"}
                        />
                        <label htmlFor="both-gender-interest">Both</label>
                        <input
                            id="everyone-gender-interest"
                            type="radio"
                            name="gender_interest"
                            value="everyone"
                            onChange={handleChange}
                            checked={formData.gender_interest === "everyone"}
                        />
                        <label htmlFor="everyone-gender-interest">Everyone</label>

                    </div>

                    <label htmlFor="about">About me</label>
                    <textarea
                        id="about"
                        type="text"
                        name="about"
                        required={true}
                        placeholder="I like long walks..."
                        value={formData.about}
                        onChange={handleChange}
                    />
                    <label htmlFor="interets_input">Enter your interests</label>
                    <input
                        id="interets_input"
                        type="text"
                        name="interets_input"
                        required={true}
                        placeholder="sci-fi song kpop anime..."
                        value={formData.interets_input}
                        onChange={handleChange}
                        onKeyDown={handleInterests}
                    />
                    <div className='interests-section'>
                        {
                            formData.interests.map((interest, index) => {
                                return <InterestBubble
                                    key={index}
                                    interest={interest}
                                    id={index}
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                            })
                        }
                    </div>

                    <input type="submit" />
                </section>

                <section>



                    {/* <label htmlFor="url">Profile Photo</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        onChange={handleChange}
                        required={true}
                    /> */}
                    {!profileImg ? (
                        <>
                            <label className="image-upload" htmlFor="profile_image"  onClick={() => setProfileImg(!profileImg)}>
                                <span class="material-symbols-outlined">
                                    add_a_photo
                                </span>
                                <span className='label-text'>Add your profile photo</span>
                            </label>
                            {/* <input
                            type="file"
                            name="profile_image"
                            id="profile_image"
                            // onChange={(e) => setProfileImg(e.target.files[0])}
                            required={true}
                            style={{ border: "none", display: "none" }}
                        /> */}
                        </>
                    ) : (
                        <div className="photo-container">
                            {profileImg && (<span className="material-symbols-outlined" onClick={() => setProfileImg(!profileImg)}>
                                edit
                            </span>)}
                            <img src="data:image/jpeg;base64,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" alt="profile pic preview" />
                        </div>
                    )}


                </section>

            </form>
        </div>
    )
}

export default DetailsForm