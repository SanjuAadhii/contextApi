import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function MultiDropdown({handleProductChange}) {

  
  return (
    <Dropdown className="d-inline mx-2 " style={{width:"50"}} multiple autoClose="inside"  onSelect={handleProductChange}>
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          Select  Product
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item  eventKey ="Iphone" >Iphone</Dropdown.Item>
          <Dropdown.Item  eventKey="EarPhone">EarPhone</Dropdown.Item>
          <Dropdown.Item  eventKey="Airpods">Airpods</Dropdown.Item>
          <Dropdown.Item  eventKey="Charger">Charger</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  )
}

export default MultiDropdown