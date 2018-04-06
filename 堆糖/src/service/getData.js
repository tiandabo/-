import fetch from '../config/fetch'

/**
 * 获取更多
 */

export const more = () => fetch('/more');

/**
 * 获取轮播图
 */

export const swiper = () => fetch('/swiper');


/**
 * 获取大家正在逛
 */

export const everyOne = () => fetch('/everyOne');

/**
 * 获取达人推荐
 */

export const special = () => fetch('/daren');

/**
 * 获取专辑推荐
 */

export const zhuanji = () => fetch('/zhuanji');

/**
 * 获取单品推荐
 */

export const every = () => fetch('/every');

/**
 * 获取良品购
 */

export const buyNews = () => fetch('/buy');

/**
 * 获取良品购增加
 */

export const addbuy = () => fetch('/addbuy');

/**
 * 获取良品购增加
 */

export const yinyang = () => fetch('/yinyang');

/**
 * 获取单页面
 */

export const userid = () => fetch('/userid');

/**
 * 获取fall
 */

export const fall = () => fetch('/fall');

//登录
export const logins = (username, password) => fetch('http://localhost:8888/login', { username, password }, 'POST');