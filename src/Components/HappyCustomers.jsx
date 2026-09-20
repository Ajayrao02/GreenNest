import React from 'react'
import './CSS/HappyCustomers.css'
import { GiSeedling } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { CiDeliveryTruck } from "react-icons/ci";
const HappyCustomers = () => {
    return (
        <>
            <div className="happy-customer">
                <p className='happy-p-top'></p>
                <div className="happy-outer">
                    <div className="happy-card">
                        <div className="happy-card1">
                            <div className="happy-icon">
                                <GiSeedling />
                            </div>
                            <div>
                                <p className='happy-p'>500+</p>
                                <p className='happy-p2'>Plants Varieties</p>
                                {/* <p className='happy-p2'>your favorite plants.</p> */}
                            </div>
                            <div className='dots'>--------------</div>
                            <div className="happy-icon">
                                <GoPeople />
                            </div>
                            <div>
                                <p className='happy-p'>10K+</p>
                                <p className='happy-p2'>Happy Customer</p>
                                {/* <p className='happy-p2'>your favorite plants.</p> */}
                            </div>
                            <div className='dots'>--------------</div>
                            <div className="happy-icon">
                                <CiDeliveryTruck />
                            </div>
                            <div>
                                <p className='happy-p'>Pan India</p>
                                <p className='happy-p2'>Delivery</p>
                                {/* <p className='happy-p2'>your favorite plants.</p> */}
                            </div>
                            <div className='dots'>--------------</div>
                            <div className="happy-icon">
                                <RiCustomerService2Line />
                            </div>
                            <div>
                                <p className='happy-p'>22/7</p>
                                <p className='happy-p2'>Plants Care Support</p>
                                {/* <p classname='happy-p3'>your favorite plants.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HappyCustomers