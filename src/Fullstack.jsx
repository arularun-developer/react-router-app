import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
function Fullstack() {

  let data1 = [
    
    {titlename:'Top 10 Best Automation Testing Tools in 2023',
    content:'Automation testing tools have really become a great and important factor in building efficient web',
    url:'https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Top-Automation-Testing-Tools.webp'
    },
    {titlename:'Top Skills Required to Become a Digital Marketer',
    content:'Digital marketing is one of the most dynamic industries that has transformed how businesses connect',
    url:'https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Skills-Required-to-Become-a-Digital-Marketer.webp'
    },
    {titlename:'Career Opportunities in Digital Marketing | Digital Marketing Career',
    content:'As we move forward in today’s digital age, the need for businesses to engage with',
    url:'https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Career-Opportunities-in-Digital-Marketing.webp'
    },
    {titlename:'UI/UX Project Showcase: UX-perience Elevated',
    content:'Are you a professional UI/UX designer who finds it hard to attract your clients or',
    url:'https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-ui-uxProject-Showcase.webp'
    },
    {
      titlename:'How to Become a UI/UX Designer: 10 Steps to Master the Craft',
      content:'Have you ever wondered what it takes to create captivating designs that leave users delighted',
      url:'https://www.guvi.in/blog/wp-content/uploads/2023/08/Skills-needed-for-Devops-2048x1072.webp'
    },  
    {titlename:'Career Opportunities in Digital Marketing | Digital Marketing Career',
    content:'As we move forward in today’s digital age, the need for businesses to engage with',
    url:'https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Career-Opportunities-in-Digital-Marketing.webp'
    }, 
    {titlename:'Top Skills Required to Become a Digital Marketer',
    content:'Digital marketing is one of the most dynamic industries that has transformed how businesses connect',
    url:'https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Skills-Required-to-Become-a-Digital-Marketer.webp'
    }, 
    {titlename:'Career Opportunities in Digital Marketing | Digital Marketing Career',
    content:'As we move forward in today’s digital age, the need for businesses to engage with',
    url:'https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Career-Opportunities-in-Digital-Marketing.webp'
    }


  
 ]











  return (
    <div>
      <div className="  container ">
  <img src="https://www.krctimes.com/wp-content/uploads/2020/12/IIT-Banner.png" className="card-img"  alt="..."/>
  </div>
  <section  >
                <div className="container pe-2 ">
                    <div className="row">
  
                      { data1.map((item,index) =>(
                        <div className="card border border-4" style={{width:'18rem' }} key={index}>
                     <img src={item.url}class="card-img-top pt-2 w-100 " alt="..."/>
                     <div className="card-body">
                      <h5 className="card-title fw-bolder">{item.titlename}</h5>
                     <p className="card-text">{item.content}</p>
                     <Link className="nav-link fw-semibold"  to='/'> Get More </Link>
                 </div>
                  </div>
                      ))
  
                      }
                      </div>
                   
                </div>
            </section>
    </div>
  )
}

export default Fullstack