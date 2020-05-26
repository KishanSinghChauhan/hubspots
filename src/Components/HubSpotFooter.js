import React,{useState} from 'react';
import {Collapse,Card,CardBody,Button} from 'reactstrap'


const HubSpotFooter = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div className="row hubspot-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <p className="footer-head">Increase Your Traffic</p>
                            <p  className="footer-link">Ad Software</p>
                            <p className="footer-link">Blog Software</p>
                            <p className="footer-link">SEO Software</p>
                            <p className="footer-link">Social Media Software</p>
                            <p className="footer-link">Content Management System</p>
                        </div>
                        <div className="col-3">
                            <p className="footer-head">Connect With Leads</p>
                            <p className="footer-link">Find New Prospects</p>
                            <p className="footer-link">Email Tracking</p>
                            <p className="footer-link">Sales Email Templates</p>
                            <p className="footer-link">Click To Call Your Leads</p>
                            <p className="footer-link">Email Marketing</p>
                        </div>
                        <div className="col-3">
                        <p className="footer-head">Close and Manage Leads</p>
                            <p className="footer-link">Document Tracking Tool</p>
                            <p className="footer-link">Meeting Schedule Tool</p>
                            <p className="footer-link">Sales Automation Tool</p>
                            <p className="footer-link">Lead Management Tool</p>
                            <p className="footer-link">Pipeline Management Tool</p>
                        </div>
                        <div className="col-3">
                        <p className="footer-head">Support and Tools</p>
                            <p className="footer-link">HubSpot Partners</p>
                            <p className="footer-link">Join a Local User Gropu</p>
                            <p className="footer-link">PieSync Integrations</p>
                            <p className="footer-link">HubSpot Templates</p>
                            <p className="dropdown-toggle footer-link" onClick={toggle} style={{ marginBottom: '1rem' }}>Find Tool and Generaters</p>
                            <Collapse isOpen={isOpen}>
                            <Card className="hubspot-footer-card">
                                <CardBody>
                                <p className="footer-link">Get a Free Website Report</p>
                                <p className="footer-link">Invoice Template Generator</p>
                                <p className="footer-link">Email Signature Generator</p>
                                <p className="footer-link">Marketing Plan Template Generator</p>
                                <p className="footer-link">Blog Ideas Generator</p>
                                <p className="footer-link">Make My Persona</p>
                                <p className="footer-link">Business Templates</p>
                                <p className="footer-link">COVID-19 Benchmark Data</p>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button className="btn btn-light">Contact HubSpot Support</Button>
                            <div className="row pl-2">
                                <div className="footer-icon"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></div>
                                <div className="footer-icon"><i class="fa fa-instagram fa-lg" aria-hidden="true"></i></div>
                                <div className="footer-icon"><i class="fa fa-youtube-play fa-lg" aria-hidden="true"></i></div>
                                <div className="footer-icon"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></div>
                                <div className="footer-icon"><i class="fa fa-linkedin fa-lg" aria-hidden="true"></i></div>
                                <div className="footer-icon"><i class="fa fa-medium fa-lg" aria-hidden="true"></i></div>
                            </div>
                        </div>
                       
                       

                    </div>
                    <div className="row justify-content-center footer-lang" >
                        <span>English</span>
                        <span>Deutsch</span>
                        <span>日本語</span>
                        <span>Español</span>
                        <span>Português</span>
                        <span>Français</span>    
                    </div>
                    <hr style={{border:'0.7px solid #CBD6E2'}}/> 
                    <div className="row">
                    <div className="col-6">
                        <div className="footer-image">
                        <img data-src="https://www.hubspot.com/hubfs/HubSpot_Logos/HSLogo_gray.svg" alt="HubSpot Logo" src="https://www.hubspot.com/hubfs/HubSpot_Logos/HSLogo_gray.svg" data-was-processed="true"/>
                        </div>
                        <p className="footer-copy">Copyright © 2020 HubSpot, Inc.</p>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <p className="privacy">Legal Staff</p>
                        <p className="privacy">Privacy Policy</p>   
                    </div>
                    </div>
                    
                    
                </div>
            </div>
    )
}

export default HubSpotFooter;