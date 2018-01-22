webpackJsonp([0],{

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    AuthEndpoint: "https://foodnetwebapi2.azurewebsites.net/",
    AuthSecret: "secret",
    HttpsEndpoint: "https://foodnetwebapi2.azurewebsites.net/api"
};
exports.default = config;


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var material_ui_1 = __webpack_require__(54);
var uuidjs_1 = __webpack_require__(296);
var httpsClient_1 = __webpack_require__(78);
var NewProductDialog = (function (_super) {
    __extends(NewProductDialog, _super);
    function NewProductDialog(props) {
        var _this = _super.call(this, props) || this;
        _this.addNewProduct = function () { return __awaiter(_this, void 0, void 0, function () {
            var newProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newProduct = {
                            id: uuidjs_1.generate(),
                            name: this.state.name,
                            description: this.state.description,
                            categoryId: this.state.category.id,
                        };
                        return [4, httpsClient_1.httpClient.executeRequest("PUT", "/products", newProduct)];
                    case 1:
                        _a.sent();
                        this.props.refetchProducts();
                        return [2];
                }
            });
        }); };
        _this.fetchCategories = function () { return __awaiter(_this, void 0, void 0, function () {
            var categories;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, httpsClient_1.httpClient.executeRequest("GET", "/products/categories", {})];
                    case 1:
                        categories = _a.sent();
                        this.setState({ categories: categories });
                        return [2];
                }
            });
        }); };
        _this.state = {
            name: "",
            description: "",
            categories: []
        };
        return _this;
    }
    NewProductDialog.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: { display: "flex", flexFlow: "column" } },
            React.createElement(material_ui_1.TextField, { value: this.state.name, floatingLabelText: "Name", onChange: function (_, name) { return _this.setState({ name: name }); }, style: { margin: "15px" } }),
            React.createElement(material_ui_1.TextField, { value: this.state.description, floatingLabelText: "Description", onChange: function (_, description) { return _this.setState({ description: description }); }, style: { margin: "15px" } }),
            React.createElement("div", { style: { margin: "15px", display: "flex", alignItems: "center" } },
                React.createElement("div", null, " Category : "),
                React.createElement(material_ui_1.DropDownMenu, { value: this.state.category, onChange: function (e, k, category) { return _this.setState({ category: category }); } }, this.state.categories.map(function (category) {
                    return React.createElement(material_ui_1.MenuItem, { value: category, primaryText: category.name });
                }))),
            React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } },
                React.createElement(material_ui_1.RaisedButton, { primary: true, label: "Cancel", onClick: function () { return _this.props.handleNewProductDialog(false); }, style: { width: "100px" } }),
                React.createElement(material_ui_1.RaisedButton, { primary: true, label: "Add", onClick: function () { _this.addNewProduct(); _this.props.handleNewProductDialog(false); }, style: { width: "100px" } }))));
    };
    NewProductDialog.prototype.componentDidMount = function () {
        this.fetchCategories();
    };
    return NewProductDialog;
}(React.Component));
exports.NewProductDialog = NewProductDialog;


/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(334);
module.exports = __webpack_require__(335);


/***/ }),

/***/ 334:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(19);
var App_1 = __webpack_require__(435);
var react_router_dom_1 = __webpack_require__(69);
var styles_1 = __webpack_require__(768);
var colors_1 = __webpack_require__(50);
var injectTapEventPlugin = __webpack_require__(771);
injectTapEventPlugin();
var theme = {
    palette: {
        primary1Color: colors_1.blue500,
        primary2Color: colors_1.blue500,
        primary3Color: colors_1.blue500,
    }
};
var muiTheme = styles_1.getMuiTheme(theme);
var app = React.createElement(styles_1.MuiThemeProvider, { muiTheme: muiTheme },
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(App_1.App, null)));
var render = function () { return ReactDOM.render(app, document.getElementById("root")); };
render();
if (false) {
    module.hot.accept();
}


/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var react_router_dom_1 = __webpack_require__(69);
var routes = __webpack_require__(70);
var LoginPage_1 = __webpack_require__(463);
var SignUpPage_1 = __webpack_require__(683);
var FridgePage_1 = __webpack_require__(684);
var RecipesPage_1 = __webpack_require__(764);
var NotFoundPage_1 = __webpack_require__(767);
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: routes.LoginPage, component: LoginPage_1.LoginPage }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: routes.SignUpPage, component: SignUpPage_1.SignUpPage }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: routes.FridgePage, component: FridgePage_1.FridgePage }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: routes.RecipesPage, render: function () { return React.createElement(RecipesPage_1.RecipesPage, { isInResultMode: false }); } }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: routes.ResultRecipesPage, render: function () { return React.createElement(RecipesPage_1.RecipesPage, { isInResultMode: true }); } }),
            React.createElement(react_router_dom_1.Route, { path: "*", component: NotFoundPage_1.NotFoundPage }))));
    };
    return App;
}(React.Component));
exports.App = App;


