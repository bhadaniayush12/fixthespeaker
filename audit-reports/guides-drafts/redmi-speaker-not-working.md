---
title: "Redmi Speaker Not Working: Practical Fixes That Help"
description: "Troubleshoot no sound or low volume on your Redmi or Xiaomi phone using MIUI Clear Speaker, audio settings, and safe mesh cleaning."
slug: "redmi-speaker-not-working"
target_query: "redmi speaker not working"
sources:
  - "https://support.google.com/android/answer/9083864"
---

If the speaker on your Redmi or Xiaomi phone is silent, muffled, or crackling, the issue is usually caused by accumulated dust in the bottom speaker cutouts, a software audio glitch, or a stuck headphone mode icon. You can resolve most Redmi speaker problems at home by running Xiaomi's built-in "Clear speaker" audio purge tool, cleaning the exterior grille with a soft dry brush, and checking headphone detection settings. If sound remains dead across all diagnostic tests, hardware replacement of the bottom sub-board speaker module may be required.

Redmi smartphones use modular construction, meaning the loudspeaker module sits on a separate sub-board at the bottom of the device connected to the mainboard by a thin ribbon cable.

## Quick fix steps

Work through these troubleshooting steps in order:

1. **Restart your Redmi phone.** A simple reboot restarts Android audio servers, clearing temporary process crashes caused by media apps or call recorders.
2. **Run Xiaomi's built-in "Clear speaker" tool.** Xiaomi includes an acoustic cleaning utility in MIUI and HyperOS. On many models, go to **Settings > Additional settings > Clear speaker**. Toggle the feature on to play a high-amplitude 30-second audio sweep designed to blow dust and moisture out of the chamber. Run this cycle 2 to 5 times while gently shaking the device.
3. **Check for a stuck headphone icon in the status bar.** A common fault on Redmi phones with 3.5mm jacks is lint or moisture inside the jack triggering the hardware sensor. If your phone displays a headset icon when nothing is plugged in, audio routes to the empty jack. Inspect the 3.5mm port and remove lint using a dry wooden toothpick.
4. **Use an online acoustic ejection tone.** If your Redmi model lacks the built-in "Clear speaker" menu, open our [Fix Android Speaker tool](/fix-android-speaker). Playing our 165Hz tone at maximum volume replicates the diaphragm vibration of the native Xiaomi tool.
5. **Clean the bottom grille perforations gently.** Use a clean, dry, soft-bristled toothbrush to lightly sweep across the bottom speaker holes at an angle. Avoid poking pins or sharp objects into the holes.
6. **Disable Absolute Volume and sound effects in settings.** Navigate to **Settings > Sound & vibration > Sound effects**. Reset equalizers and preset profiles to standard.
7. **Run the CIT hardware diagnostic test.** Go to **Settings > About phone > Detailed info and specs**, then tap **Kernel version** five times. In the CIT menu, tap **Speaker** or **Receiver** to test raw hardware output.

## Why it happens

Redmi and Xiaomi devices encounter speaker issues due to hardware design and software configurations:

- **Heavy dust accumulation in budget speaker grilles:** Many Redmi devices feature relatively large circular perforations along the bottom edge without a secondary outer filter. Pocket lint and dust enter easily, settling on the speaker cone.
- **Sub-board flex cable loosening:** In many Redmi models, the loudspeaker is mounted on a lower daughterboard connected to the motherboard by an FPC cable. Drops can loosen this connector, causing intermittent sound or silence.
- **Headphone jack sensor corrosion:** Devices equipped with 3.5mm jacks have mechanical switch contacts. When moisture enters the jack, oxidation bridges contacts, tricking the OS into believing headphones are connected.
- **Audio profile conflicts in MIUI/HyperOS:** Aggressive battery optimization in Xiaomi software can suspend background audio services or freeze media playback daemons.

If you are dealing with low call volume specifically, read our guide on [earpiece speaker not working during calls](/guides/earpiece-speaker-not-working-calls). For general volume issues across Android devices, consult our guide on [how to fix phone speaker low volume](/guides/phone-speaker-low-volume-fix).

