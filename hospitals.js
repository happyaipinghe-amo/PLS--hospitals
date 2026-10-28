const ROSTER_VERSION = "2026-10-28-liuxiaomin-41";
const HOSPITALS = [
  {
    "id": "H029",
    "name": "东莞光明眼科医院",
    "province": "广东",
    "city": "东莞",
    "group": "普瑞",
    "manager": "陈佩瑜",
    "district": "卓文斌",
    "sales": "苏书影"
  },
  {
    "id": "H003",
    "name": "上海新视界中兴眼科医院",
    "province": "上海",
    "city": "上海",
    "group": "新视界",
    "manager": "张露西",
    "district": "谢祥",
    "sales": "季雪莹"
  },
  {
    "id": "H001",
    "name": "[Split A] 厦门大学附属厦门眼科中心",
    "province": "福建",
    "city": "厦门",
    "group": "华厦",
    "manager": "张露西",
    "district": "林红红",
    "sales": "赵巧宣"
  },
  {
    "id": "H041",
    "name": "上海普瑞眼科医院",
    "province": "上海",
    "city": "上海",
    "group": "普瑞",
    "manager": "张露西",
    "district": "谢祥",
    "sales": "季雪莹"
  },
  {
    "id": "H026",
    "name": "昆明康特森眼科医院",
    "province": "云南",
    "city": "昆明",
    "group": "单体私立",
    "manager": "陈佩瑜",
    "district": "周楠",
    "sales": "范梦婷"
  },
  {
    "id": "H039",
    "name": "沈阳何氏眼科医院有限公司",
    "province": "辽宁",
    "city": "沈阳",
    "group": "何氏",
    "manager": "张蕾",
    "district": "于洋洋",
    "sales": "王镝沣"
  },
  {
    "id": "H012",
    "name": "北京希玛林顺潮眼科医院",
    "province": "北京",
    "city": "北京",
    "group": "希玛",
    "manager": "王水红",
    "district": "大区代管",
    "sales": "路易"
  },
  {
    "id": "H032",
    "name": "广州番禺普瑞眼科医院",
    "province": "广东",
    "city": "广州",
    "group": "普瑞",
    "manager": "陈佩瑜",
    "district": "陈昊",
    "sales": "叶晓延"
  },
  {
    "id": "H010",
    "name": "济南明水眼科医院",
    "province": "山东",
    "city": "济南",
    "group": "单体私立",
    "manager": "王水红",
    "district": "陈高",
    "sales": "田甜"
  },
  {
    "id": "H043",
    "name": "潍坊眼科医院",
    "province": "山东",
    "city": "潍坊",
    "group": "单体私立",
    "manager": "王水红",
    "district": "仲丽华",
    "sales": "刘周波"
  },
  {
    "id": "H006",
    "name": "沈阳爱尔卓越眼科医院（有限公司）",
    "province": "辽宁",
    "city": "沈阳",
    "group": "爱尔",
    "manager": "张蕾",
    "district": "于洋洋",
    "sales": "曹琳"
  },
  {
    "id": "H044",
    "name": "广州爱尔眼科医院",
    "province": "广东",
    "city": "广州",
    "group": "爱尔",
    "manager": "陈佩瑜",
    "district": "陈昊",
    "sales": "黎晓玲"
  },
  {
    "id": "H024",
    "name": "华厦渝州眼科医院",
    "province": "重庆",
    "city": "重庆",
    "group": "华厦",
    "manager": "陈永红",
    "district": "杨颖",
    "sales": "钟敏"
  },
  {
    "id": "H005",
    "name": "大连何氏眼科医院有限公司",
    "province": "辽宁",
    "city": "大连",
    "group": "何氏",
    "manager": "张蕾",
    "district": "于洋洋",
    "sales": "空岗（于洋洋）"
  },
  {
    "id": "H037",
    "name": "佛山爱尔卓越眼科医院",
    "province": "广东",
    "city": "佛山",
    "group": "爱尔",
    "manager": "陈佩瑜",
    "district": "卓文斌",
    "sales": "袁堂维"
  },
  {
    "id": "H008",
    "name": "[Split A]内蒙古朝聚眼科医院",
    "province": "内蒙古",
    "city": "呼和浩特",
    "group": "朝聚",
    "manager": "张蕾",
    "district": "沈尚彬",
    "sales": "乔敏"
  },
  {
    "id": "H042",
    "name": "重庆爱尔眼科医院",
    "province": "重庆",
    "city": "重庆",
    "group": "爱尔",
    "manager": "陈永红",
    "district": "杨颖",
    "sales": "陈宣池"
  },
  {
    "id": "H022",
    "name": "兰州普瑞眼科医院",
    "province": "甘肃",
    "city": "兰州",
    "group": "普瑞",
    "manager": "陈永红",
    "district": "高峰",
    "sales": "郭峥艳"
  },
  {
    "id": "H002",
    "name": "苏州理想眼科医院",
    "province": "江苏",
    "city": "苏州",
    "group": "单体私立",
    "manager": "张露西",
    "district": "熊慧",
    "sales": "李政"
  },
  {
    "id": "H004",
    "name": "南京鼓楼医院集团宿迁医院",
    "province": "江苏省",
    "city": "宿迁",
    "group": "单体私立",
    "manager": "张露西",
    "district": "陈鼎",
    "sales": "马明"
  },
  {
    "id": "H007",
    "name": "长春爱尔眼科医院",
    "province": "吉林省",
    "city": "长春",
    "group": "爱尔",
    "manager": "张蕾",
    "district": "张雪娇",
    "sales": "于金芳"
  },
  {
    "id": "H011",
    "name": "华厦眼科医院集团衡水同瑞眼科医院（衡水眼科医院）",
    "province": "河北",
    "city": "衡水",
    "group": "华厦",
    "manager": "王水红",
    "district": "张芳",
    "sales": "申晓飞"
  },
  {
    "id": "H034",
    "name": "辽宁爱尔眼科医院",
    "province": "辽宁",
    "city": "沈阳",
    "group": "爱尔",
    "manager": "张蕾",
    "district": "于洋洋",
    "sales": "曹琳"
  },
  {
    "id": "H019",
    "name": "江西新视界眼科医院",
    "province": "江西省",
    "city": "南昌",
    "group": "新视界",
    "manager": "杜莎",
    "district": "王超",
    "sales": "张友珍"
  },
  {
    "id": "H025",
    "name": "乌鲁木齐普瑞眼科",
    "province": "新疆",
    "city": "乌鲁木齐",
    "group": "普瑞",
    "manager": "陈永红",
    "district": "潘安",
    "sales": "杨萍"
  },
  {
    "id": "H023",
    "name": "绵阳爱尔眼科医院",
    "province": "四川",
    "city": "绵阳",
    "group": "爱尔",
    "manager": "陈永红",
    "district": "李忠寒",
    "sales": "罗丽"
  },
  {
    "id": "H017",
    "name": "合肥普瑞眼科医院",
    "province": "安徽省",
    "city": "合肥",
    "group": "普瑞",
    "manager": "杜莎",
    "district": "陈贤俊",
    "sales": "苏国胜"
  },
  {
    "id": "H018",
    "name": "平江光明眼科医院",
    "province": "湖南省",
    "city": "岳阳",
    "group": "单体私立",
    "manager": "杜莎",
    "district": "杨恒岗",
    "sales": "李越凡"
  },
  {
    "id": "H021",
    "name": "运城市眼科医院",
    "province": "山西",
    "city": "运城",
    "group": "单体私立",
    "manager": "陈永红",
    "district": "雷玲",
    "sales": "聂晨琪"
  },
  {
    "id": "H013",
    "name": "淄博康明爱尔眼科医院",
    "province": "山东",
    "city": "淄博",
    "group": "爱尔",
    "manager": "王水红",
    "district": "陈高",
    "sales": "孙宇婷"
  },
  {
    "id": "H031",
    "name": "兰州普瑞眼视光医院",
    "province": "甘肃",
    "city": "兰州",
    "group": "普瑞",
    "manager": "陈永红",
    "district": "高峰",
    "sales": "王婧"
  },
  {
    "id": "H035",
    "name": "湘西爱尔眼科医院",
    "province": "湖南",
    "city": "湘西土家族苗族自治州",
    "group": "爱尔",
    "manager": "杜莎",
    "district": "杨恒岗",
    "sales": "高云帆"
  },
  {
    "id": "H038",
    "name": "宁波爱尔光明眼科医院",
    "province": "浙江",
    "city": "宁波",
    "group": "爱尔",
    "manager": "张露西",
    "district": "孙天峰",
    "sales": "徐黎明"
  },
  {
    "id": "H009",
    "name": "赤峰朝聚眼科医院",
    "province": "内蒙古",
    "city": "赤峰",
    "group": "朝聚",
    "manager": "张蕾",
    "district": "沈尚彬",
    "sales": "杨玉新"
  },
  {
    "id": "H015",
    "name": "北京华德眼科医院",
    "province": "北京",
    "city": "北京",
    "group": "普瑞",
    "manager": "王水红",
    "district": "安莹莹",
    "sales": "李雨璠"
  },
  {
    "id": "H028",
    "name": "深圳普瑞星耀眼科医院",
    "province": "广东",
    "city": "深圳",
    "group": "普瑞",
    "manager": "陈佩瑜",
    "district": "卓文斌",
    "sales": "蔡益玉"
  },
  {
    "id": "H030",
    "name": "重庆普瑞眼科医院",
    "province": "重庆",
    "city": "重庆",
    "group": "普瑞",
    "manager": "陈永红",
    "district": "杨颖",
    "sales": "曾超"
  },
  {
    "id": "H033",
    "name": "成都爱迪眼科医院",
    "province": "四川",
    "city": "成都",
    "group": "华厦",
    "manager": "陈永红",
    "district": "杨馥宇",
    "sales": "周凯莉"
  },
  {
    "id": "H036",
    "name": "武汉艾格眼科医院",
    "province": "湖北",
    "city": "武汉",
    "group": "爱尔",
    "manager": "杜莎",
    "district": "王腾",
    "sales": "刘秋格"
  },
  {
    "id": "H045",
    "name": "郑州爱尔眼科医院",
    "province": "河南省",
    "city": "郑州",
    "group": "爱尔",
    "manager": "杜莎",
    "district": "关典",
    "sales": "徐新程"
  },
  {
    "id": "H040",
    "name": "温州眼谷超级眼视光医院",
    "province": "浙江",
    "city": "温州",
    "group": "单体私立",
    "manager": "张露西",
    "district": "许金伟",
    "sales": "肖仁显"
  }
];
