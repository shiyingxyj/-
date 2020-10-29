<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/1.jpg" />
          </div>
          <span>甜品饮品</span>
        </a>
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/2.jpg" />
          </div>
          <span>商超便利</span>
        </a>
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/3.jpg" />
          </div>
          <span>美食</span>
        </a>
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/4.jpg" />
          </div>
          <span>简餐</span>
        </a>
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/5.jpg" />
          </div>
          <span>新店特惠</span>
        </a>
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/6.jpg" />
          </div>
          <span>准时达</span>
        </a>
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/7.jpg" />
          </div>
          <span>预订早餐</span>
        </a>
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/8.jpg" />
          </div>
          <span>土豪推荐</span>
        </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/9.jpg" />
          </div>
          <span>甜品饮品</span>
        </a>
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/10.jpg" />
          </div>
          <span>商超便利</span>
        </a>
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/11.jpg" />
          </div>
          <span>美食</span>
        </a>
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/12.jpg" />
          </div>
          <span>简餐</span>
        </a>
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/13.jpg" />
          </div>
          <span>新店特惠</span>
        </a>
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/14.jpg" />
          </div>
          <span>准时达</span>
        </a>
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/1.jpg" />
          </div>
          <span>预订早餐</span>
        </a>
        <a href="javascript:" class="link_to_food">
          <div class="food_container">
            <img src="./images/nav/2.jpg" />
          </div>
          <span>土豪推荐</span>
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// 此处必须这样导入分页器和前进后退按钮才能正常使用，而不能import Swiper from 'swiper'这样导入
import Swiper from 'swiper/swiper-bundle'
import '../../../node_modules/swiper/swiper-bundle.min.css'

export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', { // 除了循环模式可以使用，其它的都不能使用，不知道为啥
      loop: true, // 循环模式选项

      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="stylus">
.swiper-container {
  width: 100%;
  height: 100%;

  .swiper-wrapper {
    width: 100%;
    height: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;

      .link_to_food {
        width: 25%;
        text-decoration: none;

        .food_container {
          display: block;
          width: 100%;
          text-align: center;
          padding-bottom: 10px;
          font-size: 0;

          img {
            display: inline-block;
            width: 50px;
            height: 50px;
          }
        }

        span {
          display: block;
          width: 100%;
          text-align: center;
          font-size: 13px;
          color: #666;
        }
      }
    }
  }

  .swiper-pagination {
    >span.swiper-pagination-bullet-active {
      background: #02a774;
    }
  }
}
</style>
