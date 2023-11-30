import React from 'react'
import CountUp from 'react-countup'
import profileImage from '../../images/profile.png'

const Hero = () => {
  return (
    <section id='#hero'>
      <div className='pt-0' id='about'>
        <div className='conteiner pt-5'>
          <div className='md:flex items-center justify-center sm:flex-col md:flex-row'>
            <div className='w-full md:basis-1/3'>
              <h5
                className='text-headingColor font-semibold text-base'
                data-aos='fade-right'
                data-aos-duration='1500'
              >
                Hello Welcome
              </h5>
              <h1
                data-aos='fade-up'
                data-aos-duration='1500'
                className='font-semibold text-headingColor text-3xl sm:text-4xl leading-8 sm:leading-10 mt-5'
              >
                I'm Murugamoorthy Parmilan <br />
                React Developer
              </h1>
              <div
                className='flex items-center gap-5 mt-5'
                data-aos='fade-up'
                data-aos-duration='1800'
                data-aos-delay='200'
              >
                <a href='mailto:parmilanofficial@gmail.com'>
                  <button className='bg-primaryColor text-white gap-2 flex items-center font-semibold px-4 py-2 rounded-lg hover:bg-smallTextColor ease-in duration-300'>
                    <i class='ri-mail-line'></i>Hire me
                  </button>
                </a>
                <a
                  href='#portfolio'
                  className=' text-smallTextColor font-semibold text-base border-b border-solid border-smallTextColor hover:text-primaryColor'
                >
                  See portfolio
                </a>
              </div>
              <p
                data-aos='fade-left'
                data-aos-duration='1500'
                className='flex gap-3 text-headingColor leading-7 font-medium text-lg mt-10'
              >
                <i class='ri-apps-2-line'></i>I am currently pursuing a Computer
                Science degree at Uva Wellassa University in Sri Lanka, where my
                academic journey is focused on developing a solid foundation in
                various aspects of computer science. I have a keen interest in
                web and app development.
              </p>
              <div
                className='flex items-center gap-5 mt-10'
                data-aos='fade-up'
                data-aos-duration='1500'
              >
                <span className=' text-smallTextColor font-semibold text-base'>
                  Follow Me:
                </span>
                <span className='text-smallTextColor font-semibold text-lg'>
                  <a href='#linkedIn'>
                    <i class='ri-linkedin-fill'></i>
                  </a>
                </span>
                <span className='text-smallTextColor font-semibold text-lg'>
                  <a href='#github'>
                    <i class='ri-github-fill'></i>
                  </a>
                </span>
                <span className='text-smallTextColor font-semibold text-lg'>
                  <a href='#facebook'>
                    <i class='ri-facebook-fill'></i>
                  </a>
                </span>

                <span className='text-smallTextColor font-semibold text-lg'>
                  <a href='#instagram'>
                    <i class='ri-instagram-fill'></i>
                  </a>
                </span>
              </div>
            </div>
            <div className='basis-1/5 mt-10 sm:mt-0'>
              <figure className='flex items-center justify-center'>
                <img
                  src={profileImage}
                  alt='Hero Section'
                  className='rounded-full'
                />
              </figure>
            </div>
            <div
              className='md:basis-1/5 flex justify-center text-center gap-3 flex-wrap mt-14 md:mt-0
            md:flex-col md:justify-end md:text-end'
            >
              <div className='mb-10'>
                <h2 className=' text-headingColor font-bold text-2xl'>
                  <CountUp start={1} end={3} duration={1} suffix='+' />
                </h2>
                <h4 className='text-headingColor font-semibold text-lg'>
                  Year of Experience
                </h4>
              </div>
              <div className='mb-10'>
                <h2 className=' text-headingColor font-bold text-2xl'>
                  <CountUp start={0} end={100} duration={5} suffix='%' />
                </h2>
                <h4 className='text-headingColor font-semibold text-lg'>
                  Success Rate
                </h4>
              </div>
              <div className='mb-10'>
                <h2 className=' text-headingColor font-bold text-2xl'>
                  <CountUp start={1} end={15} duration={2} suffix='+' />
                </h2>
                <h4 className='text-headingColor font-semibold text-lg'>
                  Happy Clients
                </h4>
              </div>
              <div className='mb-10'>
                <h2 className=' text-headingColor font-bold text-2xl'>
                  <CountUp start={2} end={20} duration={2} suffix='+' />
                </h2>
                <h4 className='text-headingColor font-semibold text-lg'>
                  Projects Completed
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
