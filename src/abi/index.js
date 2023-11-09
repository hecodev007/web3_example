import Web3 from 'web3/dist/web3.min.js'

import ERCABI from "@/abi/erc20.json";
import NftABI from "@/abi/index.json";
import CONFIG from "@/abi/address.js";
import StakePoolABI from "@/abi/stakepool.json";
import RechargeABI from "@/abi/recharge.json";
import InvitepoolABI from "@/abi/invitepool.json";
import IndexABI from "@/abi/index.json";
import NftCrystalABI from "@/abi/crystalnft.json";
import NftRewardABI from "@/abi/nftreward.json";
import busdABI from "@/abi/busd.json";

export const call = async function (jsonInterface, contractAddress) {
  const contract = new web3.eth.Contract(jsonInterface, contractAddress);
  // let myAccount = await this.getAccount();
  //methods.myMethod.call 将在不发送交易的情况下调用该“常量”方法并在 EVM 中执行其智能合约方法。注意此种调用方式无法改变智能合约状态。
  await contract.methods.baseURI().call(function (error, result) {
    console.log("返回", result);
  });

  return
}

//获取nft铸造的价格，单价最重要除以1e18
export const getPrice = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(NftABI, CONFIG.DsgNft);

    // let egc_price = await contract.methods.price().call({
    //   from: accounts[0]
    // });

    let busd_price = await contract.methods.price_busd().call({
      from: accounts[0]
    });

    return busd_price;
  })
}

// 判断是否授权
//调用方法 比如判断busdtoken是否给dsgnft合约授权
// isApproved(CONFIG.BUSDToken,CONFIG.DsgNft)
export const isApproved = async function (token, toContract) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(ERCABI, token);

    let allowance = await contract.methods.allowance(accounts[0], toContract).call({
      from: accounts[0]
    });

    // console.log(allowance);
    if (allowance > 1) {
      return true;
    } else {
      return false;
    }

  })
}

// 请求钱包授权
export const Approve = async function (token, toContract) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(ERCABI, token);
    return contract.methods.approve(toContract, web3.utils.toWei("9999999999999999999999", "ether")).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("交易hash：", transactionHash)
      } else {
        loading.close()
        NotifyFail()
        console.log(error)
      }
    }).then(function (receipt) {//监听后续的交易情况

      if (receipt.status) {
        return 1
      } else {
        return 0
      }

    });
  });
}

//铸造盲盒判断授权
export const initHash = async function () {

  var isProve = await isApproved(CONFIG.BUSDToken, CONFIG.DsgNft);
  if (!isProve) {
    return await Approve(CONFIG.BUSDToken, CONFIG.DsgNft);
  }

  // var isProves = await isApproved(CONFIG.EGCToken, CONFIG.DsgNft);
  // if (!isProves) { 
  //   return await Approve(CONFIG.EGCToken, CONFIG.DsgNft);
  // }

  return 1;

}
//nft是否授权
export const isApproveForALl = async function (contr, operator) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(NftABI, contr);

    let ret = await contract.methods.isApprovedForAll(accounts[0], operator).call({
      from: accounts[0]
    });

    return ret;

  })
}

//质押资源水晶是否授权
export const isAut = async function () {

  var isProves = await isApproveForALl(CONFIG.CrystalNft, CONFIG.RewardPool)
  if (isProves === false) {
    return await setApprovalForAll_Crystal()
  }

  var isProves = await isApproveForALl(CONFIG.CrystalNft, CONFIG.RewardPool)
  if (isProves === false) {
    return await setApprovalForAll_Crystal()
  }

  return 1;

}

//质押挖矿是否授权
export const isAuts = async function () {

  var isProve = await isApproveForALl(CONFIG.DsgNft, CONFIG.StakePool)
  if (isProve === false) {
    return await setApprovalForAll()
  }

  return 1;

}

