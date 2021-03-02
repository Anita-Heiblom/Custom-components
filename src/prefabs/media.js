(() => ({
	name: 'Media',
	icon: 'ImageIcon',
	category: 'CONTENT',
	structure: [
		{
			name: 'Media',
			options: [
				{
					label: 'Media type',
					key: 'type',
					value: 'img',
					type: 'CUSTOM',
					configuration: {
						as: 'BUTTONGROUP',
						dataType: 'string',
						allowedInput: [
							{ name: 'Image', value: 'img' },
							{ name: 'Video', value: 'video' },
							{ name: 'I-frame', value: 'iframe' },
						],
					},
				},
				{
					value: [''],
					label: 'Source',
					key: 'imageSource',
					type: 'VARIABLE',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'type',
							comparator: 'EQ',
							value: 'img',
						},
					},
				},
				{
					value: false,
					label: 'Use zoom',
					key: 'useZoom',
					type: 'TOGGLE',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'type',
							comparator: 'EQ',
							value: 'img',
						},
					},
				},
				{
					value: [''],
					label: 'Zoom image Source',
					key: 'zoomImageSource',
					type: 'VARIABLE',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'useZoom',
							comparator: 'EQ',
							value: true,
						},
					},
				},
				{
					label: 'Zoom type',
					key: 'zoomType',
					value: 'hover',
					type: 'CUSTOM',
					configuration: {
						as: 'BUTTONGROUP',
						dataType: 'string',
						allowedInput: [
							{ name: 'Hover', value: 'hover' },
							{ name: 'Click', value: 'click' },
						],
						condition: {
							type: 'SHOW',
							option: 'useZoom',
							comparator: 'EQ',
							value: true,
						},
					},
				},
				{
					value: [''],
					label: 'Source',
					key: 'videoSource',
					type: 'VARIABLE',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'type',
							comparator: 'EQ',
							value: 'video',
						},
					},
				},
				{
					value: [],
					label: 'Source',
					key: 'iframeSource',
					type: 'VARIABLE',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'type',
							comparator: 'EQ',
							value: 'iframe',
						},
					},
				},
				{
					value: [''],
					label: 'Image Alternative Text',
					key: 'imgAlt',
					type: 'VARIABLE',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'type',
							comparator: 'EQ',
							value: 'img',
						},
					},
				},
				{
					value: [''],
					label: 'Title',
					key: 'title',
					type: 'VARIABLE',
				},
				{
					type: 'SIZE',
					label: 'Width',
					key: 'width',
					value: '100%',
					configuration: {
						as: 'UNIT',
					},
				},
				{
					type: 'SIZE',
					label: 'Height',
					key: 'height',
					value: '',
					configuration: {
						as: 'UNIT',
					},
				},
				{
					value: ['0rem', '0rem', 'M', '0rem'],
					label: 'Outer space',
					key: 'outerSpacing',
					type: 'SIZES',
				},
			],
			descendants: [],
		},
	],
}))();
