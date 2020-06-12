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
      <!-- <div class="optionMenu">
                <input type="text" placeholder="Search" />
                <ul class="optionMenu__list">
                    <li class="optionMenu__list-item">Cart</li>
                </ul>
            </div> -->
      <section>
        <ul class="products">
          <ProductItem
            v-for="product in products"
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
  padding: 12px;
  margin-bottom: 32px;
  input {
    background-color: #fafafa;
    border-radius: 20px;
    border: 0;
    padding: 12px;
  }
  &__list {
    display: flex;
    padding: 0;
    list-style-type: none;
    &-item {
      padding: 12px;
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
import { mapState } from "vuex";
import ProductItem from "@/components/ProductItem";
import Breadcrumbs from "@/components/Breadcrumbs";

export default {
  props: {
    data: {
      required: true
    }
  },
  components: {
    Breadcrumbs,
    ProductItem
  },
  computed: {
    products() {
      return this.data;
    }
  }
};
</script>
