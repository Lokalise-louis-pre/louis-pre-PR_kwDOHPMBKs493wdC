"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[6666],{"./src/components/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Popover});var react=__webpack_require__("./node_modules/react/index.js"),usePopper=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),index_esm=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),useOnClickOutside=__webpack_require__("./src/utils/hooks/useOnClickOutside.ts"),reach_portal_esm=__webpack_require__("./node_modules/@reach/portal/dist/reach-portal.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopoverWrapper=_ref=>{let{inPortal=!1,children}=_ref;return inPortal?(0,jsx_runtime.jsx)(reach_portal_esm.Z,{children}):children};PopoverWrapper.displayName="PopoverWrapper";try{PopoverWrapper.displayName="PopoverWrapper",PopoverWrapper.__docgenInfo={description:"",displayName:"PopoverWrapper",props:{inPortal:{defaultValue:{value:"false"},description:"",name:"inPortal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"]={docgenInfo:PopoverWrapper.__docgenInfo,name:"PopoverWrapper",path:"src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"})}catch(__react_docgen_typescript_loader_error){}const setRef=(value,ref)=>{"function"==typeof ref?ref(value):ref&&(ref.current=value)};var styles=__webpack_require__("./src/components/Popover/styles.ts");const isEventTriggeredInContainer=(e,container)=>!container||container.contains(e.currentTarget),getHandlers=(referenceElement,visible,setVisible,triggerEvent,delay)=>{if("hover"===triggerEvent){let timer;const delayVisibility=isVisible=>{isVisible&&(timer=setTimeout((()=>setVisible(!0)),250))},checktimer=()=>{timer&&clearTimeout(timer)},checkDelay=()=>{delay?delayVisibility(!0):setVisible(!0)};return{onPointerEnter:e=>{isEventTriggeredInContainer(e,referenceElement)&&checkDelay()},onPointerLeave:e=>{isEventTriggeredInContainer(e,referenceElement)&&setVisible(!1),checktimer()},onFocus:e=>isEventTriggeredInContainer(e,referenceElement)&&setVisible(!0),onBlur:()=>setVisible(!1)}}return{onClick:e=>{document.body.click(),e.stopPropagation(),e.preventDefault(),setVisible(!visible)},onTouchStart:e=>{e.stopPropagation(),e.preventDefault(),setVisible(!visible)},onKeyDown:(isVisible=visible,onSetIsVisible=setVisible,e=>{"Tab"===e.key&&(e.stopPropagation(),onSetIsVisible(!1)),"Escape"===e.key&&(e.stopPropagation(),onSetIsVisible(!1)),"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),e.preventDefault(),onSetIsVisible(!isVisible))})};var isVisible,onSetIsVisible},Popover=_ref=>{let{placement="bottom",popoverContent,triggerEvent="click",delay=!1,children,components:{Arrow=styles.E,Content=styles.V}={},modifiers=[],offset,withArrow=!1,visibleCallback,showPopover=!0,forceVisible=!1,inPortal=!1,...rest}=_ref;const[visible,setVisible]=(0,react.useState)(forceVisible),[referenceElement,setReferenceElement]=(0,react.useState)(null),[popperElement,setPopperElement]=(0,react.useState)(null),[arrowElement,setArrowElement]=(0,react.useState)(null),popper=(0,usePopper.D)(referenceElement,popperElement,{placement,modifiers:[{name:"arrow",options:{element:arrowElement,padding:5}},{name:"offset",options:{offset:[0,withArrow?10:4*(offset??0)]}},...modifiers]});(0,react.useEffect)((()=>{forceVisible&&setVisible(!0)}),[forceVisible,setVisible]);const onClickOutside=(0,react.useCallback)((()=>{"hover"!==triggerEvent&&setVisible(!1)}),[triggerEvent]);(0,useOnClickOutside.t)(popperElement,onClickOutside),(0,react.useEffect)((()=>{visibleCallback&&visibleCallback(visible)}),[visible]);const updatePopper=(0,react.useCallback)((()=>{popper.update&&popper.update()}),[popper]),popperElementRefObject=(0,react.useRef)(popperElement);popperElementRefObject.current=popperElement,(0,index_esm.NB)({targetRef:popperElementRefObject,onResize:updatePopper});const getChildrenProps=(props,ref)=>{return{...props,ref:(newRef=setReferenceElement,parentRef=ref,el=>{setRef(el,newRef),parentRef&&setRef(el,parentRef)}),...getHandlers(referenceElement,visible,setVisible,triggerEvent,delay)};var newRef,parentRef};let clone=null;const resolvedChildren="function"==typeof children?children(visible):children;if("string"==typeof resolvedChildren||"number"==typeof children)clone=(0,jsx_runtime.jsx)("span",{...getChildrenProps(),children:resolvedChildren});else{if(!(0,react.isValidElement)(resolvedChildren))throw new Error("Should pass only single element as the child");clone=(0,react.cloneElement)(resolvedChildren,getChildrenProps(resolvedChildren.props,resolvedChildren.ref))}const contentElement="function"==typeof popoverContent?popoverContent(setVisible):popoverContent,popperPlacement=popper.attributes?.popper?.["data-popper-placement"]??"bottom";return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[clone,visible&&showPopover&&contentElement&&(0,jsx_runtime.jsx)(PopoverWrapper,{inPortal,children:(0,jsx_runtime.jsxs)(Content,{ref:setPopperElement,...popper.attributes.popper,style:popper.styles.popper,...rest,onKeyDown:e=>{"Escape"===e.key&&(e.stopPropagation(),setVisible(!1))},children:[contentElement,withArrow&&(0,jsx_runtime.jsx)(Arrow,{ref:setArrowElement,style:popper.styles.arrow,placement:popperPlacement})]})})]})};Popover.displayName="Popover";try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{placement:{defaultValue:{value:"bottom"},description:"Determines where the popover should appear relative to the child element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},popoverContent:{defaultValue:null,description:"Renders text content and / or any HTML node in the popover.",name:"popoverContent",required:!1,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}},triggerEvent:{defaultValue:{value:"click"},description:"Determines whether the popover should appear on hover or click.",name:"triggerEvent",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},modifiers:{defaultValue:{value:"[]"},description:"Sets custom popperjs modifier objects: https://popper.js.org/docs/v2/modifiers/.",name:"modifiers",required:!1,type:{name:"Record<string, unknown>[]"}},offset:{defaultValue:null,description:"Sets popover offset using theme spacing when rendering without an arrow.",name:"offset",required:!1,type:{name:"enum",value:[{value:"0"},{value:"3"},{value:"1"},{value:"2"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},children:{defaultValue:null,description:"Renders text content or any HTML node to attach the popover to.",name:"children",required:!0,type:{name:"ReactChild | ((visible: boolean) => ReactChild)"}},components:{defaultValue:null,description:"Overrides the default Arrow and Content components to render the popover.",name:"components",required:!1,type:{name:"Partial<Components>"}},withArrow:{defaultValue:{value:"false"},description:"Toggles an arrow pointing to the attached element.",name:"withArrow",required:!1,type:{name:"boolean"}},showPopover:{defaultValue:{value:"true"},description:"Toggles the visibility of the popover.",name:"showPopover",required:!1,type:{name:"boolean"}},forceVisible:{defaultValue:{value:"false"},description:"Toggles whether the popover is visible without user interaction.",name:"forceVisible",required:!1,type:{name:"boolean"}},inPortal:{defaultValue:{value:"false"},description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the popover.",name:"inPortal",required:!1,type:{name:"boolean"}},visibleCallback:{defaultValue:null,description:"Function executed when the visibility of the popover changes.",name:"visibleCallback",required:!1,type:{name:"((visible: boolean) => void)"}},delay:{defaultValue:{value:"false"},description:"Toggles delayed appearance of the popover when `triggerEvent` is 'hover'.",name:"delay",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Popover/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Arrow,V:()=>Content});var _utils_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/zIndex.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/theme/color.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/theme/variants.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme/radius.ts");const bottom=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    top: -5px;

    &::before {
        border-left-width: 1px;
        border-left-style: solid;
        border-top-width: 1px;
        border-top-style: solid;
    }
`,top=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    bottom: -5px;

    &::before {
        border-right-width: 1px;
        border-right-style: solid;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }
`,left=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    right: -5px;

    &::before {
        border-right-width: 1px;
        border-right-style: solid;
        border-top-width: 1px;
        border-top-style: solid;
    }
`,right=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    left: -5px;

    &::before {
        border-left-width: 1px;
        border-left-style: solid;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }
`,Arrow=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.W)("hide")};

    &::before {
        position: absolute;
        width: 8px;
        height: 8px;
        z-index: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.W)("hide")};
        content: '';
        display: block;
        transform: rotate(45deg);
        background-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("background.primary")};
        border-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("border.primary")};
    }

    ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_3__.o)("placement",{top,bottom,left,right,"right-end":right,"right-start":right,"left-start":left,"auto-end":_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,"auto-start":_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,auto:_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,"bottom-end":bottom,"bottom-start":bottom,"left-end":left,"top-end":top,"top-start":top},"auto")}
