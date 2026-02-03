import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Book.css";

const Book = () => {
  const { category } = useParams();
  const normalizedCategory =
    category === "custom-cakes" ? "cakes" :
      category === "cup-cakes" ? "cupcakes" :
        category;

  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const formatPrice = (price, category) => {
    const amount = price.replace(/[^\d]/g, ""); // extracts numbers only

    if (normalizedCategory === "cakes") {
      return `₹${amount}.00`;
    }

    return `₹${amount}.00 / piece`;
  };


  // 🔥 ONLY CHANGE IMAGE URLs HERE
  const products = {
    cakes: [
      {
        id: 1, img: "https://ocakes.in/storage/app/public/images/item/item-642f49efea42b.jpg", title: "Chocolate Mirror Glaze Cake",
        description: "It typically features a rich chocolate mousse or sponge interior, coated in a flawless, glass-like cocoa glaze",
        price: "₹680", rating: 4.7,
        reviews: 128
      },
      {
        id: 2, img: "https://images.openai.com/static-rsc-3/49hccE_GcLFUu8puipkNo-t26sv_FfmgajS0ukFtSkhJWJEY3erbAxJywGfhs_rV-bjBZVQwoIjjrPMFlGdRlxVv0YOzk1jC4Fo_xGSCTLI?purpose=fullsize", title: "Floral Tiered Wedding Cake - textured buttercream finish",
        description: "This cake is designed with a romantic, timeless aesthetic that focuses on soft textures and natural elements",
        price: "₹640", rating: 4.8,
        reviews: 214
      },
      {
        id: 3, img: "https://assets.winni.in/product/primary/2023/3/83233.jpeg?dpr=2&w=220", title: "Black Forest Cake",
        description: "The cake is fully coated in a smooth, white whipped cream frosting.",
        price: "₹630", rating: 4.5,
        reviews: 96
      },
      {
        id: 4, img: "https://images.openai.com/static-rsc-3/Zik9puiCY7wOXK4tIQFF4rZlzi26r2jFDuUsKMgOTXA0cf3UvJrFxcVXsVMBjiMFaHN13ZOyXPAz28jo-AqAR_BLRPygmfqnCQ29S2_mfoY?purpose=fullsize", title: "Pink Drip Birthday Cake",
        description: "A single-tier round cake featuring a pink ganache drip over a light-colored frosting.",
        price: "₹650", rating: 4.6,
        reviews: 143
      },
      {
        id: 5, img: "https://images.openai.com/static-rsc-3/bBbFgFic4uMM0BuKH8Xta9rkNfk9WJJpRFJ6LW7qBz93mAAkbt3etIOgCUx4eFmJ1_9HiNQTAlTmnqdAjjpOhRQTgfhuNveUTpJ1iAIrMdM?purpose=fullsize", title: "Glazed Chocolate Loaf Cake",
        description: "A dense, moist chocolate loaf with a tight crumb, featuring a thick, shiny dark chocolate ganache or glaze poured over the top. It is shown sliced on a wooden board, highlighting its rich, uniform texture.",
        price: "₹620", rating: 4.4,
        reviews: 82
      },
      {
        id: 6, img: "https://theobroma.in/cdn/shop/files/FreshFruit_CreamCake.jpg?v=1751546164", title: "Fresh Fruit Cream Cake",
        description: "Light vanilla sponge topped with fresh seasonal fruits and fluffy whipped cream.",
        price: "₹750", rating: 4.7,
        reviews: 165
      },
      {
        id: 7, img: "https://imgcdn.iar.net.in/d992d54ae97874fee83cbb29d41bcf80044a7a395512a9c73246fe9af44c990dfddf8fba12f8c072ddec1161af02121a138355a054b5cb9acce0f61ff442a697/fit/1000/1000/sm/1/plain/https%3A//assetv2.iar.net.in/trial735.iar.net.in/28_6_2023/WAnTQkw/698c4cf5955f4e308debcc5dc228bbcb.JPG", title: "Chocolate Basket Birthday Cake",
        description: "This is a round celebration cake featuring a fence of vertical dark chocolate sticks or cigarello-style wafers encircling the sides.",
        price: "₹780", rating: 4.9,
        reviews: 301
      },
      {
        id: 8, img: "https://tiimg.tistatic.com/fp/1/002/259/fresh-cream-cakes-523.jpg", title: "Chocolate Lace Fruit Cake",
        description: "This is a vibrant celebration cake featuring a dense topping of assorted fresh fruits—likely including kiwi, oranges, and cherries—glaced for a high-shine finish.",
        price: "₹550", rating: 4.3,
        reviews: 74
      },
      {
        id: 9, img: "https://assets.epicurious.com/photos/62f2760d1d5593646cff30bd/1%3A1/w_2560%2Cc_limit/ChineseSponge_RECIPE_080420_37923.jpg", title: "Fresh Fruit Cream Cake",
        description: "This is a classic, light sponge cake entirely enveloped in smooth white whipped cream frosting.",
        price: "₹480", rating: 4.2,
        reviews: 61
      },
    ],
    cupcakes: [
      {
        id: 1, img: "https://sunflourbakingcompany.com/cdn/shop/articles/Copy-of-Copy-of-Sunflour-Baking-Company-83-of-91-1080x675.jpg?v=1560364306", title: "Classic Vanilla Cupcakes",
        description: "Soft vanilla cupcakes topped with smooth buttercream frosting, perfect for every celebration.",
        price: "₹120 / piece", rating: 4.3,
        reviews: 58
      },
      {
        id: 2, img: "https://png.pngtree.com/thumb_back/fw800/background/20251210/pngtree-three-gourmet-cupcakes-with-vibrant-frosting-and-delicate-edible-flowers-showcasing-image_20786616.webp", title: "Gourmet Floral Cupcakes",
        description: "Premium cupcakes decorated with vibrant frosting and delicate edible flowers.",
        price: "₹180 / piece", rating: 4.6,
        reviews: 92
      },
      {
        id: 3, img: "https://recipesblob.oetker.co.uk/assets/1d00bbe07b7e4719bd2b4ed74ffbe31e/1680x580/rainbow-cupcakes-ai.webp", title: "Rainbow Delight Cupcakes",
        description: "Colorful rainbow cupcakes filled with fun layers and topped with creamy frosting.",
        price: "₹150 / piece", rating: 4.4,
        reviews: 76
      },
      {
        id: 4, img: "https://assets.winni.in/product/primary/2022/4/58473.jpeg?dpr=1&w=500", title: "Chocolate Fudge Cupcakes",
        description: "Moist chocolate cupcakes loaded with rich fudge frosting for true chocolate lovers.",
        price: "₹160 / piece", rating: 4.5,
        reviews: 109
      },
      {
        id: 5, img: "https://www.cadburydessertscorner.com/hubfs/dc-website-2022/articles/colorful-cupcakes-to-celebrate-friendship-day-icing-ideas-for-a-personal-touch/colorful-cupcakes-to-celebrate-friendship-day-icing-ideas-for-a-personal-touch.webp", title: "Friendship Special Cupcakes",
        description: "Bright and cheerful cupcakes with colorful icing, perfect for gifting and celebrations.",
        price: "₹140 / piece", rating: 4.2,
        reviews: 41
      },
      {
        id: 6, img: "https://images.openai.com/static-rsc-3/X4UxIcEXijURUAev2zK98irbGDzqyGMQUEKA6X2nD1I4y-udB48svkBJVyFJlPRhOmydF8r4udgl4DoI5lSk3Gz3SSGymxAx0UrgCYFw8EM?purpose=fullsize", title: "Chocolate Swirl Cupcakes",
        description: "Delicious cupcakes with chocolate swirls and creamy frosting for a rich taste.",
        price: "₹170 / piece", rating: 4.6,
        reviews: 134
      },
      {
        id: 7, img: "https://images.openai.com/static-rsc-3/7P2pIrzMoKdn7g9JbRtq0EMeqebH1Kgnfh5HDxWEZ6DpcP9tmeXpA_Amj_ns7YEfWi9XoZfufuEx-m9lHBQEoUtK9lbRYp3hUPxwZ_2fpjo?purpose=fullsize", title: "Chocolate Drizzle Cupcakes",
        description: "These are individual-sized chocolate cupcakes presented in dark paper liners.",
        price: "₹160 / piece", rating: 4.4,
        reviews: 88
      },
      {
        id: 8, img: "https://images.openai.com/static-rsc-3/71jFtrBJiDJz52kv_0DFMXJelRSkLk23F7GdOOE8Xn9VsmCc2MScoEDrziv8VOEKQq0Dx_YpIBTR6mDuznU2S_KYuT4URw_pVR6YM1aNOJo?purpose=fullsize", title: "Chocolate KitKat Cupcakes",
        description: "These are indulgent chocolate cupcakes topped with a swirl of light mocha or chocolate-flavored buttercream frosting.",
        price: "₹170 / piece", rating: 4.5,
        reviews: 97
      },
      {
        id: 9, img: "https://images.openai.com/static-rsc-3/yBmsS__4EhAhtAT8qfB6cRwGPhCS0P_JuJVuFqACuTmcBHDNeYyN_wdTDS3KN3jUm6xR18swQMVZSRNK2LkheiIvrWiLHdE4nVxdHF29DoM?purpose=fullsize", title: "Premium Designer Cupcakes",
        description: "Handcrafted designer cupcakes with premium frosting and artistic finish.",
        price: "₹200 / piece", rating: 4.8,
        reviews: 156
      },
    ],
    pastries: [
      {
        id: 1, img: "https://images.openai.com/static-rsc-3/lGJaEZKK5zKIGbn3jLINUC9JZtW88O-LDr1NaNej3QuTep5IG47ZvCjjrOPAvQlJzPWeFURsfEZs2clVJZYUYSaJvV07csEiN0fNwT52A4U?purpose=fullsize", title: "Assorted Gourmet Pastries",
        description: "These are indulgent chocolate cupcakes topped with a swirl of light mocha or chocolate-flavored buttercream frosting.",
        price: "₹150 / piece", rating: 4.5,
        reviews: 84
      },
      {
        id: 2, img: "https://www.foodandwine.com/thmb/rHA0d1aIMTwcxoRrTlqehLgzLUE%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/HD-fw200609_trufflecake-1f285ff1b07944d7ae5ceee94211bd9d.jpg", title: "Chocolate Truffle Pastry",
        description: "Rich chocolate sponge with smooth truffle cream made using premium cocoa.",
        price: "₹170 / piece", rating: 4.7,
        reviews: 143
      },
      {
        id: 3, img: "https://images.openai.com/static-rsc-3/mAlrHd89m3LB8k-iDeIYgEUa4m70M_H6aSttTXhC8EWZ18j0HXdJ1-FCaC_phLYYaZWDJ3rjAgSPvZ4kYjUIfPdMvGXYKQ4p3s5JwywrfFA?purpose=fullsize", title: "Mini Fruit Tarts",
        description: "These are small, individual-sized pastries featuring a golden, buttery shortcrust shell filled with a smooth custard or pastry cream.",
        price: "₹160 / piece", rating: 4.6,
        reviews: 119
      },
      {
        id: 4, img: "https://images.openai.com/static-rsc-3/w0EPsrsFXBXpf-wGg5q2amNtHyQsWvVrFMEJ5PSJEvDHTWkaAbtnSD2UFLKBbDRi0iBBGLpWN8ga_dwOgUTYE7S9ymXvjGfGnL8SRLQqSLY?purpose=fullsize", title: "Tiered Fruit Tarts",
        description: "These are dainty, individual-sized desserts served on a decorative two-tier gold-handled stand.",
        price: "₹180 / piece", rating: 4.8,
        reviews: 176
      },
      {
        id: 5, img: "https://images.openai.com/static-rsc-3/3CuzsZOCLDGrEY2wF405GwXowJ4kC54uL9GYuLTKYf9t-Zvusq00e2bVe_EOzzbi84GSfHTgPD710XTOUodxNyki1G75w4_OeNjauDYx9Yc?purpose=fullsize", title: "Butter Fruit Pastries",
        description: "These are rustic, small-batch tarts featuring a golden, buttery crust with various gourmet fillings.",
        price: "₹150 / piece", rating: 4.4,
        reviews: 67
      },
      {
        id: 6, img: "https://theobroma.in/cdn/shop/files/EgglessFreshCreamPineapplePastry02_ff00f5c0-4117-49d6-94cf-e5e53a43b7c0.jpg?v=1711099923", title: "Eggless Pineapple Pastry",
        description: "Light eggless sponge topped with pineapple glaze and fresh whipped cream.",
        price: "₹140 / piece", rating: 4.3,
        reviews: 52
      },
      {
        id: 7, img: "https://images.openai.com/static-rsc-3/Ntinq-9kcBp_cKNM7Nm3nUaOq94vD95yXZ5vBtWu9W92JrVGUnQ_okc0xYNVYthOqljZN3jT1VDmXzLZzGsEhTFXW2evREs0QKcyFrST-7M?purpose=fullsize", title: "Strawberry Cream Danish",
        description: "This is a flaky, golden-brown puff pastry with a square base and raised edges.",
        price: "₹160 / piece", rating: 4.5,
        reviews: 94
      },
      {
        id: 8, img: "https://prd-upmarket.s3.ap-south-1.amazonaws.com/AA0001/generated/ar1x1/large/VPAFRCAKE-Large.jpg", title: "Pineapple Cream Cake",
        description: "This is a classic round layer cake covered in smooth white whipped cream frosting with a textured, ridged pattern on the sides.",
        price: "₹130 / piece", rating: 4.2,
        reviews: 46
      },
      {
        id: 9, img: "https://images.openai.com/static-rsc-3/4rODO3PQTB5hlCjxC6ohMjKTPThOWI3FOOmNEhTonWq22pgD0PbdUp6nVGQei7w16PTctFBsChk-okIQWpkCjdzA4xNR-qlDqMmoqyqWT4o?purpose=fullsize", title: "Choux Pastry Profiteroles",
        description: "This is an assortment of bite-sized cream puffs made from light choux dough.",
        price: "₹190 / piece", rating: 4.7,
        reviews: 162
      }
    ]
  };
  const allProducts = [
    ...products.cakes,
    ...products.cupcakes,
    ...products.pastries
  ];


  const list =
    normalizedCategory === "all"
      ? allProducts
      : products[normalizedCategory] || products.cakes;


  return (
    <div className="book-page">

      <h1>
        {normalizedCategory === "all"
          ? "ALL TREATS"
          : normalizedCategory.toUpperCase()}
      </h1>


      <div className="cake-grid">
        {list.map(item => (
          <div className="cake-card" key={item.id}>
            <img src={item.img} alt={category} />
            <h3 className="cake-title">{item.title}</h3>
            <button onClick={() => setSelectedItem(item)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="modal-overlay">
          <div className="modal-card">
            <span className="close" onClick={() => setSelectedItem(null)}>
              ×
            </span>

            <div className="modal-content">
              {/* LEFT IMAGE */}
              <div className="modal-image">
                <img src={selectedItem.img} alt={selectedItem.title} />
              </div>

              {/* RIGHT DETAILS */}
              <div className="modal-details">
                <h2>{selectedItem.title}</h2>

                {selectedItem.description && (
                  <p className="cake-desc">{selectedItem.description}</p>
                )}
                <div className="divider"></div>

                <p className="rating">⭐⭐⭐⭐⭐ (24 reviews)</p>
                <h3>{formatPrice(selectedItem.price, category)}</h3>

                {/* CAKES → WEIGHT */}
                {normalizedCategory === "cakes" && (<select>
                  <option>Select Weight</option>
                  <option>0.5 Kg</option>
                  <option>1 Kg</option>
                  <option>2 Kg</option>
                </select>
                )}

                {/* CUPCAKES & PASTRIES → QUANTITY */}
                {(normalizedCategory === "cupcakes" ||
                  normalizedCategory === "pastries") && (
                    <div className="quantity-box">
                      <label>Quantity</label>
                      <select
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}


                <textarea placeholder="Message on Cake" />

                <button className="add-btn">ADD TO BASKET</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
