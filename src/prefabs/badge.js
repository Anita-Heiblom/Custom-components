(() => ({
	name: 'Badge',
	icon: 'ButtonIcon',
	category: 'CONTENT',
	structure: [
		{
			name: 'Badge',
			options: [
				{
					type: 'VARIABLE',
					label: 'Value',
					key: 'value',
					value: ['5'],
				},
				{
					type: 'NUMBER',
					label: 'Max',
					key: 'max',
					value: 99,
				},
				{
					type: 'TOGGLE',
					label: 'Show badge when zero',
					key: 'showZero',
					value: false,
				},
				{
					value: 'top-right',
					label: 'Placement',
					key: 'placement',
					type: 'CUSTOM',
					configuration: {
						as: 'BUTTONGROUP',
						dataType: 'string',
						allowedInput: [
							{ name: 'Top right', value: 'top-right' },
							{ name: 'Bottom right', value: 'bottom-right' },
							{ name: 'Bottom left', value: 'bottom-left' },
							{ name: 'Top left', value: 'top-left' },
						],
					},
				},
				{
					type: 'COLOR',
					label: 'Color',
					key: 'background',
					value: 'Primary',
				},
				{
					type: 'COLOR',
					label: 'Text color',
					key: 'textColor',
					value: 'White',
				},
			],
			descendants: [],
		},
	],
}))();
