<template>
  <nav>
    <div class="my_border">
      <ul>
        <li><img alt="Vue logo" src="../assets/logo.png" /></li>
        <li><router-link to="/">加入我们</router-link></li>
        <li><router-link to="/address">本站通讯录</router-link></li>
        <li><router-link to="/hobby">兴趣爱好</router-link></li>
        <li><router-link to="/userinfo">我的信息</router-link></li>
        <li><router-link to="/admin">后台管理</router-link></li>
      </ul>
    </div>
  </nav>
</template>
<script>

</script>
<style lang="scss">
nav {
  padding: 10px 0;
  background-color: #35333c;
  .my_border{
    width: 72%;
    margin: 0 auto;
    ul{
      display: flex;
      align-items: center;
      justify-content: space-between;
      img{
        max-width: 100%;
        height: 60px;
      }
      li{
        list-style-type: none;
        a{
          display: block;
          font-size: 16px;
          text-align: center;
          padding: 10px 15px;
        }
        a:hover{
          transform: rotate(5deg) scale(1.1);
          color: #42b983;
        }
      }
      li a:before, li a:after {
        opacity: 0;
        border-top: 1px solid white;
        content: '';
        display: block;
        position: relative;
        z-index: -1;
        margin: auto;
        width: 0px;
      }
      li a:before {
        top: 0px;
        transform: rotate(120deg) translateY(-50%) translateX(-50%);
      }
      li a:after {
        top: 5px;
        transform: rotate(-60deg) translateY(-50%) translateX(-50%);
      }
      li a:hover:before, li a:hover:after{
        transition: all 0.3s ease;
        opacity: 1;
        width: 20px;
      }
    }
  }
  a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    font-size: 16px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>