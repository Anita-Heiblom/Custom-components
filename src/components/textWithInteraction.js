(() => ({
	name: 'TextWithInteraction',
	type: 'CONTENT_COMPONENT',
	allowedTypes: [],
	orientation: 'HORIZONTAL',
	jsx: (() => {
		const { content, useInnerHtml, textToTarget } = options;
		const { env } = B;
		const isDev = env === 'dev';

		const Tag = useInnerHtml
			? 'div'
			: {
					Title1: 'h1',
					Title2: 'h2',
					Title3: 'h3',
					Title4: 'h4',
					Title5: 'h5',
					Title6: 'h6',
					Body1: 'p',
					Body2: 'p',
			  }[options.type || 'Body1'];

		const parsedContent = B.useText(content);

		const targetClicked = () => {
			B.triggerEvent('TargetClicked');
		};

		useEffect(() => {
			const span = document.getElementById('target');
			if (span != null) {
				span.addEventListener('click', () => {
					targetClicked();
				});
			}
		}, []);

		const clickElement = `<span id="target">${textToTarget}</span>`;

		const targetText = new RegExp(textToTarget, 'g');
		const newContent = parsedContent.replace(targetText, clickElement);

		return !isDev ? (
			<Tag
				className={classes.content}
				dangerouslySetInnerHTML={{
					__html: newContent,
				}}
			/>
		) : (
			<Tag className={classes.content}>{parsedContent}</Tag>
		);
	})(),
	styles: (B) => (t) => {
		const style = new B.Styling(t);
		const getSpacing = (idx, device = 'Mobile') =>
			idx === '0' ? '0rem' : style.getSpacing(idx, device);
		return {
			content: {
				'& #target': {
					cursor: 'pointer',
				},
				display: 'block',
				marginTop: ({ options: { outerSpacing } }) =>
					getSpacing(outerSpacing[0]),
				marginRight: ({ options: { outerSpacing } }) =>
					getSpacing(outerSpacing[1]),
				marginBottom: ({ options: { outerSpacing } }) =>
					getSpacing(outerSpacing[2]),
				marginLeft: ({ options: { outerSpacing } }) =>
					getSpacing(outerSpacing[3]),
				textAlign: ({ options: { textAlignment } }) => textAlignment,
				padding: 0,
				whiteSpace: 'pre-wrap',
				color: ({ options: { textColor } }) => style.getColor(textColor),
				fontFamily: ({ options: { type } }) => style.getFontFamily(type),
				fontSize: ({ options: { type } }) => style.getFontSize(type),
				fontWeight: ({ options: { fontWeight } }) => fontWeight,
				textTransform: ({ options: { type } }) => style.getTextTransform(type),
				letterSpacing: ({ options: { type } }) => style.getLetterSpacing(type),
				[`@media ${B.mediaMinWidth(600)}`]: {
					marginTop: ({ options: { outerSpacing } }) =>
						getSpacing(outerSpacing[0], 'Portrait'),
					marginRight: ({ options: { outerSpacing } }) =>
						getSpacing(outerSpacing[1], 'Portrait'),
					marginBottom: ({ options: { outerSpacing } }) =>
						getSpacing(outerSpacing[2], 'Portrait'),
					marginLeft: ({ options: { outerSpacing } }) =>
						getSpacing(outerSpacing[3], 'Portrait'),
					fontSize: ({ options: { type } }) =>
						style.getFontSize(type, 'Portrait'),
				},
				[`@media ${B.mediaMinWidth(960)}`]: {
					marginTop: ({ options: { outerSpacing } }) =>
						getSpacing(outerSpacing[0], 'Landscape'),
					marginRight: ({ options: { outerSpacing } }) =>
						getSpacing(outerSpacing[1], 'Landscape'),
					marginBottom: ({ options: { outerSpacing } }) =>
						getSpacing(outerSpacing[2], 'Landscape'),
					marginLeft: ({ options: { outerSpacing } }) =>
						getSpacing(outerSpacing[3], 'Landscape'),
					fontSize: ({ options: { type } }) =>
						style.getFontSize(type, 'Landscape'),
				},
				[`@media ${B.mediaMinWidth(1280)}`]: {
					marginTop: ({ options: { outerSpacing } }) =>
						getSpacing(outerSpacing[0], 'Desktop'),
					marginRight: ({ options: { outerSpacing } }) =>
						getSpacing(outerSpacing[1], 'Desktop'),
					marginBottom: ({ options: { outerSpacing } }) =>
						getSpacing(outerSpacing[2], 'Desktop'),
					marginLeft: ({ options: { outerSpacing } }) =>
						getSpacing(outerSpacing[3], 'Desktop'),
					fontSize: ({ options: { type } }) =>
						style.getFontSize(type, 'Desktop'),
				},
			},
			placeholder: {
				color: '#dadde4',
			},
		};
	},
}))();
