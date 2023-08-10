import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="nav-brand">
          <a href="">
            <h1 className="brand-name">
              {" "}
              <span className="getfed">G</span>et
              <span className="getfed">F</span>ed{" "}
            </h1>
          </a>
        </div>
        <div className="location">
          <img />
          <a href="">Chennai, India</a>
        </div>
        <div className="search">
          <form>
            <input
              className="serach-box"
              type="search"
              placeholder="Search for Restaurants and Foods"
            ></input>
          </form>
        </div>
        <div className="nav-list">
          <ul>
            <li>
              <a href="">Offers</a>
            </li>
            <li>
              <a href="">Restaurants</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
            <li>
              <a href="">Profile</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const RestaurantsList = ({ restData }) => {
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = restData?.info;
  return (
    <div className="rest-cards">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className="rest-info">
        <h3>{name}</h3>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <div className="rest-rating-ttr-price">
          <p>{avgRating}⭐</p>
          <p>{restData.info.sla.deliveryTime} Minutes to reach</p>
          <p>{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

const restList = [
  {
    info: {
      id: "14096",
      name: "Sangeetha Veg Restaurant",
      cloudinaryImageId: "oodghmivnc6bxnbrvzzw",
      locality: "Gandhi Irwin Rd",
      areaName: "Egmore",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Chinese", "South Indian"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "14096",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2600,
      },
      parentId: "1260",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sangeetha-veg-restaurant-gandhi-irwin-rd-egmore-chennai-14096",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "262948",
      name: "Perambur Sri Srinivasa (Bhavan)",
      cloudinaryImageId: "bogj3f009rjyo7b5omgx",
      locality: "Sembium",
      areaName: "Chennai",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "262948",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "5939",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 22:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/perambur-sri-srinivasa-bhavan-sembium-chennai-chennai-262948",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "561677",
      name: "The BVK Biryani (Bai Veetu Kalyanam)",
      cloudinaryImageId: "ypce4gsnufn7ombvs2ek",
      locality: "Thiruvengadam Street",
      areaName: "Egmore",
      costForTwo: "₹550 for two",
      cuisines: ["Biryani", "South Indian"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "561677",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4100,
      },
      parentId: "337996",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "16 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-11 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-bvk-biryani-bai-veetu-kalyanam-thiruvengadam-street-egmore-chennai-561677",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "37629",
      name: "Shree Mithai",
      cloudinaryImageId: "cxmaeqlyleysefcdx9nk",
      locality: "Dr Tv Road",
      areaName: "Chetpet",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Street Food", "Chaat"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "37629",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "6988",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/shree-mithai-dr-tv-road-chetpet-chennai-37629",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "16543",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId: "dsliyhlbtgtnnuxyrpsf",
      locality: "Purasai High Road",
      areaName: "Purasaiwakkam",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "16543",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2600,
      },
      parentId: "22",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹75 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-purasai-high-road-purasaiwakkam-chennai-16543",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "14044",
      name: "Fruit Shop on Greams Road",
      cloudinaryImageId: "ufryw0c5fuxraq1zx1pq",
      locality: "Opposite Commissioner Office",
      areaName: "Egmore",
      costForTwo: "₹150 for two",
      cuisines: ["Juices", "Beverages", "Desserts"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "14044",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2600,
      },
      parentId: "401",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 23:35:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/fruit-shop-on-greams-road-opposite-commissioner-office-egmore-chennai-14044",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "37067",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "Kilpauk",
      areaName: "Poonamallee High Road",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "37067",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "2",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-kilpauk-poonamallee-high-road-chennai-37067",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "337893",
      name: "Chai Waale",
      cloudinaryImageId: "agw4if2ynssp6xrc2lak",
      locality: "Meeran Sahib Street",
      areaName: "Anna Salai",
      costForTwo: "₹200 for two",
      cuisines: ["Beverages", "Snacks"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "337893",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "7228",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chai-waale-meeran-sahib-street-anna-salai-chennai-337893",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "25079",
      name: "French Loaf",
      cloudinaryImageId: "zwywioqvh5kpvk6ywyye",
      locality: "Monteith Road",
      areaName: "Egmore",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Bakery", "Snacks", "Pizzas", "Beverages"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "25079",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "393",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/french-loaf-monteith-road-egmore-chennai-25079",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "8902",
      name: "Krispy Kreme",
      cloudinaryImageId: "y6jyqsbxdhlmqcnk48nb",
      locality: "Express Avenue Mall",
      areaName: "Thousand Lights",
      costForTwo: "₹170 for two",
      cuisines: ["Desserts", "Beverages"],
      avgRating: 4.5,
      veg: true,
      feeDetails: {
        restaurantId: "8902",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "570",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-11 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/krispy-kreme-express-avenue-mall-thousand-lights-chennai-8902",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "12615",
      name: "Ratna Cafe (Estd.1948)",
      cloudinaryImageId: "zyyduavcmpinwpyontgb",
      locality: "Triplicane",
      areaName: "Triplicane",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Sweets"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "12615",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "167537",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹75 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/ratna-cafe-estd-1948-triplicane-chennai-12615",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "49823",
      name: "Hot Breads",
      cloudinaryImageId: "6feb1d22bb913dbabcde6304becc2f55",
      locality: "Kilpauk",
      areaName: "Kilpauk",
      costForTwo: "₹150 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
      feeDetails: {
        restaurantId: "49823",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "470",
      avgRatingString: "4.6",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 21:30:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hot-breads-kilpauk-chennai-49823",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "58049",
      name: "Perambur Sri Srinivasa Sweets and Snacks",
      cloudinaryImageId: "gaew0xqnlq7rhi91fkzv",
      locality: "Opposite Perambur Railway Station",
      areaName: "Chennai",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "58049",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "230942",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 23:11:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/perambur-sri-srinivasa-sweets-and-snacks-opposite-perambur-railway-station-chennai-chennai-58049",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "13320",
      name: "Kumarakom",
      cloudinaryImageId: "uupkqpedigppynocsjb8",
      locality: "Parsn Complex",
      areaName: "Nungambakkam",
      costForTwo: "₹450 for two",
      cuisines: ["North Indian", "Chinese", "Kerala"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "13320",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5000,
      },
      parentId: "576",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kumarakom-parsn-complex-nungambakkam-chennai-13320",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "7775",
      name: "Gangotree",
      cloudinaryImageId: "rualctypxmcdie00swsg",
      locality: "Cathedral Road",
      areaName: "Chennai",
      costForTwo: "₹300 for two",
      cuisines: ["Sweets", "Chaat"],
      avgRating: 4.5,
      veg: true,
      feeDetails: {
        restaurantId: "7775",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5000,
      },
      parentId: "406",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 21:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/gangotree-cathedral-road-chennai-chennai-7775",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "511929",
      name: "Momo Zone - The Momo Company",
      cloudinaryImageId: "cb9qadkxcbv5xgz24xtb",
      locality: "Triplicane High Road",
      areaName: "Royapettah",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Tibetan", "Fast Food"],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "511929",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "382343",
      avgRatingString: "3.7",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-11 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/momo-zone-the-momo-company-triplicane-high-road-royapettah-chennai-511929",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "141364",
      name: "Starbucks Coffee",
      cloudinaryImageId: "4df3497f1460dfd1ecd8125222f6d362",
      locality: "Bergamo Mall",
      areaName: "Thousand Lights",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "141364",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "195515",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-11 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹700",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/starbucks-coffee-bergamo-mall-thousand-lights-chennai-141364",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "14834",
      name: "Hotel Saravana Bhavan",
      cloudinaryImageId: "drhqc7ptipun2utfohdo",
      locality: "Kennet Lane",
      areaName: "Egmore",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "South Indian"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "14834",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2600,
      },
      parentId: "101987",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-saravana-bhavan-kennet-lane-egmore-chennai-14834",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "60888",
      name: "Eating Circles",
      cloudinaryImageId: "ji1dtwtd368vir8t0pik",
      areaName: "Alwarpet",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: "60888",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5600,
      },
      parentId: "6910",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 7.6,
        serviceability: "SERVICEABLE",
        slaString: "46 mins",
        lastMileTravelString: "7.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 22:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/eating-circles-alwarpet-chennai-60888",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "55045",
      name: "Murugan Idli Shop",
      cloudinaryImageId: "dlkj9tdzjf6r72ovkuhh",
      locality: "George Town",
      areaName: "Poongavanapuram",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "55045",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2600,
      },
      parentId: "1248",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "16 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-10 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/murugan-idli-shop-george-town-poongavanapuram-chennai-55045",
      type: "WEBLINK",
    },
  },
];

const Main = () => {
  return (
    <main className="main-container">
      <div className="restuarants">
        <h2>Best Restaurants in Chennai</h2>
        <div className="rest-list">
          {
            restList.map((restaurant) => (
              <RestaurantsList key={restaurant.info.id} restData={restaurant} />
            )
            )
          }
        </div>
      </div>
    </main>
  );
};

const AppContent = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppContent />);
