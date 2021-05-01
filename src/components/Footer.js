import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-top pt-4">
                <div className="row my-3">
                    <div className="col-lg-6 col-sm-12">

                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="footer-con">
                            <h3>Be a  member</h3>
                            <h3>of our community 🎉</h3>
                            <p className="my-4">We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
                            <div className="subscribe d-flex">
                                <input type="text" id="" value="" onChange="" placeholder="Enter your email address" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom py-5 mt-5">
                <div className="row my-2">
                    <div className="col-lg-2 col-sm-6">
                        <h6 className="my-3">Company</h6>
                        <ul>
                            <li className="my-2">About us</li>
                            <li className="my-2">Term of Use</li>
                            <li className="my-2">Privacy Policy</li>
                            <li className="my-2">Press & Media</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <h6 className="my-3">Products</h6>
                        <ul>
                            <li className="my-2">Marketplace</li>
                            <li className="my-2">Magazine</li>
                            <li className="my-2">Seller</li>
                            <li className="my-2">Wholesale</li>
                            <li className="my-2">Services</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <h6 className="my-3">Careers</h6>
                        <ul>
                            <li className="my-2">Become a campus rep</li>
                            <li className="my-2">Become a Vasiti Influencer</li>
                            <li className="my-2">Become a Campus writer</li>
                            <li className="my-2">Become an Affiliate</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <h6 className="my-3">Get in touch</h6>
                        <ul>
                            <li className="my-2">Contaact Us</li>
                            <li className="my-2">Partner with us</li>
                            <li className="my-2">Advertise with us</li>
                            <li className="my-2">Help/FAQs</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <h6 className="my-3">Join our community</h6>
                        <ul className="d-flex py-3">
                            <li className="mr-2"><i className="fab fa-facebook"></i></li>
                            <li className="mr-2"><i class="fab fa-instagram"></i></li>
                            <li className="mr-2"><i class="fab fa-twitter"></i></li>
                            <li className="mr-2"><i class="fab fa-linkedin-in"></i></li>
                        </ul>

                        <p>Email Newsletter</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
