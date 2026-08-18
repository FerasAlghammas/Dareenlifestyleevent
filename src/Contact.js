import React from 'react';
import emailjs from 'emailjs-com';
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xw7lhdp',
      'template_agcfkij',
      e.target,
      'LrgMZp_tQfROxOFaG'
    ).then(
      (result) => {
        toast.success('Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        console.error(error.text);
        toast.error('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <section className="section">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you. Reach out for collaborations or inquiries.</p>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
        <input name="name" type="text" placeholder="Your Name" style={contactinput} required /><br />
        <textarea name="message" placeholder="Your Message" rows="5" style={contactinput} required /><br />
        <button type="submit" className="hero-button">Send Message</button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <a
          href="https://wa.me/966544507066"
          target="_blank"
          rel="noopener noreferrer"
          style={whatsappLinkStyle}
        >
          <FaWhatsapp size={24} style={{ marginRight: '8px' }} />
          Chat with us on WhatsApp
        </a>
      </div>
    </section>
  );
}

const contactinput = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const whatsappLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '18px',
  color: '#25D366',
  textDecoration: 'none',
  fontWeight: '500',
  border: '1px solid #25D366',
  padding: '10px 16px',
  borderRadius: '6px',
  transition: 'all 0.3s ease'
};

export default Contact;