//盲盒铸造流程
//(1) 判断是否授权isApproved(CONFIG.EGCToken,CONFIG.DsgNft) 如果没有就授权 await Approve(CONFIG.EGCToken,CONFIG.DsgNft);
//(2) 判断是否授权isApproved(CONFIG.BUSDToken,CONFIG.DsgNft) 如果没有就授权  await Approve(CONFIG.BUSDToken,CONFIG.DsgNft);
//(3) 调用盲盒铸造功能 await batchMint();
//盲盒铸造,一次铸造5个
export const batchMint = async function (num) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res
    const contract = new web3.eth.Contract(NftABI, CONFIG.DsgNft, {
      from: accounts[0]
    });

    return await contract.methods
      .batchMint(accounts[0], num * 5)
      .send({
        from: accounts[0]
      }, function (error, transactionHash) {
        if (!error) {
          console.log("交易hash：", transactionHash)
        } else {
          loading.close()

        }
      }).then(function (receipt) {//监听后续的交易情况

        if (receipt.status) {
          return 1
        } else {
          return 0
        }

      });
  });
}

//签名
export const getPersonalSign = async function (message, address) {
  const request = {
    method: "personal_sign",
    params: [message, address],
  }
  const signature = await window.ethereum.request(request)
  return { message, signature, address }
}

// personalSign.onclick = async () => {
//   const exampleMessage = 'Example `personal_sign` message';
//   try {
//     const from = accounts[0];
//     const msg = `0x${Buffer.from(exampleMessage, 'utf8').toString('hex')}`;
//     const sign = await ethereum.request({
//       method: 'personal_sign',
//       params: [msg, from, 'Example password'],
//     });
//     personalSignResult.innerHTML = sign;
//     personalSignVerify.disabled = false;
//   } catch (err) {
//     console.error(err);
//     personalSign.innerHTML = `Error: ${err.message}`;
//   }
// };

//中奖概率
export const probabilityWinning = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(NftABI, CONFIG.DsgNft);

    return await contract.methods.UserChance(accounts[0]).call({
      from: accounts[0]
    });
  })
}

//是否抽中资源水晶
export const resourceCrystal = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(NftABI, CONFIG.CrystalNft);

    return await contract.methods.balanceOf(accounts[0]).call({
      from: accounts[0]
    });
  })
}

//部件合成
//composeid是接口返回得id
export const nft_compose = async function (id0, id1, composeId) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(NftABI, CONFIG.DsgNft);
    return await contract.methods.composeNft(id0, id1, composeId).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("交易hash：", transactionHash)
        return 0
      } else {
        loading.close();
        console.log(error)
      }
    }).then(function (receipt) {//监听后续的交易情况

      if (receipt.status) {
        return 1
      } else {
        return 0
      }

    });
  });
}

//单个质押挖矿
export const nft_stake = async function (id, power) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(StakePoolABI, CONFIG.StakePool);
    return await contract.methods.stake(id, power).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("交易hash：", transactionHash)
        return 0
      } else {
        loading.close();
        console.log(error)
      }
    })
  });
}

//批量质押挖矿,ids,powers 都是数组;id是机甲id,energy，就是使用能量；直接传15或则20；效率增加1.5对应15，效率增加2倍，就传20
export const nft_bactch_stake = async function (ids, powers, id, energy, mineId) {
  console.log('ids:' + ids);
  console.log('powers:' + powers);
  console.log('id:' + id);
  console.log('energy:' + energy);
  console.log('mineId:' + mineId);
  let accounts;
  const code = 0;
  
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(StakePoolABI, CONFIG.StakePool);
    return await contract.methods.batchStake(ids, powers, id, energy, mineId).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("质押挖矿交易hash：", transactionHash)
        return 0
      } else {
        loading.close();
        console.log(error)
      }
    }).then(function (receipt) {//监听后续的交易情况

      if (receipt.status) {
        return 1
      } else {
        return 0
      }

    });
  });
  
}

//质押的水晶资源，分红领取
export const claim = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(NftRewardABI, CONFIG.RewardPool);
    return await contract.methods.harvest().send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("交易hash：", transactionHash)
        return 0
      } else {
        loading.close();
        console.log(error)
      }
    }).then(function (receipt) {//监听后续的交易情况

      if (receipt.status) {
        return 1
      } else {
        return 0
      }

    });
  });
}
//领取质押的奖励,id:机甲id
export const stake_harvest = async function (id) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(StakePoolABI, CONFIG.StakePool);
    return await contract.methods.harvest(id).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("交易hash：", transactionHash)
        return 0
      } else {
        loading.close();
        console.log(error)
      }
    })
  });
}

