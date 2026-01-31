import React from 'react';
import { Category, Album } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: '全部作品' },
  { id: '2', name: '纯漾轻欲' },
  { id: '3', name: '星芒定格' },
  { id: '4', name: '古意清欢' },
  { id: '5', name: '光影肖像' },
  { id: '6', name: '花漾生日' },
  { id: '7', name: '繁花映颜' },
  { id: '8', name: '国潮新韵' },
  { id: '9', name: '潮拍正燃' },
  { id: '10', name: '纯净证件' },
  { id: '11', name: '男士质感' },
  { id: '12', name: '星河共赴' },
  { id: '13', name: '岁月留声' },
];

/**
 * 默认作品集配置
 */
export const DEFAULT_ALBUMS: Album[] = [
  {
    id: 'a1',
    title: '墨染花颜',
    categoryId: '5', // 光影肖像分类
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/d%20%285%29.jpg',
    photos: [
      { id: 'p1-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/d%20%281%29.jpg' },
      { id: 'p1-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/d%20%283%29.jpg' },
      { id: 'p1-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/d%20%284%29.jpg' },
      { id: 'p1-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/d%20%285%29.jpg' },
      { id: 'p1-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/d%20%286%29.jpg' }
    ]
  },
  {
    id: 'a2',
    title: '赤焰花影',
    categoryId: '5', // 光影肖像
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/f%20%287%29.jpg',
    photos: [
      { id: 'p2-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/f%20%283%29.jpg' },
      { id: 'p2-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/f%20%285%29.jpg' },
      { id: 'p2-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/f%20%286%29.jpg' },
      { id: 'p2-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/f%20%287%29.jpg' },
      { id: 'p2-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/f%20%288%29.jpg' }
    ]
  },
  {
    id: 'a3',
    title: '红伶织影',
    categoryId: '5', // 光影肖像分类
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/g%20%283%29.jpg',
    photos: [
      { id: 'p3-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/g%20%286%29.jpg' },
      { id: 'p3-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/g%20%283%29.jpg' },
      { id: 'p3-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/g%20%282%29.jpg' },
      { id: 'p3-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/%E8%82%96%E5%83%8F/g%20%281%29.jpg' }
    ]
  },
  {
    id: 'a4',
    title: '薄荷微光',
    categoryId: '2', // 纯漾轻欲
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/3%20%284%29.jpg',
    photos: [
      { id: 'p4-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/3%20%286%29.jpg' },
      { id: 'p4-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/3%20%284%29.jpg' },
      { id: 'p4-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/3%20%283%29.jpg' },
      { id: 'p4-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/3%20%282%29.jpg' },
      { id: 'p4-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/3%20%281%29.jpg' }
    ]
  },
  {
    id: 'a5',
    title: '冰蓝幻翼',
    categoryId: '2', // 纯漾轻欲
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/4%20%281%29.jpg',
    photos: [
      { id: 'p5-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/4%20%281%29.jpg' },
      { id: 'p5-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/4%20%282%29.jpg' },
      { id: 'p5-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/4%20%283%29.jpg' },
      { id: 'p5-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/4%20%285%29.jpg' },
      { id: 'p5-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/4%20%286%29.jpg' }
    ]
  },
  {
    id: 'a6',
    title: '暖房星愿',
    categoryId: '2', // 纯漾轻欲
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/5%20%281%29.jpg',
    photos: [
      { id: 'p6-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/5%20%282%29.jpg' },
      { id: 'p6-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/5%20%281%29.jpg' },
      { id: 'p6-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/5%20%283%29.jpg' },
      { id: 'p6-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/5%20%286%29.jpg' },
      { id: 'p6-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/5%20%285%29.jpg' }
    ]
  },
  {
    id: 'a7',
    title: '黑焰御姐',
    categoryId: '3', // 星芒定格
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/1%20%2810%29.jpg',
    photos: [
      { id: 'p7-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/1%20%2810%29.jpg' },
      { id: 'p7-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/1%20%2811%29.jpg' },
      { id: 'p7-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/1%20%2815%29.jpg' },
      { id: 'p7-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/1%20%2816%29.jpg' },
      { id: 'p7-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/1%20%2817%29.jpg' }
    ]
  },
  {
    id: 'a8',
    title: '夜影珠光',
    categoryId: '3', // 星芒定格
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/2%20%285%29.jpg',
    photos: [
      { id: 'p8-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/2%20%285%29.jpg' },
      { id: 'p8-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/2%20%283%29.jpg' },
      { id: 'p8-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/2%20%286%29.jpg' },
      { id: 'p8-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/2%20%288%29.jpg' },
      { id: 'p8-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/2%20%289%29.jpg' }
    ]
  },
  {
    id: 'a9',
    title: '甜份满格',
    categoryId: '6', // 花漾生日
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/6%20%283%29.jpg',
    photos: [
      { id: 'p9-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/6%20%283%29.jpg' },
      { id: 'p9-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/6%20%284%29.jpg' },
      { id: 'p9-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/6%20%285%29.jpg' },
      { id: 'p9-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/6%20%287%29.jpg' }
    ]
  },
  {
    id: 'a10',
    title: '甜焙小厨',
    categoryId: '6', // 花漾生日
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/7%20%281%29.jpg',
    photos: [
      { id: 'p10-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/7%20%281%29.jpg' },
      { id: 'p10-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/7%20%283%29.jpg' },
      { id: 'p10-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/7%20%284%29.jpg' },
      { id: 'p10-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/7%20%286%29.jpg' },
      { id: 'p10-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/7%20%287%29.jpg' }
    ]
  },
  {
    id: 'a11',
    title: '软萌宅趣',
    categoryId: '2', // 纯漾轻欲
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/8%20%281%29.jpg',
    photos: [
      { id: 'p11-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/8%20%281%29.jpg' },
      { id: 'p11-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/8%20%282%29.jpg' },
      { id: 'p11-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/8%20%284%29.jpg' },
      { id: 'p11-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/8%20%285%29.jpg' },
      { id: 'p11-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/8%20%286%29.jpg' }
    ]
  },
  {
    id: 'a12',
    title: '红仆莓语',
    categoryId: '2', // 纯漾轻欲
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/9%20%281%29.jpg',
    photos: [
      { id: 'p12-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/9%20%281%29.jpg' },
      { id: 'p12-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/9%20%282%29.jpg' },
      { id: 'p12-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/9%20%283%29.jpg' },
      { id: 'p12-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/9%20%284%29.jpg' }
    ]
  },
  {
    id: 'a13',
    title: '派对天使',
    categoryId: '6', // 花漾生日
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/10%20%283%29.jpg',
    photos: [
      { id: 'p13-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/10%20%283%29.jpg' },
      { id: 'p13-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/10%20%284%29.jpg' },
      { id: 'p13-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/10%20%285%29.jpg' },
      { id: 'p13-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/10%20%286%29.jpg' },
      { id: 'p13-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/10%20%287%29.jpg' }
    ]
  },
  {
    id: 'a14',
    title: '花境仙踪',
    categoryId: '7', // 繁花映颜
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/11%20%281%29.jpg',
    photos: [
      { id: 'p14-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/11%20%281%29.jpg' },
      { id: 'p14-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/11%20%283%29.jpg' },
      { id: 'p14-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/11%20%285%29.jpg' },
      { id: 'p14-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/11%20%286%29.jpg' },
      { id: 'p14-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/11%20%288%29.jpg' }
    ]
  },
  {
    id: 'a15',
    title: '奶糯宅居',
    categoryId: '2', // 纯漾轻欲
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/12%20%282%29.jpg',
    photos: [
      { id: 'p15-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/12%20%282%29.jpg' },
      { id: 'p15-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/12%20%283%29.jpg' },
      { id: 'p15-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/12%20%284%29.jpg' },
      { id: 'p15-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/12%20%285%29.jpg' }
    ]
  },
  {
    id: 'a16',
    title: '冰晶派对',
    categoryId: '6', // 花漾生日
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/13%20%281%29.jpg',
    photos: [
      { id: 'p16-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/13%20%281%29.jpg' },
      { id: 'p16-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/13%20%282%29.jpg' },
      { id: 'p16-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/13%20%283%29.jpg' },
      { id: 'p16-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/13%20%285%29.jpg' },
      { id: 'p16-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/13%20%286%29.jpg' }
    ]
  },
  {
    id: 'a17',
    title: '韩系甜诞',
    categoryId: '6', // 花漾生日
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/14%20%282%29.jpg',
    photos: [
      { id: 'p17-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/14%20%282%29.jpg' },
      { id: 'p17-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/14%20%286%29.jpg' },
      { id: 'p17-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/14%20%287%29.jpg' },
      { id: 'p17-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/14%20%288%29.jpg' }
    ]
  },
  {
    id: 'a18',
    title: '辣妹出逃',
    categoryId: '2', // 纯漾轻欲
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/15%20%282%29.jpg',
    photos: [
      { id: 'p18-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/15%20%282%29.jpg' },
      { id: 'p18-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/15%20%283%29.jpg' },
      { id: 'p18-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/15%20%286%29.jpg' },
      { id: 'p18-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/15%20%289%29.jpg' }
    ]
  },
  {
    id: 'a19',
    title: '白枝静语',
    categoryId: '8', // 国潮新韵
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/16%20%281%29.jpg',
    photos: [
      { id: 'p19-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/16%20%281%29.jpg' },
      { id: 'p19-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/16%20%282%29.jpg' },
      { id: 'p19-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/16%20%284%29.jpg' },
      { id: 'p19-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/16%20%285%29.jpg' },
      { id: 'p19-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/16%20%287%29.jpg' }
    ]
  },
  {
    id: 'a20',
    title: '浅灰私语',
    categoryId: '2', // 纯漾轻欲
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/17%20%281%29.jpg',
    photos: [
      { id: 'p20-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/17%20%281%29.jpg' },
      { id: 'p20-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/17%20%283%29.jpg' },
      { id: 'p20-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/17%20%285%29.jpg' },
      { id: 'p20-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/17%20%286%29.jpg' }
    ]
  },
  {
    id: 'a21',
    title: '午夜迷航',
    categoryId: '3', // 星芒定格
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/18%20%283%29.jpg',
    photos: [
      { id: 'p21-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/18%20%283%29.jpg' },
      { id: 'p21-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/18%20%282%29.jpg' },
      { id: 'p21-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/18%20%284%29.jpg' },
      { id: 'p21-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/18%20%285%29.jpg' },
      { id: 'p21-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/18%20%286%29.jpg' }
    ]
  },
  {
    id: 'a22',
    title: '赤焰车影',
    categoryId: '3', // 星芒定格
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/19%20%281%29.jpg',
    photos: [
      { id: 'p22-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/19%20%281%29.jpg' },
      { id: 'p22-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/19%20%284%29.jpg' },
      { id: 'p22-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/19%20%283%29.jpg' },
      { id: 'p22-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/19%20%286%29.jpg' }
    ]
  },
  {
    id: 'a23',
    title: '夜车私语',
    categoryId: '3', // 星芒定格
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/20%20%281%29.jpg',
    photos: [
      { id: 'p23-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/20%20%281%29.jpg' },
      { id: 'p23-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/20%20%282%29.jpg' },
      { id: 'p23-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/20%20%284%29.jpg' },
      { id: 'p23-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/20%20%285%29.jpg' },
      { id: 'p23-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/20%20%287%29.jpg' }
    ]
  },
  {
    id: 'a24',
    title: '绯色许愿',
    categoryId: '6', // 花漾生日
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/21%20%281%29.jpg',
    photos: [
      { id: 'p24-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/21%20%281%29.jpg' },
      { id: 'p24-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/21%20%282%29.jpg' },
      { id: 'p24-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/21%20%284%29.jpg' },
      { id: 'p24-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/21%20%285%29.jpg' }
    ]
  },
  {
    id: 'a25',
    title: '豪门夜色',
    categoryId: '3', // 星芒定格
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/22%20%286%29.jpg',
    photos: [
      { id: 'p25-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/22%20%286%29.jpg' },
      { id: 'p25-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/22%20%281%29.jpg' },
      { id: 'p25-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/22%20%282%29.jpg' },
      { id: 'p25-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/22%20%283%29.jpg' }
    ]
  },
  {
    id: 'a26',
    title: '黑裙恋曲',
    categoryId: '12', // 星河共赴
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/23%20%281%29.jpg',
    photos: [
      { id: 'p26-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/23%20%281%29.jpg' },
      { id: 'p26-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/23%20%282%29.jpg' },
      { id: 'p26-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/23%20%283%29.jpg' },
      { id: 'p26-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/23%20%284%29.jpg' },
      { id: 'p26-5', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/23%20%286%29.jpg' }
    ]
  },
  {
    id: 'a27',
    title: '奶白恋歌',
    categoryId: '12', // 星河共赴
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/24%20%281%29.jpg',
    photos: [
      { id: 'p27-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/24%20%281%29.jpg' },
      { id: 'p27-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/24%20%282%29.jpg' },
      { id: 'p27-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/24%20%283%29.jpg' },
      { id: 'p27-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/24%20%285%29.jpg' }
    ]
  },
  {
    id: 'a28',
    title: '青春序章',
    categoryId: '12', // 已分类到星河共赴
    coverUrl: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/25%20%281%29.jpg',
    photos: [
      { id: 'p28-1', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/25%20%281%29.jpg' },
      { id: 'p28-2', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/25%20%282%29.jpg' },
      { id: 'p28-3', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/25%20%283%29.jpg' },
      { id: 'p28-4', url: 'https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/25%20%284%29.jpg' }
    ]
  }
];

export const ICONS = {
  HOME: (active: boolean) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill={active ? "black" : "none"} viewBox="0 0 24 24" stroke="black" strokeWidth={active ? 1 : 1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18" />
    </svg>
  ),
  GALLERY: (active: boolean) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={active ? 1.5 : 1.2}>
      {/* Background Photo Frame */}
      <rect x="7" y="4" width="13" height="13" rx="2" strokeDasharray={active ? "" : "2 2"} className="opacity-40" />
      {/* Foreground Photo Frame */}
      <rect x="4" y="7" width="13" height="13" rx="2" fill={active ? "black" : "none"} />
      {/* Internal Details for Foreground Frame */}
      {!active ? (
        <>
          <circle cx="7.5" cy="10.5" r="1.5" />
          <path d="M4 17l3-3 2 2 4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <circle cx="7.5" cy="10.5" r="1.5" fill="white" stroke="none" />
          <path d="M4 17l3-3 2 2 4-4 4 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  ),
  BACK: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  ),
  SHARE: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.244 2.077a2.25 2.244 2.077 0 00-3.935-2.186zm0-12.814a2.25 2.244 2.077a2.25 2.244 2.077 0 00-3.933 2.185z" />
    </svg>
  ),
  PLUS: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  ),
  DELETE: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.244 2.077 0 00-10.076 0L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  )
};