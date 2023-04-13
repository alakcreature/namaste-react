import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";

// we are trying to mock a fetch api
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: function () {
      return Promise.resolve(MENU);
    },
  });
});


// Integration Testing
test("Add items to cart on HomePage", async() => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </StaticRouter>
    );
  
    await waitFor(()=>expect(body.getByTestId("menu")));
    
    const addBtn = body.getAllByTestId("addBtn");
    fireEvent.click(addBtn[0]);

    const cart = body.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart - 1 Items");
  });






const MENU = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "360881",
              name: "Pizza King",
              city: "Asansol",
              slugs: {
                restaurant:
                  "yash-chawla-by-pizza-king-asa_burnpur_extn-asa_burnpur_extn",
                city: "asansol",
              },
              uniqueId: "83cb9df0-daaf-4522-a7a5-090b3fbd455a",
              cloudinaryImageId: "621a9b8537d01c2199280fd7da8092eb",
              locality: "Gorai Road",
              areaName: "Ushagram",
              costForTwo: "20000",
              costForTwoMessage: "₹200 for two",
              cuisines: ["Pizzas", "American"],
              avgRating: 3.7,
              feeDetails: {
                restaurantId: "360881",
                fees: [
                  { name: "time" },
                  { name: "distance", fee: 2000 },
                  { name: "special" },
                ],
                totalFee: 2000,
                icon: "EquitableDistanceFee/infoIcon",
                message:
                  "Far-away restaurant. Additional delivery fees will apply.",
              },
              parentId: "4202",
              avgRatingString: "3.7",
              totalRatingsString: "100+ ratings",
              sla: {
                restaurantId: "360881",
                lastMileTravel: 1272,
                serviceability: "NON_SERVICEABLE",
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_IT_IS_LONG_DISTANCE",
                zoneId: 1376,
                lastMileTravelString: "1272.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-04-13 22:30:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                shortDescriptionList: [
                  { discountType: "Percentage", operationType: "RESTAURANT" },
                  { discountType: "Percentage", operationType: "RESTAURANT" },
                ],
                descriptionList: [
                  {
                    meta: "20% off up to ₹120 | Use FEDERALCC Above ₹249",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "20% off up to ₹125 | Use KOTAK125 Above ₹500",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString:
                "yash-chawla-by-pizza-king-asa_burnpur_extn-asa_burnpur_extn",
              isOpen: true,
              labels: [
                { title: "Timings", message: "null" },
                {
                  title: "Address",
                  message:
                    "HILL VIEW PARK SB GORAI ROAD PANI TANKI HIRAPUR  ASANSOL",
                },
                { title: "Cuisines", message: "Pizzas,American" },
              ],
              totalRatings: 100,
              aggregatedDiscountInfoV2: {
                shortDescriptionList: [
                  { discountType: "Percentage", operationType: "RESTAURANT" },
                  { discountType: "Percentage", operationType: "RESTAURANT" },
                ],
                descriptionList: [
                  {
                    meta: "20% off up to ₹120 | Use FEDERALCC Above ₹249",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "20% off up to ₹125 | Use KOTAK125 Above ₹500",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/360881",
              },
              ratingSlab: "RATING_SLAB_4",
              availabilityServiceabilityMessage:
                "Does not deliver to your location",
              orderabilityCommunication: {
                title: { text: "Wish you were" },
                subTitle: { text: "CLOSER!" },
                message: {
                  text: "This location is outside the outlet's delivery area",
                  textColour: "negative",
                },
                customIcon: {
                  bgGradientColorStart: "#F64C41",
                  bgGradientColorEnd: "#E53554",
                },
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: { parameters: {}, presentation: {} },
              areaPostalCode: "0",
              latLong: "23.67918,86.958052",
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 4,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: { left: 10, right: 10, bottom: 16 },
              },
              scrollBar: {},
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "20% OFF UPTO ₹120",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/1acdb97aadcb61b323307845bda86535",
                      offerIds: ["ce5f9f86-e9b3-4580-9a70-4ce54ffd449c"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FEDERALCC",
                      description: "ABOVE ₹249",
                      offerType: "offers",
                      restId: "360881",
                      offerLogo:
                        "rng/md/ads/production/1acdb97aadcb61b323307845bda86535",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "20% OFF UPTO ₹125",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/4abdba6754dfedb04324150e316a4004",
                      offerIds: ["56db52f1-36e0-43ba-ab1b-6859e655d8fd"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE KOTAK125",
                      description: "ABOVE ₹500",
                      offerType: "offers",
                      restId: "360881",
                      offerLogo:
                        "rng/md/ads/production/4abdba6754dfedb04324150e316a4004",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "15% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/6ef0fc65ca643ecbdcf8a930599c7edd",
                      offerIds: ["523d4bbf-6b4d-41cf-93ec-6bf718deb347"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE HSBCFEST",
                      description: "ABOVE ₹499",
                      offerType: "offers",
                      restId: "360881",
                      offerLogo:
                        "rng/md/ads/production/6ef0fc65ca643ecbdcf8a930599c7edd",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "10% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/5c4848f8c208408b048c18f6be604f14",
                      offerIds: ["e2458c78-c6d7-45fa-9876-097a713aba81"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE INDUSIND100",
                      description: "ABOVE ₹699",
                      offerType: "offers",
                      restId: "360881",
                      offerLogo:
                        "rng/md/ads/production/5c4848f8c208408b048c18f6be604f14",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                ],
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110499026",
                              name: "Masala Fries ",
                              category: "French Fries",
                              description:
                                "Delicious fried potato chips with yummy masala that you wouldn't want to share!",
                              imageId: "zzaxwqgwl97b8jldoij0",
                              inStock: 1,
                              isVeg: 1,
                              price: 14700,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "77312902",
                              name: "Hot & Crispy Chicken Leg Piece (2 Pieces)",
                              category: "Burger And Fried Items",
                              imageId: "nzbzjyckev2xch2d5q8d",
                              inStock: 1,
                              price: 27500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66950700",
                              name: '7" Onion And Paneer',
                              category: "Veg Pizza",
                              description: "Onion + paneer + mozzarella",
                              imageId: "qkbsro1rzkdtszgrmeec",
                              inStock: 1,
                              isVeg: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "45 ratings",
                                  ratingCountV2: "45",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66950699",
                              name: '7" Spicy Corn Pizza',
                              category: "Veg Pizza",
                              description:
                                "Sweet corn + jalapenos + mozzarella",
                              imageId: "lookr2bmxzealsyd8wxy",
                              inStock: 1,
                              isVeg: 1,
                              price: 25500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "83891433",
                                  groupName: "Beverage",
                                  choices: [
                                    {
                                      id: "69078188",
                                      name: "Butter Milk",
                                      price: 5900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "21 ratings",
                                  ratingCountV2: "21",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66950696",
                              name: '7" Veg Loaded Delight',
                              category: "Veg Pizza",
                              description:
                                "Onion + capsicum + corn + mushroom + jalapenos + mozzarella",
                              imageId: "qhkypxofvxr1scfytsim",
                              inStock: 1,
                              isVeg: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "83891432",
                                  groupName: "Beverage",
                                  choices: [
                                    {
                                      id: "69078188",
                                      name: "Butter Milk",
                                      price: 5900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "19 ratings",
                                  ratingCountV2: "19",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66950698",
                              name: '7" Golden Corn Delight',
                              category: "Veg Pizza",
                              description: "Sweet corn + mozzarella",
                              imageId: "k0m6gu9ipj0ckc0lvouu",
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66950697",
                              name: '7" Crunchy Onion and Capsicum',
                              category: "Veg Pizza",
                              description: "Onion + capsicum + mozzarella",
                              imageId: "zypxdywglcobslkmyf7u",
                              inStock: 1,
                              isVeg: 1,
                              price: 14500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "28194984",
                                  groupName: "Add-ons",
                                  choices: [
                                    {
                                      id: "20360294",
                                      name: "Tandoori Paneer",
                                      price: 5800,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360227",
                                      name: "Paneer",
                                      price: 4900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360229",
                                      name: "Onions",
                                      price: 1800,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360390",
                                      name: "Jalapeno",
                                      price: 2800,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360355",
                                      name: "Black Olives",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360324",
                                      name: "Chicken Tandoori",
                                      price: 7500,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360379",
                                      name: "Green Olives",
                                      price: 2800,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360230",
                                      name: "Capsicum ",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360264",
                                      name: "Chicken",
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360342",
                                      name: "Sweet Corn",
                                      price: 2700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 10,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "68250074",
                              name: "Mix Veg Peri-Peri Pizza [7 Inches]",
                              category: "Veg Pizza",
                              description:
                                "Serves 1 | Onion,capsicum,mushroom,sweet corn, jalapeno,paneer & mozzarella",
                              imageId: "nhjyqldqa3kpr8vbolzh",
                              inStock: 1,
                              isVeg: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "83891430",
                                  groupName: "Beverage",
                                  choices: [
                                    {
                                      id: "69078188",
                                      name: "Butter Milk",
                                      price: 5900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "29525683",
                                  groupName: "Add-ons",
                                  choices: [
                                    {
                                      id: "20360227",
                                      name: "Paneer",
                                      price: 4900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360229",
                                      name: "Onions",
                                      price: 1800,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360390",
                                      name: "Jalapeno",
                                      price: 2800,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360355",
                                      name: "Black Olives",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20361466",
                                      name: "Extra Cheese",
                                      price: 3900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360379",
                                      name: "Green Olives",
                                      price: 2800,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360230",
                                      name: "Capsicum ",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360264",
                                      name: "Chicken",
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360342",
                                      name: "Sweet Corn",
                                      price: 2700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 9,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.4",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "67411726",
                              name: " Paneer Over Loaded Pizza (7 Inches)",
                              category: "Veg Pizza",
                              description: "Onion + capsicum + loads of paneer",
                              imageId: "bfix4ecxn8szaor16qp5",
                              inStock: 1,
                              isVeg: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "68250940",
                              name: "Veg Paradise Pizza [7inches]",
                              category: "Veg Pizza",
                              description:
                                "(butter pan base) pizza sauce, onion,capsicum,tomato,jalapeno,paneer,red paprika,black olive,extra cheese.",
                              imageId: "vo0menu201nernasmeyx",
                              inStock: 1,
                              isVeg: 1,
                              price: 32500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      type: "CATEGORY_TYPE_RECOMMENDED",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "French Fries",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110499026",
                              name: "Masala Fries ",
                              category: "French Fries",
                              description:
                                "Delicious fried potato chips with yummy masala that you wouldn't want to share!",
                              imageId: "zzaxwqgwl97b8jldoij0",
                              inStock: 1,
                              isVeg: 1,
                              price: 14700,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110499022",
                              name: "Peri - Peri Fries ",
                              category: "French Fries",
                              inStock: 1,
                              isVeg: 1,
                              price: 13000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110499021",
                              name: "Classic Fries",
                              category: "French Fries",
                              inStock: 1,
                              isVeg: 1,
                              price: 12500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110499024",
                              name: "Cheesy Fries",
                              category: "French Fries",
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110499028",
                              name: "Cheesy Masala Fries ",
                              category: "French Fries",
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Value Meals [ Burgers ]",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110585307",
                              name: "Veg Patty Burger Meal",
                              category: "Value Meals [ Burgers ]",
                              description:
                                "[ 1pcs veg patty burger + fries + cokes ]",
                              inStock: 1,
                              isVeg: 1,
                              price: 31900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110585321",
                              name: "Paneer Patty Meal",
                              category: "Value Meals [ Burgers ]",
                              description:
                                "[1 pcs paneer patty burger + fries + cokes ]",
                              inStock: 1,
                              isVeg: 1,
                              price: 34900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110585306",
                              name: "Chicken Patty Burger Meal",
                              category: "Value Meals [ Burgers ]",
                              description:
                                "[ 1 pcs chicken patty burger + fries + cokes ]",
                              inStock: 1,
                              price: 34900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110585309",
                              name: "Chicken Zinger Burger Meal",
                              category: "Value Meals [ Burgers ]",
                              description:
                                "[1 pcs chicken zinger burger + fries + cokes ]",
                              inStock: 1,
                              price: 34900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110585310",
                              name: "Chicken Zinger Tandoori Burger Meal",
                              category: "Value Meals [ Burgers ]",
                              description:
                                "[ 1 pcs chicken zinger tandoori burger + fries + cokes ]",
                              inStock: 1,
                              price: 34900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Specail Pizzas",
                      categories: [
                        {
                          title: "Pizzas",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "102154373",
                                  name: '7" Baby Corn Pizza     ',
                                  category: "Specail Pizzas",
                                  description:
                                    "Pizza Sauce , Baby Corn, Onion , Capsicum, Mozzarella.",
                                  imageId: "wuj0xograom9nchulyhb",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 15800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.2",
                                      ratingCount: "13 ratings",
                                      ratingCountV2: "13",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110497679",
                                  name: "Corn Veggie Delight  [7 Inches]",
                                  category: "Specail Pizzas",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "102154376",
                                  name: " Veg Pasta Pizza  [ 7 Inces]",
                                  category: "Specail Pizzas",
                                  description:
                                    "Red Sauce Pasta , Pizza Sauce, Onion, Capsicum, Black Olive , Tomato& Mozzarella.",
                                  imageId: "xezyv50tftnmdbrh9otl",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 29900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110497687",
                                  name: "Extra Cheesy Double Cheese [7 Inches]",
                                  category: "Specail Pizzas",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 29900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110497669",
                                  name: "Garden Delight Pizza [ 7 Inches]",
                                  category: "Specail Pizzas",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "102154380",
                                  name: "Chocolate Pizza Regular  [ 7 Inches]",
                                  category: "Specail Pizzas",
                                  description:
                                    "Chocolate Truffle, Choco Chips , Huber Crunch , Mozzarella.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "102154369",
                                  name: "Veggie Heaven Pizza   [7 Inches]",
                                  category: "Specail Pizzas",
                                  description:
                                    "Serves 1 | ( Butter Base )Pizza Sauce , Onion, Tomato, Capcicum, Black Olives , Red Paprika , Baby Corn, Paneer, Mushroom, Mozzarella.",
                                  imageId: "wuj0xograom9nchulyhb",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 32500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "102154381",
                                  name: " Chocolate Pizza ( Roasted Fruit N Nut)   [ 7 Inches]",
                                  category: "Specail Pizzas",
                                  description:
                                    "Chocolate Truffle , Choco Chips , Huber Crunch, Roasted Almonds, Raisins & Mozzarella",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 29900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110497653",
                                  name: "Chicken Kheema Do Pyaja  [ 7 Inches]",
                                  category: "Specail Pizzas",
                                  inStock: 1,
                                  price: 26500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110497654",
                                  name: "Extra Cheesy Chicken Tandoori Pizza [ 7 Inches]",
                                  category: "Specail Pizzas",
                                  inStock: 1,
                                  price: 28800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110497680",
                                  name: "Chicken Maximum Pizza [ 7 Inches]",
                                  category: "Specail Pizzas",
                                  inStock: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "102154371",
                                  name: " Non Veg Heaven Pizza  [7 Inches]",
                                  category: "Specail Pizzas",
                                  description:
                                    "(Butter Base) Pizza Sauce ,Onion, Tomato, Capsicum, Chicken Salami, Chicken Sausage, Chicken Chunks , Red Paprika & Black Olives, Mozzarella.",
                                  imageId: "tf1isxxdubo4c9ybz1xa",
                                  inStock: 1,
                                  price: 34900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110497689",
                                  name: "Spicy Chicken Kheema Pizza [7 Inches]",
                                  category: "Specail Pizzas",
                                  inStock: 1,
                                  price: 29900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "102154379",
                                  name: " Non - Veg Pasta Pizza [7 Inches]",
                                  category: "Specail Pizzas",
                                  description:
                                    "Pizza Sauce , Red Sauce Pasta , Onion Capsicum, Chicken Chunks, Chicken Sausage & Mozzarella.",
                                  imageId: "vmlsdqq2ejluc6ldk6hk",
                                  inStock: 1,
                                  price: 32500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110497677",
                                  name: "Keema & Sausage Pizza [7 Inches]",
                                  category: "Specail Pizzas",
                                  inStock: 1,
                                  price: 25800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110497681",
                                  name: "Chicken Kheema Veggie [7 Inces]",
                                  category: "Specail Pizzas",
                                  inStock: 1,
                                  price: 27500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Burger And Fried Items",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "94810123",
                              name: "Veg Tandoori Burger",
                              category: "Burger And Fried Items",
                              description:
                                "Fresh seasame bun +  veg patty +onions + sauces + green chutney +tandoori mayo",
                              imageId: "ad4smynu3sv1o7kx8p0i",
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "94810121",
                              name: "Veg Patty Burger",
                              category: "Burger And Fried Items",
                              description:
                                "Fresh seasame bun + fried veg patty + onions + green chutney +garlic mayo.",
                              imageId: "ad4smynu3sv1o7kx8p0i",
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110498276",
                              name: "Double Patty Veg Burger",
                              category: "Burger And Fried Items",
                              inStock: 1,
                              isVeg: 1,
                              price: 27700,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110498329",
                              name: "Paneer Crispy Burger",
                              category: "Burger And Fried Items",
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110498419",
                              name: "Paneer Tandoori Burger",
                              category: "Burger And Fried Items",
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110498429",
                              name: "Veg & Paneer Burger ",
                              category: "Burger And Fried Items",
                              inStock: 1,
                              isVeg: 1,
                              price: 27500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "77312902",
                              name: "Hot & Crispy Chicken Leg Piece (2 Pieces)",
                              category: "Burger And Fried Items",
                              imageId: "nzbzjyckev2xch2d5q8d",
                              inStock: 1,
                              price: 27500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "77312905",
                              name: "Crispy Chicken Burger(2pcs)+chicken Tandoori Pizza(1pcs) + Coke 250 Ml (2pcs)",
                              category: "Burger And Fried Items",
                              imageId: "qvxwczgfpxmfmcuqvg07",
                              inStock: 1,
                              price: 59900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Veg Pizza",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66950700",
                              name: '7" Onion And Paneer',
                              category: "Veg Pizza",
                              description: "Onion + paneer + mozzarella",
                              imageId: "qkbsro1rzkdtszgrmeec",
                              inStock: 1,
                              isVeg: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "45 ratings",
                                  ratingCountV2: "45",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66950699",
                              name: '7" Spicy Corn Pizza',
                              category: "Veg Pizza",
                              description:
                                "Sweet corn + jalapenos + mozzarella",
                              imageId: "lookr2bmxzealsyd8wxy",
                              inStock: 1,
                              isVeg: 1,
                              price: 25500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "83891433",
                                  groupName: "Beverage",
                                  choices: [
                                    {
                                      id: "69078188",
                                      name: "Butter Milk",
                                      price: 5900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "21 ratings",
                                  ratingCountV2: "21",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66950705",
                              name: '7" Regular Only Cheese',
                              category: "Veg Pizza",
                              imageId: "vru9aobvevwe5huxdec7",
                              inStock: 1,
                              isVeg: 1,
                              price: 12800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "83891437",
                                  groupName: "Beverage",
                                  choices: [
                                    {
                                      id: "69078188",
                                      name: "Butter Milk",
                                      price: 5900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66950696",
                              name: '7" Veg Loaded Delight',
                              category: "Veg Pizza",
                              description:
                                "Onion + capsicum + corn + mushroom + jalapenos + mozzarella",
                              imageId: "qhkypxofvxr1scfytsim",
                              inStock: 1,
                              isVeg: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "83891432",
                                  groupName: "Beverage",
                                  choices: [
                                    {
                                      id: "69078188",
                                      name: "Butter Milk",
                                      price: 5900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "19 ratings",
                                  ratingCountV2: "19",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66950698",
                              name: '7" Golden Corn Delight',
                              category: "Veg Pizza",
                              description: "Sweet corn + mozzarella",
                              imageId: "k0m6gu9ipj0ckc0lvouu",
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66950697",
                              name: '7" Crunchy Onion and Capsicum',
                              category: "Veg Pizza",
                              description: "Onion + capsicum + mozzarella",
                              imageId: "zypxdywglcobslkmyf7u",
                              inStock: 1,
                              isVeg: 1,
                              price: 14500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "28194984",
                                  groupName: "Add-ons",
                                  choices: [
                                    {
                                      id: "20360294",
                                      name: "Tandoori Paneer",
                                      price: 5800,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360227",
                                      name: "Paneer",
                                      price: 4900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360229",
                                      name: "Onions",
                                      price: 1800,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360390",
                                      name: "Jalapeno",
                                      price: 2800,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360355",
                                      name: "Black Olives",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360324",
                                      name: "Chicken Tandoori",
                                      price: 7500,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360379",
                                      name: "Green Olives",
                                      price: 2800,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360230",
                                      name: "Capsicum ",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360264",
                                      name: "Chicken",
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360342",
                                      name: "Sweet Corn",
                                      price: 2700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 10,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "68250074",
                              name: "Mix Veg Peri-Peri Pizza [7 Inches]",
                              category: "Veg Pizza",
                              description:
                                "Serves 1 | Onion,capsicum,mushroom,sweet corn, jalapeno,paneer & mozzarella",
                              imageId: "nhjyqldqa3kpr8vbolzh",
                              inStock: 1,
                              isVeg: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "83891430",
                                  groupName: "Beverage",
                                  choices: [
                                    {
                                      id: "69078188",
                                      name: "Butter Milk",
                                      price: 5900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "29525683",
                                  groupName: "Add-ons",
                                  choices: [
                                    {
                                      id: "20360227",
                                      name: "Paneer",
                                      price: 4900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360229",
                                      name: "Onions",
                                      price: 1800,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360390",
                                      name: "Jalapeno",
                                      price: 2800,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360355",
                                      name: "Black Olives",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20361466",
                                      name: "Extra Cheese",
                                      price: 3900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360379",
                                      name: "Green Olives",
                                      price: 2800,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360230",
                                      name: "Capsicum ",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360264",
                                      name: "Chicken",
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360342",
                                      name: "Sweet Corn",
                                      price: 2700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 9,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.4",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "68250952",
                              name: "Indi Tandoori Paneer[7 Inches]",
                              category: "Veg Pizza",
                              description:
                                "Tandoori paneer,onion,capsicum,tomato & mozzarella",
                              imageId: "avcz5v1hpaqjailmchgo",
                              inStock: 1,
                              isVeg: 1,
                              price: 27500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "29525783",
                                  groupName: "Add-ons",
                                  choices: [
                                    {
                                      id: "20360227",
                                      name: "Paneer",
                                      price: 4900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360229",
                                      name: "Onions",
                                      price: 1800,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360390",
                                      name: "Jalapeno",
                                      price: 2800,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360355",
                                      name: "Black Olives",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20361466",
                                      name: "Extra Cheese",
                                      price: 3900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360379",
                                      name: "Green Olives",
                                      price: 2800,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360230",
                                      name: "Capsicum ",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360264",
                                      name: "Chicken",
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360342",
                                      name: "Sweet Corn",
                                      price: 2700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 9,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "67411726",
                              name: " Paneer Over Loaded Pizza (7 Inches)",
                              category: "Veg Pizza",
                              description: "Onion + capsicum + loads of paneer",
                              imageId: "bfix4ecxn8szaor16qp5",
                              inStock: 1,
                              isVeg: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "68250940",
                              name: "Veg Paradise Pizza [7inches]",
                              category: "Veg Pizza",
                              description:
                                "(butter pan base) pizza sauce, onion,capsicum,tomato,jalapeno,paneer,red paprika,black olive,extra cheese.",
                              imageId: "vo0menu201nernasmeyx",
                              inStock: 1,
                              isVeg: 1,
                              price: 32500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66950701",
                              name: '7" Paneer Supreme',
                              category: "Veg Pizza",
                              description:
                                "Onion + paneer + jalapenos + black olives + tomato + capsicum + mozzarella",
                              imageId: "avcz5v1hpaqjailmchgo",
                              inStock: 1,
                              isVeg: 1,
                              price: 29900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66950702",
                              name: '7" Mushroom Delight',
                              category: "Veg Pizza",
                              description:
                                "mushroom + onion + jalapenos + mozzarella",
                              imageId: "wuj0xograom9nchulyhb",
                              inStock: 1,
                              isVeg: 1,
                              price: 26000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110574472",
                              name: "Kidz Pizza[ Less Spicy More Healthy] [7 Inches]",
                              category: "Veg Pizza",
                              description:
                                "Paneer+onion+sweet corn+roasted pineapple+mozzarella",
                              inStock: 1,
                              isVeg: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "68250950",
                              name: "Veg Pizza King Special Pizza [7 Inches]",
                              category: "Veg Pizza",
                              description:
                                "Onion, capsicum,corn,jalapeno,red paprika,black olive,roasted pineapple ,paneer & mozzarella",
                              imageId: "ttyzmjd2hkqes1u9y1i9",
                              inStock: 1,
                              isVeg: 1,
                              price: 29600,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "29525782",
                                  groupName: "Add-ons",
                                  choices: [
                                    {
                                      id: "20360227",
                                      name: "Paneer",
                                      price: 4900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360229",
                                      name: "Onions",
                                      price: 1800,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360390",
                                      name: "Jalapeno",
                                      price: 2800,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360355",
                                      name: "Black Olives",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20361466",
                                      name: "Extra Cheese",
                                      price: 3900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360379",
                                      name: "Green Olives",
                                      price: 2800,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360230",
                                      name: "Capsicum ",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360264",
                                      name: "Chicken",
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "20360342",
                                      name: "Sweet Corn",
                                      price: 2700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 9,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66950703",
                              name: '7" Spicy Paneer',
                              category: "Veg Pizza",
                              description:
                                "paneer + jalapenos + red pepper + onion + mozzarella",
                              imageId: "vmlsdqq2ejluc6ldk6hk",
                              inStock: 1,
                              isVeg: 1,
                              price: 28500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66950704",
                              name: '7" Veg Dominator',
                              category: "Veg Pizza",
                              description:
                                "Onion tomato + capsicum + black olive + green olive + red pepper + mushroom + paneer mozzarella",
                              imageId: "xezyv50tftnmdbrh9otl",
                              inStock: 1,
                              isVeg: 1,
                              price: 32000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Pastries",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110498908",
                              name: "Chocolate Birthday Cake  [1 Pound]",
                              category: "Pastries",
                              inStock: 1,
                              isVeg: 1,
                              price: 46800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110498889",
                              name: "Rich Chocolate Truffle Pastry [2 Pcs]",
                              category: "Pastries",
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110498891",
                              name: "Strawberry Pastry [2 Pcs]",
                              category: "Pastries",
                              inStock: 1,
                              isVeg: 1,
                              price: 14200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110498900",
                              name: "Pineapple Pastry [2 Pcs]",
                              category: "Pastries",
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110498911",
                              name: "White Forest Cake [1pound]",
                              category: "Pastries",
                              inStock: 1,
                              isVeg: 1,
                              price: 49800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Value Meals [ Pizzas ]",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110585630",
                              name: "Veg Loaded Pizza Meal [ 7 Inches ]",
                              category: "Value Meals [ Pizzas ]",
                              description: "Veg loaded pizza meal [ 7 inches ]",
                              inStock: 1,
                              isVeg: 1,
                              price: 35800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110585636",
                              name: "Spicy Corn Pizza Meal [ 7 Inches]",
                              category: "Value Meals [ Pizzas ]",
                              description:
                                "[ 1pcs spicy corn pizza + fries + cokes ]",
                              inStock: 1,
                              isVeg: 1,
                              price: 34500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110585637",
                              name: "Achaari Paneer Pizza Meal [ 7 Inches] ",
                              category: "Value Meals [ Pizzas ]",
                              description:
                                "1 pcs achaari paneer pizza + fries+ cokes ]",
                              inStock: 1,
                              isVeg: 1,
                              price: 35800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110585638",
                              name: "Achaari Chicken Pizza Meal [ 7 Inches]",
                              category: "Value Meals [ Pizzas ]",
                              description:
                                "[ 1pcs chicken pizza + fries + cokes ]",
                              inStock: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110585639",
                              name: "Chicken Paradise Pizza Meal [ 7 Inches] ",
                              category: "Value Meals [ Pizzas ]",
                              description:
                                "[ 1pcs chicken pizza + fries + cokes ]",
                              inStock: 1,
                              price: 44500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110585642",
                              name: "Spicy Chicken Tandoori Pizza Meal [7 Inches] ",
                              category: "Value Meals [ Pizzas ]",
                              description:
                                "[ 1pcs spicy chicken tandoori pizza + fries + cokes ]",
                              inStock: 1,
                              price: 43000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110585658",
                              name: "Chicken Ultimate Pizza Meal [ 7 Inches] ",
                              category: "Value Meals [ Pizzas ]",
                              description:
                                "[ 1pcs chicken ultimate pizza + fries + cokes ]",
                              inStock: 1,
                              price: 44500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 22821030000253"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "Pizza King",
                      area: "Ushagram",
                      completeAddress:
                        "HILL VIEW PARK SB GORAI ROAD PANI TANKI HIRAPUR  ASANSOL",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
  },
  tid: "dc72bbb0-827d-4a88-960d-53335ec9a86a",
  sid: "6gz1471a-8731-4282-99a6-26051d2683b8",
  deviceId: "7a2ef8be-039b-b090-c00e-e12c749dd858",
  csrfToken: "JTLYuISX1ZYI-Fjwi5U0f_k8obMTzZ0I_dbWWZyQ",
};
