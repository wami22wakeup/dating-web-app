import React from 'react'

const InterestBubble = ({ interest, id, setFormData, formData }) => {
  // const handleClick = (id) => {
  //   console.log("clicked", id)
  // }
  const handleDelete = (interest) => {
    // console.log(formData)
    // console.log("clicked", id)
    setFormData((prevState) => ({
      ...prevState,
      interests: prevState.interests.filter((e) => {
        return e !== interest
      })

    }))
    // console.log(formData)

  }
  return (
    <div className='interest-bubble'>
      {interest}
      <span className="material-symbols-outlined" onClick={() => handleDelete(interest)}>
        close
      </span>
    </div>
  )
}

export default InterestBubble