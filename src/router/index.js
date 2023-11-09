import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/home/Home.vue"

import Game from "../views/game/Game.vue"

import Fighting from "../views/fighting/Fighting.vue"
import Level from "../views/fighting/Level.vue"
import CombatRea from "../views/fighting/CombatRea.vue"
import Rolebody from "../views/fighting/Rolebody.vue"
import Roleconsume from "../views/fighting/Roleconsume.vue"

import Mech from "../views/mech/Mech.vue"
import Mining from "../views/mining/Mining.vue"
import Minemap from "../views/mining/Minemap.vue"
import State from "../views/state/State.vue"

import NetMarket from "../views/netmarket/NetMarket.vue"
import Exchange from "../views/exchange/Exchange.vue"
import PlayerMarket from "../views/playermarket/PlayerMarket.vue"
import WhitePaper from "../views/whitepaper/WhitePaper.vue"

import Wallet from "../views/wallet/Wallet.vue"
import FAQ from "../views/faq/FAQ.vue"
import PrivatePlacement from "../views/privateplacement/PrivatePlacement.vue"

import Null from "../views/null/Null.vue"
import Null2 from "../views/null/Null2.vue"
import Null3 from "../views/null/Null3.vue"
import Null4 from "../views/null/Null4.vue"
import Null5 from "../views/null/Null5.vue"
import Null6 from "../views/null/Null6.vue"
import Null7 from "../views/null/Null7.vue"

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  //重定向页
  {
    path: '/',
    redirect: "/Home"
  },
  //首页
  {
    path: '/Home',
    component: Home
  },

  //游戏
  {
    path: '/Game',
    component: Game,
    meta: {
      gorouter: true,//需要权限
    }
  },
  //游戏/战斗
  {
    path: '/Game/Fighting',
    component: Fighting,
    meta: {
      gorouter: true,//需要权限
    }
  },
  //游戏/战斗/关卡
  {
    path: '/Game/Level',
    component: Level,
    meta: {
      gorouter: true,//需要权限
    }
  },
  //游戏/战斗/关卡/战备
  {
    path: '/Game/CombatRea',
    component: CombatRea,
    meta: {
      gorouter: true,//需要权限
    }
  },
  //游戏/战斗/关卡/机体
  {
    path: '/Game/Rolebody',
    component: Rolebody,
    meta: {
      gorouter: true,//需要权限
    }
  },
  //游戏/战斗/关卡/消耗品
  {
    path: '/Game/Roleconsume',
    component: Roleconsume,
    meta: {
      gorouter: true,//需要权限
    }
  },
  //游戏/机甲
  {
    path: '/Game/Mech',
    component: Mech,
    meta: {
      gorouter: true,//需要权限
    }
  },
  //游戏/挖矿
  {
    path: '/Game/Mining',
    component: Mining,
    meta: {
      gorouter: true,//需要权限
    }
  },
  //游戏/挖矿/采矿图
  {
    path: '/Game/Minemap',
    component: Minemap,
    meta: {
      gorouter: true,//需要权限
    }
  },
  {
    path: '/Game/State',
    component: State,
    meta: {
      gorouter: true,//需要权限
    }
  },
  //NET市场
  {
    path: '/NetMarket',
    component: NetMarket,
    meta: {
      gorouter: true,//需要权限
    }
  },
  //玩家市场
  {
    path: '/PlayerMarket',
    component: PlayerMarket,
    meta: {
      gorouter: true,//需要权限
    }
  },
  //白皮书
  {
    path: '/WhitePaper',
    component: WhitePaper,
    meta: {
      gorouter: true,//需要权限
    }
  },
  //钱包
  {
    path: '/Wallet',
    component: Wallet,
    meta: {
      gorouter: true,//需要权限
    }
  },
  //FAQ
  {
    path: '/FAQ',
    component: FAQ
  },
  {
    path: '/PrivatePlacement',
    component: PrivatePlacement,
    meta: {
      gorouter: true,//需要权限
    }
  },
  {
    path: '/Exchange',
    component: Exchange,
    meta: {
      gorouter: true,//需要权限
    }
  },

  //空白页
  {
    path: '/Null',
    component: Null
  },
  //空白页
  {
    path: '/Null2',
    component: Null2
  },
  //空白页
  {
    path: '/Null3',
    component: Null3
  },
  //空白页
  {
    path: '/Null4',
    component: Null4
  },
  //空白页
  {
    path: '/Null5',
    component: Null5
  },
  //空白页
  {
    path: '/Null6',
    component: Null6
  },
  //空白页
  {
    path: '/Null7',
    component: Null7
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

import { Message } from 'element-ui';

router.beforeEach((to, from, next) => {
  if (to.meta.gorouter) {
    if (window.sessionStorage.getItem("token")) {
      next()
    } else {
      next()
      Message.error('Please Log In First')
      // next({
      //   path: '/Home',
      //   //  query:{redirect:to.fullPath}  
      // })
      // window.sessionStorage.setItem("path", "/Home");
    }
  } else {
    next()
  }
})

export default router
