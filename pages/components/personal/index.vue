<style lang="scss">
	.step{ 
	    width: 100%; 
	    height: auto; 
	    padding: 10rpx 30rpx; 
	    box-sizing: border-box; 
	    overflow: hidden;
	    background-color: #fff;
	    color: #666;
	  }
	.step .modle{ 
	  width: 100%; 
	  height: 100rpx; 
	  margin-top: 10rpx; }
	.step .modle .mol{ 
	  width: 100%; 
	  height: 52rpx; 
	  position: relative;  }
	.step .mol-line{ 
	  width: 100%; 
	  height: 4rpx; 
	  background-color: #e6e6e6; 
	  position: absolute; 
	  left: 0; 
	  top: 50%; 
	  transform: translateY(-50%);}
	.step .mol-ites{ 
	  width: 100%; 
	  height: 100%;
	  position: absolute;}
	.mol-ites .ite{ 
	  width: 52rpx; 
	  height: 52rpx; 
	  border-radius: 50%; 
	  border: 1px solid #f5f5f5;
	  background-color: #fff; 
	  box-sizing: border-box;  
	  position: absolute; 
	  left: 0; 
	  top: 0; 
	  z-index: 2;}
	.mol-ites .ite .n{ 
	  width: 44rpx; 
	  height: 44rpx; 
	  line-height: 44rpx; 
	  text-align: center; 
	  border-radius: 50%; 
	  background-color: #f5f5f5;
	  position: absolute; 
	  left: 50%; 
	  top: 50%; 
	  transform: translate(-50%,-50%); 
	  font-size: 22rpx;}
	.mol-ites .ite::after{ 
	  content: ""; 
	  width: 80rpx; 
	  height: 4rpx; 
	  background-color: transparent; 
	  position: absolute; 
	  left: 52rpx; 
	  top: 50%; 
	  margin-top: -2rpx; 
	  z-index: 2;}
	.mol-ites .ite:last-of-type::after{ width: 0;}
	.mol-ites .ite:nth-of-type(2){ left: 107rpx;}
	.mol-ites .ite:nth-of-type(3){ left: 214rpx;}
	.mol-ites .ite:nth-of-type(4){ left: 321rpx;}
	.mol-ites .ite:nth-of-type(5){ left: 428rpx;}
	.mol-ites .ite:nth-of-type(6){ left: 535rpx;}
	.mol-ites .ite:nth-of-type(7){ left: 642rpx;}
	.mol-ites .ite.hover{ border-color: rgb(97, 165, 238);}
	.mol-ites .ite.hover .n{ background-color: rgb(97, 165, 238); color: #fff;}
	.mol-ites .ite.hover::after{ background-color: rgb(97, 165, 238); }
	.moday{ 
	  width: 100%; 
	  height:40rpx; 
	  overflow: hidden; 
	  position: relative; 
	  margin-top:16rpx;}
	.moday .dd{ 
	  width: 52rpx; 
	  height: 40rpx; 
	  line-height: 1; 
	  text-align: center; 
	  font-size: 22rpx;
	  position: absolute; 
	  left: 0; 
	  bottom: 0;}
	.moday .dd:nth-of-type(2){ left: 107rpx;}
	.moday .dd:nth-of-type(3){ left: 214rpx;}
	.moday .dd:nth-of-type(4){ left: 321rpx;}
	.moday .dd:nth-of-type(5){ left: 428rpx;}
	.moday .dd:nth-of-type(6){ left: 535rpx;}
	.moday .dd:nth-of-type(7){ left: 642rpx;}
</style>

<template>
	<view></view>
</template>

<script>
	
</script>