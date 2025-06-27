---
weight: 2
title: Compact EDM machine
description: "Project designed build and tested as my proposed master's thesis topic. The topic required the integration of technical solutions from fields such as electronics, mechanics, hydraulics, and metrology. The developed device aims to bring a wide range of unique advantages of EDM technology into a format that allows for broader adoption across various applications and environments. "
image: EDM_0.png
tags:
    - Master's thesis

---
<!--introduction start-->
<h3 style="text-align:center;">Introduction</h3>
<div class="flex items-center justify-center flex-col md:flex-row">
<p style="text-align: justify">
The electro-discharge machining process is based on a series of repetitive electrical discharges in the gap between the tool and the workpiece. The discharge is initiated by applying a voltage exceeding the dielectric strength of the medium, which leads to the formation of an ionized channel. As a result of the discharge, material on the surface of both the tool and the workpiece is evaporated or ejected in molten form. After the pulse ends, the dielectric fluid cools the area and removes the material, restoring the conditions for the next discharge.
</p>
<img class="aspect-square" style="width: clamp(200px, 600px, 600px);" src="/EDM_0.png"/>
</div>
<!--introduction end-->

<!--section 2 start-->
<h3 style="text-align:center;">Mechanical construction</h3>
<div class="markdown-section">
<img class="markdown-img" src="/EDM_1.png"/>
<p style="text-align: justify">
The mechanical construction of the device is based on a frame made of 40x40 mm aluminum profiles with T-slots, connected using angle brackets, screws, and M4 thumb nuts, which ensures solidity and ease of assembly. The dielectric fluid tank, with a capacity of 13 liters and made of stainless steel, is attached to the frame using mounts printed from PETG material. The machining table, made of aluminum alloy, has an L-shape and provides both component mounting and electrical connection to the pulse generator. The X and Y axes move on HGR15 linear guides driven by NEMA 17 stepper motors, and linear motion is transmitted via SFU1204 ball screws. The design is economical and allows precise positioning while providing stiffness to the entire system.
</p>
</div>
<!--section 2 end-->



<!--section 3 start-->
<h3 style="text-align:center;">Electrical discharge generator</h3>
<div class="markdown-section">
<p style="text-align: justify">
The electric discharge generator is used to generate short, high-current pulses. Generated pulses are in range of 5 µs to 200 µs, adjustable in 1 µs steps, with a maximum duty cycle (pulse duration plus pause) not exceeding 50%. The device generates a 100V output voltage to initiate the discharge and allows precise regulation of the discharge current in the range from 1A to 20A, using power resistors to limit the current. The generator measures key process parameters such as the differential voltage between the electrodes and the average discharge current, and communicates with an external control system via an RS-485 interface.
</p>
<img class="markdown-img" src="/EDM_2.png"/>
</div>
<!--section 3 end-->




<!--section 4 start-->
<h3 style="text-align:center;">Wire handeling system</h3>
<div class="markdown-section">
<img class="markdown-img" src="/EDM_4.png"/>
<p style="text-align: justify">
The device uses a 0.25 mm brass wire as the electrode, unwound from a 4 kg spool on a bearing-supported shaft and guided via a PTFE tube. A V-groove upper guide roller increases the contact surface with the tensioning roller, which is coated with polyurethane to enhance grip without deforming the wire, which applies tension via a braking mechanism.The wire passes through upper and lower heads for positioning and electrical connection to the generator. The upper head moves along a Z-axis linear guide (MGN12) with manual height adjustment (4 mm steps) and ±3 mm Y-axis tuning; the lower head offers ±3 mm X-axis adjustment for alignment. The drive system pulls the wire using a 40 mm polyurethane-coated roller on a NEMA 17 motor. Contact is maintained with spring-loaded pressure rollers. Components are 3D printed (FFF) from carbon fiber-reinforced polymer, with polymer bearings for submerged operation. Used wire is fed into a PTFE tube leading to a cutting unit.
</p>
</div>
<!--section 4 end-->


<!--vertical spacing -->
<br>
<br>
<br>

<h1 style="text-align:center;">ASSEMBLED DEVICE</h1>

<!--vertical spacing -->
<br>


<!--BIG AHH SIGNLE PHOTO-->
<img style="display: block; margin-left: auto; margin-right: auto; width: 90%;" src="/EDM_3.png"/>
<br>
<br>
<br>

<!--3 photos side by side at bottom-->
<div style="display: flex; flex-direction: row; align-items: center; text-align: justify;">
<img style="display: block; margin-left: auto; margin-right: auto; width: 30%;" src="/EDM_5.png"/>
<img style="display: block; margin-left: auto; margin-right: auto; width: 30%;" src="/EDM_6.png"/>
<img style="display: block; margin-left: auto; margin-right: auto; width: 30%;" src="/EDM_7.png"/>
</div>






<!--old stuff
number_of_tiles: 1

image1: Scara_2.png
Text_size_1: 1
Text1: "Post w budowie "


image2: Placeholder_photo.png
Text_size_2: 1
Text2: "TEKST 2"


image3: Placeholder_photo.png
Text_size_3: 1
Text3: "TEKST 3"


image4: Placeholder_photo.png
Text_size_4: 1
Text4: "TEKST 4"


image5: Placeholder_photo.png
Text_size_5: 1
Text5: "TEKST 5"


image6: Placeholder_photo.png
Text_size_6: 1
Text6: "TEKST 6"

Gallery_image1: Scara_4.jpg
Gallery_image2: Scara_5.jpg
Gallery_image3: Scara_4.jpg

---

## Markdown

-->

