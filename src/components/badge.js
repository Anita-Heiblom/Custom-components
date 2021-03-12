(() => ({
	name: 'Badge',
	type: 'CONTENT_COMPONENT',
	allowedTypes: ['CONTENT_COMPONENT'],
	orientation: 'HORIZONTAL',
	jsx: (() => {
		const { Badge } = window.MaterialUI.Core;
		const { value, max, showZero, placement } = options;
		const { env, useText } = B;
		const isDev = env === 'dev';
		const isPristine = isDev && children.length === 0;
		const badgeContent = useText(value);
		const verticalPlacement = placement.split('-')[0];
		const horizontalPlacement = placement.split('-')[1];

		const BadgeComponent = (
			<Badge
				classes={{ badge: classes.root }}
				badgeContent={badgeContent}
				anchorOrigin={{
					vertical: verticalPlacement,
					horizontal: horizontalPlacement,
				}}
				max={max}
				showZero={showZero}
			>
				{children}
			</Badge>
		);
		return isDev ? (
			<div
				className={[classes.dev, isPristine ? classes.pristine : ''].join(' ')}
			>
				{BadgeComponent}
			</div>
		) : (
			BadgeComponent
		);
	})(),
	styles: (B) => (theme) => {
		const style = new B.Styling(theme);
		return {
			root: {
				color: ({ options: { textColor } }) =>
					`${style.getColor(textColor)} !important`,
				backgroundColor: ({ options: { background } }) =>
					`${style.getColor(background)} !important`,
			},
			dev: {
				display: 'inline',
			},
			pristine: {
				borderWidth: '0.0625rem',
				borderColor: '#AFB5C8',
				borderStyle: 'dashed',
				backgroundColor: '#F0F1F5',
				width: '50px',
			},
		};
	},
}))();
