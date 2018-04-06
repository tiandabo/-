<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',

	}
</script>

<style lang="scss">
	.el-carousel__arrow {
		width: 50px;
		height: 50px;
		font-size: 30px;
		top: 200px;
		z-index: 10;
	}
	
	.lazy .swiper-container {
		width: 100%;
		height: 800px;
		.swiper-slide {
			width: 100%;
			height: 100px;
		}
		.swiper-slide-active {
			width: 100%;
			height: 100px;
		}
		.swiper-button-next {

			position: fixed;
			cursor: pointer;
			z-index: 100;
			width: 60px;
			height: 60px;
			bottom: 50px;
			left: 50%;
		    animation: moveDown 1.6s linear infinite;
			background: url(https://b-ssl.duitang.com/uploads/people/201608/19/20160819111217_jCEKk.png);
		}
		@keyframes moveDown {
			0% {
				transform: translateY(0);
				opacity: 0;
			}
			90% {
				transform: translateY(15px);
				opacity: 1;
			}
			95% {
				transform: translateY(15px);
				opacity: 0;
			}
			100% {
				opacity: 0;
			}
		}
		.swiper-pagination {
			width: 40px;
			height: 200px;
			margin-top: 25%;
			position: fixed;
			text-align: center;
			right: 30px;
			top: 0px;
			.swiper-pagination-bullet {
				width: 8px;
				height: 8px;
				background: #d8d8d8;
				opacity: 1;
				border-radius: 50%;
				margin: 20px auto;
				&:hover {
					width: 12px;
					height: 12px;
				}
			}
			.swiper-pagination-bullet-active {
				width: 12px;
				height: 12px;
				margin: 20px auto;
				border-radius: 50%;
				background: #ff7d7c;
			}
		}
	}
	
	.el-carousel__indicators {
		.el-carousel__indicator {
			.el-carousel__button {
				display: block;
				background: #444;
				opacity: 0.7;
				width: 10px;
				height: 10px;
				border: none;
				outline: none;
				padding: 0;
				margin: 0;
				cursor: pointer;
				transition: .3s;
				border-radius: 50%;
			}
		}
	}
	
	button,
	img {
		&:hover {
			cursor: pointer;
		}
	}
	
	.el-step__head {
		position: relative;
		width: 100%;
		top: -20px;
	}
	
	.el-step__icon {
		width: 40px;
		height: 40px;
		font-size: 18px;
	}
	
	.el-step.is-horizontal .el-step__line {
		top: 20px;
		height: 4px;
		background-color: #b4bccc;
	}
	
	.content {
		height: 200px;
	}
	
	.el-steps {
		width: 65%;
		margin: 0 auto;
	}
	
	.el-step__icon.is-text {
		color: rgba(255, 255, 255, .85);
		background: #d9d9d9;
		border: none;
	}
	
	.el-step__title.is-process {
		font-size: 14px;
		color: #f14382;
		font-weight: bold;
	}
	
	.el-step__title {
		color: #888;
	}
	
	.is-process {
		>.el-step__icon.is-text {
			background: #f14382;
		}
	}
</style>