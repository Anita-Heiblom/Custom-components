(() => ({
	name: 'Tooltip',
	icon: 'HtmlIcon',
	category: 'CONTENT',
	structure: [
		{
			name: 'Tooltip',
			options: [
				{
					type: 'VARIABLE',
					label: 'Content',
					key: 'content',
					value: ['Type your content here...'],
					configuration: {
						as: 'MULTILINE',
					},
				},
				{
					type: 'CUSTOM',
					label: 'Placement',
					key: 'placement',
					value: 'top',
					configuration: {
						as: 'BUTTONGROUP',
						dataType: 'string',
						allowedInput: [
							{ name: 'Top', value: 'top' },
							{ name: 'Right', value: 'right' },
							{ name: 'Bottom', value: 'bottom' },
							{ name: 'Left', value: 'left' },
						],
					},
				},
				{
					type: 'TOGGLE',
					label: 'Only show tooltip when needed',
					key: 'showTooltipWhenNeeded',
					value: false,
				},
			],
			descendants: [],
		},
	],
}))();
