(() => ({
	name: 'Tooltip',
	type: 'CONTENT_COMPONENT',
	allowedTypes: [
		'LIST_ITEM',
		'LIST_SUBHEADER',
		'CONTAINER_COMPONENT',
		'CONTENT_COMPONENT',
	],
	orientation: 'HORIZONTAL',
	jsx: (() => {
		const { Tooltip } = window.MaterialUI.Core;
		const { content, placement } = options;
		const { env, useText } = B;
		const isDev = env === 'dev';
		const isEmpty = children.length === 0;
		const contentValue = useText(content);
		const tooltipRef = useRef();
		const [hoverStatus, setHover] = useState(false);
		const compareSize = () => {
			if (showTooltipWhenNeeded) {
				const compare =
					tooltipRef.current.firstChild.scrollWidth >
					tooltipRef.current.firstChild.clientWidth;
				setHover(compare);
			}
		};
		// compare once and add resize listener on "componentDidMount"
		useEffect(() => {
			compareSize();
			B.defineFunction('recalculateTooltip', () => compareSize());
			window.addEventListener('resize', compareSize);
		}, []);
		// remove resize listener again on "componentWillUnmount"
		useEffect(
			() => () => {
				window.removeEventListener('resize', compareSize);
			},
			[]
		);

		const TooltipComponent = (
			<Tooltip
				title={contentValue !== '' && isDev ? 'Tooltip' : contentValue}
				placement={placement}
				disableHoverListener={false}
				enterDelay={500}
				ref={tooltipRef}
				leaveDelay={200}
				arrow
			>
				<span className={classes.wrapper}>
					{isDev && isEmpty ? 'Tooltip' : children}
				</span>
			</Tooltip>
		);
		return isDev ? <div>{TooltipComponent}</div> : TooltipComponent;
	})(),
	styles: () => () => ({
		wrapper: {
			display: 'inline-block',
		},
	}),
}))();
