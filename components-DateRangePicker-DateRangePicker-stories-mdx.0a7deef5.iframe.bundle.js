"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[4811],{"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),LoadingSign=__webpack_require__("./src/foundations/icons/LoadingSign/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),color=__webpack_require__("./src/utils/theme/color.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts"),variants=__webpack_require__("./src/utils/theme/variants.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),transitionTime=__webpack_require__("./src/utils/theme/transitionTime.ts"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const appearanceToColorCode=appearance=>({default:"primary",primary:"primary",danger:"red",warning:"yellow"}[appearance]),getOutlineStyles=function(colorType,appearance){let transparent=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("default"===appearance)return styled_components_browser_esm.iv`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react.forwardRef)(((_ref,ref)=>{let{size="md",variant="solid",type="button",appearance="default",loading=!1,active=!1,children,leftIcon,rightIcon,...rest}=_ref;return(0,jsx_runtime.jsxs)(Container,{ref,type:rest.href?void 0:type,size,variant,appearance,isLoading:loading,active,...rest,disabled:"disabled"in rest&&rest.disabled||loading,"aria-expanded":active,children:[(0,jsx_runtime.jsxs)(Content,{isHidden:loading,size,children:[leftIcon,(0,jsx_runtime.jsx)(Text,{size,children}),rightIcon]}),loading&&(0,jsx_runtime.jsx)(StyledLoadingSign,{"aria-busy":"true","aria-live":"polite",ariaLabel:"Loading"})]})}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"md"},description:"Changes button scale in padding and font size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},appearance:{defaultValue:{value:"default"},description:"Changes the button appearance.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"warning"'},{value:'"danger"'}]}},variant:{defaultValue:{value:"solid"},description:"Enables the outline style for the button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"outline"'}]}},disabled:{defaultValue:null,description:"Toggles disabled state of the button.",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading icon within the button.",name:"loading",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"Toggles the active state of the button.",name:"active",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"Enables the type attribute for the button.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},leftIcon:{defaultValue:null,description:"Renders an icon on the left side of the button through a provided child element.",name:"leftIcon",required:!1,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"Renders an icon on the right side of the button through a provided child element.",name:"rightIcon",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the button.",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DateRangePicker/DateRangePicker.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DateRangePicker_stories,defaultStory:()=>defaultStory,preselectedDateRange:()=>preselectedDateRange,withError:()=>withError});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),hooks=__webpack_require__("./node_modules/@storybook/addons/dist/esm/hooks.js"),Calendar=__webpack_require__("./src/foundations/icons/Calendar.tsx"),useErrorId=__webpack_require__("./src/utils/hooks/useErrorId.ts"),styles=__webpack_require__("./src/components/DatePicker/styles.ts"),react_day_picker_min=__webpack_require__("./node_modules/react-day-picker/lib/react-day-picker.min.js"),InlineDatePicker=__webpack_require__("./src/components/InlineDatePicker/InlineDatePicker.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const isSelectingFirstDay=(from,to,day)=>{const isBeforeFirstDay=from&&react_day_picker_min.DateUtils.isDayBefore(day,from);return!from||isBeforeFirstDay||from&&to},InlineDateRangePicker=_ref=>{let{value,onDayClick,onDayMouseEnter,onDayMouseLeave,onChange,...rest}=_ref;const[{from,to},setInternalValue]=(0,react.useState)(value),[enteredTo,setEnteredTo]=(0,react.useState)(value.to);(0,react.useEffect)((()=>{setInternalValue(value),setEnteredTo(value.to)}),[value.from,value.to]);return(0,jsx_runtime.jsx)(InlineDatePicker.k,{selectedDays:[from,{from,to:enteredTo}],modifiers:{start:from,end:enteredTo},onDayClick:(day,modifiers,e)=>{if(onDayClick&&onDayClick(day,modifiers,e),!modifiers.disabled){if(from&&to&&day>=from&&day<=to)return setInternalValue({from:void 0,to:void 0}),void setEnteredTo(void 0);if(isSelectingFirstDay(from,to,day))return setInternalValue({from:day,to:void 0}),void setEnteredTo(void 0);setInternalValue((previousValue=>({...previousValue,to:day}))),setEnteredTo(day),void 0!==from&&void 0!==day&&onChange({from,to:day})}},onDayMouseEnter:(day,modifiers,e)=>{onDayMouseEnter&&onDayMouseEnter(day,modifiers,e),isSelectingFirstDay(from,to,day)||setEnteredTo(day)},onDayMouseLeave:(day,modifiers,e)=>{onDayMouseLeave&&onDayMouseLeave(day,modifiers,e),to||setEnteredTo(void 0)},enableOutsideDaysClick:!1,rangeSelectable:!0,...rest})};InlineDateRangePicker.displayName="InlineDateRangePicker";try{InlineDateRangePicker.displayName="InlineDateRangePicker",InlineDateRangePicker.__docgenInfo={description:"",displayName:"InlineDateRangePicker",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Value"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: Required<Value>) => void"}},rangeSelectable:{defaultValue:null,description:"",name:"rangeSelectable",required:!1,type:{name:"boolean"}},disablePast:{defaultValue:null,description:"",name:"disablePast",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InlineDatePicker/InlineDateRangePicker/InlineDateRangePicker.tsx#InlineDateRangePicker"]={docgenInfo:InlineDateRangePicker.__docgenInfo,name:"InlineDateRangePicker",path:"src/components/InlineDatePicker/InlineDateRangePicker/InlineDateRangePicker.tsx#InlineDateRangePicker"})}catch(__react_docgen_typescript_loader_error){}var InputErrorMessage=__webpack_require__("./src/components/InputErrorMessage/InputErrorMessage.tsx"),Popover=__webpack_require__("./src/components/Popover/Popover.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacing=__webpack_require__("./src/utils/theme/spacing.ts");const Container=styled_components_browser_esm.ZP.div`
    display: grid;
    gap: ${(0,spacing.W)(2)};
`,periodLabelMap={custom:"",today:"Today",yesterday:"Yesterday",last7Days:"Last 7 days",last30Days:"Last 30 days",lastMonth:"Last Month",thisMonth:"This Month",thisWeek:"This Week",lastWeek:"Last Week"},PeriodButtons=_ref=>{let{periods,onChange}=_ref;return(0,jsx_runtime.jsx)(Container,{children:periods.filter((period=>"custom"!==period)).map((period=>(0,jsx_runtime.jsx)(Button.z,{appearance:"primary",variant:"outline",size:"sm",onClick:()=>onChange(period),children:periodLabelMap[period]},period)))})};PeriodButtons.displayName="PeriodButtons";try{PeriodButtons.displayName="PeriodButtons",PeriodButtons.__docgenInfo={description:"",displayName:"PeriodButtons",props:{periods:{defaultValue:null,description:"",name:"periods",required:!0,type:{name:'readonly ("custom" | "today" | "yesterday" | "last7Days" | "last30Days" | "lastWeek" | "thisWeek" | "lastMonth" | "thisMonth")[]'}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:'(value: "custom" | "today" | "yesterday" | "last7Days" | "last30Days" | "lastWeek" | "thisWeek" | "lastMonth" | "thisMonth") => void'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateRangePicker/PeriodButtons/PeriodButtons.tsx#PeriodButtons"]={docgenInfo:PeriodButtons.__docgenInfo,name:"PeriodButtons",path:"src/components/DateRangePicker/PeriodButtons/PeriodButtons.tsx#PeriodButtons"})}catch(__react_docgen_typescript_loader_error){}var add=__webpack_require__("./node_modules/date-fns/esm/add/index.js"),startOfDay=__webpack_require__("./node_modules/date-fns/esm/startOfDay/index.js"),sub=__webpack_require__("./node_modules/date-fns/esm/sub/index.js"),startOfWeek=__webpack_require__("./node_modules/date-fns/esm/startOfWeek/index.js"),subWeeks=__webpack_require__("./node_modules/date-fns/esm/subWeeks/index.js"),endOfWeek=__webpack_require__("./node_modules/date-fns/esm/endOfWeek/index.js"),startOfMonth=__webpack_require__("./node_modules/date-fns/esm/startOfMonth/index.js"),subMonths=__webpack_require__("./node_modules/date-fns/esm/subMonths/index.js"),endOfMonth=__webpack_require__("./node_modules/date-fns/esm/endOfMonth/index.js");const middleOfDay=date=>(0,add.Z)((0,startOfDay.Z)(date),{hours:12}),periodFunctions={custom:()=>{},today:()=>{const currentDate=new Date;return{from:middleOfDay(currentDate),to:middleOfDay(currentDate)}},yesterday:()=>{const currentDate=new Date;return{from:(0,sub.Z)(middleOfDay(currentDate),{days:1}),to:(0,sub.Z)(middleOfDay(currentDate),{days:1})}},last7Days:()=>{const currentDate=new Date;return{from:(0,sub.Z)(middleOfDay(currentDate),{days:7}),to:middleOfDay(currentDate)}},last30Days:()=>{const currentDate=new Date;return{from:(0,sub.Z)(middleOfDay(currentDate),{days:30}),to:middleOfDay(currentDate)}},thisWeek:()=>{const currentDate=new Date;return{from:middleOfDay((0,startOfWeek.Z)(currentDate,{weekStartsOn:1})),to:middleOfDay(currentDate)}},lastWeek:()=>{const currentDate=new Date;return{from:middleOfDay((0,subWeeks.Z)((0,startOfWeek.Z)(currentDate,{weekStartsOn:1}),1)),to:middleOfDay((0,subWeeks.Z)((0,endOfWeek.Z)(currentDate,{weekStartsOn:1}),1))}},thisMonth:()=>{const currentDate=new Date;return{from:middleOfDay((0,startOfMonth.Z)(currentDate)),to:middleOfDay(currentDate)}},lastMonth:()=>{const currentDate=new Date;return{from:middleOfDay((0,startOfMonth.Z)((0,subMonths.Z)(currentDate,1))),to:middleOfDay((0,endOfMonth.Z)((0,subMonths.Z)(currentDate,1)))}}},ButtonWrap=styled_components_browser_esm.ZP.div`
    margin-top: ${(0,spacing.W)(10)};
`,DrawerContent=styled_components_browser_esm.ZP.div`
    margin: ${(0,spacing.W)(4)};
`;var useLocalisation=__webpack_require__("./src/utils/hooks/useLocalisation.ts");const periodLabelMap_periodLabelMap={custom:"",today:"Today",yesterday:"Yesterday",last7Days:"Last 7 days",last30Days:"Last 30 days",lastMonth:"Last Month",thisMonth:"This Month",thisWeek:"This Week",lastWeek:"Last Week"},DateRangePicker=(new Date,new Date,_ref=>{let{name,value,periods,error,onChange,inPortal=!1}=_ref;const[opened,setOpened]=(0,react.useState)(!1),[period,setPeriod]=(0,react.useState)("custom"),changeHandler=(val,per,setVisible)=>{setPeriod(per),onChange(val),setOpened(!1),setVisible(!1)},label=((period,value)=>{const{formatDate}=(0,useLocalisation.G)();return value?"custom"!==period?periodLabelMap_periodLabelMap[period]:`${formatDate(value.from,"PP")} - ${formatDate(value.to,"PP")}`:"Select dates..."})(period,value),errorId=(0,useErrorId.P)();return(0,jsx_runtime.jsx)(Popover.J,{placement:"bottom-start",offset:1,inPortal,visibleCallback:setOpened,popoverContent:setVisible=>(0,jsx_runtime.jsxs)(DrawerContent,{role:"dialog",tabIndex:0,children:[(0,jsx_runtime.jsx)(InlineDateRangePicker,{value:value||{from:void 0,to:void 0},onChange:newValue=>changeHandler(newValue,"custom",setVisible)}),!!periods?.length&&(0,jsx_runtime.jsx)(ButtonWrap,{children:(0,jsx_runtime.jsx)(PeriodButtons,{periods,onChange:newPeriod=>{const newValue=periodFunctions[newPeriod]();void 0!==newValue&&changeHandler(newValue,newPeriod,setVisible)}})})]}),children:(0,jsx_runtime.jsxs)(styles.W2,{children:[(0,jsx_runtime.jsxs)(styles.L9,{name,"aria-label":"Select Date",opened,children:[(0,jsx_runtime.jsx)(styles.sJ,{children:value?label:(0,jsx_runtime.jsx)(styles.Vm,{children:"Select date range..."})}),(0,jsx_runtime.jsx)(styles.a1,{children:(0,jsx_runtime.jsx)(Calendar.f,{size:"17px"})})]}),!!error&&"boolean"!=typeof error&&(0,jsx_runtime.jsx)(InputErrorMessage.f,{id:errorId,children:error})]})})});DateRangePicker.displayName="DateRangePicker";try{DateRangePicker.displayName="DateRangePicker",DateRangePicker.__docgenInfo={description:"",displayName:"DateRangePicker",props:{name:{defaultValue:null,description:"Sets the `name` attribute of the DatePicker button element.",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Sets a preselected date range in the input field.",name:"value",required:!1,type:{name:"{ from: Date; to: Date; }"}},periods:{defaultValue:null,description:"Enables the quick select buttons in the DateRangePicker.",name:"periods",required:!1,type:{name:'("custom" | "today" | "yesterday" | "last7Days" | "last30Days" | "lastWeek" | "thisWeek" | "lastMonth" | "thisMonth")[]'}},onChange:{defaultValue:null,description:"Function executed when a date range is selected.",name:"onChange",required:!0,type:{name:"(value: { from: Date; to: Date; }) => void"}},error:{defaultValue:null,description:"Renders a form validation `InputErrorMessage` when passed as `string | string[]`.",name:"error",required:!1,type:{name:"string | boolean | string[]"}},inPortal:{defaultValue:{value:"false"},description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the DateRangePicker popover.",name:"inPortal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateRangePicker/DateRangePicker.tsx#DateRangePicker"]={docgenInfo:DateRangePicker.__docgenInfo,name:"DateRangePicker",path:"src/components/DateRangePicker/DateRangePicker.tsx#DateRangePicker"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>{const{onChange,...rest}=args,[_,updateArgs]=(0,hooks.D8)();return(0,esm.kt)(DateRangePicker,_extends({onChange:selectedDate=>updateArgs({value:selectedDate})},rest,{mdxType:"DateRangePicker"}))};Template.displayName="Template";const layoutProps={Template};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/DateRangePicker",component:DateRangePicker,parameters:{controls:{sort:"requiredFirst"}},argTypes:{value:{control:{type:"object"}},error:{control:{type:"text"}}},mdxType:"Meta"}),(0,esm.kt)("h1",null,"DateRangePicker"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"DateRangePicker is used to select a date range from a calendar."),(0,esm.kt)("p",null,"DateRangePicker depends on:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{href:"https://react-day-picker-v7.netlify.app/docs/getting-started/",target:"_blank"},"react-day-picker")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{href:"https://github.com/date-fns/date-fns",target:"_blank"},"date-fns"))),(0,esm.kt)("h3",null,"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",null,"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { DateRangePicker } from '@lokalise/louis';\n\nexport default () => {\n    const [dateRange, setDateRange] = useState({ from: new Date('2021-05-15'), to: new Date('2021-05-27') });\n    return (\n        <DateRangePicker\n            value={dateRange}\n            periods={[\n                'today',\n                'yesterday',\n                'last7Days',\n                'last30Days',\n                'lastWeek',\n                'thisWeek',\n                'lastMonth',\n                'thisMonth',\n            ]}\n            onChange={setDateRange}\n        />\n    );\n};\n")),(0,esm.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4032%3A28124",target:"_blank"},"Figma Source File | DateRangePicker"))),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{of:DateRangePicker,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)("p",null,(0,esm.kt)("em",{parentName:"p"},"Note: all examples use ",(0,esm.kt)("inlineCode",{parentName:"em"},"inPortal = true")," to ensure they display properly in Storybook, only use this prop when needed.")),(0,esm.kt)("h3",null,"Default"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Default",args:{periods:["today","yesterday","last7Days","last30Days","lastWeek","thisWeek","lastMonth","thisMonth"],inPortal:!0},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",null,"Preselected Date Range"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Preselected Date Range",args:{value:{from:new Date("2021-05-15"),to:new Date("2021-05-27")},periods:["today","yesterday","last7Days","last30Days","lastWeek","thisWeek","lastMonth","thisMonth"],inPortal:!0},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",null,"With Error"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"With Error",args:{error:"Please select a valid date range.",periods:["today","yesterday","last7Days","last30Days","lastWeek","thisWeek","lastMonth","thisMonth"],inPortal:!0},mdxType:"Story"},Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={periods:["today","yesterday","last7Days","last30Days","lastWeek","thisWeek","lastMonth","thisMonth"],inPortal:!0},defaultStory.parameters={storySource:{source:"args => {\n  const {\n    onChange,\n    ...rest\n  } = args;\n  const [_, updateArgs] = useArgs(); // using Storybook useArgs instead of react useState to enable date controls in playground\n\n  const handleChange = selectedDate => updateArgs({\n    value: selectedDate\n  });\n\n  return <DateRangePicker onChange={handleChange} {...rest} />;\n}"}};const preselectedDateRange=Template.bind({});preselectedDateRange.storyName="Preselected Date Range",preselectedDateRange.args={value:{from:new Date("2021-05-15"),to:new Date("2021-05-27")},periods:["today","yesterday","last7Days","last30Days","lastWeek","thisWeek","lastMonth","thisMonth"],inPortal:!0},preselectedDateRange.parameters={storySource:{source:"args => {\n  const {\n    onChange,\n    ...rest\n  } = args;\n  const [_, updateArgs] = useArgs(); // using Storybook useArgs instead of react useState to enable date controls in playground\n\n  const handleChange = selectedDate => updateArgs({\n    value: selectedDate\n  });\n\n  return <DateRangePicker onChange={handleChange} {...rest} />;\n}"}};const withError=Template.bind({});withError.storyName="With Error",withError.args={error:"Please select a valid date range.",periods:["today","yesterday","last7Days","last30Days","lastWeek","thisWeek","lastMonth","thisMonth"],inPortal:!0},withError.parameters={storySource:{source:"args => {\n  const {\n    onChange,\n    ...rest\n  } = args;\n  const [_, updateArgs] = useArgs(); // using Storybook useArgs instead of react useState to enable date controls in playground\n\n  const handleChange = selectedDate => updateArgs({\n    value: selectedDate\n  });\n\n  return <DateRangePicker onChange={handleChange} {...rest} />;\n}"}};const componentMeta={title:"Components/DateRangePicker",parameters:{controls:{sort:"requiredFirst"}},component:DateRangePicker,argTypes:{value:{control:{type:"object"}},error:{control:{type:"text"}}},includeStories:["defaultStory","preselectedDateRange","withError"]},mdxStoryNameToKey={Default:"defaultStory","Preselected Date Range":"preselectedDateRange","With Error":"withError"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const DateRangePicker_stories=componentMeta,__namedExportsOrder=["Template","defaultStory","preselectedDateRange","withError"]}}]);
//# sourceMappingURL=components-DateRangePicker-DateRangePicker-stories-mdx.0a7deef5.iframe.bundle.js.map