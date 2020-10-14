<template>
  <div class="shopLayout">
    <aside>
      <Breadcrumbs />
      <ul class="categoriesList">
        <li class="categoriesList__item">
          <nuxt-link class="categoriesList__item-link" to="/shop">
            All
          </nuxt-link>
        </li>
        <li class="categoriesList__item">
          <nuxt-link class="categoriesList__item-link" to="/shop/icons">
            Icons
          </nuxt-link>
        </li>
        <li class="categoriesList__item">
          <nuxt-link class="categoriesList__item-link" to="/shop/mockups">
            Mockups
          </nuxt-link>
        </li>
        <li class="categoriesList__item">
          <nuxt-link class="categoriesList__item-link" to="/shop/ui-kits">
            UI Kits
          </nuxt-link>
        </li>
        <li class="categoriesList__item">
          <nuxt-link class="categoriesList__item-link" to="/shop/freebies">
            Freebies
          </nuxt-link>
        </li>
        <li class="categoriesList__item">
          <nuxt-link class="categoriesList__item-link" to="/shop/apparels">
            Apparels
          </nuxt-link>
        </li>
      </ul>
    </aside>
    <main id="maincontent">
      <section class="optionMenu">
        <section class="search">
          <svg
            class="search__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 38.276 38.574"
          >
            <path
              d="M37.144,32.237l-8-8a15.8,15.8,0,1,0-5.276,5.137l8.07,8.07C35.384,40.885,40.591,35.683,37.144,32.237ZM4.9,15.8A10.9,10.9,0,1,1,15.8,26.7,10.914,10.914,0,0,1,4.9,15.8Z"
              fill="#1d1e20"
            />
          </svg>
          <input
            class="search__input"
            type="search"
            placeholder="Search"
            v-model="search"
            @input="handleSearch"
          />
        </section>
        <section class="filters">
          <Dropdown
            label="Sort by:"
            :items="[
              { id: 1, name: 'Newest', value: 'newest' },
              { id: 2, name: 'Price: Low to High', value: 'ltoh' },
              { id: 3, name: 'Price: High to Low', value: 'htol' },
              { id: 4, name: 'Best sellers', value: 'bs' }
            ]"
			v-on:changeOrder="handleOrder($event)"
          />
          <div class="slider">
            <p style="margin-top: 5px">
              Max Price
              <strong>${{ pricerange }}</strong>
            </p>
            <div class="slider__range">
              <span class="min">${{ min }}</span>
              <input
                class="slider__input"
                id="pricerange"
                type="range"
                v-model="pricerange"
                :min="min"
                :max="max"
                step="1"
                @input="handlePrice"
              />
              <span class="max">${{ max }}</span>
            </div>
          </div>
        </section>
      </section>
      <section>
        <ul class="products">
          <ProductItem
            v-for="product in filteredProducts"
            :key="product.id"
            :id="product.id"
            :preview_url="product.preview_url"
            :name="product.name"
            :formatted_price="product.formatted_price"
          />
        </ul>
      </section>
    </main>
  </div>
</template>
<style lang="scss" scoped>
.shopLayout {
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas:
    "aside header"
    "aside main";
  margin-top: 24px;
}
aside {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 280px;
}
#maincontent {
  padding: 32px;
}
.optionMenu {
  display: flex;
  justify-content: space-between;
  grid-area: header;
  transition: opacity 200ms ease-in 0s;
  box-shadow: rgba(4, 19, 22, 0.1) 0px 6px 30px;
  background-color: #fff;
  border-radius: 12px;
  padding: 24px 32px;
  margin-bottom: 32px;
  .search {
    display: flex;
    align-items: center;
    border-bottom: 3px solid #000;
    &__icon {
      margin-right: 16px;
      height: 28px;
      width: 28px;
    }
    &__input {
      display: flex;
      border: 0;
      padding: 0;
      min-height: 45px;
      min-width: 250px;
      font-size: 32px;

      &::placeholder {
        padding-top: 12px;
        color: #000;
      }
    }
  }
}
.filters {
  display: flex;
  align-items: center;
  .filter {
    &__input {
      border: 3px solid #f4f5f6;
      border-radius: 12px;
      height: 35px;
    }
  }
  .slider {
    display: flex;
    flex-direction: column;
    &__range {
      display: flex;
      margin-top: 6px;
      align-items: center;
    }
    &__input {
      -webkit-appearance: none;
      appearance: none;
      background: red;
      border-radius: 12px;
      margin: 0 12px;
      height: 8px;
      width: 150px;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        background: red;
        border: 4px solid #fff;
        border-radius: 100%;
        box-shadow: 0px 3px 12px 0px rgba(29, 30, 32, 0.5);
        cursor: pointer;
        height: 23px;
        width: 23px;
      }
    }
  }
}
.products {
  display: grid;
  grid-area: main;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  padding: 0;
  list-style-type: none;
}
.productFilter {
  grid-area: aside;
}
.categoriesList {
  list-style-type: none;
  padding: 0;
  margin-top: 24px;
  width: 85px;
  &__item {
    padding: 12px 0;
    &-link {
      font-size: 20px;
      text-align: center;
      color: #000;
      text-decoration: none;
      &:hover {
        font-weight: 800;
      }
    }
  }
}
</style>
<script>
import { mapState, mapGetters } from "vuex";
import ProductItem from "@/components/ProductItem";
import Breadcrumbs from "@/components/Breadcrumbs";
import Dropdown from "@/components/Dropdown";

export default {
  data: function() {
    return {
      search: this.$store.getters.getSearch,
      order: this.$store.getters.getOrder,
      pricerange: this.$store.getters.getPricerange,
      min: 0,
      max: 100
    };
  },
  components: {
    Breadcrumbs,
    ProductItem,
    Dropdown
  },
  computed: {
    ...mapGetters({
      products: "getProducts",
      filteredProducts: "getFilteredProducts",
      product: "getProduct"
    })
  },
  methods: {
    handleSearch() {
      this.$store.dispatch("filterSearch", this.search);
    },
    handlePrice() {
      this.$store.dispatch("filterPrice", this.pricerange);
    },
    handleOrder(value) {
      this.order = value
      if(value == "1") {
        this.$store.dispatch("setFilteredProducts", this.products);
      }
      this.$store.dispatch('filterOrder', this.order);
    }
  }
};
</script>