`,Content=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
    padding: 0;
    border-radius: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.q)("md")};
    background-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("background.primary")};
    border: 1px solid ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("border.primary")};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    z-index: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.W)("popover")};
    color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("content.primary")};
    font-weight: 400;
`},"./src/foundations/icons/Info.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Info});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Info=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{d:"M9.99443 1.66751c-4.60519 0-8.33794 3.73275-8.33794 8.33789 0 4.6052 3.74379 8.3269 8.33794 8.3269 4.59417 0 8.33797-3.7327 8.33797-8.3269 0-4.5941-3.7328-8.33789-8.33797-8.33789Zm.83927 12.50139H9.16616V9.16613h1.66754v5.00277Zm0-6.67035H9.16616V5.83097h1.66754v1.66758Z"})})};Info.displayName="Info";try{Info.displayName="Info",Info.__docgenInfo={description:"",displayName:"Info",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.300"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.200"'},{value:'"red.300"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.200"'},{value:'"green.300"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.200"'},{value:'"yellow.300"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.200"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Info.tsx#Info"]={docgenInfo:Info.__docgenInfo,name:"Info",path:"src/foundations/icons/Info.tsx#Info"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});__webpack_require__("./node_modules/react/index.js");var _styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SvgIcon=_ref=>{let{color="inherit",size="inherit",ariaLabel,children,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.uJ,{color,size,...props,"aria-hidden":!ariaLabel||void 0,role:ariaLabel?"img":void 0,"aria-label":ariaLabel,viewBox:"0 0 20 20",children})};SvgIcon.displayName="SvgIcon";try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{color:{defaultValue:{value:"inherit"},description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.300"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.200"'},{value:'"red.300"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.200"'},{value:'"green.300"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.200"'},{value:'"yellow.300"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.200"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:{value:"inherit"},description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"undefined"},description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"src/foundations/icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DG:()=>SvgIconG,Lq:()=>SvgIconRect,VA:()=>SvgIconClipPath,o3:()=>SvgIconPath,uJ:()=>SvgRoot,x:()=>SvgIconDefs});var _utils_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/excludeProps.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/color.ts");const commonConfig={shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_0__.L)(["fill","color","stroke"])},reservedKeywords=["currentColor","inherit"],colorTypesDefaults={color:"inherit",fill:"currentColor",stroke:void 0},colorHelper=(colorType,inputColor,props)=>inputColor&&!reservedKeywords.includes(inputColor)?(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)(inputColor)(props):colorTypesDefaults[colorType],commonStyles=_utils_styled__WEBPACK_IMPORTED_MODULE_2__.iv`
    pointer-events: all;
    box-sizing: border-box;
    color: ${_ref=>{let{color:svgColor,...props}=_ref;return colorHelper("color",svgColor,props)}};
    fill: ${_ref2=>{let{fill,...props}=_ref2;return colorHelper("fill",fill,props)}};
    stroke: ${_ref3=>{let{stroke,...props}=_ref3;return colorHelper("stroke",stroke,props)}};
    font-size: ${props=>props.size};
