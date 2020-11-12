<template>
  <header>
    <div id="skiptocontent">
      <a href="#maincontent">skip to main content</a>
    </div>
    <Logo />
  </header>
</template>
<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  //  font-family: $muli;
  padding: 20px;
  #skiptocontent {
    position: absolute;
    width: 200px;
    top: 0;
  }
  #skiptocontent a {
    padding: 6px;
    position: absolute;
    top: -40px;
    left: 0px;
    color: white;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    border-bottom-right-radius: 8px;
    background: #bf1722;
    -webkit-transition: top 1s ease-out;
    transition: top 1s ease-out;
    z-index: 100;
    &:focus {
      position: absolute;
      left: 0px;
      top: 0px;
      outline-color: transparent;
      -webkit-transition: top 0.1s ease-in;
      transition: top 0.1s ease-in;
    }
  }
}
.drawer-toggle .bar {
  width: 90%;
  height: 2px;
  background-color: #000;
}
.drawer-toggle {
  transform: translate3d(0, 0, 0);
  opacity: 1;
  height: 50px;
  width: 50px;
  top: 24px;
  right: 24px;
  position: fixed;
  z-index: 103;
}
</style>
<script>
import Nav from "@/layouts/partials/nav";
import Logo from "@/components/Logo";
export default {
  components: {
    Logo,
    Nav
  }
};
</script>
