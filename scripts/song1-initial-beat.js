stack(
    note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>").sound("gm_string_ensemble_1")
        .lpf(slider(4068.6, 200, 6000))
        .gain(slider(1, 0, 1.0)),

    s("bd sd bd sd")
        .gain(slider(0.636, 0, 1.0)),

    note("a e").vib("<2 3 4 5>:6")
        .gain(slider(0.435, 0, 1.0)),

    s("hh*8").shape(0.2)
        .gain(slider(0.189, 0, 1.0))
)._scope()
