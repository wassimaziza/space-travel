import React,{useState} from 'react'

function AddTrip(props) {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        description: "",
        price: "",
        place: "",
        duration: "",
        image: "",
    });

    const handleChange = (event) => {
        console.log(event.target)
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
     
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        props.add(formData.name,formData.date,formData.description,formData.price,formData.place,formData.duration,formData.image)
        console.log(formData);
      };

  return (
    <div >
        <form className='formSubmit' onSubmit={handleSubmit}>
          <label>Name:</label>
          <input  type="text"
        name="name"
        required
        value={formData.name}
        onChange={handleChange} />

          <label>Date:</label>
          <input type="text"
        name="date"
        required
        value={formData.date}
        onChange={handleChange} />

          <label>Description:</label>
          <input  type="text"
        name="description"
        required
        value={formData.description}
        onChange={handleChange} />

          <label>Price:</label>
          <input  type="text"
        name="price"
        required
        value={formData.price}
        onChange={handleChange} />

          <label>Place:</label>
          <input type="text"
        name="place"
        required
        value={formData.place}
        onChange={handleChange} />

          <label>Duration:</label>
          <input  type="text"
        name="duration"
        required
        value={formData.duration}
        onChange={handleChange} />

          <label>Image:</label>
          <input  type="text"
        name="image"
        required
        value={formData.image}
        onChange={handleChange} />

          <button type="submit" className='btn7'>Add</button>
        </form>
    </div>
    
  )
}

export default AddTrip