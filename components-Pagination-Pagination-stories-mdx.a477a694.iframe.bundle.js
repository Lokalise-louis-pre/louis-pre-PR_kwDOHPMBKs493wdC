"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[6298],{"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),LoadingSign=__webpack_require__("./src/foundations/icons/LoadingSign/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),color=__webpack_require__("./src/utils/theme/color.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts"),variants=__webpack_require__("./src/utils/theme/variants.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),transitionTime=__webpack_require__("./src/utils/theme/transitionTime.ts"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const appearanceToColorCode=appearance=>({default:"primary",primary:"primary",danger:"red",warning:"yellow"}[appearance]),getOutlineStyles=function(colorType,appearance){let transparent=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("default"===appearance)return styled_components_browser_esm.iv`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react.forwardRef)(((_ref,ref)=>{let{size="md",variant="solid",type="button",appearance="default",loading=!1,active=!1,children,leftIcon,rightIcon,...rest}=_ref;return(0,jsx_runtime.jsxs)(Container,{ref,type:rest.href?void 0:type,size,variant,appearance,isLoading:loading,active,...rest,disabled:"disabled"in rest&&rest.disabled||loading,"aria-expanded":active,children:[(0,jsx_runtime.jsxs)(Content,{isHidden:loading,size,children:[leftIcon,(0,jsx_runtime.jsx)(Text,{size,children}),rightIcon]}),loading&&(0,jsx_runtime.jsx)(StyledLoadingSign,{"aria-busy":"true","aria-live":"polite",ariaLabel:"Loading"})]})}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"md"},description:"Changes button scale in padding and font size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},appearance:{defaultValue:{value:"default"},description:"Changes the button appearance.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"warning"'},{value:'"danger"'}]}},variant:{defaultValue:{value:"solid"},description:"Enables the outline style for the button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"outline"'}]}},disabled:{defaultValue:null,description:"Toggles disabled state of the button.",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading icon within the button.",name:"loading",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"Toggles the active state of the button.",name:"active",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"Enables the type attribute for the button.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},leftIcon:{defaultValue:null,description:"Renders an icon on the left side of the button through a provided child element.",name:"leftIcon",required:!1,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"Renders an icon on the right side of the button through a provided child element.",name:"rightIcon",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the button.",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/styles/link.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>withLinkStyle});var _styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/color.ts"),_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/theme/transitionTime.ts"),_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/theme/fontFamily.ts");const withLinkStyle=_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    cursor: pointer;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("interactive.primary.idle")};
    transition: color ${(0,_theme__WEBPACK_IMPORTED_MODULE_2__.Y)()};
    background-color: transparent;
    padding: 0;
    border: none;
    font-family: ${(0,_theme__WEBPACK_IMPORTED_MODULE_3__.I)("default")};

    &:hover,
    &:focus {
        color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("interactive.primary.hover")};
    }
    &:active {
        color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("interactive.primary.pressed")};
    }
    &:active:hover {
        color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("interactive.primary.pressedHover")};
    }
`},"./src/components/Pagination/Pagination.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pagination_stories,pagination:()=>pagination});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),hooks=__webpack_require__("./node_modules/@storybook/addons/dist/esm/hooks.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx"),Select=__webpack_require__("./src/components/Select/Select.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles_link=__webpack_require__("./src/utils/styles/link.ts"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts");const Container=styled_components_browser_esm.ZP.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`,Content=styled_components_browser_esm.ZP.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: ${(0,fontFamily.I)("default")};
`,InputWrapper=styled_components_browser_esm.ZP.div`
    width: 55px;
`,SelectWrapper=styled_components_browser_esm.ZP.div`
    width: 70px;
`,Text=styled_components_browser_esm.ZP.div`
    ${(0,typography.c)("description")};
    padding: ${(0,spacing.W)(2)};
    color: ${(0,color.$)("content.primary")};
`,ButtonWrapper=styled_components_browser_esm.ZP.div`
    visibility: hidden;

    ${(0,modifier.c)("visible",styled_components_browser_esm.iv`
            visibility: visible;
        `)}
`,Anchor=styled_components_browser_esm.ZP.button`
    ${(0,typography.c)("description")}
    ${styles_link.J};
    border: none;
    padding-left: ${(0,spacing.W)(2)};
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const selectOptions=[{value:25,label:25},{value:50,label:50},{value:100,label:100}],Pagination=_ref=>{let{limit,offset,total,onPaginationChange}=_ref;const[pageInputValue,setPageInputValue]=(0,react.useState)(1),pageCount=((total,limit)=>Math.ceil(total/limit))(total,limit),currentPage=((offset,limit)=>1+Math.ceil(offset/limit))(offset,limit),selectValue=selectOptions.find((_ref2=>{let{value}=_ref2;return value===limit}));return(0,react.useEffect)((()=>{setPageInputValue(1)}),[limit,offset,total]),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(ButtonWrapper,{visible:currentPage>1,children:(0,jsx_runtime.jsx)(Button.z,{appearance:"primary",variant:"outline",size:"md",onClick:()=>{currentPage<=1||onPaginationChange([currentPage-1,limit])},children:"← Prev"})}),(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsxs)(Text,{children:["Page ",currentPage," of ",pageCount||1,". Jump to page"]}),(0,jsx_runtime.jsx)(InputWrapper,{children:(0,jsx_runtime.jsx)(Input.I,{"aria-label":"page number",type:"number",min:"1",error:!pageInputValue||pageCount<pageInputValue,max:`${pageCount}`,value:pageInputValue.toString(),onValueChange:value=>{setPageInputValue(parseInt(value,10))}})}),(0,jsx_runtime.jsx)(Anchor,{onClick:()=>{!pageInputValue||pageInputValue>pageCount||pageInputValue===currentPage||onPaginationChange([pageInputValue,limit])},children:"Go"}),(0,jsx_runtime.jsx)(Text,{children:"Show per page"}),(0,jsx_runtime.jsx)(SelectWrapper,{children:(0,jsx_runtime.jsx)(Select.P,{"aria-label":"page size",isSearchable:!1,value:selectValue,options:selectOptions,onChange:option=>{null!==option&&onPaginationChange([currentPage,option.value])}})})]}),(0,jsx_runtime.jsx)(ButtonWrapper,{visible:currentPage<pageCount,children:(0,jsx_runtime.jsx)(Button.z,{appearance:"primary",variant:"outline",size:"md",onClick:()=>{currentPage+1>pageCount||onPaginationChange([currentPage+1,limit])},children:"Next →"})})]})};Pagination.displayName="Pagination",Pagination.displayName="Pagination";try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{limit:{defaultValue:null,description:"The number of items to display in one page",name:"limit",required:!0,type:{name:"enum",value:[{value:"25"},{value:"50"},{value:"100"}]}},offset:{defaultValue:null,description:"The offset page number",name:"offset",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"The total page number",name:"total",required:!0,type:{name:"number"}},onPaginationChange:{defaultValue:null,description:"Callback fired when changing page.",name:"onPaginationChange",required:!0,type:{name:"(pageData: [pageNo: number, limit: PageSize]) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>{const[_,updateArgs]=(0,hooks.D8)();return(0,esm.kt)(Pagination,_extends({},args,{onPaginationChange:([pageNo,limit])=>{updateArgs({offset:(pageNo-1)*limit,total:100,limit})},mdxType:"Pagination"}))};Template.displayName="Template";const layoutProps={Template};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Pagination",component:Pagination,parameters:{controls:{sort:"requiredFirst"}},mdxType:"Meta"}),(0,esm.kt)("h1",null,"Pagination"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"The pagination component is a way to navigate through long lists of data. It allows the user to select a specific page to view, and provides an easy way to move between pages."),(0,esm.kt)("h3",null,"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",null,"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Pagination } from "@lokalise/louis";\n\nexport default () => (\n    <Pagination\n        total={100}\n        offset={0}\n        limit={25}\n        onPaginationChange={([pageNo, limit]) => ...}\n    />\n)\n')),(0,esm.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29260",target:"_blank"},"Figma Source File | Pagination"))),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{of:Pagination,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Pagination",args:{offset:0,limit:25,total:100},mdxType:"Story"},Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const pagination=Template.bind({});pagination.storyName="Pagination",pagination.args={offset:0,limit:25,total:100},pagination.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  return <Pagination {...args} onPaginationChange={([pageNo, limit]) => {\n    updateArgs({\n      offset: (pageNo - 1) * limit,\n      total: 100,\n      limit\n    });\n  }} />;\n}"}};const componentMeta={title:"Components/Pagination",parameters:{controls:{sort:"requiredFirst"}},component:Pagination,includeStories:["pagination"]},mdxStoryNameToKey={Pagination:"pagination"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Pagination_stories=componentMeta,__namedExportsOrder=["Template","pagination"]}}]);
//# sourceMappingURL=components-Pagination-Pagination-stories-mdx.a477a694.iframe.bundle.js.map