/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var material_ui_1 = __webpack_require__(54);
var routes = __webpack_require__(70);
var react_router_dom_1 = __webpack_require__(69);
var config_1 = __webpack_require__(180);
var httpsClient_1 = __webpack_require__(78);
var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(props) {
        var _this = _super.call(this, props) || this;
        _this.clearError = function () { return _this.setState({ passwordError: "", usernameError: "" }); };
        _this.validate = function () {
            if (_this.state.username.length < 1) {
                _this.setState({ usernameError: "No username" });
                return false;
            }
            if (_this.state.password.length < 1) {
                _this.setState({ passwordError: "No password" });
                return false;
            }
            return true;
        };
        _this.tryLogin = function () { return __awaiter(_this, void 0, void 0, function () {
            var headers, params, request, result, tokenResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.clearError();
                        if (!this.validate())
                            return [2];
                        headers = new Headers();
                        headers.append("Content-Type", "application/x-www-form-urlencoded");
                        params = new URLSearchParams();
                        params.append("client_id", "foodnetClient");
                        params.append("grant_type", "password");
                        params.append("scope", "api");
                        params.append("username", this.state.username);
                        params.append("password", this.state.password);
                        request = {
                            method: "POST",
                            headers: headers,
                            body: params
                        };
                        return [4, fetch(config_1.default.AuthEndpoint + "/connect/token", request)];
                    case 1:
                        result = _a.sent();
                        if (!result.ok) return [3, 3];
                        return [4, result.json()];
                    case 2:
                        tokenResult = _a.sent();
                        httpsClient_1.httpClient.accessToken = tokenResult.access_token;
                        this.props.history.push(routes.FridgePage);
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        }); };
        _this.state = {
            username: "",
            password: "",
            usernameError: "",
            passwordError: "",
        };
        return _this;
    }
    LoginPage.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: { display: "flex", justifyContent: "center" } },
            React.createElement(material_ui_1.Card, { style: { width: "600px", marginTop: "200px" } },
                React.createElement("div", { style: { display: "flex", justifyContent: "center", flexFlow: "column", alignItems: "center", padding: "40px" } },
                    React.createElement("div", { style: { fontSize: "30px", fontWeight: "bold" } }, "FoodNET"),
                    React.createElement(material_ui_1.TextField, { floatingLabelText: "Username", value: this.state.username, onChange: function (_, username) { return _this.setState({ username: username }); }, errorText: this.state.usernameError }),
                    React.createElement("br", null),
                    React.createElement(material_ui_1.TextField, { floatingLabelText: "Password", type: "password", value: this.state.password, onChange: function (_, password) { return _this.setState({ password: password }); }, errorText: this.state.passwordError }),
                    React.createElement("br", null),
                    React.createElement("div", { style: { display: "flex", width: "50%", justifyContent: "space-around" } },
                        React.createElement(material_ui_1.RaisedButton, { primary: true, label: "LOGIN", onClick: this.tryLogin }),
                        React.createElement(react_router_dom_1.Link, { to: routes.SignUpPage },
                            React.createElement(material_ui_1.RaisedButton, { secondary: true, label: "SIGN UP" })))))));
    };
    return LoginPage;
}(React.Component));
exports.LoginPage = LoginPage;


