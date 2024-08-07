import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import '../ContactForm.css';
import Cart from './Cart';
//import {totalQty} from './Cart'
import displayINRCurrency from '../helpers/displayCurrency'


const ContactForm = ({dataBasket, totalPrice, totalQty}) => {         


  const [formData, setFormData] = useState({
    //product: '',
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

    const objectAsString = JSON.stringify(dataBasket, null, 2);
    
    // EmailJS parameters
    const serviceID = 'service_3tc7wn8';
    const templateID = 'template_4y48xcs';
    const userID = 'inSfK_JP_bAHE1siA'; // Public Key of the account    AcessToken = Private Key of the account

    const templateParams = {
      ...formData,
      product: objectAsString,
      totalKilkist: totalQty,
      totalCina: totalPrice,
      delivery: 'УКРПОШТА',
      deliveryCost: 'Вартість доставки залежить від ваги, габаритів посилки та суми, на яку страхується замовлення. Товари, що перевищують 30 кг. фактичної ваги або сума розмірів 3 сторін перевищує 250 см., на жаль, не можуть бути надіслані. Якщо замовлення дуже велике, розбийте його на декілька. При Оплаті ЗАМОВЛЕННЯ на пошті при отриманні, додатково оплачується комісія - 2% від суми + 10 грн. Термін зберігання посилки у відділенні - 6 днів, на 7 день посилка повертається відправнику.',
      deliveryTime: 'до 9 робочих днів',
      payment: 'На відділенні Укрпошти при отриманні Замовлення готівка',
    };

    

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        console.log(result.text);
        alert('ВИ УСПІШНО ВІДПРАВИЛИ ЗАМОВЛЕННЯ! ПРИХОДЬТЕ ЗАБИРАТИ ЙОГО НА ВІДДІЛЕННЯ УКРПОШТИ КОЛИ ОТРИМАЄТЕ СМС ВІД УКРПОШТИ ЩО ПОСИЛКА ПРИЙШЛА');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/*<div>
        <label>Товар: ( Кількiсть штук Загалом)</label>
        <input type="text" value={totalPrice} readOnly style={{ backgroundColor: '#d3d3d3' }} />
      </div>*/}
      {/*<div>
        <label>Товар: ( Найменування, скільки штук, загальна Сума )</label>
        <input type="text" name="product" value={formData.product} onChange={handleChange} required />
      </div>*/}
      <div>
        <label>Прізвище:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label>Ім'я:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>По-батькові:</label>
        <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} required />
      </div>
      <div>
        <label>Телефон:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Доставка:</label>
        <input type="text" value="УКРПОШТА" readOnly style={{ backgroundColor: '#d3d3d3' }} />
      </div>
      <div>
        <label>Вартість доставки:</label>
        <div>Вартість доставки залежить від ваги, габаритів посилки та суми, на яку страхується замовлення. Товари, що перевищують 30 кг. фактичної ваги або сума розмірів 3 сторін перевищує 250 см., на жаль, не можуть бути надіслані. Якщо замовлення дуже велике, розбийте його на декілька. При Оплаті ЗАМОВЛЕННЯ на пошті при отриманні, додатково оплачується комісія - 2% від суми + 10 грн. Термін зберігання посилки у відділенні - 6 днів, на 7 день посилка повертається відправнику</div>
        {/*<input type="text" value="Вартість доставки залежить від ваги, габаритів посилки та суми, на яку страхується замовлення. Товари, що перевищують 30 кг. фактичної ваги або сума розмірів 3 сторін перевищує 250 см., на жаль, не можуть бути надіслані цією поштою. При виборі післяплати, додатково оплачується комісія - 2% від суми + 10 грн. Термін зберігання посилки у відділенні - 6 днів, на 7 день посилка повертається відправнику." readOnly style={{ backgroundColor: '#d3d3d3' }} /> */}
      </div>
      <div>
        <label>Термін доставки:</label>
        <input type="text" value="до 9 робочих днів" readOnly style={{ backgroundColor: '#d3d3d3' }} />
      </div>
      <div>
        <label>Область:</label>
        <input type="text" name="region" value={formData.region} onChange={handleChange} required />
      </div>
      <div>
        <label>Район:</label>
        <input type="text" name="district" value={formData.district} onChange={handleChange} required />
      </div>
      <div>
        <label>Місто:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </div>
      <div>
        <label>Номер відділення УКРПОШТИ:</label>
        <input type="text" name="postOfficeNumber" value={formData.postOfficeNumber} onChange={handleChange} required />
      </div>
      <div>
        <label>Оплата:</label>
        <div>На відділенні Укрпошти при отриманні Замовлення готівка</div>
        {/*<input type="text" value="на відділенні Укрпошти при отриманні Замовлення" readOnly style={{ backgroundColor: '#d3d3d3' }} />*/}
      </div>
      <button type="submit">ПІДТВЕРДИТИ ЗАМОВЛЕННЯ !</button>
    </form>
  );
};

export default ContactForm;


/*import React, { useState } from 'react';

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

export default ContactForm; */