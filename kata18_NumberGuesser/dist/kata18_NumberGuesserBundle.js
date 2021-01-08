(()=>{
  let e = {277:e=>{
      "use strict"; e.exports = e=>{
        e = Object.assign({onlyFirst:!1},e); const t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|"); return new RegExp(t,e.onlyFirst ? void 0 : "g");
      };
    },161:(e,t,s)=>{
      "use strict"; let r = s(747),o = s(3); e.exports = function(e) {
        let t = (e = e || {}).sigint,s = e.eot,n = e.autocomplete = e.autocomplete || function() {
            return [];
          },i = e.history; return c.history = i || {save:function() {}},c.hide = function(e) {
          return c(e,{echo:""});
        },c; function c(e,o,c) {
          let u,l,p = 0,d = 0; c = c || {},Object(e) === e ? e = (c = e).ask : Object(o) === o && (o = (c = o).value),e = e || ""; let f = c.echo,g = "echo" in c; n = c.autocomplete || n; let w = "win32" === process.platform ? process.stdin.fd : r.openSync("/dev/tty","rs"),h = process.stdin.isRaw; h || process.stdin.setRawMode && process.stdin.setRawMode(!0); let b,v,k = Buffer.alloc(3),x = ""; l = "",e && process.stdout.write(e); for (let y = 0; ;) if ((v = r.readSync(w,k,0,3)) > 1) switch (k.toString()) {
          case "[A":if (g) break; if (!i) break; if (i.atStart()) break; i.atEnd() && (l = x,d = p),p = (x = i.prev()).length,process.stdout.write("[2K[0G" + e + x); break; case "[B":if (g) break; if (!i) break; if (i.pastEnd()) break; i.atPenultimate() ? (x = l,p = d,i.next()) : p = (x = i.next()).length,process.stdout.write("[2K[0G" + e + x + "[" + (p + e.length + 1) + "G"); break; case "[D":if (g) break; p - (p = --p < 0 ? 0 : p) && process.stdout.write("[1D"); break; case "[C":if (g) break; p = ++p > x.length ? x.length : p,process.stdout.write("[" + (p + e.length + 1) + "G"); break; default:k.toString() && (a(g,e,f,x = (x += k.toString()).replace(/\0/g,""),p = x.length),process.stdout.write("[" + (p + e.length + 1) + "G"),k = Buffer.alloc(3));
          } else {
            if (3 == (b = k[v - 1])) return process.stdout.write("^C\n"),r.closeSync(w),t && process.exit(130),process.stdin.setRawMode && process.stdin.setRawMode(h),null; if (4 == b && 0 == x.length && s && (process.stdout.write("exit\n"),process.exit(0)),13 == b) {
              if (r.closeSync(w),!i) break; !g && x.length && i.push(x),i.reset(); break;
            } if (9 == b) {
              if (x == (u = n(x))[0] ? u = n("") : u.length,0 == u.length) {
                process.stdout.write("\t"); continue;
              } let m = u[y++] || u[(y = 0,y++)]; m && (process.stdout.write("\r[K" + e + m),x = m,p = m.length);
            } if (127 == b || "win32" == process.platform && 8 == b) {
              if (!p) continue; x = x.slice(0,p - 1) + x.slice(p),p--,process.stdout.write("[2D");
            } else {
              if (b < 32 || b > 126) continue; x = x.slice(0,p) + String.fromCharCode(b) + x.slice(p),p++;
            }a(g,e,f,x,p);
          } return process.stdout.write("\n"),process.stdin.setRawMode && process.stdin.setRawMode(h),x || o || "";
        } function a(e,t,s,r,n) {
          if (e)process.stdout.write("[2K[0G" + t + Array(r.length + 1).join(s)); else {
            process.stdout.write("[s"),n == r.length || t ? process.stdout.write("[2K[0G" + t + r) : process.stdout.write("[2K[0G" + r + "[" + (r.length - n) + "D"); let i = o(t).length; process.stdout.write(`[${i + 1 + ("" == s ? 0 : n)}G`);
          }
        }
      };
    },3:(e,t,s)=>{
      "use strict"; const r = s(277),o = e=>"string" === typeof e ? e.replace(r(),"") : e; e.exports = o,e.exports.default = o;
    },747:e=>{
      "use strict"; e.exports = require("fs");
    }},t = {}; function s(r) {
    if (t[r]) return t[r].exports; let o = t[r] = {exports:{}}; return e[r](o,o.exports,s),o.exports;
  }(()=>{
    let e = s(161)(); const t = Math.floor(100 * Math.random()); let r = {},o = 0,n = 0; for (;t !== o;) {
      let s = Number(e("Guess a number: ")); !0 === r[s] ? console.log("Already Guessed!") : Object.is(NaN,s) ? console.log("Not a number! Try again!") : (n++,r[s] = !0,o = s,o > t ? console.log("Too High!") : o < t && console.log("Too Low!"));
    }console.log(`You answered: ${o} \n You got it! You took ${n} attempts!`);
  })();
})();