//挖矿赎回,赎回某一个nft
export const stake_withdraw = async function (id) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(StakePoolABI, CONFIG.StakePool);
    return await contract.methods.withdraw(id).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("交易hash：", transactionHash)
        return 0
      } else {
        loading.close();
        console.log(error)
      }
    })
  });
}

//挖矿赎回,全部赎回用户的nft
export const stake_withdrawall = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(StakePoolABI, CONFIG.StakePool);
    return await contract.methods.withdrawAll().send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("交易hash：", transactionHash)
        return 0
      } else {
        loading.close();
        console.log(error)
      }
    })
  });
}

//挖矿赎回,赎回用户的 机甲 id,机甲id
export const stake_withdraw_slot = async function (id) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(StakePoolABI, CONFIG.StakePool);
    return await contract.methods.withdrawSlot(id).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("赎回交易hash：", transactionHash)
        return 0
      } else {
        loading.close();
        console.log(error)
      }
    })
  });
}

//nft 授权，所有;当批量质押的时候，就调用这个
export const setApprovalForAll = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(NftABI, CONFIG.DsgNft);
    return await contract.methods.setApprovalForAll(CONFIG.StakePool, true).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("授权交易hash：", transactionHash)
        return 0
      } else {
        loading.close();
        console.log(error)
      }
    }).then(function (receipt) {//监听后续的交易情况

      if (receipt.status) {
        return 1
      } else {
        return 0
      }

    });
  });
}

//nft 授权，单个，当单个质押前，就调用这个
export const setApprovalForNft = async function (id) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(NftABI, CONFIG.DsgNft);
    return await contract.methods.approve(CONFIG.StakePool, id).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("交易hash：", transactionHash)
        return 0
      } else {
        loading.close();
        console.log(error)
      }
    })
  });
}

//查看挖矿奖励，未领取数,id:机甲id
export const pending_reard = async function (id) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(StakePoolABI, CONFIG.StakePool);

    const result = await contract.methods.pendingToken(accounts[0], id).call({
      from: accounts[0]
    });
    return result
  })
}

//质押时长,id:机甲id
export const stake_time = async function (id) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(StakePoolABI, CONFIG.StakePool);

    const result = await contract.methods.getFullUserInfo(accounts[0], id).call({
      from: accounts[0]
    });

    return result[4] * 3;
  })
}

export const getHeight = async function () {
  const height = await web3.eth.getBlockNumber()
  return height
}

//egc充值授权
export const rechargeAuthorization = async function () {

  var isProves = await isApproved(CONFIG.EGCToken, CONFIG.Recharge);
  if (!isProves) {
    return await Approve(CONFIG.EGCToken, CONFIG.Recharge);
  }

  return 1

}

//egc充值
export const egcRecharge = async function (amount) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(RechargeABI, CONFIG.Recharge);
    return await contract.methods.recharge(web3.utils.toWei(amount + ''), CONFIG.EGCToken).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("egc充值交易hash：", transactionHash)
      } else {
        loading.close();
        console.log(error)
      }
    }).then(function (receipt) {//监听后续的交易情况

      if (receipt.status) {
        return 1
      } else {
        return 0
      }

    });
  });
}

//met充值授权
export const rechargeAuthorizationMet = async function () {

  var isProves = await isApproved(CONFIG.Met, CONFIG.Recharge);
  if (!isProves) {
    return await Approve(CONFIG.Met, CONFIG.Recharge);
  }

  return 1

}

