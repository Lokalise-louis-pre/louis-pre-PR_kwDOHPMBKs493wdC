"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[8576],{"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),LoadingSign=__webpack_require__("./src/foundations/icons/LoadingSign/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),color=__webpack_require__("./src/utils/theme/color.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts"),variants=__webpack_require__("./src/utils/theme/variants.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),transitionTime=__webpack_require__("./src/utils/theme/transitionTime.ts"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const appearanceToColorCode=appearance=>({default:"primary",primary:"primary",danger:"red",warning:"yellow"}[appearance]),getOutlineStyles=function(colorType,appearance){let transparent=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("default"===appearance)return styled_components_browser_esm.iv`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react.forwardRef)(((_ref,ref)=>{let{size="md",variant="solid",type="button",appearance="default",loading=!1,active=!1,children,leftIcon,rightIcon,...rest}=_ref;return(0,jsx_runtime.jsxs)(Container,{ref,type:rest.href?void 0:type,size,variant,appearance,isLoading:loading,active,...rest,disabled:"disabled"in rest&&rest.disabled||loading,"aria-expanded":active,children:[(0,jsx_runtime.jsxs)(Content,{isHidden:loading,size,children:[leftIcon,(0,jsx_runtime.jsx)(Text,{size,children}),rightIcon]}),loading&&(0,jsx_runtime.jsx)(StyledLoadingSign,{"aria-busy":"true","aria-live":"polite",ariaLabel:"Loading"})]})}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"md"},description:"Changes button scale in padding and font size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},appearance:{defaultValue:{value:"default"},description:"Changes the button appearance.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"warning"'},{value:'"danger"'}]}},variant:{defaultValue:{value:"solid"},description:"Enables the outline style for the button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"outline"'}]}},disabled:{defaultValue:null,description:"Toggles disabled state of the button.",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading icon within the button.",name:"loading",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"Toggles the active state of the button.",name:"active",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"Enables the type attribute for the button.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},leftIcon:{defaultValue:null,description:"Renders an icon on the left side of the button through a provided child element.",name:"leftIcon",required:!1,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"Renders an icon on the right side of the button through a provided child element.",name:"rightIcon",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the button.",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>IconButton});var react=__webpack_require__("./node_modules/react/index.js"),LoadingSign=__webpack_require__("./src/foundations/icons/LoadingSign/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),variants=__webpack_require__("./src/utils/theme/variants.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),transitionTime=__webpack_require__("./src/utils/theme/transitionTime.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const variantColorStyles=styled_components_browser_esm.iv`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=(0,react.forwardRef)(((_ref,ref)=>{let{appearance="secondary",ariaLabel,loading=!1,children,...rest}=_ref;return(0,jsx_runtime.jsx)(Container,{ref,appearance,"aria-label":ariaLabel,isLoading:loading,disabled:"disabled"in rest&&rest.disabled||loading,...rest,children:loading?(0,jsx_runtime.jsx)(LoadingSign.X,{"aria-busy":"true","aria-live":"polite",ariaLabel:"Loading"}):children})}));IconButton.displayName="IconButton";try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{appearance:{defaultValue:{value:"secondary"},description:"Changes the button appearance.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"verified"'},{value:'"reviewed"'}]}},active:{defaultValue:null,description:"Toggles the active state of the button.",name:"active",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"Adds accessibility label.",name:"ariaLabel",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"Toggles disabled state of the button.",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading icon within the button.",name:"loading",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Displays Icon component in the button.",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Pressable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Pressable});var react=__webpack_require__("./node_modules/react/index.js");const Root=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button`
    cursor: pointer;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Pressable=(0,react.forwardRef)(((_ref,ref)=>{let{children,...props}=_ref;return(props=>void 0!==props.href)(props)?(0,jsx_runtime.jsx)(Root,{as:"a",...props,ref,children}):(0,jsx_runtime.jsx)(Root,{type:"button",...props,ref,children})}));Pressable.displayName="Pressable";try{Pressable.displayName="Pressable",Pressable.__docgenInfo={description:"",displayName:"Pressable",props:{href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pressable/index.tsx#Pressable"]={docgenInfo:Pressable.__docgenInfo,name:"Pressable",path:"src/components/Pressable/index.tsx#Pressable"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/CircleCheck.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>CircleCheck});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CircleCheck=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{fillRule:"evenodd",clipRule:"evenodd",d:"M15.6171 4.37411c3.1068 3.10676 3.1068 8.14379 0 11.25059-3.1068 3.1068-8.14383 3.1068-11.25059 0-3.10676-3.1068-3.10676-8.14383 0-11.25059 3.10676-3.10676 8.14379-3.10676 11.25059 0ZM7.02387 9.5026l1.97469 1.99 4.49264-4.47745.9839.99396-5.47654 5.47649-2.98-2.98 1.00531-1.003Z"})})};CircleCheck.displayName="CircleCheck";try{CircleCheck.displayName="CircleCheck",CircleCheck.__docgenInfo={description:"",displayName:"CircleCheck",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.300"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.200"'},{value:'"red.300"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.200"'},{value:'"green.300"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.200"'},{value:'"yellow.300"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.200"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/CircleCheck.tsx#CircleCheck"]={docgenInfo:CircleCheck.__docgenInfo,name:"CircleCheck",path:"src/foundations/icons/CircleCheck.tsx#CircleCheck"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/Close.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Close});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Close=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{d:"m15.2954 14.1358-1.1707 1.1707-4.13028-4.1304-4.11927 4.1193-1.17062-1.1706 4.11927-4.1193-4.11927-4.13029 1.17062-1.17062 4.11927 4.11927 4.13028-4.13032 1.1817 1.18167-4.1303 4.13029 4.1193 4.1303Z"})})};Close.displayName="Close";try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.300"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.200"'},{value:'"red.300"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.200"'},{value:'"green.300"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.200"'},{value:'"yellow.300"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.200"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Close.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"src/foundations/icons/Close.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/Error.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>Error});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Error=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{d:"M17.4384 15.0524 11.011 3.93144c-.4307-.73993-1.49085-.73993-1.92155 0L2.67311 15.0524c-.41966.7399.11043 1.6565.96079 1.6565h12.8437c.8504 0 1.3805-.9166.9608-1.6565Zm-6.5599-.0221H9.21093v-1.6676h1.66757v1.6676Zm0-3.3242H9.21093V6.70338h1.66757v5.00272Z"})})};Error.displayName="Error";try{Error.displayName="Error",Error.__docgenInfo={description:"",displayName:"Error",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.300"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.200"'},{value:'"red.300"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.200"'},{value:'"green.300"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.200"'},{value:'"yellow.300"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.200"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Error.tsx#Error"]={docgenInfo:Error.__docgenInfo,name:"Error",path:"src/foundations/icons/Error.tsx#Error"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/Info.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Info});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Info=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{d:"M9.99443 1.66751c-4.60519 0-8.33794 3.73275-8.33794 8.33789 0 4.6052 3.74379 8.3269 8.33794 8.3269 4.59417 0 8.33797-3.7327 8.33797-8.3269 0-4.5941-3.7328-8.33789-8.33797-8.33789Zm.83927 12.50139H9.16616V9.16613h1.66754v5.00277Zm0-6.67035H9.16616V5.83097h1.66754v1.66758Z"})})};Info.displayName="Info";try{Info.displayName="Info",Info.__docgenInfo={description:"",displayName:"Info",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.300"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.200"'},{value:'"red.300"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.200"'},{value:'"green.300"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.200"'},{value:'"yellow.300"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.200"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Info.tsx#Info"]={docgenInfo:Info.__docgenInfo,name:"Info",path:"src/foundations/icons/Info.tsx#Info"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/LoadingSign/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>LoadingSign});__webpack_require__("./node_modules/react/index.js");var SvgIcon=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),styles=__webpack_require__("./src/foundations/icons/styles.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Rectangle=_ref=>{let{rotation,begin}=_ref;return(0,jsx_runtime.jsx)(styles.DG,{transform:`rotate(${rotation} 10 10)`,children:(0,jsx_runtime.jsx)(styles.Lq,{x:"9",y:"3",rx:"1",ry:"1.232",width:"2",height:"4.4",children:(0,jsx_runtime.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:`${begin}s`,repeatCount:"indefinite"})})})};Rectangle.displayName="Rectangle";try{Rectangle.displayName="Rectangle",Rectangle.__docgenInfo={description:"",displayName:"Rectangle",props:{rotation:{defaultValue:null,description:"",name:"rotation",required:!0,type:{name:"number"}},begin:{defaultValue:null,description:"",name:"begin",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/LoadingSign/Rectangle.tsx#Rectangle"]={docgenInfo:Rectangle.__docgenInfo,name:"Rectangle",path:"src/foundations/icons/LoadingSign/Rectangle.tsx#Rectangle"})}catch(__react_docgen_typescript_loader_error){}const LoadingSign=_ref=>{let{...props}=_ref;return(0,jsx_runtime.jsxs)(SvgIcon.l,{...props,children:[(0,jsx_runtime.jsx)(Rectangle,{rotation:0,begin:-.875}),(0,jsx_runtime.jsx)(Rectangle,{rotation:45,begin:-.75}),(0,jsx_runtime.jsx)(Rectangle,{rotation:90,begin:-.625}),(0,jsx_runtime.jsx)(Rectangle,{rotation:135,begin:-.5}),(0,jsx_runtime.jsx)(Rectangle,{rotation:180,begin:-.375}),(0,jsx_runtime.jsx)(Rectangle,{rotation:225,begin:-.25}),(0,jsx_runtime.jsx)(Rectangle,{rotation:270,begin:-.125}),(0,jsx_runtime.jsx)(Rectangle,{rotation:315,begin:0})]})};LoadingSign.displayName="LoadingSign";try{LoadingSign.displayName="LoadingSign",LoadingSign.__docgenInfo={description:"",displayName:"LoadingSign",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.300"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.200"'},{value:'"red.300"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.200"'},{value:'"green.300"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.200"'},{value:'"yellow.300"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.200"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/LoadingSign/index.tsx#LoadingSign"]={docgenInfo:LoadingSign.__docgenInfo,name:"LoadingSign",path:"src/foundations/icons/LoadingSign/index.tsx#LoadingSign"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});__webpack_require__("./node_modules/react/index.js");var _styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SvgIcon=_ref=>{let{color="inherit",size="inherit",ariaLabel,children,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.uJ,{color,size,...props,"aria-hidden":!ariaLabel||void 0,role:ariaLabel?"img":void 0,"aria-label":ariaLabel,viewBox:"0 0 20 20",children})};SvgIcon.displayName="SvgIcon";try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{color:{defaultValue:{value:"inherit"},description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.300"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.200"'},{value:'"red.300"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.200"'},{value:'"green.300"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.200"'},{value:'"yellow.300"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.200"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:{value:"inherit"},description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"undefined"},description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"src/foundations/icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DG:()=>SvgIconG,Lq:()=>SvgIconRect,VA:()=>SvgIconClipPath,o3:()=>SvgIconPath,uJ:()=>SvgRoot,x:()=>SvgIconDefs});var _utils_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/excludeProps.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/color.ts");const commonConfig={shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_0__.L)(["fill","color","stroke"])},reservedKeywords=["currentColor","inherit"],colorTypesDefaults={color:"inherit",fill:"currentColor",stroke:void 0},colorHelper=(colorType,inputColor,props)=>inputColor&&!reservedKeywords.includes(inputColor)?(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)(inputColor)(props):colorTypesDefaults[colorType],commonStyles=_utils_styled__WEBPACK_IMPORTED_MODULE_2__.iv`
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
`)},"./src/utils/theme/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>color});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const color=colorPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(colorPath,theme.colors)))},"./src/utils/theme/excludeProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>excludeProps});const excludeProps=props=>(prop,defaultValidatorFn)=>!props.includes(prop)&&defaultValidatorFn(prop)},"./src/utils/theme/fontFamily.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>fontFamily});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const fontFamily=family=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(family,theme.fonts)))},"./src/utils/theme/fromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>fromTheme});const fromTheme=callback=>_ref=>{let{theme,...props}=_ref;return callback(theme,props)}},"./src/utils/theme/modifier.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>modifier});const modifier=(prop,trueCss)=>props=>("function"==typeof prop?prop(props):props[prop])?trueCss:void 0},"./src/utils/theme/radius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>radius});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const radius=radiusPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(radiusPath,theme.radii)))},"./src/utils/theme/spacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>spacing});var _fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const spacing=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>args.map((level=>theme.space[level])).join(" ")))}},"./src/utils/theme/transitionTime.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>transitionTime});var _fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const transitionTime=()=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>theme.transitionTime))},"./src/utils/theme/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>typography});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const typography=typographyPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(typographyPath,theme.typography)))},"./src/utils/theme/variants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>variants});const variants=(prop,allVariants,fallback)=>props=>allVariants["function"==typeof prop?prop(props):props[prop]??fallback]},"./src/utils/theme/zIndex.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>zIndex});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const zIndex=index=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(index,theme.zIndices)))},"./src/components/Toast/Toast.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,TemplateUpdating:()=>TemplateUpdating,__namedExportsOrder:()=>__namedExportsOrder,autoclosing:()=>autoclosing,default:()=>Toast_stories,error:()=>error,info:()=>info,success:()=>success,toastHelperFunctions:()=>toastHelperFunctions,warning:()=>warning,withAnchor:()=>withAnchor});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),react_toastify_esm=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.mjs"),CircleCheck=__webpack_require__("./src/foundations/icons/CircleCheck.tsx"),Error=__webpack_require__("./src/foundations/icons/Error.tsx"),Info=__webpack_require__("./src/foundations/icons/Info.tsx"),Close=__webpack_require__("./src/foundations/icons/Close.tsx"),styled_components_browser_esm=(__webpack_require__("./node_modules/react-toastify/dist/ReactToastify.css"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),transitionTime=__webpack_require__("./src/utils/theme/transitionTime.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),zIndex=__webpack_require__("./src/utils/theme/zIndex.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const CloseIconButton=(0,styled_components_browser_esm.ZP)(IconButton.h)`
    opacity: 0;
    transition: opacity 0.2s;
`,TypeIcon=styled_components_browser_esm.ZP.div`
    flex-basis: 16px;
    flex-shrink: 0;
    flex-grow: 0;
    height: 20px;
    display: flex;
    align-items: center;
`,Content=styled_components_browser_esm.ZP.div`
    width: 100%;
    flex-shrink: 1;
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${(0,spacing.W)(1)};
`,Title=styled_components_browser_esm.ZP.span`
    ${(0,typography.c)("captionMedium")};
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
`,Description=styled_components_browser_esm.ZP.span`
    ${(0,typography.c)("caption2")};
    display: block;
`,styles_ToastAnchor=(0,styled_components_browser_esm.ZP)(Pressable.s)`
    text-decoration: underline;
    cursor: pointer;
    transition: opacity ${(0,transitionTime.Y)()};
    font-weight: inherit;

    ${(0,modifier.c)((_ref=>{let{href}=_ref;return!href}),styled_components_browser_esm.iv`
            background-color: transparent;
            border: none;
            font-family: inherit;
            padding: 0;
        `)}

    &:hover {
        opacity: 0.7;
    }
`,StyledToastContainer=(0,styled_components_browser_esm.ZP)(react_toastify_esm.Ix).attrs({className:"toast-container"})`
    transform: translate3d(0, 0, 9999px);
    position: fixed;
    font-family: inherit;
    width: 332px;
    min-height: 44px;
    box-sizing: border-box;
    padding: 0;

    --toastify-color-light: ${(0,color.$)("content.primary")};
    --toastify-color-dark: var(--toastify-color-light);
    --toastify-color-info: ${(0,color.$)("surface.primary50")};
    --toastify-color-success: ${(0,color.$)("surface.green50")};
    --toastify-color-warning: ${(0,color.$)("surface.yellow50")};
    --toastify-color-error: ${(0,color.$)("surface.red50")};
    //--toastify-color-transparent: rgba(255, 255, 255, 0.7);

    --toastify-icon-color-info: ${(0,color.$)("primary.600")};
    --toastify-icon-color-success: ${(0,color.$)("green.600")};
    --toastify-icon-color-warning: ${(0,color.$)("yellow.800")};
    --toastify-icon-color-error: ${(0,color.$)("red.600")};

    //--toastify-toast-width: 320px;
    //--toastify-toast-background: #fff;
    //--toastify-toast-min-height: 64px;
    //--toastify-toast-max-height: 800px;
    --toastify-font-family: ${(0,fontFamily.I)("default")};
    --toastify-z-index: ${(0,zIndex.W)("toast")};

    --toastify-text-color-light: ${(0,color.$)("content.primary")};
    --toastify-text-color-dark: var(--toastify-text-color-light);

    --toastify-text-color-info: var(--toastify-text-color-light);
    --toastify-text-color-success: var(--toastify-text-color-light);
    --toastify-text-color-warning: var(--toastify-text-color-light);
    --toastify-text-color-error: var(--toastify-text-color-light);

    //--toastify-spinner-color: #616161;
    //--toastify-spinner-color-empty-area: #e0e0e0;

    // Used when no type is provided
    // toast("**hello**")
    //--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
    // Used when no type is provided
    --toastify-color-progress-dark: var(--toastify-color-progress-light);
    --toastify-color-progress-info: var(--toastify-icon-color-info);
    --toastify-color-progress-success: var(--toastify-icon-color-success);
    --toastify-color-progress-warning: var(--toastify-icon-color-warning);
    --toastify-color-progress-error: var(--toastify-icon-color-error);

    .Toastify__toast {
        box-sizing: border-box;
        padding: ${(0,spacing.W)(4,2)};
        width: 100%;
        display: flex;
        align-items: flex-start;
        color: ${(0,color.$)("content.primary")};
        box-shadow: none;
        cursor: default;
        min-height: 44px;
        overflow: hidden;
        border-radius: ${(0,radius.q)("md")};
        margin-bottom: ${(0,spacing.W)(2)};

        &:hover ${CloseIconButton} {
            opacity: 1;
        }
    }

    .Toastify__toast-icon {
        margin: 0;
    }

    .Toastify__toast.Toastify__toast--success {
        background-color: var(--toastify-color-success);

        .Toastify__toast-icon {
            color: var(--toastify-icon-color-success);
        }
    }

    .Toastify__toast.Toastify__toast--error {
        background-color: var(--toastify-color-error);

        .Toastify__toast-icon {
            color: var(--toastify-icon-color-error);
        }
    }

    .Toastify__toast.Toastify__toast--warning {
        background-color: var(--toastify-color-warning);

        .Toastify__toast-icon {
            color: var(--toastify-icon-color-warning);
        }
    }

    .Toastify__toast.Toastify__toast--info {
        background-color: var(--toastify-color-info);

        .Toastify__toast-icon {
            color: var(--toastify-icon-color-info);
        }
    }

    .Toastify__toast-body {
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: ${(0,spacing.W)(2)};
        padding: 0;
    }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CloseButton=_ref=>{let{closeToast}=_ref;return(0,jsx_runtime.jsx)(CloseIconButton,{ariaLabel:"Close",onClick:closeToast,children:(0,jsx_runtime.jsx)(Close.x,{})})};CloseButton.displayName="CloseButton";try{CloseButton.displayName="CloseButton",CloseButton.__docgenInfo={description:"",displayName:"CloseButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/CloseButton.tsx#CloseButton"]={docgenInfo:CloseButton.__docgenInfo,name:"CloseButton",path:"src/components/Toast/CloseButton.tsx#CloseButton"})}catch(__react_docgen_typescript_loader_error){}const Toast=_ref=>{let{title,description}=_ref;return(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsx)(Title,{children:title}),description&&(0,jsx_runtime.jsx)(Description,{children:description})]})};Toast.displayName="Toast";try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/Toast/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}const render=_ref=>{let{closeToast,data}=_ref;if(!data)return null;const{title,description}=data;return(0,jsx_runtime.jsx)(Toast,{title,description:description instanceof Function?description({closeToast}):description})};render.displayName="render";const iconType={success:CircleCheck.y,error:Error.j,warning:Error.j,info:Info.k},getTypeIcon=type=>{const ToastIcon=iconType[type];return(0,jsx_runtime.jsx)(TypeIcon,{children:(0,jsx_runtime.jsx)(ToastIcon,{size:"20px"})})};getTypeIcon.displayName="getTypeIcon";const showToast=_ref2=>{let{type,title,description,onClick,autoClose=5e3,closeVisible=!0,draggable=!0,toastId,containerId}=_ref2;return(0,react_toastify_esm.Am)(render,{type,icon:getTypeIcon(type),closeButton:!!closeVisible&&CloseButton,autoClose,hideProgressBar:!0,closeOnClick:"function"==typeof onClick,pauseOnHover:!0,draggable,onClick,toastId,containerId,data:{title,description}})},dismissToast=toastId=>{react_toastify_esm.Am.dismiss(toastId)},isToastActive=toastId=>react_toastify_esm.Am.isActive(toastId),ToastContainer=_ref4=>{let{containerId,position="top-right"}=_ref4;return(0,jsx_runtime.jsx)(StyledToastContainer,{enableMultiContainer:!!containerId,containerId,position,limit:5})};ToastContainer.displayName="ToastContainer";try{ToastContainer.displayName="ToastContainer",ToastContainer.__docgenInfo={description:"",displayName:"ToastContainer",props:{containerId:{defaultValue:null,description:"Enables multiple toast containers and sets the container id.",name:"containerId",required:!1,type:{name:"Id"}},position:{defaultValue:{value:"top-right"},description:"Position in which to render the toasts.",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"top-center"'},{value:'"top-left"'},{value:'"bottom-right"'},{value:'"bottom-center"'},{value:'"bottom-left"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#ToastContainer"]={docgenInfo:ToastContainer.__docgenInfo,name:"ToastContainer",path:"src/components/Toast/index.tsx#ToastContainer"})}catch(__react_docgen_typescript_loader_error){}try{showToast.displayName="showToast",showToast.__docgenInfo={description:"",displayName:"showToast",props:{type:{defaultValue:null,description:"Changes the toast type.",name:"type",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},title:{defaultValue:null,description:"Sets the toast title text.",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Renders text content and / or any HTML node in the toast.",name:"description",required:!1,type:{name:"ReactNode | DescriptionFn"}},onClick:{defaultValue:null,description:"Function executed when clicking inside the toast notification.",name:"onClick",required:!1,type:{name:"(() => void)"}},autoClose:{defaultValue:{value:"5000"},description:"Delay in ms to close the toast. If set to false, the toast needs to be closed manually.",name:"autoClose",required:!1,type:{name:"number | false"}},closeVisible:{defaultValue:{value:"true"},description:"Toggles the visibility of the close button in the toast.",name:"closeVisible",required:!1,type:{name:"boolean"}},draggable:{defaultValue:{value:"true"},description:"Toggles whether the toast can be dragged.",name:"draggable",required:!1,type:{name:"boolean"}},toastId:{defaultValue:null,description:"Sets a custom id for the toast.",name:"toastId",required:!1,type:{name:"Id"}},containerId:{defaultValue:null,description:"Specify the container id when using multiple toast containers.",name:"containerId",required:!1,type:{name:"Id"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#showToast"]={docgenInfo:showToast.__docgenInfo,name:"showToast",path:"src/components/Toast/index.tsx#showToast"})}catch(__react_docgen_typescript_loader_error){}try{dismissToast.displayName="dismissToast",dismissToast.__docgenInfo={description:"",displayName:"dismissToast",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#dismissToast"]={docgenInfo:dismissToast.__docgenInfo,name:"dismissToast",path:"src/components/Toast/index.tsx#dismissToast"})}catch(__react_docgen_typescript_loader_error){}try{isToastActive.displayName="isToastActive",isToastActive.__docgenInfo={description:"",displayName:"isToastActive",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#isToastActive"]={docgenInfo:isToastActive.__docgenInfo,name:"isToastActive",path:"src/components/Toast/index.tsx#isToastActive"})}catch(__react_docgen_typescript_loader_error){}try{ToastAnchor.displayName="ToastAnchor",ToastAnchor.__docgenInfo={description:"",displayName:"ToastAnchor",props:{href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#ToastAnchor"]={docgenInfo:ToastAnchor.__docgenInfo,name:"ToastAnchor",path:"src/components/Toast/index.tsx#ToastAnchor"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>{const{name,...toastArgs}=args;return(0,esm.kt)("div",null,(0,esm.kt)(Button.z,{variant:"outline",onClick:()=>{showToast({...toastArgs})},mdxType:"Button"},"Trigger toast: ",name),(0,esm.kt)(ToastContainer,{containerId:toastArgs.containerId,mdxType:"ToastContainer"}))};Template.displayName="Template";const TemplateUpdating=args=>{const[currentToastId,setCurrentToastId]=react.useState(),isActiveButtonRef=react.useRef(null);return(0,esm.kt)("div",{style:{display:"flex",justifyContent:"flex-start",gap:"10px"}},(0,esm.kt)(Button.z,{variant:"outline",onClick:()=>{setCurrentToastId(showToast({containerId:"updatingContainer",...args}))},mdxType:"Button"},"Trigger toast"),(0,esm.kt)(Button.z,{variant:"outline",onClick:()=>{((toastId,_ref3)=>{let{title,description,...props}=_ref3;react_toastify_esm.Am.update(toastId,{..."onClick"in props?{closeOnClick:"function"==typeof props.onClick}:{},..."closeVisible"in props?{closeButton:!!props.closeVisible&&CloseButton}:{},..."type"in props&&props.type?{icon:getTypeIcon(props.type)}:{},...void 0!==title?{data:{title,description},render}:{},...props})})(currentToastId,{containerId:"updatingContainer",description:"Toast updated",...args})},mdxType:"Button"},"Update toast"),(0,esm.kt)(Button.z,{variant:"outline",onClick:()=>{dismissToast(currentToastId)},mdxType:"Button"},"Dismiss toast"),(0,esm.kt)(Button.z,{ref:isActiveButtonRef,variant:"outline",onClick:()=>{isActiveButtonRef.current.innerText=`Is Toast active? ${isToastActive(currentToastId)}`},mdxType:"Button"},"Is Toast active?"),(0,esm.kt)(ToastContainer,{containerId:"updatingContainer",mdxType:"ToastContainer"}))};TemplateUpdating.displayName="TemplateUpdating";const layoutProps={Template,TemplateUpdating};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Toast",component:showToast,subcomponents:{ToastContainer},parameters:{controls:{exclude:["onClick","name","containerId"]}},argTypes:{description:{control:{type:"text"}},toastId:{control:{type:"text"}}},mdxType:"Meta"}),(0,esm.kt)("h1",null,"Toast"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#edge-cases"},"Edge Cases"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"Toast shows a notification in the top-right corner of the window. It can be automatically closed after a preset amount of time,\nor for important notifications it can remain visible until the user dismisses it."),(0,esm.kt)("p",null,"Toast depends on ",(0,esm.kt)("a",{href:"https://github.com/fkhadra/react-toastify",target:"_blank"},"react-toastify"),"."),(0,esm.kt)("h3",null,"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",null,"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ToastContainer, showToast, Button } from '@lokalise/louis';\n\nexport default () => (\n    <>\n        <ToastContainer />\n\n        <Button\n            onClick={() => {\n                showToast({\n                    type: 'success',\n                    title: 'This is a success toast notification',\n                });\n            }}\n        >\n            Show toast\n        </Button>\n    </>\n);\n")),(0,esm.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4032%3A29263",target:"_blank"},"Figma Source File | Toast"))),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{of:showToast,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)("h3",null,"Type"),(0,esm.kt)(dist_esm.Xz,{withSource:"none",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Success",args:{name:"Success",type:"success",autoClose:!1,title:"This is a success toast notification",containerId:"successContainer"},mdxType:"Story"},Template.bind({})),(0,esm.kt)(dist_esm.oG,{name:"Error",args:{name:"Error",type:"error",autoClose:!1,title:"This is an error toast notification",containerId:"errorContainer"},mdxType:"Story"},Template.bind({})),(0,esm.kt)(dist_esm.oG,{name:"Warning",args:{name:"Warning",type:"warning",autoClose:!1,title:"This is a warning toast notification",containerId:"warningContainer"},mdxType:"Story"},Template.bind({})),(0,esm.kt)(dist_esm.oG,{name:"Info",args:{name:"Info",type:"info",autoClose:!1,title:"This is an info toast notification",containerId:"infoContainer"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",null,"Autoclosing"),(0,esm.kt)(dist_esm.Xz,{withSource:"none",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Autoclosing",args:{name:"Autoclosing",type:"info",title:"This is an autoclosing toast notification",autoClose:5e3,description:"It will automatically disappear",containerId:"autoclosingContainer"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",null,"With Anchor"),(0,esm.kt)(dist_esm.Xz,{withSource:"none",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"With Anchor",args:{name:"With Anchor",type:"info",title:"This is a toast with an anchor",description:({closeToast})=>(0,esm.kt)(react.Fragment,null,"Description text. ",(0,esm.kt)(styles_ToastAnchor,{onClick:closeToast,mdxType:"ToastAnchor"},"Some action")),autoClose:!1,containerId:"withAnchorContainer"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ToastContainer, showToast, ToastAnchor } from '@lokalise/louis';\n\nexport default () => (\n    <>\n        <ToastContainer />\n\n        <Button\n            onClick={() => {\n                showToast({\n                    type: 'info',\n                    title: 'This is a toast with an anchor',\n                    description: ({ closeToast }) => (\n                        <>\n                            Description text. <ToastAnchor onClick={closeToast}>Some action</ToastAnchor>\n                        </>\n                    ),\n                });\n            }}\n        >\n            Show toast\n        </Button>\n    </>\n);\n")),(0,esm.kt)("h3",null,"Toast Helper Functions"),(0,esm.kt)(dist_esm.Xz,{withSource:"none",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Toast Helper Functions",args:{type:"info",title:"Toasts can be updated",autoClose:!1},mdxType:"Story"},TemplateUpdating.bind({}))),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ToastContainer, showToast, updateToast, dismissToast, isToastActive } from '@lokalise/louis';\n\nexport default () => {\n    const [currentToastId, setCurrentToastId] = React.useState();\n\n    return (\n        <>\n            <ToastContainer />\n\n            <Button\n                onClick={() => {\n                    setCurrentToastId(\n                        showToast({\n                            type: 'success',\n                            title: 'Toasts can be updated',\n                        }),\n                    );\n                }}\n            >\n                Show toast\n            </Button>\n\n            <Button\n                onClick={() => {\n                    updateToast(currentToastId, {\n                        description: 'Toast updated',\n                    });\n                }}\n            >\n                Update toast\n            </Button>\n\n            <Button\n                onClick={() => {\n                    dismissToast(currentToastId);\n                }}\n            >\n                Dismiss toast\n            </Button>\n\n            <Button\n                onClick={() => {\n                    isToastActive(currentToastId);\n                }}\n            >\n                Is Toast active?\n            </Button>\n        </>\n    );\n};\n")),(0,esm.kt)("h2",{id:"edge-cases"},"Edge cases"),(0,esm.kt)("h3",null,"Multi container support"),(0,esm.kt)("p",null,"You can also render toasts in multiple separate containers by specifying a unique ",(0,esm.kt)("inlineCode",{parentName:"p"},"containerId")," prop for each ",(0,esm.kt)("inlineCode",{parentName:"p"},"ToastContainer"),"."),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ToastContainer, showToast } from '@lokalise/louis';\n\nexport default () => {\n    const [currentToastId, setCurrentToastId] = React.useState();\n\n    return (\n        <>\n            <ToastContainer containerId={'firstContainer'} position={'top-right'} />\n            <ToastContainer containerId={'secondContainer'} position={'top-left'} />\n\n            <Button\n                onClick={() => {\n                    setCurrentToastId(\n                        showToast({\n                            containerId: 'firstContainer',\n                            type: 'success',\n                            title: 'Toasts can be updated',\n                        }),\n                    );\n                }}\n            >\n                Show toast 1\n            </Button>\n\n            <Button\n                onClick={() => {\n                    setCurrentToastId(\n                        showToast({\n                            containerId: 'secondContainer',\n                            type: 'success',\n                            title: 'Toasts can be updated',\n                        }),\n                    );\n                }}\n            >\n                Show toast 2\n            </Button>\n        </>\n    );\n};\n")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const success=Template.bind({});success.storyName="Success",success.args={name:"Success",type:"success",autoClose:!1,title:"This is a success toast notification",containerId:"successContainer"},success.parameters={storySource:{source:'args => {\n  const {\n    name,\n    ...toastArgs\n  } = args;\n  return <div>\n            <Button variant="outline" onClick={() => {\n      showToast({ ...toastArgs\n      });\n    }}>\n                Trigger toast: {name}\n            </Button>\n            <ToastContainer containerId={toastArgs.containerId} />\n        </div>;\n}'}};const error=Template.bind({});error.storyName="Error",error.args={name:"Error",type:"error",autoClose:!1,title:"This is an error toast notification",containerId:"errorContainer"},error.parameters={storySource:{source:'args => {\n  const {\n    name,\n    ...toastArgs\n  } = args;\n  return <div>\n            <Button variant="outline" onClick={() => {\n      showToast({ ...toastArgs\n      });\n    }}>\n                Trigger toast: {name}\n            </Button>\n            <ToastContainer containerId={toastArgs.containerId} />\n        </div>;\n}'}};const warning=Template.bind({});warning.storyName="Warning",warning.args={name:"Warning",type:"warning",autoClose:!1,title:"This is a warning toast notification",containerId:"warningContainer"},warning.parameters={storySource:{source:'args => {\n  const {\n    name,\n    ...toastArgs\n  } = args;\n  return <div>\n            <Button variant="outline" onClick={() => {\n      showToast({ ...toastArgs\n      });\n    }}>\n                Trigger toast: {name}\n            </Button>\n            <ToastContainer containerId={toastArgs.containerId} />\n        </div>;\n}'}};const info=Template.bind({});info.storyName="Info",info.args={name:"Info",type:"info",autoClose:!1,title:"This is an info toast notification",containerId:"infoContainer"},info.parameters={storySource:{source:'args => {\n  const {\n    name,\n    ...toastArgs\n  } = args;\n  return <div>\n            <Button variant="outline" onClick={() => {\n      showToast({ ...toastArgs\n      });\n    }}>\n                Trigger toast: {name}\n            </Button>\n            <ToastContainer containerId={toastArgs.containerId} />\n        </div>;\n}'}};const autoclosing=Template.bind({});autoclosing.storyName="Autoclosing",autoclosing.args={name:"Autoclosing",type:"info",title:"This is an autoclosing toast notification",autoClose:5e3,description:"It will automatically disappear",containerId:"autoclosingContainer"},autoclosing.parameters={storySource:{source:'args => {\n  const {\n    name,\n    ...toastArgs\n  } = args;\n  return <div>\n            <Button variant="outline" onClick={() => {\n      showToast({ ...toastArgs\n      });\n    }}>\n                Trigger toast: {name}\n            </Button>\n            <ToastContainer containerId={toastArgs.containerId} />\n        </div>;\n}'}};const withAnchor=Template.bind({});withAnchor.storyName="With Anchor",withAnchor.args={name:"With Anchor",type:"info",title:"This is a toast with an anchor",description:({closeToast})=>(0,esm.kt)(react.Fragment,null,"Description text. ",(0,esm.kt)(styles_ToastAnchor,{onClick:closeToast},"Some action")),autoClose:!1,containerId:"withAnchorContainer"},withAnchor.parameters={storySource:{source:'args => {\n  const {\n    name,\n    ...toastArgs\n  } = args;\n  return <div>\n            <Button variant="outline" onClick={() => {\n      showToast({ ...toastArgs\n      });\n    }}>\n                Trigger toast: {name}\n            </Button>\n            <ToastContainer containerId={toastArgs.containerId} />\n        </div>;\n}'}};const toastHelperFunctions=TemplateUpdating.bind({});toastHelperFunctions.storyName="Toast Helper Functions",toastHelperFunctions.args={type:"info",title:"Toasts can be updated",autoClose:!1},toastHelperFunctions.parameters={storySource:{source:"args => {\n  const [currentToastId, setCurrentToastId] = React.useState();\n  const isActiveButtonRef = React.useRef(null);\n  return <div style={{\n    display: 'flex',\n    justifyContent: 'flex-start',\n    gap: '10px'\n  }}>\n            <Button variant=\"outline\" onClick={() => {\n      setCurrentToastId(showToast({\n        containerId: 'updatingContainer',\n        ...args\n      }));\n    }}>\n                Trigger toast\n            </Button>\n            <Button variant=\"outline\" onClick={() => {\n      updateToast(currentToastId, {\n        containerId: 'updatingContainer',\n        description: 'Toast updated',\n        ...args\n      });\n    }}>\n                Update toast\n            </Button>\n            <Button variant=\"outline\" onClick={() => {\n      dismissToast(currentToastId);\n    }}>\n                Dismiss toast\n            </Button>\n            <Button ref={isActiveButtonRef} variant=\"outline\" onClick={() => {\n      isActiveButtonRef.current.innerText = `Is Toast active? ${isToastActive(currentToastId)}`;\n    }}>\n                Is Toast active?\n            </Button>\n            <ToastContainer containerId={'updatingContainer'} />\n        </div>;\n}"}};const componentMeta={title:"Components/Toast",parameters:{controls:{exclude:["onClick","name","containerId"]}},component:showToast,subcomponents:{ToastContainer},argTypes:{description:{control:{type:"text"}},toastId:{control:{type:"text"}}},includeStories:["success","error","warning","info","autoclosing","withAnchor","toastHelperFunctions"]},mdxStoryNameToKey={Success:"success",Error:"error",Warning:"warning",Info:"info",Autoclosing:"autoclosing","With Anchor":"withAnchor","Toast Helper Functions":"toastHelperFunctions"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Toast_stories=componentMeta,__namedExportsOrder=["Template","TemplateUpdating","success","error","warning","info","autoclosing","withAnchor","toastHelperFunctions"]}}]);
//# sourceMappingURL=components-Toast-Toast-stories-mdx.05905568.iframe.bundle.js.map