"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[8180],{"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),LoadingSign=__webpack_require__("./src/foundations/icons/LoadingSign/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),color=__webpack_require__("./src/utils/theme/color.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts"),variants=__webpack_require__("./src/utils/theme/variants.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),transitionTime=__webpack_require__("./src/utils/theme/transitionTime.ts"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const appearanceToColorCode=appearance=>({default:"primary",primary:"primary",danger:"red",warning:"yellow"}[appearance]),getOutlineStyles=function(colorType,appearance){let transparent=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("default"===appearance)return styled_components_browser_esm.iv`
            background-color: transparent;
            color: ${(0,color.$)("content.primary")};
            border-color: ${(0,color.$)("content.primary")};
        `;const appearanceColorCode=appearanceToColorCode(appearance);return styled_components_browser_esm.iv`
        background-color: ${transparent?"transparent":(0,color.$)(`surface.${appearanceColorCode}50`)};
        border-color: ${(0,color.$)(`interactive.${appearanceColorCode}.${colorType}`)};
        color: ${(0,color.$)(`interactive.${appearanceColorCode}.${colorType}`)};
    `},getColorStyles=(appearance,colorCode)=>{if("default"===appearance)return;const appearanceColorCode=appearanceToColorCode(appearance);return styled_components_browser_esm.iv`
        background-color: ${(0,color.$)(`interactive.${appearanceColorCode}.idle`)};
        border-color: ${(0,color.$)(`interactive.${appearanceColorCode}.idle`)};
        color: ${(0,color.$)(`content.${colorCode}`)};

        &:hover:not([disabled]):not([aria-expanded='true']) {
            background-color: ${(0,color.$)(`interactive.${appearanceColorCode}.hover`)};
            border-color: ${(0,color.$)(`interactive.${appearanceColorCode}.hover`)};
            color: ${(0,color.$)(`content.${colorCode}`)};
        }

        &:active:not([disabled]) {
            background-color: ${(0,color.$)(`interactive.${appearanceColorCode}.pressed`)};
            border-color: ${(0,color.$)(`interactive.${appearanceColorCode}.pressed`)};
        }

        ${(0,modifier.c)("active",styled_components_browser_esm.iv`
                background-color: ${(0,color.$)(`interactive.${appearanceColorCode}.pressed`)};
                border-color: ${(0,color.$)(`interactive.${appearanceColorCode}.pressed`)};
            `)}
    `},variantColorStyles=styled_components_browser_esm.iv`
    ${(0,variants.o)("appearance",{default:styled_components_browser_esm.iv`
            background-color: ${(0,color.$)("content.white")};
            color: ${(0,color.$)("primary.400")};
            border-color: transparent;

            &:hover:not([disabled]):not([aria-expanded='true']) {
                color: ${(0,color.$)("primary.500")};
            }
        `,primary:styled_components_browser_esm.iv`
            ${getColorStyles("primary","white")}
        `,warning:styled_components_browser_esm.iv`
            ${getColorStyles("warning","black")}
        `,danger:styled_components_browser_esm.iv`
            ${getColorStyles("danger","white")}
        `})}

    ${(0,variants.o)("variant",{solid:styled_components_browser_esm.iv``,outline:styled_components_browser_esm.iv`
            border-width: 1px;
            ${_ref=>{let{appearance}=_ref;return styled_components_browser_esm.iv`
                ${getOutlineStyles("idle",appearance,!0)}

                &:hover:not([disabled]):not([aria-expanded='true']) {
                    ${getOutlineStyles("hover",appearance,!0)}
                }

                &:active:not([disabled]) {
                    ${getOutlineStyles("hover",appearance)}
                }

                ${(0,modifier.c)("active",getOutlineStyles("hover",appearance))}
            `}}
        `})}
`,Container=(0,styled_components_browser_esm.ZP)(Pressable.s)`
    display: inline-flex;
    align-items: center;
    background-color: transparent;
    border: 1px solid transparent;
    text-decoration: none;
    vertical-align: middle;
    border-radius: ${(0,radius.q)("md")};
    cursor: pointer;
    position: relative;
    transition: all ${(0,transitionTime.Y)()};
    box-sizing: border-box;
    font-family: ${(0,fontFamily.I)("default")};

    ${(0,variants.o)("size",{xs:styled_components_browser_esm.iv`
            font-size: 11px;
            padding: ${(0,spacing.W)(0,2)};
            height: 20px;
            line-height: 12px;
        `,sm:styled_components_browser_esm.iv`
            font-size: 12px;
            padding: ${(0,spacing.W)(0,3)};
            height: 30px;
            line-height: 12px;
        `,md:styled_components_browser_esm.iv`
            font-size: 14px;
            padding: ${(0,spacing.W)(0,3)};
            height: 35px;
            line-height: 14px;
        `,lg:styled_components_browser_esm.iv`
            font-size: 18px;
            padding: ${(0,spacing.W)(0,4)};
            height: 45px;
            line-height: 18px;
        `})}

    ${variantColorStyles}

    &:disabled {
        cursor: not-allowed;
        background-color: ${(0,color.$)("surface.secondary")};
        color: ${(0,color.$)("content.disabled")};
        border-color: ${(0,color.$)("content.disabled")};

        ${(0,modifier.c)("isLoading",variantColorStyles)}
    }
`,Content=styled_components_browser_esm.ZP.span`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${(0,variants.o)("size",{xs:styled_components_browser_esm.iv`
            gap: ${(0,spacing.W)(1)};
        `,sm:styled_components_browser_esm.iv`
            gap: ${(0,spacing.W)(2)};
        `,md:styled_components_browser_esm.iv`
            gap: ${(0,spacing.W)(2)};
        `,lg:styled_components_browser_esm.iv`
            gap: ${(0,spacing.W)(2)};
        `})}

    ${(0,modifier.c)("isHidden",styled_components_browser_esm.iv`
            opacity: 0;
        `)}
`,Text=styled_components_browser_esm.ZP.span`
    position: relative;
    align-items: center;
    display: inline-flex;
    white-space: nowrap;

    ${(0,variants.o)("size",{xs:styled_components_browser_esm.iv`
            top: 0;
        `,sm:styled_components_browser_esm.iv`
            top: -1px; // Make text visually centered
        `,md:styled_components_browser_esm.iv`
            top: -1px; // Make text visually centered
        `,lg:styled_components_browser_esm.iv`
            top: -1px; // Make text visually centered
        `})}
`,StyledLoadingSign=(0,styled_components_browser_esm.ZP)(LoadingSign.X)`
    font-size: 1.3em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react.forwardRef)(((_ref,ref)=>{let{size="md",variant="solid",type="button",appearance="default",loading=!1,active=!1,children,leftIcon,rightIcon,...rest}=_ref;return(0,jsx_runtime.jsxs)(Container,{ref,type:rest.href?void 0:type,size,variant,appearance,isLoading:loading,active,...rest,disabled:"disabled"in rest&&rest.disabled||loading,"aria-expanded":active,children:[(0,jsx_runtime.jsxs)(Content,{isHidden:loading,size,children:[leftIcon,(0,jsx_runtime.jsx)(Text,{size,children}),rightIcon]}),loading&&(0,jsx_runtime.jsx)(StyledLoadingSign,{"aria-busy":"true","aria-live":"polite",ariaLabel:"Loading"})]})}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"md"},description:"Changes button scale in padding and font size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},appearance:{defaultValue:{value:"default"},description:"Changes the button appearance.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"warning"'},{value:'"danger"'}]}},variant:{defaultValue:{value:"solid"},description:"Enables the outline style for the button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"outline"'}]}},disabled:{defaultValue:null,description:"Toggles disabled state of the button.",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading icon within the button.",name:"loading",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"Toggles the active state of the button.",name:"active",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"Enables the type attribute for the button.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},leftIcon:{defaultValue:null,description:"Renders an icon on the left side of the button through a provided child element.",name:"leftIcon",required:!1,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"Renders an icon on the right side of the button through a provided child element.",name:"rightIcon",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the button.",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Flex/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts");const Container=styled_components_browser_esm.ZP.div`
    display: flex;
    gap: ${_ref=>{let{rowGap}=_ref;return(0,spacing.W)(rowGap)}} ${_ref2=>{let{columnGap}=_ref2;return(0,spacing.W)(columnGap)}};
    max-width: 100%;
    align-items: ${_ref3=>{let{alignItems}=_ref3;return alignItems}};
    justify-content: ${_ref4=>{let{justifyContent}=_ref4;return justifyContent}};
    flex-wrap: ${_ref5=>{let{flexWrap}=_ref5;return flexWrap}};
    flex-direction: ${_ref6=>{let{flexDirection}=_ref6;return flexDirection}};
    flex-basis: ${_ref7=>{let{basis}=_ref7;return basis}};
    flex-grow: ${_ref8=>{let{grow}=_ref8;return grow}};
    flex-shrink: ${_ref9=>{let{shrink}=_ref9;return shrink}};
    align-self: ${_ref10=>{let{alignSelf}=_ref10;return alignSelf}};
    ${(0,modifier.c)("inline",styled_components_browser_esm.iv`
            display: inline-flex;
        `)}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=(0,react.forwardRef)(((_ref,ref)=>{let{inline=!1,align="flex-start",justify="flex-start",wrap="wrap",direction="row",gap=0,children,as="div",...rest}=_ref;const rowGap="number"==typeof gap?gap:gap[0],columnGap="number"==typeof gap?gap:gap[1];return(0,jsx_runtime.jsx)(Container,{...rest,ref,inline,flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,as,rowGap,columnGap,children})}));Flex.displayName="Flex";try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{inline:{defaultValue:{value:"false"},description:"Toggles inline-flex.",name:"inline",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"flex-start"},description:"Sets align-items.",name:"align",required:!1,type:{name:"AlignItems"}},justify:{defaultValue:{value:"flex-start"},description:"Sets justify-content.",name:"justify",required:!1,type:{name:"JustifyContent"}},wrap:{defaultValue:{value:"wrap"},description:"Sets flex-wrap.",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},direction:{defaultValue:{value:"row"},description:"Sets flex-direction.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"row"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"column"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},gap:{defaultValue:{value:"0"},description:"Sets gap, or row-gap and column-gap, using theme spacing.",name:"gap",required:!1,type:{name:"SpacingLevels | [rowGap: SpacingLevels, columnGap: SpacingLevels]"}},basis:{defaultValue:null,description:"Sets flex-basis when used as a child of another flex container.",name:"basis",required:!1,type:{name:"FlexBasis<string | number>"}},grow:{defaultValue:null,description:"Sets flex-grow when used as a child of another flex container.",name:"grow",required:!1,type:{name:"FlexGrow"}},shrink:{defaultValue:null,description:"Sets flex-shrink when used as a child of another flex container.",name:"shrink",required:!1,type:{name:"FlexShrink"}},alignSelf:{defaultValue:null,description:"Sets align-self when used as a child of another flex container.",name:"alignSelf",required:!1,type:{name:"AlignSelf"}},children:{defaultValue:null,description:"Renders any flex items in the flex container.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:{value:"div"},description:"Sets the HTML element to render for the flex container.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"aside"'},{value:'"div"'},{value:'"li"'},{value:'"section"'},{value:'"span"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex/Flex.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/Flex/Flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>IconButton});var react=__webpack_require__("./node_modules/react/index.js"),LoadingSign=__webpack_require__("./src/foundations/icons/LoadingSign/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),variants=__webpack_require__("./src/utils/theme/variants.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),transitionTime=__webpack_require__("./src/utils/theme/transitionTime.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const variantColorStyles=styled_components_browser_esm.iv`
    ${(0,variants.o)("appearance",{primary:styled_components_browser_esm.iv`
            padding: 6px;
            font-size: 20px;

            // hover
            &:hover:not([disabled]) {
                background-color: ${(0,color.$)("surface.primary100")};
                color: ${(0,color.$)("primary.500")};
            }

            // pressed
            &:focus:active:not([disabled]) {
                background-color: ${(0,color.$)("primary.200")};
                color: ${(0,color.$)("primary.500")};
            }

            // focus
            &:focus:not([disabled]) {
                background-color: ${(0,color.$)("surface.primary50")};
                color: ${(0,color.$)("primary.500")};
            }

            // activated
            ${(0,modifier.c)("active",styled_components_browser_esm.iv`
                    background-color: ${(0,color.$)("surface.primary50")};
                    color: ${(0,color.$)("primary.500")};
                `)}
        `,secondary:styled_components_browser_esm.iv`
            padding: ${(0,spacing.W)(1)};
            font-size: 16px;
            color: ${(0,color.$)("content.secondary")};

            // hover
            &:hover:not([disabled]) {
                background-color: ${(0,color.$)("border.secondary")};
                color: ${(0,color.$)("content.primary")};
            }

            // pressed
            &:focus:active:not([disabled]) {
                background-color: ${(0,color.$)("border.primary")};
                color: ${(0,color.$)("content.primary")};
            }

            // focus
            &:focus:not([disabled]) {
                background-color: ${(0,color.$)("surface.secondary")};
                color: ${(0,color.$)("content.primary")};
            }

            // activated
            ${(0,modifier.c)("active",styled_components_browser_esm.iv`
                    background-color: ${(0,color.$)("surface.secondary")};
                    color: ${(0,color.$)("content.primary")};
                `)}
        `,verified:styled_components_browser_esm.iv`
            padding: ${(0,spacing.W)(1)};
            font-size: 16px;
            color: ${(0,color.$)("content.secondary")};

            // hover
            &:hover:not([disabled]) {
                background-color: ${(0,color.$)("surface.yellow100")};
                color: ${(0,color.$)("content.primary")};
            }

            // pressed
            &:focus:active:not([disabled]) {
                background-color: ${(0,color.$)("yellow.200")};
                color: ${(0,color.$)("content.primary")};
            }

            // focus
            &:focus:not([disabled]) {
                background-color: ${(0,color.$)("surface.yellow100")};
                color: ${(0,color.$)("content.primary")};
            }

            // activated
            ${(0,modifier.c)("active",styled_components_browser_esm.iv`
                    background-color: ${(0,color.$)("surface.yellow50")};
                    color: ${(0,color.$)("content.primary")};
                `)}
        `,reviewed:styled_components_browser_esm.iv`
            padding: ${(0,spacing.W)(1)};
            font-size: 16px;
            color: ${(0,color.$)("content.secondary")};

            // hover
            &:hover:not([disabled]) {
                background-color: ${(0,color.$)("surface.green100")};
                color: ${(0,color.$)("content.primary")};
            }

            // pressed
            &:focus:active:not([disabled]) {
                background-color: ${(0,color.$)("green.200")};
                color: ${(0,color.$)("content.primary")};
            }

            // focus
            &:focus:not([disabled]) {
                background-color: ${(0,color.$)("surface.green100")};
                color: ${(0,color.$)("content.primary")};
            }

            // activated
            ${(0,modifier.c)("active",styled_components_browser_esm.iv`
                    background-color: ${(0,color.$)("surface.green50")};
                    color: ${(0,color.$)("content.primary")};
                `)}
        `})}
`,Container=(0,styled_components_browser_esm.ZP)(Pressable.s)`
    display: inline-flex;
    align-items: center;
    background-color: transparent;
    color: ${(0,color.$)("content.primary")};
    transition: background-color ${(0,transitionTime.Y)()}, color ${(0,transitionTime.Y)()};
    border: 0;
    border-radius: ${(0,radius.q)("md")};
    text-decoration: none;

    ${variantColorStyles}

    // disabled
    &:disabled {
        cursor: not-allowed;
        color: ${(0,color.$)("interactive.primary.disabled")};

        ${(0,modifier.c)("isLoading",styled_components_browser_esm.iv`
                color: initial;
                cursor: auto;
                ${variantColorStyles}
            `)}
    }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=(0,react.forwardRef)(((_ref,ref)=>{let{appearance="secondary",ariaLabel,loading=!1,children,...rest}=_ref;return(0,jsx_runtime.jsx)(Container,{ref,appearance,"aria-label":ariaLabel,isLoading:loading,disabled:"disabled"in rest&&rest.disabled||loading,...rest,children:loading?(0,jsx_runtime.jsx)(LoadingSign.X,{"aria-busy":"true","aria-live":"polite",ariaLabel:"Loading"}):children})}));IconButton.displayName="IconButton";try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{appearance:{defaultValue:{value:"secondary"},description:"Changes the button appearance.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"verified"'},{value:'"reviewed"'}]}},active:{defaultValue:null,description:"Toggles the active state of the button.",name:"active",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"Adds accessibility label.",name:"ariaLabel",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"Toggles disabled state of the button.",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading icon within the button.",name:"loading",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Displays Icon component in the button.",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Popover});var react=__webpack_require__("./node_modules/react/index.js"),usePopper=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),index_esm=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),useOnClickOutside=__webpack_require__("./src/utils/hooks/useOnClickOutside.ts"),reach_portal_esm=__webpack_require__("./node_modules/@reach/portal/dist/reach-portal.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopoverWrapper=_ref=>{let{inPortal=!1,children}=_ref;return inPortal?(0,jsx_runtime.jsx)(reach_portal_esm.Z,{children}):children};PopoverWrapper.displayName="PopoverWrapper";try{PopoverWrapper.displayName="PopoverWrapper",PopoverWrapper.__docgenInfo={description:"",displayName:"PopoverWrapper",props:{inPortal:{defaultValue:{value:"false"},description:"",name:"inPortal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"]={docgenInfo:PopoverWrapper.__docgenInfo,name:"PopoverWrapper",path:"src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"})}catch(__react_docgen_typescript_loader_error){}const setRef=(value,ref)=>{"function"==typeof ref?ref(value):ref&&(ref.current=value)};var styles=__webpack_require__("./src/components/Popover/styles.ts");const isEventTriggeredInContainer=(e,container)=>!container||container.contains(e.currentTarget),getHandlers=(referenceElement,visible,setVisible,triggerEvent,delay)=>{if("hover"===triggerEvent){let timer;const delayVisibility=isVisible=>{isVisible&&(timer=setTimeout((()=>setVisible(!0)),250))},checktimer=()=>{timer&&clearTimeout(timer)},checkDelay=()=>{delay?delayVisibility(!0):setVisible(!0)};return{onPointerEnter:e=>{isEventTriggeredInContainer(e,referenceElement)&&checkDelay()},onPointerLeave:e=>{isEventTriggeredInContainer(e,referenceElement)&&setVisible(!1),checktimer()},onFocus:e=>isEventTriggeredInContainer(e,referenceElement)&&setVisible(!0),onBlur:()=>setVisible(!1)}}return{onClick:e=>{document.body.click(),e.stopPropagation(),e.preventDefault(),setVisible(!visible)},onTouchStart:e=>{e.stopPropagation(),e.preventDefault(),setVisible(!visible)},onKeyDown:(isVisible=visible,onSetIsVisible=setVisible,e=>{"Tab"===e.key&&(e.stopPropagation(),onSetIsVisible(!1)),"Escape"===e.key&&(e.stopPropagation(),onSetIsVisible(!1)),"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),e.preventDefault(),onSetIsVisible(!isVisible))})};var isVisible,onSetIsVisible},Popover=_ref=>{let{placement="bottom",popoverContent,triggerEvent="click",delay=!1,children,components:{Arrow=styles.E,Content=styles.V}={},modifiers=[],offset,withArrow=!1,visibleCallback,showPopover=!0,forceVisible=!1,inPortal=!1,...rest}=_ref;const[visible,setVisible]=(0,react.useState)(forceVisible),[referenceElement,setReferenceElement]=(0,react.useState)(null),[popperElement,setPopperElement]=(0,react.useState)(null),[arrowElement,setArrowElement]=(0,react.useState)(null),popper=(0,usePopper.D)(referenceElement,popperElement,{placement,modifiers:[{name:"arrow",options:{element:arrowElement,padding:5}},{name:"offset",options:{offset:[0,withArrow?10:4*(offset??0)]}},...modifiers]});(0,react.useEffect)((()=>{forceVisible&&setVisible(!0)}),[forceVisible,setVisible]);const onClickOutside=(0,react.useCallback)((()=>{"hover"!==triggerEvent&&setVisible(!1)}),[triggerEvent]);(0,useOnClickOutside.t)(popperElement,onClickOutside),(0,react.useEffect)((()=>{visibleCallback&&visibleCallback(visible)}),[visible]);const updatePopper=(0,react.useCallback)((()=>{popper.update&&popper.update()}),[popper]),popperElementRefObject=(0,react.useRef)(popperElement);popperElementRefObject.current=popperElement,(0,index_esm.NB)({targetRef:popperElementRefObject,onResize:updatePopper});const getChildrenProps=(props,ref)=>{return{...props,ref:(newRef=setReferenceElement,parentRef=ref,el=>{setRef(el,newRef),parentRef&&setRef(el,parentRef)}),...getHandlers(referenceElement,visible,setVisible,triggerEvent,delay)};var newRef,parentRef};let clone=null;const resolvedChildren="function"==typeof children?children(visible):children;if("string"==typeof resolvedChildren||"number"==typeof children)clone=(0,jsx_runtime.jsx)("span",{...getChildrenProps(),children:resolvedChildren});else{if(!(0,react.isValidElement)(resolvedChildren))throw new Error("Should pass only single element as the child");clone=(0,react.cloneElement)(resolvedChildren,getChildrenProps(resolvedChildren.props,resolvedChildren.ref))}const contentElement="function"==typeof popoverContent?popoverContent(setVisible):popoverContent,popperPlacement=popper.attributes?.popper?.["data-popper-placement"]??"bottom";return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[clone,visible&&showPopover&&contentElement&&(0,jsx_runtime.jsx)(PopoverWrapper,{inPortal,children:(0,jsx_runtime.jsxs)(Content,{ref:setPopperElement,...popper.attributes.popper,style:popper.styles.popper,...rest,onKeyDown:e=>{"Escape"===e.key&&(e.stopPropagation(),setVisible(!1))},children:[contentElement,withArrow&&(0,jsx_runtime.jsx)(Arrow,{ref:setArrowElement,style:popper.styles.arrow,placement:popperPlacement})]})})]})};Popover.displayName="Popover";try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{placement:{defaultValue:{value:"bottom"},description:"Determines where the popover should appear relative to the child element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},popoverContent:{defaultValue:null,description:"Renders text content and / or any HTML node in the popover.",name:"popoverContent",required:!1,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}},triggerEvent:{defaultValue:{value:"click"},description:"Determines whether the popover should appear on hover or click.",name:"triggerEvent",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},modifiers:{defaultValue:{value:"[]"},description:"Sets custom popperjs modifier objects: https://popper.js.org/docs/v2/modifiers/.",name:"modifiers",required:!1,type:{name:"Record<string, unknown>[]"}},offset:{defaultValue:null,description:"Sets popover offset using theme spacing when rendering without an arrow.",name:"offset",required:!1,type:{name:"enum",value:[{value:"0"},{value:"3"},{value:"1"},{value:"2"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},children:{defaultValue:null,description:"Renders text content or any HTML node to attach the popover to.",name:"children",required:!0,type:{name:"ReactChild | ((visible: boolean) => ReactChild)"}},components:{defaultValue:null,description:"Overrides the default Arrow and Content components to render the popover.",name:"components",required:!1,type:{name:"Partial<Components>"}},withArrow:{defaultValue:{value:"false"},description:"Toggles an arrow pointing to the attached element.",name:"withArrow",required:!1,type:{name:"boolean"}},showPopover:{defaultValue:{value:"true"},description:"Toggles the visibility of the popover.",name:"showPopover",required:!1,type:{name:"boolean"}},forceVisible:{defaultValue:{value:"false"},description:"Toggles whether the popover is visible without user interaction.",name:"forceVisible",required:!1,type:{name:"boolean"}},inPortal:{defaultValue:{value:"false"},description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the popover.",name:"inPortal",required:!1,type:{name:"boolean"}},visibleCallback:{defaultValue:null,description:"Function executed when the visibility of the popover changes.",name:"visibleCallback",required:!1,type:{name:"((visible: boolean) => void)"}},delay:{defaultValue:{value:"false"},description:"Toggles delayed appearance of the popover when `triggerEvent` is 'hover'.",name:"delay",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Popover/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Arrow,V:()=>Content});var _utils_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/zIndex.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/theme/color.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/theme/variants.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme/radius.ts");const bottom=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
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
`},"./src/components/Pressable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Pressable});var react=__webpack_require__("./node_modules/react/index.js");const Root=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button`
    cursor: pointer;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Pressable=(0,react.forwardRef)(((_ref,ref)=>{let{children,...props}=_ref;return(props=>void 0!==props.href)(props)?(0,jsx_runtime.jsx)(Root,{as:"a",...props,ref,children}):(0,jsx_runtime.jsx)(Root,{type:"button",...props,ref,children})}));Pressable.displayName="Pressable";try{Pressable.displayName="Pressable",Pressable.__docgenInfo={description:"",displayName:"Pressable",props:{href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pressable/index.tsx#Pressable"]={docgenInfo:Pressable.__docgenInfo,name:"Pressable",path:"src/components/Pressable/index.tsx#Pressable"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var react=__webpack_require__("./node_modules/react/index.js"),Popover=__webpack_require__("./src/components/Popover/Popover.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),zIndex=__webpack_require__("./src/utils/theme/zIndex.ts"),styles=__webpack_require__("./src/components/Popover/styles.ts");const Content=(0,styled_components_browser_esm.ZP)(styles.V)`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tooltip=(0,react.forwardRef)(((_ref,ref)=>{let{children,showPopover=!0,popoverContent,delay=!0,...rest}=_ref;return(0,jsx_runtime.jsx)(Popover.J,{ref,...rest,showPopover,popoverContent,components:{Content,Arrow},delay,triggerEvent:"hover",withArrow:!0,children})}));Tooltip.displayName="Tooltip";try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{placement:{defaultValue:null,description:"Determines where the popover should appear relative to the child element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},popoverContent:{defaultValue:null,description:"Renders text content and / or any HTML node in the popover.",name:"popoverContent",required:!1,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}},modifiers:{defaultValue:null,description:"Sets custom popperjs modifier objects: https://popper.js.org/docs/v2/modifiers/.",name:"modifiers",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"Renders text content or any HTML node to attach the popover to.",name:"children",required:!0,type:{name:"ReactChild | ((visible: boolean) => ReactChild)"}},components:{defaultValue:null,description:"Overrides the default Arrow and Content components to render the popover.",name:"components",required:!1,type:{name:"Partial<Components>"}},showPopover:{defaultValue:{value:"true"},description:"Toggles the visibility of the popover.",name:"showPopover",required:!1,type:{name:"boolean"}},forceVisible:{defaultValue:null,description:"Toggles whether the popover is visible without user interaction.",name:"forceVisible",required:!1,type:{name:"boolean"}},inPortal:{defaultValue:null,description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the popover.",name:"inPortal",required:!1,type:{name:"boolean"}},visibleCallback:{defaultValue:null,description:"Function executed when the visibility of the popover changes.",name:"visibleCallback",required:!1,type:{name:"((visible: boolean) => void)"}},delay:{defaultValue:{value:"true"},description:"Toggles delayed appearance of the popover when `triggerEvent` is 'hover'.",name:"delay",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/Close.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Close});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Close=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{d:"m15.2954 14.1358-1.1707 1.1707-4.13028-4.1304-4.11927 4.1193-1.17062-1.1706 4.11927-4.1193-4.11927-4.13029 1.17062-1.17062 4.11927 4.11927 4.13028-4.13032 1.1817 1.18167-4.1303 4.13029 4.1193 4.1303Z"})})};Close.displayName="Close";try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.300"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.200"'},{value:'"red.300"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.200"'},{value:'"green.300"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.200"'},{value:'"yellow.300"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.200"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Close.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"src/foundations/icons/Close.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/LoadingSign/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>LoadingSign});__webpack_require__("./node_modules/react/index.js");var SvgIcon=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),styles=__webpack_require__("./src/foundations/icons/styles.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Rectangle=_ref=>{let{rotation,begin}=_ref;return(0,jsx_runtime.jsx)(styles.DG,{transform:`rotate(${rotation} 10 10)`,children:(0,jsx_runtime.jsx)(styles.Lq,{x:"9",y:"3",rx:"1",ry:"1.232",width:"2",height:"4.4",children:(0,jsx_runtime.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:`${begin}s`,repeatCount:"indefinite"})})})};Rectangle.displayName="Rectangle";try{Rectangle.displayName="Rectangle",Rectangle.__docgenInfo={description:"",displayName:"Rectangle",props:{rotation:{defaultValue:null,description:"",name:"rotation",required:!0,type:{name:"number"}},begin:{defaultValue:null,description:"",name:"begin",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/LoadingSign/Rectangle.tsx#Rectangle"]={docgenInfo:Rectangle.__docgenInfo,name:"Rectangle",path:"src/foundations/icons/LoadingSign/Rectangle.tsx#Rectangle"})}catch(__react_docgen_typescript_loader_error){}const LoadingSign=_ref=>{let{...props}=_ref;return(0,jsx_runtime.jsxs)(SvgIcon.l,{...props,children:[(0,jsx_runtime.jsx)(Rectangle,{rotation:0,begin:-.875}),(0,jsx_runtime.jsx)(Rectangle,{rotation:45,begin:-.75}),(0,jsx_runtime.jsx)(Rectangle,{rotation:90,begin:-.625}),(0,jsx_runtime.jsx)(Rectangle,{rotation:135,begin:-.5}),(0,jsx_runtime.jsx)(Rectangle,{rotation:180,begin:-.375}),(0,jsx_runtime.jsx)(Rectangle,{rotation:225,begin:-.25}),(0,jsx_runtime.jsx)(Rectangle,{rotation:270,begin:-.125}),(0,jsx_runtime.jsx)(Rectangle,{rotation:315,begin:0})]})};LoadingSign.displayName="LoadingSign";try{LoadingSign.displayName="LoadingSign",LoadingSign.__docgenInfo={description:"",displayName:"LoadingSign",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.300"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.200"'},{value:'"red.300"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.200"'},{value:'"green.300"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.200"'},{value:'"yellow.300"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.200"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/LoadingSign/index.tsx#LoadingSign"]={docgenInfo:LoadingSign.__docgenInfo,name:"LoadingSign",path:"src/foundations/icons/LoadingSign/index.tsx#LoadingSign"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});__webpack_require__("./node_modules/react/index.js");var _styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SvgIcon=_ref=>{let{color="inherit",size="inherit",ariaLabel,children,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.uJ,{color,size,...props,"aria-hidden":!ariaLabel||void 0,role:ariaLabel?"img":void 0,"aria-label":ariaLabel,viewBox:"0 0 20 20",children})};SvgIcon.displayName="SvgIcon";try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{color:{defaultValue:{value:"inherit"},description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.300"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.200"'},{value:'"red.300"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.200"'},{value:'"green.300"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.200"'},{value:'"yellow.300"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.200"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:{value:"inherit"},description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"undefined"},description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"src/foundations/icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DG:()=>SvgIconG,Lq:()=>SvgIconRect,VA:()=>SvgIconClipPath,o3:()=>SvgIconPath,uJ:()=>SvgRoot,x:()=>SvgIconDefs});var _utils_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/excludeProps.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/color.ts");const commonConfig={shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_0__.L)(["fill","color","stroke"])},reservedKeywords=["currentColor","inherit"],colorTypesDefaults={color:"inherit",fill:"currentColor",stroke:void 0},colorHelper=(colorType,inputColor,props)=>inputColor&&!reservedKeywords.includes(inputColor)?(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)(inputColor)(props):colorTypesDefaults[colorType],commonStyles=_utils_styled__WEBPACK_IMPORTED_MODULE_2__.iv`
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
`)},"./src/utils/hooks/useOnClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useOnClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useOnClickOutside=function(element,callback){let isActive=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const listener=event=>{element&&!element.contains(event.target)&&callback?.(event)},container=element?.closest("reach-portal");return isActive&&(container?.addEventListener("click",listener),container?.addEventListener("touchstart",listener),document.addEventListener("click",listener),document.addEventListener("touchstart",listener)),()=>{container?.removeEventListener("click",listener),container?.removeEventListener("touchstart",listener),document.removeEventListener("click",listener),document.removeEventListener("touchstart",listener)}}),[element,callback,isActive])}},"./src/utils/noop/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>noop});const noop=()=>{}},"./src/utils/theme/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>color});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const color=colorPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(colorPath,theme.colors)))},"./src/utils/theme/excludeProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>excludeProps});const excludeProps=props=>(prop,defaultValidatorFn)=>!props.includes(prop)&&defaultValidatorFn(prop)},"./src/utils/theme/fontFamily.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>fontFamily});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const fontFamily=family=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(family,theme.fonts)))},"./src/utils/theme/fromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>fromTheme});const fromTheme=callback=>_ref=>{let{theme,...props}=_ref;return callback(theme,props)}},"./src/utils/theme/modifier.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>modifier});const modifier=(prop,trueCss)=>props=>("function"==typeof prop?prop(props):props[prop])?trueCss:void 0},"./src/utils/theme/radius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>radius});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const radius=radiusPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(radiusPath,theme.radii)))},"./src/utils/theme/spacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>spacing});var _fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const spacing=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>args.map((level=>theme.space[level])).join(" ")))}},"./src/utils/theme/transitionTime.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>transitionTime});var _fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const transitionTime=()=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>theme.transitionTime))},"./src/utils/theme/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>typography});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const typography=typographyPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(typographyPath,theme.typography)))},"./src/utils/theme/variants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>variants});const variants=(prop,allVariants,fallback)=>props=>allVariants["function"==typeof prop?prop(props):props[prop]??fallback]},"./src/utils/theme/zIndex.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>zIndex});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const zIndex=index=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(index,theme.zIndices)))},"./src/components/Modal/Modal.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TemplateConfirmModal:()=>TemplateConfirmModal,TemplateDangerModal:()=>TemplateDangerModal,TemplateModal:()=>TemplateModal,__namedExportsOrder:()=>__namedExportsOrder,confirmModal:()=>confirmModal,dangerModal:()=>dangerModal,default:()=>Modal_stories,defaultStory:()=>defaultStory});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),reach_dialog_esm=__webpack_require__("./node_modules/@reach/dialog/dist/reach-dialog.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),color=__webpack_require__("./src/utils/theme/color.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),zIndex=__webpack_require__("./src/utils/theme/zIndex.ts"),variants=__webpack_require__("./src/utils/theme/variants.ts");const Inner=styled_components_browser_esm.ZP.div`
    background-color: ${(0,color.$)("background.primary")};
    border-radius: ${(0,radius.q)("md")};
    font-family: ${(0,fontFamily.I)("default")};
    ${(0,typography.c)("description")}
    color: ${(0,color.$)("content.primary")};
    position: relative;
`,Header=styled_components_browser_esm.ZP.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${(0,spacing.W)(5)};

    @media (min-width: 768px) {
        padding: ${(0,spacing.W)(7)};
    }
`,Title=styled_components_browser_esm.ZP.h2`
    font-family: ${(0,fontFamily.I)("default")};
    ${(0,typography.c)("heading4")}
    color: ${(0,color.$)("content.primary")};
    width: 100%;
    margin: 0;
`,Section=styled_components_browser_esm.ZP.div`
    padding: ${(0,spacing.W)(0,5,5,5)};

    @media (min-width: 768px) {
        padding: ${(0,spacing.W)(0,7,7,7)};
    }
`,Actions=styled_components_browser_esm.ZP.div`
    padding-top: ${(0,spacing.W)(6)};

    @media (min-width: 768px) {
        padding-top: ${(0,spacing.W)(7)};
    }
`,StyledDialogOverlay=(0,styled_components_browser_esm.ZP)(reach_dialog_esm.t9)`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: ${(0,zIndex.W)("modal")};
`,StyledDialogContent=(0,styled_components_browser_esm.ZP)(reach_dialog_esm.cZ)`
    box-sizing: border-box;
    background-color: transparent;
    position: relative;
    margin: ${(0,spacing.W)(3)} auto;
    padding: ${(0,spacing.W)(0,3)};

    @media (min-width: 768px) {
        margin: ${(0,spacing.W)(7)} auto;
        padding: ${(0,spacing.W)(0,4)};
    }
    width: 100%;
    outline: none;

    ${(0,variants.o)("size",{small:styled_components_browser_esm.iv`
            max-width: 332px; // Width is 300px but take side padding into consideration
        `,default:styled_components_browser_esm.iv`
            max-width: 632px; // Width is 600px but take side padding into consideration
        `,wide:styled_components_browser_esm.iv`
            max-width: 865px; // Width is 833px but take side padding into consideration
        `})}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ModalBody=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)(Section,{children})};ModalBody.displayName="ModalBody";try{ModalBody.displayName="ModalBody",ModalBody.__docgenInfo={description:"",displayName:"ModalBody",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/components/ModalBody.tsx#ModalBody"]={docgenInfo:ModalBody.__docgenInfo,name:"ModalBody",path:"src/components/Modal/components/ModalBody.tsx#ModalBody"})}catch(__react_docgen_typescript_loader_error){}var Close=__webpack_require__("./src/foundations/icons/Close.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),noop=__webpack_require__("./src/utils/noop/index.ts");const Context=(0,react.createContext)({onClose:noop.Z}),{Provider}=Context;try{Provider.displayName="Provider",Provider.__docgenInfo={description:"",displayName:"Provider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/context.tsx#Provider"]={docgenInfo:Provider.__docgenInfo,name:"Provider",path:"src/components/Modal/context.tsx#Provider"})}catch(__react_docgen_typescript_loader_error){}const ModalCloseButton=()=>{const{onClose}=(0,react.useContext)(Context);return(0,jsx_runtime.jsx)(IconButton.h,{ariaLabel:"Close dialog",onClick:onClose,children:(0,jsx_runtime.jsx)(Close.x,{})})};ModalCloseButton.displayName="ModalCloseButton";const ModalHeader=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsxs)(Header,{children:[(0,jsx_runtime.jsx)(Title,{children}),(0,jsx_runtime.jsx)(ModalCloseButton,{})]})};ModalHeader.displayName="ModalHeader";try{ModalHeader.displayName="ModalHeader",ModalHeader.__docgenInfo={description:"",displayName:"ModalHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/components/ModalHeader.tsx#ModalHeader"]={docgenInfo:ModalHeader.__docgenInfo,name:"ModalHeader",path:"src/components/Modal/components/ModalHeader.tsx#ModalHeader"})}catch(__react_docgen_typescript_loader_error){}const ModalShell=_ref=>{let{children,opened,title=null,onClose,size="default"}=_ref;const contextValue=(0,react.useMemo)((()=>({onClose})),[onClose]);return(0,jsx_runtime.jsx)(StyledDialogOverlay,{isOpen:opened,onDismiss:onClose,children:(0,jsx_runtime.jsx)(StyledDialogContent,{"aria-label":"string"==typeof title?title:"Dialog",size,children:(0,jsx_runtime.jsx)(Provider,{value:contextValue,children:(0,jsx_runtime.jsx)(Inner,{children})})})})};ModalShell.displayName="ModalShell";try{ModalShell.displayName="ModalShell",ModalShell.__docgenInfo={description:"",displayName:"ModalShell",props:{opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:{value:"null"},description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string | null"}},size:{defaultValue:{value:"default"},description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"wide"'}]}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user hits "Escape" or clicks outside the modal.',name:"onClose",required:!0,type:{name:"(event: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/components/ModalShell.tsx#ModalShell"]={docgenInfo:ModalShell.__docgenInfo,name:"ModalShell",path:"src/components/Modal/components/ModalShell.tsx#ModalShell"})}catch(__react_docgen_typescript_loader_error){}const Modal=_ref=>{let{children,title,...restProps}=_ref;return(0,jsx_runtime.jsxs)(ModalShell,{title,...restProps,children:[(0,jsx_runtime.jsx)(ModalHeader,{children:title}),(0,jsx_runtime.jsx)(ModalBody,{children})]})};Modal.displayName="Modal";try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string | null"}},size:{defaultValue:null,description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"wide"'}]}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user hits "Escape" or clicks outside the modal.',name:"onClose",required:!0,type:{name:"(event: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/Button.tsx"),Tooltip=__webpack_require__("./src/components/Tooltip/Tooltip.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx");const ModalActions=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)(Actions,{children:(0,jsx_runtime.jsx)(Flex.k,{justify:"flex-end",gap:2,children})})};ModalActions.displayName="ModalActions";try{ModalActions.displayName="ModalActions",ModalActions.__docgenInfo={description:"",displayName:"ModalActions",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/components/ModalActions.tsx#ModalActions"]={docgenInfo:ModalActions.__docgenInfo,name:"ModalActions",path:"src/components/Modal/components/ModalActions.tsx#ModalActions"})}catch(__react_docgen_typescript_loader_error){}const ConfirmModal=_ref=>{let{children,confirmText,closeText="Close",loading=!1,onClose,onConfirm,tooltipTitle,...restProps}=_ref;return(0,jsx_runtime.jsxs)(Modal,{onClose,...restProps,children:[children,(0,jsx_runtime.jsxs)(ModalActions,{children:[(0,jsx_runtime.jsx)(Button.z,{appearance:"primary",variant:"outline",onClick:onClose,children:closeText}),(0,jsx_runtime.jsx)(Tooltip.u,{popoverContent:tooltipTitle,showPopover:!!tooltipTitle,placement:"top",children:(0,jsx_runtime.jsx)(Button.z,{appearance:"primary",variant:"solid",loading,onClick:onConfirm,children:confirmText})})]})]})};ConfirmModal.displayName="ConfirmModal";try{ConfirmModal.displayName="ConfirmModal",ConfirmModal.__docgenInfo={description:"",displayName:"ConfirmModal",props:{confirmText:{defaultValue:null,description:"Renders text content in the confirm button.",name:"confirmText",required:!0,type:{name:"string"}},closeText:{defaultValue:{value:"Close"},description:"Renders text content in the close button.",name:"closeText",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading state for the confirm button.",name:"loading",required:!1,type:{name:"boolean"}},tooltipTitle:{defaultValue:null,description:"Renders a tooltip on the confirm button when passed.",name:"tooltipTitle",required:!1,type:{name:"string"}},onConfirm:{defaultValue:null,description:"Function executed when the confirm button is clicked.",name:"onConfirm",required:!0,type:{name:"() => void"}},opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string | null"}},size:{defaultValue:null,description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"wide"'}]}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user hits "Escape" or clicks outside the modal.',name:"onClose",required:!0,type:{name:"(event: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/facades/ConfirmModal.tsx#ConfirmModal"]={docgenInfo:ConfirmModal.__docgenInfo,name:"ConfirmModal",path:"src/components/Modal/facades/ConfirmModal.tsx#ConfirmModal"})}catch(__react_docgen_typescript_loader_error){}const DangerModal=_ref=>{let{children,confirmText,closeText="Close",loading=!1,onClose,onConfirm,tooltipTitle,...restProps}=_ref;return(0,jsx_runtime.jsxs)(Modal,{onClose,...restProps,children:[children,(0,jsx_runtime.jsxs)(ModalActions,{children:[(0,jsx_runtime.jsx)(Button.z,{appearance:"primary",variant:"outline",onClick:onClose,children:closeText}),(0,jsx_runtime.jsx)(Tooltip.u,{popoverContent:tooltipTitle,showPopover:!!tooltipTitle,placement:"top",children:(0,jsx_runtime.jsx)(Button.z,{appearance:"danger",variant:"solid",loading,onClick:onConfirm,children:confirmText})})]})]})};DangerModal.displayName="DangerModal";try{DangerModal.displayName="DangerModal",DangerModal.__docgenInfo={description:"",displayName:"DangerModal",props:{confirmText:{defaultValue:null,description:"Renders text content in the confirm button.",name:"confirmText",required:!0,type:{name:"string"}},closeText:{defaultValue:{value:"Close"},description:"Renders text content in the close button.",name:"closeText",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading state for the confirm button.",name:"loading",required:!1,type:{name:"boolean"}},tooltipTitle:{defaultValue:null,description:"Renders a tooltip on the confirm button when passed.",name:"tooltipTitle",required:!1,type:{name:"string"}},onConfirm:{defaultValue:null,description:"Function executed when the confirm button is clicked.",name:"onConfirm",required:!0,type:{name:"() => void"}},opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string | null"}},size:{defaultValue:null,description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"wide"'}]}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user hits "Escape" or clicks outside the modal.',name:"onClose",required:!0,type:{name:"(event: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/facades/DangerModal.tsx#DangerModal"]={docgenInfo:DangerModal.__docgenInfo,name:"DangerModal",path:"src/components/Modal/facades/DangerModal.tsx#DangerModal"})}catch(__react_docgen_typescript_loader_error){}var hooks=__webpack_require__("./node_modules/@storybook/addons/dist/esm/hooks.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const TemplateModal=args=>{const{onClose,...restArgs}=args,[_,updateArgs]=(0,hooks.D8)();return(0,esm.kt)(react.Fragment,null,(0,esm.kt)(Button.z,{variant:"outline",onClick:()=>updateArgs({opened:!0}),mdxType:"Button"},"Open Modal"),(0,esm.kt)(Modal,_extends({onClose:()=>updateArgs({opened:!1})},restArgs,{mdxType:"Modal"}),"This is a simple modal that has heading, close button and some spacing on the sides. ".repeat(10)))},TemplateConfirmModal=args=>{const{onClose,onConfirm,...restArgs}=args,[_,updateArgs]=(0,hooks.D8)();return(0,esm.kt)(react.Fragment,null,(0,esm.kt)(Button.z,{variant:"outline",onClick:()=>updateArgs({opened:!0}),mdxType:"Button"},"Open ConfirmModal"),(0,esm.kt)(ConfirmModal,_extends({onClose:()=>updateArgs({opened:!1}),onConfirm:()=>updateArgs({opened:!1})},restArgs,{mdxType:"ConfirmModal"}),"This is a modal that already provides all the necessary action buttons. ".repeat(10)))},TemplateDangerModal=args=>{const{onClose,onConfirm,...restArgs}=args,[_,updateArgs]=(0,hooks.D8)();return(0,esm.kt)(react.Fragment,null,(0,esm.kt)(Button.z,{variant:"outline",onClick:()=>updateArgs({opened:!0}),mdxType:"Button"},"Open DangerModal"),(0,esm.kt)(DangerModal,_extends({onClose:()=>updateArgs({opened:!1}),onConfirm:()=>updateArgs({opened:!1})},restArgs,{mdxType:"DangerModal"}),"This is a modal that already provides all the necessary action buttons. ".repeat(10)))},layoutProps={TemplateModal,TemplateConfirmModal,TemplateDangerModal};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Modal",component:Modal,subcomponents:{ConfirmModal,DangerModal,ModalShell},parameters:{controls:{sort:"requiredFirst",exclude:["children"]}},mdxType:"Meta"}),(0,esm.kt)("h1",null,"Modal"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"Modal is a window overlaid on either the primary window or another dialog window. Content behind a modal is inert, meaning that users cannot interact with it."),(0,esm.kt)("p",null,"Modal exports 3 facade components that are used for common modal use cases:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"Modal"),": Opinionated facade component that provides reasonable defaults for most situations."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"ConfirmModal"),": Used to quickly create a confirmation modal with a primary confirm button and a secondary close button."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"DangerModal"),": Used to quickly create a danger modal with a primary danger button and a secondary close button.")),(0,esm.kt)("p",null,"Modal exports 5 components to help you create any modal dialog:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"ModalShell"),": A modal with all the functionality but without header, close button, and paddings."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"ModalCloseButton"),": Button that closes the modal."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"ModalHeader"),": Component that wraps modal heading and close button."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"ModalBody"),": Wrapper for the content that adds spacing from the sides."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"ModalActions"),": Wrapper that houses the modal actions.")),(0,esm.kt)("h3",null,"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",null,"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { Modal, Button } from '@lokalise/louis';\n\nexport default () => {\n    const [opened, setOpened] = useState(false);\n    return (\n        <>\n            <Button onClick={() => setOpened(true)}>Open Modal</Button>\n            <Modal opened={opened} title=\"Modal title\" onClose={() => setOpened(false)}>\n                'This is a simple modal that has heading, close button and some spacing on the sides.'\n            </Modal>\n        </>\n    );\n};\n")),(0,esm.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A36149",target:"_blank"},"Figma Source File | Modal"))),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{of:Modal,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)("h3",null,"Default"),(0,esm.kt)(dist_esm.Xz,{withSource:"none",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Default",args:{opened:!1,title:"Default modal"},mdxType:"Story"},TemplateModal.bind({}))),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { Modal, Button } from '@lokalise/louis';\n\nexport default () => {\n    const [opened, setOpened] = useState(false);\n    return (\n        <>\n            <Button onClick={() => setOpened(true)}>Open Modal</Button>\n            <Modal opened={opened} title=\"Default modal\" onClose={() => setOpened(false)}>\n                'This is a simple modal that has heading, close button and some spacing on the sides.'\n            </Modal>\n        </>\n    );\n};\n")),(0,esm.kt)("h3",null,"ConfirmModal"),(0,esm.kt)(dist_esm.Xz,{withSource:"none",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Confirm Modal",args:{opened:!1,title:"Confirm modal",closeText:"Cancel",confirmText:"Confirm",onClose:()=>{},onConfirm:()=>{},loading:!1,tooltipTitle:"Click here to confirm"},mdxType:"Story"},TemplateConfirmModal.bind({}))),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { ConfirmModal, Button } from '@lokalise/louis';\n\nexport default () => {\n    const [opened, setOpened] = useState(false);\n    return (\n        <>\n            <Button onClick={() => setOpened(true)}>Open ConfirmModal</Button>\n            <ConfirmModal\n                opened={opened}\n                title=\"Confirm modal\"\n                onClose={() => setOpened(false)}\n                onConfirm={() => setOpened(false)}\n            >\n                'This is a modal that already provides all the necessary action buttons.'\n            </ConfirmModal>\n        </>\n    );\n};\n")),(0,esm.kt)("h3",null,"DangerModal"),(0,esm.kt)(dist_esm.Xz,{withSource:"none",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Danger Modal",args:{opened:!1,title:"Danger modal",closeText:"Cancel",confirmText:"Delete",onClose:()=>{},onConfirm:()=>{},loading:!1,tooltipTitle:"Click here to delete"},mdxType:"Story"},TemplateDangerModal.bind({}))),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { DangerModal, Button } from '@lokalise/louis';\n\nexport default () => {\n    const [opened, setOpened] = useState(false);\n    return (\n        <>\n            <Button onClick={() => setOpened(true)}>Open DangerModal</Button>\n            <DangerModal\n                opened={opened}\n                title=\"Danger modal\"\n                onClose={() => setOpened(false)}\n                onConfirm={() => setOpened(false)}\n            >\n                'This is a modal that already provides all the necessary action buttons.'\n            </DangerModal>\n        </>\n    );\n};\n")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const defaultStory=TemplateModal.bind({});defaultStory.storyName="Default",defaultStory.args={opened:!1,title:"Default modal"},defaultStory.parameters={storySource:{source:"args => {\n  const {\n    onClose,\n    ...restArgs\n  } = args;\n  const [_, updateArgs] = useArgs();\n  return <>\n            <Button variant=\"outline\" onClick={() => updateArgs({\n      opened: true\n    })}>\n                Open Modal\n            </Button>\n            <Modal onClose={() => updateArgs({\n      opened: false\n    })} {...restArgs}>\n                {'This is a simple modal that has heading, close button and some spacing on the sides. '.repeat(10)}\n            </Modal>\n        </>;\n}"}};const confirmModal=TemplateConfirmModal.bind({});confirmModal.storyName="Confirm Modal",confirmModal.args={opened:!1,title:"Confirm modal",closeText:"Cancel",confirmText:"Confirm",onClose:()=>{},onConfirm:()=>{},loading:!1,tooltipTitle:"Click here to confirm"},confirmModal.parameters={storySource:{source:"args => {\n  const {\n    onClose,\n    onConfirm,\n    ...restArgs\n  } = args;\n  const [_, updateArgs] = useArgs();\n  return <>\n            <Button variant=\"outline\" onClick={() => updateArgs({\n      opened: true\n    })}>\n                Open ConfirmModal\n            </Button>\n            <ConfirmModal onClose={() => updateArgs({\n      opened: false\n    })} onConfirm={() => updateArgs({\n      opened: false\n    })} {...restArgs}>\n                {'This is a modal that already provides all the necessary action buttons. '.repeat(10)}\n            </ConfirmModal>\n        </>;\n}"}};const dangerModal=TemplateDangerModal.bind({});dangerModal.storyName="Danger Modal",dangerModal.args={opened:!1,title:"Danger modal",closeText:"Cancel",confirmText:"Delete",onClose:()=>{},onConfirm:()=>{},loading:!1,tooltipTitle:"Click here to delete"},dangerModal.parameters={storySource:{source:"args => {\n  const {\n    onClose,\n    onConfirm,\n    ...restArgs\n  } = args;\n  const [_, updateArgs] = useArgs();\n  return <>\n            <Button variant=\"outline\" onClick={() => updateArgs({\n      opened: true\n    })}>\n                Open DangerModal\n            </Button>\n            <DangerModal onClose={() => updateArgs({\n      opened: false\n    })} onConfirm={() => updateArgs({\n      opened: false\n    })} {...restArgs}>\n                {'This is a modal that already provides all the necessary action buttons. '.repeat(10)}\n            </DangerModal>\n        </>;\n}"}};const componentMeta={title:"Components/Modal",parameters:{controls:{sort:"requiredFirst",exclude:["children"]}},component:Modal,subcomponents:{ConfirmModal,DangerModal,ModalShell},includeStories:["defaultStory","confirmModal","dangerModal"]},mdxStoryNameToKey={Default:"defaultStory","Confirm Modal":"confirmModal","Danger Modal":"dangerModal"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Modal_stories=componentMeta,__namedExportsOrder=["TemplateModal","TemplateConfirmModal","TemplateDangerModal","defaultStory","confirmModal","dangerModal"]}}]);
//# sourceMappingURL=components-Modal-Modal-stories-mdx.ab4fff85.iframe.bundle.js.map