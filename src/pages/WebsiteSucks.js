import { useEffect } from "react"

import Book from "../components/Book"
import Footer from "../components/Footer"

import ButtonAccent from "../assets/ButtonAccent"

import { Star } from "react-feather"

const waitForIFrameResize = () => {
  if (!window.iFrameResize) {
    return setTimeout(waitForIFrameResize, 50)
  }

  window.iFrameResize({ log: false, checkOrigin: false }, "#testimonialto-your-website-sucks-light")
}

export default function WebsiteSucks() {
  useEffect(() => {
    waitForIFrameResize()
  }, [])

  return (
    <>
      <header style={{ background: "linear-gradient(45deg, #FF7B00, #FFC300)" }} className="pt-40 pb-24">
        <nav></nav>
        <section className="flex items-center justify-between max-w-4xl px-12 mx-auto">
          <div>
            <h1 className="font-black text-white text-7xl">
              <span>Your</span>
              <br />
              <span>Website</span>
              <br />
              <span>Sucks</span>
            </h1>
            <h2 className="mt-2 text-3xl tracking-widest text-white uppercase opacity-75">And I'll help you fix it</h2>
            <div className="mt-8">
              <div className="relative inline-block mr-6">
                <a className="inline-block px-6 py-3 text-xl font-bold transition bg-white rounded-lg hover:opacity-90 transform-gpu hover:-translate-y-1" href="https://flurly.com/p/your-website-sucks">
                  Buy the Book
                </a>
                <ButtonAccent />
              </div>
              <a className="text-white transition hover:opacity-75" href="./your-website-sucks-sample.pdf" download>
                or get a chapter for free
              </a>
            </div>
          </div>
          <Book />
        </section>
        {/* <section className="flex justify-between max-w-4xl px-12 pt-32 mx-auto"> */}
        <section className="grid max-w-4xl grid-cols-3 px-12 pt-32 mx-auto">
          <article className="flex flex-col items-center text-center text-white">
            <div className="flex gap-1">
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
            </div>
            <p className="mt-1 text-sm opacity-75">"Great, straight-to-the-point book!"</p>
          </article>
          <article className="flex flex-col items-center text-center text-white">
            <div className="flex gap-1">
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
            </div>
            <p className="mt-1 text-sm opacity-75">"100% recommendation!"</p>
          </article>
          <article className="flex flex-col items-center text-center text-white">
            <div className="flex gap-1">
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
            </div>
            <p className="mt-1 text-sm opacity-75">"Concise read with great examples!"</p>
          </article>
        </section>
      </header>
      <main className="flex pb-32">
        <section className="z-10 max-w-4xl p-12 mx-auto -mt-12 prose bg-white shadow-2xl rounded-3xl">
          <p className="text-center">
            <strong>Learn the 5 pillars of creating a website that gets you from visitors, to conversions.</strong>
          </p>
          <h2>Hey, your website sucks!</h2>
          <p>A pretty bold statement. One I firmly believe in and stand by.</p>
          <p>At the time of writing, there are over 2 billion websites on the internet. 400 million of those are active. </p>
          <p>
            And I'm sure that{" "}
            <strong>
              <em>all of them suck</em>
            </strong>
            .
          </p>
          <p>Working as a Developer and CRO Specialist for companies like Accenture and marketing agencies, I have a lot of experience creating and/or reviewing websites for clients like Audi, Virgin Media, and Porsche.</p>
          <p>Even though there's an amazing amount of great working, good looking websites out there, not one of them is perfect.</p>
          <p>That's why I'd love to help you improve yours!</p>
          <p>In this e-book, we'll go through 5 different pillars of creating a website that gets you the results you want.</p>
          <p>
            There are still a{" "}
            <strong>
              <em>ton</em>
            </strong>{" "}
            of different things you can work on to improve your website, but these 5 ones are the ones I've found had the most long-term impact.
          </p>
          <h2>Chapters</h2>
          <ol>
            <li>
              <strong>Target Audience</strong>
            </li>
            <li>
              <strong>Value Proposition</strong>
            </li>
            <li>
              <strong>SEO</strong>
            </li>
            <li>
              <strong>Design &amp; Layout</strong>
            </li>
            <li>
              <strong>Page Speed</strong>
            </li>
          </ol>
          <h2>Who is this book for?</h2>
          <p>If you're currently not getting the results you want from your own website and want to understand the core reasons of why that is, this book is for you! </p>
          <p>It doesn't matter if you're a Designer, Developer, SaaS Founder, or anything else. As long as you want to make a positive change on the impact your website has, it'll be a great match!</p>
          <h2>Refund Policy</h2>
          <p>If you're not 100% satisfied with the purchase, or it's not what you were expecting, just reply to the download email within 30 days, and you'll get a full refund. No questions asked.</p>
          <iframe title="Testimonials" id="testimonialto-your-website-sucks-light" src="https://embed.testimonial.to/w/your-website-sucks?theme=light&card=base" frameBorder="0" scrolling="no" width="100%"></iframe>
          <p>
            Not convinced just yet?&nbsp;
            <a className="font-bold transition hover:opacity-75" href="./your-website-sucks-sample.pdf" download>
              Read a sample chapter before committing
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}