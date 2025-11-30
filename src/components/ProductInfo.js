import React, { useState } from 'react';
import './ProductInfo.css';

const ProductInfo = () => {
  const features = [
  { icon: '📊', title: '多参同步采集', description: '一次上线完成里程、坐标、高程、轨距、超高等多关键参数全面测量' },
  { icon: '⚡', title: '作业效率提升3倍', description: '3人15日完成百公里检测，取代传统3人以上班组，效率大幅跃升' },
  { icon: '🔧', title: '小型化结构优化', description: '体积缩小40%，模块化电池与操控平台，高效、低耗、易维护' },
  { icon: '🛠️', title: '先进核心技术', description: 'BDS/INS组合导航+融合激光扫描，构建高精度、高可靠“数智底座”' },
  { icon: '🌍', title: '广泛场景适配', description: '完美适配地铁、国铁线、适配多元作业场景，已在全国多地成功应用' },
  { icon: '🛡️', title: '技术自主可控', description: '拥有完整自主知识产权与软硬件解决方案，摆脱国外技术依赖' },
  { icon: '🎯', title: '测量能力领先', description: '核心指标集中在测量能力、作业效率、结构设计、适配场景等多维度行业领先' },
  { icon: '✅', title: '权威机构认证', description: '通过国家铁路产品质量监督检验中心、中国铁道科学研究院等权威检测，所有指标优于国家及行业标准' }
];

  const specifications = [
  { label: '整机重量', value: '≤30kg' },
  { label: '续航能力', value: '≥8小时' },
  { label: '工作温度', value: '-20°C ~ 50°C' },
  { label: '异常识别率', value: '≥98%' },
  { label: 'MTBF（平均无故障时间）', value: '≥8000h' },
  { label: '自动恢复成功率', value: '≥95%' },
  { label: 'MTTR（平均修复时间）', value: '≤2h' },
  { label: '巡检速度', value: '4.5km/h' },
  { label: '制动距离', value: '≤0.5m' },
  { label: '通信速率', value: '≥1Mbps' },
 
];

  const [showImage, setShowImage] = useState(true);
  const [imageSrc, setImageSrc] = useState('/Tunnel.png');

  const handleImageError = () => {
    setShowImage(false);
  };


  return (
    <div className="product-info">
      <div className="hero-section">
        <h2>铁路测量机器人</h2>
        <p className="hero-description">
          铁路测量机器人为小型化多功能轨道检测装备，集成三维激光扫描仪与组合导航系统。可快速、全面获取线路沿线的点云、三维尺寸、全景影像、漫游视频等测量成果。用于完成线路测量、接触网检测、限界检测、轨旁设备调查、隧道变形与病害检测等工作。该设备具备可简易拆解、小型化、灵活性等特点，适用于地铁、国铁等多种轨道交通线路的检测需求。
        </p>
        <a
          href="https://www.bilibili.com/video/BV1EKUzBaEos/?spm_id_from=333.1387.homepage.video_card.click&vd_source=eb3a763f33da8c162da4e6c6c62bcceb"
          target="_blank"
          rel="noopener noreferrer"
          className="video-button"
        >
          ▶ 查看演示视频
        </a>
        {showImage && (
          <div className="hero-image">
            <div className="image-wrapper">
              <img
                src={imageSrc}
                alt="铁路测量机器人"
                loading="lazy"
                onError={handleImageError}
              />
            </div>
            <p className="image-caption">铁路测量机器人（示意图）</p>
          </div>
        )}
      </div>

      <div className="features-section">
        <h3>核心特性</h3>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="specifications-section">
        <h3>技术规格</h3>
        <div className="specs-grid">
          {specifications.map((spec, index) => (
            <div key={index} className="spec-item">
              <span className="spec-label">{spec.label}</span>
              <span className="spec-value">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
