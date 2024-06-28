import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    product: '',
    lastName: '',
    firstName: '',
    middleName: '',
    phone: '',
    region: '',
    district: '',
    city: '',
    postOfficeNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock sending the form data to two recipients
    console.log('Sending to recipient 1:', formData);
    console.log('Sending to recipient 2:', formData);
    
    // Reset the form
    setFormData({
      product: '',
      lastName: '',
      firstName: '',
      middleName: '',
      phone: '',
      region: '',
      district: '',
      city: '',
      postOfficeNumber: '',
    });

    alert('ВИ УСПІШНО ВІДПРАВИЛИ ЗАМОВЛЕННЯ! ПРИХОДЬТЕ ЗАБИРАТИ ЙОГО НА ВІДДІЛЕННЯ УКРПОШТИ КОЛИ ОТРИМАЄТЕ СМС ВІД УКРПОШТИ ЩО ПОСИЛКА ПРИЙШЛА');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Товар:</label>
        <input type="text" name="product" value={formData.product} onChange={handleChange} required />
      </div>
      <br/>
      <div>
        <label>Прізвище:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <br/>
      <div>
        <label>Ім'я:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <br/>
      <div>
        <label>По-батькові:</label>
        <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} required />
      </div>
      <br/>
      <div>
        <label>Телефон:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <br/>
      <div>
        <label>Доставка:</label>
        <input type="text" value="УКРПОШТА" readOnly style={{ backgroundColor: '#d3d3d3' }} />
      </div>
      <br/>
      <div>
        <label>Вартість доставки:</label>
        <input type="text" value="0 грн" readOnly style={{ backgroundColor: '#d3d3d3' }} />
      </div>
      <br/>
      <div>
        <label>Термін доставки:</label>
        <input type="text" value="до 7 робочих днів" readOnly style={{ backgroundColor: '#d3d3d3' }} />
      </div>
      <br/>
      <div>
        <label>Область:</label>
        <input type="text" name="region" value={formData.region} onChange={handleChange} required />
      </div>
      <br/>
      <div>
        <label>Район:</label>
        <input type="text" name="district" value={formData.district} onChange={handleChange} required />
      </div>
      <br/>
      <div>
        <label>Місто:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </div>
      <br/>
      <div>
        <label>Номер відділення УКРПОШТИ:</label>
        <input type="text" name="postOfficeNumber" value={formData.postOfficeNumber} onChange={handleChange} required />
      </div>
      <br/>
      <div>
        <label>Оплата:</label>
        <input type="text" value="на відділенні Укрпошти при отриманні Замовлення" readOnly style={{ backgroundColor: '#d3d3d3' }} />
      </div>
      <br/>
      <button type="submit" className='bg-blue-600 hover:bg-blue-800 p-2 text-white w-full mt-2'>Підтвердити замовлення !</button>
    </form>
  );
};

export default ContactForm;