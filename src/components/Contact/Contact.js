import React, { Component } from 'react'
import FooterLink from '../FooterLink/FooterLink'
import Header from '../Header/Header'
import './Contact.css'
import contactVector from './../../assets/contact_anime.png'
import github from './../../assets/gh.png'
import linkedin from './../../assets/li.png'
import Modal from '../Modal/Modal'


class Contact extends Component{

  state = {showModal:false};

  componentDidMount(){
    setTimeout(()=>{
      this.setState({showModal:true});
    }, 1500);
  }

  closeModal = () => {
    this.setState({showModal:false});
  };

  render(){
  return (
    <div className='section-container'>
      {this.state.showModal && <Modal closeModal={this.closeModal}/>}
      <Header
      heading="Get in touch."
      details="Looking forward to work with you!"/>

    {/* Social icons */}
    <div className="social-icons-container">
    <a href='https://github.com/dhruval-p' className='social-icon'>
      <img src={github} alt="social"/>
    </a>
    <a href='https://www.linkedin.com/in/dhruval-p/' className='social-icon'>
      <img src={linkedin} alt="social"/>
    </a>
    
    </div>

    {/*Form section*/}
    <div className='contact-form-container'>
    <t className="notice-tag"><b className='tag-color'>Note: </b><b>I have disabled below given text fields (Email and Message) and Send Email button.</b></t>    
      <form className='contact-form'>
        {/*Email Id Input*/}
        <input
          type="email"
          placeholder='Your Email ID'
          name='email'
          disabled='true'
          className='input-box email-input'/>
        
        {/*Email Body*/}
        <textarea
          type="text"
          placeholder='Your Message'
          name='message'
          disabled='true'
          className='input-box body-input'>
          </textarea>

          {/*Submit button*/}
          <button disabled={true} type='submit' className='contact-btn'>
            Send Email
          </button>
      </form>
    </div>

    <FooterLink
    phrase="Read more "
    link="about me."
    toAdress="/about"/>

    <div className='vector-frame'>
      <img
        src={contactVector}
        alt='vector'
        className='about-vector'
      />

    </div>
    </div>


  )
}
}

export default Contact
