const HOSPITALS = [
  {
    "id": "H001",
    "name": "[Split A] 厦门大学附属厦门眼科中心",
    "sales": "赵巧宣",
    "district": "林红红",
    "manager": "张露西"
  },
  {
    "id": "H002",
    "name": "苏州理想眼科医院",
    "sales": "李政",
    "district": "熊慧",
    "manager": "张露西"
  },
  {
    "id": "H003",
    "name": "上海新视界中兴眼科医院",
    "sales": "季雪莹",
    "district": "谢祥",
    "manager": "张露西"
  },
  {
    "id": "H004",
    "name": "南京鼓楼医院集团宿迁医院",
    "sales": "马明",
    "district": "陈鼎",
    "manager": "张露西"
  },
  {
    "id": "H005",
    "name": "大连何氏眼科医院有限公司",
    "sales": "董玉秀",
    "district": "于洋洋",
    "manager": "张蕾"
  },
  {
    "id": "H006",
    "name": "沈阳爱尔卓越眼科医院（有限公司）",
    "sales": "曹琳",
    "district": "于洋洋",
    "manager": "张蕾"
  },
  {
    "id": "H007",
    "name": "长春爱尔眼科医院",
    "sales": "于金芳",
    "district": "张雪娇",
    "manager": "张蕾"
  },
  {
    "id": "H008",
    "name": "[Split A]内蒙古朝聚眼科医院",
    "sales": "乔敏",
    "district": "沈尚彬",
    "manager": "张蕾"
  },
  {
    "id": "H009",
    "name": "赤峰朝聚眼科医院",
    "sales": "杨玉新",
    "district": "沈尚彬",
    "manager": "张蕾"
  },
  {
    "id": "H010",
    "name": "济南明水眼科医院",
    "sales": "田甜",
    "district": "陈高",
    "manager": "王水红"
  },
  {
    "id": "H011",
    "name": "华厦眼科医院集团衡水同瑞眼科医院（衡水眼科医院）",
    "sales": "申晓飞",
    "district": "张芳",
    "manager": "王水红"
  },
  {
    "id": "H012",
    "name": "北京希玛林顺潮眼科医院",
    "sales": "路易",
    "district": "大区代管",
    "manager": "王水红"
  },
  {
    "id": "H013",
    "name": "淄博康明爱尔眼科医院",
    "sales": "孙宇婷",
    "district": "陈高",
    "manager": "王水红"
  },
  {
    "id": "H014",
    "name": "青岛钰森眼科医院",
    "sales": "张春杰",
    "district": "仲丽华",
    "manager": "王水红"
  },
  {
    "id": "H015",
    "name": "北京华德眼科医院",
    "sales": "李雨璠",
    "district": "安莹莹",
    "manager": "王水红"
  },
  {
    "id": "H016",
    "name": "武汉爱尔眼科医院",
    "sales": "夏麟",
    "district": "王腾",
    "manager": "杜莎"
  },
  {
    "id": "H017",
    "name": "合肥普瑞眼科医院",
    "sales": "苏国胜",
    "district": "陈贤俊",
    "manager": "杜莎"
  },
  {
    "id": "H018",
    "name": "平江光明眼科医院",
    "sales": "李越凡",
    "district": "杨恒岗",
    "manager": "杜莎"
  },
  {
    "id": "H019",
    "name": "江西新视界眼科医院",
    "sales": "张友珍",
    "district": "王超",
    "manager": "杜莎"
  },
  {
    "id": "H020",
    "name": "武陟复明眼科医院",
    "sales": "蔡雯瑾",
    "district": "关典",
    "manager": "杜莎"
  },
  {
    "id": "H021",
    "name": "运城眼科医院",
    "sales": "聂晨琪",
    "district": "雷玲",
    "manager": "陈永红"
  },
  {
    "id": "H022",
    "name": "兰州普瑞眼科医院",
    "sales": "郭峥艳",
    "district": "高峰",
    "manager": "陈永红"
  },
  {
    "id": "H023",
    "name": "绵阳爱尔眼科医院",
    "sales": "罗丽",
    "district": "李忠寒",
    "manager": "陈永红"
  },
  {
    "id": "H024",
    "name": "华厦渝州眼科医院",
    "sales": "钟敏",
    "district": "杨颖",
    "manager": "陈永红"
  },
  {
    "id": "H025",
    "name": "乌鲁木齐普瑞眼科",
    "sales": "杨萍",
    "district": "潘安",
    "manager": "陈永红"
  },
  {
    "id": "H026",
    "name": "昆明康特森眼科医院",
    "sales": "范梦婷",
    "district": "周楠",
    "manager": "陈佩瑜"
  },
  {
    "id": "H027",
    "name": "江门新会爱尔新希望眼科医院",
    "sales": "张泳薇",
    "district": "陈昊",
    "manager": "陈佩瑜"
  },
  {
    "id": "H028",
    "name": "深圳普瑞星耀眼科医院",
    "sales": "蔡益玉",
    "district": "卓文斌",
    "manager": "陈佩瑜"
  },
  {
    "id": "H029",
    "name": "东莞光明眼科医院",
    "sales": "苏书影",
    "district": "卓文斌",
    "manager": "陈佩瑜"
  },
  {
    "id": "H030",
    "name": "重庆普瑞眼科医院",
    "sales": "曾超",
    "district": "杨颖",
    "manager": "陈永红"
  },
  {
    "id": "H031",
    "name": "兰州普瑞眼视光医院",
    "sales": "王婧",
    "district": "高峰",
    "manager": "陈永红"
  },
  {
    "id": "H032",
    "name": "广州番禺普瑞眼科医院",
    "sales": "叶晓延",
    "district": "陈昊",
    "manager": "陈佩瑜"
  },
  {
    "id": "H033",
    "name": "成都爱迪眼科医院",
    "sales": "周凯莉",
    "district": "杨馥宇",
    "manager": "陈永红"
  },
  {
    "id": "H034",
    "name": "辽宁爱尔眼科医院",
    "sales": "曹琳",
    "district": "于洋洋",
    "manager": "张蕾"
  },
  {
    "id": "H035",
    "name": "湘西爱尔眼科医院",
    "sales": "高云帆",
    "district": "杨恒岗",
    "manager": "杜莎"
  },
  {
    "id": "H036",
    "name": "武汉艾格眼科医院",
    "sales": "刘秋格",
    "district": "王腾",
    "manager": "杜莎"
  },
  {
    "id": "H037",
    "name": "佛山爱尔卓越眼科医院",
    "sales": "袁堂维",
    "district": "卓文斌",
    "manager": "陈佩瑜"
  },
  {
    "id": "H038",
    "name": "宁波爱尔光明眼科医院",
    "sales": "徐黎明",
    "district": "孙天峰",
    "manager": "张露西"
  },
  {
    "id": "H039",
    "name": "沈阳何氏眼科医院有限公司",
    "sales": "王镝沣",
    "district": "于洋洋",
    "manager": "张蕾"
  },
  {
    "id": "H040",
    "name": "温州眼谷超级眼视光医院",
    "sales": "肖仁显",
    "district": "许金伟",
    "manager": "张露西"
  },
  {
    "id": "H041",
    "name": "上海普瑞眼科医院",
    "sales": "季雪莹",
    "district": "谢祥",
    "manager": "张露西"
  },
  {
    "id": "H042",
    "name": "重庆爱尔眼科医院",
    "sales": "陈宣池",
    "district": "杨颖",
    "manager": "陈永红"
  }
];