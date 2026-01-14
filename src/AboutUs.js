// src/AboutUs.js
import React from 'react';
import './AboutUs.css';
import { FaInstagram, FaSnapchatGhost, FaTiktok } from 'react-icons/fa';

function AboutUs() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Dareen Lifestyle</h1>
        <p>
          Dareen Lifestyle Events is a creative event planning company that blends innovation, beauty, and advanced technology 
          to deliver unique, memorable celebrations. Our journey begins with you – crafting exceptional experiences filled 
          with joy and magical touches that create lasting smiles. Our goal is to turn every event into a beautiful story worth telling.
        </p>
      </section>

      <section className="about-content-grid">
        {[
          { title: '🎉 Celebration Coordination', desc: 'We handle every detail of your celebration – from planning and organizing to execution – ensuring a seamless and joyful experience.' },
          { title: '📸 Photo Booth & Instant Photography', desc: 'Mirror booths, 360 cameras, and instant photo setups to capture the fun.' },
          { title: '🎁 Custom Gifts & Giveaways', desc: 'Personalized gifts, creative giveaways, and elegant packaging tailored to your occasion.' },
          { title: '🎶 Entertainment Options', desc: 'Folk bands, singers, oud players, clowns, and fun cartoon characters for all ages.' },
          { title: '☕ Hospitality Services', desc: 'Arabic coffee servers and full guest hospitality to welcome everyone.' },
          { title: '🚗 Limousine & Transportation', desc: 'Luxury limousine service for weddings, graduations, and special occasions.' },
          { title: '🍽️ Buffet & Catering', desc: 'Beautiful buffet setups and diverse dishes for every event type.' },
          { title: '📷 Full Event Coverage', desc: 'Professional photography, videography, drone shots, and editing.' },
          { title: '🍿 Snack & Treat Carts', desc: 'Popcorn, ice cream, corn, fries, cotton candy, and more.' },
          { title: '🚚 Food Trucks', desc: 'Trendy food trucks with delicious menus that suit your event.' },
          { title: '🎮 Interactive Games', desc: 'Fun and energetic games for both kids and adults.' },
          { title: '⛺ Celebration Tents', desc: 'Spacious and elegant tents designed and decorated for any event.' },
          { title: '🛋️ Lounge & Seating Arrangements', desc: 'Comfortable and stylish setups to match the theme of your event.' },
          { title: '📺 Screens & Visuals', desc: 'LED screens for slideshows, videos, and live feeds.' },
          { title: '💡 Lighting & Ambiance', desc: 'Mood-setting lighting setups that elevate your space.' },
          { title: '⛺ Camp & Trip', desc: 'Designing and setting up fully equipped camps for celebrations and outdoor events, including tents, seating, lighting, hospitality, and entertainment for a unique open-air experience.' },
        ].map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
          </div>
        ))}
      </section>

      <section className="clients-section">
        <h2>Our Clients</h2>
        <div className="client-logos">
          {[
            'Hafillogo.png',
            'Mawhibalogo.png',
            'apscologo.png',
            'ministryofeducation.png',
            'Mosanadalogo.jpeg',
            'eshraqclinics.jpeg',
            'msdlogo.png',
            'Allianzlogo.png',
            'Ajialunalogo.png',
            'ArabianCement.png'
          ].map((filename, index) => (
            <div key={index} className="client-slide">
              <img src={`${process.env.PUBLIC_URL}/images/${filename}`} alt={filename.split('.')[0]} />
            </div>
          ))}
        </div>
      </section>

      <section className="social-media">
        <h2>Follow Us</h2>
        <div className="icons">
          <a href="https://www.instagram.com/dareenlifestyle?igsh=MWg5MHlodmdvZzJiMg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://snapchat.com/t/XU7PvaN7" target="_blank" rel="noopener noreferrer">
            <FaSnapchatGhost />
          </a>
          <a href="https://www.tiktok.com/@dareenlifestyle_event?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
