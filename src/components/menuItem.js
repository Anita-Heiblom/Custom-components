(() => ({
  name: 'MenuItem',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { MenuItem } = window.MaterialUI.Core;
    const { Icons } = window.MaterialUI;
    const {
      disabled,
      icon,
      iconPosition,
      linkType,
      linkTo,
      linkToExternal,
      type,
      actionId,
      text,
      actionProperties,
    } = options;
    const { env, useText, useAction } = B;
    const isDev = env === 'dev';
    const isAction = linkType === 'action';
    const hasLink = linkTo && linkTo.id !== '';
    const hasExternalLink = linkToExternal && linkToExternal.id !== '';
    const linkToExternalVariable =
      (linkToExternal && useText(linkToExternal)) || '';
    const content = useText(text);
    const [isLoading, setIsLoading] = useState(false);
    const propertyMappings = new Map(actionProperties);
    const input = Array.from(propertyMappings.keys()).reduce((acc, key) => {
      const propertyId = propertyMappings.get(key);
      const value = isDev ? '' : B.useProperty(propertyId);
      acc[key] = value;
      return acc;
    }, {});
    const [actionCallback, { loading }] = (isAction &&
      useAction(actionId, {
        variables: { input },
        onCompleted(data) {
          B.triggerEvent('onActionSuccess', data.actionb5);
        },
        onError(error) {
          B.triggerEvent('onActionError', error);
        },
      })) || [() => {}, { loading: false }];
    useEffect(() => {
      if (loading) {
        B.triggerEvent('onActionLoad', loading);
      }
    }, [loading]);
    const generalProps = {
      disabled: disabled || isLoading || loading,
      href:
        linkType === 'external' && hasExternalLink
          ? linkToExternalVariable
          : undefined,
      component:
        linkType === 'internal' && hasLink
          ? B.Link
          : linkType === 'external'
          ? 'a'
          : undefined,
      endpoint: linkType === 'internal' && hasLink ? linkTo : undefined,
    };
    const compProps = {
      ...generalProps,
      classes: { root: classes.root },
      type: isDev ? 'button' : type,
    };
    const MenuItemComponent = (
      <MenuItem
        {...compProps}
        onClick={(event) => {
          event.stopPropagation();
          actionCallback();
        }}
      >
        {icon !== 'None' && iconPosition === 'start' && (
          <span className={classes.iconStart}>
            {React.createElement(Icons[icon])}
          </span>
        )}
        {content}
        {icon !== 'None' && iconPosition === 'end' && (
          <span className={classes.iconEnd}>
            {React.createElement(Icons[icon])}
          </span>
        )}
      </MenuItem>
    );
    if (isDev) {
      return <div className={classes.wrapper}>{MenuItemComponent}</div>;
    }
    return MenuItemComponent;
  })(),
  styles: (B) => (t) => {
    const style = new B.Styling(t);
    const getSpacing = (idx, device = 'Mobile') =>
      idx === '0' ? '0rem' : style.getSpacing(idx, device);
    return {
      wrapper: {
        display: ({ options: { fullWidth } }) =>
          fullWidth ? 'block' : 'inline-block',
        width: ({ options: { fullWidth } }) => fullWidth && '100%',
        minHeight: '1rem',
        '& > *': { pointerEvents: 'none' },
      },
      root: {
        '&.MuiMenuItem-root': {
          color: ({ options: { textColor } }) => [
            textColor ? style.getColor(textColor) : 'rgba(0, 0, 0, 0.26)',
            '!important',
          ],
          width: '100%',
          marginTop: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[0]),
          marginRight: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[1]),
          marginBottom: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[2]),
          marginLeft: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[3]),
          [`@media ${B.mediaMinWidth(600)}`]: {
            width: '100%',
            marginTop: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[0], 'Portrait'),
            marginRight: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[1], 'Portrait'),
            marginBottom: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[2], 'Portrait'),
            marginLeft: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[3], 'Portrait'),
          },
          [`@media ${B.mediaMinWidth(960)}`]: {
            width: '100%',
            marginTop: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[0], 'Landscape'),
            marginRight: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[1], 'Landscape'),
            marginBottom: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[2], 'Landscape'),
            marginLeft: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[3], 'Landscape'),
          },
          [`@media ${B.mediaMinWidth(1280)}`]: {
            width: '100%',
            marginTop: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[0], 'Desktop'),
            marginRight: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[1], 'Desktop'),
            marginBottom: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[2], 'Desktop'),
            marginLeft: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[3], 'Desktop'),
          },
        },
      },
      iconStart: {
        marginRight: '8px',
        verticalAlign: 'middle',
        display: 'flex',
      },
      iconEnd: { marginLeft: '8px', verticalAlign: 'middle', display: 'flex' },
      empty: { '&::before': { content: '"\\xA0"' } },
    };
  },
}))();