## Unsafe repair and cleaning practices to avoid

Avoid these common mistakes that often cause permanent damage:

- **Do not poke sewing needles or pins into the speaker holes.** The speaker cone sits directly behind the holes; metal pins puncture the membrane.
- **Do not spray isopropyl alcohol directly into the speaker or port.** Solvents dissolve the glue bonding the speaker cone to its frame.
- **Do not blast the speaker with air compressor nozzles.** High air pressure tears the delicate polymer speaker diaphragm.
- **Avoid third-party "volume booster" apps.** These apps override system gain limits, causing digital clipping that overheats and burns out the voice coil.

## When it's real damage (and when to get repairs)

If CIT hardware tests emit no sound or output only distorted static, the problem is physical hardware. Contact an authorized service center if:

- **The CIT test fails completely.** If the hardware test produces zero sound, the loudspeaker module, sub-board, or audio IC has failed.
- **Audio cuts in and out when pressing the back cover.** This symptom directly indicates a loose sub-board flex cable or cracked solder joint.
- **The speaker emits a burning smell or excessive heat.** If the bottom edge of the phone gets hot during audio playback, the amplifier chip or coil is short-circuited.
- **Failure followed water submersion.** Redmi entry-level devices generally lack high IP water resistance ratings (often carrying only splash-resistant P2i coatings or IP53). Water ingress rapidly corrodes the sub-board.

Because Redmi devices use modular sub-boards, replacing a damaged loudspeaker unit is straightforward and inexpensive compared to premium flagships.

To understand whether your audio issue is caused by physical dirt or permanent coil damage, review our diagnostic guide on [phone speaker dust vs damage test](/guides/phone-speaker-dust-vs-damage-test).

## Frequently asked questions

### Where is the "Clear speaker" setting in newer Xiaomi HyperOS phones?
In some HyperOS updates, Xiaomi relocated or removed the direct "Clear speaker" toggle on specific models. If it is not present under **Settings > Additional settings**, you can use our browser-based water and dust eject tool to produce the exact same acoustic cleaning frequency.

### Why does my Redmi phone think headphones are plugged in?
This happens when dirt, lint, or moisture shorts the sensor pins inside the 3.5mm headphone jack. Shine a light into the jack, carefully remove lint with a dry toothpick, or insert and remove a headphone plug several times to release the stuck mechanical switch.

### Can a factory reset fix a dead Redmi speaker?
A factory reset only fixes audio problems caused by corrupt system files or rogue third-party equalizer apps. If the CIT hardware test fails to produce sound, a factory reset will not solve the issue because the fault is physical.

### How much does it cost to fix a broken Redmi speaker?
For current pricing on speaker module replacement, contact your nearest Xiaomi authorized service center directly, as costs vary by model and region.

## How we made this guide

This guide is based on official support pages from Google, linked above. We have not tested every phone model ourselves. If a step here ever conflicts with your manufacturer's own instructions, follow the manufacturer.

## Image plan

1. **MIUI/HyperOS Clear Speaker Menu Screenshot**
   - **Type:** Annotated smartphone screenshot.
   - **Visual contents:** The Xiaomi settings menu displaying "Additional settings > Clear speaker" with the active toggle switch, 30-second timer explanation, and volume warning text.
   - **Callout labels:** "Settings > Additional settings > Clear speaker", "30-second acoustic purge cycle", "Turn volume to maximum", "Run 2-5 times for heavy dust".

2. **Redmi Sub-Board Modular Assembly Diagram**
   - **Type:** Exploded view technical diagram.
   - **Visual contents:** Bottom section of a Redmi smartphone showing the back cover removed, the modular loudspeaker box, the USB-C/headphone sub-board, and the connecting ribbon cable leading to the motherboard.
   - **Callout labels:** "Modular loudspeaker box", "Sub-board connecting ribbon cable (check if loose)", "Bottom speaker grille perforations", "3.5mm headphone switch contacts".
