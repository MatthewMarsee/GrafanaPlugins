define(["@grafana/data","@grafana/ui","emotion","react"], (__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./SimplePanel.tsx":
/*!*************************!*\
  !*** ./SimplePanel.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimplePanel": () => (/* binding */ SimplePanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var SimplePanel = function SimplePanel(_ref) {
  var options = _ref.options,
      data = _ref.data,
      width = _ref.width,
      height = _ref.height;
  var theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  var styles = getStyles();
  var color;

  switch (options.color) {
    case 'red':
      color = theme.palette.redBase;
      break;

    case 'green':
      color = theme.palette.greenBase;
      break;

    case 'blue':
      color = theme.palette.blue95;
      break;
  }

  function clik(stn) {
    //var c = document.getElementById('c1')!
    //c.setAttribute("r","70")
    //c.setAttribute("style","{fill:theme.palette.greenBase}")
    window.open("https://rno-g.uchicago.edu:3000/d/jRXkmFZ4k/variable-test?orgId=1&var-station=" + stn, "windowname", 'width=450,height=600,scrollbars=yes');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,emotion__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.wrapper, (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n          width: ", "px;\n          height: ", "px;\n        "])), width, height))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: styles.svg,
    width: width,
    height: height,
    viewBox: "-".concat(width / 2, " -").concat(height / 2, " ").concat(width, " ").concat(height)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-297",
    cy: "120",
    style: {
      fill: color
    },
    r: 20,
    id: 'c1',
    onClick: function onClick() {
      return clik("11");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-297",
    y: "120",
    textAnchor: "middle"
  }, "1-1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-278",
    cy: "80",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("12");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-278",
    y: "80",
    textAnchor: "middle"
  }, "1-2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-259",
    cy: "40",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("13");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-259",
    y: "40",
    textAnchor: "middle"
  }, "1-3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-240",
    cy: "0",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("14");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-240",
    y: "0",
    textAnchor: "middle"
  }, "1-4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-221",
    cy: "-40",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("15");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-221",
    y: "-40",
    textAnchor: "middle"
  }, "1-5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-202",
    cy: "-80",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("16");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-202",
    y: "-80",
    textAnchor: "middle"
  }, "1-6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-183",
    cy: "-120",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("17");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-183",
    y: "-120",
    textAnchor: "middle"
  }, "1-7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-217",
    cy: "120",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("21");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-217",
    y: "120",
    textAnchor: "middle"
  }, "2-1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-198",
    cy: "80",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("22");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-198",
    y: "80",
    textAnchor: "middle"
  }, "2-2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-179",
    cy: "40",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("23");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-179",
    y: "40",
    textAnchor: "middle"
  }, "2-3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-160",
    cy: "0",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("24");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-160",
    y: "0",
    textAnchor: "middle"
  }, "2-4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-141",
    cy: "-40",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("25");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-141",
    y: "-40",
    textAnchor: "middle"
  }, "2-5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-122",
    cy: "-80",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("26");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-122",
    y: "-80",
    textAnchor: "middle"
  }, "2-6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-103",
    cy: "-120",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("27");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-103",
    y: "-120",
    textAnchor: "middle"
  }, "2-7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-99",
    cy: "40",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("33");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-99",
    y: "40",
    textAnchor: "middle"
  }, "3-3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-80",
    cy: "0",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("34");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-80",
    y: "0",
    textAnchor: "middle"
  }, "3-4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-61",
    cy: "-40",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("35");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-61",
    y: "-40",
    textAnchor: "middle"
  }, "3-5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-42",
    cy: "-80",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("36");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-42",
    y: "-80",
    textAnchor: "middle"
  }, "3-6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "-23",
    cy: "-120",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("37");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "-23",
    y: "-120",
    textAnchor: "middle"
  }, "3-7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "0",
    cy: "0",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("44");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "0",
    y: "0",
    textAnchor: "middle"
  }, "4-4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "19",
    cy: "-40",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("45");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "19",
    y: "-40",
    textAnchor: "middle"
  }, "4-5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "38",
    cy: "-80",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("46");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "38",
    y: "-80",
    textAnchor: "middle"
  }, "4-6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "57",
    cy: "-120",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("47");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "57",
    y: "-120",
    textAnchor: "middle"
  }, "4-7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "80",
    cy: "0",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("54");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "80",
    y: "0",
    textAnchor: "middle"
  }, "5-4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "99",
    cy: "-40",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("55");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "99",
    y: "-40",
    textAnchor: "middle"
  }, "5-5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "118",
    cy: "-80",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("56");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "118",
    y: "-80",
    textAnchor: "middle"
  }, "5-6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "137",
    cy: "-120",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("57");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "137",
    y: "-120",
    textAnchor: "middle"
  }, "5-7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "160",
    cy: "0",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("64");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "160",
    y: "0",
    textAnchor: "middle"
  }, "6-4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "179",
    cy: "-40",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("65");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "179",
    y: "-40",
    textAnchor: "middle"
  }, "6-5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "198",
    cy: "-80",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("66");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "198",
    y: "-80",
    textAnchor: "middle"
  }, "6-6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "217",
    cy: "-120",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("67");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "217",
    y: "-120",
    textAnchor: "middle"
  }, "6-7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "240",
    cy: "0",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("74");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "240",
    y: "0",
    textAnchor: "middle"
  }, "7-4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "259",
    cy: "-40",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("75");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "259",
    y: "-40",
    textAnchor: "middle"
  }, "7-5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "278",
    cy: "-80",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("76");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "278",
    y: "-80",
    textAnchor: "middle"
  }, "7-6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "297",
    cy: "-120",
    style: {
      fill: color
    },
    r: 20,
    onClick: function onClick() {
      return clik("77");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
    style: {
      fontSize: 10
    },
    x: "297",
    y: "-120",
    textAnchor: "middle"
  }, "7-7"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: styles.textBox
  }, options.showSeriesCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n              font-size: ", ";\n            "])), theme.typography.size[options.seriesCountSize])
  }, "Number of series: ", data.series.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Text option value: ", options.text)));
};
var getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.stylesFactory)(function () {
  return {
    wrapper: (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      position: relative;\n    "]))),
    svg: (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),
    textBox: (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "])))
  };
});

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SimplePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimplePanel */ "./SimplePanel.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_SimplePanel__WEBPACK_IMPORTED_MODULE_1__.SimplePanel).setPanelOptions(function (builder) {
  return builder.addTextInput({
    path: 'text',
    name: 'Simple text option',
    description: 'Description of panel option',
    defaultValue: 'Default value of text input option'
  }).addBooleanSwitch({
    path: 'showSeriesCount',
    name: 'Show series counter',
    defaultValue: false
  }).addRadio({
    path: 'seriesCountSize',
    defaultValue: 'sm',
    name: 'Series counter size',
    settings: {
      options: [{
        value: 'sm',
        label: 'Small'
      }, {
        value: 'md',
        label: 'Medium'
      }, {
        value: 'lg',
        label: 'Large'
      }]
    },
    showIf: function showIf(config) {
      return config.showSeriesCount;
    }
  }).addRadio({
    path: 'color',
    name: 'Circle Color',
    defaultValue: 'green',
    settings: {
      options: [{
        value: 'green',
        label: 'Green'
      }, {
        value: 'red',
        label: 'Red'
      }, {
        value: 'blue',
        label: 'Blue'
      }]
    }
  });
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=module.js.map