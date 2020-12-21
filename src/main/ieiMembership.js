import React, {component, useState, useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';
function IEIMembership(){
    return <div id="main-section">
    <a href="#header" class="btn-get-started scrollto backtotop"><i class="fa fa-chevron-up icon-color" aria-hidden="true"></i></a>
    <div className="members">
        <h1 className="members-heading" id="header">IEI Members</h1>
    </div>
    <div className="members-table">
        <table class="table table-hover table-light">
            <thead  class="thead-light">
                <tr>
                    <th scope="col" className="tsr">Sr.</th>
                    <th scope="col" className="">Name</th>
                    <th scope="col" >Email</th>
                    <th scope="col">IEI No.</th>
                    <th scope="col">Area of Interest</th>
                </tr>
            </thead>
            <tbody>
                {
                    MenberDetail.map((item,index)=>(
                        <tr>
                            <th scope="row" key={index}>{item.no}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.memberno}</td>
                            <td>
                                {item.interest}
                            </td>
                        </tr>
                    ))
                }  
            </tbody>
        </table>
 
    </div>
<div className="p">
{
    MenberDetail.map((item,index)=>(
        <table class="p-table-box ">
            <tr className="p-table-box-detail ">
                <th className="p-table-box-detail-head" >Sr.</th>
                <td className="p-table-box-detail-text" key={index}>{item.no}</td>
            </tr>
            <tr className="p-table-box-detail ">
                <th className="p-table-box-detail-head">Name</th>
                <td className="p-table-box-detail-text">{item.name}</td>
            </tr>
            <tr className="p-table-box-detail ">
                <th className="p-table-box-detail-head" >Email</th>
                <td className="p-table-box-detail-text">{item.email}</td>
            </tr>
            <tr className="p-table-box-detail ">
                <th className="p-table-box-detail-head" >membership-no</th>
                <td className="p-table-box-detail-text">{item.memberno}</td>
            </tr>
            <tr className="p-table-box-detail ">
                <th className="p-table-box-detail-head">Area Of Interest</th>
                <td className="p-table-box-detail-text">{item.interest}</td>
            </tr>
                    
        </table>
    ))
}


    </div>
     {/* <!-- Footer Section  --> */}

    <Footer></Footer>
    
    </div>
}
export default IEIMembership;


const MenberDetail = [
    {
        no:"1",
        name:"jinal",
        email:"jinal@gmail.com",
        memberno:"97357889",
        interest:"Web Development, Web Application Development" 
     },
    {
        no:"2",
       name:"Divyakumar Solanki",
       email:"divyasolanki98@gmail.com",
       memberno:"93794382",
       interest:" Adaptive Signal Processing, Embedded Systems" 
    },{
        no:"3",
        name:"jinal",
        email:"jinal@gmail.com",
        memberno:"97357889",
        interest:"Web Development, Web Application Development" 
     },
     {
        no:"4",
       name:"Divyakumar Solanki",
       email:"divyasolanki98@gmail.com",
       memberno:"93794382",
       interest:" Web Development, Programing, Web Appalication Development" 
    },{
        no:"5",
        name:"jinal",
        email:"jinal@gmail.com",
        memberno:"97357889",
        interest:"Web Development, Web Application Development" 
     },
     {
        no:"6",
       name:"Divyakumar Solanki",
       email:"divyasolanki98@gmail.com",
       memberno:"93794382",
       interest:" Adaptive Signal Processing, Embedded Systems" 
    },{
        no:"7",
        name:"jinal",
        email:"jinal@gmail.com",
        memberno:"97357889",
        interest:"Web Development, Web Application Development" 
     },{
        no:"8",
        name:"jinal",
        email:"jinal@gmail.com",
        memberno:"97357889",
        interest:"Web Development, Web Application Development" 
     },
     {
        no:"10",
       name:"Divyakumar Solanki",
       email:"divyasolanki98@gmail.com",
       memberno:"93794382",
       interest:" Web Development, Programing, Web Appalication Development" 
    },{
        no:"11",
        name:"jinal",
        email:"jinal@gmail.com",
        memberno:"97357889",
        interest:"Web Development, Web Application Development" 
     },
     {
        no:"12",
       name:"Divyakumar Solanki",
       email:"divyasolanki98@gmail.com",
       memberno:"93794382",
       interest:" Adaptive Signal Processing, Embedded Systems" 
    },{
        no:"13",
        name:"jinal",
        email:"jinal@gmail.com",
        memberno:"97357889",
        interest:"Web Development, Web Application Development" 
     },
];
