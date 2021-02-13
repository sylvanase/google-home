import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Input, Row, Col, Modal, Form } from 'antd'

const iconList = [
	{
		icon: '/icon1.png',
		title: '语雀',
		link: 'https://www.yuque.com/dashboard',
	},
	{
		icon: '/icon2.png',
		title: 'npm',
		link: 'https://www.npmjs.com/',
	},
	{
		icon: '/icon4.png',
		title: 'git',
		link: 'https://github.com/',
	},
]

class Home extends React.Component {
	state = {
		showModal: false,
	}

	addLink = (e) => {
		e.stopPropagation()
		this.setState({
			showModal: true,
		})
	}

	handleOk = () => {
		this.setState({
			showModal: false,
		})
	}
	handleCancel = () => {
		this.setState({
			showModal: false,
		})
	}

	render() {
		const { showModal } = this.state
		return (
			<div className={styles.container}>
				<Head>
					<title>Google page</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main className={styles.main}>
					<h1 className={styles.title}>
						<img src="/google_logo.svg" alt="logo" />
					</h1>
					<Input
						className={styles.input}
						size="large"
						prefix={<img src="/search.svg" className={styles.inputIcon} />}
						suffix={
							<img src="/googlemic_clr_24px.svg" className={styles.inputIcon} />
						}
						placeholder="在Google上搜索，或者输入一个网址"
					></Input>
					{/* icons */}
					<Row className={styles.iconList}>
						{iconList.map((item) => {
							return (
								<Col span={6} className={styles.iconItem} key={item.icon}>
									<a href={item.link} target="_blank">
										<div className={styles.itemIconWrap}>
											<img src={item.icon} className={styles.itemIconSrc} />
										</div>
										<div className={styles.iconLink}>{item.title}</div>
									</a>
								</Col>
							)
						})}
						<Col span={6} className={styles.iconItem}>
							<a onClick={(e) => this.addLink(e)}>
								<div className={styles.itemIconWrap}>
									<img src="/add.svg" className={styles.itemIconSrc} />
								</div>
								<div className={styles.iconLink}>添加快捷方式</div>
							</a>
						</Col>
					</Row>
				</main>
				<Modal
					title="添加快捷方式"
					visible={showModal}
					onOk={() => this.handleOk()}
					onCancel={() => this.handleCancel()}
					okText="完成"
					cancelText="取消"
					destroyOnClose={true}
				>
					<Form preserve={false} layout="vertical">
						<Form.Item label="名称" name="">
							<Input placeholder="" />
						</Form.Item>
						<Form.Item label="网址" name="">
							<Input placeholder="" />
						</Form.Item>
					</Form>
				</Modal>
			</div>
		)
	}
}

export default Home
