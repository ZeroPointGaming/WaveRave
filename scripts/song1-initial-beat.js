let snareFill = every(8, (p) => p.fast(2), s("sd ~ ~ sd sd sd sd sd"))
        .room(0.1).shape(0.1).delay(0.05).delayfeedback(0.1);

let hatFill = every(8, (p) => p.fast(2), s("9000_hh*4")).shape(0.3).room(0.1);

let melody = s("supersaw").seg(16).lpf(tri.range(100, 5000).slow(2));

let weewoo = note("a e").vib("<2 3 4 5>:6").gain(slider(1, 0, 1.0));

stack(
    note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>").sound("gm_electric_guitar_clean")
       .lpf(slider(2630.2, 200, 6000)).gain(slider(1.596, 0, 2.0)),

    every(4, (p) => p.fast(2), s("bd ~ bd ~")).sound("9000_bd").gain(slider(1, 0, 1.0)).delay(0.05).delayfeedback(0.1).shape(0.4),
  
    hatFill.gain(slider(0.409, 0, 1.0)),
  
    snareFill.gain(slider(0.371, 0, 1.0)),

    melody.gain(slider(0, 0, 1.0))
)._scope()
