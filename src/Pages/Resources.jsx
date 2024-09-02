import React, { useEffect } from 'react';
import { Link, Route, BrowserRouter as  Router, Routes } from "react-router-dom";
// import '../Pages/./HomePage.css
import '../Pages/./Resources.css'
import VideoPlayer from './VideoPlayer';
const Resources= () =>{
    return(
        <body>
           
         <div className="search-bar">
            <svg width="360" height="43" viewBox="0 0 360 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1168_1862)">
<rect width="360" height="43" rx="21.5" fill="#ECE6F0"/>
<g clip-path="url(#clip1_1168_1862)">
<path d="M19 27.5V25.5H37V27.5H19ZM19 22.5V20.5H37V22.5H19ZM19 17.5V15.5H37V17.5H19Z" fill="#49454F"/>
</g>
<path d="M63.3828 23.625C63.3828 23.3594 63.3411 23.125 63.2578 22.9219C63.1797 22.7135 63.0391 22.526 62.8359 22.3594C62.638 22.1927 62.362 22.0339 62.0078 21.8828C61.6589 21.7318 61.2161 21.5781 60.6797 21.4219C60.1172 21.2552 59.6094 21.0703 59.1562 20.8672C58.7031 20.6589 58.3151 20.4219 57.9922 20.1562C57.6693 19.8906 57.4219 19.5859 57.25 19.2422C57.0781 18.8984 56.9922 18.5052 56.9922 18.0625C56.9922 17.6198 57.0833 17.2109 57.2656 16.8359C57.4479 16.4609 57.7083 16.1354 58.0469 15.8594C58.3906 15.5781 58.7995 15.3594 59.2734 15.2031C59.7474 15.0469 60.276 14.9688 60.8594 14.9688C61.7135 14.9688 62.4375 15.1328 63.0312 15.4609C63.6302 15.7839 64.0859 16.2083 64.3984 16.7344C64.7109 17.2552 64.8672 17.8125 64.8672 18.4062H63.3672C63.3672 17.9792 63.276 17.6016 63.0938 17.2734C62.9115 16.9401 62.6354 16.6797 62.2656 16.4922C61.8958 16.2995 61.4271 16.2031 60.8594 16.2031C60.3229 16.2031 59.8802 16.2839 59.5312 16.4453C59.1823 16.6068 58.9219 16.8255 58.75 17.1016C58.5833 17.3776 58.5 17.6927 58.5 18.0469C58.5 18.2865 58.5495 18.5052 58.6484 18.7031C58.7526 18.8958 58.9115 19.0755 59.125 19.2422C59.3438 19.4089 59.6198 19.5625 59.9531 19.7031C60.2917 19.8438 60.6953 19.9792 61.1641 20.1094C61.8099 20.2917 62.3672 20.4948 62.8359 20.7188C63.3047 20.9427 63.6901 21.1953 63.9922 21.4766C64.2995 21.7526 64.526 22.0677 64.6719 22.4219C64.8229 22.7708 64.8984 23.1667 64.8984 23.6094C64.8984 24.0729 64.8047 24.4922 64.6172 24.8672C64.4297 25.2422 64.1615 25.5625 63.8125 25.8281C63.4635 26.0938 63.0443 26.2995 62.5547 26.4453C62.0703 26.5859 61.5286 26.6562 60.9297 26.6562C60.4036 26.6562 59.8854 26.5833 59.375 26.4375C58.8698 26.2917 58.4089 26.0729 57.9922 25.7812C57.5807 25.4896 57.25 25.1302 57 24.7031C56.7552 24.2708 56.6328 23.7708 56.6328 23.2031H58.1328C58.1328 23.5938 58.2083 23.9297 58.3594 24.2109C58.5104 24.487 58.7161 24.7161 58.9766 24.8984C59.2422 25.0807 59.5417 25.2161 59.875 25.3047C60.2135 25.388 60.5651 25.4297 60.9297 25.4297C61.4557 25.4297 61.901 25.3568 62.2656 25.2109C62.6302 25.0651 62.9062 24.8568 63.0938 24.5859C63.2865 24.3151 63.3828 23.9948 63.3828 23.625ZM70.6094 26.6562C70.0208 26.6562 69.487 26.5573 69.0078 26.3594C68.5339 26.1562 68.125 25.8724 67.7812 25.5078C67.4427 25.1432 67.1823 24.7109 67 24.2109C66.8177 23.7109 66.7266 23.1641 66.7266 22.5703V22.2422C66.7266 21.5547 66.8281 20.9427 67.0312 20.4062C67.2344 19.8646 67.5104 19.4062 67.8594 19.0312C68.2083 18.6562 68.6042 18.3724 69.0469 18.1797C69.4896 17.987 69.9479 17.8906 70.4219 17.8906C71.026 17.8906 71.5469 17.9948 71.9844 18.2031C72.4271 18.4115 72.7891 18.7031 73.0703 19.0781C73.3516 19.4479 73.5599 19.8854 73.6953 20.3906C73.8307 20.8906 73.8984 21.4375 73.8984 22.0312V22.6797H67.5859V21.5H72.4531V21.3906C72.4323 21.0156 72.3542 20.651 72.2188 20.2969C72.0885 19.9427 71.8802 19.651 71.5938 19.4219C71.3073 19.1927 70.9167 19.0781 70.4219 19.0781C70.0938 19.0781 69.7917 19.1484 69.5156 19.2891C69.2396 19.4245 69.0026 19.6276 68.8047 19.8984C68.6068 20.1693 68.4531 20.5 68.3438 20.8906C68.2344 21.2812 68.1797 21.7318 68.1797 22.2422V22.5703C68.1797 22.9714 68.2344 23.349 68.3438 23.7031C68.4583 24.0521 68.6224 24.3594 68.8359 24.625C69.0547 24.8906 69.3177 25.099 69.625 25.25C69.9375 25.401 70.2917 25.4766 70.6875 25.4766C71.1979 25.4766 71.6302 25.3724 71.9844 25.1641C72.3385 24.9557 72.6484 24.6771 72.9141 24.3281L73.7891 25.0234C73.6068 25.2995 73.375 25.5625 73.0938 25.8125C72.8125 26.0625 72.4661 26.2656 72.0547 26.4219C71.6484 26.5781 71.1667 26.6562 70.6094 26.6562ZM81.0703 25.0547V20.7031C81.0703 20.3698 81.0026 20.0807 80.8672 19.8359C80.737 19.5859 80.5391 19.3932 80.2734 19.2578C80.0078 19.1224 79.6797 19.0547 79.2891 19.0547C78.9245 19.0547 78.6042 19.1172 78.3281 19.2422C78.0573 19.3672 77.8438 19.5312 77.6875 19.7344C77.5365 19.9375 77.4609 20.1562 77.4609 20.3906H76.0156C76.0156 20.0885 76.0938 19.7891 76.25 19.4922C76.4062 19.1953 76.6302 18.9271 76.9219 18.6875C77.2188 18.4427 77.5729 18.25 77.9844 18.1094C78.401 17.9635 78.8646 17.8906 79.375 17.8906C79.9896 17.8906 80.5312 17.9948 81 18.2031C81.474 18.4115 81.8438 18.7266 82.1094 19.1484C82.3802 19.5651 82.5156 20.0885 82.5156 20.7188V24.6562C82.5156 24.9375 82.5391 25.237 82.5859 25.5547C82.638 25.8724 82.7135 26.1458 82.8125 26.375V26.5H81.3047C81.2318 26.3333 81.1745 26.112 81.1328 25.8359C81.0911 25.5547 81.0703 25.2943 81.0703 25.0547ZM81.3203 21.375L81.3359 22.3906H79.875C79.4635 22.3906 79.0964 22.4245 78.7734 22.4922C78.4505 22.5547 78.1797 22.651 77.9609 22.7812C77.7422 22.9115 77.5755 23.0755 77.4609 23.2734C77.3464 23.4661 77.2891 23.6927 77.2891 23.9531C77.2891 24.2188 77.349 24.4609 77.4688 24.6797C77.5885 24.8984 77.7682 25.0729 78.0078 25.2031C78.2526 25.3281 78.5521 25.3906 78.9062 25.3906C79.349 25.3906 79.7396 25.2969 80.0781 25.1094C80.4167 24.9219 80.6849 24.6927 80.8828 24.4219C81.0859 24.151 81.1953 23.888 81.2109 23.6328L81.8281 24.3281C81.7917 24.5469 81.6927 24.7891 81.5312 25.0547C81.3698 25.3203 81.1536 25.5755 80.8828 25.8203C80.6172 26.0599 80.2995 26.2604 79.9297 26.4219C79.5651 26.5781 79.1536 26.6562 78.6953 26.6562C78.1224 26.6562 77.6198 26.5443 77.1875 26.3203C76.7604 26.0964 76.4271 25.7969 76.1875 25.4219C75.9531 25.0417 75.8359 24.6172 75.8359 24.1484C75.8359 23.6953 75.9245 23.2969 76.1016 22.9531C76.2786 22.6042 76.5339 22.3151 76.8672 22.0859C77.2005 21.8516 77.6016 21.6745 78.0703 21.5547C78.5391 21.4349 79.0625 21.375 79.6406 21.375H81.3203ZM86.7344 19.375V26.5H85.2891V18.0469H86.6953L86.7344 19.375ZM89.375 18L89.3672 19.3438C89.2474 19.3177 89.1328 19.3021 89.0234 19.2969C88.9193 19.2865 88.7995 19.2812 88.6641 19.2812C88.3307 19.2812 88.0365 19.3333 87.7812 19.4375C87.526 19.5417 87.3099 19.6875 87.1328 19.875C86.9557 20.0625 86.8151 20.2865 86.7109 20.5469C86.612 20.8021 86.5469 21.0833 86.5156 21.3906L86.1094 21.625C86.1094 21.1146 86.1589 20.6354 86.2578 20.1875C86.362 19.7396 86.5208 19.3438 86.7344 19C86.9479 18.651 87.2188 18.3802 87.5469 18.1875C87.8802 17.9896 88.276 17.8906 88.7344 17.8906C88.8385 17.8906 88.9583 17.9036 89.0938 17.9297C89.2292 17.9505 89.3229 17.974 89.375 18ZM94.4375 25.4688C94.7812 25.4688 95.099 25.3984 95.3906 25.2578C95.6823 25.1172 95.9219 24.9245 96.1094 24.6797C96.2969 24.4297 96.4036 24.1458 96.4297 23.8281H97.8047C97.7786 24.3281 97.6094 24.7943 97.2969 25.2266C96.9896 25.6536 96.5859 26 96.0859 26.2656C95.5859 26.526 95.0365 26.6562 94.4375 26.6562C93.8021 26.6562 93.2474 26.5443 92.7734 26.3203C92.3047 26.0964 91.9141 25.7891 91.6016 25.3984C91.2943 25.0078 91.0625 24.5599 90.9062 24.0547C90.7552 23.5443 90.6797 23.0052 90.6797 22.4375V22.1094C90.6797 21.5417 90.7552 21.0052 90.9062 20.5C91.0625 19.9896 91.2943 19.5391 91.6016 19.1484C91.9141 18.7578 92.3047 18.4505 92.7734 18.2266C93.2474 18.0026 93.8021 17.8906 94.4375 17.8906C95.099 17.8906 95.6771 18.026 96.1719 18.2969C96.6667 18.5625 97.0547 18.9271 97.3359 19.3906C97.6224 19.849 97.7786 20.3698 97.8047 20.9531H96.4297C96.4036 20.6042 96.3047 20.2891 96.1328 20.0078C95.9661 19.7266 95.737 19.5026 95.4453 19.3359C95.1589 19.1641 94.8229 19.0781 94.4375 19.0781C93.9948 19.0781 93.6224 19.1667 93.3203 19.3438C93.0234 19.5156 92.7865 19.75 92.6094 20.0469C92.4375 20.3385 92.3125 20.6641 92.2344 21.0234C92.1615 21.3776 92.125 21.7396 92.125 22.1094V22.4375C92.125 22.8073 92.1615 23.1719 92.2344 23.5312C92.3073 23.8906 92.4297 24.2161 92.6016 24.5078C92.7786 24.7995 93.0156 25.0339 93.3125 25.2109C93.6146 25.3828 93.9896 25.4688 94.4375 25.4688ZM101.375 14.5V26.5H99.9297V14.5H101.375ZM101.031 21.9531L100.43 21.9297C100.435 21.3516 100.521 20.8177 100.688 20.3281C100.854 19.8333 101.089 19.4036 101.391 19.0391C101.693 18.6745 102.052 18.3932 102.469 18.1953C102.891 17.9922 103.357 17.8906 103.867 17.8906C104.284 17.8906 104.659 17.9479 104.992 18.0625C105.326 18.1719 105.609 18.349 105.844 18.5938C106.083 18.8385 106.266 19.1562 106.391 19.5469C106.516 19.9323 106.578 20.4036 106.578 20.9609V26.5H105.125V20.9453C105.125 20.5026 105.06 20.1484 104.93 19.8828C104.799 19.612 104.609 19.4167 104.359 19.2969C104.109 19.1719 103.802 19.1094 103.438 19.1094C103.078 19.1094 102.75 19.1849 102.453 19.3359C102.161 19.487 101.909 19.6953 101.695 19.9609C101.487 20.2266 101.323 20.5312 101.203 20.875C101.089 21.2135 101.031 21.5729 101.031 21.9531Z" fill="#49454F"/>
<g clip-path="url(#clip2_1168_1862)">
<path d="M339.6 30.5L333.3 24.2C332.8 24.6 332.225 24.9167 331.575 25.15C330.925 25.3833 330.233 25.5 329.5 25.5C327.683 25.5 326.146 24.8708 324.888 23.6125C323.629 22.3542 323 20.8167 323 19C323 17.1833 323.629 15.6458 324.888 14.3875C326.146 13.1292 327.683 12.5 329.5 12.5C331.317 12.5 332.854 13.1292 334.113 14.3875C335.371 15.6458 336 17.1833 336 19C336 19.7333 335.883 20.425 335.65 21.075C335.417 21.725 335.1 22.3 334.7 22.8L341 29.1L339.6 30.5ZM329.5 23.5C330.75 23.5 331.812 23.0625 332.688 22.1875C333.562 21.3125 334 20.25 334 19C334 17.75 333.562 16.6875 332.688 15.8125C331.812 14.9375 330.75 14.5 329.5 14.5C328.25 14.5 327.188 14.9375 326.312 15.8125C325.438 16.6875 325 17.75 325 19C325 20.25 325.438 21.3125 326.312 22.1875C327.188 23.0625 328.25 23.5 329.5 23.5Z" fill="#49454F"/>
</g>
</g>
<defs>
<clipPath id="clip0_1168_1862">
<rect width="360" height="43" rx="21.5" fill="white"/>
</clipPath>
<clipPath id="clip1_1168_1862">
<rect x="8" y="1.5" width="40" height="40" rx="20" fill="white"/>
</clipPath>
<clipPath id="clip2_1168_1862">
<rect x="312" y="1.5" width="40" height="40" rx="20" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
<div className="re-use">
    <p className='ment-books'>Mental Health Books </p>
</div>
<div className="books">
    <img className='image' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mental-health-youtube-thumbnail-design-template-823ad5a13f1cbbfcb2728c1b2684d74a_screen.jpg?ts=1602566461" alt="" />
    <img className='image' src="https://images.penguinrandomhouse.com/cover/9781637741580" alt="" />
    <img className='image' src="https://media.self.com/photos/5ecfead2c03ef7b8f8812f84/16:9/w_1279,h_719,c_limit/product-roundup_mentalhealthbooks.jpg" alt="" />
    <img className='image' src="https://m.media-amazon.com/images/I/718A6RecZKL._AC_UF1000,1000_QL80_.jpg" alt="" />
</div>
<div className="re-use">
    <p className='mental-vid-text'>Mental Health Videos </p>
    <VideoPlayer/>
</div>


<div className="bottom-nav">
  <div className="home-nav">
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.54808 7.823C2.02808 8.77 2.02808 9.915 2.02808 12.203V13.725C2.02808 17.625 2.02808 19.576 3.20008 20.788C4.37108 22 6.25708 22 10.0281 22H14.0281C17.7991 22 19.6851 22 20.8561 20.788C22.0281 19.576 22.0281 17.626 22.0281 13.725V12.204C22.0281 9.915 22.0281 8.771 21.5081 7.823C20.9901 6.874 20.0411 6.286 18.1441 5.108L16.1441 3.867C14.1391 2.622 13.1361 2 12.0281 2C10.9201 2 9.91808 2.622 7.91208 3.867L5.91208 5.108C4.01508 6.286 3.06708 6.874 2.54808 7.823ZM9.47508 15.398C9.39622 15.3366 9.3059 15.2916 9.20942 15.2657C9.11293 15.2397 9.01223 15.2333 8.91323 15.2468C8.81423 15.2603 8.71892 15.2934 8.6329 15.3442C8.54688 15.3951 8.47189 15.4626 8.41232 15.5428C8.35276 15.623 8.30982 15.7143 8.28603 15.8114C8.26225 15.9084 8.2581 16.0092 8.27382 16.1079C8.28954 16.2066 8.32482 16.3011 8.37758 16.386C8.43034 16.4708 8.49953 16.5443 8.58108 16.602C9.57635 17.3461 10.7854 17.7488 12.0281 17.75C13.2708 17.7488 14.4798 17.3461 15.4751 16.602C15.5566 16.5443 15.6258 16.4708 15.6786 16.386C15.7313 16.3011 15.7666 16.2066 15.7823 16.1079C15.7981 16.0092 15.7939 15.9084 15.7701 15.8114C15.7463 15.7143 15.7034 15.623 15.6438 15.5428C15.5843 15.4626 15.5093 15.3951 15.4233 15.3442C15.3372 15.2934 15.2419 15.2603 15.1429 15.2468C15.0439 15.2333 14.9432 15.2397 14.8467 15.2657C14.7503 15.2916 14.6599 15.3366 14.5811 15.398C13.8443 15.95 12.9487 16.2488 12.0281 16.25C11.1074 16.2488 10.2119 15.95 9.47508 15.398Z" fill="#010C80"/>
</svg>
<Link to ='/' className='home-link'>Home</Link>
  </div>
  <div className="chat-nav">
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.02808 18V21.766L6.54308 20.857L11.3051 18H16.0281C17.1311 18 18.0281 17.103 18.0281 16V8C18.0281 6.897 17.1311 6 16.0281 6H4.02808C2.92508 6 2.02808 6.897 2.02808 8V16C2.02808 17.103 2.92508 18 4.02808 18H5.02808ZM4.02808 8H16.0281V16H10.7511L7.02808 18.234V16H4.02808V8Z" fill="#B4ACCA"/>
<path d="M20.0281 2H8.02808C6.92508 2 6.02808 2.897 6.02808 4H18.0281C19.1311 4 20.0281 4.897 20.0281 6V14C21.1311 14 22.0281 13.103 22.0281 12V4C22.0281 2.897 21.1311 2 20.0281 2Z" fill="#B4ACCA"/>
</svg>

<p>Chat</p>
  </div>
  <div className="checkup-nav"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1145_355)">
<path d="M4.09448 12.0001H3.63745L12.0281 20.3907L18.9187 13.5001H21.0398L12.0281 22.5118L1.89136 12.3868C1.61792 12.1133 1.37573 11.8204 1.16479 11.5079C0.953857 11.1954 0.770264 10.8594 0.614014 10.5001H3.46167L6.77808 7.19538L12.0281 12.4337L15.7781 8.69538L17.5945 10.5001H21.7546C22.0046 10.1016 22.196 9.67976 22.3289 9.23444C22.4617 8.78913 22.5281 8.3321 22.5281 7.86335C22.5281 7.18366 22.4031 6.55085 22.1531 5.96491C21.9031 5.37898 21.5554 4.87116 21.1101 4.44148C20.6648 4.01179 20.1492 3.67194 19.5632 3.42194C18.9773 3.17194 18.3406 3.04694 17.6531 3.04694C16.9968 3.04694 16.4148 3.14851 15.907 3.35163C15.3992 3.55476 14.9304 3.82819 14.5007 4.17194C14.071 4.51569 13.6609 4.8946 13.2703 5.30866C12.8796 5.72273 12.4656 6.15632 12.0281 6.60944C11.6062 6.18757 11.196 5.76179 10.7976 5.3321C10.3992 4.90241 9.98511 4.51569 9.55542 4.17194C9.12573 3.82819 8.65308 3.54694 8.13745 3.32819C7.62183 3.10944 7.0437 3.00007 6.40308 3.00007C5.7312 3.00007 5.10229 3.12507 4.51636 3.37507C3.93042 3.62507 3.41479 3.97273 2.96948 4.41804C2.52417 4.86335 2.17651 5.37898 1.92651 5.96491C1.67651 6.55085 1.54761 7.18366 1.53979 7.86335C1.53979 8.23054 1.58276 8.60944 1.6687 9.00007H0.133545C0.0944824 8.81257 0.0710449 8.62507 0.0632324 8.43757C0.0554199 8.25007 0.0476074 8.06257 0.0397949 7.87507C0.0397949 6.99226 0.203857 6.16413 0.531982 5.39069C0.860107 4.61726 1.31323 3.94148 1.89136 3.36335C2.46948 2.78523 3.14526 2.3321 3.9187 2.00398C4.69214 1.67585 5.52026 1.50788 6.40308 1.50007C7.05151 1.50007 7.62964 1.57429 8.13745 1.72273C8.64526 1.87116 9.11401 2.07429 9.5437 2.3321C9.97339 2.58991 10.3875 2.90632 10.7859 3.28132C11.1843 3.65632 11.5984 4.05866 12.0281 4.48835C12.4578 4.05085 12.8679 3.64851 13.2585 3.28132C13.6492 2.91413 14.0632 2.60163 14.5007 2.34382C14.9382 2.08601 15.4109 1.87898 15.9187 1.72273C16.4265 1.56648 17.0046 1.49226 17.6531 1.50007C18.5281 1.50007 19.3523 1.66413 20.1257 1.99226C20.8992 2.32038 21.571 2.77351 22.1414 3.35163C22.7117 3.92976 23.1648 4.60163 23.5007 5.36726C23.8367 6.13288 24.0046 6.9571 24.0046 7.83991C24.0046 8.59773 23.8718 9.3321 23.6062 10.043C23.3406 10.754 22.9617 11.4063 22.4695 12.0001H16.9617L15.7781 10.8048L12.0281 14.5665L6.77808 9.30476L4.09448 12.0001Z" fill="#B4ACCA"/>
</g>
<defs>
<clipPath id="clip0_1145_355">
<rect width="24" height="24" fill="white" transform="translate(0.0280762)"/>
</clipPath>
</defs>
</svg>
<p>Self-help</p>
</div>
  <div className="account-nav">
  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1145_347)">
