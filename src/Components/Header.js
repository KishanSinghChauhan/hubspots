import React,{ useState }from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap'
const Header = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <>
        <div className="row align-items-center main-header">
        <div className="container">
            <Navbar expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                <img alt="globe icon" height='25px'src="https://img.icons8.com/ios/32/000000/globe-earth.png"/>
                <Button style={{backgroundColor:'inherit',color:'#33475B',fontSize:'16px',fontWeight:'500',
                border:'none',margin:'0 -20px 0 -5px'}} id="caret">English</Button>
                <DropdownToggle style={{backgroundColor:'inherit',
                color:'#33475B',fontSize:'22px',fontWeight:'600',padding:'0 15px 0 12px',
                border:'none',borderRight:'2px solid #CBD6E2',borderRadius:'0px', marginTop:'4px'}} caret  />
                </DropdownToggle>
                <DropdownMenu className="lang-drop">
                    <DropdownItem className="lang">
                    日本語
                    </DropdownItem>
                    <DropdownItem  className="lang">
                    Deutsch
                    </DropdownItem>
                    <DropdownItem  className="lang">
                    English
                    </DropdownItem>
                    <DropdownItem  className="lang">
                    Español
                    </DropdownItem>
                    <DropdownItem  className="lang">
                    Português
                    </DropdownItem>
                    <DropdownItem  className="lang">
                    Français
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
               
                <NavItem style={{marginTop:'8px'}}>
                    <NavLink className="nav-text" style={{fontSize:'16px',fontWeight:'500',marginLeft:'12px',cursor:'pointer'}}>Contact Sales</NavLink>
                </NavItem>
                
            </Nav>
            <Nav className="" navbar>
                <span style={{margin:'6px 25px 0 0',color: '#10AAC1',cursor:'pointer'}}><i class="fa fa-search fa-md"></i></span>
                <NavItem>
                    <Button style={{backgroundColor:'#FFFFFF',color:'#FF7A59',fontSize:'13px', padding:'9px 27px',fontWeight:'500',border:'1px solid #FF7A59',
                    borderRadius:'3px',marginRight:'10px'}}>Login</Button>
                </NavItem>
                <NavItem>
                <Button style={{backgroundColor:'#FF7A59',color:'#FFFFFF',fontSize:'13px', padding:'9px 25px',fontWeight:'500',border:'1px solid #FF7A59',
                    borderRadius:'3px'}}>Get HubSpot free</Button>
                </NavItem>
                
            </Nav>
            </Collapse>
            </Navbar>
        </div>
    </div>
    <div className="row align-items-center" style={{ height: '90px', marginTop: '80px'}}>
                <div className="container">
                    <Navbar expand="md" style={{ paddingTop: 0, paddingBottom: 0 }}>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                <NavLink href="#">
                                        <img alt="globe icon" height='80px'src="../logo.jpg"/>
                                </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                    <Button style={{backgroundColor:'inherit',color:'#33475B',fontSize:'15px',fontWeight:'600',
                                    border:'none',margin:'0 -20px 0 -5px'}} id="caret">Software</Button>
                                    <DropdownToggle style={{backgroundColor:'inherit',
                                    color:'#33475B',fontSize:'22px',fontWeight:'600',padding:'0 15px 0 12px',
                                    border:'none',borderRadius:'0px', marginTop:'4px'}} caret  />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                        Update Soon
                                        </DropdownItem>
                                        >
                                        
                                    </DropdownMenu>
                                </UncontrolledDropdown>    
                                <NavItem style={{marginTop:'8px'}}>
                                    <NavLink className="nav-text" style={{fontSize:'15px',fontWeight:'600',margin:'0 8px 0 7px',position:'relative',bottom:'1px'}}>Pricing</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                    <Button style={{backgroundColor:'inherit',color:'#33475B',fontSize:'15px',fontWeight:'600',
                                    border:'none',margin:'0 -20px 0 -5px'}} id="caret">Resources</Button>
                                    <DropdownToggle style={{backgroundColor:'inherit',
                                    color:'#33475B',fontSize:'22px',fontWeight:'600',padding:'0 15px 0 12px',
                                    border:'none',borderRadius:'0px', marginTop:'4px'}} caret  />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                        Update Soon
                                        </DropdownItem>
                                        
                                        
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                    <Button style={{backgroundColor:'inherit',color:'#33475B',fontSize:'15px',fontWeight:'600',
                                    border:'none',margin:'0 -20px 0 -5px'}} id="caret">Partners</Button>
                                    <DropdownToggle style={{backgroundColor:'inherit',
                                    color:'#33475B',fontSize:'22px',fontWeight:'600',padding:'0 15px 0 12px',
                                    border:'none',borderRadius:'0px', marginTop:'4px'}} caret  />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                        Update Soon
                                        </DropdownItem>
                                        
                                        
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                    <Button style={{backgroundColor:'inherit',color:'#33475B',fontSize:'15px',fontWeight:'600',
                                    border:'none',margin:'0 -20px 0 -5px'}} id="caret">About</Button>
                                    <DropdownToggle style={{backgroundColor:'inherit',
                                    color:'#33475B',fontSize:'22px',fontWeight:'600',padding:'0 15px 0 12px',
                                    border:'none',borderRadius:'0px', marginTop:'4px'}} caret  />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                        Update Soon
                                        </DropdownItem>
                                        
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
            </>
    )
}

export default Header;