`,SvgRoot=_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP.svg.withConfig(commonConfig)`
    ${commonStyles};
    width: 1em;
    height: 1em;
`,SvgIconPath=_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP.path.withConfig(commonConfig)`
    ${commonStyles};
`,SvgIconRect=_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP.rect.withConfig(commonConfig)`
    ${commonStyles};
`,SvgIconG=_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP.g.withConfig(commonConfig)`
    ${commonStyles};
`,SvgIconDefs=(_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP.circle.withConfig(commonConfig)`
    ${commonStyles};
`,_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP.linearGradient.withConfig(commonConfig)`
    ${commonStyles};
`,_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP.defs.withConfig(commonConfig)`
    ${commonStyles};
`),SvgIconClipPath=(_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP.stop.withConfig(commonConfig)`
    ${commonStyles};
`,_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP.clipPath.withConfig(commonConfig)`
    ${commonStyles};
`)},"./src/utils/hooks/useOnClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useOnClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useOnClickOutside=function(element,callback){let isActive=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const listener=event=>{element&&!element.contains(event.target)&&callback?.(event)},container=element?.closest("reach-portal");return isActive&&(container?.addEventListener("click",listener),container?.addEventListener("touchstart",listener),document.addEventListener("click",listener),document.addEventListener("touchstart",listener)),()=>{container?.removeEventListener("click",listener),container?.removeEventListener("touchstart",listener),document.removeEventListener("click",listener),document.removeEventListener("touchstart",listener)}}),[element,callback,isActive])}},"./src/utils/theme/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>color});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const color=colorPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(colorPath,theme.colors)))},"./src/utils/theme/excludeProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>excludeProps});const excludeProps=props=>(prop,defaultValidatorFn)=>!props.includes(prop)&&defaultValidatorFn(prop)},"./src/utils/theme/fontFamily.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>fontFamily});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const fontFamily=family=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(family,theme.fonts)))},"./src/utils/theme/fromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>fromTheme});const fromTheme=callback=>_ref=>{let{theme,...props}=_ref;return callback(theme,props)}},"./src/utils/theme/radius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>radius});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const radius=radiusPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(radiusPath,theme.radii)))},"./src/utils/theme/spacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>spacing});var _fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const spacing=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>args.map((level=>theme.space[level])).join(" ")))}},"./src/utils/theme/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>typography});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const typography=typographyPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(typographyPath,theme.typography)))},"./src/utils/theme/variants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>variants});const variants=(prop,allVariants,fallback)=>props=>allVariants["function"==typeof prop?prop(props):props[prop]??fallback]},"./src/utils/theme/zIndex.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>zIndex});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const zIndex=index=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(index,theme.zIndices)))},"./src/components/Hint/Hint.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Hint_stories,hint:()=>hint});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),Info=__webpack_require__("./src/foundations/icons/Info.tsx"),Popover=__webpack_require__("./src/components/Popover/Popover.tsx"),color=__webpack_require__("./src/utils/theme/color.ts"),excludeProps=__webpack_require__("./src/utils/theme/excludeProps.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),zIndex=__webpack_require__("./src/utils/theme/zIndex.ts"),styles=__webpack_require__("./src/components/Popover/styles.ts");const centerPosition=styled_components_browser_esm.iv`
    position: absolute; // Set as "absolute" so svg is not affecting line height.
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`,HintButton=styled_components_browser_esm.ZP.span`
    cursor: pointer;
    display: inline-block;
    vertical-align: baseline;
    width: ${"14px"};
    min-height: ${"14px"};
    border-radius: 50%;
    position: relative; // Necessary so "icon" can be positioned in the center
    line-height: inherit;

    &::before {
        content: '\\a0'; // This space is necessary to hold line-height, which is necessary so Hint is visually aligned with the text
    }
