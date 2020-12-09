<template>
  <section class="contact-section">
    <address class="address">
      <h3 class="address__title">Email</h3>
      <a class="address__link" href="mailto:info@klarr.ca">info@klarr.ca</a>
    </address>
    <ul :class="'socialMediaList socialMediaList' + '--' + direction">
      <li class="socialMediaList__item">
        <a
          aria-label="Link to Klarr Agency instagram page"
          target="_blank"
          href="https://www.instagram.com/klarr.agency"
          class="socialMediaList__link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="iconmonstr-instagram-11"
              d="M12,2.163c3.2,0,3.584.012,4.85.07,3.252.148,4.771,1.691,4.919,4.919.058,1.265.069,1.645.069,4.849s-.012,3.584-.069,4.849c-.149,3.225-1.664,4.771-4.919,4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.7-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.013-3.583.07-4.849C2.381,3.924,3.9,2.38,7.151,2.232,8.417,2.175,8.8,2.163,12,2.163ZM12,0C8.741,0,8.333.014,7.053.072,2.7.272.273,2.69.073,7.052.014,8.333,0,8.741,0,12s.014,3.668.072,4.948c.2,4.358,2.618,6.78,6.98,6.98C8.333,23.986,8.741,24,12,24s3.668-.014,4.948-.072c4.354-.2,6.782-2.618,6.979-6.98C23.986,15.668,24,15.259,24,12s-.014-3.667-.072-4.947c-.2-4.354-2.617-6.78-6.979-6.98C15.668.014,15.259,0,12,0Zm0,5.838A6.163,6.163,0,1,0,18.162,12,6.162,6.162,0,0,0,12,5.838ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.406,4.155a1.44,1.44,0,1,0,1.439,1.44A1.441,1.441,0,0,0,18.406,4.155Z"
              :fill="iconColor"
            />
          </svg>
        </a>
      </li>
      <li class="socialMediaList__item">
        <a
          aria-label="Link to Klarr Agency linkedin page"
          target="blank"
          href="https://www.linkedin.com/company/klarr-agency/"
          class="socialMediaList__link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="iconmonstr-linkedin-3"
              d="M19,0H5A5,5,0,0,0,0,5V19a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V5A5,5,0,0,0,19,0ZM8,19H5V8H8ZM6.5,6.732A1.764,1.764,0,1,1,8.25,4.968,1.758,1.758,0,0,1,6.5,6.732ZM20,19H17V13.4c0-3.368-4-3.113-4,0V19H10V8h3V9.765c1.4-2.586,7-2.777,7,2.476Z"
              :fill="iconColor"
            />
          </svg>
        </a>
      </li>
      <li class="socialMediaList__item">
        <a
          aria-label="Link to Klarr Agency dribbble page"
          target="_blank"
          href="https://dribbble.com/Klarragency/shots"
          class="socialMediaList__link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="iconmonstr-dribbble-1"
              d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm9.885,11.441a21.4,21.4,0,0,0-7.1-.073c-.244-.563-.5-1.125-.767-1.68a14.16,14.16,0,0,0,5.548-4.082A9.863,9.863,0,0,1,21.885,11.441ZM18.043,4.159a12.135,12.135,0,0,1-4.986,3.68A46.287,46.287,0,0,0,9.569,2.4a9.771,9.771,0,0,1,8.474,1.758ZM7.527,3.166a44.591,44.591,0,0,1,3.537,5.381A31.8,31.8,0,0,1,2.38,9.652,9.931,9.931,0,0,1,7.527,3.166ZM2.087,12l.013-.256a33.536,33.536,0,0,0,9.95-1.322q.349.713.67,1.432a15.445,15.445,0,0,0-8.337,6.48A9.865,9.865,0,0,1,2.087,12Zm3.829,7.81a13.476,13.476,0,0,1,7.6-6.027,39.137,39.137,0,0,1,2.043,7.46A9.824,9.824,0,0,1,5.916,19.81Zm11.586.43a41.1,41.1,0,0,0-1.92-6.9,19.966,19.966,0,0,1,6.2.2,9.923,9.923,0,0,1-4.279,6.7Z"
              :fill="iconColor"
            />
          </svg>
        </a>
      </li>
    </ul>
  </section>
</template>
<style lang="scss">
.address {
  &__title {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: $size-bold;
  }
  &__link {
    color: #fff;
    font-size: 18px;
    font-style: normal;
    text-decoration: none;
    &:hover {
      color: $primary-color;
    }
  }
}
.socialMediaList {
  list-style-type: none;
  padding: 0;
  $self: &;
  &__link {
    display: flex;
  }
  &--vertical {
    #{ $self }__item {
      margin-bottom: 24px;
      &:last-of-type {
        margin-bottom: 0;
      }
      &:hover {
        svg path {
          fill: $primary-color;
        }
      }
    }
  }
  &--horizontal {
    display: flex;
    #{ $self }__item {
      display: flex;
      align-items: center;
      margin-right: 24px;
      &:last-of-type {
        margin-right: 0;
      }
      &:hover {
        svg path {
          fill: $primary-color;
        }
      }
    }
  }
}
</style>
<script>
export default {
  props: {
    direction: {
      type: String,
      default: "vertical",
      validator: function(value) {
        // List of display layout
        return ["vertical", "horizontal"].indexOf(value) !== -1;
      }
    },
    iconColor: {
      type: String,
      default: "#f4f5f6"
    }
  }
};
</script>
