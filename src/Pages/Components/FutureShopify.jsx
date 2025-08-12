import React from 'react'
import FutureShopifyLeft from './FutureShopifyLeft'

const FutureShopify = ({ personalStory }) => {
    return (
        <div className='bg-gray-100'>
            <section className=" py-16  px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start min-h-screen ">
                    {/* LEFT TEXT COLUMN */}
                    <FutureShopifyLeft personalStory={personalStory} />


                    {/* RIGHT SIDEBAR */}
                    <div className="space-y-8 self-start">
                        <div className="bg-slate-900 text-white text-lg font-bold text-center py-4 uppercase">
                            Here's What Others Have To Say
                        </div>

                        {/* Testimonial Card */}
                        <img
                            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/c28dc0c1-1860-4fca-b62c-ed8e2864fc62.png"
                            alt="Testimonial Screenshot"
                            className="w-full mx-auto"
                        />

                        <p className="italic text-md text-black max-w-xs mx-auto">
                            “We've been using the checklist for 3–4 weeks now and the results are amazing!! 🔥…”
                        </p>
                        <img
                            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/de451fb6-e058-4e72-9845-6da5a319456d.png"
                            alt="Testimonial Screenshot"
                            className="w-full mx-auto"
                        />

                        <p className="italic text-md text-black max-w-xs mx-auto">
                            "...this checklist lays it out step-by-step in an easy-to-follow format :)"
                        </p>
                        <img
                            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/fe50735f-53f1-45ed-9ab5-a66e9ea577dd.png"
                            alt="Testimonial Screenshot"
                            className="w-full mx-auto"
                        />

                        <p className="italic text-md text-black max-w-xs mx-auto">
                            "...We've gone in six months from 2% to 15% of our sales coming from organic tracked…😍"
                        </p>
                        {/* Guarantee Box */}
                        <hr className='text-gray-400'></hr>
                        <div className="bg-slate-900 text-white text-lg font-bold text-center py-4 uppercase">
                            Frequently Asked Questions
                        </div>
                        <div className="  rounded-md  text-slate-900 flex items-start gap-3">
                            <span className="text-2xl">❓</span>
                            <div>
                                <p className="font-bold">Who is this for?</p>
                                <p className="text-sm">
                                    For any Shopify store owner or manager that's looking to scale their organic traffic and revenue, and generate sales on autopilot.
                                </p>
                            </div>
                        </div>
                        <div className=" rounded-md  text-slate-900 flex items-start gap-3">
                            <span className="text-2xl">❓</span>
                            <div>
                                <p className="font-bold">What is the Shopify SEO Checklist?</p>
                                <p className="text-sm">
                                    It's a checklist that you fill out and then get a step-by-step blueprint/plan to scaling the organic traffic and revenue of your Shopify store.
                                </p>
                            </div>
                        </div>
                        <div className="  rounded-md  text-slate-900 flex items-start gap-3">
                            <span className="text-2xl">❓</span>
                            <div>
                                <p className="font-bold">I want this, what exactly am I getting?</p>
                                <p className="text-sm">
                                    You're getting full access to the Shopify SEO Checklist, Shopify ON-Page SEO Mastery, GoldenWeb's Internal SEO Vault & Access to a Shopify SEO Community.
                                </p>
                            </div>
                        </div>
                        <div className="  rounded-md  text-slate-900 flex items-start gap-3">
                            <span className="text-2xl">❓</span>
                            <div>
                                <p className="font-bold">How is this different than all the other stuff out there?</p>
                                <p className="text-sm">
                                    There's no fluff here. I need you to win, so I can win. Everything is based off the same SEO strategy I used to generate over $25MM in additional organic revenue for my own and my client's Shopify stores.
                                </p>
                            </div>
                        </div>

                        <div className="  rounded-md  text-slate-900 flex items-start gap-3">
                            <span className="text-2xl">❓</span>
                            <div>
                                <p className="font-bold">Do you offer more in depth help?</p>
                                <p className="text-sm">
                                    We do, it's available to anyone that purchases the Shopify SEO Checklist.
                                </p>
                            </div>
                        </div>
                        <div className=" rounded-md  text-slate-900 flex items-start gap-3">
                            <span className="text-2xl">❓</span>
                            <div>
                                <p className="font-bold">Is there a guarantee?</p>
                                <p className="text-sm">
                                    Yes, you get a 60 day money back guarantee in case it's not for you. I even let you keep the checklist.
                                </p>
                            </div>
                        </div>

                        {/* Review Section */}
                        <div>
                            <div className="bg-slate-900 text-white text-lg font-bold text-center py-4 uppercase">
                                Reviews
                            </div>
                            <div className="bg-white p-6 rounded-b-md mt-8  text-center text-slate-900">
                                <img
                                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/a714f61b-c289-48bb-9164-d882bcafa352.png"
                                    alt="User"
                                    className="w-66 h-16 rounded-full mx-auto mb-3"
                                />
                                <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
                                <p className="text-xl italic">
                                    "I've been using the checklist for about a week or so and I see that things are coming together. It's like putting all the puzzles that we were missing together. And I see that it's like accumulating the resources and being prepared for the next bull run, which I believe will come soon after I do everything that is on this checklist. I would definitely recommend it."

                                    - Urban Ropotar, CEO at Lamorix
                                </p>
                            </div>
                        </div>
                        <div>

                            <div className="bg-white p-6 rounded-b-md  text-center text-slate-900">
                                <img
                                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/df9bae65-b955-444b-b5bc-81517811289c.png"
                                    alt="User"
                                    className="w-66 h-16 rounded-full mx-auto mb-3"
                                />
                                <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
                                <p className="text-xl italic">
                                    "One of the great things about this checklist is that it is both applicable to WooCommerce and Shopify, 95% of the stuff you can easily do on both, and the tutorials are also applicable to both."

                                    - Jesse Zimmerman, Founder of GreenHouse Emporium
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white p-6 rounded-b-md  text-center text-slate-900">
                                <img
                                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/8e4d0622-f577-4277-b466-94a8cef3ffbe.png"
                                    alt="User"
                                    className="w-66 h-16 rounded-full mx-auto mb-3"
                                />
                                <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
                                <p className="text-xl italic">
                                    "I grew up doing SEO but mostly on Wordpress, switching over to Shopify now, it's just done differently. Nobody had really shown a lot of the ways to do it, particulary on the technical side, that's what I really like about this."

                                    - Matt Price, SEO & Shopify Entrepreneur
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white p-6 rounded-b-md  text-center text-slate-900">
                                <img
                                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/89fada3b-5c54-4f0e-8cd6-94cc500b0ae8.png"
                                    alt="User"
                                    className="w-66 h-16 rounded-full mx-auto mb-3"
                                />
                                <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
                                <p className="text-xl italic">
                                    "The checklist is a thorough example of what a checklist should look like. Don't get discouraged by the number of checks on the list, because somebody might think, that it's too overwhelming... But the structure of it, and the simplicity of the tasks... It takes you by the hand and guides you through every step."

                                    - Igor Buyseech, SEO Agency Owner
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white p-6 rounded-b-md  text-center text-slate-900">
                                <img
                                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/c21fe507-314f-462b-9cf9-70a7777a8d03.png"
                                    alt="User"
                                    className="w-66 h-16 rounded-full mx-auto mb-3"
                                />
                                <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
                                <p className="text-xl italic">
                                    "This checklist will give you an insight on how to launch sites, grow your site's traffic, and be able to do the SEO on your sites quickly. I can't recommend this guy enough, Benjamin's an absolute star when it comes to this."

                                    - Charles Floate, SEO Entrepreneur
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white p-6 rounded-b-md  text-center text-slate-900">
                                <img
                                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/9330fcc0-2409-4a76-9cf8-45ac1873a205.png
                                    "
                                    alt="User"
                                    className="w-66 h-16 rounded-full mx-auto mb-3"
                                />
                                <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
                                <p className="text-xl italic">
                                    "SEO is a very big, complex topic. There are 1000 ways to tackle it. This checklist systemizes really complicated structure, step by step, without leaving anything behind."

                                    - Edgar Pudans, Shopify Entrepreneur
                                </p>
                            </div>
                        </div>
                        <hr className='text-slate-400 m-10'></hr>
                        <div className="bg-slate-900 text-white text-lg font-bold text-center py-4 uppercase ">
                            Download the Shopify SEO Checklist
                        </div>

                        {/* Product Image */}
                        <img
                            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/679202ec6a58c47ebb1454a4.png"
                            alt="Shopify SEO Checklist"
                            className="w-full mx-auto"
                        />

                        {/* Pricing Info */}
                        <div>
                            <p className="text-black text-3xl text-center font-bold">Only $27 Today</p>
                            <p className="text-lg text-black text-center">(Save $70 today)</p>
                            <p className="text-black mt-2 text-center text-lg">
                                Download The checklist and 4 Bonuses for <s>$97</s> Just $27! Delivered instantly. Get started in the next 2 minutes.
                            </p>
                        </div>

                        {/* Instant Download Label */}
                        <p className="text-black text-3xl font-bold text-center">Available For Instant Download</p>

                        {/* CTA Button */}
                        <button className="bg-[var(--primary)] text-white font-bold py-3 px-6 rounded w-11/12 max-w-xs mx-auto">
                            Get The Checklist Now
                            <p className="text-xs text-white font-normal">
                                Backed by Our 60-Day 100% Money Back Guarantee
                            </p>
                        </button>

                        {/* Divider */}
                        <hr className="border-slate-600 my-6" />

                        {/* Testimonials */}

                        <div className="bg-slate-900 text-white text-lg font-bold text-center py-4 uppercase">
                            Testimonials
                        </div>

                        {/* Testimonial Card */}
                        <img
                            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/c28dc0c1-1860-4fca-b62c-ed8e2864fc62.png"
                            alt="Testimonial Screenshot"
                            className="w-full mx-auto"
                        />

                        <p className="italic text-md text-black max-w-xs mx-auto">
                            “We've been using the checklist for 3–4 weeks now and the results are amazing!! 🔥…”
                        </p>
                        <img
                            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/de451fb6-e058-4e72-9845-6da5a319456d.png"
                            alt="Testimonial Screenshot"
                            className="w-full mx-auto"
                        />

                        <p className="italic text-md text-black max-w-xs mx-auto">
                            "...this checklist lays it out step-by-step in an easy-to-follow format :)"
                        </p>
                        <img
                            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/fe50735f-53f1-45ed-9ab5-a66e9ea577dd.png"
                            alt="Testimonial Screenshot"
                            className="w-full mx-auto"
                        />

                        <p className="italic text-md text-black max-w-xs mx-auto">
                            "...We've gone in six months from 2% to 15% of our sales coming from organic tracked…😍"
                        </p>
                        {/* Testimonial 1 */}
                        <div className="space-y-4">
                            {/* Video */}
                            <iframe
                                src={`https://fast.wistia.net/embed/iframe/ikeeff3pv3?autoPlay=true`}
                                allow="autoplay; fullscreen; picture-in-picture"
                                className="w-full h-11/12 rounded-md border-2 border-green-400"
                            ></iframe>
                            {/* Name */}
                            <h3 className="font-bold text-2xl text-black">Edgar Pudans</h3>

                            {/* Quote */}
                            <p className="italic text-xl text-black">
                                "This checklist is an absolute must-have for anyone with a Shopify store who wishes to give SEO a try of their own."
                            </p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="space-y-4">
                            {/* Video */}
                            <iframe
                                src={`https://fast.wistia.net/embed/iframe/1w24hfgzr2?autoPlay=true`}
                                allow="autoplay; fullscreen; picture-in-picture"
                                className="w-full h-11/12 rounded-md border-2 border-green-400"
                            ></iframe>

                            {/* Name */}
                            <h3 className="font-bold text-2xl text-black">Igor Buyseech</h3>

                            {/* Quote */}
                            <p className="italic text-xl text-black">
                                "My staff literally implemented the entire checklist for me, I didn’t make a single edit, we just let our employees take it and follow it. It’s really easy to use, it has great structure, even the design, it’s a lifesaver."
                            </p>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="space-y-4">
                            {/* Video */}
                            <iframe
                                src={`https://fast.wistia.net/embed/iframe/4x17xm70mx?autoPlay=true`}
                                allow="autoplay; fullscreen; picture-in-picture"
                                className="w-full h-11/12 rounded-md border-2 border-green-400"
                            ></iframe>

                            {/* Name */}
                            <h3 className="font-bold text-2xl text-black">Matt Price</h3>

                            {/* Quote */}
                            <p className="italic text-xl text-black">
                                "It boils it down to multiple steps, a total of 140 of them, and each one is broken into ON-Page, Technical SEO, Off-Page SEO, and so on. So I can really focus on areas where I'm not as strong in, and then focus to implement those and quickly document that inside the checklist."
                            </p>
                        </div>

                        {/* Testimonial 4 */}
                        <div className="space-y-4">
                            {/* Video */}
                            <iframe
                                src={`https://fast.wistia.net/embed/iframe/ybq5yie0m8?autoPlay=true`}
                                allow="autoplay; fullscreen; picture-in-picture"
                                className="w-full h-11/12 rounded-md border-2 border-green-400"
                            ></iframe>

                            {/* Name */}
                            <h3 className="font-bold text-2xl text-black">Urban Ropotar</h3>

                            {/* Quote */}
                            <p className="italic text-xl text-black">
                                "I've been using the checklist for about a week or so and I see that things are coming together. It's like putting all the puzzles that we were missing together. And I see that it's like accumulating the resources and being prepared for the next bull run, which I believe will come soon after I do everything that is on this checklist. I would definitely recommend it."
                            </p>
                        </div>
                        <hr className="border-slate-600 my-10" />
                        {/* Section Title */}

                        <div className="bg-slate-900 text-white text-lg font-bold text-center py-4 uppercase">
                            Included Bonuses
                        </div>


                        {/* Bonus Items */}
                        {[
                            {
                                title: "Shopify ON-Page SEO Mastery",
                                description: "Learn the exact step-by-step process to optimize ON-Page SEO of any page, and dominate your target keyword.",
                                image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/6d64f20f-8dd8-4e95-bc0d-599d7069f869.png"
                            },
                            {
                                title: "GoldenWeb's Shopify SEO Vault",
                                description: "See the exact behind-the-scenes process of scaling Shopify stores with organic traffic, 5 breakdowns of some of our biggest Shopify SEO case studies.",
                                image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/6d64f20f-8dd8-4e95-bc0d-599d7069f869.png"
                            },
                            {
                                title: "Preferred Shopify Themes for SEO",
                                description: "You’ll be able to get the proven, SEO themes I’ve used to hit the ground and start ranking.",
                                image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/a94da2b5-949f-496c-8899-8a7b71efd514.png"
                            },
                            {
                                title: "Shopify SEO Community Access",
                                description: "Get among like-minded people on a similar mission as you - exclusive access ONLY to those who buy the Shopify SEO Checklist!",
                                image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/33e92ec3-147a-48b2-8eec-9f48bc9693cb.png"
                            }
                        ].map((bonus, index) => (
                            <div key={index} className="flex items-start text-black space-x-4">
                                <img src={bonus.image} alt={bonus.title} className="w-24 h-auto" />
                                <div>
                                    <h4 className="font-semibold text-2xl">{bonus.title}</h4>
                                    <p className="text-ld mt-1">{bonus.description}</p>
                                </div>
                            </div>
                        ))}
                        <hr className="border-slate-600 my-10" />
                        {/* Top Button */}
                        <div class="sticky top-4 ">
                        <div className="bg-slate-900   text-white text-lg font-bold text-center py-3 uppercase">
                          Download the Shopify SEO Checklist
                       
                         </div>
                        {/* Product Image */}
                        <img
                            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/679202ec6a58c47ebb1454a4.png"
                            alt="Shopify SEO Checklist"
                            className="mx-auto mb-6 w-full"
                        />

                        {/* Pricing Text */}
                        <div className="text-black font-bold text-2xl text-center">
                            Only <span className="text-[var(--primary)]">$27 Today</span>
                            <div className="text-xl text-gray-500 font-semibold">
                                (Save $70 today)
                            </div>
                        </div>
  
                        {/* Description */}
                        <p className="text-xl text-center text-black mt-4 max-w-xs mx-auto">
                            Download the checklist and 4 Bonuses for <s>$97</s> Just <strong>$27</strong>!<br />
                            Delivered instantly. Get started in the next 2 minutes.
                        </p>

                                {/* Availability Text */}
                                <p className="text-[var(--primary)] text-2xl text-center font-semibold mt-4">
                                    Available For Instant<br />Download
                                </p>

                        {/* CTA Button */}
                        <button className="mt-4 bg-[var(--primary)] text-white font-bold text-xl px-4 py-2 w-full max-w-xs mx-auto block rounded shadow">
                            Get The Checklist Now
                            <div className="text-[14px] font-normal">
                                Backed by Our 60-Day 100% Money Back Guarantee
                            </div>
                        </button>
                        </div>
                        <div className='hidden sm:block'>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>

                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                    
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                       
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                       <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                      <p>‎ </p>
                       <p>‎ </p>
                      <p>‎ </p>
                        <p>‎ </p>
                      <p>‎ </p>
                 </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default FutureShopify