`,IconWrapper=styled_components_browser_esm.ZP.span`
    display: inline-flex;
    fill: ${(0,color.$)("interactive.content.idle")};
    font-size: 16px;
    ${centerPosition}
`,Content=(0,styled_components_browser_esm.ZP)(styles.V).withConfig({shouldForwardProp:(0,excludeProps.L)(["width"])})`
    font-size: 14px;
    line-height: 20px;
    background-color: ${(0,color.$)("background.primary")};
    color: ${(0,color.$)("content.secondary")};
    border-radius: ${(0,radius.q)("md")};
    padding: ${(0,spacing.W)(3,4)};
    border-color: ${(0,color.$)("border.primary")};
    z-index: ${(0,zIndex.W)("tooltip")};
    width: ${_ref=>{let{width}=_ref;return width}};
`,Arrow=(0,styled_components_browser_esm.ZP)(styles.E)`
    &:before {
        background-color: ${(0,color.$)("background.primary")};
        border-color: ${(0,color.$)("border.primary")};
    }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Hint=_ref=>{let{placement="auto",ariaLabel="More information",width=245,children}=_ref;const contentComponent=(0,react.useMemo)((()=>{const adjustedComponent=(0,react.forwardRef)(((props,ref)=>(0,jsx_runtime.jsx)(Content,{width:"auto"===width?width:`${width}px`,...props,ref})));return adjustedComponent.displayName="ContentWithWidth",adjustedComponent}),[width]);return(0,jsx_runtime.jsx)(Popover.J,{withArrow:!0,popoverContent:children,placement,components:{Content:contentComponent,Arrow},children:(0,jsx_runtime.jsx)(HintButton,{"aria-label":ariaLabel,role:"button",tabIndex:0,children:(0,jsx_runtime.jsx)(IconWrapper,{children:(0,jsx_runtime.jsx)(Info.k,{color:"interactive.content.idle"})})})})};Hint.displayName="Hint";try{Hint.displayName="Hint",Hint.__docgenInfo={description:"",displayName:"Hint",props:{placement:{defaultValue:{value:"auto"},description:"Determines where the hint should appear relative to the hint icon.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},width:{defaultValue:{value:"245"},description:"Changes the width of the hint.",name:"width",required:!1,type:{name:'number | "auto"'}},ariaLabel:{defaultValue:{value:"More information"},description:"Changes the accessibility label on the hint icon.",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the hint.",name:"children",required:!0,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Hint/Hint.tsx#Hint"]={docgenInfo:Hint.__docgenInfo,name:"Hint",path:"src/components/Hint/Hint.tsx#Hint"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>(0,esm.kt)(Hint,_extends({},args,{mdxType:"Hint"}));Template.displayName="Template";name="StoryContent";var name;const layoutProps={Template};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Hint",component:Hint,parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},argTypes:{width:{control:{type:"text"}}},decorators:[Story=>{const StoryContent=styled_components_browser_esm.ZP.div`
                font-family: ${(0,fontFamily.I)("default")};
                ${(0,typography.c)("body")};
            `;return(0,esm.kt)(StoryContent,{mdxType:"StoryContent"},(0,esm.kt)(react.Fragment,null,"This could use an explanation ",(0,esm.kt)(Story,{mdxType:"Story"})," with some extra context."))}],mdxType:"Meta"}),(0,esm.kt)("h1",null,"Hint"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"Hint can be used as an icon button to provide additional context and explanations for other UI elements or text."),(0,esm.kt)("h3",null,"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",null,"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Hint } from '@lokalise/louis';\n\nexport default () => <Hint>This is a hint.</Hint>;\n")),(0,esm.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},"Figma Source File | Hint (not yet available in Figma, will be updated)")),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{of:Hint,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Hint",args:{children:"This is a hint."},mdxType:"Story"},Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const hint=Template.bind({});hint.storyName="Hint",hint.args={children:"This is a hint."},hint.parameters={storySource:{source:"args => <Hint {...args} />"}};const componentMeta={title:"Components/Hint",parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>{const StoryContent=styled_components_browser_esm.ZP.div`
                font-family: ${(0,fontFamily.I)("default")};
                ${(0,typography.c)("body")};
            `;return(0,esm.kt)(StoryContent,null,(0,esm.kt)(react.Fragment,null,"This could use an explanation ",(0,esm.kt)(Story,null)," with some extra context."))}],component:Hint,argTypes:{width:{control:{type:"text"}}},includeStories:["hint"]},mdxStoryNameToKey={Hint:"hint"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Hint_stories=componentMeta,__namedExportsOrder=["Template","hint"]}}]);
//# sourceMappingURL=components-Hint-Hint-stories-mdx.9f875159.iframe.bundle.js.map