<template>
	<section style="height: 100%; overflow-y: auto;-webkit-overflow-scrolling: touch">
		<div class="range_footer">
			<span class="goBack" @click="goBakc()"></span>
			<p>{{text}}</p>
		</div>

		<!--分类筛选-->
		<div class="typeClassify clearFix">
			<div class="type">
				<div id="fj"  :class="{djColor:djColor}" @click="click_fj">附近</div>
				<div id="znpx" :class="{djColor:znpxColor}" @click="click_znpx">智能排序</div>
			</div>
		</div>

		<!--附近分类-->
		<div class="typeRangeType"  :class="{isShow:rangTypeShow}">
			<ul>
				<li v-for="(item, index) in rangeLists" v-show="item.level === 3" @click="openDistance(item.ad_code,item.region_name,item.id,item.district_id)">{{item.region_name}}
				</li>
			</ul>
			<ol>
				<li v-for="item in typeList" @click="selectDistance(item.region_name)" v-if="typeList.length > 1">{{item.region_name}}</li>
			</ol>
		</div>
		<!--智能排序分类-->
		<div class="type_intelligent"   :class="{isShow:intellingenIsShow}">
			<ul>
				<li v-for="item in intelligent" @click="selectIntelligentAll(item.text,item.type)">{{item.text}}</li>
			</ul>
		</div>
        <!--下拉 -->
        <!--<div style="position:relative;background: #fff;">
        <mt-loadmore :top-method="loadTop"  topDropText="loading……" ref="loadmore" @top-status-change="handleTopChange">
            <div class="loading">
                <img src="../../../static/images/画板 1_0000@2x.png" style="background:#fff;text-align: center;" alt="" ref="bottonHeight" v-if = imgAnimation> 
                <Down v-else></Down>
            </div>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">
                </span>
                <div v-show="topStatus === 'loading'"></div> 
            </div>-->
		<!--用户列表-->
		<div class="business_list_detail last_bottom body" v-if="this.typeBusinessList != undefined || this.typeBusinessList.length != 0" style="height: 31rem;">
			<ul
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
				<li class="clearFix" v-for="(item , index) in typeBusinessList">
					<router-link :to="'/detail?id='+item.shop_id">
						<img class="businessIcon" :src="imgPath+item.shop_icon+'/11300'" alt="">
						<div>
							<p>{{item.shop_name}}</p>
							<p>销量 &nbsp;<span>{{item.sold}}</span> </p>
							<p>{{item.detail_b}}</p>
							<p><span>买单{{Math.round(item.sale_discount * 1000) / 100}}折</span></p>
						</div>
						<span class="range">{{distance[index]}}km</span>
					</router-link>
				</li>
			</ul>
            <p style="display: flex;justify-content: center;align-items: center;height: 80px;width: 100%;">
				<mt-spinner type="fading-circle" v-show="loading"></mt-spinner><span style="font-size: 0.7rem;color: gray;margin-left: 20px;">{{hasMore?"加载中...":"没有更多了"}}</span>
			</p>
		</div>
        <!--</mt-loadmore>-->
        </div>
		<!--没有数据时显示-->
		<div class="noDetailList" v-if="this.typeBusinessList === undefined || this.typeBusinessList.length === 0">
			<img src="../../../static/images/nodetail.png" alt="">
			<p>抱歉，没有符合条件的商家 <br>请您换一下筛选条件</p>
		</div>
	</section>
</template>

