
import { PosterData } from './types';

export const INITIAL_DATA: PosterData = {
  mainTitle: "肾穿刺活检术",
  subTitle: "安心课",
  tagline: "早知 | 早诊 | 早达标",
  questionTitle: "这堂课为您解答所有疑问!",
  questionSubtitle: "有价值吗? 有风险吗? 要现在吗?",
  courseItems: [
    { id: 1, title: "为什么需要肾脏穿刺活检术?", description: "患者同病不同因，肾脏穿刺才是诊断的金标准。" },
    { id: 2, title: "穿刺过程全解析", description: "带你解析肾脏穿刺活检过程，做好攻略，心里不慌。" },
    { id: 3, title: "肾活检穿刺危险吗?", description: "穿刺疼不疼? 损伤大不大? 风险高不高?" },
    { id: 4, title: "哪些患者需要考虑肾穿刺", description: "科普符合穿刺的条件。" },
    { id: 5, title: "什么时候穿刺最佳?", description: "诊断就是延缓慢性肾脏病进展的“刹车键”，早诊早达标。" },
  ],
  learningMethodTitle: "学习方式",
  learningSteps: [
    { id: 1, text: "在腾讯医典小程序中搜索", action: "肾穿刺" },
    { id: 2, text: "腾讯医典小程序的首页点击", action: "健康自测" },
    { id: 3, text: "在早知肾好公众号点击", action: "肾穿揭秘" }
  ],
  footerTitle: "早知 早诊 早达标 从容应对诊疗每一步",
  footerSlogan: "用专业科普传递医学温度!"
};
