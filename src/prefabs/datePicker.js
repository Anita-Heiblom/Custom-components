(() => ({
	name: 'DatePicker',
	icon: 'DatePickerIcon',
	category: 'FORM',
	structure: [
		{
			name: 'DateTimePicker',
			options: [
				{
					value: false,
					label: 'Use as filter',
					key: 'useAsFilter',
					type: 'TOGGLE',
				},
				{
					value: '',
					label: 'Filter model',
					key: 'filterModel',
					type: 'MODEL',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'useAsFilter',
							comparator: 'EQ',
							value: true,
						},
					},
				},
				{
					type: 'FILTER',
					label: 'Filter by',
					key: 'filterBy',
					value: {},
					configuration: {
						dependsOn: 'filterModel',
						apiVersion: 'v1',
						condition: {
							type: 'SHOW',
							option: 'useAsFilter',
							comparator: 'EQ',
							value: true,
						},
					},
				},
				{
					label: 'Filter type',
					key: 'filterType',
					value: 'eq',
					type: 'CUSTOM',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'useAsFilter',
							comparator: 'EQ',
							value: true,
						},
						as: 'DROPDOWN',
						dataType: 'string',
						allowedInput: [
							{ name: 'Equal to', value: 'eq' },
							{ name: 'Not equal to', value: 'neq' },
							{ name: 'Greater than', value: 'gt' },
							{ name: 'Greater than or equal to', value: 'gteq' },
							{ name: 'Less than', value: 'lt' },
							{ name: 'Less than or equal to', value: 'lteq' },
						],
					},
				},
				{
					value: { label: ['Date'], value: [] },
					label: 'Label',
					key: 'customModelAttribute',
					type: 'CUSTOM_MODEL_ATTRIBUTE',
					configuration: {
						allowedTypes: ['date'],
					},
				},
				{
					label: 'Type',
					key: 'type',
					value: 'date',
					type: 'TEXT',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'customModelAttribute',
							comparator: 'EQ',
							value: false,
						},
					},
				},
				{
					type: 'TOGGLE',
					label: 'Disable Toolbar',
					key: 'disableToolbar',
					value: false,
				},
				{
					label: 'Language',
					key: 'locale',
					value: 'en',
					type: 'CUSTOM',
					configuration: {
						as: 'BUTTONGROUP',
						dataType: 'string',
						allowedInput: [
							{ name: 'English', value: 'en' },
							{ name: 'Dutch', value: 'nl' },
						],
					},
				},
				{
					value: 'MM/dd/yyyy',
					label: 'Format',
					key: 'dateFormat',
					type: 'TEXT',
				},
				{
					value: false,
					label: 'Error',
					key: 'error',
					type: 'TOGGLE',
				},
				{
					type: 'TOGGLE',
					label: 'Disabled',
					key: 'disabled',
					value: false,
				},
				{
					value: [],
					label: 'Placeholder',
					key: 'placeholder',
					type: 'VARIABLE',
				},
				{
					value: [],
					label: 'Helper text',
					key: 'helperText',
					type: 'VARIABLE',
				},
				{
					label: 'Variant',
					key: 'variant',
					value: 'inline',
					type: 'CUSTOM',
					configuration: {
						as: 'BUTTONGROUP',
						dataType: 'string',
						allowedInput: [
							{ name: 'Dialog', value: 'dialog' },
							{ name: 'Inline', value: 'inline' },
							{ name: 'Static', value: 'static' },
						],
					},
				},
				{
					label: 'Input Variant',
					key: 'inputvariant',
					value: 'outlined',
					type: 'CUSTOM',
					configuration: {
						as: 'BUTTONGROUP',
						dataType: 'string',
						allowedInput: [
							{ name: 'Standard', value: 'standard' },
							{ name: 'Outlined', value: 'outlined' },
							{ name: 'Filled', value: 'filled' },
						],
					},
				},
				{
					type: 'TOGGLE',
					label: 'Full width',
					key: 'fullWidth',
					value: true,
				},
				{
					label: 'Size',
					key: 'size',
					value: 'medium',
					type: 'CUSTOM',
					configuration: {
						as: 'BUTTONGROUP',
						dataType: 'string',
						allowedInput: [
							{ name: 'Medium', value: 'medium' },
							{ name: 'Small', value: 'small' },
						],
					},
				},
				{
					label: 'Margin',
					key: 'margin',
					value: 'normal',
					type: 'CUSTOM',
					configuration: {
						as: 'BUTTONGROUP',
						dataType: 'string',
						allowedInput: [
							{ name: 'None', value: 'none' },
							{ name: 'Dense', value: 'dense' },
							{ name: 'Normal', value: 'normal' },
						],
					},
				},
				{
					value: false,
					label: 'Styles',
					key: 'styles',
					type: 'TOGGLE',
				},
				{
					type: 'COLOR',
					label: 'Background color',
					key: 'backgroundColor',
					value: 'White',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'styles',
							comparator: 'EQ',
							value: true,
						},
					},
				},
				{
					type: 'COLOR',
					label: 'Background color popup',
					key: 'backgroundColorPopup',
					value: 'Primary',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'styles',
							comparator: 'EQ',
							value: true,
						},
					},
				},
				{
					type: 'COLOR',
					label: 'Border color',
					key: 'borderColor',
					value: 'Accent1',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'styles',
							comparator: 'EQ',
							value: true,
						},
					},
				},
				{
					type: 'COLOR',
					label: 'Border color (hover)',
					key: 'borderHoverColor',
					value: 'Black',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'styles',
							comparator: 'EQ',
							value: true,
						},
					},
				},
				{
					type: 'COLOR',
					label: 'Border color (focus)',
					key: 'borderFocusColor',
					value: 'Primary',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'styles',
							comparator: 'EQ',
							value: true,
						},
					},
				},
				{
					value: false,
					label: 'Hide label',
					key: 'hideLabel',
					type: 'TOGGLE',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'styles',
							comparator: 'EQ',
							value: true,
						},
					},
				},
				{
					type: 'COLOR',
					label: 'Label color',
					key: 'labelColor',
					value: 'Accent3',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'styles',
							comparator: 'EQ',
							value: true,
						},
					},
				},
				{
					type: 'COLOR',
					label: 'Text color',
					key: 'textColor',
					value: 'Black',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'styles',
							comparator: 'EQ',
							value: true,
						},
					},
				},
				{
					type: 'COLOR',
					label: 'Placeholder color',
					key: 'placeholderColor',
					value: 'Light',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'styles',
							comparator: 'EQ',
							value: true,
						},
					},
				},
				{
					type: 'COLOR',
					label: 'Helper color',
					key: 'helperColor',
					value: 'Accent2',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'styles',
							comparator: 'EQ',
							value: true,
						},
					},
				},
				{
					type: 'COLOR',
					label: 'Error color',
					key: 'errorColor',
					value: 'Danger',
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'styles',
							comparator: 'EQ',
							value: true,
						},
					},
				},
				{
					value: false,
					label: 'Advanced settings',
					key: 'advancedSettings',
					type: 'TOGGLE',
				},
				{
					type: 'VARIABLE',
					label: 'name attribute',
					key: 'nameAttribute',
					value: [],
					configuration: {
						condition: {
							type: 'SHOW',
							option: 'advancedSettings',
							comparator: 'EQ',
							value: true,
						},
					},
				},
			],
			descendants: [],
		},
	],
}))();