/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var material_ui_1 = __webpack_require__(54);
var routes = __webpack_require__(70);
var httpsClient_1 = __webpack_require__(78);
var config_1 = __webpack_require__(180);
var SignUpPage = (function (_super) {
    __extends(SignUpPage, _super);
    function SignUpPage(props) {
        var _this = _super.call(this, props) || this;
        _this.validate = function () {
            if (_this.state.username === "") {
                _this.setState({ nameError: "Empty username" });
                return false;
            }
            if (_this.state.password.length < 6) {
                _this.setState({ passwordError: "Too short" });
                return false;
            }
            if (_this.state.password.search(/\d/) == -1) {
                _this.setState({ passwordError: "No number" });
                return false;
            }
            if (_this.state.password.search(/[a-zA-Z]/) == -1) {
                _this.setState({ passwordError: "No letter" });
                return false;
            }
            if (_this.state.password.search(/[A-Z]/) == -1) {
                _this.setState({ passwordError: "No capital letter" });
                return false;
            }
            if (_this.state.password.search(/[^A-Za-z0-9 ]/) == -1) {
                _this.setState({ passwordError: "No non aplhanumeric characters" });
                return false;
            }
            if (_this.state.password !== _this.state.passwordRep) {
                _this.setState({ passwordRepError: "Passwords must match" });
                return false;
            }
            var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailRegex.test(_this.state.email.toLowerCase())) {
                _this.setState({ emailError: "Wrong email" });
                return false;
            }
            if (_this.state.email !== _this.state.emailRep) {
                _this.setState({ emailRepError: "Emails must match" });
                return false;
            }
            return true;
        };
        _this.clearErrors = function () { return _this.setState({
            passwordError: "",
            passwordRepError: "",
            nameError: "",
            emailError: "",
            emailRepError: ""
        }); };
        _this.signUp = function () { return __awaiter(_this, void 0, void 0, function () {
            var result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = true;
                        this.clearErrors();
                        if (!this.validate()) return [3, 3];
                        data = void 0;
                        data = {
                            Email: this.state.email,
                            Password: this.state.password,
                            Name: this.state.username
                        };
                        return [4, httpsClient_1.httpClient.executeRequest("POST", "/account/signup", data)];
                    case 1:
                        _a.sent();
                        return [4, this.tryLogin()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        }); };
        _this.tryLogin = function () { return __awaiter(_this, void 0, void 0, function () {
            var headers, params, request, result, tokenResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new Headers();
                        headers.append("Content-Type", "application/x-www-form-urlencoded");
                        params = new URLSearchParams();
                        params.append("client_id", "foodnetClient");
                        params.append("grant_type", "password");
                        params.append("scope", "api");
                        params.append("username", this.state.username);
                        params.append("password", this.state.password);
                        request = {
                            method: "POST",
                            headers: headers,
                            body: params
                        };
                        return [4, fetch(config_1.default.AuthEndpoint + "/connect/token", request)];
                    case 1:
                        result = _a.sent();
                        if (!result.ok) return [3, 3];
                        return [4, result.json()];
                    case 2:
                        tokenResult = _a.sent();
                        httpsClient_1.httpClient.accessToken = tokenResult.access_token;
                        this.props.history.push(routes.FridgePage);
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        }); };
        _this.state = {
            username: "",
            nameError: "",
            password: "",
            passwordRep: "",
            passwordRepError: "",
            email: "",
            emailRep: "",
            emailRepError: "",
            passwordError: "",
            emailError: "",
        };
        return _this;
    }
    SignUpPage.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: { display: "flex", justifyContent: "center" } },
            React.createElement(material_ui_1.Card, { style: { width: "600px", marginTop: "200px" } },
                React.createElement("div", { style: { display: "flex", justifyContent: "center", flexFlow: "column", alignItems: "center", padding: "40px" } },
                    React.createElement("div", { style: { fontSize: "30px", fontWeight: "bold" } }, "FoodNET"),
                    React.createElement(material_ui_1.TextField, { errorText: this.state.nameError, value: this.state.username, floatingLabelText: "Username", onChange: function (_, username) { return _this.setState({ username: username }); } }),
                    React.createElement("br", null),
                    React.createElement(material_ui_1.TextField, { value: this.state.password, floatingLabelText: "Password", type: "password", errorText: this.state.passwordError, onChange: function (_, password) { return _this.setState({ password: password }); } }),
                    React.createElement("br", null),
                    React.createElement(material_ui_1.TextField, { errorText: this.state.passwordRepError, value: this.state.passwordRep, floatingLabelText: "Repeat Password", type: "password", onChange: function (_, passwordRep) { return _this.setState({ passwordRep: passwordRep }); } }),
                    React.createElement("br", null),
                    React.createElement(material_ui_1.TextField, { errorText: this.state.emailError, value: this.state.email, floatingLabelText: "E-mail", onChange: function (_, email) { return _this.setState({ email: email }); } }),
                    React.createElement("br", null),
                    React.createElement(material_ui_1.TextField, { errorText: this.state.emailRepError, value: this.state.emailRep, floatingLabelText: "Repeat E-mail", onChange: function (_, emailRep) { return _this.setState({ emailRep: emailRep }); } }),
                    React.createElement("br", null),
                    React.createElement(material_ui_1.RaisedButton, { primary: true, label: "SIGN UP", onClick: this.signUp })))));
    };
    return SignUpPage;
}(React.Component));
exports.SignUpPage = SignUpPage;


