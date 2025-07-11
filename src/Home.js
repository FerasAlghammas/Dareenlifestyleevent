import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="fade-in">
              Welcome to <span>DAREEN</span> Lifestyle
            </h1>
            <p className="fade-in delay">
              Celebrating Moments with Elegance, Creativity & Joy
            </p>
            <a href="#graduation" className="hero-button fade-in delay-2">
              Explore Our Work
            </a>
          </div>
        </div>
      </section>

      <GallerySection
        id="graduation"
        title="Graduation Events"
        images={['graduation1.jpg', 'graduation6.jpg']}
        videos={['graduationV1.mp4', 'graduationV2.mp4', 'graduationV3.mp4', 'graduationV6.mp4', 'graduationV7.mp4']}
      />

      <GallerySection
        id="birthday"
        title="Birthday Events"
        images={[
          'birthday1.jpg', 'birthday2.jpg', 'birthday3.jpg', 'birthday4.jpg',
          'birthday5.jpg', 'birthday6.jpg', 'birthday7.jpg'
        ]}
        videos={['birthdayV1.mp4', 'birthdayV2.mp4', 'birthdayV3.mp4', 'birthdayV4.mp4', 'birthdayV5.mp4', 'birthdayV6.mp4', 'birthdayV7.mp4', 'birthdayV8.mp4', 'birthdayV9.mp4']}
      />

      <GallerySection
        id="corporate"
        title="National Day Events"
        images={['NationalDay9.jpg', 'NationalDay11.jpg', 'NationalDay13.jpg']}
        videos={['NationalDayV1.mp4', 'NationalDayV2.mp4', 'NationalDayV3.mp4', 'NationalDayV4.mp4', 'NationalDayV5.mp4', 'NationalDayV6.mp4']}
      />

      <GallerySection
        id="FoundingDay"
        title="Founding Day Events"
        images={[
          'FoundingDay1.jpg', 'FoundingDay2.jpg', 'FoundingDay3.jpg', 'FoundingDay4.jpg', 'FoundingDay5.jpg',
          'FoundingDay6.jpg', 'FoundingDay7.jpg', 'FoundingDay8.jpg', 'FoundingDay9.jpg',
          'FoundingDay10.jpg', 'FoundingDay11.jpg', 'FoundingDay12.jpg'
        ]}
        videos={['FoundingDayV4.mp4', 'FoundingDayV2.mp4', 'FoundingDayV3.mp4', 'FoundingDayV1.mp4', 'FoundingDayV5.mp4', 'FoundingDayV6.mp4', 'FoundingDayV7.mp4', 'FoundingDayV8.mp4', 'FoundingDayV9.mp4']}
      />
    </div>
  );
}

function GallerySection({ id, title, images = [], videos = [] }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <div className="horizontal-scroll">
        {videos.map((vid, index) => (
          <video key={index} controls preload="metadata">
            <source src={`${process.env.PUBLIC_URL}/videos/${vid}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}

        {images.map((img, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/images/${img}`}
            alt={`${title} ${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>
      
    </section>
  );
}

export default Home;