//met充值
export const metRecharge = async function (amount) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(RechargeABI, CONFIG.Recharge);
    return await contract.methods.recharge(web3.utils.toWei(amount + ''), CONFIG.Met).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("met充值交易hash：", transactionHash)
      } else {
        loading.close();
        console.log(error)
      }
    }).then(function (receipt) {//监听后续的交易情况

      if (receipt.status) {
        return 1
      } else {
        return 0
      }

    });
  });
}
//BUSD充值授权
export const rechargeAuthorizationBUSD = async function () {

  var isProves = await isApproved(CONFIG.BUSDToken, CONFIG.Recharge);
  if (!isProves) {
    return await Approve(CONFIG.BUSDToken, CONFIG.Recharge);
  }

  return 1

}

//BUSD充值
export const BUSDRecharge = async function (amount) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(RechargeABI, CONFIG.Recharge);
    return await contract.methods.recharge(web3.utils.toWei(amount + ''), CONFIG.BUSDToken).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("Busd充值交易hash：", transactionHash)
      } else {
        loading.close();
        console.log(error)
      }
    }).then(function (receipt) {//监听后续的交易情况

      if (receipt.status) {
        return 1
      } else {
        return 0
      }

    });
  });
}
//添加邀请人
export const addInviter = async function (address_recommend) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(InvitepoolABI, CONFIG.InvitePool);
    return await contract.methods.addRecommend(accounts[0], address_recommend).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("添加邀请人交易hash：", transactionHash)
      } else {
        loading.close();
        console.log(error)
      }
    }).then(function (receipt) {//监听后续的交易情况

      if (receipt.status) {
        return 1
      } else {
        return 0
      }

    });
  });
}

//好友地址 我的下级
export const friendAddress = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(InvitepoolABI, CONFIG.InvitePool);

    const result = await contract.methods.getOneLevelLists(accounts[0]).call({
      from: accounts[0]
    });
    return result;

  })
}

//邀请分账
export const user_invite_reward = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(NftABI, CONFIG.DsgNft);

    const result = await contract.methods.invite_reward(accounts[0]).call({
      from: accounts[0]
    });
    return result;
  })
}

//好友分账奖励
export const friendsAccount = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(IndexABI, CONFIG.DsgNft);

    const result = await contract.methods.getInvitorCost(accounts[0]).call({
      from: accounts[0]
    });
    return result;
  })
}

//提现withdrawFee
export const withdrawFee = async function (txid, gasFee) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(RechargeABI, CONFIG.RechargeMet);
    return await contract.methods.withdrawFee(txid).send({
      from: accounts[0],
      value: web3.utils.toWei(gasFee + '', "ether")
    }, function (error, transactionHash) {
      if (!error) {
        console.log("提现hash：", transactionHash)
      } else {
        loading.close();
        console.log(error)
      }
    }).then(function (receipt) {//监听后续的交易情况

      if (receipt.status) {
        return 1
      } else {
        return 0
      }

    });
  });
}

//资源水晶数量
export const crystalNftNum = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(NftRewardABI, CONFIG.RewardPool);

    const result = await contract.methods.getUserInfo(accounts[0]).call({
      from: accounts[0]
    });
    console.log(result);
    return result
  })
}

//我的分红
export const myReward = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(NftRewardABI, CONFIG.RewardPool);

    const result = await contract.methods.expectRewardToken(accounts[0]).call({
      from: accounts[0]
    });
    console.log(result);
    return result
  })
}
//矿场获取,机甲id
export const getMineId = async function (id) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(StakePoolABI, CONFIG.StakePool);

    const result = await contract.methods.getMineId(accounts[0], id).call({
      from: accounts[0]
    });
    console.log(result);
    return result
  })
}
//开奖时间,用这个函数返回时间（秒）+7天就是开奖时间
export const openRewardTime = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(NftRewardABI, CONFIG.RewardPool);

    const start = await contract.methods.startTime().call({
      from: accounts[0]
    });

    const weekey = await contract.methods.period().call({
      from: accounts[0]
    });

    var now = new Date();
    var cur = now.getTime() / 1000;
    // var weekey = 60 * 60 * 24 * 7;
    //倒计时秒数
    var ret = weekey - (cur - start);
    console.log("start:", start);
    console.log("cur:", cur);
    if (start == 0) {
      return weekey;
    }

    console.log(ret);
    return ret < 0 ? 0 : ret;
  })
}

