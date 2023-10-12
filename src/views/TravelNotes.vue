<template>
  <div class="main">
    <div class="top">
      <!--封面图-->
      <div class="cover">
        <img src="https://p1-q.mafengwo.net/s11/M00/EF/C9/wKgBEFtabluAXcU0AAyfbg3INOU87.jpeg?imageMogr2%2Fstrip">
      </div>
      <!--标题-->
      <div class="view-info">
        <h1>没进过清华大学的校园，你就不知道她有多美（附进入校园方法）</h1>
      </div>
      <div class="view-user" >
        <div class="user-photo">
          <img width="120" height="120" src="https://p1-q.mafengwo.net/s11/M00/D7/C3/wKgBEFrPL7GAcnUXAAnpkYWHcAk49.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90" alt="">
        </div>
        <div class="user-info">
          <strong>
            <a href="#" class="user-name">带女儿游遍中国</a>
          </strong>
          <a href="#" class="user-grade">LV.32</a>
          <div class="user-time">2023-10-5 11:17</div>
          <i class="ico-view"></i>
          <div class="user-watches">966</div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
a:hover{
  text-decoration: underline;
}
.top{
  position: relative;
  .cover{
    img {
      width: 100%;
      height: 100%;
    }
  }
  .view-info{
    position: absolute;
    bottom:180px;
    left: 190px;
    width: 725px;
    height: 80px;
    font-size: 26px;
    font-weight: bold;
    line-height: 38px;
    color: #fff;
    overflow: hidden;
    white-space: nowrap; /* 让文字不换行 */
    text-overflow: ellipsis;
  }
  .view-user{
    position: relative;
    height: 200px;
    .user-photo{
      position: absolute;
      left: 30px;
      bottom: 150px;
      img{
        border-radius: 50%;
      }

    }
    .user-info{
      position: absolute;
      left: 200px;
      top:10px;
      display: flex;
      font-size: 14px;
      .user-name{
        color: $xtxColor;

        font-weight: normal;
        margin-right: 20px;
      }
      .user-grade{
        color: #ea3c1a;
        font-weight: bold;
        text-decoration: none;
        margin-right: 20px;
      }
      .user-time{
        margin-right: 20px;
      }
      .ico-view{
        width: 18px;
        height: 14px;
        //display: inline-block;
        margin-right: 4px;
        background: url("https://css.mafengwo.net/images/post/new_notes/sprite_v35.png") -51px -327px no-repeat;
        vertical-align: -90px;
      }
    }
  }

}

</style>