/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var material_ui_1 = __webpack_require__(54);
var routes = __webpack_require__(70);
var react_router_dom_1 = __webpack_require__(69);
var NewProductDialog_1 = __webpack_require__(295);
var httpsClient_1 = __webpack_require__(78);
var FridgePage = (function (_super) {
    __extends(FridgePage, _super);
    function FridgePage(props) {
        var _this = _super.call(this, props) || this;
        _this.dialogActions = [];
        _this.fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
            var categories, products, firstProducts, fridgeProducts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.fetchCategories()];
                    case 1:
                        categories = _a.sent();
                        return [4, this.fetchProducts()];
                    case 2:
                        products = _a.sent();
                        firstProducts = this.getProductsFromCategory(categories[0].id, products);
                        return [4, this.fetchFridgeProducts()];
                    case 3:
                        fridgeProducts = _a.sent();
                        this.setState({
                            categories: categories,
                            products: products,
                            productsFromCategory: firstProducts,
                            selectedCategoryId: categories[0].id,
                            fridgeProducts: fridgeProducts,
                        });
                        return [2];
                }
            });
        }); };
        _this.fetchCategories = function () { return __awaiter(_this, void 0, void 0, function () {
            var categories;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, httpsClient_1.httpClient.executeRequest("GET", "/products/categories", {})];
                    case 1:
                        categories = _a.sent();
                        return [2, categories];
                }
            });
        }); };
        _this.fetchProducts = function () { return __awaiter(_this, void 0, void 0, function () {
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, httpsClient_1.httpClient.executeRequest("GET", "/products", {})];
                    case 1:
                        products = _a.sent();
                        return [2, products];
                }
            });
        }); };
        _this.refetchProducts = function () { return __awaiter(_this, void 0, void 0, function () {
            var products, displayProducts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.fetchProducts()];
                    case 1:
                        products = _a.sent();
                        displayProducts = this.getProductsFromCategory(this.state.selectedCategoryId, products);
                        this.setState({ products: products, productsFromCategory: displayProducts });
                        return [2];
                }
            });
        }); };
        _this.getProductsFromCategory = function (categoryId, products) {
            if (products === undefined)
                return _this.state.products.filter(function (product) { return product.categoryId === categoryId; });
            else
                return products.filter(function (product) { return product.categoryId === categoryId; });
        };
        _this.fetchFridgeProducts = function () { return __awaiter(_this, void 0, void 0, function () {
            var fridgeProducts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, httpsClient_1.httpClient.executeRequest("GET", "/fridge/products", {})];
                    case 1:
                        fridgeProducts = _a.sent();
                        return [2, fridgeProducts];
                }
            });
        }); };
        _this.changeCategory = function (categoryId) {
            var actualProducts = _this.getProductsFromCategory(categoryId);
            _this.setState({
                productsFromCategory: actualProducts,
                selectedCategoryId: categoryId
            });
        };
        _this.productIsInFridge = function (product) { return -1 !== _this.state.fridgeProducts.findIndex(function (p) { return p.id == product.id; }); };
        _this.handleProductClick = function (event, isInputChecked, product) {
            if (isInputChecked)
                _this.AddProductToFridge(product);
            else
                _this.RemoveProductFromFridge(product);
        };
        _this.AddProductToFridge = function (product) { return __awaiter(_this, void 0, void 0, function () {
            var fridgeProducts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, httpsClient_1.httpClient.executeRequest("PUT", "/fridge", product.id)];
                    case 1:
                        _a.sent();
                        return [4, this.fetchFridgeProducts()];
                    case 2:
                        fridgeProducts = _a.sent();
                        this.setState({ fridgeProducts: fridgeProducts });
                        return [2];
                }
            });
        }); };
        _this.RemoveProductFromFridge = function (product) { return __awaiter(_this, void 0, void 0, function () {
            var fridgeProducts2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, httpsClient_1.httpClient.executeRequest("DELETE", "/fridge", product.id)];
                    case 1:
                        _a.sent();
                        return [4, this.fetchFridgeProducts()];
                    case 2:
                        fridgeProducts2 = _a.sent();
                        this.setState({ fridgeProducts: fridgeProducts2 });
                        return [2];
                }
            });
        }); };
        _this.handleNewProductDialog = function (isOpen) { return _this.setState({ isNewProductOpen: isOpen }); };
        _this.state = {
            categories: [],
            products: [],
            productsFromCategory: [],
            fridgeProducts: [],
            isNewProductOpen: false,
        };
        return _this;
    }
    FridgePage.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(material_ui_1.Card, { style: { width: "1000px", height: "800px", margin: "auto", marginTop: "100px", paddingTop: "100px", position: "relative" } },
                React.createElement("div", { style: { display: "flex", position: "relative", paddingRight: "50px", paddingLeft: "50px" } },
                    React.createElement("div", { style: { display: "flex", justifyContent: "center", flexFlow: "column", alignItems: "center" } }, this.state.categories.map(function (category) {
                        return React.createElement(material_ui_1.RaisedButton, { style: { width: "200px", margin: "5px" }, label: category.name, primary: true, onClick: function () { return _this.changeCategory(category.id); } });
                    })),
                    React.createElement("div", { style: { display: "flex", flexFlow: "column", alignItems: "center", marginLeft: "15px" } },
                        React.createElement("div", { style: { display: "flex", flexFlow: "column", alignItems: "center", maxHeight: "400px", flexWrap: "wrap" } }, this.state.productsFromCategory.map(function (product) {
                            return React.createElement(material_ui_1.Checkbox, { key: product.id, checked: _this.productIsInFridge(product), label: product.name, onCheck: function (event, isChecked) { return _this.handleProductClick(event, isChecked, product); }, style: { float: "left", marginBottom: "10px", } });
                        })),
                        React.createElement(material_ui_1.RaisedButton, { label: "Add product", primary: true, onClick: function () { return _this.handleNewProductDialog(true); } })),
                    React.createElement("div", { style: { display: "flex", justifyContent: "center", flexFlow: "column", alignItems: "center", position: "absolute", right: "50px" } },
                        React.createElement("div", { style: { fontWeight: "bold" } }, "FRIDGE"),
                        this.state.fridgeProducts.map(function (fridgeProduct) {
                            return React.createElement(material_ui_1.Chip, { onRequestDelete: function () { return _this.RemoveProductFromFridge(fridgeProduct); }, style: { margin: "5px", width: "160px", display: "flex", justifyContent: "center" } }, fridgeProduct.name);
                        }))),
                React.createElement("div", { style: { position: "absolute", bottom: "50px", width: "100%" } },
                    React.createElement(react_router_dom_1.Link, { to: routes.RecipesPage },
                        React.createElement(material_ui_1.RaisedButton, { label: "Go to all recipies", secondary: true, style: { marginLeft: "50px" } })),
                    React.createElement(react_router_dom_1.Link, { to: routes.ResultRecipesPage },
                        React.createElement(material_ui_1.RaisedButton, { label: "Show what i can cook ", secondary: true, style: { float: "right", marginRight: "50px" } })))),
            React.createElement(material_ui_1.Dialog, { title: "Add new product", modal: false, open: this.state.isNewProductOpen, onRequestClose: function () { return _this.handleNewProductDialog(false); } },
                React.createElement(NewProductDialog_1.NewProductDialog, { handleNewProductDialog: this.handleNewProductDialog, refetchProducts: this.refetchProducts }))));
    };
    FridgePage.prototype.componentDidMount = function () {
        this.fetchData();
    };
    return FridgePage;
}(React.Component));
exports.FridgePage = FridgePage;


/***/ }),