export const formatSecond = async function (second) {
  let d = parseInt(second / 86400);
  d = d < 10 ? "0" + d : d;
  let h = parseInt((second % 86400) / 3600);
  h = h < 10 ? "0" + h : h;
  let m = parseInt(((second % 86400) % 3600) / 60);
  m = m < 10 ? "0" + m : m;
  // 作为返回值返回
  var timeHM = d + "天" + h + "时" + m + "分";
  return timeHM;
}


//参与分红的资源水晶总数量
export const totalCrystalNft = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(NftRewardABI, CONFIG.RewardPool);

    const result = await contract.methods.totalNft().call({
      from: accounts[0]
    });
    console.log(result);
    return result
  })
}
export const userCrystalNft = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(NftRewardABI, CONFIG.RewardPool);

    const result = await contract.methods.getNfts(accounts[0]).call({
      from: accounts[0]
    });
    //  console.log(result);
    return result.length
  })
}
//参与分红的资源水晶总数量
export const myCrystals = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(NftCrystalABI, CONFIG.CrystalNft);

    const count = await contract.methods.balanceOf(accounts[0]).call({
      from: accounts[0]
    });
    let ids = [];
    for (let i = 0; i < count; i++) {
      var id = await contract.methods.tokenOfOwnerByIndex(accounts[0], i.toString()).call({
        from: accounts[0]
      });
      ids[i] = id;
    }
    console.log(ids);
    return ids
  })
}
export const myCrystalBalance = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(NftCrystalABI, CONFIG.CrystalNft);

    const count = await contract.methods.balanceOf(accounts[0]).call({
      from: accounts[0]
    });

    return count
  })
}
//分红池数量
export const rewardPoolBalance = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(ERCABI, CONFIG.BUSDToken);
    const count = await contract.methods.balanceOf(CONFIG.RewardPool).call({
      from: accounts[0]
    });
    return count;
  })
}

//参数 :CONFIG.BUSDToken 哪个token就传哪个token的合约地址
export const busdtokenBalance = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();

    const contract = new web3.eth.Contract(ERCABI, CONFIG.BUSDToken);
    const count = await contract.methods.balanceOf(accounts[0]).call({
      from: accounts[0]
    });
    return count;
  })
}
//参数 :CONFIG.EGCToken 哪个token就传哪个token的合约地址
export const egctokenBalance = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();

    const contract = new web3.eth.Contract(ERCABI, CONFIG.EGCToken);
    const count = await contract.methods.balanceOf(accounts[0]).call({
      from: accounts[0]
    });
    return count;
  })
}
//参数 :CONFIG.METToken 哪个token就传哪个token的合约地址
export const mettokenBalance = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();

    const contract = new web3.eth.Contract(ERCABI, CONFIG.Met);
    const count = await contract.methods.balanceOf(accounts[0]).call({
      from: accounts[0]
    });
    return count;
  })
}

//质押资源水晶
export const stake_crystal_nft = async function (id) {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(NftRewardABI, CONFIG.RewardPool);
    return await contract.methods.stake(id).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("赎回交易hash：", transactionHash)
        return 0
      } else {
        loading.close();
        console.log(error)
      }
    }).then(function (receipt) {//监听后续的交易情况

      if (receipt.status) {
        return 1
      } else {
        return 0
      }

    });
  });
}

//质押多个资源水晶
export const stake_batch_crystal_nft = async function (ids) {
  console.log(ids);
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(NftRewardABI, CONFIG.RewardPool);
    return await contract.methods.batchStake(ids).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("质押资源水晶交易hash：", transactionHash)
        return 0
      } else {
        loading.close();
        console.log(error)
      }
    }).then(function (receipt) {//监听后续的交易情况

      if (receipt.status) {
        return 1
      } else {
        return 0
      }

    });
  });
}

//nft 授权，所有;当批量质押资源水晶的时候，就调用这个
export const setApprovalForAll_Crystal = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(NftCrystalABI, CONFIG.CrystalNft);
    return await contract.methods.setApprovalForAll(CONFIG.RewardPool, true).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("授权交易hash：", transactionHash)
        return 0
      } else {
        loading.close();
        console.log(error)
      }
    }).then(function (receipt) {//监听后续的交易情况

      if (receipt.status) {
        return 1
      } else {
        return 0
      }

    });
  });
}

