<template>
  <div class="msite">
    <!-- 头部 -->
    <header-top title="昌平区北七家宏福科技园(337省道北)">
      <template v-slot:left>
        <span class="header_search">
          <i class="iconfont iconsousuo"></i>
        </span>
      </template>
      <template v-slot:right>
        <span class="header_login">
          <span class="header_login_text">登录|注册</span>
        </span>
      </template>
    <!-- 轮播 -->
    </header-top>
    <!--首页导航-->
    <div class="msite_nav">
      <swiper></swiper>
    </div>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont iconxuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <shop-list></shop-list>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import Swiper from '../../components/Swiper/Swiper.vue'
import ShopList from '../../components/ShopList/ShopList.vue'

export default {
  components: {
    HeaderTop,
    Swiper,
    ShopList
  }
}
</script>

<style lang="stylus">
@import '../../assets/stylus/mixins.styl';

.msite { // 首页
  width: 100%;

  .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;

    .iconsousuo {
      font-size: 25px;
      color: #fff;
    }
  }

  .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);

    .header_login_text {
      color: #fff;
    }
  }

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    background: #fff;
  }

  .msite_shop_list {
    top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .shop_header {
      padding: 10px 10px 0;

      .shop_icon {
        margin-left: 5px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