/***/ 690:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = "/";
exports.SignUpPage = "/signup";
exports.FridgePage = "/fridge";
exports.RecipesPage = "/recipes";
exports.ResultRecipesPage = "/result-recipes";


/***/ }),

/***/ 719:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var material_ui_1 = __webpack_require__(54);
var routes = __webpack_require__(70);
var react_router_dom_1 = __webpack_require__(69);
var RecipeViewer_1 = __webpack_require__(765);
var RecipeCreator_1 = __webpack_require__(766);
var httpsClient_1 = __webpack_require__(78);
var colors_1 = __webpack_require__(50);
var RecipesPage = (function (_super) {
    __extends(RecipesPage, _super);
    function RecipesPage(props) {
        var _this = _super.call(this, props) || this;
        _this.handleAddRecipe = function () { return _this.setState({ isInCreationMode: true, isInEditionMode: false }); };
        _this.handleEditRecipe = function () { return _this.setState({ isInCreationMode: true, isInEditionMode: true }); };
        _this.handleRemoveRecipe = function () { return __awaiter(_this, void 0, void 0, function () {
            var tags, recipes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, httpsClient_1.httpClient.executeRequest("DELETE", "/recipes", this.state.selectedRecipe.id)];
                    case 1:
                        tags = _a.sent();
                        recipes = this.fetchRecipes();
                        return [2];
                }
            });
        }); };
        _this.handleCancel = function () { return _this.setState({ isInCreationMode: false }); };
        _this.fetchRecipes = function (isInResultMode) { return __awaiter(_this, void 0, void 0, function () {
            var recipesEndpoint, tagQuery_1, recipes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (isInResultMode === undefined) {
                            isInResultMode = this.props.isInResultMode;
                        }
                        recipesEndpoint = isInResultMode ? "/results" : "/recipes";
                        recipesEndpoint += this.state.onlyUserRecipes ? "" : "/all";
                        if (this.state.selectedTags.length > 0) {
                            tagQuery_1 = "";
                            this.state.selectedTags.forEach(function (tag) {
                                tagQuery_1 += "&tags=" + tag.id;
                            });
                            tagQuery_1 = "?" + tagQuery_1.substring(1);
                            recipesEndpoint += tagQuery_1;
                        }
                        return [4, httpsClient_1.httpClient.executeRequest("GET", recipesEndpoint, {})];
                    case 1:
                        recipes = _a.sent();
                        this.setState({ recipes: recipes, selectedRecipe: recipes[0] });
                        return [2];
                }
            });
        }); };
        _this.tagIsSelected = function (tag) { return -1 !== _this.state.selectedTags.findIndex(function (t) { return t.id == tag.id; }); };
        _this.handleTagClick = function (event, isInputChecked, tag) {
            var newTags = _this.state.selectedTags.slice();
            if (isInputChecked) {
                newTags.push(tag);
            }
            else {
                newTags = [];
                _this.state.selectedTags.forEach(function (t) {
                    if (t.id != tag.id) {
                        newTags.push(t);
                    }
                });
            }
            _this.setState({ selectedTags: newTags });
        };
        _this.fetchTags = function () { return __awaiter(_this, void 0, void 0, function () {
            var tags;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, httpsClient_1.httpClient.executeRequest("GET", "/tags/all", {})];
                    case 1:
                        tags = _a.sent();
                        this.setState({ tags: tags });
                        return [2];
                }
            });
        }); };
        _this.selectRecipe = function (recipe) {
            _this.setState({ selectedRecipe: recipe });
        };
        _this.state = {
            recipes: [],
            tags: [],
            selectedTags: [],
            areFiltersOpen: false,
            isInCreationMode: false,
            isInEditionMode: false,
            onlyUserRecipes: false,
        };
        return _this;
    }
    RecipesPage.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(material_ui_1.Card, { style: {
                    width: "1200px", height: "800px", margin: "auto",
                    marginTop: "100px", paddingTop: "100px", position: "relative",
                    padding: "50px"
                } },
                React.createElement("div", { style: { display: "flex", width: "100%", height: "800px", margin: "5px" } },
                    React.createElement("div", { style: { display: "flex", flexFlow: "column" } },
                        React.createElement(react_router_dom_1.Link, { to: routes.FridgePage },
                            React.createElement(material_ui_1.RaisedButton, { label: "GO TO FRIDGE", secondary: true, style: { marginBottom: "5px", width: "200px" } })),
                        React.createElement(material_ui_1.RaisedButton, { label: this.state.areFiltersOpen ? "HIDE FILTERS" : "SHOW FILTERS", secondary: true, style: { marginBottom: "25px", width: "200px" }, onClick: function () { return _this.setState({ areFiltersOpen: !_this.state.areFiltersOpen }); } }),
                        this.state.recipes.map(function (recipe) {
                            return React.createElement(material_ui_1.RaisedButton, { labelColor: "#fff", backgroundColor: recipe.isMy ? colors_1.blue700 : colors_1.blue500, label: recipe.title, style: { width: "200px", marginBottom: "5px" }, onClick: function () { return _this.selectRecipe(recipe); } });
                        })),
                    this.state.isInCreationMode ?
                        React.createElement(RecipeCreator_1.RecipeCreator, { isInEdition: this.state.isInEditionMode, editedRecipe: this.state.isInEditionMode ? this.state.selectedRecipe : undefined, onCancel: this.handleCancel, refetchRecipes: this.fetchRecipes })
                        :
                            React.createElement(RecipeViewer_1.RecipeViewer, { recipe: this.state.selectedRecipe, onAdd: this.handleAddRecipe, onEdit: this.handleEditRecipe, onRemove: this.handleRemoveRecipe, isInResultMode: this.props.isInResultMode }))),
            React.createElement(material_ui_1.Drawer, { open: this.state.areFiltersOpen },
                React.createElement("div", { style: { display: "flex", flexFlow: "column", padding: "10px" } },
                    React.createElement(material_ui_1.Checkbox, { label: "Show only my recipes", checked: this.state.onlyUserRecipes, onCheck: function (event, isChecked) { return _this.setState({ onlyUserRecipes: isChecked }); }, style: { marginBottom: "10px", marginTop: "10px" } }),
                    React.createElement(material_ui_1.Divider, { inset: false }),
                    React.createElement("span", { style: { marginTop: "10px" } }, "Tags :"),
                    this.state.tags.map(function (tag) {
                        return React.createElement(material_ui_1.Checkbox, { style: { marginTop: "10px" }, label: tag.text, onCheck: function (event, isChecked) { return _this.handleTagClick(event, isChecked, tag); }, checked: _this.tagIsSelected(tag) });
                    }),
                    React.createElement(material_ui_1.RaisedButton, { secondary: true, label: "APPLY FILTERS", onClick: function () { return _this.fetchRecipes(); }, style: { marginTop: "10px" } })))));
    };
    RecipesPage.prototype.componentWillReceiveProps = function (props) {
        this.fetchRecipes(props.isInResultMode);
        this.fetchTags();
    };
    RecipesPage.prototype.componentDidMount = function () {
        this.fetchRecipes();
        this.fetchTags();
    };
    return RecipesPage;
}(React.Component));
exports.RecipesPage = RecipesPage;


