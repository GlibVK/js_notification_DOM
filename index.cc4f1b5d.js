var e=function(e,t,n,i,a){var o=document.createElement("div"),s=document.createElement("h2"),c=document.createElement("p");o.className="notification ".concat(a),o.style.top="".concat(e,"px"),o.style.right="".concat(t,"px"),s.className="title",s.innerText=n,c.innerText=i,setTimeout(function(){return o.style.display="none"},2e3),o.append(s),o.append(c),document.body.append(o)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.cc4f1b5d.js.map