"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var actions = _interopRequire(require("../../actions"));

var connect = require("react-redux").connect;
var Signup = require("../presentation").Signup;
var APIManager = require("../../utils").APIManager;
var Dropzone = _interopRequire(require("react-dropzone"));

var sha1 = _interopRequire(require("sha1"));

var Admin = (function (Component) {
    function Admin() {
        _classCallCheck(this, Admin);

        _get(Object.getPrototypeOf(Admin.prototype), "constructor", this).call(this);
        this.state = {
            bug: {
                profile: "",
                track: "",
                title: "",
                details: "",
                response: ""
            },
            track: {
                name: "",
                slug: "",
                url: "",
                image: ""
            }
        };
    }

    _inherits(Admin, Component);

    _prototypeProperties(Admin, null, {
        componentDidMount: {
            value: function componentDidMount() {
                var _this = this;
                APIManager.get("/account/currentuser", null, function (err, response) {
                    if (err) {
                        var msg = err.message || err;
                        alert(msg);
                        return;
                    }
                    console.log("Admin.js: " + JSON.stringify(response.profile));
                    _this.props.currentUserReceived(response.profile);
                });
            },
            writable: true,
            configurable: true
        },
        register: {
            value: function register(visitor) {
                var _this = this;
                var email = visitor.email;
                var firstName = visitor.firstName;
                var lastName = visitor.lastName;
                var password = visitor.password;

                if (email.length == 0) {
                    alert("Please fill in Email!");
                    return;
                }


                if (firstName.length == 0) {
                    alert("Please fill in First Name!");
                    return;
                }


                if (lastName.length == 0) {
                    alert("Please fill in Last Name!");
                    return;
                }

                if (password.length == 0) {
                    alert("Please fill in Password!");
                    return;
                }

                APIManager.post("/account/register", visitor, function (err, response) {
                    if (err) {
                        var msg = err.message || err;
                        alert(msg);
                        return;
                    }

                    console.log("register: " + JSON.stringify(response));
                    _this.props.profileCreated(response.profile);
                });
            },
            writable: true,
            configurable: true
        },
        login: {
            value: function login(credentials) {
                var _this = this;
                var email = credentials.email;
                var password = credentials.password;

                if (email.length == 0) {
                    alert("Please fill in Email!");
                    return;
                }

                if (password.length == 0) {
                    alert("Please fill in Password!");
                    return;
                }

                APIManager.post("/account/login", credentials, function (err, response) {
                    if (err) {
                        var msg = err.message || err;
                        // console.log(msg)
                        alert(msg);
                        return;
                    }

                    console.log(JSON.stringify(response));
                    _this.props.currentUserReceived(response.profile);
                });
            },
            writable: true,
            configurable: true
        },
        updateTrack: {
            value: function updateTrack(event) {
                event.preventDefault();
                console.log("updateTrack: " + event.target.id + " == " + event.target.value);
                var updatedTrack = Object.assign({}, this.state.track);
                updatedTrack[event.target.id] = event.target.value;
                this.setState({
                    track: updatedTrack
                });
            },
            writable: true,
            configurable: true
        },
        submitTrack: {
            value: function submitTrack(event) {
                var _this = this;
                event.preventDefault();
                console.log("to submitTrack: " + JSON.stringify(this.state.track));
                var track = this.state.track;
                var name = track.name;

                if (name.length == 0) {
                    alert("Please fill in Track Name!");
                    return;
                }

                var parts = name.split(" ");

                var slug = "";
                for (var i = 0; i < parts.length; i++) {
                    var word = parts[i];
                    slug += word;
                    if (i != parts.length - 1) slug += "-";
                }

                slug = slug.replace("?", "-");
                track.slug = slug;
                console.log(JSON.stringify(track));

                APIManager.post("/api/track", track, function (err, response) {
                    if (err) {
                        var msg = err.message || err;
                        alert(JSON.stringify(msg));
                        return;
                    }

                    console.log("track submitted: " + JSON.stringify(response.result));
                    _this.props.trackCreated(response.result);
                    window.location.href = "/track/" + track.slug;
                });
            },
            writable: true,
            configurable: true
        },
        updateBug: {
            value: function updateBug(event) {
                event.preventDefault();
                // console.log(event.target.id+" == "+event.target.value)
                var updatedBug = Object.assign({}, this.state.bug);
                updatedBug[event.target.id] = event.target.value; //updatedBug['event.target.id'] = event.target.value
                this.setState({
                    bug: updatedBug
                });
                console.log("updatedBug: " + JSON.stringify(this.state.bug));
            },
            writable: true,
            configurable: true
        },
        submitBug: {
            value: function submitBug(event) {
                var _this = this;
                event.preventDefault();
                var bug = this.state.bug;
                bug.profile = this.props.currentUser.id;

                APIManager.post("/api/bug", bug, function (err, response) {
                    if (err) {
                        var msg = err.message || err;
                        // console.log(msg)
                        alert(JSON.stringify(msg));
                        return;
                    }
                    console.log("submit: " + JSON.stringify(response.result));
                    var result = response.result;
                    _this.props.bugCreated(bug);
                });
            },
            writable: true,
            configurable: true
        },
        uploadImage: {
            value: function uploadImage(files) {
                var _this = this;
                var image = files[0];

                var cloudName = "hmffqrvhq";
                var url = "https://api.cloudinary.com/v1_1/" + cloudName + "/image/upload";


                var timestamp = Date.now() / 1000;
                var uploadPreset = "ydm4pinf";

                var paramsStr = "timestamp=" + timestamp + "&upload_preset=" + uploadPreset + "rFL-RZTX81XWxpLcuDidqKN3WbU";
                var signature = sha1(paramsStr);

                var params = {
                    api_key: "432944256736493",
                    timestamp: timestamp,
                    upload_preset: uploadPreset,
                    signature: signature
                };

                // console.log('uploadImage: ')
                APIManager.upload(url, image, params, function (err, response) {
                    if (err) {
                        // console.log('UPLOAD ERROR: '+JSON.stringify(err))
                        alert(err);
                        return;
                    }

                    // console.log('UPLOAD COMPLETE: '+JSON.stringify(response.body))
                    // const imageUrl = response.body['secure_url']

                    var updatedTrack = Object.assign({}, _this.state.track);
                    updatedTrack.image = response.body.secure_url;
                    _this.setState({
                        track: updatedTrack
                    });

                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var image = this.state.track.image == null ? "" : this.state.track.image.replace("upload", "upload/c_thumb,h_150,w_150,x_0,y_0"); //thumbnail, not entire image

                return React.createElement(
                    "div",
                    null,
                    this.props.currentUser == null ? React.createElement(Signup, { onRegister: this.register.bind(this), onLogin: this.login.bind(this) }) : React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "h2",
                            null,
                            "Welcome, ",
                            this.props.currentUser.firstName
                        ),
                        React.createElement(
                            "h3",
                            null,
                            "Create a new Track"
                        ),
                        React.createElement("input", { onChange: this.updateTrack.bind(this), type: "text", id: "name", placeholder: "Track Name", className: "form-control", style: { marginTop: 1, marginLeft: 12, width: 95 + "%" } }),
                        React.createElement("br", null),
                        React.createElement("img", { src: image }),
                        React.createElement("br", null),
                        React.createElement(Dropzone, { onDrop: this.uploadImage.bind(this) }),
                        React.createElement("br", null),
                        React.createElement(
                            "button",
                            { onClick: this.submitTrack.bind(this), className: "btn btn-success" },
                            "Submit New Track"
                        ),
                        React.createElement("br", null)
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Admin;
})(Component);

var stateToProps = function (state) {
    return {
        profiles: state.profile.list,
        currentUser: state.account.currentUser
    };
};

var dispatchToProps = function (dispatch) {
    return {
        profileCreated: function (profile) {
            return dispatch(actions.profileCreated(profile));
        },
        currentUserReceived: function (profile) {
            return dispatch(actions.currentUserReceived(profile));
        },
        bugCreated: function (bug) {
            return dispatch(actions.bugCreated(bug));
        },
        trackCreated: function (track) {
            return dispatch(actions.trackCreated(track));
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(Admin);