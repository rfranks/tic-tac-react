(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{289:function(module,exports,__webpack_require__){__webpack_require__(290),__webpack_require__(440),__webpack_require__(441),module.exports=__webpack_require__(442)},356:function(module,exports){},441:function(module,exports){},442:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(287);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(628)],module)}.call(this,__webpack_require__(443)(module))},628:function(module,exports,__webpack_require__){var map={"./components/Board/Board.stories.js":629,"./components/Square/Square.stories.js":654};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=628},629:function(module,exports){},653:function(module,exports,__webpack_require__){},654:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"basicSquare",(function(){return basicSquare}));var react=__webpack_require__(53),react_default=__webpack_require__.n(react),dist=__webpack_require__(91),addon_actions_dist=__webpack_require__(288),Square_Square_Square=(__webpack_require__(653),function Square(_ref){var onSquareClick=_ref.onSquareClick,player=_ref.player,position=_ref.position,_ref$winning=_ref.winning,classes=["square",void 0!==_ref$winning&&_ref$winning?"square--winner":""].join(" ");return react_default.a.createElement("button",{type:"button",className:classes,onClick:function handleSquareClick(evt){if(null!=player)evt&&evt.preventDefault();else if(onSquareClick(position),evt){var classList=evt.target.classList;classList.remove("flipInY"),setTimeout((function updateClasses(){classList.add("flipInY")}),0)}}},player)});Square_Square_Square.defaultProps={player:null},Square_Square_Square.__docgenInfo={description:'Component for showing details of the user.\n\n@component\n@example\nreturn (\n  <Square player="X" position={0} winning={false} onSquareClick={(position)=>console.log(position)} />\n)',methods:[],displayName:"Square",props:{winning:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},player:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},onSquareClick:{type:{name:"func"},required:!0,description:""},position:{type:{name:"number"},required:!0,description:""}}};var components_Square_Square=Square_Square_Square;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Square/Square.js"]={name:"Square",docgenInfo:Square_Square_Square.__docgenInfo,path:"src/components/Square/Square.js"});__webpack_require__(284).withSource;var addSourceDecorator=__webpack_require__(284).addSource,basicSquare=(__webpack_exports__.default={title:"Square",component:components_Square_Square,decorators:[dist.withKnobs],parameters:{storySource:{source:"import React from 'react';\nimport {withKnobs, text, boolean, number} from '@storybook/addon-knobs';\nimport {action} from '@storybook/addon-actions';\n\nimport Square from './Square';\n\nimport intro from './docs/intro.md';\nimport square from './docs/square.md';\n\nexport default {\n  title: 'Square',\n  component: Square,\n  decorators: [withKnobs],\n  parameters: {\n    notes: {Introduction: intro, Square: square},\n  },\n};\n\nexport const basicSquare = () => (\n  <Square\n    position={number('Position', 0, {\n      range: true,\n      min: 0,\n      max: 8,\n      step: 1,\n    })}\n    player={text('Player', 'X')}\n    winning={boolean('Winning', false)}\n    onSquareClick={action('clicked')}\n  />\n);\n",locationsMap:{"square--basic-square":{startLoc:{col:27,line:19},endLoc:{col:1,line:31},startBody:{col:27,line:19},endBody:{col:1,line:31}}}},notes:{Introduction:"# Introduction\n\nHere is some markdown.\n",Square:"# `<Square />` Component\n"}}},addSourceDecorator((function(){return react_default.a.createElement(components_Square_Square,{position:Object(dist.number)("Position",0,{range:!0,min:0,max:8,step:1}),player:Object(dist.text)("Player","X"),winning:Object(dist.boolean)("Winning",!1),onSquareClick:Object(addon_actions_dist.action)("clicked")})}),{__STORY__:"import React from 'react';\nimport {withKnobs, text, boolean, number} from '@storybook/addon-knobs';\nimport {action} from '@storybook/addon-actions';\n\nimport Square from './Square';\n\nimport intro from './docs/intro.md';\nimport square from './docs/square.md';\n\nexport default {\n  title: 'Square',\n  component: Square,\n  decorators: [withKnobs],\n  parameters: {\n    notes: {Introduction: intro, Square: square},\n  },\n};\n\nexport const basicSquare = () => (\n  <Square\n    position={number('Position', 0, {\n      range: true,\n      min: 0,\n      max: 8,\n      step: 1,\n    })}\n    player={text('Player', 'X')}\n    winning={boolean('Winning', false)}\n    onSquareClick={action('clicked')}\n  />\n);\n",__ADDS_MAP__:{"square--basic-square":{startLoc:{col:27,line:19},endLoc:{col:1,line:31},startBody:{col:27,line:19},endBody:{col:1,line:31}}},__MAIN_FILE_LOCATION__:"/Square.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/Users/rfranks/Developer/Code/tic-tac-react/src/components/Square",__IDS_TO_FRAMEWORKS__:{}}))}},[[289,1,2]]]);
//# sourceMappingURL=main.ce167c7d9b4b5b3da8c0.bundle.js.map