<script>
    import Vue from 'vue'
    import {
        Loadmore,
        InfiniteScroll,
    } from 'mint-ui';
    Vue.component(Loadmore.name, Loadmore);
    Vue.use(InfiniteScroll);
    import Down from "@//components/downAnimation"
    require('../../../static/css/reset.css');
    import httpSrv from '../../js/httpSrv';

    export default {
        name: "Type",
        data() {
            return {
                text: this.$route.query.text,
                imgPath: httpSrv.SHOP_IMAGE,
                distance: [],
                rangeLists: [],
                intelligent: [{
                    "id": 1,
                    "type": "SMART",
                    "text": "智能排序"
                }, {
                    "id": 2,
                    "type": "DISTANCE",
                    "text": "离我最近"
                }, {
                    "id": 3,
                    "type": "HOT",
                    "text": "人气优先"
                }, {
                    "id": 4,
                    "type": "SALE",
                    "text": "销量最高"
                }, {
                    "id": 5,
                    "type": "DISCOUNT",
                    "text": "折扣最低"
                }, {
                    "id": 6,
                    "type": "NEWEST",
                    "text": "最新发布"
                }],
                typeList: [],
                typeBusinessList: [],
                page: 0,
                cityCode: sessionStorage.getItem('citycode'), //城市编码
                lat: sessionStorage.getItem('lat'), // 纬度
                lng: sessionStorage.getItem('lng'), //经度
                rangTypeShow: false,
                djColor: false,
                znpxColor: false,
                intellingenIsShow: false,
                topStatus: "",
                imgAnimation: true,
                loading: false, //是否正在加载中
                hasMore: true, //是否还有更多
            }
        },
        components: {
            Down
        },
        mounted() {
            this.rangeList();
            $(window).scrollTop(0);

        },
        methods: {
            getPath() {
                let path = this.$route.path;
                if (path == "/home") {
                    window.location.reload();
                }
            },
            loadMore() {
                if (this.$route.name == 'Type') {
                    if (this.typeBusinessList.length < 1 || this.loading) {
                        return;
                    }
                    this.getBusinessList();
                } else {
                    return
                }

            },
            click_fj() {
                this.rangTypeShow = !this.rangTypeShow;
                this.djColor = !this.djColor;
                this.intellingenIsShow = false;
                this.znpxColor = false;
            },
            click_znpx() {
                this.intellingenIsShow = !this.intellingenIsShow;
                this.znpxColor = !this.znpxColor;
                this.rangTypeShow = false;
                this.djColor = false;
            },
            goBakc: function() {
                this.$route.meta.keepAlive = false;
                window.history.back();
            },
            //全城分类
            rangeList() {
                var _this = this;
                let citycode = sessionStorage.getItem("citycode");
                var data = {
                    "city_code": citycode
                };

                httpSrv.sendPost(this, 'interface-shop-Region-m-getRegionList', data, function(result) {
                    let regionArr = result;
                    let add = [{
                        "id": -1,
                        "region_name": "附近",
                        "ad_code": "",
                        "level": 3
                    }, {
                        "id": 9991,
                        "region_name": "1KM",
                        "ad_code": "",
                        "level": 4,
                        "district_id": -1
                    }, {
                        "id": 9992,
                        "region_name": "3KM",
                        "ad_code": "",
                        "level": 4,
                        "district_id": -1
                    }, {
                        "id": 9993,
                        "region_name": "5KM",
                        "ad_code": "",
                        "level": 4,
                        "district_id": -1
                    }, {
                        "id": 9994,
                        "region_name": "10KM",
                        "ad_code": "",
                        "level": 4,
                        "district_id": -1
                    }, {
                        "id": 9995,
                        "region_name": "全城",
                        "ad_code": "",
                        "level": 4,
                        "district_id": -1
                    }];
                    for (let i = 0; i < add.length; i++) {
                        regionArr.unshift(add[i]);
                    }
                    _this.rangeLists = regionArr;

                }, function() {

                }, true);
            },
            openDistance: function(code, name, id) {
                if (id != -1) {
                    this.rangTypeShow = false;
                    this.djColor = false;
                }
                let _this = this;
                let region = sessionStorage.getItem("region");
                let list = JSON.parse(region)
                let typeArr = [];
                for (let i in list) {
                    if (list[i].district_id === id && list[i].level === 4) {
                        typeArr.push(list[i]);
                    }
                    _this.typeList = typeArr;
                }
                let sort_id = this.$route.query.id; //sort_id
                let sort_type = sessionStorage.getItem("type_sort_type");
                sessionStorage.setItem("typeCode", code); //区域编码
                if (id > -1) {
                    $(".typeRangeType").css("display", "none");
                    $("body,html").removeClass("ovfHiden");

                    _this.common(this.lat, this.lng, this.cityCode, sort_id, sort_type, "REGION", "", code, 0, "");
                }
                let fj = document.querySelector("#fj");
                fj.innerHTML = name;
                fj.color = "#ffd744";
            },
            //选中城区
            selectDistance: function(text) {
                this.rangTypeShow = false;
                this.djColor = false;
                let fj = document.querySelector("#fj");
                fj.innerHTML = text;
                let _this = this;
                let lat = sessionStorage.getItem("lat");
                let lng = sessionStorage.getItem("lng");
                let citycode = sessionStorage.getItem("citycode");
                let code = sessionStorage.getItem("typeCode");
                //选中距离
                sessionStorage.setItem("type_distanceValue", text);
                //sort_id
                let sort_id = this.$route.query.id;
                //sort_type
                let sort_type = sessionStorage.getItem("type_sort_type");
                let rangType = document.querySelector(".typeRangeType");
                rangType.style.display = "none";
                $("body,html").removeClass("ovfHiden");
                console.log(code, text)
                if (text == "全城") {

                    _this.common(_this.lat, _this.lng, _this.cityCode, sort_id, sort_type, 'ALL_CITY', '', '', 0, '')
                } else if (text != '全城') {

                    _this.common(_this.lat, _this.lng, _this.cityCode, sort_id, sort_type, 'DISTANCE', text, '', 0, "")
                }
            },
            //智能排序
            selectIntelligentAll: function(text, type) {
                this.intellingenIsShow = false;
                this.znpxColor = false;
                let _this = this;
                let znpx = document.querySelector("#znpx");
                znpx.innerHTML = text;
                let sort_id = this.$route.query.id;
                //距离
                let distanceValue = sessionStorage.getItem("type_distanceValue");
                //code
                let code = sessionStorage.getItem("typeCode");
                //排序类型
                sessionStorage.setItem("type_sort_type", type);
                //document.querySelector(".type_intelligent").style.display = "none";
                $("body,html").removeClass("ovfHiden");

                if (code == null || code == "" && distanceValue == "全城") {

                    _this.common(_this.lat, _this.lng, _this.cityCode, sort_id, type, "ALL_CITY", "", "", 0, "")
                } else if (code == null || code == "" && distanceValue != "全城") {

                    _this.common(_this.lat, _this.lng, _this.cityCode, sort_id, type, 'DISTANCE', distanceValue, "", 0, "")
                } else if (code) {

                    _this.common(_this.lat, _this.lng, _this.cityCode, sort_id, type, "REGION", "", code, 0, "")
                }
            },
            getBusinessList: function() {
                if (!this.hasMore) {
                    this.loading = false;
                    return;
                }
                let _this = this;
                let id = _this.$route.query.id;
                //距离
                let distanceValue = sessionStorage.getItem("type_distanceValue");
                //code
                let code = sessionStorage.getItem("typeCode");
                //sort_type
                let type = sessionStorage.getItem("type_sort_type");
                let location = "";
                if (code === "" && distanceValue == "全城") {
                    location = "ALL_CITY"
                } else if (code === "") {
                    location = "DISTANCE"
                } else if (code != "") {
                    location = "REGION"
                }
                let data = {
                    "latitude": this.lat || "",
                    "longitude": this.lng || "",
                    "city_code": this.cityCode || "010",
                    "sort_id": id || "",
                    "sort_type": type == null ? "" : type,
                    "location_type": "ALL_CITY" || location,
                    "distance_value": distanceValue == null ? "" : distanceValue,
                    "region_code": code == null ? "" : code,
                    "page": this.page,
                    "search_word": ""
                };
                this.loading = true;
                httpSrv.sendPost(this, 'interface-shop-ShopSearch-m-search', data, function(result) {
                    _this.loading = false;
                    if (result.length == 0) {
                        $(".noDetailList").css("display", "block")
                    } else {
                        $(".noDetailList").css("display", "none")
                    }
                    if (result.length) {
                        _this.typeBusinessList = _this.typeBusinessList.concat(result);
                        _this.initDistance();
                        _this.page += 1;
                        _this.$nextTick(() => {
                            window.scrollTo(0, 1);
                            window.scrollTo(0, 0);
                        })
                    } else {
                        _this.hasMore = false;
                        _this.loading = false;
                    }
                }, function() {
                    _this.loading = false;
                }, true);
            },
            initDistance() { //初始化距离数据显示
                let lng = sessionStorage.getItem("lng");
                let lat = sessionStorage.getItem("lat");
                if (!lng || !lat) {
                    return;
                }
                let arr = [];
                for (let i in this.typeBusinessList) {
                    let lat1 = this.typeBusinessList[i].lat;
                    let lng1 = this.typeBusinessList[i].lng;
                    let range = httpSrv.GetDistance(parseFloat(lat), parseFloat(lng), parseFloat(lat1), parseFloat(lng1));
                    let newRange = (range / 1000).toFixed(2);
                    arr.push(newRange);
                }
                this.distance = arr;
            },

            common: function(latitude, longitude, city_code, sort_id, sort_type, location_type, distance_value, region_code, page, search_word) {
                let _this = this;
                let data = {
                    "latitude": latitude || "",
                    "longitude": longitude || "",
                    "city_code": city_code || "",
                    "sort_id": sort_id == null ? "" : sort_id,
                    "sort_type": sort_type == null ? "" : sort_type,
                    "location_type": location_type || "",
                    "distance_value": distance_value || "",
                    "region_code": region_code || "",
                    "page": page || 0,
                    "search_word": search_word || ""
                };
                httpSrv.sendPost(this, "interface-shop-ShopSearch-m-search", data, function(result) {
                    let arr = [];
                    if (result.length < 1) {
                        _this.noDetailList = true;
                    }
                    _this.typeBusinessList = result;
                    for (let i in _this.typeBusinessList) {
                        var lat1 = _this.typeBusinessList[i].lat;
                        var lng1 = _this.typeBusinessList[i].lng;
                        var range = httpSrv.GetDistance(parseFloat(_this.lat), parseFloat(_this.lng), parseFloat(lat1), parseFloat(lng1));
                        var newRange = (range / 1000).toFixed(2);
                        arr.push(newRange);
                    }
                    _this.distance = arr;
                }, function() {

                }, true)

            }
        },
        created() {
            this.$route.meta.keepAlive = true;
            this.typeBusinessList.length = 0;
            this.getBusinessList();
        }
    }
</script>

<style lang="scss">
    @import "../../../static/css/type/type.scss";
    .loading {
        padding: 0;
        margin: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
        top: -4rem;
        z-index: 1;
    }
    
    .body {
        position: relative;
        z-index: 1;
    }
    
    .mint-loadmore-top {
        display: none;
    }
</style>