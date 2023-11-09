import { newindex } from "network/axios"

/** ==========================盲盒==========================*/
//页面数据
export function postInfo() {
  return newindex({
    url: '/my/user_asset',
    method: "post",
  })
}

//资源水晶使用
export function postDividends(amount) {
  return newindex({
    url: '/my/dividends',
    method: "post",
    data: {
      amount
    }
  })
}

//抽奖
export function markInfo(page, page_size) {
  return newindex({
    url: '/my/user_equip',
    method: "post",
    data: {
      page,
      page_size
    }
  })
}

export function postDismantle(package_id) {
  return newindex({
    url: '/my/dismantle',
    method: "post",
    data: {
      package_id
    }
  })
}

/** ==========================机甲==========================*/
//获取部件类型
export function postEquiptype() {
  return newindex({
    url: '/common/equip_type',
    method: "post",
  })
}

//机甲数据
export function postUserequip(page, equip_type, page_size,is_compose) {
  return newindex({
    url: '/my/user_equip',
    method: "post",
    data: {
      page,
      equip_type,
      page_size,
      is_compose
    }
  })
}

//我的机甲
export function postRoleinfo(use_type) {
  return newindex({
    url: '/my/equip_package',
    method: "post",
    data: {
      use_type
    }
  })
}

//部件升级
export function postUpgrade(equip_id) {
  return newindex({
    url: '/my/upgrade',
    method: "post",
    data: {
      equip_id
    }
  })
}

//合成获取部件
export function postSynthesisequip(id) {
  return newindex({
    url: '/my/synthesis_equip',
    method: "post",
    data: {
      id
    }
  })
}

//部件合成
export function postSynthesis(main_nft_id, second_nft_id, met) {
  return newindex({
    url: '/my/synthesis',
    method: "post",
    data: {
      main_nft_id, 
      second_nft_id, 
      met
    }
  })
}

/** ==========================挖矿==========================*/
//矿场列表
export function postCommonmine() {
  return newindex({
    url: '/common/mine',
    method: "post",
  })
}

//能量值
export function postUserinfo() {
  return newindex({
    url: 'my/user_info',
    method: "post",
  })
}

/** ==========================提现==========================*/
//提现
export function postWithdraw(address,amount,coin) {
  return newindex({
    url: 'my/withdraw',
    method: "post",
    data: {
      address,
      amount,
      coin
    }
  })
}
