(() => ({
	name: 'Signature',
	type: 'CONTENT_COMPONENT',
	allowedTypes: [],
	orientation: 'HORIZONTAL',
	jsx: (() => {
		const { env, getCustomModelAttribute, useText } = B;
		const SignaturePad = window.SignaturePad;
		const {
			FormControl,
			FormControlLabel,
			FormHelperText,
		} = window.MaterialUI.Core;
		const {
			helperText,
			fullWidth,
			error,
			validationValueMissing,
			margin,
			hideLabel,
			customModelAttribute: customModelAttributeObj,
			nameAttribute,
		} = options;
		const isDev = env === 'dev';
		const { id: customModelAttributeId, label = [] } = customModelAttributeObj;
		const labelText = useText(label);
		const customModelAttribute = getCustomModelAttribute(
			customModelAttributeId
		);
		const { name: customModelAttributeName, validations: { required } = {} } =
			customModelAttribute || {};
		const nameAttributeValue = useText(nameAttribute);
		const requiredText = required ? '*' : '';
		const [errorState, setErrorState] = useState(error);
		const [value, setValue] = useState('');
		const signaturePadRef = useRef(null);
		const [helper, setHelper] = useState(useText(helperText));

		B.defineFunction('ClearSignature', () => signaturePadRef.current.clear());

		const handleChange = (event) => {
			const { target } = event;
			let { validity: validation } = target;
			handleValidation(validation);

			if (!signaturePadRef.current.isEmpty()) {
				const image = signaturePadRef.current.toDataURL();
				const splittedImage = image.split(',');
				setValue(splittedImage[splittedImage.length - 1]);
			}
		};

		const handleValidation = (validation) => {
			setErrorState(!validation.valid);
			const message = useText(validationValueMissing) || useText(helperText);
			setHelper(message);
		};

		const invalidHandler = (event) => {
			event.preventDefault();
			const {
				target: { validity },
			} = event;
			handleValidation(validity);
		};

		const Control = () => (
			<FormControl
				fullWidth={fullWidth}
				required={required}
				margin={margin}
				error={errorState}
			>
				<FormControlLabel
					control={
						<div
							className={[
								classes.signaturePad,
								fullWidth ? classes.fullwidth : '',
							].join(' ')}
							onMouseUp={handleChange}
						>
							<SignaturePad ref={signaturePadRef} onMouseUp={handleChange} />
							<input
								hidden
								name={nameAttributeValue || customModelAttributeName}
								value={value}
								required={required}
								onInvalid={invalidHandler}
							/>
						</div>
					}
					label={hideLabel ? '' : `${labelText}${requiredText}`}
					labelPlacement='top'
					classes={{
						root: classes.label,
					}}
				/>
				{helper && (
					<FormHelperText classes={{ root: classes.helper }}>
						{helper}
					</FormHelperText>
				)}
			</FormControl>
		);

		return isDev ? (
			<div id='signature' className={classes.root}>
				{Control()}
			</div>
		) : (
			<div id='signature'>{Control()}</div>
		);
	})(),
	styles: (B) => (t) => {
		const { color: colorFunc, env, Styling } = B;
		const style = new Styling(t);

		const getOpacColor = (col, val) => colorFunc.alpha(col, val);

		return {
			root: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100%',
				width: '100%',
				fontSize: '0.75rem',
				color: '#262A3A',
				boxSizing: 'border-box',
				borderWidth: '0.0625rem',
				borderColor: '#AFB5C8',
				borderStyle: 'dashed',
				backgroundColor: '#F0F1F5',
			},
			signaturePad: {
				border: '1px solid',
				borderRadius: '4px',
				borderColor: ({ options: { borderColor } }) => [
					style.getColor(borderColor),
					'!important',
				],
			},
			label: {
				marginLeft: '0!important',
				pointerEvents: env === 'dev' && 'none',
				alignItems: 'start!important',
				color: ({ options: { labelColor } }) => [
					style.getColor(labelColor),
					'!important',
				],
				'&.Mui-error': {
					color: ({ options: { errorColor } }) => [
						style.getColor(errorColor),
						'!important',
					],
				},
			},
			helper: {
				color: ({ options: { helperColor } }) => [
					style.getColor(helperColor),
					'!important',
				],
				'&.Mui-error': {
					color: ({ options: { errorColor } }) => [
						style.getColor(errorColor),
						'!important',
					],
				},
			},
			input: {
				display: 'none',
			},
			control: {
				display: 'inline-flex',
				alignItems: 'center',
			},
			fullwidth: {
				display: 'flex',
				width: '100%',
			},
			span: {
				flex: 1,
				textAlign: 'start',
				marginBottom: '0.1875rem!important',
				marginRight: '1rem!important',
			},
			messageContainer: {
				flexWrap: 'wrap',
				paddingTop: '1.25rem',
				display: ({ options: { type } }) =>
					type === 'grid' ? 'flex' : 'block',
				color: ({ options: { textColor } }) => [
					style.getColor(textColor),
					'!important',
				],
				'& .MuiIconButton-root': {
					color: ({ options: { textColor } }) => [
						getOpacColor(style.getColor(textColor), 0.54),
						'!important',
					],
				},
			},
			listView: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			},
			gridView: {
				display: 'flex',
			},
			gridItem: {
				display: 'flex',
				borderRadius: '0.3125rem',
				flexDirection: 'column',
				border: ' 0.0625rem solid #eee',
				marginRight: '1rem',
				marginBottom: '1rem',
			},
			gridItemDetails: {
				maxWidth: ({ options: { imagePreviewWidth, showImagePreview } }) =>
					showImagePreview ? imagePreviewWidth : 'auto',
				display: 'flex',
				margin: '1rem',
				justifyContent: 'space-between',
			},
			deleteIcon: {
				color: `${t.colors.light}!important`,
			},
			remove: {
				height: '1.875rem',
				padding: '0.25rem!important',
			},
		};
	},
}))();
