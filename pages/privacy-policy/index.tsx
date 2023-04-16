
import React from 'react';
import Head from 'next/head';

const ExistingPage = () => {
  return (
    <div>
      <Head>
        <title>Existing Page</title>
      </Head>
      <div dangerouslySetInnerHTML={{
        __html: `
        <html>

        <head>
            <meta content="text/html; charset=UTF-8" http-equiv="content-type">
            <style type="text/css">
                ol {
                    margin: 0;
                    padding: 0
                }
        
                table td,
                table th {
                    padding: 0
                }
        
                .c3 {
                    color: #215462;
                    font-weight: 700;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-size: 11pt;
                    font-family: "Arial";
                    font-style: normal
                }
        
                .c1 {
                    background-color: #ffffff;
                    padding-top: 18pt;
                    padding-bottom: 18pt;
                    line-height: 1.15;
                    orphans: 2;
                    widows: 2;
                    text-align: left
                }
        
                .c2 {
                    color: #215462;
                    font-weight: 400;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-size: 11pt;
                    font-family: "Arial";
                    font-style: normal
                }
        
                .c5 {
                    color: #000000;
                    font-weight: 400;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-size: 11pt;
                    font-family: "Arial";
                    font-style: normal
                }
        
                .c0 {
                    background-color: #ffffff;
                    padding-top: 12pt;
                    padding-bottom: 2pt;
                    line-height: 1.2;
                    orphans: 2;
                    widows: 2;
                    text-align: left
                }
        
                .c13 {
                    padding-top: 0pt;
                    padding-bottom: 0pt;
                    line-height: 1.15;
                    orphans: 2;
                    widows: 2;
                    text-align: left;
                    height: 11pt
                }
        
                .c18 {
                    background-color: #ffffff;
                    padding-top: 0pt;
                    padding-bottom: 6pt;
                    line-height: 1.2;
                    orphans: 2;
                    widows: 2;
                    text-align: left
                }
        
                .c7 {
                    background-color: #ffffff;
                    padding-top: 18pt;
                    padding-bottom: 4pt;
                    line-height: 1.2;
                    orphans: 2;
                    widows: 2;
                    text-align: left
                }
        
                .c9 {
                    background-color: #ffffff;
                    padding-top: 14pt;
                    padding-bottom: 4pt;
                    line-height: 1.2;
                    orphans: 2;
                    widows: 2;
                    text-align: left
                }
        
                .c16 {
                    padding-top: 0pt;
                    padding-bottom: 0pt;
                    line-height: 1.2;
                    orphans: 2;
                    widows: 2;
                    text-align: left
                }
        
                .c8 {
                    font-weight: 700;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-size: 13pt;
                    font-family: "Arial";
                    font-style: normal
                }
        
                .c10 {
                    font-weight: 700;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-size: 34pt;
                    font-family: "Arial";
                    font-style: normal
                }
        
                .c12 {
                    font-weight: 700;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-size: 23pt;
                    font-family: "Arial";
                    font-style: normal
                }
        
                .c17 {
                    font-weight: 400;
                    vertical-align: baseline;
                    font-size: 11pt;
                    font-family: "Arial";
                    font-style: normal
                }
        
                .c15 {
                    text-decoration-skip-ink: none;
                    -webkit-text-decoration-skip: none;
                    color: #1155cc;
                    text-decoration: underline
                }
        
                .c11 {
                    background-color: #ffffff;
                   
                    padding: 72pt 72pt 72pt 72pt;
                    max-width: 1000px;
                    margin: auto;
                }
        
                .c4 {
                    color: inherit;
                    text-decoration: inherit
                }
        
                .c6 {
                    color: #215462
                }
        
                .c14 {
                    height: 16pt
                }
        
                .c19 {
                    color: #000000
                }
        
                .title {
                    padding-top: 0pt;
                    color: #000000;
                    font-size: 26pt;
                    padding-bottom: 3pt;
                    font-family: "Arial";
                    line-height: 1.15;
                    page-break-after: avoid;
                    orphans: 2;
                    widows: 2;
                    text-align: left
                }
        
                .subtitle {
                    padding-top: 0pt;
                    color: #666666;
                    font-size: 15pt;
                    padding-bottom: 16pt;
                    font-family: "Arial";
                    line-height: 1.15;
                    page-break-after: avoid;
                    orphans: 2;
                    widows: 2;
                    text-align: left
                }
        
                li {
                    color: #000000;
                    font-size: 11pt;
                    font-family: "Arial"
                }
        
                p {
                    margin: 0;
                    color: #000000;
                    font-size: 11pt;
                    font-family: "Arial"
                }
        
                h1 {
                    padding-top: 20pt;
                    color: #000000;
                    font-size: 20pt;
                    padding-bottom: 6pt;
                    font-family: "Arial";
                    line-height: 1.15;
                    page-break-after: avoid;
                    orphans: 2;
                    widows: 2;
                    text-align: left
                }
        
                h2 {
                    padding-top: 18pt;
                    color: #000000;
                    font-size: 16pt;
                    padding-bottom: 6pt;
                    font-family: "Arial";
                    line-height: 1.15;
                    page-break-after: avoid;
                    orphans: 2;
                    widows: 2;
                    text-align: left
                }
        
                h3 {
                    padding-top: 16pt;
                    color: #434343;
                    font-size: 14pt;
                    padding-bottom: 4pt;
                    font-family: "Arial";
                    line-height: 1.15;
                    page-break-after: avoid;
                    orphans: 2;
                    widows: 2;
                    text-align: left
                }
        
                h4 {
                    padding-top: 14pt;
                    color: #666666;
                    font-size: 12pt;
                    padding-bottom: 4pt;
                    font-family: "Arial";
                    line-height: 1.15;
                    page-break-after: avoid;
                    orphans: 2;
                    widows: 2;
                    text-align: left
                }
        
                h5 {
                    padding-top: 12pt;
                    color: #666666;
                    font-size: 11pt;
                    padding-bottom: 4pt;
                    font-family: "Arial";
                    line-height: 1.15;
                    page-break-after: avoid;
                    orphans: 2;
                    widows: 2;
                    text-align: left
                }
        
                h6 {
                    padding-top: 12pt;
                    color: #666666;
                    font-size: 11pt;
                    padding-bottom: 4pt;
                    font-family: "Arial";
                    line-height: 1.15;
                    page-break-after: avoid;
                    font-style: italic;
                    orphans: 2;
                    widows: 2;
                    text-align: left
                }
            </style>
        </head>
        
        <body class="c11 doc-content">
            <h2 class="c16" id="h.5dwre0kszee8"><span class="c10 c19">Data Privacy</span></h2>
            <h1 class="c18" id="h.qyycniqgm8ii"><span class="c6 c12">General information</span></h1>
            <p class="c1"><span class="c2">Last updated: 01. April 2023 Here we inform you about data processing in connection
                    with the entire service avni.club and its applications. AVNI AdTech Inc is the body responsible for the
                    processing of personal data. Our Data Protection Officer is Martin Zielinski.</span></p>
            <p class="c1"><span class="c2">We provide this Privacy Policy to inform you about data processing in connection with
                    the entire service avni.club (including all applications).</span></p>
            <p class="c1"><span class="c2">We, AVNI AdTech Inc., assume the role of controller as per the EU General Data
                    Protection Regulation (GDPR). In other words, we are the legal entity that shall determine the purposes and
                    means of the processing of personal data . Our contact details are as follows: Neuberstra&szlig;e 36, 22087
                    Hamburg, Germany, Tel.: +49 1752298889, E-mail: dataprotection@avni.club.</span></p>
            <h4 class="c0" id="h.ftklcxv57p2"><span class="c3">Data Protection Officer</span></h4>
            <p class="c1"><span class="c2">Our Data Protection Officer is Martin Zielinski, Noorder UG
                    (haftungsbeschr&auml;nkt), Neubertstra&szlig;e 36, 22087 Hamburg, Germany, e-mail:
                    dataprotection@avni.club.</span></p>
            <h4 class="c0" id="h.1k239f23r1ww"><span class="c3">Processing for another purpose</span></h4>
            <p class="c1"><span class="c2">The purposes for which we process your personal data are outlined in the section 1.
                    General statement about the purposes of data processing. We will inform you once again should we process
                    your personal data for any other purpose, i.e. for a purpose other than the one the personal data was
                    originally saved for.</span></p>
            <h4 class="c0" id="h.2wvmy7e7ogl9"><span class="c3">Duty to provide and necessity of personal data for contract
                    closure</span></h4>
            <p class="c1"><span class="c2">You are not legally required to make your personal data available. Nevertheless, in
                    order to close a user contract you must provide information such as your name and e-mail address. Without
                    this information we are not able to enter into such a contract with you. Within the scope of the user
                    contract, we are contractually obliged to keep the data provided in its precise and complete form for all
                    applications used by you and for the entire duration of the contractual term. During the initial process of
                    data entry we inform you if the provision of personal data is necessary for a particular feature or
                    application (&quot;mandatory field&quot;). Where data is required, any failure to provide this information
                    will result in the respective feature or application not being accessible to you the user. In the case of
                    optional data, not making this information available may mean that our services cannot be provided in the
                    same form or scope.</span></p>
            <p class="c1"><span class="c2">How is your personal data processed?</span></p>
            <h2 class="c7" id="h.3u938667cw5s"><span class="c10 c6">1. General statement about the purposes of data
                    processing</span></h2>
            <p class="c1"><span class="c2">The main reason we process personal data is to fulfil our contractual obligations
                    towards our users. The processing of data is required, for example, for us to be able to suggest suitable
                    contacts, services and information to you.</span></p>
            <p class="c1"><span class="c2">Operating a service like avni.club is subject to dynamic change by its very nature.
                    It is not therefore possible to share every single detail about our data processing with you, but we do
                    intend to inform you of all the key information. We process data first and foremost in order to fulfill our
                    contractual obligations towards our users. In addition to this, we process your data to preserve our
                    justifiable interests while taking your interests into account (e.g. when we send you promotional
                    newsletters). And, of course, in some cases we are legally obliged to process data (e.g. to pass the data on
                    to any investigative authorities). In all other cases we will ask for your separate consent to process your
                    data (e.g. when using tracking technologies for the measurement and optimisation of advertising or when you
                    enter a prize draw). When it comes to fulfilling our contractual obligations towards our users, we try to
                    tailor our products and services to the needs of users at all times. Personalisation is important here.
                    Interest and usage profiles are created. In order to be able to show you recommendations, e.g. for jobs,
                    events, groups or contacts, and to suggest you as a valuable business contact or potential employee, we must
                    have an idea of what your interests might be. In order to ascertain these interests we use information that
                    you provide to us, in addition to implicit feedback, i.e. information that we automatically obtain through
                    your usage of our service (by means of so-called &quot;tracking&quot;), as well as information that we may
                    possibly receive indirectly (e.g. through a user&#39;s address book or upload). In order to meet our
                    contractual obligations, we also serve you third-party advertising tailored to your needs and interests
                    wherever possible. To this end, we provide advertisers with certain targeting criteria. Advertisers can
                    state, for example, that they would like to target &quot;young people&quot; at places with &quot;1million
                    citizens&quot;.</span></p>
            <h2 class="c7" id="h.qd4y2eqjxwh4"><span class="c10 c6">2. Information you provide to us</span></h2>
            <p class="c1"><span class="c2">This refers to data we obtain from you directly and information you publish and send
                    on avni.club Websites such as:</span></p>
            <h4 class="c0" id="h.3bpsrtjhuxlv"><span class="c3">Login details (e.g. username and password)</span></h4>
            <p class="c1"><span class="c2">Profile information (e.g. name, age, gender, location) Messages, group posts, event
                    participation, billing details, Wallet adress. This includes data that we have obtained from you directly
                    and information that you publish or send on avni.club Websites or other services. There are both mandatory
                    entry fields (which as marked as such) and optional information you can provide.</span></p>
            <h4 class="c0" id="h.odb7wr17xbxf"><span class="c3">Login details</span></h4>
            <p class="c1"><span class="c2">When you register to be able to use avni.club applications we have to record and
                    process certain personal data as your login data.</span></p>
            <h4 class="c0" id="h.8pbyauaowfle"><span class="c3">Category</span></h4>
            <p class="c1"><span class="c2">e.g.</span></p>
            <p class="c1"><span class="c2">Username E-mail address to log in Mobile number to log in Password Visibility Your
                    login data is not visible to third parties. We will not ever pass this information on to third parties under
                    any circumstances.</span></p>
            <h4 class="c0" id="h.upxcupcbmzi9"><span class="c3">Period saved for</span></h4>
            <p class="c1"><span class="c2">We delete this data when you delete your user account.</span></p>
            <h4 class="c0" id="h.rssfjmal64wm"><span class="c3">Legal basis</span></h4>
            <p class="c1"><span class="c2">The legal basis for this processing of personal data is Article 6 (1) b) of the EU
                    General Data Protection Regulation (GDPR) and all other regulations.</span></p>
            <h3 class="c9" id="h.5zoh1s6uurq4"><span class="c8 c6">Mandatory information in the network</span></h3>
            <p class="c1"><span class="c2">You are required to complete certain mandatory fields. This information is essential
                    for a functioning professional network.</span></p>
            <h4 class="c0" id="h.iiy89sxc7lcf"><span class="c3">Category</span></h4>
            <p class="c1"><span class="c2">e.g.</span></p>
            <p class="c1"><span class="c2">first name and last name, age, gender and Place: City and country</span></p>
            <h4 class="c0" id="h.xe9z0armhjd7"><span class="c3">Visibility</span></h4>
            <p class="c1"><span class="c6">The following mandatory information is always visible without limitation to other
                    users in the </span><span class="c6">network</span><span class="c2">:</span></p>
            <p class="c1"><span class="c2">First name, last name and username on telegram channel or discord channel if
                    provided. We delete this data when you delete your user account.</span></p>
            <h4 class="c0" id="h.ycaczjgomrpg"><span class="c3">Legal basis</span></h4>
            <p class="c1"><span class="c2">The legal basis for this processing of personal data is Article 6 (1) b) of the EU
                    General Data Protection Regulation (GDPR).</span></p>
            <h3 class="c9" id="h.h0op3e2xwuxm"><span class="c8 c6">Optional information in the network</span></h3>
            <p class="c1"><span class="c2">As well as the mandatory information we require, you can also enter additional
                    information to make it easier for users to get to know you better and, for example, identify and select you
                    as a suitable person.</span></p>
            <h4 class="c0" id="h.mquddfrdt6je"><span class="c3">Category</span></h4>
            <p class="c1"><span class="c2">e.g.</span></p>
            <p class="c1"><span class="c2">Access to mail information to read the receipts from online shopping for
                    rewarding</span></p>
            <h4 class="c0" id="h.xqh1f1f3xp7"><span class="c3">Visibility</span></h4>
            <p class="c1"><span class="c2">Your optional information is not visible to all users in the network after you enter
                    it. </span></p>
            <h4 class="c0" id="h.kgylb4r4d5ft"><span class="c3">Privacy</span></h4>
            <p class="c1"><span class="c2">You can retract most optional information at any time for the future by deleting the
                    respective data in your profile. With your contact details and date of birth, you can decide on a
                    case-by-case basis whether and to what extent this information </span></p>
            <p class="c1"><span class="c3">Period saved for</span></p>
            <p class="c1"><span class="c2">If you delete the data, it will be removed from the network. We will erase the data
                    in full when you delete your user account.</span></p>
            <h4 class="c0" id="h.l9mt5xsewioc"><span class="c3">Legal basis</span></h4>
            <p class="c1"><span class="c2">The legal basis for this processing of personal data is Article 6 (1) b) of the EU
                    General Data Protection Regulation (GDPR).</span></p>
            <h3 class="c9" id="h.g31zo9dt1wln"><span class="c8 c6">Mandatory information in other applications</span></h3>
            <p class="c1"><span class="c2">In order to provide our services we require certain information from you. On our
                    platform we only need your phone number. </span></p>
            <h4 class="c0" id="h.aot6le9m1dyr"><span class="c3">Category</span></h4>
            <p class="c1"><span class="c2">e.g.</span></p>
            <p class="c1"><span class="c2">First name, last name, phone number. Whether and to what extent your mandatory
                    information is not visible to other users depends on whether and to what extent the respective application
                    is geared towards anonymity. </span></p>
            <h4 class="c0" id="h.opx6bpqwewfj"><span class="c3">Period saved for</span></h4>
            <p class="c1"><span class="c2">We delete this data when you delete your user account.</span></p>
            <h4 class="c0" id="h.2pg23j5fn698"><span class="c3">Legal basis</span></h4>
            <p class="c1"><span class="c2">The legal basis for this processing of personal data is Article 6 (1) b) of the EU
                    General Data Protection Regulation (GDPR).</span></p>
            <h3 class="c9" id="h.20rirp734137"><span class="c8 c6">Optional information in other applications</span></h3>
            <p class="c1"><span class="c2">As well as the mandatory information we require, you can also enter additional
                    information to make as effective use as possible of the respective application.</span></p>
            <h4 class="c0" id="h.g1601d4nvmyj"><span class="c3">Category</span></h4>
            <p class="c1"><span class="c2">e.g.</span></p>
            <p class="c1"><span class="c2">Employer reviews Photo Visibility Whether and to what extent your mandatory
                    information is visible to other users depends on whether and to what extent the respective application is
                    geared towards anonymity. Please refer to the respective application for more information.</span></p>
            <h4 class="c0" id="h.1qdd41ina14h"><span class="c3">Period saved for</span></h4>
            <p class="c1"><span class="c2">If you delete the data, it will be removed from the respective application. We will
                    erase the data in full when you delete your user account. We may also save certain information (e.g.
                    employer reviews) in an anonymous form beyond this point.</span></p>
            <h4 class="c0" id="h.w7zuzh4d533f"><span class="c3">Legal basis</span></h4>
            <p class="c1"><span class="c2">The legal basis for this processing of personal data is Article 6 (1) b) of the EU
                    General Data Protection Regulation (GDPR).</span></p>
            <h3 class="c9" id="h.dfhd2gcoo6nz"><span class="c6 c8">E-mail address(es)</span></h3>
            <p class="c1"><span class="c6">We use the electronic mail address(es) that you have provided to us to send you
                    regular newsletters and/or status e-mails electronically, in addition to advertising for our own related
                    products and services, or surveys for the purpose of our own market research, unless you have objected to
                    this form of usage. The newsletters are a simple and effective way of finding out about new features on
                    avni.club, for example, having interesting contacts suggested to you, or receiving certain personal
                    statistics. We also use the e-mail addresses you provided us with (with the exception of the login e-mail
                    address) to ensure that your profile can be found by other users of the </span><span
                    class="c6">network</span><span class="c2">&nbsp;and to be able to display your profile to these
                    users.</span></p>
            <h4 class="c0" id="h.lc9tnhsdjq8l"><span class="c3">Privacy</span></h4>
            <p class="c1"><span class="c6">You can unsubscribe to newsletters at any time, either in your notification settings
                    in the </span><span class="c6">network</span><span class="c2">&nbsp;or by clicking on the link provided at
                    the end of e-mail newsletters. It&rsquo;s possible to unsubscribe to newsletters and notifications in
                    individual applications too, although there are different ways of going about this.</span></p>
            <h4 class="c0" id="h.wyn5tz8armv5"><span class="c3">Period saved for</span></h4>
            <p class="c1"><span class="c2">If you delete the e-mail address(es), it/they will be removed from the respective
                    application. We will erase the e-mail address(es) in full when you delete your user account.</span></p>
            <h4 class="c0" id="h.1qxmhxnozy0x"><span class="c3">Legal basis</span></h4>
            <p class="c1"><span class="c2">The legal basis for this processing of personal data are Article 6 (1) f)
                    (newsletters) and Article 6 (1) b) of the EU General Data Protection Regulation (GDPR).</span></p>
            <h3 class="c9" id="h.2zptqzuleedi"><span class="c8 c6">Your shared content and on the network</span></h3>
            <p class="c1"><span class="c6">In the </span><span class="c6">network</span><span class="c2">&nbsp;there are various
                    ways of sharing content with others and reacting to content.</span></p>
            <p class="c1"><span class="c2">Category e.g.</span></p>
            <h4 class="c0" id="h.3mutkcqbuu3e"><span class="c3">Shared mail </span></h4>
            <p class="c1"><span class="c6">The access via oauth from the mail provider is only used to automatically read the
                    mails that are permitted under the whitelist providers of the platform. The only automated content is the
                    category of purchase and the quantity of items purchased. Everything else is not stored in any way.</span>
            </p>
            <h4 class="c0" id="h.k8rtac42u2gb"><span class="c3">Period saved for</span></h4>
            <p class="c1"><span class="c2">If you delete the content you shared and the receipts, they will be removed from the
                    network. We will erase them in full or make them anonymous when you delete your user account.</span></p>
            <h4 class="c0" id="h.2hkx9et265j3"><span class="c3">Legal basis</span></h4>
            <p class="c1"><span class="c2">The legal basis for this processing of personal data is Article 6 (1) b) of the EU
                    General Data Protection Regulation (GDPR).</span></p>
            <h3 class="c9" id="h.4c87vzbr1vk5"><span class="c8 c6">Data when providing user feedback</span></h3>
            <p class="c1"><span class="c2">If you provide us with feedback of your own volition or when taking part in one of
                    our surveys, we will process your data in order to conduct the survey, or to evaluate and, where applicable,
                    implement your feedback. In some cases we may ask for separate consent from you to process your data
                    provided as part of a survey.</span></p>
            <h4 class="c0" id="h.cy3g15hk11oz"><span class="c3">Period saved for</span></h4>
            <p class="c1"><span class="c2">We save this data until your user account is deleted, unless you have provided
                    consent to it being processed beyond this point.</span></p>
            <h4 class="c0" id="h.l2rz2juijij"><span class="c3">Legal basis</span></h4>
            <p class="c1"><span class="c2">The legal basis for this processing of personal data are Article 6 (1) a) (separate
                    consent) and Article 6 (1) b) of the EU General Data Protection Regulation (GDPR).</span></p>
            <h4 class="c0" id="h.8xe4oe2fzd2q"><span class="c3">Data when taking part in prize draws</span></h4>
            <p class="c1"><span class="c2">If you choose to enter a prize draw we offer, we will process your data insofar as it
                    is required for the purposes of this draw. In some cases we may ask for separate consent from you to process
                    your data provided as part of the prize draw in other ways.</span></p>
            <h4 class="c0" id="h.wchmivt97hjj"><span class="c3">Period saved for</span></h4>
            <p class="c1"><span class="c2">The data collected as a result of your entering the prize draw will be deleted once
                    the draw has closed, unless you have provided consent to your data being processed beyond this point.</span>
            </p>
            <h4 class="c0" id="h.2rx1hsiii31i"><span class="c3">Legal basis</span></h4>
            <p class="c1"><span class="c2">The legal basis for this processing of personal data is Article 6 (1) a) (separate
                    consent) and b) of the EU General Data Protection Regulation (GDPR).</span></p>
            <h4 class="c0" id="h.bxyo8o9vpp9t"><span class="c3">Data provided when contacting our customer service team</span>
            </h4>
            <p class="c1"><span class="c2">If you contact our customer service team, we process the data you provide so as to be
                    able to handle your query. We may request separate consent to process your data, and only process your data
                    for other purposes in compliance with statutory requirements pursuant to Article 6 (4) of the EU GDPR</span>
            </p>
            <h4 class="c0" id="h.odwqwxm2ctsh"><span class="c3">Period saved for</span></h4>
            <p class="c1"><span class="c2">We only save copies of identification documents you provide us with for verification
                    purposes to the extent required to perform said verification, with copies generally deleted after 30 days at
                    the latest. Data we receive from you when contacting our customer service team is deleted in full 7 years
                    following completion of the respective customer request at the latest.</span></p>
            <h4 class="c0" id="h.2xbmca6sj124"><span class="c3">Legal basis</span></h4>
            <p class="c1"><span class="c2">The legal basis for this processing of personal data are Article 6 (1) a) (separate
                    consent) of the EU General Data Protection Regulation (GDPR), Article 6 (1) b) (processing necessary for the
                    performance of a contract) of the EU General Data Protection Regulation (GDPR), Article 6 (1) f) (processing
                    based on the weighing of interests) of the EU General Data Protection Regulation (GDPR), and Article 6 (1)
                    c) (processing necessary for compliance with a legal obligation) of the EU General Data Protection
                    Regulation (GDPR).</span></p>
            <h2 class="c7" id="h.90c49mrjufio"><span class="c6 c10">3. Information automatically collected through your use of
                    avni.club</span></h2>
            <p class="c1"><span class="c2">Data about you is automatically collated by means of tracking while you visit or make
                    use of the avni.club service. Here you can find out:</span></p>
            <h4 class="c0" id="h.tt8ib3lyt3xl"><span class="c3">How tracking works</span></h4>
            <p class="c1"><span class="c2">Why tracking is used (ensuring security, provision of our service, measurement and
                    optimisation of advertising, and determination of statistics). Data about you is automatically collated by
                    means of tracking whenever you visit or make use of the avni.club service. This takes place with the help of
                    various tracking technologies.</span></p>
            <h4 class="c0" id="h.c0nc9t15jfjc"><span class="c3">How does tracking work?</span></h4>
            <p class="c1"><span class="c2">In the so-called &quot;back end&quot;, at our web server level, we collect the data
                    of logged-in users and other visitors, which we use first and foremost for the provision and preservation of
                    the security of the service avni.club. In the &quot;front end&quot;, on your end device, we, or third
                    parties we use, use cookies, pixels, local storage and similar tracking technologies to collect data about
                    logged-in users and other visitors to enable the provision of our service and the analysis of user
                    behaviour, and for the measurement and optimisation of advertising. In addition, we record your usage
                    behaviour in connection with e-mails we send you, e.g. whether and when you have opened an e-mail, and which
                    links you clicked on. Tracking involves the processing of login data (e.g. date and time of the visit,
                    referrer, IP address, cookie ID, location data, product and version information about the browser or app
                    used, device ID or data) and interaction data (e.g. pages viewed or searches carried out). In order to be
                    able to identify you as a user during your visit to avni.club, we use so-called session cookies. These
                    session cookies are automatically deleted at the end of a session. These cookies are required to be able to
                    use avni.club. When you register you can choose to remain logged in. If you do, a cookie is then saved in
                    the browser of your end device that means that you don&rsquo;t need to log in again for as long as the
                    cookie remains saved. We also conduct a very approximate geo-localisation that informs us of the
                    towns/cities you have been to. In order to do this we use your shorted and anonymised IP address, and your
                    geo-coordinates if you have agreed to this on your mobile end device. We do not save your precise location.
                    We only store information about which cities you are in on a regular basis. Specific addresses or
                    geo-coordinates are not saved.</span></p>
            <h4 class="c0" id="h.ytmnoavl1st"><span class="c3">The purposes of tracking and your opt-out options</span></h4>
            <p class="c1"><span class="c2">Ensuring security One reason for tracking is to ensure and preserve the legitimate
                    interest of the protection of users, the security of user data, avni.club Websites, and the avni.club
                    service. To this end, we save the data we record for up to 90 days in its full form. Only a limited number
                    of our employees with the respective authorisation rights have access to this data. The legal basis for this
                    processing of personal data are Article 6 (1) f) and Article 32 of the EU General Data Protection Regulation
                    (GDPR).</span></p>
            <h4 class="c0" id="h.ekrzormiseas"><span class="c3">Provision of our service</span></h4>
            <p class="c1"><span class="c2">We mainly use tracking and the associated user behaviour analysis to meet our
                    contractual obligations and to perform pre-contractual measures. The legal basis for this processing of
                    personal data is Article 6 (1) b) of the EU General Data Protection Regulation (GDPR). If tracking is not
                    used to meet our contractual obligations or to perform pre-contractual measures, but to provide the service
                    you visit or use, the legal basis for this processing is Article 6 (1) f) of the EU General Data Protection
                    Regulation (GDPR). To this end, we pursue the legitimate interest of providing you with a smooth and
                    user-friendly service.</span></p>
            <p class="c1"><span class="c2">Tracking and analysing user behaviour helps us to review and optimise the
                    effectiveness of our service, and to identify and correct any errors and faults. To this end, we also use
                    several services from third-party providers, such as Google. If we use third-party providers, data may be
                    processed outside of the EU in so-called third countries where the level of data protection applied may not
                    match EU standards. This means there is a risk that authorities in third countries may be able to access
                    third-party provider data, possibly without any means of redress, for monitoring or surveillance purposes.
                    We endeavour at all times to adapt our products and services to the needs of our users. Personalisation is
                    an important aspect here. Analysing data obtained from tracking is necessary to make personalised services
                    available to you in accordance with the contractual purpose of avni.club and to ensure that you gain the
                    great possible benefit from avni.club The implicit feedback that you provide to us through our tracking of
                    your usage of avni.club forms an important part of understanding what content you are more or less
                    interested in, and being able to suggest you to other users as a valuable business contact or potential
                    employee. This implicit feedback is enormously important as the information you provide to us is reflective
                    of the past and the present for the most part, and says little about what interests you have with regard to
                    the future. Interest profiles produced, for example, with the help of click data or searches you have
                    conducted often form a better basis for estimating whether you, for example, are interested in finding a new
                    job and what type of job openings you might be particularly interested in. When you delete your user account
                    we delete or anonymise the personal data we have obtained through tracking in order to provide our
                    service.</span></p>
            <h4 class="c0" id="h.4jptuhdqhymj"><span class="c3">Recommendations</span></h4>
            <p class="c1"><span class="c2">Another important feature resulting from our analyses are recommendations that we
                    tailor to you personally on the basis of your user data. We can, for example, recommend job offers, relevant
                    news, events or interesting contacts to you.</span></p>
            <h4 class="c0" id="h.2nlodrpenpt9"><span class="c3">Personal statistics</span></h4>
            <p class="c1"><span class="c2">In order to be able to identify you as a valuable contact, we may show internal team
                    information about your personal avni.club usage. This might include your level of user activity, the number
                    of things you have in common with a respective profile visitor, events you have attended, the number times
                    you have visited a advertiser&rsquo;s profile, how long you have been a member and what kind of membership
                    you have.</span></p>
            <p class="c1"><span class="c2">You can opt out of tracking by the following third-party providers: Google Analytics
                    We use the tracking tool Google Analytics. Whenever you are logged in as a user on avni.club your data is
                    matched with your user ID during the tracking process. If you are not logged in as a user, tracking is
                    pseudonymous, i.e. we are not able to directly deduce information regarding your identity from information
                    we obtain from tracking. The cookies used for the web analysis contain an ID which allows us to identify
                    your end device&rsquo;s browser. We have closed a data processing agreement with the provider and your IP
                    addresses are anonymised immediately after collection and personal data is processed within the European
                    Union.</span></p>
            <h4 class="c0" id="h.ezhbnbp26hms"><span class="c3">Google Analytics</span></h4>
            <p class="c1"><span class="c2">We use the web analysis tool Google Analytics, developed by Google Inc.
                    (&quot;Google&quot;). Google Analytics uses so-called &quot;cookies&quot;: text files that are saved on your
                    computer and enable the analysis of your usage of a website. The information generated by the cookie about
                    your use of this website (including your IP address) is transferred to a server of Google in the USA and
                    saved there. We use the so-called &quot;_anonymizeIp()&quot; script here, which ensures that your IP address
                    (after identifying the geolocation) is immediately anonymised by Google. We have also closed a data
                    processing agreement with Google. Google will use this information to evaluate your use of the website, to
                    compile reports about website activity for website operators, and to provide other services relating to
                    website and online usage. Google may also pass this information on to third parties if this is required by
                    law or if these third parties process the data on behalf of Google. Google will not link your IP address to
                    any other data about you it has stored.</span></p>
            <p class="c1"><span class="c6">You can prevent the installation of cookies by adjusting the settings in your browser
                    software accordingly; please note though that you may not be able to use all the features of the avni.club
                    Websites in full as a result. Google also offers so-called deactivation tools for some web browsers, where
                    you can opt out of your user behaviour being recorded and analysed. You will find more information and
                    download options for these tools here: </span><span class="c15"><a class="c4"
                        href="https://www.google.com/url?q=http://tools.google.com/dlpage/gaoptout?hl%3Den-GB&amp;sa=D&amp;source=editors&amp;ust=1681624256566564&amp;usg=AOvVaw1Bl3fxvQ4AHoNxdVcrtRoy">http://tools.google.com/dlpage/gaoptout?hl=en-GB</a></span>
            </p>
            <p class="c1"><span class="c2">Third-party providers we use In the following you will find further information about
                    the tracking technologies used and information from providers about data processing.</span></p>
            <p class="c1"><span class="c2">Google, Criteo, AWS</span></p>
            <p class="c1"><span class="c6">Facebook Pixel We use the so-called &quot;Facebook Pixel&quot; developed by Facebook
                    Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA to create &quot;custom audiences&quot;. This serves
                    the purpose of optimising our advertising in the </span><span class="c6">network</span><span
                    class="c6">&nbsp;Facebook, of placing only relevant advertising there, and measuring the success of our
                    Facebook advertising campaigns. The Facebook Pixel makes it possible for Facebook to identify visitors to
                    the avni.club Websites as a target group for the display of ads in the </span><span
                    class="c6">network</span><span class="c2">&nbsp;Facebook.</span></p>
            <p class="c1"><span class="c2">A direct link to the Facebook servers is established via the Facebook Pixel
                    implemented on the avni.club Websites when a user visits the avni.club Websites. The Facebook server is
                    informed here that you have visited the avni.club Websites, and information is also transferred about which
                    specific pages you viewed. In addition, individual information and parameters are transferred that are
                    required for the optimisation of our ads, to increase relevance and measure success. This relates in
                    particular to information about so-called &quot;conversion events&quot; on avni.club (e.g. whether a
                    registration or a purchase was completed).</span></p>
            <p class="c1"><span class="c6">Further information about the collection and usage of data by Facebook and about your
                    corresponding right and options for protecting your privacy can be found in the Facebook Data Policy at
                </span><span class="c15"><a class="c4"
                        href="https://www.google.com/url?q=https://www.facebook.com/about/privacy/&amp;sa=D&amp;source=editors&amp;ust=1681624256567502&amp;usg=AOvVaw3sh9UU6-K09mF1u-PtXYnA">https://www.facebook.com/about/privacy/</a></span><span
                    class="c2">.</span></p>
            <p class="c1"><span class="c6">Twitter We use Twitter, a service provided by Twitter Inc., to track conversion and
                    to post target-group-based online advertisements. To do so, we implemented a Twitter tag on our website.
                    When you visit our websites, this tag creates a direct link to the Twitter servers so that Twitter knows you
                    visited our websites and whether you performed any requests or similar. Twitter assigns this information to
                    your personal Twitter user account. We are then able to serve (remarketing) advertisements based on your
                    previous page views and activity. The data Twitter processes in this regard does not allow us to identify
                    you. These pseudonyms are also not linked to any of your other personal data. To learn about your rights and
                    privacy options, and for more information about how Twitter collects and uses data, visit the Twitter
                    Privacy Policy: </span><span class="c15"><a class="c4"
                        href="https://www.google.com/url?q=https://twitter.com/privacy?lang%3Dde&amp;sa=D&amp;source=editors&amp;ust=1681624256567856&amp;usg=AOvVaw06SKvxZk9LJ1ijaetJfInx">https://twitter.com/privacy?lang=de</a></span>
            </p>
            <p class="c1"><span class="c2">Opting out of tracking for the measurement and optimisation of advertising in our
                    applications Tracking settings for individual avni.club applications The links below allow you to select
                    your tracking settings for individual applications. Please note that tracking opt-outs are handled by way of
                    a cookie set on your end device. Should you delete this cookie or use a different end device or browser,
                    you&#39;ll need to opt out of tracking again. When using mobile apps, you need to opt out in the respective
                    app settings.</span></p>
            <p class="c1"><span class="c2">Opt-In Tracking Settings Your changes only apply in the browser you&rsquo;re
                    currently using.</span></p>
            <h4 class="c0" id="h.dxwksjub01ic"><span class="c3">Tracking on avni.club</span></h4>
            <p class="c1"><span class="c2">Adapt Opt-In</span></p>
            <h4 class="c0" id="h.v4ilk1yogcq5"><span class="c3">Erasure of previously saved cookies</span></h4>
            <p class="c1"><span class="c2">We do not erase cookies saved on your end device if you withdraw your consent. By
                    withdrawing your consent in the tracking settings for individual avni.club applications, you only opt out of
                    tracking for the measurement and optimisation of advertising in the respective applications.</span></p>
            <p class="c1"><span class="c2">If you visit third-party sites that are not covered by these tracking settings, those
                    third parties will still be able to access cookies saved in your end device. If you&#39;d like to prevent
                    this, please erase the third-party provider cookies from your end device. But please don&#39;t delete the
                    &quot;userConsent&quot; cookies we set as otherwise we won&#39;t be able to determine whether you opted in
                    or out of tracking for the measurement and optimisation of advertising in the respective avni.club
                    applications. If you delete this cookie, you&#39;ll then be prompted to opt in or out of tracking for the
                    measurement and optimisation of advertising when you next visit our application.</span></p>
            <p class="c1"><span class="c2">The process required to delete cookies and set what information your browser saves
                    depends on the browser you use. Please refer to the help section of your browser for further details.</span>
            </p>
            <p class="c1"><span class="c2">Advertising ID settings for iOS and Android: ID settings (e.g. ad ID) for a certain
                    iOS or Android device are provided in your iOS or Android settings.</span></p>
            <p class="c1"><span class="c2">Tracking of content and your opt-out options Tracking in embedded third-party content
                    You will also find content produced by external providers on avni.club applications. This content is
                    integrated into the avni.club environment you&rsquo;re familiar with from external websites. When it comes
                    to this external content we have no control over the type of tracking used.</span></p>
            <p class="c1"><span class="c2">As soon as you begin using any of the external content you will leave the avni.club
                    environment and be automatically forwarded directly to the page of the provider. Please note: This
                    doesn&rsquo;t necessarily result in less tracking &ndash; it is only means that the tracking does not take
                    place on avni.club.</span></p>
            <p class="c1"><span class="c2">Note for avni.club members: Please visit your settings to adjust your tracking
                    settings for all devices.</span></p>
            <h2 class="c7 c14" id="h.vtbb1idk206"><span class="c10 c6"></span></h2>
            <h2 class="c7 c14" id="h.a6wu358f149x"><span class="c10 c6"></span></h2>
            <h2 class="c7" id="h.vz181sbd5szj"><span class="c10 c6">4. Information we obtain about you from other sources</span>
            </h2>
            <p class="c1"><span class="c2">Some information about you that we process does not come directly from you. This
                    might be the case, for example, if a user shares this information with us or we obtain it from other
                    sources.</span></p>
            <p class="c1"><span class="c2">We also process data that we haven&rsquo;t obtained directly from you. This occurs
                    whenever a user provides us with information or we collect information from other sources. In such cases we
                    process the respective data within the scope of fulfilment of our contractual obligations towards the
                    respective user and/or to safeguard our legitimate interests, while giving due consideration to your
                    interests.</span></p>
            <p class="c1"><span class="c2">Data from address book or list uploads This includes data which can be extracted from
                    an address book or list (e.g. smartphone address book, e-mail address book or CSV file), e.g.:</span></p>
            <p class="c1"><span class="c2">First and last name E-mail addresses Phone numbers Place: City and country Twitter
                    and Facebook handles Intended purpose We provide users with various address book and list upload features to
                    enable them to expand their reach on avni.club or to invite non-users. If we permanently save the data
                    uploaded by way of an aforementioned feature, we make appropriate functions available to users to manage the
                    data and, in particular, to delete this data. Users have the right and the option to cease the processing of
                    personal data at any time.</span></p>
            <p class="c1"><span class="c2">Source of the data Users who already have access to your data can upload this
                    information to avni.club.</span></p>
            <p class="c1"><span class="c2">Visibility No third parties have access to the uploaded data.</span></p>
            <p class="c1"><span class="c2">Period saved for and objection If the respective upload feature is only used for a
                    single user search, categorisation or grouping, the data uploaded will be deleted immediately afterwards. If
                    the respective upload feature requires permanent storage of the uploaded data, we save this data until the
                    respective user either deletes this data themselves or their user account is deleted. The invited non-users
                    can select an opt-out link in the invitation e-mail to object to the sending of further invitations or
                    invitation reminders to their respective e-mail address.</span></p>
            <p class="c1"><span class="c2">Legal basis The legal basis for this processing of personal data is Article 6 (1) f)
                    of the EU General Data Protection Regulation (GDPR) .</span></p>
            <p class="c1"><span class="c2">Events data This includes the following data, which users provide us with to register
                    attendees for an event at the organiser&#39;s request:</span></p>
            <p class="c1"><span class="c2">Salutation, title, first name and last name E-mail address Intended purpose Users who
                    redeem vouchers via avni.club can also stake their token.</span></p>
            <p class="c1"><span class="c2">Period saved for and objection We save this data until the respective user either
                    deletes this data themselves or their user account is deleted. You have the right to file an objection at
                    any time to the processing of your personal data pursuant to Article 6 (1) f) of the EU General Data
                    Protection Regulation (GDPR). Please use our contact form to file your objection.</span></p>
            <p class="c1"><span class="c2">Legal basis The legal basis for this processing of personal data is Article 6 (1) f)
                    of the EU General Data Protection Regulation (GDPR).</span></p>
            <h2 class="c7" id="h.2ds4m1ol5v0i"><span class="c10 c6">5. Who may receive information about you?</span></h2>
            <p class="c1"><span class="c2">You can find out here who we disclose data to, what purpose this serves, and how you
                    can customise your privacy settings on avni.club. By the way, we only ever pass your personal data on to
                    third parties when:</span></p>
            <p class="c1"><span class="c2">This is required for us to fulfil our business purposes, e.g. when we make your
                    profile data accessible to our system You have granted your consent (e.g. for use of an external targeting)
                    We are obliged to do so on legal grounds, by court order, or at the request of another official authority.
                    We don&rsquo;t pass your personal data on to third parties, but we do when we are obliged to on legal
                    grounds, by court order, or at the request of another official authority. In cases where we work together
                    with external service providers for our data processing (e.g. in software development), this is usually
                    carried out on an order processing basis, whereby we remain responsible for data processing. We review each
                    of these service providers beforehand with regard to the measures they have undertaken to ensure data
                    protection and data security, thereby safeguarding the contractual provisions as stipulated by law for the
                    protection of the personal data.</span></p>
            <p class="c1"><span class="c6">People you want to invite to the </span><span class="c6">network</span><span
                    class="c2">&nbsp;or other avni.club application As a user, you can invite other people to join and use
                    avni.club. We process the data recorded here solely for this purpose. After a certain period we send out a
                    reminder e-mail (&quot;automatic reminder&quot;) on your behalf to the person you invited. You can prevent
                    this automatic reminder from being sent by deleting the invitation in your settings. You also have the
                    option of sending your own reminder e-mails manually. We save the e-mail addresses that invitations are sent
                    to in encrypted form. This encryption is temporarily suspended to display the e-mail addresses in your
                    account. You can delete this data in your account at any time. Every person you invite has the option to
                    object to invitations being sent to their e-mail address from that point onwards. </span></p>
            <p class="c1"><span class="c2">The aim of integrating external applications is to make avni.club more appealing and
                    useful to users. API stands for Application Programming Interface, meaning that the avni.club API is an
                    interface provided by us that allows API partners to integrate one or more applications on avni.club
                    provided they adhere to our contractual terms. Users wishing to use an API Partner application must grant
                    the application access to data; an API application of an API Partner can therefore only ever access data
                    with the express allowance of the user. Depending on the application in question, a separate declaration of
                    consent for data processing may be required. When API Partners process avni.club user data, this is
                    performed on behalf of the user that activated the application. Every API Partner application that accesses
                    the data and content of users requires our prior consent. avni.club has therefore compiled a list of
                    criteria in order to ensure that the data of users is safe and secure. If an application involves personal
                    data being processed in countries outside of the European Union, we will stipulate the legal privacy
                    provisions required in order to ensure that API Partners maintain an appropriate level of protection for
                    personal data.</span></p>
            <p class="c1"><span class="c2">Payment service providers, receivables management providers, debt collection
                    providers If you use features on avni.club that you pay for, we process your payment details such as credit
                    card and bank details for the purpose of payment processing and invoicing in accordance with the method of
                    payment you choose. Your payment details will be transferred, to the extent needed, along with other
                    required data for processing the transaction, including invoicing and debt collection where applicable, to
                    providers such as credit card institutes, payment providers and debt collection providers, and processed
                    there, or the data will be collected directly by these providers. Your payment details are saved to enable
                    payment processing and invoicing for the automatic extension of your user term.</span></p>
            <p class="c1"><span class="c2">Third countries Data may be transferred to third countries. This however shall always
                    take place in compliance with the admissibility requirements as regulated by law. In particular, we make
                    certain data available to other users or third parties worldwide to fulfill our contractual obligations.
                    This does not require either an adequacy decision pursuant to Article 45 of the EU GDPR or appropriate
                    safeguards pursuant to Article 46 of the EU GDPR. In cases where the transfer of data to a third country
                    does not serve the fulfilment of our contractual obligations, we have not received consent from you, the
                    transfer is not necessary for the establishment, exercise or defence of legal claims, and no other exemption
                    clause applies, we shall only transfer your data to a third country when an adequacy decision pursuant to
                    Article 45 of the EU GDPR or appropriate safeguards pursuant to Article 46 of the EU GDPR are in place. In
                    general, we provide for appropriate safeguards by closing standard data protection clauses as decreed by the
                    European Commission with the recipient body pursuant to Article 46 of the EU GDPR, as well as an adequate
                    level of data protection. You can obtain copies of the EU standard data protection clauses on the Website of
                    the European Commission.</span></p>
            <p class="c1"><span class="c2">Other categories of recipients Public authorities and courts</span></p>
            <p class="c1"><span class="c2">Technical service providers</span></p>
            <p class="c1"><span class="c2">Hosting providers</span></p>
            <p class="c1"><span class="c2">Ad server providers</span></p>
            <p class="c1"><span class="c2">E-mail sending providers</span></p>
            <p class="c1"><span class="c2">E-mail marketing providers</span></p>
            <p class="c1"><span class="c2">Marketing automation software providers</span></p>
            <p class="c1"><span class="c2">CRM providers</span></p>
            <p class="c1"><span class="c2">Software developers</span></p>
            <p class="c1"><span class="c2">Agencies e.g. to carry out prize draws</span></p>
            <p class="c1"><span class="c2">Postal providers (letter shops)</span></p>
            <p class="c1"><span class="c2">Market research and survey tool providers</span></p>
            <p class="c1"><span class="c2">Remarketing/Retargeting providers</span></p>
            <p class="c1"><span class="c2">Sales service providers and call centres</span></p>
            <p class="c1"><span class="c2">Service providers for advertising campaigns and the display of ads</span></p>
            <p class="c1"><span class="c2">Providers of tools for website use analysis</span></p>
            <p class="c1"><span class="c2">Cooperation partners</span></p>
            <h3 class="c9" id="h.bliivg9f5vfp"><span class="c8 c6">What rights can you exercise?</span></h3>
            <p class="c1"><span class="c2">You can find detailed information here about your various rights:</span></p>
            <p class="c1"><span class="c2">Your right to object Your right of access Your right to erasure Other rights You have
                    legal rights available to you with regard to data access, rectification, erasure, restriction of processing
                    and objection to processing, as well as the right to data portability, amongst others. In addition, you can
                    withdraw any consent you may have given to data processing at any time, and have the right to lodge a
                    complaint with a supervisory authority.</span></p>
            <h4 class="c0" id="h.1dhvqepsj7li"><span class="c3">Right to object</span></h4>
            <p class="c1"><span class="c2">General You have the right to object at any time to the processing of personal data
                    concerning you, pursuant to Article 6 (1) f) of the EU GDPR. This shall also apply to any profiling carried
                    out on the basis of these provisions. Please use our contact form to submit any objection.</span></p>
            <h4 class="c0" id="h.guajauy6ircj"><span class="c3">Direct marketing / newsletters</span></h4>
            <p class="c1"><span class="c2">If we process your personal data for direct marketing purposes, you have the right to
                    object at any time to the processing of personal data concerning you for such marketing. This includes
                    profiling to the extent that it is related to such direct marketing. You can unsubscribe to our newsletters
                    at any time in your notifications settings on avni.club, or in your e-mails by clicking on the link provided
                    at the end of the respective newsletter, without incurring any costs other than the transmission costs in
                    accordance with the basic tariffs. </span></p>
            <h4 class="c0" id="h.tuo9evvr30n7"><span class="c3">Right of access</span></h4>
            <p class="c1"><span class="c2">You have the right to demand confirmation as to whether we process your personal
                    data. If this is the case you are entitled to receive information about this personal data.</span></p>
            <p class="c1"><span class="c6">As a user of the </span><span class="c6">network</span><span class="c6">&nbsp;you can
                    request this information at </span><span class="c15"><a class="c4"
                        href="https://www.google.com/url?q=https://www.kollektor.io.com/settings/privacy/data/disclosure&amp;sa=D&amp;source=editors&amp;ust=1681624256573580&amp;usg=AOvVaw2EmlXYrF8uliJBXCrkRSin">https://www.avni.club.com/settings/privacy/data/disclosure</a></span><span
                    class="c2">.</span></p>
            <p class="c1"><span class="c2">You also have a right to access the following information:</span></p>
            <p class="c1"><span class="c2">The reasons for the data processing The categories of personal data that are
                    processed If possible the planned period of time that the personal data will be saved for, or if this
                    isn&#39;t possible then the criteria used to determination this time period The existence of a right to
                    rectification or erasure of your personal data and/or the right to restriction of processing by the
                    controller, or a right to object to this processing The existence of a right to lodge a complaint with a
                    supervisory authority All available information about the origin of the personal data if the data was not
                    obtained from the person in question The existence of automated decision-making including profiling pursuant
                    to Article 22 (1) and (4) of the EU GDPR and &ndash; at least in some cases &ndash; insightful information
                    about the logic involved plus the scope and aims of the repercussions of this kind of processing for the
                    person affected If personal data is passed on to a third country or an international organisation, you have
                    the right as the person affected to be informed about the respective guarantees (pursuant to Article 46 of
                    the EU GDPR) regarding this sharing of data.</span></p>
            <h4 class="c0" id="h.hgsq0h94hmov"><span class="c3">Right to rectification</span></h4>
            <p class="c1"><span class="c2">You have the right to demand that we correct any incorrect personal data concerning
                    you with immediate effect. Taking the purposes of processing into account, you have the right to demand the
                    completion of any incomplete personal data &ndash; including by means of a supplementary explanation.</span>
            </p>
            <h4 class="c0" id="h.r0vk01lwshcm"><span class="c3">Right to erasure</span></h4>
            <p class="c1"><span class="c2">You are entitled to demand that we delete your personal data without delay if one of
                    the following applies: The personal data is no longer required for the purposes for which it was collected
                    or processed in some other way. You withdraw your consent that the processing was based on pursuant to
                    Article 6 (1) a) or Article 9 (2) a) of the EU GDPR , and there are now no valid legal grounds for
                    processing. You submit an objection to the processing of your data pursuant to Article 21 (1) of the EU GDPR
                    and there are no overriding justifiable grounds for the processing, or you submit an objection to the
                    processing of your data pursuant to Article 21 (2) of the EU GDPR . The personal data was processed
                    unlawfully. The deletion of the personal data is required to fulfil a legal obligation in accordance with EU
                    law or the law of individual member states. The personal data was recorded in relation to the offer of
                    information society services directly to a child, pursuant to Article 8 (1) of the EU GDPR. Once you have
                    made your request we are obliged to delete the data with immediate effect. The lawfulness of the data
                    processing for the period between the consent and the withdrawal of this consent shall remain
                    unaffected.</span></p>
            <h4 class="c0" id="h.fjglowj02xm5"><span class="c3">Right to restriction of processing</span></h4>
            <p class="c1"><span class="c2">You are entitled to demand a restriction to the processing of your personal data in
                    cases where you dispute the correctness of the personal data, for a period of time that allows the
                    controller to review the correctness of that personal data. If the processing is unlawful and you reject the
                    erasure of the personal data in favour of demanding a restriction to the use of the personal data we will
                    fulfil this request. Processing will also be restricted if we no longer require your personal data for the
                    purposes of processing but do require it for the establishment, exercise or defence of legal claims. Or if
                    you have objected to processing pursuant to Article 21 (1) of the EU GDPR, for as long as is not yet
                    ascertained whether the justifiable grounds of the controller outweigh your grounds. We will inform you in
                    advance should the restriction be revoked.</span></p>
            <h4 class="c0" id="h.lneqhnguz545"><span class="c3">Right to data portability</span></h4>
            <p class="c1"><span class="c2">You have the right to receive personal data concerning you that you have made
                    available to us in a structured, conventional and machine-readable format, and you also have the right to
                    transfer this data to another controller without being impeded by us to whom the personal data has been made
                    available. The condition is that a) processing is based on consent pursuant to Article 6 (1) a) of the EU
                    GDPR or Article 9 (2) a) of the EU GDPR or on a contract pursuant to Article 6 (1) b) of the EU GDPR, and b)
                    the processing is conducted with the help of automated processes. When exercising your right to data
                    portability you have the right to demand that the personal data is transferred directly from us to another
                    controlling body, provided this is technically viable.</span></p>
            <p class="c1"><span class="c2">Right to withdraw consent If processing is subject to your consent you have the right
                    to withdraw this consent at any time. This shall not affect the lawfulness of any processing that took place
                    with your consent up until its withdrawal.</span></p>
            <h4 class="c0" id="h.8gw1evx1q0kj"><span class="c3">Right to lodge a complaint</span></h4>
            <p class="c1"><span class="c2">The supervisory authority responsible for our company is:
                    dataprotection@avni.club</span></p>
            <p class="c1"><span class="c2">If you feel that the processing of your personal data infringes upon the EU GDPR, you
                    have the right to lodge a complaint with the supervisory authority in your regular place of residence, your
                    place of work, or alleged place of infringement. Further information about the complaints procedure is
                    available in Article 77 of the EU GDPR.</span></p>
            <h2 class="c7" id="h.zh3jkjc4njes"><span class="c10 c6">Terms used in our Privacy Policy</span></h2>
            <p class="c1"><span class="c6">avni.club</span><span class="c2">: The service avni.club and the applications
                    belonging to the service avni.club.</span></p>
            <p class="c1"><span class="c2">avni.club Websites: All websites, subdomains, aliases, mobile applications,
                    background applications, web services and embedding in third-party websites where the service avni.club is
                    available.</span></p>
            <p class="c1"><span class="c2">EU GDPR: The Regulation (EU) 2016/679 of the European Parliament and the Council
                    dated 27 April 2016 on the protection of individuals with regard to the processing of personal data, on the
                    free movement of such data, and on the repeal of the EU Data Protection Directive 95/46/EC.</span></p>
            <p class="c1"><span class="c2">Personal data: Pursuant to Article 4 (1) of the EU General Data Protection Regulation
                    (GDPR), any information relating to an identified or identifiable natural person; an identifiable natural
                    person is one who can be identified, directly or indirectly, in particular by reference to an identifier
                    such as a name, an identification number, location data, an online identifier or to one or more factors
                    specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that
                    natural person.</span></p>
            <p class="c1"><span class="c6">network</span><span class="c2">: The contact and communication forums belonging to
                    the applications of the service avni.club.</span></p>
            <p class="c1"><span class="c6">Profile: The page on the avni.club websites where the personal data made available by
                    the user is displayed in the </span><span class="c6">network</span><span class="c2">.</span></p>
            <p class="c1"><span class="c2">Cookies: Small files that enable us to store specific information related to you, the
                    user, on your end device. You can edit the settings of your browser to prevent cookies from being
                    saved.</span></p>
            <p class="c1"><span class="c2">Pixel: An image file or link to an image file that is added to the website code but
                    not sent to your end device (e.g. PC, smartphone, etc.). Pixels are usually used in conjunction with
                    cookies.</span></p>
            <p class="c1"><span class="c2">Profiling: Pursuant to Article 4 (4) of the EU General Data Protection Regulation
                    (GDPR), any form of automated processing of personal data consisting of the use of personal data to evaluate
                    certain personal aspects relating to a natural person, in particular to analyse or predict aspects
                    concerning that natural person&rsquo;s performance at work, economic situation, health, personal
                    preferences, interests, reliability, behaviour, location or movements.</span></p>
            <p class="c1"><span class="c2">Newsletter: Newsletters or status e-mails and advertising for avni.club&rsquo;s own
                    similar products and services, or surveys for the purpose of avni.club&rsquo;s own market research.</span>
            </p>
            <p class="c1"><span class="c2">Third country: A country outside of the European Union and United States of America
                    and India.</span></p>
            <p class="c13"><span class="c5"></span></p>
            <p class="c13"><span class="c5"></span></p>
        </body>
        
        </html>
      `}} />
    </div>
  );
};

export default ExistingPage

