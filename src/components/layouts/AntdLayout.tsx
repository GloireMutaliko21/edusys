import { ConfigProvider } from 'antd';

const AntdLayout = ({
	children,
}: {
	children: React.ReactNode | React.ReactNode[];
}) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#2563EB',
					fontFamily: '',
				},
				components: {
					Button: {},
					DatePicker: {},
					Descriptions: {},
					Drawer: {},
					Empty: {},
					Form: {},
					Input: {},
					InputNumber: {},
					List: {},
					Message: {},
					Modal: {},
					Notification: {},
					Popover: {},
					Select: {},
					Table: {},
					Tabs: {},
				},
			}}
		>
			{children}
		</ConfigProvider>
	);
};

export default AntdLayout;
