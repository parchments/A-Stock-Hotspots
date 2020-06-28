import React from 'react';
import { Card , Row, Col} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
import list from '../../config/data.js';
import './hots.scss';
export default class Hots extends React.Component {

  constructor() {
    super(...arguments)
    this.state = {
      
    }
  }

  render () {
    return (
		<div className='wrapper'>
			<div className="pad-10 text-center">
				<div className="a-button semiconductor">半导体及元件</div>
				<div className="a-button technology">科技</div>
				<div className="a-button medical-care">医疗</div>
				<div className="a-button huawei-concept">华为概念</div>
				<div className="a-button national-fund">国家大基金</div>
				<div className="a-button five">5G</div>
				<div className="a-button gold">黄金</div>
				<div className="a-button communication">通讯</div>
				<div className="a-button aluminum-battery">铝电池</div>
				<div className="a-button photoresist">光刻胶</div>
				<div className="a-button spirit">白酒</div>
				<div className="a-button white-appliances">白色家电</div>
				<div className="a-button new-retail">新零售</div>
				<div className="a-button automobile">汽车</div>
				<div className="a-button charging-post">充电桩</div>
				<div className="a-button military-project">军工</div>
				<div className="a-button aerospace">航天</div>
				<div className="a-button bank">银行</div>
				<div className="a-button bond">证券</div>
				<div className="a-button agriculture">农业</div>
				<div className="a-button internet-red-economy">网红经济</div>
				<div className="a-button cement">水泥</div>
				<div className="a-button foxconn-concept">富士康概念</div>
				<div className="a-button game">游戏</div>
				<div className="a-button real-estate">房地产</div>
				<div className="a-button wireless-headset">无线耳机</div>
				<div className="a-button environment-protection">环保</div>
			</div>
			<Row className="list-wrap">
				{
					list.map((item) => {
						return(
							<Col className="mar-b-10" span={24} key={item.id}>
								<Card size="small" title={item.time}>
								  <div className="list-main">
									<div className="list-header">上证指数:
										{
											item.value > 0 && 
											<span className="up-icon"><ArrowUpOutlined />{item.value}%</span>
										}
										{
											item.value < 0 && 
											<span className="down-icon"><ArrowDownOutlined />{item.value}%</span>
										}
									</div>
									<div className="list-title">{item.title}:</div>
									<div className="list-content">
										{
											item.content.map((_item,_index) => {
												return (<p key={_index}>{_index+1}.{_item}</p>)
											})
										}
									</div>
								  </div>
								  <div className="pad-b-5">
									<div className="list-title">今日热点:</div>
									<div className="list-btn">
										<div>
											{
												item.typeList.map((_item,_index) => {
													return (
														<div className="btn-item" key={_index}>
															<div className={_item.className}>{_item.name}</div>
															<div className="info">
																{
																	_item.itemItemList.map((__item,__index)=>{
																		return (
																			<span className="info-item" key={__index}>
																				{__item.name}
																				{
																					__item.value>0 && 
																					<span className="up-icon"><ArrowUpOutlined />{__item.value}%</span>
																				}
																				{
																					__item.value<0 && 
																					<span className="down-icon"><ArrowDownOutlined />{__item.value}%</span>
																				}
																			</span>
																		)
																	})
																}
															</div>
														</div>
													)
												})
											}
										</div>
									</div>
								  </div>
								</Card>
							</Col>
						)
					})
				}
			</Row>
		</div>
    )
  }
}