/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var material_ui_1 = __webpack_require__(54);
var routes = __webpack_require__(70);
var react_router_dom_1 = __webpack_require__(69);
var colors_1 = __webpack_require__(50);
var RecipeViewer = (function (_super) {
    __extends(RecipeViewer, _super);
    function RecipeViewer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    RecipeViewer.prototype.render = function () {
        return (React.createElement("div", { style: { display: "flex", flexFlow: "column", marginLeft: "50px", alignItems: "center" } },
            React.createElement("div", { style: { display: "flex", justifyContent: "space-between", width: "850px" } },
                React.createElement("div", { style: { display: "flex" } }, this.props.recipe && this.props.recipe.recipeTags.map(function (tag) {
                    return React.createElement(material_ui_1.Chip, { labelColor: "#fff", labelStyle: { fontWeight: "bold" }, style: { marginRight: "5px" } }, tag.text);
                })),
                this.props.recipe && this.props.recipe.isPrivate &&
                    React.createElement("div", { style: { fontSize: "18px", float: "right", display: "flex", alignItems: "center", color: "rgb(224,224,224)" } }, "PRIVATE")),
            this.props.recipe &&
                React.createElement(material_ui_1.Card, { style: { width: "850px", height: "600px", marginTop: "25px" } },
                    React.createElement(material_ui_1.CardTitle, { style: { fontWeight: "bold", fontSize: "24px" }, title: this.props.recipe.title }),
                    React.createElement(material_ui_1.CardText, null,
                        React.createElement("div", { style: { display: "flex" } },
                            React.createElement("div", null, this.props.recipe.products.map(function (product) {
                                return React.createElement(material_ui_1.Chip, { labelColor: "#fff", labelStyle: { fontWeight: "bold" }, style: { margin: "5px", width: "150px", display: "flex", justifyContent: "center" } }, product.name);
                            })),
                            React.createElement("div", { style: { marginLeft: "15px", fontSize: "20px", overflowY: "auto", height: "500px", width: "100%" } }, this.props.recipe.description)))),
            React.createElement("div", { style: { marginTop: "30px", width: "100%" } },
                React.createElement(material_ui_1.RaisedButton, { label: "Add new recipe", secondary: true, style: { marginRight: "20px" }, onClick: this.props.onAdd }),
                this.props.recipe && this.props.recipe.isMy &&
                    React.createElement(material_ui_1.RaisedButton, { label: "Edit recipe", onClick: this.props.onEdit, style: { marginRight: "20px" }, secondary: true }),
                this.props.recipe && this.props.recipe.isMy &&
                    React.createElement(material_ui_1.RaisedButton, { label: "Delete recipe", onClick: this.props.onRemove, labelColor: "#fff", backgroundColor: colors_1.red600 }),
                React.createElement(react_router_dom_1.Link, { to: this.props.isInResultMode ? routes.RecipesPage : routes.ResultRecipesPage },
                    React.createElement(material_ui_1.RaisedButton, { label: this.props.isInResultMode ? "All recipies" : "Recipes i can cook", style: { float: "right" }, secondary: true })))));
    };
    return RecipeViewer;
}(React.Component));
exports.RecipeViewer = RecipeViewer;


