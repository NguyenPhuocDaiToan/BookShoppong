(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*****************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports) {
    module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\r\n/* position */\r\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\r\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\r\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\r\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\r\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\r\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\r\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\r\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\r\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\r\n/* toast styles */\r\n.toast-title {\n  font-weight: bold;\n}\r\n.toast-message {\n  word-wrap: break-word;\n}\r\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\r\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\r\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\r\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\r\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\r\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\r\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\r\n.toast-container * {\n  box-sizing: border-box;\n}\r\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\r\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\r\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\r\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\r\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\r\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\r\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\r\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\r\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\r\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\r\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\r\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\r\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\r\n.toast-success {\n  background-color: #51A351;\n}\r\n.toast-error {\n  background-color: #BD362F;\n}\r\n.toast-info {\n  background-color: #2F96B4;\n}\r\n.toast-warning {\n  background-color: #F89406;\n}\r\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\r\n/* Responsive Design */\r\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\r\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\r\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\r\n:root {\r\n  --color-primary: rgb(8, 79, 154);\r\n  --color-lightness-1: rgb(17, 105, 200);\r\n  --color-lightness-2: #2489F4;\r\n  --color-lightness-3: #2F80ED;\r\n  --color-lightness-4: rgb(24, 158, 255);\r\n  --color-lightness-5: rgb(193, 231, 255);\r\n  --color-red: red;\r\n  --color-red-dark: #C92127;\r\n}\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 15px;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n.btn {\r\n  text-decoration: none;\r\n  border: none;\r\n  background-color: var( --color-primary);\r\n  color: #fff;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  padding: 8px 16px;\r\n  display: inline-block;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n.btn-fill {\r\n  background-color: var( --color-primary);\r\n  color: #fff;\r\n  border: 2px solid var( --color-primary);\r\n}\r\n.btn-outline {\r\n  background-color: #fff;\r\n  color: var( --color-primary);\r\n  outline: 2px solid var( --color-primary);\r\n  font-weight: bold;\r\n}\r\n.btn-outline:hover {\r\n  background-color: rgb(8, 79, 154);\r\n  color: #fff;\r\n}\r\n.btn-disabled {\r\n  background-color: #7A7E7F !important;\r\n  color: #fff;\r\n  outline: none;\r\n}\r\n.color-blue {\r\n  color: var(--color-lightness-2) !important;\r\n}\r\n.color-333 {\r\n  color: #333333 !important;\r\n}\r\n.color-red {\r\n  color: red !important;\r\n}\r\n.color-black {\r\n  color: #000 !important;\r\n}\r\n.color-green {\r\n  color: #198754 !important;\r\n}\r\n.fs-14 {\r\n  font-size: 14px !important;\r\n}\r\n.fs-12 {\r\n  font-size: 12px !important;\r\n}\r\n.fw-bold {\r\n  font-weight: bold;\r\n}\r\nul {\r\n  padding-left: 0;\r\n  margin: 0;\r\n}\r\nli {\r\n  list-style: none !important;\r\n}\r\na {\r\n  text-decoration: none !important;\r\n}\r\n.d-flex {\r\n  display: flex;\r\n}\r\n.d-flex-justify-center {\r\n  display: flex;\r\n  justify-content: center !important;\r\n}\r\n.d-flex-justify-sp-between {\r\n  display: flex;\r\n  justify-content: space-between !important;\r\n}\r\n.d-flex-align-center {\r\n  display: flex;\r\n  align-items: center !important;\r\n}\r\n.d-flex-center-all {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.d-flex-end {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.d-flex-direction-column {\r\n  display: flex;\r\n  flex-direction: column !important;\r\n}\r\n.w-100 {\r\n  width: 100%;\r\n}\r\n.row {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin: 0;\r\n}\r\n.col-1-2 {\r\n  flex: 0 0 10%;\r\n  max-width: 10%;\r\n}\r\n.col-2 {\r\n  flex: 0 0 16.666667%;\r\n  max-width: 16.666667%;\r\n}\r\n.col-2-4 {\r\n  flex: 0 0 20%;\r\n  max-width: 20%;\r\n}\r\n.col-3 {\r\n  flex: 0 0 25%;\r\n  max-width: 25%;\r\n}\r\n.col-4 {\r\n  flex: 0 0 33.333333%;\r\n  max-width: 33.333333%;\r\n}\r\n.col-5 {\r\n  flex: 0 0 41.666667%;\r\n  max-width: 41.666667%;\r\n}\r\n.col-6 {\r\n  flex: 0 0 50%;\r\n  max-width: 50%;\r\n}\r\n.col-7 {\r\n  flex: 0 0 58.333333%;\r\n  max-width: 58.333333%;\r\n}\r\n.col-8 {\r\n  flex: 0 0 66.666667%;\r\n  max-width: 66.666667%;\r\n}\r\n.col-9 {\r\n  flex: 0 0 75%;\r\n  max-width: 75%;\r\n}\r\n.error {\r\n  color: red;\r\n}\r\n.text-align-center {\r\n  text-align: center;\r\n}\r\n.position-relative {\r\n  position: relative;\r\n}\r\n.ml-8 {\r\n  margin-left: 8px;\r\n}\r\n.mf-8 {\r\n  margin: 8px;\r\n}\r\n.ml-16 {\r\n  margin-left: 16px;\r\n}\r\n.mt-4 {\r\n  margin-top: 4px;\r\n}\r\n.mt-8 {\r\n  margin-top: 8px;\r\n}\r\n.mt-16 {\r\n  margin-top: 16px;\r\n}\r\n.mt-20 {\r\n  margin-top: 20px;\r\n}\r\n.mt-32 {\r\n  margin-top: 32px;\r\n}\r\n.mb-8 {\r\n  margin-bottom: 8px;\r\n}\r\n.mb-16 {\r\n  margin-bottom: 16px;\r\n}\r\n.mb-20 {\r\n  margin-bottom: 20px;\r\n}\r\n.mg-auto {\r\n  margin: 0 auto !important;\r\n}\r\n.m-0 {\r\n  margin: 0 !important;\r\n}\r\n.pt-8 {\r\n  padding-top: 8px;\r\n}\r\n.pt-16 {\r\n  padding-top: 16px;\r\n}\r\n.pb-8 {\r\n  padding-bottom: 8px;\r\n}\r\n.pf-8 {\r\n  padding: 8px;\r\n}\r\n.border-none {\r\n  border: none !important;\r\n}\r\n.border-radius-none {\r\n  border-radius: 0 !important;\r\n}\r\n.of-hidden {\r\n  overflow: hidden;\r\n}\r\n@media (min-width: 992px) {\r\n  .container  {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n/* Animation */\r\n@-webkit-keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes growth {\r\n  from {\r\n    transform: scale(0.7);\r\n  }\r\n  to {\r\n    transform: scale(1);\r\n  }\r\n}\r\n@keyframes growth {\r\n  from {\r\n    transform: scale(0.7);\r\n  }\r\n  to {\r\n    transform: scale(1);\r\n  }\r\n}\r\n.body {\r\n  background-color: rgb(237, 237, 244);\r\n}\r\n.content-body {\r\n  padding: 20px 0 30px;\r\n}\r\n.component {\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  background-color: #fff;\r\n  margin-bottom: 30px;\r\n}\r\n.component-header {\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  color: #333333;\r\n  padding-bottom: 16px;\r\n}\r\n.icon-star-fill {\r\n  color: rgb(253, 216, 54);\r\n  font-size: 12px;\r\n}\r\n.icon-star-no-fill {\r\n  color: rgb(199, 199, 199);\r\n  font-size: 12px;\r\n}\r\n.modal {\r\n  /* display: flex; */\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  -webkit-animation: fadeIn linear 0.1s;\r\n          animation: fadeIn linear 0.1s;\r\n  display: none;\r\n  z-index: 1;\r\n}\r\n.modal-overlay {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n.modal-container {\r\n  position: relative;\r\n  z-index: 1;\r\n  -webkit-animation: growth linear 0.1s;\r\n          animation: growth linear 0.1s;\r\n  background-color: #fff;\r\n  margin: 20px auto 0;\r\n  border-radius: 4px;\r\n  box-shadow: 0 2px 2px rgb(95, 95, 95);\r\n}\r\n.modal-header {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.loading-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 2000;\r\n  display: none;\r\n}\r\n.overlay {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.balls {\r\n  position: relative;\r\n  width: 3.5em;\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: 150px auto 0px;\r\n  z-index: 1000;\r\n}\r\n.balls div {\r\n  width: 0.8em;\r\n  height: 0.8em;\r\n  border-radius: 50%;\r\n  background-color: #918d8d;\r\n  -webkit-animation: wave 0.8s ease-in-out alternate infinite;\r\n          animation: wave 0.8s ease-in-out alternate infinite;\r\n}\r\n.balls div:nth-of-type(1) {\r\n  -webkit-animation-delay: -0.4s;\r\n          animation-delay: -0.4s;\r\n}\r\n.balls div:nth-of-type(2) {\r\n  -webkit-animation-delay: -0.2s;\r\n          animation-delay: -0.2s;\r\n}\r\n@-webkit-keyframes wave {\r\n  from {\r\n    transform: translateY(-100%);\r\n  }\r\n  to {\r\n    transform: translateY(100%);\r\n  }\r\n}\r\n@keyframes wave {\r\n  from {\r\n    transform: translateY(-100%);\r\n  }\r\n  to {\r\n    transform: translateY(100%);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwibm9kZV9tb2R1bGVzL25neC10b2FzdHIvdG9hc3RyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7QUNBOUUsa0pBQWtKO0FBRWxKLGFBQWE7QUFDYjtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxNQUFNO0VBQ04sUUFBUTtFQUNSLFdBQVc7QUFDYjtBQUNBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0FBQ2I7QUFDQTtFQUNFLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztBQUNiO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7QUFDYjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsU0FBUztFQUNULFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTs7eURBRXlEO0FBQ3pEO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBLGlIQUFpSDtBQUNqSDtFQUNFLHFsQkFBcWxCO0FBQ3ZsQjtBQUNBLGtIQUFrSDtBQUNsSDtFQUNFLDZqQkFBNmpCO0FBQy9qQjtBQUNBLDJHQUEyRztBQUMzRztFQUNFLHdkQUF3ZDtBQUMxZDtBQUNBLDBIQUEwSDtBQUMxSDtFQUNFLHNvQkFBc29CO0FBQ3hvQjtBQUNBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQSxzQkFBc0I7QUFDdEI7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2I7QUFDRjtBQUNBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLFdBQVc7RUFDYjtBQUNGO0FEN0xBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHNDQUFzQztFQUN0Qyw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHNDQUFzQztFQUN0Qyx1Q0FBdUM7RUFDdkMsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjtBQUdBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFNBQVM7RUFDVCx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxXQUFXO0VBQ1gsdUNBQXVDO0FBQ3pDO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLHdDQUF3QztFQUN4QyxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxXQUFXO0FBQ2I7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7QUFDWDtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsYUFBYTtFQUNiLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUViLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtBQUNGO0FBQ0EsY0FBYztBQUNkO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBUEE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQVBBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGO0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLFVBQVU7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDJEQUFtRDtVQUFuRCxtREFBbUQ7QUFDckQ7QUFFQTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjtBQVBBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5AaW1wb3J0IFwifm5neC10b2FzdHIvdG9hc3RyLmNzc1wiO1xyXG46cm9vdCB7XHJcbiAgLS1jb2xvci1wcmltYXJ5OiByZ2IoOCwgNzksIDE1NCk7XHJcbiAgLS1jb2xvci1saWdodG5lc3MtMTogcmdiKDE3LCAxMDUsIDIwMCk7XHJcbiAgLS1jb2xvci1saWdodG5lc3MtMjogIzI0ODlGNDtcclxuICAtLWNvbG9yLWxpZ2h0bmVzcy0zOiAjMkY4MEVEO1xyXG4gIC0tY29sb3ItbGlnaHRuZXNzLTQ6IHJnYigyNCwgMTU4LCAyNTUpO1xyXG4gIC0tY29sb3ItbGlnaHRuZXNzLTU6IHJnYigxOTMsIDIzMSwgMjU1KTtcclxuICAtLWNvbG9yLXJlZDogcmVkO1xyXG4gIC0tY29sb3ItcmVkLWRhcms6ICNDOTIxMjc7XHJcbn1cclxuXHJcblxyXG5odG1sIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLWNvbG9yLXByaW1hcnkpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5idG4tZmlsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLWNvbG9yLXByaW1hcnkpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhciggLS1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiB2YXIoIC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhciggLS1jb2xvci1wcmltYXJ5KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgNzksIDE1NCk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmJ0bi1kaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdBN0U3RiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmNvbG9yLWJsdWUge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodG5lc3MtMikgIWltcG9ydGFudDtcclxufVxyXG4uY29sb3ItMzMzIHtcclxuICBjb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O1xyXG59XHJcbi5jb2xvci1yZWQge1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG4uY29sb3ItYmxhY2sge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yLWdyZWVuIHtcclxuICBjb2xvcjogIzE5ODc1NCAhaW1wb3J0YW50O1xyXG59XHJcbi5mcy0xNCB7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZzLTEyIHtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG4uZnctYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxudWwge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxubGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uZC1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5kLWZsZXgtanVzdGlmeS1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4uZC1mbGV4LWp1c3RpZnktc3AtYmV0d2VlbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcclxufVxyXG4uZC1mbGV4LWFsaWduLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmQtZmxleC1jZW50ZXItYWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmQtZmxleC1lbmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4uZC1mbGV4LWRpcmVjdGlvbi1jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG59XHJcbi53LTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jb2wtMS0yIHtcclxuICBmbGV4OiAwIDAgMTAlO1xyXG4gIG1heC13aWR0aDogMTAlO1xyXG59XHJcbi5jb2wtMiB7XHJcbiAgZmxleDogMCAwIDE2LjY2NjY2NyU7XHJcbiAgbWF4LXdpZHRoOiAxNi42NjY2NjclO1xyXG59XHJcbi5jb2wtMi00IHtcclxuICBmbGV4OiAwIDAgMjAlO1xyXG4gIG1heC13aWR0aDogMjAlO1xyXG59XHJcbi5jb2wtMyB7XHJcbiAgZmxleDogMCAwIDI1JTtcclxuICBtYXgtd2lkdGg6IDI1JTtcclxufVxyXG4uY29sLTQge1xyXG4gIGZsZXg6IDAgMCAzMy4zMzMzMzMlO1xyXG4gIG1heC13aWR0aDogMzMuMzMzMzMzJTtcclxufVxyXG4uY29sLTUge1xyXG4gIGZsZXg6IDAgMCA0MS42NjY2NjclO1xyXG4gIG1heC13aWR0aDogNDEuNjY2NjY3JTtcclxufVxyXG4uY29sLTYge1xyXG4gIGZsZXg6IDAgMCA1MCU7XHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuLmNvbC03IHtcclxuICBmbGV4OiAwIDAgNTguMzMzMzMzJTtcclxuICBtYXgtd2lkdGg6IDU4LjMzMzMzMyU7XHJcbn1cclxuLmNvbC04IHtcclxuICBmbGV4OiAwIDAgNjYuNjY2NjY3JTtcclxuICBtYXgtd2lkdGg6IDY2LjY2NjY2NyU7XHJcbn1cclxuLmNvbC05IHtcclxuICBmbGV4OiAwIDAgNzUlO1xyXG4gIG1heC13aWR0aDogNzUlO1xyXG59XHJcbi5lcnJvciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4udGV4dC1hbGlnbi1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvc2l0aW9uLXJlbGF0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1sLTgge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuLm1mLTgge1xyXG4gIG1hcmdpbjogOHB4O1xyXG59XHJcbi5tbC0xNiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuLm10LTQge1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG4ubXQtOCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5tdC0xNiB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4ubXQtMjAge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLm10LTMyIHtcclxuICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcbi5tYi04IHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuLm1iLTE2IHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5tYi0yMCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubWctYXV0byB7XHJcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4ubS0wIHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG4ucHQtOCB7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4ucHQtMTYge1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcbi5wYi04IHtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcbi5wZi04IHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuLmJvcmRlci1ub25lIHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uYm9yZGVyLXJhZGl1cy1ub25lIHtcclxuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm9mLWhpZGRlbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmNvbnRhaW5lciAge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbn1cclxuLyogQW5pbWF0aW9uICovXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdyb3d0aCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMjM3LCAyNDQpO1xyXG59XHJcbi5jb250ZW50LWJvZHkge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAzMHB4O1xyXG59XHJcblxyXG4uY29tcG9uZW50IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5jb21wb25lbnQtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzMzMzMzMztcclxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmljb24tc3Rhci1maWxsIHtcclxuICBjb2xvcjogcmdiKDI1MywgMjE2LCA1NCk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5pY29uLXN0YXItbm8tZmlsbCB7XHJcbiAgY29sb3I6IHJnYigxOTksIDE5OSwgMTk5KTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgLyogZGlzcGxheTogZmxleDsgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIGxpbmVhciAwLjFzO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm1vZGFsLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBhbmltYXRpb246IGdyb3d0aCBsaW5lYXIgMC4xcztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2IoOTUsIDk1LCA5NSk7XHJcbn1cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogMjAwMDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG4uYmFsbHMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMy41ZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiAxNTBweCBhdXRvIDBweDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4uYmFsbHMgZGl2IHtcclxuICB3aWR0aDogMC44ZW07XHJcbiAgaGVpZ2h0OiAwLjhlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxOGQ4ZDtcclxuICBhbmltYXRpb246IHdhdmUgMC44cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5iYWxscyBkaXY6bnRoLW9mLXR5cGUoMSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7XHJcbn1cclxuXHJcbi5iYWxscyBkaXY6bnRoLW9mLXR5cGUoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMnM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgd2F2ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGJhc2VkIG9uIGFuZ3VsYXItdG9hc3RyIGNzcyBodHRwczovL2dpdGh1Yi5jb20vRm94YW5keHNzL2FuZ3VsYXItdG9hc3RyL2Jsb2IvY2I1MDhmZTY4MDFkNmIyODhkM2FmYzUyNWJiNDBmZWUxYjEwMTY1MC9kaXN0L2FuZ3VsYXItdG9hc3RyLmNzcyAqL1xuXG4vKiBwb3NpdGlvbiAqL1xuLnRvYXN0LWNlbnRlci1jZW50ZXIge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi50b2FzdC10b3AtY2VudGVyIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9hc3QtYm90dG9tLWNlbnRlciB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvYXN0LXRvcC1mdWxsLXdpZHRoIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2FzdC10b3AtbGVmdCB7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogMTJweDtcbn1cbi50b2FzdC10b3AtcmlnaHQge1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxMnB4O1xufVxuLnRvYXN0LWJvdHRvbS1yaWdodCB7XG4gIHJpZ2h0OiAxMnB4O1xuICBib3R0b206IDEycHg7XG59XG4udG9hc3QtYm90dG9tLWxlZnQge1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IDEycHg7XG59XG5cbi8qIHRvYXN0IHN0eWxlcyAqL1xuLnRvYXN0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udG9hc3QtbWVzc2FnZSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi50b2FzdC1tZXNzYWdlIGEsXG4udG9hc3QtbWVzc2FnZSBsYWJlbCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnRvYXN0LW1lc3NhZ2UgYTpob3ZlciB7XG4gIGNvbG9yOiAjQ0NDQ0NDO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogLTAuM2VtO1xuICB0b3A6IC0wLjNlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZmZmZjtcbiAgLyogb3BhY2l0eTogMC44OyAqL1xufVxuLnRvYXN0LWNsb3NlLWJ1dHRvbjpob3Zlcixcbi50b2FzdC1jbG9zZS1idXR0b246Zm9jdXMge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi8qQWRkaXRpb25hbCBwcm9wZXJ0aWVzIGZvciBidXR0b24gdmVyc2lvblxuIGlPUyByZXF1aXJlcyB0aGUgYnV0dG9uIGVsZW1lbnQgaW5zdGVhZCBvZiBhbiBhbmNob3IgdGFnLlxuIElmIHlvdSB3YW50IHRoZSBhbmNob3IgdmVyc2lvbiwgaXQgcmVxdWlyZXMgYGhyZWY9XCIjXCJgLiovXG5idXR0b24udG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuLnRvYXN0LWNvbnRhaW5lciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cbi50b2FzdC1jb250YWluZXIgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4udG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgMCA2cHg7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNXB4IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTJweCAjOTk5OTk5O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHI6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTJweCAjMDAwMDAwO1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9pbmZvLWNpcmNsZS5zdmcgKi9cbi50b2FzdC1pbmZvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMjU2IDhDMTE5LjA0MyA4IDggMTE5LjA4MyA4IDI1NmMwIDEzNi45OTcgMTExLjA0MyAyNDggMjQ4IDI0OHMyNDgtMTExLjAwMyAyNDgtMjQ4QzUwNCAxMTkuMDgzIDM5Mi45NTcgOCAyNTYgOHptMCAxMTBjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHonLyUzRSUzQy9zdmclM0VcIik7XG59XG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci90aW1lcy1jaXJjbGUuc3ZnICovXG4udG9hc3QtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4em0xMjEuNiAzMTMuMWM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzM4IDM3Ny42Yy00LjcgNC43LTEyLjMgNC43LTE3IDBMMjU2IDMxMmwtNjUuMSA2NS42Yy00LjcgNC43LTEyLjMgNC43LTE3IDBMMTM0LjQgMzM4Yy00LjctNC43LTQuNy0xMi4zIDAtMTdsNjUuNi02NS02NS42LTY1LjFjLTQuNy00LjctNC43LTEyLjMgMC0xN2wzOS42LTM5LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDY1IDY1LjcgNjUuMS02NS42YzQuNy00LjcgMTIuMy00LjcgMTcgMGwzOS42IDM5LjZjNC43IDQuNyA0LjcgMTIuMyAwIDE3TDMxMiAyNTZsNjUuNiA2NS4xeicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2NoZWNrLnN2ZyAqL1xuLnRvYXN0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00xNzMuODk4IDQzOS40MDRsLTE2Ni40LTE2Ni40Yy05Ljk5Ny05Ljk5Ny05Ljk5Ny0yNi4yMDYgMC0zNi4yMDRsMzYuMjAzLTM2LjIwNGM5Ljk5Ny05Ljk5OCAyNi4yMDctOS45OTggMzYuMjA0IDBMMTkyIDMxMi42OSA0MzIuMDk1IDcyLjU5NmM5Ljk5Ny05Ljk5NyAyNi4yMDctOS45OTcgMzYuMjA0IDBsMzYuMjAzIDM2LjIwNGM5Ljk5NyA5Ljk5NyA5Ljk5NyAyNi4yMDYgMCAzNi4yMDRsLTI5NC40IDI5NC40MDFjLTkuOTk4IDkuOTk3LTI2LjIwNyA5Ljk5Ny0zNi4yMDQtLjAwMXonLyUzRSUzQy9zdmclM0VcIik7XG59XG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9leGNsYW1hdGlvbi10cmlhbmdsZS5zdmcgKi9cbi50b2FzdC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMicgd2lkdGg9JzU3NicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLnRvYXN0LWNvbnRhaW5lci50b2FzdC10b3AtY2VudGVyIC5uZ3gtdG9hc3RyLFxuLnRvYXN0LWNvbnRhaW5lci50b2FzdC1ib3R0b20tY2VudGVyIC5uZ3gtdG9hc3RyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnRvYXN0LWNvbnRhaW5lci50b2FzdC10b3AtZnVsbC13aWR0aCAubmd4LXRvYXN0cixcbi50b2FzdC1jb250YWluZXIudG9hc3QtYm90dG9tLWZ1bGwtd2lkdGggLm5neC10b2FzdHIge1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLm5neC10b2FzdHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwMzAzO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi50b2FzdC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxQTM1MTtcbn1cbi50b2FzdC1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCRDM2MkY7XG59XG4udG9hc3QtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyRjk2QjQ7XG59XG4udG9hc3Qtd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGODk0MDY7XG59XG4udG9hc3QtcHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAyNDBweCkge1xuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggNTBweDtcbiAgICB3aWR0aDogMTFlbTtcbiAgfVxuICAudG9hc3QtY29udGFpbmVyIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgIHJpZ2h0OiAtMC4yZW07XG4gICAgdG9wOiAtMC4yZW07XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDI0MXB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDUwcHg7XG4gICAgd2lkdGg6IDE4ZW07XG4gIH1cbiAgLnRvYXN0LWNvbnRhaW5lciAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgICByaWdodDogLTAuMmVtO1xuICAgIHRvcDogLTAuMmVtO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICAgIHdpZHRoOiAyNWVtO1xuICB9XG59XG4iXX0= */", '', '']];
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\pbl7\BookShopping\FE\BookShoppingFE\src\styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map