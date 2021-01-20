(() => ({
  name: "Menu",
  type: "CONTENT_COMPONENT",
  allowedTypes: ["CONTENT_COMPONENT"],
  orientation: "VERTICAL",
  jsx: (() => {
    const { Button, Menu, Avatar } = window.MaterialUI.Core;
    const { Icons } = window.MaterialUI;
    const {
      visible,
      variant,
      dropdownVariant,
      anchorPositionVertical,
      anchorPositionHorizontal,
      popoverPositionHorizontal,
      popoverPositionVertical,
      fullWidth,
      size,
      icon,
      iconPosition,
      textPosition,
      type,
      imgUrl,
      letter,
      text,
    } = options;
    const { env, useText } = B;
    const isDev = env === "dev";
    const isEmpty = children.length === 0;
    const [isVisible, setIsVisible] = useState(visible);
    const isIcon = variant === "icon";
    const isAvatar = variant === "avatar";
    if (isAvatar) {
      const isLetter = type === "letter";
      const isImage = type === "img";
      const imgSrc = useText(imgUrl);
    }
    const content = useText(text);
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
      setIsVisible(visible);
    }, [visible]);

    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    const handleClick = () => {
      setOpen(!open);
    };
    const generalProps = { size, tabindex: isDev && -1 };
    const compProps = {
      ...generalProps,
      fullWidth,
      variant,
      classes: {
        root: classes.root,
        contained: classes.contained,
        outlined: classes.outlined,
      },
      type: "button",
    };
    const MenuComponent = (
      <>
         
        <Button
          {...compProps}
          ref={anchorRef}
          startIcon={
            !isIcon &&
            icon !== "None" &&
            iconPosition === "start" &&
            React.createElement(Icons[icon])
          }
          endIcon={
            !isIcon &&
            icon !== "None" &&
            iconPosition === "end" &&
            React.createElement(Icons[icon])
          }
          onClick={handleClick}
        >
           
          {isIcon &&
            React.createElement(Icons[icon === "None" ? "Error" : icon], {
              fontSize: size,
            })} 
          {isAvatar && (
            <>
               
              {content && textPosition === "start" && (
                <span className={classes.contentStart}>{content}</span>
              )} 
              <Avatar
                variant={variant}
                src={isImage && imgSrc}
                className={classes.avatar}
              >
                 
                {isLetter && useText(letter)} 
              </Avatar> 
              {content && textPosition === "end" && (
                <span className={classes.contentEnd}>{content}</span>
              )} 
            </>
          )} 
          {!isIcon && !isAvatar && content} 
        </Button> 
        {isDev && isVisible ? (
          <div
            className={[isEmpty ? classes.empty : "", classes.pristine].join(
              " "
            )}
          >
             
            {children} 
          </div>
        ) : (
          <Menu
            className={dropdownVariant === "outlined" ? classes.menu : ""}
            anchorEl={anchorRef.current}
            keepMounted
            open={open}
            onClose={handleClose}
            elevation={dropdownVariant === "elevation" ? 8 : 0}
            anchorOrigin={{
              vertical: anchorPositionVertical,
              horizontal: anchorPositionHorizontal,
            }}
            transformOrigin={{
              vertical: popoverPositionVertical,
              horizontal: popoverPositionHorizontal,
            }}
          >
             
            {children} 
          </Menu>
        )} 
      </>
    );
    if (isDev) {
      return <div className={classes.wrapper}>{MenuComponent}</div>;
    }
    return MenuComponent;
  })(),
  styles: (B) => (t) => {
    const style = new B.Styling(t);
    const getSpacing = (idx, device = "Mobile") =>
      idx === "0" ? "0rem" : style.getSpacing(idx, device);
    return {
      empty: { minHeight: "4rem" },
      pristine: {
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        width: "auto",
        borderWidth: "0.0625rem",
        borderColor: "#AFB5C8",
        borderStyle: "dashed",
        backgroundColor: "#F0F1F5",
      },
      wrapper: {
        display: ({ options: { fullWidth } }) =>
          fullWidth ? "block" : "inline-block",
        width: ({ options: { fullWidth } }) => fullWidth && "100%",
      },
      root: {
        color: ({ options: { background, textColor, variant } }) => [
          textColor
            ? style.getColor(variant === "icon" ? background : textColor)
            : "rgba(0, 0, 0, 0.26)",
          "!important",
        ],
        width: ({ options: { fullWidth, outerSpacing } }) => {
          if (!fullWidth) return "auto";
          const marginRight = getSpacing(outerSpacing[1]);
          const marginLeft = getSpacing(outerSpacing[3]);
          return `calc(100% - ${marginRight} - ${marginLeft})`;
        },
        marginTop: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[0]),
        marginRight: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[1]),
        marginBottom: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[2]),
        marginLeft: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[3]),
        "&.MuiButton-root, &.MuiIconButton-root": {
          textTransform: ({ options: { uppercase } }) =>
            uppercase ? "uppercase" : "none",
          [`@media ${B.mediaMinWidth(600)}`]: {
            width: ({ options: { fullWidth, outerSpacing } }) => {
              if (!fullWidth) return "auto";
              const marginRight = getSpacing(outerSpacing[1], "Portrait");
              const marginLeft = getSpacing(outerSpacing[3], "Portrait");
              return `calc(100% - ${marginRight} - ${marginLeft})`;
            },
            marginTop: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[0], "Portrait"),
            marginRight: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[1], "Portrait"),
            marginBottom: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[2], "Portrait"),
            marginLeft: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[3], "Portrait"),
          },
          [`@media ${B.mediaMinWidth(960)}`]: {
            width: ({ options: { fullWidth, outerSpacing } }) => {
              if (!fullWidth) return "auto";
              const marginRight = getSpacing(outerSpacing[1], "Landscape");
              const marginLeft = getSpacing(outerSpacing[3], "Landscape");
              return `calc(100% - ${marginRight} - ${marginLeft})`;
            },
            marginTop: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[0], "Landscape"),
            marginRight: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[1], "Landscape"),
            marginBottom: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[2], "Landscape"),
            marginLeft: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[3], "Landscape"),
          },
          [`@media ${B.mediaMinWidth(1280)}`]: {
            width: ({ options: { fullWidth, outerSpacing } }) => {
              if (!fullWidth) return "auto";
              const marginRight = getSpacing(outerSpacing[1], "Desktop");
              const marginLeft = getSpacing(outerSpacing[3], "Desktop");
              return `calc(100% - ${marginRight} - ${marginLeft})`;
            },
            marginTop: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[0], "Desktop"),
            marginRight: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[1], "Desktop"),
            marginBottom: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[2], "Desktop"),
            marginLeft: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[3], "Desktop"),
          },
        },
      },
      contained: {
        backgroundColor: ({ options: { background } }) => [
          background ? style.getColor(background) : "rgba(0, 0, 0, 0.12)",
          "!important",
        ],
      },
      menu: { "& .MuiMenu-paper": { border: "1px solid #d3d4d5" } },
      avatar: {
        color: ({ options: { letterColor } }) => [
          style.getColor(letterColor),
          "!important",
        ],
        backgroundColor: ({ options: { avatarColor } }) => [
          style.getColor(avatarColor),
          "!important",
        ],
        fontWeight: ({ options: { fontWeight } }) => fontWeight,
        "&.MuiAvatar-root": {
          fontSize: ({ options: { fontSize } }) => fontSize,
        },
      },
      contentStart: { marginRight: "8px" },
      contentEnd: { marginLeft: "8px" },
    };
  },
}))();