/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var material_ui_1 = __webpack_require__(54);
var NewProductDialog_1 = __webpack_require__(295);
var httpsClient_1 = __webpack_require__(78);
var uuidjs_1 = __webpack_require__(296);
var RecipeCreator = (function (_super) {
    __extends(RecipeCreator, _super);
    function RecipeCreator(props) {
        var _this = _super.call(this, props) || this;
        _this.addRecipe = function () { return __awaiter(_this, void 0, void 0, function () {
            var newRecipe;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.warn(this.state.actualRecipe);
                        newRecipe = {
                            id: this.state.actualRecipe.id,
                            title: this.state.actualRecipe.title,
                            description: this.state.actualRecipe.description,
                            recipeTags: this.state.actualRecipe.recipeTags,
                            products: this.state.actualRecipe.products,
                            isPrivate: this.state.actualRecipe.isPrivate
                        };
                        return [4, httpsClient_1.httpClient.executeRequest("PUT", "/recipes", newRecipe)];
                    case 1:
                        _a.sent();
                        this.props.refetchRecipes();
                        this.props.onCancel();
                        return [2];
                }
            });
        }); };
        _this.updateRecipe = function () { return __awaiter(_this, void 0, void 0, function () {
            var updatedRecipe;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.warn(this.state.actualRecipe);
                        updatedRecipe = {
                            id: this.state.actualRecipe.id,
                            title: this.state.actualRecipe.title,
                            description: this.state.actualRecipe.description,
                            recipeTags: this.state.actualRecipe.recipeTags,
                            products: this.state.actualRecipe.products,
                            isPrivate: this.state.actualRecipe.isPrivate
                        };
                        return [4, httpsClient_1.httpClient.executeRequest("POST", "/recipes", updatedRecipe)];
                    case 1:
                        _a.sent();
                        this.props.refetchRecipes();
                        this.props.onCancel();
                        return [2];
                }
            });
        }); };
        _this.addProduct = function (chosenProduct, index) {
            var newProduct = _this.state.products[index];
            var newProductsSet = _this.state.actualRecipe.products.slice();
            newProductsSet.push(newProduct);
            _this.setState({
                actualRecipe: __assign({}, _this.state.actualRecipe, { products: newProductsSet }),
                productsSearchText: "",
            });
        };
        _this.deleteProduct = function (productId) {
            var newProducts;
            newProducts = [];
            _this.state.actualRecipe.products.forEach(function (product) {
                if (product.id !== productId) {
                    newProducts.push(product);
                }
            });
            _this.setState({
                actualRecipe: __assign({}, _this.state.actualRecipe, { products: newProducts })
            });
        };
        _this.addTag = function (chosenTag, index) {
            var newTag = _this.state.tags[index];
            var newTagsSet = _this.state.actualRecipe.recipeTags.slice();
            newTagsSet.push(newTag);
            _this.setState({
                actualRecipe: __assign({}, _this.state.actualRecipe, { recipeTags: newTagsSet }),
                tagsSearchText: "",
            });
        };
        _this.deleteTag = function (tagId) {
            var newTags;
            newTags = [];
            _this.state.actualRecipe.recipeTags.forEach(function (tag) {
                if (tag.id !== tagId) {
                    newTags.push(tag);
                }
            });
            _this.setState({
                actualRecipe: __assign({}, _this.state.actualRecipe, { recipeTags: newTags })
            });
        };
        _this.fetchTags = function () { return __awaiter(_this, void 0, void 0, function () {
            var tags;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, httpsClient_1.httpClient.executeRequest("GET", "/tags/all", {})];
                    case 1:
                        tags = _a.sent();
                        this.setState({ tags: tags });
                        return [2];
                }
            });
        }); };
        _this.fetchProducts = function () { return __awaiter(_this, void 0, void 0, function () {
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, httpsClient_1.httpClient.executeRequest("GET", "/products", {})];
                    case 1:
                        products = _a.sent();
                        this.setState({ products: products });
                        return [2];
                }
            });
        }); };
        _this.handleNewProductDialog = function (isOpen) { return _this.setState({ isNewProductOpen: isOpen }); };
        var emptyRecipe;
        emptyRecipe = { id: uuidjs_1.generate(), title: "", description: "", products: [], recipeTags: [], isPrivate: false, isMy: true };
        var recipe = _this.props.isInEdition ? _this.props.editedRecipe : emptyRecipe;
        _this.state = {
            actualRecipe: recipe,
            products: [],
            productsSearchText: "",
            tags: [],
            tagsSearchText: "",
            isNewProductOpen: false,
        };
        return _this;
    }
    RecipeCreator.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { style: { display: "flex", flexFlow: "column", marginLeft: "50px", alignItems: "center" } },
                React.createElement("div", { style: { display: "flex", justifyContent: "space-between", width: "850px" } },
                    React.createElement("div", { style: { display: "flex" } },
                        this.state.actualRecipe.recipeTags.map(function (tag) {
                            return React.createElement(material_ui_1.Chip, { labelColor: "#fff", onRequestDelete: function () { return _this.deleteTag(tag.id); }, labelStyle: { fontWeight: "bold" }, style: { marginRight: "5px", height: "30px" } }, tag.text);
                        }),
                        React.createElement(material_ui_1.AutoComplete, { filter: material_ui_1.AutoComplete.caseInsensitiveFilter, dataSource: this.state.tags.map(function (tag) { return tag.text; }), searchText: this.state.tagsSearchText, onUpdateInput: function (text) { return _this.setState({ tagsSearchText: text }); }, onNewRequest: this.addTag })),
                    React.createElement(material_ui_1.Checkbox, { style: { fontSize: "18px", float: "right", display: "flex", alignItems: "center", color: "rgb(224,224,224)", width: "150px" }, label: "Is private", checked: this.state.actualRecipe.isPrivate, onCheck: function (event, isChecked) { return _this.setState({ actualRecipe: __assign({}, _this.state.actualRecipe, { isPrivate: isChecked }) }); } })),
                React.createElement(material_ui_1.Card, { style: { width: "850px", height: "600px", marginTop: "25px" } },
                    React.createElement(material_ui_1.CardText, null,
                        React.createElement(material_ui_1.TextField, { floatingLabelText: "Title", defaultValue: this.state.actualRecipe.title, onChange: function (_, title) { return _this.setState({ actualRecipe: __assign({}, _this.state.actualRecipe, { title: title }) }); } }),
                        React.createElement("div", { style: { display: "flex" } },
                            React.createElement("div", { style: { display: "flex", marginTop: "15px", width: "30%", flexFlow: "column" } },
                                React.createElement("div", null, "PRODUCTS :"),
                                this.state.actualRecipe.products.map(function (product) {
                                    return React.createElement(material_ui_1.Chip, { labelColor: "#fff", labelStyle: { fontWeight: "bold" }, onRequestDelete: function () { return _this.deleteProduct(product.id); }, style: { margin: "5px", width: "150px", display: "flex", justifyContent: "center" } }, product.name);
                                }),
                                React.createElement(material_ui_1.AutoComplete, { filter: material_ui_1.AutoComplete.caseInsensitiveFilter, dataSource: this.state.products.map(function (product) { return product.name; }), searchText: this.state.productsSearchText, onUpdateInput: function (text) { return _this.setState({ productsSearchText: text }); }, onNewRequest: this.addProduct }),
                                React.createElement(material_ui_1.RaisedButton, { label: "New Product", secondary: true, style: { width: "150px", margin: "5px" }, onClick: function () { return _this.handleNewProductDialog(true); } })),
                            React.createElement("div", { style: { marginLeft: "15px", marginRight: "15px", fontSize: "20px", height: "500px", width: "60%" } },
                                React.createElement(material_ui_1.TextField, { floatingLabelText: "Description", multiLine: true, fullWidth: true, rows: 18, rowsMax: 18, defaultValue: this.state.actualRecipe.description, onChange: function (_, desc) { return _this.setState({ actualRecipe: __assign({}, _this.state.actualRecipe, { description: desc }) }); } }))))),
                React.createElement("div", { style: { marginTop: "30px", width: "100%" } },
                    React.createElement(material_ui_1.RaisedButton, { label: "Cancel", secondary: true, style: { marginRight: "20px" }, onClick: this.props.onCancel }),
                    React.createElement(material_ui_1.RaisedButton, { label: this.props.isInEdition ? "Update Recipe" : "Add Recipe", onClick: this.props.isInEdition ? this.updateRecipe : this.addRecipe, style: { float: "right" }, secondary: true }))),
            React.createElement(material_ui_1.Dialog, { title: "Add new product", modal: false, open: this.state.isNewProductOpen, onRequestClose: function () { return _this.handleNewProductDialog(false); } },
                React.createElement(NewProductDialog_1.NewProductDialog, { handleNewProductDialog: this.handleNewProductDialog, refetchProducts: function () { return null; } }))));
    };
    RecipeCreator.prototype.componentDidMount = function () {
        var tags = this.fetchTags();
        var products = this.fetchProducts();
    };
    return RecipeCreator;
}(React.Component));
exports.RecipeCreator = RecipeCreator;