<path d="M14.7781 6C14.7781 5.00544 14.383 4.05161 13.6797 3.34835C12.9765 2.64509 12.0226 2.25 11.0281 2.25C10.0335 2.25 9.07969 2.64509 8.37643 3.34835C7.67316 4.05161 7.27808 5.00544 7.27808 6C7.27808 6.99456 7.67316 7.94839 8.37643 8.65165C9.07969 9.35491 10.0335 9.75 11.0281 9.75C12.0226 9.75 12.9765 9.35491 13.6797 8.65165C14.383 7.94839 14.7781 6.99456 14.7781 6ZM5.02808 6C5.02808 4.4087 5.66022 2.88258 6.78544 1.75736C7.91065 0.632141 9.43678 0 11.0281 0C12.6194 0 14.1455 0.632141 15.2707 1.75736C16.3959 2.88258 17.0281 4.4087 17.0281 6C17.0281 7.5913 16.3959 9.11742 15.2707 10.2426C14.1455 11.3679 12.6194 12 11.0281 12C9.43678 12 7.91065 11.3679 6.78544 10.2426C5.66022 9.11742 5.02808 7.5913 5.02808 6ZM2.83901 21.75H19.2218C18.8046 18.7828 16.2546 16.5 13.175 16.5H8.89058C5.81089 16.5 3.26089 18.7828 2.8437 21.75H2.83901ZM0.528076 22.6078C0.528076 17.9906 4.2687 14.25 8.88589 14.25H13.1703C17.7875 14.25 21.5281 17.9906 21.5281 22.6078C21.5281 23.3766 20.9046 24 20.1359 24H1.92026C1.15151 24 0.528076 23.3766 0.528076 22.6078Z" fill="#B4ACCA"/>
</g>
<defs>
<clipPath id="clip0_1145_347">
<rect width="21" height="24" fill="white" transform="translate(0.528076)"/>
</clipPath>
</defs>
</svg>

<Link to ='/account' className='account-link'>Account</Link>

  </div>
</div>


        </body>
    )
}
export default Resources;