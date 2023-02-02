import React from "react";
import "./TextStyles.css";

function TextStyles(props) {
  const {
    title,
    font1,
    h11,
    price1,
    h21,
    price2,
    h31,
    price3,
    h41,
    price4,
    h51,
    price5,
    baseBody1,
    price6,
    caption1,
    price7,
    spaceMono,
    nftMarketplace1,
    nftMarketplace2,
    nftMarketplace3,
    nftMarketplace4,
    nftMarketplace5,
    nftMarketplace6,
    nftMarketplace7,
    font2,
    workSans,
    h12,
    price8,
    h22,
    price9,
    h32,
    price10,
    h42,
    price11,
    h52,
    price12,
    baseBody2,
    price13,
    caption2,
    price14,
    nftMarketplace8,
    nftMarketplace9,
    nftMarketplace10,
    nftMarketplace11,
    nftMarketplace12,
    nftMarketplace13,
    nftMarketplace14,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="text-styles screen">
        <div className="flex-col-3">
          <div className="overlap-group">
            <h1 className="title worksans-semi-bold-white-67px">{title}</h1>
          </div>
          <div className="flex-row-3">
            <div className="flex-col-4">
              <div className="font spacemono-bold-white-24px">{font1}</div>
              <div className="h1 worksans-bold-white-24px">{h11}</div>
              <div className="price spacemono-regular-normal-white-14px">{price1}</div>
              <div className="h2 worksans-bold-white-24px">{h21}</div>
              <div className="price spacemono-regular-normal-white-14px">{price2}</div>
              <div className="h3 worksans-bold-white-24px">{h31}</div>
              <div className="price spacemono-regular-normal-white-14px">{price3}</div>
              <div className="h4 worksans-bold-white-24px">{h41}</div>
              <div className="price spacemono-regular-normal-white-14px">{price4}</div>
              <div className="h5 worksans-bold-white-24px">{h51}</div>
              <div className="price spacemono-regular-normal-white-14px">{price5}</div>
              <div className="base-body worksans-bold-white-24px">{baseBody1}</div>
              <div className="price spacemono-regular-normal-white-14px">{price6}</div>
              <div className="caption worksans-bold-white-24px">{caption1}</div>
              <div className="price spacemono-regular-normal-white-14px">{price7}</div>
            </div>
            <div className="flex-col-5">
              <div className="space-mono spacemono-bold-white-24px">{spaceMono}</div>
              <div className="nft-marketplace">{nftMarketplace1}</div>
              <div className="nft-marketplace-1 valign-text-middle">{nftMarketplace2}</div>
              <div className="nft-marketplace-2 valign-text-middle">{nftMarketplace3}</div>
              <div className="nft-marketplace-3 valign-text-middle">{nftMarketplace4}</div>
              <div className="nft-marketplace-4 valign-text-middle">{nftMarketplace5}</div>
              <div className="nft-marketplace-5 valign-text-middle">{nftMarketplace6}</div>
              <div className="nft-marketplace-6 valign-text-middle">{nftMarketplace7}</div>
            </div>
          </div>
          <img className="line-2" src="/img/line-2.svg" alt="Line 2" />
          <div className="flex-row-4 worksans-bold-white-24px">
            <div className="font-1">{font2}</div>
            <div className="work-sans">{workSans}</div>
          </div>
        </div>
        <div className="flex-row-5">
          <div className="flex-col-6">
            <div className="h1-1 worksans-bold-white-24px">{h12}</div>
            <div className="price spacemono-regular-normal-white-14px">{price8}</div>
            <div className="h2-1 worksans-bold-white-24px">{h22}</div>
            <div className="price spacemono-regular-normal-white-14px">{price9}</div>
            <div className="h3-1 worksans-bold-white-24px">{h32}</div>
            <div className="price spacemono-regular-normal-white-14px">{price10}</div>
            <div className="h4-1 worksans-bold-white-24px">{h42}</div>
            <div className="price spacemono-regular-normal-white-14px">{price11}</div>
            <div className="h5-1 worksans-bold-white-24px">{h52}</div>
            <div className="price spacemono-regular-normal-white-14px">{price12}</div>
            <div className="base-body-1 worksans-bold-white-24px">{baseBody2}</div>
            <div className="price spacemono-regular-normal-white-14px">{price13}</div>
            <div className="caption-1 worksans-bold-white-24px">{caption2}</div>
            <div className="price spacemono-regular-normal-white-14px">{price14}</div>
          </div>
          <div className="nft-marketplace-container">
            <div className="nft-marketplace-7 worksans-semi-bold-white-67px">{nftMarketplace8}</div>
            <div className="nft-marketplace-8 valign-text-middle">{nftMarketplace9}</div>
            <div className="nft-marketplace-9 valign-text-middle">{nftMarketplace10}</div>
            <div className="nft-marketplace-10 valign-text-middle">{nftMarketplace11}</div>
            <div className="nft-marketplace-11 valign-text-middle">{nftMarketplace12}</div>
            <div className="nft-marketplace-12 valign-text-middle">{nftMarketplace13}</div>
            <div className="nft-marketplace-13 valign-text-middle">{nftMarketplace14}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextStyles;
