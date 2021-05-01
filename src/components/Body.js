import React, { useState } from 'react'
import Img from '../img/pic.png'
import TestimonialTile from './TestimonialTile'
import ShareForm from './ShareForm'

export default function Body({ data, setData }) {
    const [show, setShow] = useState(false)


    return (
        <div className="main">
            <div className="banner py-3">
                <div className="banner-square">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="main-banner-text my-5">
                                <h3 style={{ fontSize: '48px', lineHeight: '60px', fontWeight: '700' }}>Amazing</h3>
                                <h3 style={{ fontSize: '48px', lineHeight: '60px', fontWeight: '700' }}>Experiences from our wonderful customers</h3>
                                <p style={{ fontSize: '18px', lineHeight: '31px', fontWeight: '400' }}>Here is what customers and vendors are saying about us, you share your videos with us too.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* <div className="banner-img"> */}
                            <img src={Img} alt="img" />
                            {/* </div> */}
                        </div>
                    </div>
                </div>

            </div>

            <div className="banner py-3" style={{ background: '#222222', color: '#fff', }}>
                <div className="banner-square">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={Img} alt="img" />
                        </div>
                        <div className="col-lg-6">
                            <div className="main-banner-text my-5">
                                <h3 className="my-4">Tolu & Joy's Experience</h3>
                                <button className="btn-main"
                                    style={{ color: 'white', border: '1px solid white' }}
                                >Customer</button>
                                <p className="my-4">
                                    I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience.
                                    I would definately be coming back!
                                    I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience.
                                    I would definately be coming back!
                                </p>

                                <p className="my-4" style={{ cursor: 'pointer' }}
                                    onClick={() => setShow(true)}
                                >Share your own story!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner py-5">
                <div className="testimony_display py-4">
                    {
                        data.map(e => (
                            <TestimonialTile key={e.id} name={e.name} img={e.img} address={e.address} type={e.type} text={e.text}
                                style={{ color: 'crimson', border: '1px solid crimson' }}>
                            </TestimonialTile>
                        ))
                    }
                </div>

            </div>

            <div className="banner py-3" style={{ background: '#FFF8F5' }}>
                <div className="banner-square">
                    <div className="row">
                        <div className="col-lg-6 py-3">
                            <div className="main-banner-text my-5">
                                <h3 className="my-4">Josiah's Experience</h3>
                                <button className="btn-main"
                                    style={{ color: '#FF5C00', border: '1px solid #FF5C00' }}>
                                    Vendor</button>
                                <p className="my-4">
                                    I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience.
                                    I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service,
                                    an all round great experience. I would definately be coming back!
                        </p>

                                <p className="my-4" style={{ cursor: 'pointer' }}
                                    onClick={() => setShow(true)}
                                >Share your own story!</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={Img} alt="img" />
                        </div>
                    </div>
                </div>

            </div>


            <div className="banner py-5">
                <div className="testimony_display py-4">
                    {
                        data.map(e => (
                            <TestimonialTile key={e.id} name={e.name} img={e.img} address={e.address} type={e.type} text={e.text}
                                style={{ color: 'lightgreen', border: '1px solid lightgreen' }} >
                            </TestimonialTile>
                        ))
                    }
                </div>

            </div>

            {
                show &&
                <ShareForm setShow={setShow} data={data} setData={setData} />
            }

        </div>
    )
}
