import React from 'react'

const FutureShopifyLeft = ({personalStory}) => {
    return (
        <>
      
        <div className="md:col-span-2 bg-white p-8">
            
            <div className="space-y-2 text-black text-xl mb-8 text-left max-w-3xl mx-auto">
                <p><strong>Dear Future Shopify SEO Checklist Owner</strong> </p>
                <p><strong>From:</strong> {personalStory.letter.from}</p>
                <p><strong>Re:</strong> {personalStory.letter.re}</p>
                <img src='https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/1e4baa4d-a24b-43ab-b440-a5e8b5e138c5.jpg'></img>
                {personalStory.letter.lines.map((l, i) => (<p key={i}>{l}</p>))}
                {/* <div className="space-y-2 mt-4">
            {personalStory.letter.quotes.map((q, i) => (<div key={i} className="bg-[var(--primary)] p-2 rounded"><p>{q}</p></div>))}
        </div> */}
            </div>
            <h2 className="text-4xl text-center text-[var(--primary)] font-bold mb-6">
                {[
                    'So Let Me Prove It To You'

                ].map((p, i) => (
                    <span key={i} className={i % 2 ? 'text-[var(--primary)]' : 'text-[var(--primary)]'}>
                        {p}
                    </span>
                ))}
            </h2>


            <div className="space-y-4 text-xl text-black">
                <p className='bg-[var(--primary)] text-white p-2' >But first, read this disclaimer:</p>
                <p>
                    I have been in SEO for over 7 years, worked on hundreds of projects, and generated over $25MM in Shopify sales with organic traffic in the last 2 years alone.
                </p>
                <p>The average person who buys any “how-to” info product gets little to no results. I’m using these references for example purposes only.</p>
                <p>
                    Your results will vary and depend on many factors …including but not limited to your background, experience, and work ethic.

                </p>
                <p>
                    All purchases entail risk as well as massive and consistent effort and action. If you're not willing to accept that, please DO NOT GET THIS checklist.
                </p>
                <p>And yes, it took me time and energy to achieve my results.</p>
                <img src='https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/b3b8a416-f125-4227-99cd-36acb62be6d2.png'></img>

            </div>
            <h2 className="text-4xl text-center text-[var(--primary)] font-bold mb-6">
                {[
                    'And I Did It By Using A ',
                    'Completely Unknown SEO Strategy ',
                    'That I’m About To Share With You On This Very Page…',

                ].map((p, i) => (
                    <span key={i} className={i % 2 ? 'text-[var(--primary)]' : 'text-[var(--primary)]'}>
                        {p}
                    </span>
                ))}
            </h2>
            <div className="space-y-6 text-xl text-black text-left">
                <p>
                    The same Shopify SEO Checklist that Shopify store owners & managers from all over the
                    world are now using to scale their organic traffic and revenue…
                </p>
                <p>…And in turn, outrank their SEO competitors faster than ever before…</p>
                <p>
                    …All due to a clearly outlined SEO strategy, so they{' '}
                    <span className="underline">don’t experience any overwhelm…</span>
                </p>
                <p>
                    …And best of all, <em>they end up generating a very high ROI on the resources invested.</em>
                </p>


                {/* next section */}
                <h2 className="text-4xl text-center font-bold text-black leading-snug mb-2">
                    <span className="text-[var(--primary)] ">
                        Just Like Alex, Who Downloaded The Shopify SEO Checklist A Few Weeks Ago
                    </span>{' '}
                    <br />
                    <span className="text-[var(--primary)]">
                        And Soon After Started Growing Organic Traffic Day After Day
                    </span>
                </h2>

                <div className="mb-8 relative aspect-video max-w-full mx-auto">
                    <iframe
                        src={`https://fast.wistia.net/embed/iframe/l3luqao8tk?autoPlay=true`}
                        allow="autoplay; fullscreen; picture-in-picture"
                        className="w-full h-11/12 rounded-md border-2 border-yellow-400"
                    ></iframe>
                    {/* <video
        controls
        className="w-full rounded-md border-2 border-yellow-400"
        poster="/path-to-thumbnail.png"
    >
        <source src="https://go.goldenweb.net/v2-page-7971?wvideo=l3luqao8tk" type="video/mp4" />
        Your browser does not support the video tag.
    </video> */}

                    {/* <div className="absolute bottom-4 left-4 bg-slate-900 text-white text-sm px-3 py-2 rounded shadow-lg max-w-xs">
        "We've been using the checklist for{' '}
        <span className="text-[var(--primary)] font-semibold">3–4 weeks</span>{' '}
        now and the results are amazing. We’re{' '}
        <span className="text-[var(--primary)] font-semibold">growing our traffic</span>{' '}
        every single day."
    </div> */}
                </div>

                <div className="text-black text-xl text-left space-y-4 max-w-3xl mx-auto text-base">
                    <p>
                        And even though growing his Shopify store’s organic traffic is great, it’s not the best part…
                    </p>
                    <p>
                        The best part is having a new sales channel, that can consistently deliver organic traffic and
                        sales to your Shopify store.
                    </p>
                    <p>
                        That’s right, Alex now generates about 300 extra clicks per day, from targeted keywords, directly
                        to his Shopify store, and he’s about to replicate the same strategy from the Shopify SEO Checklist,
                        across all of his other stores.
                    </p>
                </div>
                {/* Jesse Section */}
                <h2 className="text-4xl text-center font-bold mb-4 text-[var(--primary)]">
                    This Is Jesse, Another Shopify SEO Checklist User, Who Downloaded the Shopify SEO Checklist Not Too Long Ago...
                </h2>
                <p className="text-black text-xl underline mb-6 text-base">
                    ...And soon after identified numerous ON-Page and technical SEO issues, that seemed unimportant at first but later turned out to be the biggest bottleneck holding back the rankings of Greenhouse Emporium, his high-ticket dropshipping store...
                </p>

                <div className="mb-12">
                    <div className="relative max-w-xl mx-auto">
                        {/* Jesse Video Placeholder */}
                        <div className="aspect-video w-full bg-black rounded-lg flex items-center justify-center">
                            <iframe
                                src={`https://fast.wistia.net/embed/iframe/3pgdsy9tkc?autoPlay=true`}
                                allow="autoplay; fullscreen; picture-in-picture"
                                className="w-full h-11/12 rounded-md border-2 border-yellow-400"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Max Section */}
                <h3 className="text-4xl text-center font-bold mb-6 text-[var(--primary)]">
                    Meet Max Who Increased The Organic Revenue Of His Store From 2% to OVER 15%
                </h3>

                <div>
                    <div className="relative max-w-xl mx-auto">
                        {/* Max Video Placeholder */}
                        <div className="aspect-video w-full bg-black rounded-lg flex items-center justify-center">
                            <iframe
                                src={`https://fast.wistia.net/embed/iframe/a4sc3khwh4?autoPlay=true`}
                                allow="autoplay; fullscreen; picture-in-picture"
                                className="w-full h-11/12 rounded-md border-2 border-yellow-400"
                            ></iframe>
                        </div>
                    </div>
                </div>
                {/* next two sections */}

                {/* Header Section */}
                <h2 className="text-4xl font-bold text-[var(--primary)] text-center">
                    Alex, Jesse, and Max Are All<br />
                    In The Group Of Over 1,000 Shopify SEO Checklist Users Who Are Doing Things Differently...
                </h2>

                <p className="text-black italic font-semibold">
                    And you can BET...
                </p>

                <p className="text-black">
                    This Shopify SEO Checklist is <span className="font-bold italic">unlike any other SEO strategy</span> you heard of before...
                </p>

                <p className="text-black">...This is something completely different, because...</p>

                {/* Bullet Points */}
                <ul className="text-black space-y-2">
                    {[
                        "We don't focus on building expensive backlinks",
                        "We don't focus on content writing or updating",
                        "We don't focus on optimizing the speed of the Shopify store",
                        "We don't focus on outreach to publications with the hopes of getting a link",
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-[var(--primary)] mr-2">✘</span>
                            <span dangerouslySetInnerHTML={{ __html: item.replace(/don't/g, "<span class='underline'>don't</span>") }} />
                        </li>
                    ))}
                </ul>

                <p className="text-black text-sm">
                    Best of all? We rarely (if ever) get hit or lose organic traffic due to Google algorithm updates.
                </p>

                {/* Foundation Focus Section */}
                <h3 className="text-4xl text-center font-bold text-[var(--primary)] mt-8">
                    How? We Focus On Optimizing Shopify Store’s SEO Foundation First...
                </h3>

                <p className="text-black">Like I said...</p>

                <p className="text-black italic underline">
                    This is something completely different and it has the power to change everything for you...
                </p>

                <p className="text-black">...and I know that’s true...</p>

                <p className="text-black">Because it changed everything for me.</p>

                <p className="text-black">
                    <span className="italic">
                        The Shopify SEO Checklist allowed me to get rid of 99% of all the BS I was told I needed to do to rank my Shopify stores on page 1 of Google...
                    </span>
                </p>

                {/* Final Bullet Points */}
                <ul className="text-black space-y-2">
                    {[
                        "Following SEO strategies by SEO gurus",
                        "Using on-page tools such as Surfer SEO",
                        "Paying for expensive SEO tools I didn’t benefit from",
                        "Building tons of backlinks and spending a lot of money",
                        "Adding and rewriting existing content with the hopes of ranking better",
                    ].map((point, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-[var(--primary)] mr-2">✘</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                {/* Main Heading */}
                <h2 className="text-4xl font-bold text-[var(--primary)] text-center">
                    The Shopify SEO Checklist Freed Me From All That And Allowed Me To Easily Rank My Store On Page 1 Of Google And Increase My Organic Traffic And Revenue
                </h2>

                {/* Intro Link */}
                <p className="text-black underline">
                    Here’s what my life used to look like (and if you’ve ever tried to rank a site in Google, then I’m sure you can relate)...
                </p>

                <p className="text-black">I call this the “Shopify SEO Process Of Doom”:</p>

                {/* Process Steps */}
                <ul className="text-black space-y-2">
                    {[
                        "Step 1 - Identify target keywords with keyword research tools",
                        "Step 2 - Write an article and publish a page targeting the keyword",
                        "Step 3 - Optimize the page using an On-Page SEO tool",
                        "Step 4 - Add internal links from existing pages to the newly created page",
                        "Step 5 - Buy backlinks for the new page using the keyword, as the anchor text",
                        "Step 6 - See a small increase in rankings",
                        "Step 7 - Rankings drop 7 days later, and you realize the increase was only temporary",
                        "Step 8 - Give up or Start over from step 1",
                    ].map((step, i) => (
                        <li key={i} className="flex items-start">
                            <span className="text-[var(--primary)] mr-2">✘</span>
                            <span>{step}</span>
                        </li>
                    ))}
                </ul>

                {/* Reflection Paragraph */}
                <p className="text-black">
                    The Shopify SEO Process Of Doom not only sucked but kept me stuck for more than 2 years – forcing me to waste thousands of dollars on outdated SEO strategies & backlinks while working my ass off and seeing no return.
                </p>

                {/* Honest Reflection */}
                <p className="text-black">To be honest…</p>
                <p className="text-black">...I almost gave up on the whole idea of scaling my Shopify store with SEO.</p>
                <p className="text-black">...But before I gave up…</p>
                <p className="text-black">I wanted to try something.</p>
                <p className="text-black">Something that – if it worked.</p>
                <p className="text-black">It would change everything.</p>
                <p className="text-black">And as you’re about to find out, what I tried…</p>
                <p className="text-black font-bold italic">It worked…</p>
                <p className="text-black">And I spent years turning it into a strategy…</p>

                {/* Image Placeholder */}
                <div className="mt-8 flex justify-center">
                    <img
                        src="https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/679202ec252fadecf18a947c.png"
                        alt="Shopify SEO Checklist"
                        className="w-full max-w-2xl rounded-md "
                    />
                </div>


                {/* Heading */}
                <h2 className="text-4xl font-bold text-[var(--primary)] text-center">
                    And I Put This Entire Strategy In A 115-Point Checklist Called The “Shopify SEO Checklist” And You Can Start Reading It In Just A Few Moments From Now…
                </h2>

                {/* Intro Text */}
                <p className="text-black">But before you do,</p>

                <p className="text-black">
                    I’d like to introduce myself and tell you about how all this came to be.
                </p>

                <p className="text-black">
                    <span className="font-bold italic">My name’s Benjamin Golden...</span>
                </p>

                <p className="text-black">
                    You probably haven’t heard that name before. That’s by design. My life’s pretty good...
                </p>

                <p className="text-black">
                    I make 6 figures in profit per month, check 5-6 countries off my bucket list every single year, drive my dream car, and have an amazing circle of friends, who are all mostly 6-7 figure online entrepreneurs.
                </p>

                <p className="text-black">
                    This is without putting in 12-hour work days.
                </p>

                <p className="text-black">
                    In fact, most days I work about 3-4 hours per day, on high-leverage activities, that will result in either owning more cash-flowing Shopify stores…
                </p>

                <p className="text-black">
                    …or increasing the cashflow of my existing stores, all of which are primarily running off of organic SEO traffic.
                </p>

                {/* CTA Button */}
                <div className="text-center mt-6">
                    <button className="bg-[var(--primary)] text-white font-semibold px-6 py-3 rounded-md ">
                        Get The Checklist Now<br />
                        <span className="text-sm block mt-1 font-normal">
                            Backed by Our 60-Day 100% Money Back Guarantee
                        </span>
                    </button>
                </div>

                {/* Image Section */}
                <div className="mt-8 flex justify-center">
                    <img
                        src="https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/eb5a6f26-ebf2-489c-83a0-aeafb763e6ab.png"
                        alt="Shopify SEO Checklist"
                        className="w-full max-w-2xl rounded-md "
                    />
                </div>


                {/* Luckiest Person On Earth  */}

                {/* Main Heading */}
                <h2 className="text-4xl text-center font-bold text-[var(--primary)]">
                    As We Get To Know Each Other… You’ll Quickly Realize That I’m The Luckiest Person On Earth – So Let’s Talk About Where I Was On March 15th, 2019
                </h2>

                {/* Paragraphs */}
                <p className="text-black">
                    I was 19 and living in a small town in Slovenia.
                </p>
                <p className="text-black">
                    I was just getting into SEO because I was <span className="font-semibold">tired of spending money on paid ads</span>.
                </p>
                <p className="text-black">
                    I heard many stories about Shopify stores absolutely crushing it with organic traffic, I knew it was possible, and I knew I could do the same… if I tried hard enough.
                </p>
                <p className="text-black">
                    The problem was I didn’t know anyone specializing in Shopify SEO, but I did follow some of the popular SEO gurus, which at that point seemed legit.
                </p>
                <p className="text-black">
                    Unfortunately, being quite naive, I invested a lot of time and effort into buying expensive SEO consultations, courses, trainings, as well as different SEO strategies, with the hopes that I’d finally learn how to get to the top of Google.
                </p>
                <p className="text-black font-bold">
                    After spending over 2 years, and tens of thousands of dollars on failed SEO services and strategies, it hit me…
                </p>
                <p className="text-black">I realized this wasn’t working…</p>
                <p className="text-black">I realized it was time for a change…</p>
                <p className="text-black">
                    Because no matter what SEO guru or strategy I’d follow, I’d always end up in the same place…
                </p>

                {/* Subheading */}
                <h3 className="text-4xl text-center font-bold text-[var(--primary)]">
                    I’d Always End Up With A Shopify Store, That Looked Great On Paper, But Generated No Sales And I Hated It…
                </h3>

                {/* More Content */}
                <p className="text-black">
                    I hated it because of all the time, money, and effort I invested in following different SEO strategies from SEO gurus.
                </p>
                <p className="text-black font-bold">
                    I had goals, dreams, and aspirations… I wanted more out of life…
                </p>
                <p className="text-black font-bold">
                    ...and I knew a Shopify store generating 0% from organic traffic wasn’t going to work.
                </p>
                <p className="text-black">
                    So I did what everyone else out there does in that situation.
                </p>
                <p className="text-black italic">I started looking for a way out.</p>
                <p className="text-black">
                    I looked everywhere and a few months later I found it.
                </p>
                <p className="text-black">
                    I stumbled upon a Facebook group where people were talking about how they were ranking their Shopify stores on the 1st page of Google, with a clear and straightforward plan, that didn’t involve investing thousands of dollars into backlinks.
                </p>

                {/* Best of All */}
                <p className="text-black font-bold">Best of all?</p>
                <p className="text-black">
                    They were all following the same exact strategy, with their own unique twist, across the different niches.
                </p>
                <p className="text-black">
                    This was a cool concept to me, and as I researched more and more I found that most of them were just like me.
                </p>

                <p className="text-black">
                    They also couldn’t get the SEO strategies suggested by gurus to work for them…
                </p>
                <p className="text-black">
                    The only difference was, that they were launching every Shopify store by following an exact, step-by-step <span className="font-semibold italic">“Shopify SEO Checklist”</span>, that allowed them to achieve perfectly optimized technical SEO foundation, as soon as they launched.
                </p>
                <p className="text-black font-bold">So I said to myself…</p>
                <p className="text-black italic">It’s now or never, and this is the last thing I’m going to try before I give up on SEO for good.</p>
                <p className="text-black">
                    So I reached out to the most knowledgeable members of the Facebook group and got a few paid consultations.
                </p>
                <p className="text-black">
                    The consultations weren’t cheap, but they remain one of the best investments I’ve made to this day, as they helped me figure out my processes and systems to make it all work...
                </p>
                <p className="text-black">
                    Now, you’ve probably never heard of optimizing the technical SEO foundation of a Shopify store before and it’s because it’s used by all of the Shopify stores ranking on page 1 of Google that you couldn't access until today…
                </p>
                <p className="text-black">
                    …You see, the old way of ranking on page 1 of Google is all about targeting as many keywords and creating as many pages as possible while building a lot of backlinks.
                </p>
                <p className="text-black">
                    The theory is that “when you build enough backlinks”, you’re supposed to start ranking.
                </p>
                <p className="text-black font-bold">
                    That’s not 100% true, and relying on that presents a big risk to any SEO strategy…
                </p>
                <p className="text-black">
                    Unfortunately, most SEO gurus and agencies ignore that and prefer not to think about it.
                </p>
                <p className="text-black">
                    …On the contrary, the <span className="font-semibold italic">Shopify SEO Checklist</span> is all about identifying all of the foundational technical SEO errors on your Shopify store, and turning them into quick-win SEO opportunities, to get results as fast as possible, and maximize your ROI.
                </p>
                <p className="text-black">I like to compare the thinking behind the strategy used in the Shopify SEO Checklist, with the concept of filling up a leaking bucket.</p>
                <p className="text-black font-bold">Think about it…</p>
                <p className="text-black">
                    If you have a leaking bucket, no matter how much water you pour into it, the bucket will never stay full.
                </p>
                <p className="text-black">
                    The same applies to your Shopify store.
                </p>
                <p className="text-black">
                    If your technical SEO foundation is not optimized, then it does not matter how many links you build, or how much content you publish, because the technical SEO errors will always hold you back.
                </p>
                <p className="text-black">
                    I know this might sound like a lot if it’s your first time hearing about optimizing the technical foundation of your Shopify store…
                </p>
                <p className="text-black">
                    But, keep in mind that if you’ve been investing a lot of resources into content and link building, but never took the time to consider your store’s SEO foundation, then you can expect to see a big lift once all of the identified SEO quick-wins are implemented.
                </p>
                <p className="text-black font-semibold italic">
                    (On average, we see a lift in organic traffic of about 30-40%, within 90 days of implementing all of the SEO quick-wins identified in the Shopify SEO Checklist).
                </p>
                <p className="text-black font-bold">Best of all?</p>
                <p className="text-black">
                    Chances are your competitors have never heard of, or considered fixing up their technical SEO issues, leaving a lot of potential SEO revenue on the table...
                </p>
                <p className="text-black">
                    Allowing you to come in, outrank them and legally steal those clicks and revenue, and add them to your own store...
                </p>
                <p className="text-black font-semibold italic">
                    …A new competitive advantage for you that was never possible before and allows you to be basically untouchable…
                </p>
                {/* seo quick links */}

                <h2 className="text-4xl text-center text-[var(--primary)] font-bold">
                    The SEO Quick-Wins Inside The Shopify SEO Checklist Is One Of The Most Legitimate And Easy-To-Use Formulas If You Want To Dramatically Increase Your Organic Traffic And Revenue
                </h2>

                <div className="text-center">
                    <button className="bg-[var(--primary)] hover:bg-[var(--primary)] text-white font-bold py-2 px-6 rounded  mt-4">
                        Get The Checklist Now
                        <p className="text-xs text-white mt-1">Backed By Our 60-Day 100% Money Back Guarantee</p>
                    </button>

                </div>

                <p className="text-black text-lg font-semibold">Just think about it:</p>

                <ul className="text-black list-disc list-inside space-y-2">
                    <li>
                        <span className="font-semibold text-[var(--primary)]">What’s the search volume of your top 10 most important target keywords?</span> Probably between 50,000 – 100,000 searches per month, at minimum.
                    </li>
                    <li>
                        <span className="font-semibold text-[var(--primary)]">If you were able to capture just 5% of the total search volume,</span> how much extra revenue would that generate for your Shopify store? Even 5,000 targeted users per month from search, would substantially increase your organic revenue.
                    </li>
                </ul>

                <p className="text-black font-semibold">And when it comes to comparing SEO with paid ads, ask yourself:</p>

                <ul className="text-black list-disc list-inside space-y-2">
                    <li>
                        <span className="font-semibold text-[var(--primary)]">Why only invest in paid ads, and ignore SEO?</span> Why not take a small part of your paid ads budget, and invest it in SEO for a much higher ROI, due to the fact that organic traffic has a much higher conversion rate.
                    </li>
                    <li>
                        <span className="font-semibold text-[var(--primary)]">Why waste so much of your profit margins on the cost of ads?</span> Why not diversify your sales channels into SEO, and dramatically increase your overall profitability…
                    </li>
                    <li>
                        <span className="font-semibold text-[var(--primary)]">Why would you always worry about finding the next winning ad, and stay on the hamster wheel?</span> Why not rank your Shopify store on page 1 of Google instead, and consistently generate organic traffic and sales…
                    </li>
                </ul>

                <p className="text-black font-semibold">The Shopify SEO Checklist was the perfect thing for me...</p>

                <p className="bg-[var(--primary)] text-white font-semibold italic p-2">
                    And the best part that attracted me to doing it this way?
                </p>

                <h3 className="text-4xl text-[var(--primary)] text-center font-bold">
                    You Don’t Even Have To Invest Into Linkbuilding, Hoping To Get Results
                </h3>

                <p className="text-black">
                    This means you can increase your organic traffic by up to 30-40% within 90 days, without building a single link.
                </p>

                <p className="text-black font-bold">
                    All you have to do is identify all of the SEO quick-wins available for your Shopify store, and implement them – all of which you can do with the Shopify SEO Checklist.
                </p>

                <h3 className="text-4xl text-center text-[var(--primary)] font-bold">
                    And That Was My First Time Seeing Revenue Come In From Organic Traffic
                </h3>

                <p className="text-black">
                    <span className="font-bold underline">After realizing that the secret to maximizing SEO results</span> was a spotless technical SEO foundation of a Shopify store, I started studying every single resource I could get my hands on.
                </p>

                <p className="text-black">
                    I had some very basic SEO & Shopify knowledge, but I had absolutely no idea what kind of technical SEO changes would move the needle, how to identify them, or how to actually implement the quick-wins after identifying them.
                </p>
                <p className="text-black">All I knew was that the results I wanted, were on the other side of a foundational technical SEO clean-up, and I knew that was the only thing holding me back from getting what I had been working towards for all these years.</p>

                <p className="text-black">Don’t get me wrong…</p>

                <p className="text-black">I still had to go through a bunch of expensive failures and learn what didn’t work before I was able to figure out the system that helped me rank my Shopify store on Page 1 of Google and start generating sales from organic traffic.</p>

                <p className="text-black">Looking back, those first 2 years of trying to learn how to rank Shopify stores were brutal…</p>

                <p className="text-black font-bold">Late nights.</p>

                <p className="text-black font-bold">Hard work.</p>

                <p className="text-black font-bold">Stress.</p>

                <p className="text-black">I was working my ass off running my web design agency all day…</p>

                <p className="text-black">Just to spend hours studying SEO after I “finished my work day”.</p>

                <p className="text-black">I barely slept, was constantly worrying “if SEO even works”, and the stress was almost unbearable.</p>

                <p className="text-black font-bold">That was my life and some days I was ready to quit and just run away.</p>

                <p className="text-black font-bold">But thankfully, I didn't...</p>

                {/* Shopify Seo Section */}
                <h2 className="text-4xl text-center text-[var(--primary)] font-bold">
                    Fast Forward To Today And It Almost Seems Like A Bad Dream
                </h2>

                <p className="text-black">
                    I proved the idea of <span className="underline">“following the traditional SEO path”</span> to be all wrong…
                </p>

                <p className="text-black">
                    Instead of wasting a ton of time and money on outdated SEO strategies and useless backlinks, I focus on <span className="font-bold">identifying and implementing proven technical SEO quick-wins</span>, that guarantee an increase in organic traffic and revenue.
                </p>

                <p className="text-black">
                    That’s also the main reason, I was able to build a portfolio of 8 different online businesses, including 3 different Shopify stores, all powered by SEO, generating 6 figures in profit per month.
                </p>

                <div className="w-full flex justify-center">
                    <img src="https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/43770a00-f571-4f54-b55a-9e755dc0ea7c.jpeg" alt="Revenue Graph" className=" w-full rounded-lg" />
                </div>

                <p className="text-black">
                    The ability to launch or acquire a Shopify store, or another online business, apply the Shopify SEO Checklist to it, and be able to immediately increase its organic traffic and revenue, is one of my most valuable skills…
                </p>

                <p className="text-black">
                    This same skill has had a massive financial impact not only on the cashflow of these businesses, but also their overall valuations.
                </p>

                <p className="text-black">
                    Unlike most <span className="font-bold">“SEO gurus”</span> out there who constantly jump from one SEO strategy to another, just to try and stay relevant, I actually do what I preach, otherwise I’d be out of business.
                </p>

                <p className="text-black">
                    You see most SEOs out there are obsessed with finding the next “big thing”…
                </p>

                <p className="text-black">
                    The next SEO strategy, the next ChatGPT prompt, and they waste so much time trying to find the next big thing, that they end up ignoring the basics and therefore limit themselves to mediocre SEO results.
                </p>

                <p className="text-black italic font-bold">
                    I did this for years, and it not only drove me crazy…
                </p>

                <p className="text-black">
                    It drove me to the point where I was ready to give up on SEO altogether because I was spending all my time and SEO budget on “strategies” and backlinks, instead of following a proven process, that was guaranteed to deliver results.
                </p>
                <h2 className="text-4xl font-bold text-center text-[var(--primary)]">
                    Wanna Know The Main Difference Between The Shopify SEO Checklist And The “SEO Strategies” By Gurus?
                </h2>

                <p className="text-white p-2 bg-[var(--primary)] italic font-semibold">
                    The main difference is the focus.                        </p>

                <p className="text-black underline">
                    With the Shopify SEO Checklist, you will have an exact roadmap...
                </p>

                <p className="text-black">
                    A list of items, and tasks that you need to execute.
                </p>

                <p className="text-black">
                    You take the guesswork out of SEO, and the only option for you to fail is if you do not execute the checklist items inside of the Shopify SEO Checklist.
                </p>
                <p className="text-black">
                    You no longer need to obsess about how many backlinks you’re building…
                </p>

                <p className="text-black">
                    You no longer need to worry about all the different SEO strategies you "should" be following…                        </p>
                <p className="text-black">
                    You just need to identify all of the available SEO quick-wins using the Shopify SEO Checklist and implement them.
                </p>

                <p className="text-black">
                    It’s as simple as that.                        </p>
                      <div className='mt-8 flex justify-center'>
                  
                <img src="https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/cdd71822-ea12-4789-8db2-7cb365b7590b.png" alt="Graph showing traffic growth" className="w-full mt-8 flex justify-center" />
</div>
                {/* next sec */}

                <h2 className="text-4xl font-bold text-center text-[var(--primary)]">
                    And The Results Of This New Way?
                </h2>

                <p>
                    From <a href="#" className="underline text-[var(--primary)]">3,000 to 23,867 monthly organic traffic</a> in 7 months.👇
                </p>
                  <div className='mt-8 flex justify-center'>
                <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/c3ca07e6-33df-42a4-8954-59ee48fbc15d.jpeg" alt="Graph showing traffic growth" className="w-full rounded shadow" />
</div>
                <p>
                    From <a href="#" className="underline text-[var(--primary)]">4,000 to 17,342 monthly organic traffic</a> in 6 months.👇
                </p>
                  <div className='mt-8 flex justify-center'>
                <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/61212cb1-b570-4d53-ac89-f71d889f373a.jpeg" alt="Graph showing traffic growth" className="w-full rounded shadow" />
</div>
                <p>
                    From <a href="#" className="underline text-[var(--primary)]">2,000 to 36,800 monthly organic traffic</a> in 15 months.👇
                </p>
                  <div className='mt-8 flex justify-center'>
                <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/87dbc4f0-5bf9-4f69-a0d5-4b8f5af30ca3.png" alt="Graph showing traffic growth" className="w-full rounded shadow" />
</div>
                <p>
                    From <a href="#" className="underline text-[var(--primary)]">3,500 to 18,900 monthly organic traffic</a> in 5 months.👇
                </p>  <div className='mt-8 flex justify-center'>
                <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/0ff47fe0-1123-41ba-949e-a40869f9a6e3.jpeg" alt="Graph showing traffic growth" className="w-full rounded shadow" />
</div>
                <div className="text-center">
                    <button className="bg-[var(--primary)] hover:opacity-90 text-white font-bold py-2 px-6 rounded  mt-6">
                        Get The Checklist Now
                        <p className="text-xs text-white mt-1">Backed By Our 60-Day 100% Money Back Guarantee</p>
                    </button>

                </div>

                <h3 className="text-4xl text-center font-bold text-[var(--primary)]">
                    Leading To A New Unfair Advantage...
                </h3>

                <p>
                    The crazy thing is, learning how to identify Shopify SEO quick-win opportunities, and knowing how to implement them, is a skill that you can translate into any other online businesses.
                </p>

                <p>
                    You see, the Shopify SEO Checklist is created specifically in order to help scale organic traffic and revenue of Shopify stores.
                </p>

                <p>
                    But at the end of the day, a Shopify store is nothing other than a website, with almost the exact same elements as any other website on the internet.
                </p>

                <p className="italic ">
                    My point?
                </p>

                <p>
                    By learning how to identify and implement these SEO quick-wins, you’ll be able to do the same with any other online businesses you might come across.
                </p>

                <p>
                    <span className="font-bold text-black">You’ll develop the skill</span> to quickly and efficiently fix up a website and increase the number of visitors and revenue coming in on a daily basis.
                </p>

                <p>
                    This is the exact reason why I own online businesses in the Shopify space, alongside other businesses such as SaaS, lead gen websites, and more!
                </p>

                <p className="font-bold">
                    The cool thing is that…
                </p>

                <p>
                    If you follow every single step that I teach, you end up with a Shopify store that’s ranked on page 1 of Google and brings in organic traffic and sales on autopilot…
                </p>

                <p>
                    <span className="">But it’s much more than that…</span>
                </p>
                <h2 className="text-[var(--primary)] text-center text-4xl font-bold">
                    It’s Actually A Semi-Automated "Traffic Machine" That Allows You To Never Worry About Where Traffic And Sales Are Coming From…
                </h2>

                <p className="text-black">How many SEO gurus have you seen come and go through the years?</p>

                <ul className="text-black list-disc list-inside space-y-2">
                    <li>
                        <span className="">“SEO gurus” tell you all you need is the perfect keyword density and ON-Page SEO of a specific page</span>, just to get you to buy their SEO tool and see no increases in rankings.
                    </li>
                    <li>
                        <span className="">“SEO gurus” also say that you need to publish more content and rewrite existing articles</span>, as they might be outdated, without real proof to back up that statement.
                    </li>
                    <li>
                        <span className="">Or the one we’re all most familiar with… “SEO gurus” tell you that you just don’t have enough backlinks</span>, even though you’ve been investing in linkbuilding for months with no progress.
                    </li>
                </ul>

                <p className="text-black">
                    <span className="italic">My Shopify stores and other online businesses in my portfolio have been bringing in organic traffic and revenue month over month for the last 5 years, straight.</span>
                </p>

                <p className="text-black">Now, speaking of the model…</p>
                <p className="text-black">I’m going to share something that’s a little bit disturbing with you.</p>
                <p className="text-black">Here it goes:</p>
                <p className="text-black">I am actively losing money by showing you this.</p>
                <p className="text-black">And the other gurus out there are making loads of money by teaching the opposite of what I teach (except it doesn’t work).</p>

                <p className="text-black font-bold italic">Ready for it?</p>

                <h3 className="text-[var(--primary)] text-center text-4xl font-bold">
                    The #1 Mistake Everyone Makes Is Investing ALL Their SEO Budget Into Content & Linkbuilding, WITHOUT Having A Solid SEO Foundation
                </h3>

                <p className="text-black font-bold underline">Here’s why:</p>

                <p className="text-black">There are two types of SEOs out there…</p>
                <ul className="text-black list-disc list-inside">
                    <li>Output-focused SEOs</li>
                    <li>ROI-focused SEOs</li>
                </ul>

                <p className="text-black">
                    For the first 2 years of my SEO career – I was the “output-focused SEO”.
                </p>
                <p className="text-black">
                    Output-focused SEOs are always focusing on writing as many articles and building as many links as possible.
                </p>
                <p className="text-black">
                    Their strategy is to try and get as much content out there as fast as possible, while building links to their Shopify store, to hopefully get them ranking for more keywords.
                </p>

                <p className="text-black">
                    And by focusing on this strategy – they spend a ton of time on…
                </p>

                <ul className="text-black list-disc list-inside">
                    <li>Content Research</li>
                    <li>Content Writing</li>
                    <li>Content Publishing</li>
                    <li>Outreaching to Publishers</li>
                    <li>Building & paying for backlinks</li>
                </ul>
                <p className='text-black'>All of this requires time, energy, and a whole lot of SEO budget.</p>

                <p className='text-black'> The problem isn't the model itself.</p>

                <p className='text-black'>It's the fact that the model is incomplete, lacking the most essential part, which would dramatically improve the results of the SEO campaign.</p>

                <p className='text-black'> And this is the same exact thing that happened to me before I figured out that all the best SEOs in the world are actually “ROI-focused SEOs”.</p>
                <p className='text-black font-bold underline'>The solution?</p>
                {/* <h2 className="text-4xl text-[var(--primary)] font-bold">
Wanna Know The Main Difference Between The Shopify SEO Checklist And The “SEO Strategies” By Gurus?
</h2>

<p className="bg-[var(--primary)] text-black font-semibold p-2">
The main difference is the focus.
</p>

<p className="text-black">
With the <span className="underline">Shopify SEO Checklist</span>, you will have an exact roadmap.
</p>

<p className="text-black">
A list of items, and tasks that you need to execute.
</p>

<p className="text-black">
You take the guesswork out of SEO, and the only option for you to fail is if you do not execute the checklist items inside of the Shopify SEO Checklist.
</p>

<p className="text-black">
You no longer need to obsess about how many backlinks you’re building...
</p>

<p className="text-black">
You no longer need to worry about all the different SEO strategies you “should” be following...
</p>

<p className="text-black">
You just need to identify all of the available SEO quick-wins using the Shopify SEO Checklist and implement them.
</p>

<p className="text-black">It’s as simple as that.</p>


<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
<div>
    <h3 className="text-black font-bold text-lg mb-4">The Old Way</h3>
    <ul className="space-y-3">
    {[
        "Frustration + Wasted Time And Money",
        "Try To Find 'Good Keyword Opportunities'",
        "Write 'SEO Optimized' Articles",
        "“Optimize” Content With On-Page SEO Tool",
        "Add Internal Links To New Pages",
        "Buy Backlinks / Use Weak Anchors",
        "See A Small 'Increase'",
        "See Rankings Drop / Wait For Google To Crawl",
        "Give Up Or Start From Step 1"
    ].map((item, index) => (
        <li key={index} className="bg-white text-black py-2 px-4 rounded shadow-sm font-semibold">
        {item}
        </li>
    ))}
    </ul>
</div>

<div>
    <h3 className="text-black font-bold text-lg mb-4">The New Way</h3>
    <ul className="space-y-3">
    {[
        "Consistent Organic Traffic and Revenue",
        "Identify Available SEO Quick-Wins",
        "Implement SEO Quick-Wins With Provided Guides",
        "Publish The Changes & Wait For Google To Crawl",
        "30-40% Increase in Shopify Organic Traffic and Revenue"
    ].map((item, index) => (
        <li key={index} className="bg-[var(--primary)] text-black py-2 px-4 rounded shadow-sm font-semibold">
        {item}
        </li>
    ))}
    </ul>
</div>
</div>

     <h2 className="text-[var(--primary)] text-4xl font-bold">
        It’s Actually A Semi-Automated "Traffic Machine" That Allows You To Never Worry About Where Traffic And Sales Are Coming From…
        </h2>

        <p className="text-black">How many SEO gurus have you seen come and go through the years?</p>

        <ul className="text-black list-disc list-inside space-y-2">
        <li>
            <span className="text-[var(--primary)]">“SEO gurus” tell you all you need is the perfect keyword density and ON-Page SEO of a specific page</span>, just to get you to buy their SEO tool and see no increases in rankings.
        </li>
        <li>
            <span className="text-[var(--primary)]">“SEO gurus” also say that you need to publish more content and rewrite existing articles</span>, as they might be outdated, without real proof to back up that statement.
        </li>
        <li>
            <span className="text-[var(--primary)]">Or the one we’re all most familiar with… “SEO gurus” tell you that you just don’t have enough backlinks</span>, even though you’ve been investing in linkbuilding for months with no progress.
        </li>
        </ul>

        <p className="text-black">
        <span className="italic">My Shopify stores and other online businesses in my portfolio have been bringing in organic traffic and revenue month over month for the last 5 years, straight.</span>
        </p>

        <p className="text-black">Now, speaking of the model…</p>
        <p className="text-black">I’m going to share something that’s a little bit disturbing with you.</p>
        <p className="text-black">Here it goes:</p>
        <p className="text-black">I am actively losing money by showing you this.</p>
        <p className="text-black">And the other gurus out there are making loads of money by teaching the opposite of what I teach (except it doesn’t work).</p>

        <p className="text-black font-semibold">Ready for it?</p>

        <h3 className="text-[var(--primary)] text-4xl font-bold">
        The #1 Mistake Everyone Makes Is Investing ALL Their SEO Budget Into Content & Linkbuilding, WITHOUT Having A Solid SEO Foundation
        </h3>

        <p className="text-black font-semibold">Here’s why:</p>

        <p className="text-black">There are two types of SEOs out there…</p>
        <ul className="text-black list-disc list-inside">
        <li>Output-focused SEOs</li>
        <li>ROI-focused SEOs</li>
        </ul>

        <p className="text-black">
        For the first 2 years of my SEO career – I was the “output-focused SEO”.
        </p>
        <p className="text-black">
        Output-focused SEOs are always focusing on writing as many articles and building as many links as possible.
        </p>
        <p className="text-black">
        Their strategy is to try and get as much content out there as fast as possible, while building links to their Shopify store, to hopefully get them ranking for more keywords.
        </p>

        <p className="text-black">
        And by focusing on this strategy – they spend a ton of time on…
        </p>

        <ul className="text-black list-disc list-inside">
        <li>Content Research</li>
        <li>Content Writing</li>
        <li>Content Publishing</li>
        <li>Outreaching to Publishers</li>
        <li>Building & paying for backlinks</li>
        </ul>
        <p className='text-black'>All of this requires time, energy, and a whole lot of SEO budget.</p>

       <p className='text-black'> The problem isn't the model itself.</p>

        <p className='text-black'>It's the fact that the model is incomplete, lacking the most essential part, which would dramatically improve the results of the SEO campaign.</p>

       <p className='text-black'> And this is the same exact thing that happened to me before I figured out that all the best SEOs in the world are actually “ROI-focused SEOs”.</p>
        <p className='text-black font-bold'>The solution?</p> */}

                <h2 className="text-[var(--primary)] text-center text-4xl font-bold">
                    Focus On Maximizing The ROI By Ensuring Your Shopify Store Has Flawless SEO Foundation To Build On
                </h2>

                <p className="text-black italic font-bold">That’s right…</p>

                <p className="text-black">
                    Who in their right mind would invest so much time and money into content production and linkbuilding, just to get mediocre SEO results?
                </p>

                <p className="text-black">
                    ...I’d rather start by identifying all of the technical SEO issues and quick-wins available for my Shopify store, and then implement them to quickly increase the organic traffic and revenue...
                </p>

                <p className="text-black">
                    ...Instead of putting all that work into content and linkbuilding, and hoping my SEO foundation is “good enough” to get results.
                </p>

                <p className="text-black underline">No thanks. I did that before and it sucks.</p>

                <h3 className="text-black font-bold">So here’s the deal…</h3>

                <p className="text-black">
                    …I explain everything in the Shopify SEO Checklist, it’s a 135-point checklist that shows you everything you need to know.
                </p>

                <div className="text-center">
                    <button className="bg-[var(--primary)] text-white font-semibold py-3 px-6 rounded">
                        Get The Checklist Now
                        <p className="text-sm">Backed by Our 60-Day 100% Money Back Guarantee</p>
                    </button>
                </div>

                <h3 className="text-[var(--primary)] text-center text-4xl font-bold">
                    Here’s The $25.000.000,00 Idea Behind The Shopify SEO Checklist
                </h3>

                <p className="text-black italic">Right now, as you’re reading this very page…</p>

                <p className="text-black">There’s a lot happening in the world of Shopify and SEO.</p>

                <p className="text-black">
                    A few years ago Shopify stores could rely heavily on paid ads and still make a decent profit.
                </p>

                <p className="text-black font-bold">
                    But today, after the iOS 14 update and a never-ending increase in paid ad costs, most Shopify stores have seen a significant increase in their expenses and a significant decline in their overall profits and profit margins.
                </p>

                <p className="text-black">
                    This has created the need for alternative sales channels that Shopify store owners and managers can leverage in order to profitably acquire traffic that converts.
                </p>

                <p className="text-black">
                    Ultimately, they’re all looking for a new solution…
                </p>

                <p className="text-black">And as you may have guessed it – I have it.</p>

                <p className="text-black ">
                    <span className="underline font-bold">
                        And what’s really cool
                    </span> is that once your Shopify store starts to rank on page 1 of Google, and bring in organic revenue, you actually get to keep 100% of the profit, as there is
                    <span className="font-bold"> no cost per click</span> with organic traffic.
                </p>

                <p className="text-black">
                    This alone makes SEO one of the highest long-term ROI sales channels available to any Shopify store today.
                </p>

                <h3 className="text-[var(--primary)] text-center text-4xl font-bold">
                    That’s Right – You Can Have A Consistent Stream Of Revenue From SEO Without Having To Spend Thousands Of Dollars Every Single Month On Paid Media
                </h3>
                <p className="text-black">
                    And that’s where the Shopify SEO Checklist comes in…
                </p>

                <p className="text-black font-bold italic">
                    It does this beautifully in just 3 easy steps…
                </p>

                <div className='mt-8 flex justify-center'>
                    <img src='https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/0e5ea02e-ebac-45a8-ae3f-879485bac174.png' className='w-full'></img>
                </div>

                <p className="text-black font-bold underline italic">
                    And that’s the difference here.
                </p>

                <p className="text-black">
                    When you do SEO for your Shopify store, and you do it correctly (that is by ensuring you have a properly optimized SEO foundation), the SEO results are not only significantly amplified, but they’re also more sustainable.
                </p>

                <p className="text-black">
                    On the contrary, if you ignore the importance of optimizing the foundational SEO elements of your Shopify store, and jump straight into content production and linkbuilding, you’ll be leaving a big chunk of your potential ROI on the table, and it will take longer and be more difficult to get REAL SEO results.
                </p>

                <p className="text-black italic">
                    I’m not saying that only focusing on content production and linkbuilding won’t work…
                </p>

                <p className="text-black">
                    I’m saying that by only focusing on those and ignoring the foundational SEO, you simply won’t be maximizing the potential return on investment you could be getting.
                </p>

                <p className="text-black">
                    And if you’re not all about maximizing your return on investment, as a Shopify store owner or manager, then I don’t think you’ve got your priorities straight, and you should probably spend more time on that.
                </p>

                <h3 className="text-[var(--primary)] text-4xl text-center font-bold">
                    And You Know What? I’ll Stake My Entire Reputation On This One Promise
                </h3>

                <p className="text-black font-semibold italic">
                    <u>You can increase your Shopify store’s organic traffic by 30-40% within 90 days or less.</u>
                </p>

                <p className="text-black">
                    And once you start using this Shopify SEO Checklist…
                </p>

                <p className="text-black">
                    Ranking on page 1 of Google and generating organic traffic and revenue isn’t something you’ll need to worry about ever again.
                </p>

                <p className="text-black">
                    It’s as simple as opening up the Shopify SEO Checklist, going through each one of the opportunities noted down, identifying & implementing them, and then simply giving Google enough time to fully index all of the changes you’ve made.
                </p>

                <p className="text-black font-bold">Here’s what I want you to do…</p>
                <p className="text-black font-bold">Set your calendar right now - set it to exactly 90 days from today.</p>
                <p className="text-black">Because if you implement everything I’m going to share with you in the Shopify SEO Checklist…</p>

                <p className="text-black">That’s when you’ll start seeing your first organic traffic and revenue increases.</p>

                <p className="text-black underline">That’s how easy this is. </p>

                <p className="text-black ">And I know how ridiculous and cliche that sounds…</p>
                {/* few years ago */}
                <h3 className="text-[var(--primary)] text-center text-4xl font-bold">
                    And Just A Few Years Ago... I’d Tell You That You’re Crazy If You’d Ever Believe Such A Strategy Existed...
                </h3>

                <p className="text-black">...But, today I know better.</p>

                <p className="text-black">
                    Listen: I don’t care how many times you’ve tried to rank a Shopify store and increase its organic traffic and revenue.
                </p>

                <p className="text-black font-bold italic">I promise you this…</p>

                <p className="text-black">
                    Anyone can scale the organic traffic and revenue of their Shopify store with the right SEO strategy (more on this below)...
                </p>

                <p className="text-black">Ultimately I want you to know one thing..</p>

                <h3 className="text-[var(--primary)] text-center text-4xl font-bold">If I Can Do This, So Can You!</h3>

                <p className="text-black">
                    Because over 1,000 Shopify Entrepreneurs & Managers are doing it right now within the Shopify SEO Community…
                </p>

                <h3 className="text-[var(--primary)] text-center text-4xl font-bold">And Here's Another Reason You Too Can Do This</h3>

                <p className="text-black font-bold italic">
                    It took me MORE THAN 2 years to “figure this out”…
                </p>
                <p className="text-black font-bold italic">...and another 5 years to perfect it.</p>

                <p className="text-black">
                    It is safe to say that there isn’t anything left for you to figure out. I already did all of the hard work for you.
                </p>

                <p className="text-black">I figured it all out.</p>

                <p className="text-black">
                    This means…there’s <u>nothing</u> for you to “figure out”.
                </p>

                <p className="text-black">
                    You just need to download this checklist and most important of all – implement it!
                </p>

                <p className="text-black">That’s it…</p>

                <h3 className="text-[var(--primary)] text-center text-4xl font-bold">
                    Here’s The Exact 5-Step System Revealed In The Shopify SEO Checklist For Increasing Your Shopify’s Organic Traffic And Revenue
                </h3>

                <div className="space-y-4 text-black">
                    <p>
                        <strong>✅ Step 1 - Identify Unimplemented SEO Quick-Wins</strong> – Using the Shopify SEO Checklist, you’ll start by going through all of the opportunities listed in the checklist, and identify which ones have not yet been implemented on your Shopify store.
                    </p>

                    <p>
                        <strong>✅ Step 2 - SEO Quick-Wins Are Sorted by Highest ROI</strong> – Since there are over 115 different SEO Quick-Wins in the checklist, it’s essential we prioritize the Quick-Wins that are the easiest to implement and offer the biggest impact. This is done automatically by the checklist’s algorithm, taking the guesswork out of the process.
                    </p>

                    <p>
                        <strong>✅ Step 3 - Implement The SEO Quick-Wins</strong> – With every Quick-Win opportunity, you’ll also get a detailed explanation of how to actually implement the opportunity for your Shopify store, which actually will drive the growth in your organic traffic and revenue.
                    </p>
                    <p>
                        <strong>✅ Step 4 - Publish Each SEO Quick-Win As Soon As It's Implemented </strong> – Your goal should be to get as many Quick-Wins implemented as fast as possible, with that in mind, you want to make sure you publish each Quick-Win as soon as you've implemented it.
                    </p>
                    <p>
                        <strong>✅ Step 5 - Let Google Process The Changes & Let Your Organic Traffic Grow </strong> – Based on my experience over the past few years, the Quick-Wins are best processed during a Google Algorithm update, which typically happens once every 2 months - that's why it can sometimes take up to 90 days to see the results.
                    </p>
                </div>
                <p className="text-black font-bold">Those are the 5 steps to scaling your Shopify organic traffic and revenue.</p>

                <p className="text-black">All of this is revealed in the 115-point Shopify SEO Checklist in step-by-step detail.</p>

                <p className="text-black font-bold underline"> And that's not all, because...</p>
                <h2 className="text-[var(--primary)] text-4xl text-center font-bold">
                    Here's What Else You're Going To Discover In The Shopify SEO Checklist
                </h2>

                {/* Section 1 */}
                <div className="space-y-2 text-black">
                    <p>✔️ <strong>How To Get Stars & Reviews To Properly Show Up For Your Organic Product Listings In Google & MASSIVELY Boost Your Organic CTR</strong></p>
                    <p className="text-black text-sm">
                        (This Creates A Self Reinforcing Cycle, Higher CTRs Result In Higher Ranking Positions, Which Again Results In Higher CTRs, Etc...)
                    </p>
                    <p className="text-black font-semibold">All Explained In The Checklist, Row 43</p>
                    <div className="mt-8 flex justify-center">
                    <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/f2673743-8694-48ff-957b-f8826fdacd53.png" alt="Example Google Listing" className="w-full rounded-lg border border-gray-400" />
               </div> </div>

                {/* Section 2 */}
                <div className="space-y-2 text-black">
                    <p>✔️ <strong>The Little Known Trick To Get Hyper Targeted Traffic From Bing</strong></p>
                    <p className="text-black text-sm">
                        (Bing Is Ignored By Almost Everyone, But It Can Still Drive A Lot Of Organic Revenue. It’s Something You Don’t Want To Miss Out On.)
                    </p>
                    <p className="text-black font-semibold">All Explained In The Checklist, Row 22</p>
                    <div className="mt-8 flex justify-center"><img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/6d67e35b-aea1-4807-9270-796901f5ce39.jpg" alt="Bing Analytics Dashboard" className="w-full rounded-lg border border-gray-400" />
                </div></div>

                {/* Section 3 */}
                <div className="space-y-2 text-black">
                    <p>✔️ <strong>How To Create A Content Plan & Position Your Shopify Store As The #1 Expert In Your Niche</strong></p>
                    <p className="text-black text-sm">
                        (Imagine Having A List Of All The Questions And Concerns Your Potential Customers Have In Every Phase Of Their Buying Journey.
                        Imagine How Much Of an Increase In Sales You’d See By Properly Addressing ALL Of Their Concerns).
                    </p>
                    <p className="text-black font-semibold">All Explained In The Checklist, Row 101</p>
                 <div className="mt-8 flex justify-center">   <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/f4a250b3-6b36-4745-b51d-c74d99e05e1d.png" alt="Silo Content Structure" className="w-full rounded-lg border border-gray-400" />
                </div>
                </div>
                {/* Section 1: Affiliate Recruiting */}
                <div className="text-black space-y-2">
                    <p>✔️ <strong>How To Recruit Affiliates To Drive Sales To Your Shopify Store On Autopilot, With 1 Simple SEO Landing Page</strong></p>
                    <p className="text-black text-sm">
                        (Thousands Of Affiliates Are Looking For Stores To Work With. By Leveraging SEO, You Can Position Your Shopify Store As The Perfect Affiliate Partner And Have An Affiliate Recruiting System Running On Autopilot)
                    </p>
                    <p className="text-black font-semibold">All Explained In The Checklist, Row 105</p>
                    <div className="mt-8 flex justify-center">
                    <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/b9f469ee-7ad1-4a73-b9a0-214281f82b39.png" alt="Affiliate Programs SERP" className="w-full rounded-lg border border-gray-400" />
                </div>
                </div>

                {/* Section 2: YouTube SEO */}
                <div className="text-black space-y-2">
                    <p>✔️ <strong>How To Leverage YouTube SEO To Double The Reach Of Your SEO Optimized Content & Landing Page</strong></p>
                    <p className="text-black text-sm">
                        (YouTube Has Just As Much Search Volume As Google, Position Your Shopify Store Properly And You Can EASILY Double Your Current Organic Reach & Revenue.)
                    </p>
                    <p className="text-black font-semibold">All Explained In The Checklist, Row 102</p>
                    <div className="mt-8 flex justify-center">
                    <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/8f7d7934-defb-4b38-8c4a-99810ec476df.png" alt="YouTube Video Results" className="w-full rounded-lg border border-gray-400" />
                </div>
                </div>

                {/* Section 3: Negative SEO Protection */}
                <div className="text-black space-y-2">
                    <p>✔️ <strong>Bulletproof Negative SEO Protection Strategy</strong></p>
                    <p className="text-black text-sm">
                        (Let’s Face It, Your Competitors Will Always Play Dirty. While I Don’t Suggest Doing Negative SEO Attacks On Your Competitor’s Shopify Stores, It’s In Your Best Interest To Protect Your Own Rankings. The System I Will Share With You Makes This Easy.)
                    </p>
                    <p className="text-black font-semibold">All Explained In The Checklist, Row 87</p>
                    <div className="mt-8 flex justify-center">
                    <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/56be2c1a-b913-46d8-8f7a-780c23908fe2.jpeg" alt="Organic Traffic Protection" className="w-full rounded-lg border border-gray-400" />
                </div>
                </div>
                <div className="space-y-2">
                    <p>
                        ✔️ <strong className="text-black">High Leverage International SEO Expansion Strategy</strong> To Rapidly Scale To All International Markets You Ship To
                    </p>
                    <p className="text-sm">
                        (If You Ship To Multiple Countries, And Have Built Out A Profitable SEO Strategy In Your Main Market, You Can Leverage Your Existing Content To Rapidly Scale And Rank In International Markets).
                    </p>
                    <p className="text-black font-semibold">All Explained In The Checklist, Row 120</p>
                    <div className="mt-8 flex justify-center">
                    <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/8ef76219-7c6c-486d-aa5d-cd665168f1d7.jpeg" alt="International SEO Chart" className="w-full rounded-lg border border-gray-400" />
                </div>
                            </div>
                {/* Crawl and efficiency info */}
                <p className="text-sm">
                    I’ll also show you how to get Google to crawl your Shopify store faster, and more efficiently, allowing you to have one more advantage over your SEO competitors.
                </p>

                <p className="text-sm">
                    If scaling your Shopify revenue with SEO and organic traffic is what you seek, this is the ultimate guide on how to do it.
                </p>

                {/* On-Page SEO Mastery */}
                <h2 className="text-[var(--primary)] text-center font-bold text-4xl">
                    Plus I'm Going To Give You A Shopify ON-Page SEO Mastery
                </h2>
                <div className="mt-8 flex justify-center">
                    <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/6d64f20f-8dd8-4e95-bc0d-599d7069f869.png" alt="Shopify On-Page SEO Guide" className="w-full rounded " />
                </div>
                <p>
                    As a Shopify store, the pages with the most potential to generate additional revenue for your business are ultimately your homepage, collection, and product pages.
                </p>

                <p>
                    The reason for that is that these pages speak to potential customers who are further down the buyer’s journey, meaning that they’re much more likely to buy.
                </p>

                <p>
                    With these pages, you want to follow a specific process, to optimize them for your target keyword, so that Google can know the exact keywords you’re trying to rank for.
                </p>

                <p>
                    The process is slightly different across the different types of pages, hence why these 3 ON-Page SEO optimization guides will be so essential and useful if you truly want to maximize your organic revenue potential.
                </p>

                {/* No Catch Section */}
                <h3 className="text-[var(--primary)] text-center font-bold text-4xl">
                    And Before You Download The Shopify SEO Checklist...I Want You To Know That There's No Catch!
                </h3>

                <p>I realize this is very inexpensive and that I’m practically giving it away...</p>

                <p>And you’re probably wondering:</p>

                <p className="italic pl-4  ">
                    “If you’re doing so well with this, why would you give it away for next to nothing?”...
                </p>

                <p><strong>So there has to be a “catch”...</strong></p>

                <p>
                    And I know there are some people out there that offer you a great deal on something but then they stick you in some program that charges your card every month.
                </p>

                <p>I’m not one of them.</p>

                <p>
                    There’s NO hidden “continuity program” or anything even remotely like that.
                </p>

                <p>
                    I’m literally giving you this entire checklist, for $27, as a means of “putting my best foot forward” and demonstrating real value.
                </p>

                <p>
                    My hope is that you’ll love it and that this will be the start of a great business relationship for years to come. But with all that said, there is ONE thing to keep in mind:
                </p>
                {/* won't last long */}

                {/* Urgency Heading */}
                <h2 className="text-[var(--primary)] text-center font-bold text-4xl">This Won’t Last Long</h2>

                <p className='underline'><em>The truth is…</em></p>

                <p>
                    <strong>I was planning on selling this checklist for $97</strong>, but that meant I wouldn’t be able to reach as many people, which would beat the entire point of me sharing this checklist with you.
                </p>

                <p>
                    I believe that the best marketing is giving away everything for free, but ultimately, I still have to pay for advertising costs...
                </p>

                <p>
                    ...which is the reason why I’m pricing this as low as possible, while still hoping I’m able to break even after paying for the ad spend.
                </p>

                {/* Price Justification */}
                <h3 className="text-[var(--primary)] text-center font-bold text-4xl">
                    By Lowering The Price To $27 I’m Able To Maximize The Number Of People I Impact And Help Scale Their Shopify Organic Traffic And Revenue.
                </h3>

                <p className='font-bold'> I consider that a true win/win…</p>

                <p className='font-bold'>
                    Also in most cases, I expect to take a loss when selling the checklist at this price.
                </p>

                <p>It costs me just over $92.32 in advertising expenses to sell just one checklist.</p>

                <p>So why would I do that?</p>

                <p>
                    Simple. I’m making this offer with the idea that you’ll be very impressed with what I’m giving you today, and you’ll want to do more business with me in the future.
                </p>

                <p>
                    I’m betting that you’ll find so much value in the checklist, you’ll email and ask if it’s possible to partner and work on a Shopify SEO project together.
                </p>

                <p>Pretty straightforward.</p>

                <p>Anyway - with all of that said, this is a limited offer.</p>

                {/* Bonus Offer: SEO Vault */}
                <h3 className="text-[var(--primary) text-center font-bold text-4xl">
                    You’re Also Getting GoldenWeb’s Shopify SEO Vault
                </h3>
                <div className="mt-8 flex justify-center">
                    <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/6d64f20f-8dd8-4e95-bc0d-599d7069f869.png" alt="Shopify SEO Vault Bonus" className="w-full rounded " />
                </div>
                <p>
                    Over the years my team and I have generated over $25MM in additional revenue for Shopify stores, all from SEO and organic traffic.
                </p>
                <p className='text-black'>Best of all?</p>

                <p className='text-black'>We’ve documented the exact actions and strategies we used across all these SEO projects and stored them inside our internal vault at GoldenWeb.</p>

                <p className='text-black'>In addition to everything you’re already getting with the Shopify SEO Checklist, I’m going to sweeten the deal even further…</p>

                <p className='text-black'>I’m including 5x Shopify SEO Case Studies From Our Internal Vault at GoldenWeb, which will allow you to replicate and reverse engineer the exact same strategies for your own Shopify store.</p>

                <p className='text-black'>And there's no charge for it. </p>

                <p className='text-black'>I want you to have this as my gift for checking out the checklist.</p>

                {/* Bonus Heading */}
                <h2 className="text-[var(--primary)] text-center font-bold text-4xl">
                    Plus I’m Also Including These Amazing Bonuses Valued At $625
                </h2>

                {/* Bonus 1: Preferred Shopify Themes */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <span className="text-[var(--primary)] text-xl">✔</span>
                        <p className="font-semibold">Preferred Shopify Themes for SEO</p>
                    </div>
                    <div className="mt-8 flex justify-center"><img
                        src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/a94da2b5-949f-496c-8899-8a7b71efd514.png"
                        alt="Best Shopify Themes for SEO"
                        className="w-full rounded "
                    /></div>
                </div>

                {/* Bonus 2: Community Access */}
                <div className="space-y-3 pt-6">
                    <div className="flex items-center gap-2">
                        <span className="text-[var(--primary)] text-xl">✔</span>
                        <p className="font-semibold">Shopify SEO Community Access</p>
                    </div>
                    <div className="mt-8 flex justify-center"><img
                        src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/33e92ec3-147a-48b2-8eec-9f48bc9693cb.png"
                        alt="Access to Shopify SEO Community"
                        className="w-full rounded "
                    /></div>
                </div>

                {/* Money-back assurance */}
                <div className="pt-6 space-y-2">
                    <p>Oh. And in case you’re wondering …</p>
                    <p>Yes.</p>
                    <p>Of course, there’s a money-back guarantee.</p>
                    <p>In fact, I believe it’s …</p>
                </div>
            </div>
            <div className='bg-black p-4 mt-4'>
                <div className="max-w-4xl  mx-auto text-white space-y-8">

                    {/* Money-Back Header */}
                    <div className="space-y-2 max-w-4xl text-center">
                        <p className="bg-[var(--primary)] text-slate-900 font-semibold py-4">
                            The BEST Money-Back Guarantee In The World
                        </p>
                        <h2 className="text-white font-bold text-lg">Here's the world's best guarantee.</h2>
                        <p>I know that before I get into anything...</p>
                        <p>...I’d like to know what I’m buying and that it’s backed by a solid money-back guarantee.</p>
                        <p>And I want you to be <strong>comfortable</strong> with this buy.</p>
                        <p>And even though it’s only $27...</p>
                        <p>Like my grandpa used to say “Test drive the car before you drive it off the lot”...</p>
                    </div>

                    {/* Guarantee Details */}
                    <div className="space-y-4 text-xl">
                        <p>So here’s what I’ve arranged:</p>
                        <p>
                            Download the <strong>Shopify SEO Checklist</strong>, read it out, but more importantly apply what you learn in there.
                        </p>
                        <p>
                            And if you’re not blown away by what you learn, or the results you’re <strong>ABLE</strong> to generate if you actually implement what I suggest…
                        </p>
                        <p>
                            Then just shoot me an email and request a refund <strong>within 60 days</strong>.
                        </p>
                        <p>
                            We’ll refund you your $27 and let you keep the Shopify SEO Checklist <strong>free of charge</strong>.
                        </p>
                        <p>How’s that for the <strong>world’s best money back guarantee</strong>? I’d say pretty good!</p>
                    </div>
                </div>
            </div>
            {/* Limited Time Offer Notice */}
            <div className="bg-[var(--primary)] text-lg text-white font-semibold text-center py-4 m-5 ">
                This is a limited offer that will only be available for a short period of time.
            </div>

            {/* Image of Checklist + Bonuses */}
            <div className="mt-8 flex justify-center">
                <img
                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/geFyhGMcICfV9Fw6HQBK/media/679202ec252fadecf18a947c.png"
                    alt="Shopify SEO Checklist Bundle"
                    className="w-full rounded "
                />
            </div>

            {/* Offer Breakdown */}
            <div className="text-center space-y-4">
                <h3 className="text-black font-bold text-4xl">ONLY $27 TODAY</h3>
                <p className="text-black text-2xl font-semibold">(Save $70 Today)</p>
                <p className="text-black text-xl" >Download The Checklist and 5 Bonuses for <s>$97</s> Just $27! Delivered instantly. Start learning in the next 2 minutes.</p>
            </div>

            {/* CTA Section */}
            <div className="bg-[var(--primary)] text-white text-2xl text-center font-bold py-4 mt-4 rounded">
                Get The Checklist Now
                <p className="text-sm  font-medium">Backed by Our 60-Day 100% Money Back Guarantee</p>
            </div>

            {/* Final Note */}
            <p className="text-xl text-black  pt-4">
                I’ll talk to you in our private FB Group that you’ll get instant access to as soon as you download your copy of the Shopify SEO Checklist.
            </p>
            <p className="text-xl text-black ">Until then, to your success,<br /><strong>Benjamin Golden</strong></p>

            <p className="text-xl text-black font-bold  pt-4">
                P.S. Remember, the Shopify SEO Checklist comes with The BEST Money-Back Guarantee In The World.
            </p>
            <p className="text-xl text-black  pt-4">
                Download it, read it, implement it, get results.
            </p>
            <p className="text-xl text-black  pt-4">
                And if you’re not happy for any reason (and I mean ANY reason) - just let me know and we’ll refund you your $27.</p>

        </div>
        </>
    )
}

export default FutureShopifyLeft
