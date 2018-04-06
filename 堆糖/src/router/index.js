import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import login from '@/page/login/login'
import input from '@/page/login/children/input'
import register from '@/page/login/children/register'
import app from '@/page/app/app'
import buy from '@/page/buy/buy'
import big from '@/page/big/big'
import more from '@/page/more/more'
import search from '@/page/search/search'
import searchcontent from '@/page/search/child/content'
import searchshop from '@/page/search/child/shop'
import searchpeo from '@/page/search/child/peo'
import searchzhuan from '@/page/search/child/zhuan'
import lazy from '@/page/lazy/lazy'
import ff from '@/page/分页器/分页器'
import yinyang from '@/components/yinyangshi/yinyangshi'

Vue.use(Router)

export default new Router({
       routes: [
         {
           path: '/',
           redirect: 'home'
         },
         {
           path: '/home',
           component: home
         },
         {
           path: '/big/:id',
           component: big
         },
         {
           path: '/ff',
           component: ff
         },
         {
           path: '/app',
           component: app
         },
         {
         	path: '/login',
         	component: login,
         	children: [
         		{
         			path: 'register',
         			component: register
         		},
         		{
         			path: 'input',
         			component: input
         		}
         	]
         	
         },
         {
           path: '/buy',
           component: buy
         },
         {
           path: '/more',
           component: more
         },
         {
           path: '/lazy',
           component: lazy
         },
         {
           path: '/search',
           component: search,
           children: [
         		{
         			path: '',
         			redirect: ':id/content'
         		},
         		{
         			path: 'yinyang',
         			component: yinyang
         		},
         		{
         			path: ':id/content',
         			component: searchcontent
         		},
         		{
         			path: ':id/shop',
         			component: searchshop
         		},
         		{
         			path: ':id/peo',
         			component: searchpeo
         		},{
         			path: ':id/zhuan',
         			component: searchzhuan
         		}
         	]
         },
       ]
})