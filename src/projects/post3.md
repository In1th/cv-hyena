---

weight: 2
title: Modular Light Curtain 
description: "The presented work covers topics in fields such as digital and analog electronics, programming, metrology, optoelectronics, and mechanics. The proposed technical solution combines the functions of object detection and measurement within the detection zone. Thanks to its modular design, it is easy to adapt the detection area to the specifics of a given process. The work was graded 5.0 by the examination board, received a distinction, and won second place in the 2023 diploma thesis competition organized by the Białystok branch of SEP."
image: inzynierka_main.png
tags:
    - Engineering thesis

---
<!--introduction start-->
<h3 style="text-align:center;">Introduction</h3>
<div class="markdown-section">
    <p>
    The safety light curtain is an active optoelectronic protective device used in industry and general automation. Analyzing currently available solutions, current and future market needs, reviewing the literature on infrared radiation generation and detection methods and standards, allowed the accumulation of substantial theoretical knowledge. This enabled the implementation of original solutions enhancing the device’s functionality in areas such as ease of reconfiguration and adaptability to non-standard requirements. The presented solution combines object detection and measurement functionalities within the detection area. Thanks to the modular structure, the detection zone can be easily adapted to the specifics of a given process. This, in turn, leads to a reduction in the number of production variants of the same device model and optimization of manufacturing processes. Each module can be individually configured, allowing flexible adjustment of operating parameters for a selected section of the detection area. Additionally, the introduction of measurement functions opens possibilities for using the device not only in safety systems but also as a component in industrial applications.
    </p>
    <img style="width: 600px; height: 600px;" src="/inzynierka_main.png"/>
</div>
<!--introduction end-->

<!--section 2 start-->
<h3 style="text-align:center;">Electronics</h3>
<div class="markdown-section">
<img class="markdown-img" src="/Kurtyna_3.png"/>
<p>
An original electronic circuit was designed, combining solutions from digital electronics, analog electronics, and optoelectronics. The proposed solution was based on the STM32G070RBT6 microcontroller. The work presents the design stages of individual circuit components such as: the DC-DC converter, the safety output state measurement circuit, the construction and protection of the power input, digital input and output protection, 0–10V analog output protection against surges, reverse polarity, or excessive current flow, according to the defined technical requirements. For inter-module communication of data not critical to system safety, the I2C serial interface was selected. The project was implemented using KiCad EDA software for creating schematics and PCBs, and PSpice for TI software for simulating selected electronic circuits. To reduce production costs, the PCBs were designed so they could be used in both the receiver and transmitter modules by installing only the components required for each variant. To keep the device dimensions as small as possible, the circuit was split into two separate PCBs: the control board and the execution board with optoelectronic components. The PCBs are stacked vertically, with all necessary electrical connections made via a single connector—this solution reduces size and simplifies assembly.
</p>
</div>
<!--section 2 end-->




<!--section 3 start-->
<h3 style="text-align:center;">Mechanics</h3>
<div class="markdown-section">
<p>
The mechanical design of the modular light curtain included shaping the optical characteristics of the transmitter diodes and receiver phototransistors, creating a housing that provides protection and easy access to internal components, and designing a module-joining system with precise positioning. To shape the optical characteristics, a series of diaphragms with increasing diameters were used, enabling a relatively narrow angle of transmitted and received light. The housing is intended to protect internal components, allow easy access to configuration switches and connectors, and provide mounting options for connecting multiple modules. A transparent polycarbonate plate (transparent to the utilized wavelengths) was used to isolate the device interior from the external environment while maintaining visibility for the RGB signal LEDs. The module connection system is based on a pin that serves both as a positioning and clamping element between modules. Thanks to two additional locating pins, high positioning accuracy was achieved, and a constant distance between optoelectronic components was maintained.
</p>
<img class="markdown-img" src="/Kurtyna_4.png"/>
</div>
<!--section 3 end-->




<!--section 4 start-->
<h3 style="text-align:center;">Control</h3>
<div class="markdown-section">
<img class="markdown-img" src="/Kurtyna_5.png"/>
<p>
The code managing the device's operation was written in C using the STM32CubeIDE development environment. The written code uses a wide range of functionalities offered by the STM32G070RBT6 microcontroller, from basic handling of digital inputs and outputs to voltage measurements using analog-to-digital converters and I2C digital interface communication. The designed solution allows combining multiple modules to adapt the size of the detection zone. A master role in controlling the system is assumed by one of the transmitter modules. The main transmitter module is responsible for sending a synchronization signal to all other devices. All system components, both transmitter and receiver modules, wait for the synchronization pulse and then perform their assigned tasks. Implemented device tests include: short-circuit test of safety outputs to high potential, short-circuit test of safety output to ground, and external interference level test. The goal was to detect any faults that could compromise the device’s proper functioning. The device also uses indicator LEDs to visually represent device activation, beam break location that triggered the device, currently interrupted beams, operating mode, and signal strength received in receiver module setup mode.
</p>
</div>
<!--section 4 end-->
<!--3 photos side by side at bottom-->
<div class="mt-32 flex flex-col items-center">
    <img class="markdown-img" src="/Kurtyna_7.png"/>
    <img class="markdown-img" src="/Kurtyna_2.png"/>
    <img class="markdown-img" src="/Kurtyna_8.png"/>
</div>