/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
function NotFoundPage() {
    return (React.createElement("div", { style: { width: "1000px", height: "750px", margin: "auto", marginTop: "100px", position: "relative" } },
        React.createElement("img", { style: { width: "1000px", height: "750px", margin: "auto", position: "relative" }, src: "https://memegenerator.net/img/instances/500x/48030660/wow-such-error-so-not-found-much-404.jpg" })));
}
exports.NotFoundPage = NotFoundPage;


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(180);
var HttpClient = (function () {
    function HttpClient(apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
    }
    HttpClient.prototype.executeRequest = function (type, requestName, dto) {
        var path = this.apiEndpoint + requestName;
        return this.makeRequest(path, dto, type);
    };
    HttpClient.prototype.makeRequest = function (url, dto, type) {
        return __awaiter(this, void 0, void 0, function () {
            var init, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.prepareRequest(dto, type)];
                    case 1:
                        init = _a.sent();
                        return [4, fetch(url, init)];
                    case 2:
                        result = _a.sent();
                        return [4, result.json()];
                    case 3: return [2, _a.sent()];
                }
            });
        });
    };
    HttpClient.prototype.prepareRequest = function (dto, type) {
        return __awaiter(this, void 0, void 0, function () {
            var headers;
            return __generator(this, function (_a) {
                headers = new Headers();
                headers.append("Content-Type", "application/json");
                headers.append("Authorization", "Bearer " + this.accessToken);
                return [2, type === "GET"
                        ? {
                            method: type,
                            headers: headers
                        }
                        :
                            {
                                method: type,
                                body: JSON.stringify(dto),
                                headers: headers
                            }];
            });
        });
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
exports.httpClient = new HttpClient(config_1.default.HttpsEndpoint);


/***/ })

},[333]);
//# sourceMappingURL=main.js.map