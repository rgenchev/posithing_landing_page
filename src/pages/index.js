import React from 'react';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/Scroll';

import { FacebookButton, TwitterButton } from "react-social";
import FontAwesome from 'react-fontawesome'

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <section id="welcome" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <h1>Posithing</h1>
          <p>
            {/*За по-добра България статия след статия.*/}
            По нещо хубаво/позитивно българско!
          </p>
          <ul className="actions">
            <li>
              <Scroll type="id" element="about">
                <a href="#about" className="button" style={{backgroundColor: '#C6008F'}}>
                  Научи повече
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </section>

      <section id="about" className="wrapper style2 spotlights">
        <section>
          <div className="content">
            <h2>За нас</h2>
            <p>В какво се изразява проекта?</p>
          </div>
        </section>
        <section>

          <div className="content">
            <div className="inner">
              <h2>Каква е целта ни?</h2>
              <p>Да повишим позитивизма и увереността у българите (в България и чужбина).</p>
              <p>"Как въобще е възможно това?!" - ще си кажете.</p>
              <p>Създавайки общество от дейци, генерирането и споделянето на ПОЗИТИВНО И ИСТИНСКО съдържание, под формата на статии, новини, събития, инициативи и т.н.</p>
              <p>
                За целта ще разчитаме на партньорства с университети, училища и музеи, б(в)логъри, дизайнери, програмисти и общо взето всички ентусиасти,
                които са готови да допринесат, отделяйки част от времето и споделяйки знанията си.
              </p>
            </div>
          </div>
        </section>
        
      </section>

      <section id="realization" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>Реализация на проекта</h2>
          <p>
            Всеки ще има поле за изява и ще може да допринесе за развитието на този проект.
          </p>
          <div className="features">
            <section>
              <span className="icon major fa-pencil" />
              <h3>Съдържание</h3>
              <p>
                Тъй като основната идея на платформата е да се доставя качествено съдържание, ще имаме нужда от доброволци, защото никой не би искал да чете мои произведения. :)
              </p>
            </section>

            <section>
              <span className="icon major fa-info" />
              <h3>Нова информация</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>

            <section>
              <span className="icon major fa-magic" />
              <h3>Дизайн</h3>
              <p>
                Ще имаме нужда от лого и дизайн на платформата. Всеки, който има някакви идеи, е добре дошъл.
              </p>
            </section>

            <section>
              <span className="icon major fa-code" />
              <h3>Код</h3>
              <p>
                Кодът за платформата ще бъде изцяло open-source.
              </p>
            </section>

            <section>
              <span className="icon major fa-language" />
              <h3>Превод</h3>
              <p>
                Ако искаме повече хора да разберат колко хубава страна е България, ще имаме нужда от хора, които да превеждат вече качените статии на други езици.
              </p>
            </section>

            <section>
              <span className="icon major fa-comments"></span>
              <h3>Идеи</h3>
              <p>
                Всяка идея е добре дошла и ако бъде приета от общостта, би могла да бъде реализирана.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section id="join" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Присъедини се</h2>
          <p>
            Както и по-горе казахме всеки е добре дошъл и би могъл да допринесе с нещо при разработката на проекта. Ако имаш интерес и желание, кликни върху бутона по-долу, за да се присъединиш. Благодарим ти! :)
          </p>
          <div className="split style1">
            <section>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScpdfpaERU2SHD62s2qyqOCBUb9MULQ3D6LdcLMzqMGpbdDJA/viewform?usp=sf_link" className="button" target="_blank" rel="noopener noreferrer" style={{backgroundColor: '#C6008F'}}>
                Да действаме!
              </a>
            </section>
            <section>
              <ul className="contact">

                <li>
                  <h3>Нека се разчуе:</h3>
                  <FacebookButton url="https://angry-nobel-f58237.netlify.com/" appId={process.env.GATSBY_FB_APP_ID} style={{backgroundColor: '#3b5998', lineHeight: '0', marginRight: '5px'}}>
                    <FontAwesome
                      name="facebook"
                      size="2x"
                    />
                  </FacebookButton>

                  <TwitterButton url="https://angry-nobel-f58237.netlify.com/" style={{backgroundColor: '#38A1F3', lineHeight: '0'}}>
                    <FontAwesome
                      name="twitter"
                      size="2x"
                    />
                  </TwitterButton>
                </li>

                <li>
                  <h3>За повече информация</h3>
                  <a href="mailto:r.genchew@gmail.com">r.genchew@gmail.com</a><br/>
                  <a href="mailto:maykalgenchev@gmail.com">maykalgenchev@gmail.com</a>
                </li>
                <li>
                  <h3>Социални медии</h3>
                  <ul className="icons">
                    <li>
                      <a href="https://www.facebook.com/posithing" className="fa-facebook" target="_blank" rel="noopener noreferrer">
                        <span className="label">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/rgenchev/posithing_landing_page" className="fa-github" target="_blank" rel="noopener noreferrer">
                        <span className="label">GitHub</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
