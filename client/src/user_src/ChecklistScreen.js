import React from 'react'
import Dashboard from './Dashboard'

function ChecklistScreen() {
  return (
    <main>
        <div className="checklist-container">
            <div className="checklist-nav-box">
                <Dashboard/>
            </div>
            <div className="checklist-items-box">
                <div className="checklist-item-card">
                    <img src="/" alt='' className="checklist-item-card-image"/>
                    <div className="checklist-item-card-details-box">
                      <p className="checklist-item-card-details-name">Name</p>
                      <p className="checklist-item-card-details-category">category</p>
                      <p className="checklist-item-card-details-price">$100</p>
                      <input type="number" name="quantity" placeholder="21" className="checklist-item-card-details-quantity"/>
                      <button className="checklist-item-card-btn">ADD TO CART</button>
                    </div>
                </div>
                <div className="checklist-item-card">
                    <img src="/" alt='' className="checklist-item-card-image"/>
                    <div className="checklist-item-card-details-box">
                      <p className="checklist-item-card-details-name">Name</p>
                      <p className="checklist-item-card-details-category">category</p>
                      <p className="checklist-item-card-details-price">$100</p>
                      <input type="number" name="quantity" placeholder="21" className="checklist-item-card-details-quantity"/>
                      <button className="checklist-item-card-btn">ADD TO CART</button>
                    </div>
                </div>
                <div className="checklist-item-card">
                    <img src="/" alt='' className="checklist-item-card-image"/>
                    <div className="checklist-item-card-details-box">
                      <p className="checklist-item-card-details-name">Name</p>
                      <p className="checklist-item-card-details-category">category</p>
                      <p className="checklist-item-card-details-price">$100</p>
                      <input type="number" name="quantity" placeholder="21" className="checklist-item-card-details-quantity"/>
                      <button className="checklist-item-card-btn">ADD TO CART</button>
                    </div>
                </div>
                <div className="checklist-item-card">
                    <img src="/" alt='' className="checklist-item-card-image"/>
                    <div className="checklist-item-card-details-box">
                      <p className="checklist-item-card-details-name">Name</p>
                      <p className="checklist-item-card-details-category">category</p>
                      <p className="checklist-item-card-details-price">$100</p>
                      <input type="number" name="quantity" placeholder="21" className="checklist-item-card-details-quantity"/>
                      <button className="checklist-item-card-btn">ADD TO CART</button>
                    </div>
                </div>
                <div className="checklist-item-card">
                    <img src="/" alt='' className="checklist-item-card-image"/>
                    <div className="checklist-item-card-details-box">
                      <p className="checklist-item-card-details-name">Name</p>
                      <p className="checklist-item-card-details-category">category</p>
                      <p className="checklist-item-card-details-price">$100</p>
                      <input type="number" name="quantity" placeholder="21" className="checklist-item-card-details-quantity"/>
                      <button className="checklist-item-card-btn">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default ChecklistScreen