//获取上级
export const getOneUpper = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(InvitepoolABI, CONFIG.InvitePool);
    const count = await contract.methods.getOneUpper(accounts[0]).call({
      from: accounts[0]
    });
    return count;
  })
}

//分红池，上周和本周
export const getRewardInfo = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(busdABI, CONFIG.BUSDToken);
    const data = await contract.methods.balanceOf(CONFIG.RewardPool).call({
      from: accounts[0]
    });
    var num1 = data / 1000000000000000000 / 2
    console.log(num1);
    return num1;
  })
}

export const getActivityAmount = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(StakePoolABI, CONFIG.StakePool);
    const ret = await contract.methods.activityAmount().call({
      from: accounts[0]
    });
    return ret;
  })
}

export const getStealAmount = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(StakePoolABI, CONFIG.StakePool);
    const ret = await contract.methods.stealAmount().call({
      from: accounts[0]
    });
    return ret;
  })
}

//白名单nft总数量
export const myWhiteNft = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(NftCrystalABI, CONFIG._whiteNft);

    const count = await contract.methods.balanceOf(accounts[0]).call({
      from: accounts[0]
    });
    let ids = [];
    for (let i = 0; i < count; i++) {
      var id = await contract.methods.tokenOfOwnerByIndex(accounts[0], i.toString()).call({
        from: accounts[0]
      });
      ids[i] = id;
    }
    console.log(ids);
    return ids
  })
}

export const whiteNftBal = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(NftABI, CONFIG._whiteNft);

    return await contract.methods.balanceOf(accounts[0]).call({
      from: accounts[0]
    });
  })
}

//质押资源水晶是否授权
export const isAutss = async function () {

  var isProves = await isApproveForALl(CONFIG._whiteNft, CONFIG.DsgNft)
  if (isProves === false) {
    return await setApprovalForAll_Crystals()
  }

  return 1;

}

//nft 授权，所有;当批量质押资源水晶的时候，就调用这个
export const setApprovalForAll_Crystals = async function () {
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(NftABI, CONFIG._whiteNft);
    return await contract.methods.setApprovalForAll(CONFIG.DsgNft, true).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("授权交易hash：", transactionHash)
        return 0
      } else {
        loading.close();
        console.log(error)
      }
    }).then(function (receipt) {//监听后续的交易情况

      if (receipt.status) {
        return 1
      } else {
        return 0
      }

    });
  });
}

//用nft兑换机甲
export const free_mint_nft = async function (ids) {
  console.log(ids);
  let accounts;
  return web3.eth.getAccounts().then(async res => {
    accounts = res;
    const contract = new web3.eth.Contract(NftABI, CONFIG.DsgNft);
    return await contract.methods.freeMint(accounts[0], ids).send({
      from: accounts[0]
    }, function (error, transactionHash) {
      if (!error) {
        console.log("兑换nft交易hash：", transactionHash)
        return 0
      } else {
        loading.close();
        console.log(error)
      }
    }).then(function (receipt) {//监听后续的交易情况

      if (receipt.status) {
        return 1
      } else {
        return 0
      }

    });
  });
} 

//登录钱包
export const connectMetamask = async function () {
  if (
    typeof window.ethereum !== "undefined" ||
    typeof window.web3 !== "undefined"
  ) {
    // 检测到Web3浏览器用户。 现在可以使用提供程序了。
    const provider = window["ethereum"] || window.web3.currentProvider;
    // 实例化web3
    let web3 = new Web3(provider);
    window.web3 = web3; //挂载在window上，方便直接获取
    //ethereum.enable() 方法请求用户授权应用访问MetaMask中的用户账号信息。

    // setInterval(() => {
    //   console.log(window.web3.currentProvider);
    // }, 3000);

    return window.ethereum.enable().then((res) => {
      console.log("当前钱包地址：" + res);
      return res + ''
    });
  } else {

    // alert("请安装MetaMask钱包");
  }
  return
}
