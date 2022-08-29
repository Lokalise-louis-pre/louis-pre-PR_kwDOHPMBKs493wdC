"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[6297],{"./src/components/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Popover});var react=__webpack_require__("./node_modules/react/index.js"),usePopper=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),index_esm=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),useOnClickOutside=__webpack_require__("./src/utils/hooks/useOnClickOutside.ts"),reach_portal_esm=__webpack_require__("./node_modules/@reach/portal/dist/reach-portal.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopoverWrapper=_ref=>{let{inPortal=!1,children}=_ref;return inPortal?(0,jsx_runtime.jsx)(reach_portal_esm.Z,{children}):children};PopoverWrapper.displayName="PopoverWrapper";try{PopoverWrapper.displayName="PopoverWrapper",PopoverWrapper.__docgenInfo={description:"",displayName:"PopoverWrapper",props:{inPortal:{defaultValue:{value:"false"},description:"",name:"inPortal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"]={docgenInfo:PopoverWrapper.__docgenInfo,name:"PopoverWrapper",path:"src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"})}catch(__react_docgen_typescript_loader_error){}const setRef=(value,ref)=>{"function"==typeof ref?ref(value):ref&&(ref.current=value)};var styles=__webpack_require__("./src/components/Popover/styles.ts");const isEventTriggeredInContainer=(e,container)=>!container||container.contains(e.currentTarget),getHandlers=(referenceElement,visible,setVisible,triggerEvent,delay)=>{if("hover"===triggerEvent){let timer;const delayVisibility=isVisible=>{isVisible&&(timer=setTimeout((()=>setVisible(!0)),250))},checktimer=()=>{timer&&clearTimeout(timer)},checkDelay=()=>{delay?delayVisibility(!0):setVisible(!0)};return{onPointerEnter:e=>{isEventTriggeredInContainer(e,referenceElement)&&checkDelay()},onPointerLeave:e=>{isEventTriggeredInContainer(e,referenceElement)&&setVisible(!1),checktimer()},onFocus:e=>isEventTriggeredInContainer(e,referenceElement)&&setVisible(!0),onBlur:()=>setVisible(!1)}}return{onClick:e=>{document.body.click(),e.stopPropagation(),e.preventDefault(),setVisible(!visible)},onTouchStart:e=>{e.stopPropagation(),e.preventDefault(),setVisible(!visible)},onKeyDown:(isVisible=visible,onSetIsVisible=setVisible,e=>{"Tab"===e.key&&(e.stopPropagation(),onSetIsVisible(!1)),"Escape"===e.key&&(e.stopPropagation(),onSetIsVisible(!1)),"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),e.preventDefault(),onSetIsVisible(!isVisible))})};var isVisible,onSetIsVisible},Popover=_ref=>{let{placement="bottom",popoverContent,triggerEvent="click",delay=!1,children,components:{Arrow=styles.E,Content=styles.V}={},modifiers=[],offset,withArrow=!1,visibleCallback,showPopover=!0,forceVisible=!1,inPortal=!1,...rest}=_ref;const[visible,setVisible]=(0,react.useState)(forceVisible),[referenceElement,setReferenceElement]=(0,react.useState)(null),[popperElement,setPopperElement]=(0,react.useState)(null),[arrowElement,setArrowElement]=(0,react.useState)(null),popper=(0,usePopper.D)(referenceElement,popperElement,{placement,modifiers:[{name:"arrow",options:{element:arrowElement,padding:5}},{name:"offset",options:{offset:[0,withArrow?10:4*(offset??0)]}},...modifiers]});(0,react.useEffect)((()=>{forceVisible&&setVisible(!0)}),[forceVisible,setVisible]);const onClickOutside=(0,react.useCallback)((()=>{"hover"!==triggerEvent&&setVisible(!1)}),[triggerEvent]);(0,useOnClickOutside.t)(popperElement,onClickOutside),(0,react.useEffect)((()=>{visibleCallback&&visibleCallback(visible)}),[visible]);const updatePopper=(0,react.useCallback)((()=>{popper.update&&popper.update()}),[popper]),popperElementRefObject=(0,react.useRef)(popperElement);popperElementRefObject.current=popperElement,(0,index_esm.NB)({targetRef:popperElementRefObject,onResize:updatePopper});const getChildrenProps=(props,ref)=>{return{...props,ref:(newRef=setReferenceElement,parentRef=ref,el=>{setRef(el,newRef),parentRef&&setRef(el,parentRef)}),...getHandlers(referenceElement,visible,setVisible,triggerEvent,delay)};var newRef,parentRef};let clone=null;const resolvedChildren="function"==typeof children?children(visible):children;if("string"==typeof resolvedChildren||"number"==typeof children)clone=(0,jsx_runtime.jsx)("span",{...getChildrenProps(),children:resolvedChildren});else{if(!(0,react.isValidElement)(resolvedChildren))throw new Error("Should pass only single element as the child");clone=(0,react.cloneElement)(resolvedChildren,getChildrenProps(resolvedChildren.props,resolvedChildren.ref))}const contentElement="function"==typeof popoverContent?popoverContent(setVisible):popoverContent,popperPlacement=popper.attributes?.popper?.["data-popper-placement"]??"bottom";return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[clone,visible&&showPopover&&contentElement&&(0,jsx_runtime.jsx)(PopoverWrapper,{inPortal,children:(0,jsx_runtime.jsxs)(Content,{ref:setPopperElement,...popper.attributes.popper,style:popper.styles.popper,...rest,onKeyDown:e=>{"Escape"===e.key&&(e.stopPropagation(),setVisible(!1))},children:[contentElement,withArrow&&(0,jsx_runtime.jsx)(Arrow,{ref:setArrowElement,style:popper.styles.arrow,placement:popperPlacement})]})})]})};Popover.displayName="Popover";try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{placement:{defaultValue:{value:"bottom"},description:"Determines where the popover should appear relative to the child element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},popoverContent:{defaultValue:null,description:"Renders text content and / or any HTML node in the popover.",name:"popoverContent",required:!1,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}},triggerEvent:{defaultValue:{value:"click"},description:"Determines whether the popover should appear on hover or click.",name:"triggerEvent",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},modifiers:{defaultValue:{value:"[]"},description:"Sets custom popperjs modifier objects: https://popper.js.org/docs/v2/modifiers/.",name:"modifiers",required:!1,type:{name:"Record<string, unknown>[]"}},offset:{defaultValue:null,description:"Sets popover offset using theme spacing when rendering without an arrow.",name:"offset",required:!1,type:{name:"enum",value:[{value:"0"},{value:"3"},{value:"1"},{value:"2"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},children:{defaultValue:null,description:"Renders text content or any HTML node to attach the popover to.",name:"children",required:!0,type:{name:"ReactChild | ((visible: boolean) => ReactChild)"}},components:{defaultValue:null,description:"Overrides the default Arrow and Content components to render the popover.",name:"components",required:!1,type:{name:"Partial<Components>"}},withArrow:{defaultValue:{value:"false"},description:"Toggles an arrow pointing to the attached element.",name:"withArrow",required:!1,type:{name:"boolean"}},showPopover:{defaultValue:{value:"true"},description:"Toggles the visibility of the popover.",name:"showPopover",required:!1,type:{name:"boolean"}},forceVisible:{defaultValue:{value:"false"},description:"Toggles whether the popover is visible without user interaction.",name:"forceVisible",required:!1,type:{name:"boolean"}},inPortal:{defaultValue:{value:"false"},description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the popover.",name:"inPortal",required:!1,type:{name:"boolean"}},visibleCallback:{defaultValue:null,description:"Function executed when the visibility of the popover changes.",name:"visibleCallback",required:!1,type:{name:"((visible: boolean) => void)"}},delay:{defaultValue:{value:"false"},description:"Toggles delayed appearance of the popover when `triggerEvent` is 'hover'.",name:"delay",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Popover/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Arrow,V:()=>Content});var _utils_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/zIndex.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/theme/color.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/theme/variants.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme/radius.ts");const bottom=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
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
`},"./src/components/Select/Select.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Select});var react=__webpack_require__("./node_modules/react/index.js"),react_select_esm=__webpack_require__("./node_modules/react-select/dist/react-select.esm.js"),dist_react_select_esm=__webpack_require__("./node_modules/react-select/async/dist/react-select.esm.js"),async_creatable_dist_react_select_esm=__webpack_require__("./node_modules/react-select/async-creatable/dist/react-select.esm.js"),creatable_dist_react_select_esm=__webpack_require__("./node_modules/react-select/creatable/dist/react-select.esm.js"),useErrorId=__webpack_require__("./src/utils/hooks/useErrorId.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),InputErrorMessage=__webpack_require__("./src/components/InputErrorMessage/InputErrorMessage.tsx"),Close=__webpack_require__("./src/foundations/icons/Close.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ClearIndicator=_ref=>{let{className,cx,innerProps}=_ref;return(0,jsx_runtime.jsx)("div",{...innerProps,className:cx({indicator:!0,"clear-indicator":!0},className),children:(0,jsx_runtime.jsx)(Close.x,{})})};ClearIndicator.displayName="ClearIndicator";try{ClearIndicator.displayName="ClearIndicator",ClearIndicator.__docgenInfo={description:"",displayName:"ClearIndicator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/ClearIndicator.tsx#ClearIndicator"]={docgenInfo:ClearIndicator.__docgenInfo,name:"ClearIndicator",path:"src/components/Select/ClearIndicator.tsx#ClearIndicator"})}catch(__react_docgen_typescript_loader_error){}var CustomDown=__webpack_require__("./src/foundations/icons/CustomDown.tsx");const DropdownIndicator=_ref=>{let{className,cx,innerProps}=_ref;return(0,jsx_runtime.jsx)("div",{...innerProps,className:cx({indicator:!0,"dropdown-indicator":!0},className),children:(0,jsx_runtime.jsx)(CustomDown.Q,{})})};DropdownIndicator.displayName="DropdownIndicator";try{DropdownIndicator.displayName="DropdownIndicator",DropdownIndicator.__docgenInfo={description:"",displayName:"DropdownIndicator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/DropdownIndicator.tsx#DropdownIndicator"]={docgenInfo:DropdownIndicator.__docgenInfo,name:"DropdownIndicator",path:"src/components/Select/DropdownIndicator.tsx#DropdownIndicator"})}catch(__react_docgen_typescript_loader_error){}var index_a7690a33_esm=__webpack_require__("./node_modules/react-select/dist/index-a7690a33.esm.js");var Tooltip=__webpack_require__("./src/components/Tooltip/Tooltip.tsx"),themes=__webpack_require__("./src/foundations/themes/index.ts");const oneLineEllipsis=styled_components_browser_esm.iv`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;var inputStyle=__webpack_require__("./src/utils/styles/inputStyle.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),zIndex=__webpack_require__("./src/utils/theme/zIndex.ts");const Item=styled_components_browser_esm.ZP.div`
    ${oneLineEllipsis};

    // Padding is added, so MultiValueLabel Item text, could be seen in full size
    padding: 1px;
    color: ${(0,color.$)("content.primary")};
    font-size: 14px;
    line-height: 15px;
    max-width: 200px;
`,StyledSelect=(0,styled_components_browser_esm.ZP)(react_select_esm.ZP)`
    ${(0,typography.c)("caption1")};
    width: 100%;

    .Select__option {
        font-family: ${(0,fontFamily.I)("default")};
        &:hover {
            background-color: ${(0,color.$)("primary.500")};
            color: ${(0,color.$)("content.white")};
        }
    }

    .Select__control {
        ${inputStyle.NH};
        height: unset;
        line-height: unset;
        padding: 0;
    }
    .Select__control--is-focused,
    /* This second selector is required to make sure hover rule is not overriding focus */
    .Select__control--is-focused:hover {
        border-color: ${(0,color.$)("primary.500")};
        outline: none;
        box-shadow: none;
    }
    .Select__control--is-disabled {
        ${inputStyle.hJ};

        .Select__placeholder {
            color: ${(0,color.$)("content.disabled")};
        }
    }
    .Select__multi-value {
        background-color: ${(0,color.$)("background.secondary")};
        border-radius: ${(0,radius.q)("md")};
        padding: 1px;
        margin: 0;
    }

    .Select__multi-value__remove svg {
        color: ${(0,color.$)("content.secondary")};
        fill: currentColor;
        cursor: pointer;
    }
    .Select__multi-value__remove:hover {
        background-color: transparent;
        svg {
            background-color: transparent;
            color: ${(0,color.$)("interactive.primary.hover")};
        }
    }
    .Select__multi-value__remove svg {
        width: 16px;
        height: 16px;
    }
    .Select__menu-notice--no-options {
        font-family: ${(0,fontFamily.I)("default")};
    }
    .Select__indicator {
        padding: 6px 8px;
    }
    &&& .Select__input {
        font-size: 14px;
        line-height: 16px;
        color: ${(0,color.$)("content.primary")};

        &:focus {
            outline: none !important;
        }
    }
    .Select__indicators {
        color: ${(0,color.$)("border.primary")};
    }
    .Select__clear-indicator,
    .Select__dropdown-indicator,
    .Select__clear-indicator svg,
    .Select__dropdown-indicator svg {
        cursor: pointer;
        color: currentColor;
        fill: currentColor;
    }
    .Select__clear-indicator {
        padding: 0px;
        margin-right: 4px;
        font-size: 16px;
        height: 16px;
    }
    .Select__dropdown-indicator {
        padding: 0px 12px 0px 0px;
        font-size: 16px;
        height: 16px;
    }
    &:not(.Select--is-disabled) {
        .Select__clear-indicator:hover {
            color: ${(0,color.$)("primary.500")};
        }
        &:hover,
        [data-dev-state='hover'] & {
            .Select__dropdown-indicator {
                color: ${(0,color.$)("primary.300")};
            }
        }
        [data-dev-state='focus'] & .Select__dropdown-indicator,
        .Select__control--menu-is-open .Select__dropdown-indicator {
            transform: scaleY(-1);
            color: ${(0,color.$)("primary.500")};
        }
    }
    .Select__placeholder,
    .Select__single-value {
        font-size: 14px;
        padding: 0;
        margin: 0;
        color: ${(0,color.$)("content.secondary")};
    }
    .Select__single-value {
        color: ${(0,color.$)("content.primary")};
    }
    .Select__indicator-separator {
        display: none;
    }
    .Select__value-container {
        ${inputStyle.jR};

        padding: 4px 12px;
    }
    .Select__value-container--is-multi {
        gap: ${(0,spacing.W)(1)};
        padding: ${(0,spacing.W)(1,2)};
    }
`,Container=styled_components_browser_esm.ZP.div`
    width: 100%;
    display: grid;
    gap: ${(0,spacing.W)(1)};
    grid-template-columns: minmax(50px, 1fr); /* This ensures Select doesn't overflow 100% */
`,extractThemeProps=props=>({...props,theme:props.selectProps.lokaliseTheme}),selectStyles={input:base=>({...base,margin:0}),menu:(base,props)=>({...base,backgroundColor:(0,color.$)("surface.primary")(extractThemeProps(props)),border:`1px solid ${(0,color.$)("border.primary")(extractThemeProps(props))}`,boxShadow:"0 0 5px rgba(0, 0, 0, 0.2)",margin:(0,spacing.W)(1,0,0)(extractThemeProps(props)),zIndex:(0,zIndex.W)("dropdown")(extractThemeProps(props))}),noOptionsMessage:(base,props)=>({...base,...(0,typography.c)("description")(extractThemeProps(props)),color:(0,color.$)("content.secondary")(extractThemeProps(props)),textAlign:"left"}),option:(base,props)=>({...base,fontSize:"14px",lineHeight:"16px",padding:"8px 14px 9px",color:(0,color.$)("content.primary")(extractThemeProps(props)),cursor:"pointer",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",minWidth:"100%",":active":{background:(0,color.$)("primary.500")(extractThemeProps(props)),color:(0,color.$)("content.white")(extractThemeProps(props))},...props.data.__isNew__?{color:(0,color.$)("interactive.primary.idle")(extractThemeProps(props))}:{},...props.isSelected?{background:"none",color:(0,color.$)("content.primary")(extractThemeProps(props)),display:"flex",alignItems:"center","&::before":{width:16,height:16,content:'""',display:"inline-block",verticalAlign:"middle",marginRight:(0,spacing.W)(1)(extractThemeProps(props)),backgroundSize:"16px 16px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:`url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.64372 10.1336L3.58684 7.07669L2.65918 8.01319L6.65255 12.0066L12.9872 5.65427L12.0507 4.71777L6.64372 10.1336Z' fill='${encodeURIComponent((props.isFocused?(0,color.$)("content.white"):(0,color.$)("content.primary"))(extractThemeProps(props)))}'/%3E%3C/svg%3E%0A")`}}:void 0,...props.isFocused?{background:(0,color.$)("primary.500")(extractThemeProps(props)),color:(0,color.$)("content.white")(extractThemeProps(props))}:void 0}),menuPortal:base=>({...base,zIndex:themes.n.base.zIndices.modal}),menuList:(base,props)=>({...base,maxHeight:props.selectProps.maxMenuHeight||220}),valueContainer:base=>({...base,overflow:"initial"})},MultiValueLabel=props=>{const{data,selectProps:{getOptionLabel}}=props,[itemEl,setItemEl]=(0,react.useState)(null),ellipsisView=!!(element=itemEl)&&element.offsetWidth<element.scrollWidth;var element;const label=getOptionLabel(data);return(0,jsx_runtime.jsx)(Tooltip.u,{placement:"top",popoverContent:label,showPopover:ellipsisView,children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(index_a7690a33_esm.c.MultiValueLabel,{...props,children:(0,jsx_runtime.jsx)(Item,{ref:setItemEl,children:label})})})})};MultiValueLabel.displayName="MultiValueLabel";try{MultiValueLabel.displayName="MultiValueLabel",MultiValueLabel.__docgenInfo={description:"",displayName:"MultiValueLabel",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiValueLabel.tsx#MultiValueLabel"]={docgenInfo:MultiValueLabel.__docgenInfo,name:"MultiValueLabel",path:"src/components/Select/MultiValueLabel.tsx#MultiValueLabel"})}catch(__react_docgen_typescript_loader_error){}const MultiValueRemove=props=>(0,jsx_runtime.jsx)(index_a7690a33_esm.c.MultiValueRemove,{...props,children:(0,jsx_runtime.jsx)(Close.x,{})});MultiValueRemove.displayName="MultiValueRemove";try{MultiValueRemove.displayName="MultiValueRemove",MultiValueRemove.__docgenInfo={description:"",displayName:"MultiValueRemove",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiValueRemove.tsx#MultiValueRemove"]={docgenInfo:MultiValueRemove.__docgenInfo,name:"MultiValueRemove",path:"src/components/Select/MultiValueRemove.tsx#MultiValueRemove"})}catch(__react_docgen_typescript_loader_error){}const{Option:BaseOption}=index_a7690a33_esm.c,Option=_ref=>{let{children,innerProps,...props}=_ref;return(0,jsx_runtime.jsx)(BaseOption,{...props,innerProps:{...innerProps,title:"string"==typeof children?children:void 0,onMouseMove:()=>({}),onMouseOver:()=>({})},children})};Option.displayName="Option";try{Option.displayName="Option",Option.__docgenInfo={description:"",displayName:"Option",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Option.tsx#Option"]={docgenInfo:Option.__docgenInfo,name:"Option",path:"src/components/Select/Option.tsx#Option"})}catch(__react_docgen_typescript_loader_error){}const InnerSelect=(_ref,ref)=>{let{async,creatable,error,isDisabled,components,onChange,...rest}=_ref;const theme=(0,styled_components_browser_esm.Fg)();let errorMsg=error;error&&"object"==typeof errorMsg&&null!==errorMsg&&(errorMsg=Object.values(error));const errorId=(0,useErrorId.P)(),isError=Array.isArray(error)?error.length>0:!!error;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(StyledSelect,{disabled:isDisabled,isDisabled,as:async?creatable?async_creatable_dist_react_select_esm.Z:dist_react_select_esm.Z:creatable?creatable_dist_react_select_esm.Z:react_select_esm.ZP,ref,classNamePrefix:"Select",styles:selectStyles,error:isError,"aria-invalid":isError,"aria-errormessage":errorId,components:{MultiValueLabel,MultiValueRemove,ClearIndicator,DropdownIndicator,Option,...components},noOptionsMessage:()=>"No matches found",...creatable?{formatCreateLabel:value=>`+ Add "${value}"`}:{},lokaliseTheme:theme,onChange,...rest}),!!errorMsg&&"boolean"!=typeof errorMsg&&(0,jsx_runtime.jsx)(InputErrorMessage.f,{id:errorId,children:errorMsg})]})};InnerSelect.displayName="InnerSelect";const Select=(0,react.forwardRef)(InnerSelect);try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{error:{defaultValue:null,description:"Renders a form validation `InputErrorMessage` when passed as `string | string[]`, or just applies error styling when `true`.",name:"error",required:!1,type:{name:"string | boolean | readonly string[]"}},async:{defaultValue:null,description:"",name:"async",required:!1,type:{name:"boolean"}},creatable:{defaultValue:null,description:"Toggles whether the input accepts custom options added by the user.",name:"creatable",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<SelectInstance<unknown, false, GroupBase<unknown>>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var react=__webpack_require__("./node_modules/react/index.js"),Popover=__webpack_require__("./src/components/Popover/Popover.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),zIndex=__webpack_require__("./src/utils/theme/zIndex.ts"),styles=__webpack_require__("./src/components/Popover/styles.ts");const Content=(0,styled_components_browser_esm.ZP)(styles.V)`
    font: 12px ${(0,fontFamily.I)("default")};
    line-height: 1.5;
    background-color: ${(0,color.$)("content.black")};
    color: ${(0,color.$)("content.white")};
    border-radius: ${(0,radius.q)("md")};
    font-size: 12px;
    padding: 3px 8px 4px;
    border-color: ${(0,color.$)("content.black")};
    z-index: ${(0,zIndex.W)("tooltip")};
`,Arrow=(0,styled_components_browser_esm.ZP)(styles.E)`
    &:before {
        background-color: ${(0,color.$)("content.black")};
        border-color: ${(0,color.$)("content.black")};
    }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tooltip=(0,react.forwardRef)(((_ref,ref)=>{let{children,showPopover=!0,popoverContent,delay=!0,...rest}=_ref;return(0,jsx_runtime.jsx)(Popover.J,{ref,...rest,showPopover,popoverContent,components:{Content,Arrow},delay,triggerEvent:"hover",withArrow:!0,children})}));Tooltip.displayName="Tooltip";try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{placement:{defaultValue:null,description:"Determines where the popover should appear relative to the child element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},popoverContent:{defaultValue:null,description:"Renders text content and / or any HTML node in the popover.",name:"popoverContent",required:!1,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}},modifiers:{defaultValue:null,description:"Sets custom popperjs modifier objects: https://popper.js.org/docs/v2/modifiers/.",name:"modifiers",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"Renders text content or any HTML node to attach the popover to.",name:"children",required:!0,type:{name:"ReactChild | ((visible: boolean) => ReactChild)"}},components:{defaultValue:null,description:"Overrides the default Arrow and Content components to render the popover.",name:"components",required:!1,type:{name:"Partial<Components>"}},showPopover:{defaultValue:{value:"true"},description:"Toggles the visibility of the popover.",name:"showPopover",required:!1,type:{name:"boolean"}},forceVisible:{defaultValue:null,description:"Toggles whether the popover is visible without user interaction.",name:"forceVisible",required:!1,type:{name:"boolean"}},inPortal:{defaultValue:null,description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the popover.",name:"inPortal",required:!1,type:{name:"boolean"}},visibleCallback:{defaultValue:null,description:"Function executed when the visibility of the popover changes.",name:"visibleCallback",required:!1,type:{name:"((visible: boolean) => void)"}},delay:{defaultValue:{value:"true"},description:"Toggles delayed appearance of the popover when `triggerEvent` is 'hover'.",name:"delay",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/CustomDown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>CustomDown});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CustomDown=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{d:"m9.99457 14.1689-1.17062-1.1706-4.66041-4.67143 1.17062-1.17062 4.66041 4.66045L14.666 7.15625l1.1706 1.17062-4.6604 4.67143-1.18163 1.1706Z"})})};CustomDown.displayName="CustomDown";try{CustomDown.displayName="CustomDown",CustomDown.__docgenInfo={description:"",displayName:"CustomDown",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.300"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.200"'},{value:'"red.300"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.200"'},{value:'"green.300"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.200"'},{value:'"yellow.300"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.200"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/CustomDown.tsx#CustomDown"]={docgenInfo:CustomDown.__docgenInfo,name:"CustomDown",path:"src/foundations/icons/CustomDown.tsx#CustomDown"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/hooks/useOnClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useOnClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useOnClickOutside=function(element,callback){let isActive=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const listener=event=>{element&&!element.contains(event.target)&&callback?.(event)},container=element?.closest("reach-portal");return isActive&&(container?.addEventListener("click",listener),container?.addEventListener("touchstart",listener),document.addEventListener("click",listener),document.addEventListener("touchstart",listener)),()=>{container?.removeEventListener("click",listener),container?.removeEventListener("touchstart",listener),document.removeEventListener("click",listener),document.removeEventListener("touchstart",listener)}}),[element,callback,isActive])}},"./src/utils/theme/zIndex.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>zIndex});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const zIndex=index=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(index,theme.zIndices)))}}]);
//# sourceMappingURL=6297.da22a7ab.iframe.bundle.js.map