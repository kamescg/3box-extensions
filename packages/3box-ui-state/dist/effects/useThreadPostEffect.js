"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* --- Component --- */
var useThreadPostEffect = (state, dispatch) => {
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.store && state.store.posts) {
      try {
        var postSelected = state.store.posts[0];

        if (postSelected && state.auth.threads[postSelected.threadName].instance) {
          var runEffect =
          /*#__PURE__*/
          function () {
            var _ref = _asyncToGenerator(function* () {
              var posts;

              switch (postSelected.type) {
                case 'THREAD_POST_PUBLISH_REQUEST':
                  yield state.auth.threads[postSelected.threadName].instance.post(postSelected.post);
                  posts = yield state.auth.threads[postSelected.threadName].instance.getPosts();
                  dispatch({
                    type: "THREAD_POST_PUBLISH_SUCCESS",
                    space: postSelected.space,
                    threadName: postSelected.threadName,
                    firstModerator: state.address,
                    payload: posts
                  });
                  break;

                case 'THREAD_POST_DELETE_REQUEST':
                  if (postSelected.postId) {
                    var thread = state.auth.threads[postSelected.threadName];
                    yield state.auth.threads[postSelected.threadName].instance.deletePost(postSelected.postId);
                    posts = yield state.auth.threads[postSelected.threadName].instance.getPosts();
                    dispatch({
                      type: "THREAD_POST_DELETE_SUCCESS",
                      space: postSelected.space,
                      threadName: postSelected.threadName,
                      firstModerator: state.address,
                      payload: posts
                    });
                  } else {
                    dispatch({
                      type: "THREAD_POST_DELETE_FAILURE",
                      threadName: postSelected.threadName,
                      space: postSelected.space,
                      threadName: postSelected.threadName,
                      firstModerator: box.address
                    });
                  }

                  break;

                default:
                  break;
              }
            });

            return function runEffect() {
              return _ref.apply(this, arguments);
            };
          }();

          runEffect();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [state.store, state.store.posts]);
  return dispatched;
};
/* --- Export --- */


var _default = useThreadPostEffect;
exports.default = _default;