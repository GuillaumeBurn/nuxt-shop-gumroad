<template>
    <div class="sidenav-container">
        <div
            class="burger-menu interactive-element"
            id="burgerMenu"
            role="button"
            @click="$store.dispatch('nav/toggleSidebar')"
        ></div>
        <div v-if="isSidebar" class="backdrop" @click="hideSidebar"></div>
        <transition name="slide-side">
            <div v-if="isSidebar" class="sidenav row">
                <section class="sidenav__interaction col-md-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="abstract-klarr"
                        viewBox="0 0 608.76 709.03"
                    >
                        <g
                            data-name="Design 1"
                            transform="translate(-605 -127.3)"
                        >
                            <path
                                data-name="Path 15"
                                d="M887.1 574.02a141.98 141.98 0 010 201.56L638.16 526.6A110.59 110.59 0 01607 452.85a110.59 110.59 0 0131.2-73.78l248.9-248.94a141.98 141.98 0 010 201.56l-75.02 75.55-7.16 7.22a53.1 53.1 0 00-8.25 9.97h0a52.97 52.97 0 00-8.57 28.42c.5 14.42 6 28.19 16.8 38.39z"
                                fill="#3d3f42"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 16"
                                d="M814.4 384.12a33.4 33.4 0 01-9.28 30.15l-.19.2a53.1 53.1 0 00-8.25 9.96h0v-61.1c10.11 3.74 15.8 11.6 17.72 20.79z"
                                fill="#e5204d"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <circle
                                data-name="Ellipse 6"
                                cx="28.27"
                                cy="28.27"
                                r="28.27"
                                transform="translate(724.3 419.4)"
                                fill="#f9c80b"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 17"
                                d="M773.54 428.7a25.94 25.94 0 00-19.32 12.8 12.74 12.74 0 01-13.1 6.46 17.6 17.6 0 00-16.22 5.47 27.9 27.9 0 01-.6-5.77 28.27 28.27 0 0149.24-18.95z"
                                fill="#adbca5"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <circle
                                data-name="Ellipse 7"
                                cx="21.7"
                                cy="21.7"
                                r="21.7"
                                transform="translate(865.95 587.32)"
                                fill="#f08062"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 18"
                                d="M909.37 609.02a21.7 21.7 0 01-43.18 3.19 21.6 21.6 0 0112.57-4.01h.1a15.88 15.88 0 0012.98-6.38 21.78 21.78 0 0111.3-8 21.58 21.58 0 016.22 15.2z"
                                fill="#f9c80b"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 19"
                                d="M796.67 220.57v163.1a36.22 36.22 0 01-47.97 34.27l-.25-.1-1.4-.53a8.2 8.2 0 01-.7-.29 36.17 36.17 0 01-22-33.34v-90.75z"
                                fill="#f08062"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 20"
                                d="M815.07 703.24l44.37-84.36c31.02-58.58 11.84-131.2-44.37-166.36z"
                                fill="#e5204d"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 21"
                                d="M914.65 320.59c.3 3.08.45 6.19.45 9.3a93.77 93.77 0 01-18.17 55.72 97.4 97.4 0 01-9.84 11.46V130.46l.18-.15a140.59 140.59 0 0141.12 86.65c.45 4.62.68 9.28.68 13.95a141.33 141.33 0 01-11.56 56.24 50.44 50.44 0 00-3.6 27.88c.32 1.84.6 3.7.74 5.56z"
                                fill="#e5204d"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 22"
                                d="M840.34 378.8l46.77-47.1V131.25a.46.46 0 00-.78-.33l-73.66 73.67c0 9.47 3.22 17 6.52 25.3 6 15.16 4.55 32.33-4.73 45.73-1.77 2.57-4.2 5.31-5.65 8.1-5.14 9.98-7.28 20.3-7.28 32.3 0 27.4 15.82 50.99 38.26 63.38z"
                                fill="#fbe8e3"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 23"
                                d="M815.07 520.88v182.67l-33.67-33.67v-149a11.68 11.68 0 10-23.36 0v146.47a33.73 33.73 0 01-33.7 33.77V520.88a45.4 45.4 0 0175.38-34.15h0l.48.43h0a44.67 44.67 0 015.6 6.07h0a45.16 45.16 0 019.27 27.65z"
                                fill="#fbe8e3"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 24"
                                d="M781.35 528.98V669.7l-23.34-23.36.08-117.35a11.63 11.63 0 1123.26 0z"
                                fill="#adbca5"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 25"
                                d="M838.82 379.1a144.92 144.92 0 01-107.35-93.37l83.29-83.29a72.28 72.28 0 005.08 26.72c6 15.09 4.53 32.18-4.7 45.53a74.02 74.02 0 00-4.82 8.01 72.43 72.43 0 0028.6 96.06.18.18 0 11-.1.34z"
                                fill="#adbca5"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 26"
                                d="M719.13 482.37l-4 27.55a29.23 29.23 0 01-12.42 19.91 36.62 36.62 0 00-6.15 55.17l-.12-.09-12.86-12.85a71.95 71.95 0 01-15.12-42.5 80.17 80.17 0 0050.67-47.19z"
                                fill="#f9c80b"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 27"
                                d="M724.35 612.78V446.73l-9.18 63.19a29.24 29.24 0 01-12.42 19.92h0a36.62 36.62 0 00-5.22 56.11z"
                                fill="#f08062"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 28"
                                d="M681.96 335.28c25.46-26.08 42.34-61.75 42.34-101.07v220.51c0 43.31-36.3 78.44-79.66 78.44l-6.5-6.52A110.59 110.59 0 01607 452.85a110.59 110.59 0 0131.2-73.78l41.32-41.33 2.44-2.46z"
                                fill="#e5204d"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 29"
                                d="M1111.13 553.08a99.9 99.9 0 10-99.18-100.62 99.9 99.9 0 0099.18 100.62z"
                                fill="#f08062"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 30"
                                d="M1181.96 382a.35.35 0 01-.37.57 99.92 99.92 0 00-109.48 161.75.27.27 0 01-.29.43A99.92 99.92 0 111181.95 382z"
                                fill="#fbe8e3"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 31"
                                d="M1162.85 396.12a67 67 0 01-29.2 55.36 50.33 50.33 0 01-15.16 6.8 65.51 65.51 0 00-10.28 3.76 67.2 67.2 0 00-19.4 13.56V299.51l62.1 60.2a25.8 25.8 0 014.78 6.3h0a66.75 66.75 0 017.16 30.1z"
                                fill="#f9c80b"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 32"
                                d="M1211.73 453.89a99.95 99.95 0 01-138.65 91.4 67.14 67.14 0 0135.12-83.24 65.81 65.81 0 0110.28-3.76 50.33 50.33 0 0015.15-6.8 67 67 0 0029.2-55.37 68.65 68.65 0 00-9.02-33.62 99.9 99.9 0 0157.92 91.4z"
                                fill="#e5204d"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 33"
                                d="M929.06 674.79A140.72 140.72 0 01908 749.22l-.54.85a144.05 144.05 0 01-9.53 13.39c-1.07 1.32-2.11 2.57-3.16 3.78a104.8 104.8 0 01-7.7 8.3 169.03 169.03 0 01-7.65 6.71l-64.4 50V703.24c.5-39.46 32.6-72.44 72.16-72.37a71.95 71.95 0 0138 10.85 142.3 142.3 0 013.88 33.07z"
                                fill="#adbca5"
                                stroke="#3d3f42"
                                stroke-miterlimit="10"
                                stroke-width="4"
                            />
                            <path
                                data-name="Path 34"
                                d="M821.82 265.74S784 346.32 841.17 378.27c-18.19-7.8-65.6-50.86-19.35-112.53z"
                                fill="#3d3f42"
                            />
                            <path
                                data-name="Path 35"
                                d="M816.3 798.99s13.5 19.5 49.67-8.44c-13.17 12.47-50.88 41.75-50.88 41.75z"
                                fill="#3d3f42"
                            />
                            <path
                                data-name="Path 36"
                                d="M888.8 331.78s-1.05 41.67 19.31 29.08c.4 9.11-21.02 37.53-21.02 37.53z"
                                fill="#3d3f42"
                            />
                            <path
                                data-name="Path 37"
                                d="M722.63 294.56s-8.91-1.08-17.84 13.85c2.62-9.02 19.53-48.78 19.53-48.78z"
                                fill="#3d3f42"
                            />
                            <path
                                data-name="Path 38"
                                d="M816.68 499.63s.4-42.83 18.63-29.02c-5-7.03-20.17-17.18-20.17-17.18z"
                                fill="#3d3f42"
                            />
                            <path
                                data-name="Path 39"
                                d="M1090.52 346.23s3.07-38.16 21.2-22.21c-5.25-7.95-23.72-25.9-23.72-25.9z"
                                fill="#3d3f42"
                            />
                            <path
                                data-name="Path 40"
                                d="M1097.57 550.35s-29.55-12.51-17.53-49.75c13.92-36.6 36.83-38.9 43.45-42.18-14.06 2.38-41.12 13.38-50.62 42.83s1.02 44.75 1.02 44.75z"
                                fill="#3d3f42"
                            />
                        </g>
                    </svg>
                </section>
                <section class="sidenav__content col-md-7">
                    <nav class="mainNav">
                        <ul class="mainNav__list">
                            <li class="mainNav__item" @click="hideSidebar">
                                <span class="mainNav__number">01</span>
                                <nuxt-link
                                    class="mainNav__link hover__link"
                                    :to="'/' + $i18n.locale"
                                >
                                    {{ $t("links.home") }}
                                </nuxt-link>
                            </li>
                            <li class="mainNav__item" @click="hideSidebar">
                                <span class="mainNav__number">02</span>
                                <nuxt-link
                                    class="mainNav__link hover__link"
                                    :to="'/' + $i18n.locale + '/shop'"
                                >
                                    {{ $t("links.shop") }}
                                </nuxt-link>
                            </li>
                            <!-- <li class="mainNav__item" @click="hideSidebar">
                            <nuxt-link
                                class="mainNav__link hover__link"
                                :to="'/' + $i18n.locale + '/services'"
                            >
                                {{ $t("links.services") }}
                            </nuxt-link>
                        </li> -->
                            <li class="mainNav__item" @click="hideSidebar">
                                <span class="mainNav__number">03</span>
                                <nuxt-link
                                    class="mainNav__link hover__link"
                                    :to="'/' + $i18n.locale + '/blog'"
                                >
                                    {{ $t("links.blog") }}
                                </nuxt-link>
                            </li>
                            <li class="mainNav__item" @click="hideSidebar">
                                <span class="mainNav__number">04</span>
                                <nuxt-link
                                    class="mainNav__link hover__link"
                                    :to="'/' + $i18n.locale + '/about'"
                                >
                                    {{ $t("links.about") }}
                                </nuxt-link>
                            </li>
                            <li class="mainNav__item" @click="hideSidebar">
                                <span class="mainNav__number">05</span>
                                <nuxt-link
                                    class="mainNav__link hover__link"
                                    :to="'/' + $i18n.locale + '/contact'"
                                >
                                    {{ $t("links.contact") }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>
                    <div class="sidenav__social">
                        <SocialMedia
                            :direction="direction"
                            :iconColor="iconColor"
                        />
                        <InputSwitch />
                    </div>
                </section>
            </div>
        </transition>
    </div>
</template>
<style lang="scss">
.dark-theme {
    .drawer.mainNav {
        .mainNav__link {
            color: $black-1;
        }
    }
    .burger-menu {
        path {
            stroke: #fff;
        }
    }
    .sidenav-container.active {
        .burger-menu {
            path {
                stroke: #000;
            }
        }
    }
}
.dark-theme,
.blog-post {
    .drawer-toggle .bar {
        background-color: $white-1;
    }
}
.blog-post {
    .blog-header.dark {
        .drawer-toggle .bar {
            background-color: $black-1;
        }
    }
    .burger-menu {
        path {
            stroke: #fff;
        }
    }
}
#burgerMenu {
    transform: translate3d(0, 0, 0);
    opacity: 1;
    height: 50px;
    width: 50px;
    top: 24px;
    right: 24px;
    position: fixed;
    z-index: 103;
}
.sidenav-container {
    height: 100%;
    width: 100%;
}
.sidenav {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $white-1;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 102;
    $self: &;
    &__interaction {
        display: flex;
        justify-content: center;
        height: 100%;
        .abstract-klarr {
            width: 80%;
        }
    }
    &__content {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        border-left: 1px solid #ced6e0;
        position: relative;
        height: 100%;
        .address {
            display: none;
        }
        .mainNav {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
        #{$self}__social {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-bottom: 24px;
            padding-right: 24px;
            width: 100%;
            .switch-wrapper {
                margin-left: 64px;
            }
            .switch__label {
                color: $black-1;
                &.nuxt-link-exact-active {
                    color: $primary-color;
                }
            }
        }
    }

    .mainNav {
        position: absolute;
        top: 50%;
        right: 45%;
        transform: translate(-50%, -50%);
        &__list {
            display: flex;
            flex-direction: column;
            padding: 0;
            list-style-type: none;
            align-items: center;
            flex-wrap: wrap;
            height: 236px;
            width: 82%;
        }
        &__item {
            display: flex;
            align-items: center;
            position: relative;
            margin: 1.5rem 16px;
        }
        &__number {
            position: absolute;
            top: 0;
            left: -24px;
        }
        &__link {
            display: flex;
            color: $black-1;
            text-decoration: none;
            font-size: 56px;
            font-family: $merriweather;
            font-weight: $size-black;
            mix-blend-mode: overlay;
            .letter {
                display: inline-block;
                line-height: 1em;
            }
            &:hover {
                font-weight: 800;
                transform: scale(1.2);
            }
        }
        .nuxt-link-exact-active {
            font-weight: 800;
            &:hover {
                transform: scale(1);
            }
        }
    }
}
.slide-side-enter-active {
    transition: all 1s cubic-bezier(0.07, 0.68, 0.09, 1);
}
.slide-side-leave-active {
    transition: all 1s cubic-bezier(0.88, 0.01, 0.35, 1);
}
.slide-side-enter,
.slide-side-leave-to {
    transform: translateX(100%);
}
.backdrop {
    width: 100%;
    height: 100%;
    background-color: rgba(244, 245, 246, 0.5);
    z-index: 100;
    position: fixed;
    top: 0;
    right: 0;
}
@media (max-width: 714px) {
    .sidenav {
        width: 100%;
    }
}
</style>
<script>
import Nav from "@/layouts/partials/nav";
import SocialMedia from "@/components/SocialMedia";
import InputSwitch from "@/components/InputSwitch";
import { mapGetters } from "vuex";
import TweenMax from "gsap";
import lottie from "@/plugins/lottie";
import anime from "animejs";
import burgerMenu from "~/static/animation/menu.json";

