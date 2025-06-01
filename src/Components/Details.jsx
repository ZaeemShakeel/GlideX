import React from "react";

function Details() {
  const details = [
    {
      icon: "fa-solid fa-truck-fast",
      title: "Fastest Delivery",
      detail: "Delivery ordered within 24 hours",
    },
    {
      icon: "fa-solid fa-credit-card",
      title: "Secure Payments",
      detail: "Payment protected by billdesk pro",
    },
    {
      icon: "fa-solid fa-headset",
      title: "24*7 Support",
      detail: "Customer service active 24*7 all-over",
    },
    {
      icon: "fa-solid fa-people-carry-box",
      title: "Fastest Delivery",
      detail: "Trustworthy & reliable service provider",
    },
  ];

  return (
    <div className="flex justify-between items-center gap-5 p-5 py-20">
      {details.map((item, index) => (
        <div className="w-[400px] h-[200px] p-5 bg-[#252525] flex flex-col justify-center rounded-sm">
          <i className={`${item.icon} text-[#2DFF28] text-2xl`}></i>
          <h2 className="font-bold text-2xl py-2">{item.title}</h2>
          <p className="text-lg text-gray-400 text-wrap">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

export default Details;