export default {
    head() {
        return {
            script: [
                {
                    src:
                        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
                },
                {
                    src:
                        "https://cdn.jsdelivr.net/gh/WojciechWKROPCE/letterize-js/lib/letterize.min.js"
                }
            ]
        };
    },
    components: { Nav, SocialMedia, InputSwitch },
    data() {
        return {
            direction: "horizontal",
            iconColor: "#e5204d"
        };
    },
    methods: {
        hideSidebar() {
            this.$store.dispatch("nav/toggleSidebar");
        }
    },
    computed: {
        isSidebar() {
            return this.$store.getters["nav/toggleSidebar"];
        }
    },
    mounted() {
        var link = document.querySelectorAll(".mainNav__link");

        link.forEach(function(elem) {
            $(document).on("mousemove touch", function(e) {
                magnetize(elem, e);
            });
        });

        function magnetize(el, e) {
            var mX = e.pageX,
                mY = e.pageY;
            const item = $(el);

            const customDist = item.data("dist") * 20 || 80;
            const centerX = item.offset().left + item.width() / 2;
            const centerY = item.offset().top + item.height() / 2;

            var deltaX = Math.floor(centerX - mX) * -0.35;
            var deltaY = Math.floor(centerY - mY) * -0.35;

            var distance = calculateDistance(item, mX, mY);

            if (distance < customDist) {
                TweenMax.to(item, 0.5, {
                    y: deltaY,
                    x: deltaX,
                    scale: 1
                });
                item.addClass("magnet");
            } else {
                TweenMax.to(item, 0.6, {
                    y: 0,
                    x: 0,
                    scale: 1
                });
                item.removeClass("magnet");
            }
        }

        function calculateDistance(elem, mouseX, mouseY) {
            return Math.floor(
                Math.sqrt(
                    Math.pow(
                        mouseX - (elem.offset().left + elem.width() / 2),
                        2
                    ) +
                        Math.pow(
                            mouseY - (elem.offset().top + elem.height() / 2),
                            2
                        )
                )
            );
        }

        const container = document.querySelector(".sidenav-container");
        const params = {
            container: document.getElementById("burgerMenu"),
            renderer: "svg",
            path: "",
            loop: false,
            autoplay: false,
            animationData: burgerMenu
        };
        var anim;
        anim = lottie.loadAnimation(params);

        $("#burgerMenu").click(function() {
            if (container.classList.contains("active") !== true) {
                anim.setDirection(1);
                anim.play();
                container.classList.add("active");
                $(this).removeClass("dark");
            } else if (container.classList.contains("active")) {
                anim.setDirection(-1);
                anim.play();
                container.classList.remove("active");
            }
        });
        const obj = new Letterize({
            targets: document.querySelectorAll(".mainNav__link"),
            className: "letter"
        });
        anime.timeline().add({
            targets: ".mainNav__link .letter",
            translateY: [200, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 2000,
            delay: (el, i) => 4800 + 50 * i
        });
    }
};
</script>
